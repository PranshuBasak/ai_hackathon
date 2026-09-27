"""Prepare reviewed DataService payloads locally; never sends requests or changes the manifest."""
import csv
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
lookups = json.loads((ROOT / 'evidence/fixture-lookup-resolution.json').read_text())['lookups']
lookups.update(json.loads((ROOT / 'evidence/fixture-additional-lookups.json').read_text()))
missing = set()

def rows(name):
    with (ROOT / 'seed-data' / name).open(encoding='utf-8-sig', newline='') as f:
        return list(csv.DictReader(f))

def resolve(schema, name):
    matches = [r['Id'] for r in lookups[schema]['value'] if r['Name'] == name]
    if len(matches) != 1:
        missing.add((schema, name, len(matches)))
        return None
    return matches[0]

accounts = rows('accounts.csv')
contacts = rows('contacts.csv')
account_ids = {r['Name']: r['Id'] for r in accounts}
contact_ids = {r['Name']: r['Id'] for r in contacts}
groups = {}

def op(schema, row, references=None, numbers=None, omit=()):
    values = {}
    for col, val in row.items():
        if col in ('Id', 'SeedTag') or col in omit or val == '':
            continue
        typ = 1
        if col in (references or {}):
            typ = 10
            ref = references[col]
            val = ref(val) if callable(ref) else resolve(ref, val)
        elif col in (numbers or {}):
            typ = numbers[col]
            val = val.lower() == 'true' if typ == 12 else int(val) if typ == 4 else float(val)
        values[col] = {'data-value-type': typ, 'value': val}
    return {'operation': 'insert', 'schema-name': schema, 'record-id': row['Id'], 'values': values}

groups['Account'] = [op('Account', r, {'Type': 'AccountType', 'AccountCategory': 'AccountCategory'}) for r in accounts]
groups['Contact'] = [op('Contact', r, {'Account': account_ids.__getitem__}) for r in contacts]
groups['Project'] = [op('Project', r, {
    'Account': account_ids.__getitem__, 'Type': 'ProjectType', 'Status': 'ProjectStatus',
    'ProjectEntryType': lambda _: resolve('ProjectEntryType', 'Project'),
    'Owner': lambda _: '410006e1-ca4e-4502-a9ec-e54d922d2c00',
    'UsrExternalSource': 'UsrADIntelligenceSource', 'UsrCity': 'City',
    'UsrProjectCountry': 'Country', 'UsrConstructionStage': 'UsrConstructionStage',
    'UsrPriorityClassification': 'UsrADProjectPriority', 'ParentProject': lambda v: v
}, {'UsrEstimatedProjectValue': 6, 'UsrNumberOfUnits': 4}, omit=('Opportunity',)) for r in rows('projects.csv')]
groups['UsrADProjectParty'] = [op('UsrADProjectParty', r, {
    'UsrProject': lambda v: v, 'UsrAccount': account_ids.__getitem__,
    'UsrContact': lambda v: contact_ids.get(v, v), 'UsrPartyRole': 'UsrADStakeholderRole',
    'UsrSourceIntake': lambda v: v
}, {'UsrIsPrimary': 12}) for r in rows('participants.csv')]
groups['Opportunity'] = [op('Opportunity', r, {
    'Account': account_ids.__getitem__, 'Partner': account_ids.__getitem__,
    'Stage': lambda _: resolve('OpportunityStage', 'Qualification'), 'UsrADProject': lambda v: v
}, {'Budget': 6}) for r in rows('opportunities.csv')]
groups['OpportunityContact'] = [op('OpportunityContact', r, {
    'Opportunity': lambda v: v, 'Contact': lambda v: v, 'Role': 'OppContactRole'
}) for r in rows('opportunity_contacts.csv')]
groups['ProjectOpportunityLinks'] = [{
    'operation': 'update', 'schema-name': 'Project', 'record-id': r['Id'],
    'values': {'Opportunity': {'data-value-type': 10, 'value': r['Opportunity']}}
} for r in rows('projects.csv') if r['Opportunity']]

result = {
    'environment': 'ai_hackathon', 'state': 'PREPARED_NOT_EXECUTED',
    'requiredGates': ['Successful C# compile and restart', 'Listener runtime test',
                      'Resolve every missing lookup', 'Collision checks',
                      'Confirm inherited required fields and role metadata', 'Prepare supported seed tags'],
    'missingLookups': sorted(missing), 'operations': groups
}
target = ROOT / 'evidence/fixture-payloads-prepared.json'
target.write_text(json.dumps(result, indent=2), encoding='utf-8')
print(json.dumps({'file': str(target), 'counts': {k: len(v) for k,v in groups.items()}, 'missing': sorted(missing)}))
