"""Offline verdict reference. No network/persistence. Host context MUST be trusted.

Usage: python validate_verdict.py input.json
This validates a proposal and computes a semantic result, not a Creatio PATCH.
Host adapters must derive factor scores/guard flags, enforce permissions/leases,
resolve lookup IDs, persist via an allowlist and read back.
"""
import json
import math
import sys
from pathlib import Path

ROLES = {'developer', 'architect', 'builder', 'dealer'}
KEYS = {'intakeId', 'matchType', 'matchedProjectId', 'matchConfidence',
        'decisionConfidence', 'recommendedAction', 'matchReason',
        'accountMatches', 'missingInfo', 'summary'}
ACTIONS = {
    'exact': {'Duplicate – no action', 'Update existing project'},
    'existing-update': {'Update existing project'},
    'new-phase': {'Link as new phase'},
    'renamed': {'Update existing project'},
    'cross-source': {'Duplicate – no action', 'Update existing project'},
    'none': {'Create new project', 'Discard (low value)'},
    'ambiguous': {None},
}

def require(condition, message):
    if not condition:
        raise ValueError(message)

def number(value, low=0, high=100):
    require(type(value) in (int, float) and math.isfinite(value)
            and low <= value <= high, 'Invalid finite numeric range')
    return value

def strings(value):
    require(isinstance(value, list) and all(isinstance(x, str) and x.strip() for x in value),
            'Expected nonempty string list')
    return value

def evaluate(ctx):
    i, p, policy = ctx['intake'], ctx['proposal'], ctx['policy']
    require(i['status'] in {'New', 'Needs review', 'Ready to apply', 'Failed'}, 'Protected/unsupported lifecycle')
    require(i['reviewerOwned'] is False and i['versionCurrent'] is True, 'Reviewer ownership or stale input conflict')
    for flag in ('searchComplete', 'phaseOrRename', 'ambiguousAccounts', 'conflictingEvidence'):
        require(type(ctx[flag]) is bool, 'Guard flags must be host booleans')
    require(policy['approved'] is True, 'Scoring policy requires administrator approval')
    require(set(p) == KEYS, 'Unexpected or missing proposal fields')
    require(p['intakeId'] == i['id'], 'Wrong intake ID')
    require(p['matchType'] in ACTIONS, 'Unknown match type')
    require(p['recommendedAction'] in ACTIONS[p['matchType']], 'Incompatible match/action')
    for key in ('matchReason', 'summary'):
        require(isinstance(p[key], str) and bool(p[key].strip()), 'Missing evidence/summary')
    match_conf = number(p['matchConfidence']); confidence = number(p['decisionConfidence'])
    project = p['matchedProjectId']
    if project is not None:
        require(project in ctx['candidateProjectIds'], 'Project ID not supplied by candidate retrieval')
    if p['matchType'] not in {'none', 'ambiguous'}:
        require(project is not None, 'Match requires candidate project')
    if p['matchType'] == 'none':
        require(project is None and match_conf == 0, 'No-match requires null project and zero match confidence')
    if p['recommendedAction'] == 'Discard (low value)':
        require(policy.get('allowDiscard') is True and ctx.get('discardEligible') is True,
                'Discard requires approved eligibility rule and host evidence')
    require(set(p['accountMatches']) == ROLES, 'Account roles differ from contract')
    for role, match in p['accountMatches'].items():
        if match is None:
            continue
        require(isinstance(match, dict) and set(match) == {'accountId', 'confidence', 'evidence'}, 'Invalid account match')
        require(match['accountId'] in ctx['accountCandidateIds'][role], 'Account ID not supplied for role')
        number(match['confidence'])
        require(isinstance(match['evidence'], str) and match['evidence'].strip(), 'Account evidence required')
    factors = ctx['factors']
    expected = set(policy['factorKeys'])
    require(factors and len(expected) == len(policy['factorKeys']), 'Invalid factor configuration')
    require({f['key'] for f in factors} == expected and len(factors) == len(expected), 'Missing/duplicate factor keys')
    require(len({f['id'] for f in factors}) == len(factors), 'Duplicate factor IDs')
    for f in factors:
        require(isinstance(f['id'], str) and f['id'], 'Missing factor ID')
        number(f['weight'])
        require(isinstance(f['evidence'], str) and f['evidence'].strip(), 'Factor evidence required')
    require(abs(sum(f['weight'] for f in factors)-100) < 0.000001, 'Active weights must total 100')
    unknown = []; breakdown = []; total = 0.0
    for f in factors:
        v = f['normalized']; contribution = None
        if v is None:
            unknown.append(f['key'])
        else:
            contribution = f['weight'] * number(v) / 100
            total += contribution
        breakdown.append({**f, 'contribution': None if contribution is None else round(contribution, 4)})
    ready = number(policy['readyThreshold']); review = number(policy['reviewThreshold'])
    require(review <= ready, 'Review threshold exceeds ready threshold')
    bands = policy['priorityBands']
    require(len(bands) > 0 and bands[-1]['minScore'] == 0, 'Priority bands must cover zero')
    limits = [number(b['minScore']) for b in bands]
    require(all(limits[n] > limits[n+1] for n in range(len(limits)-1)), 'Bands must strictly descend')
    require(all(isinstance(b['name'], str) and b['name'].strip() for b in bands), 'Band names required')
    missing = list(dict.fromkeys(strings(ctx['requiredMissing']) + strings(p['missingInfo'])))
    reasons = list(missing)
    if ctx['phaseOrRename'] or p['matchType'] in {'new-phase', 'renamed'}:
        reasons.append('Phase or rename requires human review')
    if ctx['ambiguousAccounts']:
        reasons.append('Stakeholder identity requires review')
    if ctx['conflictingEvidence']:
        reasons.append('Conflicting evidence')
    if not ctx['searchComplete']:
        reasons.append('Candidate search incomplete')
    if p['matchType'] == 'ambiguous':
        reasons.append('Project identity unresolved')
    if unknown:
        reasons.append('Unknown factor evidence: ' + ', '.join(unknown))
    effective_confidence = min(confidence, match_conf) if project else confidence
    if effective_confidence < ready:
        reasons.append('Low-confidence escalation' if effective_confidence < review else 'Below ready threshold')
    score = None if unknown else round(total, 2)
    priority = 'Data Incomplete' if score is None else next(b['name'] for b in bands if score >= b['minScore'])
    return {'intakeId': i['id'], 'status': 'Needs review' if reasons else 'Ready to apply',
            'score': score, 'scoreUnknown': score is None, 'priority': priority,
            'matchedProjectId': project, 'matchConfidence': match_conf,
            'decisionConfidence': confidence, 'recommendedAction': p['recommendedAction'],
            'reviewReasons': list(dict.fromkeys(reasons)), 'factorBreakdown': breakdown,
            'policyVersion': policy['version'], 'saved': False}

if __name__ == '__main__':
    try:
        result = evaluate(json.loads(Path(sys.argv[1]).read_text(encoding='utf-8-sig')))
        print(json.dumps(result, indent=2, allow_nan=False))
    except (ValueError, KeyError, TypeError, IndexError) as error:
        print(json.dumps({'outcome': 'validation_failed', 'error': str(error), 'saved': False}))
        sys.exit(1)
