"""Record the completed 2026-09-27 Clio import from saved read-back evidence."""
import json
from pathlib import Path

root = Path(__file__).resolve().parents[1]
evidence = json.loads((root / 'evidence/demo-readback-2026-09-27.json').read_text())
path = root / 'seed-data/fixture-manifest.json'
m = json.loads(path.read_text())
for entity, rows in m['baseline'].items():
    live = {r['Id'] for r in evidence['readbacks'][entity]['value']}
    for row in rows:
        assert row['id'] in live, (entity, row['id'])
        row.update(loaded=True, verifiedOn='2026-09-27')
live = {r['Id'] for r in evidence['readbacks']['UsrADProjectIntelligence']['value']}
for row in m['intakeKeys']:
    assert row['id'] in live
    row.update(loaded=True, verifiedOn='2026-09-27')
for row in m['supportingLookups']:
    assert any(r['Id'] == row['id'] for r in evidence['readbacks'][row['entity']]['value'])
    row.update(loaded=True, verifiedOn='2026-09-27', resetPolicy='Preserve shared lookup unless separately reviewed and unreferenced')
for row in m['runRecords']:
    if row['key'] == 'foundation-runtime-smoke':
        row['state'] = 'NOT_USED_FIRST_DEMO_INTAKE_TESTED_INSTEAD'
m.update(state='LOADED_VERIFIED', verifiedOn='2026-09-27', loadMethod='Clio OData create and update', evidence='evidence/demo-readback-2026-09-27.json', tagsInstalled=False, tagNote='HackathonSeed remains local metadata; exact manifest GUIDs identify loaded fixtures. Platform tag links are not installed.')
path.write_text(json.dumps(m, indent=2), encoding='utf-8')

p = root / 'docs/06-checklist.md'
lines = p.read_text(encoding='utf-8').splitlines()
replacements = {
    'Regenerate/compile/restart': '| Regenerate/compile/restart (user follow-up) | Verified complete | Administrator | Saved compile success; user confirms no active compile and restart; successful runtime insert 2026-09-27 | Retain evidence | 2026-09-27 |',
    'Baseline loaded': '| Baseline loaded (F4) | Verified complete | Data steward | demo-readback-2026-09-27.json: 20 accounts, 15 contacts, 25 projects, 95 participants, 8 opportunities, 8 opportunity contacts and 8 project links | Use manifest for scoped reset; platform tags pending | 2026-09-27 |',
    'Import/reimport 15 rows': '| Import/reimport 15 rows (F5/T01/T02) | Partial | Tester | Clio loaded/read back 15 New fixtures; original nine preserved; zero intake Leads | Saved wizard mapping and reimport preservation test remain | 2026-09-27 |',
    'Manual create/default execution': '| Manual create/default execution (F4/F5) | Partial | Tester | Clio inserts verify PI numbers, received timestamps and New defaults | Manual UI create acceptance remains; user prefers Clio for record verification | 2026-09-27 |',
}
for i,line in enumerate(lines):
    if line.startswith('Updated '):
        lines[i] = line.replace('2026-09-26', '2026-09-27', 1)
    for key,new in replacements.items():
        if line.startswith('| ' + key):
            lines[i] = new
p.write_text('\n'.join(lines)+'\n', encoding='utf-8')

updates = {
 'docs/implementation-log.md': '\n## 2026-09-27 — demo import and user guide\n\nUser confirmed no active compile and a personally completed restart; no compile or restart was run here. First DataService insert failed with a null-value error; read-back found no intake or Lead before retry. The same source values succeeded through Clio OData (bd6bf16dd625); root cause within the DataService route is not established. First fixture PI-000002 demonstrated generated number, timestamp and New status; a sequence gap from the failed attempt is harmless and was not reset. Loaded 171 baseline records plus 15 intakes and Charlotte lookup, then patched eight Project.Opportunity links. All 186 fixture IDs and project links read back successfully. Nine original PI-LEGACY intakes remain Needs review. Lead.BpmRef prefix query found zero intake-linked Leads (7e91a5150d76); fixture output links remain empty. Evidence: demo-load-2026-09-27.json and demo-readback-2026-09-27.json. Manifest marked loaded only from read-back.\n\nUser explicitly prefers Clio record verification for this task. Browser sign-in occurred but no browser acceptance claim is made. Spreadsheet wizard mapping/reimport, platform tag links, broader UI/permissions and AI work remain pending. Created docs/08-user-guide.md with current foundation steps and explicitly future AI scenarios.\n',
 'docs/03-import-plan.md': '\n## 2026-09-27 completed load\n\nB01 runtime gate passed after the user-confirmed restart. Demo assets were loaded through Clio OData and read back: 171 baseline records, 15 New intakes, eight Project.Opportunity links and one Charlotte lookup. Nine original intakes remain intact. Do not rerun insert payloads: consult the loaded fixture manifest first. This does not validate a saved FileImportTemplate or the spreadsheet reimport acceptance test. Platform seed tags are not installed; manifest GUIDs identify the fixtures.\n',
}
for name,addition in updates.items():
    p = root / name
    p.write_text(p.read_text(encoding='utf-8') + addition, encoding='utf-8')
p = root / 'evidence/import-blocker.md'
p.write_text('# B01 resolved for demo loading — 2026-09-27\n\nUser confirmed no active compilation and completed restart. Clio OData inserted the first manifest fixture successfully; no corresponding Lead was created. The remaining 14 intakes then loaded successfully. Post-load query across Lead.BpmRef values starting with UsrADProjectIntelligence: returned zero records (7e91a5150d76). All 15 fixture intakes are New with PI numbers and received timestamps. Nine originals remain Needs review. See demo-readback-2026-09-27.json.\n\nThe prior narrative below is historical and no longer blocks the completed Clio demo load. Spreadsheet mapping/reimport acceptance remains pending.\n\n---\n\n' + p.read_text(encoding='utf-8'), encoding='utf-8')
p = root / 'docs/07-demo-script.md'
s = p.read_text(encoding='utf-8').replace('Rehearsal is deferred until the agent/Apply flows and blocker B01 are resolved.', 'B01 runtime check passed on 2026-09-27. Rehearsal remains deferred until the agent/Apply flows exist.').replace('The current manifest contains planned IDs and loaded=false, so it authorizes **zero deletions**. Reset has not been executed or tested.', 'The manifest now identifies 186 loaded demo records and the supporting Charlotte lookup, verified on 2026-09-27. Reset has not been executed or tested. Preserve the shared lookup unless its removal is separately reviewed and it is unreferenced. Platform tags are not installed; use exact manifest GUIDs.')
p.write_text(s, encoding='utf-8')
p = root / 'README.md'
s = p.read_text(encoding='utf-8').replace('The exported legacy listener creates a Lead on every new intake.', 'The listener runtime gate passed on 2026-09-27; retain its historical evidence.').replace('5. Use the signed-in browser to verify saved changes.', '5. Use Clio read-back to verify record creation, as requested. Browser checks apply to remaining UI acceptance work.')
s += '\n## User walkthrough\n\nSee [the step-by-step user guide](docs/08-user-guide.md) for available foundation tasks, demo examples and the future AI workflow. Demo records are loaded and verified; spreadsheet reimport acceptance remains pending.\n'
p.write_text(s, encoding='utf-8')
print('Manifest, checklist, import evidence and documentation updated.')
