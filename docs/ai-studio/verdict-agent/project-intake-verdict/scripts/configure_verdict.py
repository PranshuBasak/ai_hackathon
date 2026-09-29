"""Offline configuration adapter. Reads no CRM and performs no writes.

Production host must supply verified facts and actual row IDs, not model-authored
configuration, normalized scores, identity statuses or query-success assertions.
"""
import copy
import hashlib
import json
import math

from validate_verdict import evaluate, number, require

FACTOR_KEYS = {'construction_value', 'units', 'type_fit', 'stage', 'architect',
               'dealer', 'developer_relationship', 'region'}
IDENTITIES = {'developer_identity', 'architect_identity', 'builder_identity', 'dealer_identity'}
REQUIRED_KEYS = FACTOR_KEYS | IDENTITIES | {'project_name', 'usable_location',
                                          'bid_date', 'start_date', 'completion_date',
                                          'contact_name', 'contact_email'}
GUARDS = {'phase_or_rename', 'unresolved_stakeholder', 'missing_required',
          'conflicting_evidence', 'incomplete_search'}


def canonical(value):
    return json.dumps(value, sort_keys=True, separators=(',', ':'),
                      ensure_ascii=False, allow_nan=False)


def digest(value):
    return hashlib.sha256(canonical(value).encode('utf-8')).hexdigest()


def factor_hash(rows):
    records = [{'Name': r['Name'], 'UsrWeight': r['UsrWeight'],
                'UsrIsActive': r['UsrIsActive'],
                'description': json.loads(r['UsrDescription'])} for r in rows]
    return digest(sorted(records, key=lambda r: r['description']['key']))


def validate_rule(rule):
    require(isinstance(rule, dict), 'Rule must be an object')
    if rule.get('kind') == 'bands':
        require(set(rule) == {'kind', 'integer', 'bands'}, 'Unknown band rule properties')
        require(type(rule['integer']) is bool, 'integer flag required')
        bands = rule['bands']
        require(isinstance(bands, list) and bands and bands[-1]['min'] == 0,
                'Bands must cover nonnegative values')
        limits = []
        for band in bands:
            require(set(band) == {'min', 'score'}, 'Invalid band')
            minimum = band['min']
            require(type(minimum) in (int, float) and math.isfinite(minimum)
                    and minimum >= 0, 'Invalid band minimum')
            if rule['integer']:
                require(float(minimum).is_integer(), 'Integer band boundary required')
            number(band['score'])
            limits.append(minimum)
        require(all(a > b for a, b in zip(limits, limits[1:])), 'Bands must strictly descend')
    elif rule.get('kind') == 'map':
        require(set(rule) == {'kind', 'values'}, 'Unknown map rule properties')
        values = rule['values']
        require(isinstance(values, dict) and values, 'Empty map')
        require(all(isinstance(k, str) and k and k == k.strip().casefold() for k in values),
                'Map keys must be canonical lowercase text')
        for value in values.values():
            number(value)
    else:
        raise ValueError('Unsupported rule kind')


def normalize(rule, value):
    if value is None:
        return None
    if rule['kind'] == 'map':
        require(isinstance(value, str), 'Map fact must be text or null')
        return rule['values'].get(value.strip().casefold())
    require(type(value) in (int, float) and math.isfinite(value) and value >= 0,
            'Numeric fact must be nonnegative, finite, or null')
    if rule['integer']:
        require(float(value).is_integer(), 'Integer fact required')
    return next(b['score'] for b in rule['bands'] if value >= b['min'])


def prepare(rows, policy, settings, facts):
    """Validate a live config snapshot and derive deterministic scoring inputs."""
    require(policy['formatVersion'] == 1 and policy['approved'] is True,
            'Configuration requires explicit administrator approval')
    require(isinstance(policy['version'], str) and policy['version'].strip(), 'Policy version required')
    require(set(policy['reviewRules']) == GUARDS, 'Mandatory review rules cannot be disabled')
    require(policy['allowDiscard'] is False, 'This adapter does not implement discard eligibility')
    required = policy['requiredFacts']
    require(isinstance(required, list) and len(set(required)) == len(required)
            and set(required) <= REQUIRED_KEYS, 'Unknown/duplicate required fact')
    require(policy['factorConfigHash'] == factor_hash(rows),
            'Factor configuration changed: review policy hash and approval')
    ready = number(settings['UsrIntakeAutoApplyThreshold'])
    review = number(settings['UsrIntakeReviewThreshold'])
    require(review <= ready, 'Review threshold exceeds ready threshold')
    factors, seen, ids = [], set(), set()
    for row in rows:
        require(isinstance(row['Id'], str) and row['Id'] and row['Id'] not in ids,
                'Missing/duplicate live factor ID')
        ids.add(row['Id'])
        require(type(row['UsrIsActive']) is bool, 'Active must be boolean')
        number(row['UsrWeight'])
        desc = json.loads(row['UsrDescription'])
        require(set(desc) == {'formatVersion', 'key', 'guidance', 'rule'}
                and desc['formatVersion'] == 1, 'Unsupported factor description format')
        key = desc['key']
        require(key in FACTOR_KEYS and key not in seen, 'Unknown/duplicate factor key')
        seen.add(key)
        validate_rule(desc['rule'])
        if not row['UsrIsActive']:
            continue
        fact = facts.get(key, {'value': None, 'evidence': 'No verified source available'})
        require(isinstance(fact['evidence'], str) and fact['evidence'].strip(), 'Fact evidence required')
        factors.append({'id': row['Id'], 'key': key, 'weight': row['UsrWeight'],
                        'normalized': normalize(desc['rule'], fact['value']),
                        'evidence': fact['evidence']})
    require(factors and {f['key'] for f in factors} == set(policy['factorKeys'])
            and len(policy['factorKeys']) == len(factors), 'Active factors differ from policy')
    require(abs(sum(f['weight'] for f in factors) - 100) < 0.000001, 'Active weights must total 100')
    scores = {f['key']: f['normalized'] for f in factors}
    missing = []
    for key in required:
        fact = facts.get(key, {})
        value = fact.get('value')
        present = value is not None and value is not False and value != ''
        if isinstance(value, str):
            present = bool(value.strip())
        if key in FACTOR_KEYS:
            # Evaluate required facts even if their scoring factor is disabled.
            row = next((r for r in rows if json.loads(r['UsrDescription'])['key'] == key), None)
            present = row is not None and normalize(json.loads(row['UsrDescription'])['rule'], value) is not None
        if key in IDENTITIES:
            present = value in ('resolved', 'approved_new')
        if key == 'usable_location':
            present = value is True
        if not present or not isinstance(fact.get('evidence'), str) or not fact['evidence'].strip():
            missing.append('Required information: ' + key)
    unresolved = any(facts.get(key, {}).get('value') not in ('resolved', 'approved_new') for key in IDENTITIES)
    snapshot = {'policy': copy.deepcopy(policy), 'factorRows': copy.deepcopy(rows),
                'thresholdSettings': copy.deepcopy(settings)}
    effective = {**policy, 'readyThreshold': ready, 'reviewThreshold': review}
    return {'policy': effective, 'factors': factors, 'requiredMissing': missing,
            'unresolvedStakeholders': unresolved, 'configurationSnapshot': snapshot,
            'configurationHash': digest(snapshot)}


def evaluate_configured(ctx, rows, policy, settings, facts):
    prepared = prepare(rows, policy, settings, facts)
    trusted = copy.deepcopy(ctx)
    trusted.update({key: prepared[key] for key in ('policy', 'factors')})
    trusted['requiredMissing'] = list(dict.fromkeys(ctx['requiredMissing'] + prepared['requiredMissing']))
    require(type(ctx['ambiguousAccounts']) is bool, 'Host ambiguity flag required')
    trusted['ambiguousAccounts'] = ctx['ambiguousAccounts'] or prepared['unresolvedStakeholders']
    result = evaluate(trusted)
    result.update({key: prepared[key] for key in ('configurationHash', 'configurationSnapshot')})
    return result
