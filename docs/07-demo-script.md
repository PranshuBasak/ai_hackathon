# Demo and reset

> **Current demo material (29 Sep 2026):** see [docs/demo/README.md](demo/README.md) for Scripts A–E, the video run-of-show and the submission text. The six-minute outline below is the original foundation-phase plan; the safe-reset rules still apply.

## Six-minute target — AI phase rehearsal

1. 30 seconds: show the manual-entry problem and duplicate/architect gaps.
2. Two minutes: import 15 records, process batch, inspect duplicate row 4, review phase row 7, Apply strategic row 1 and show Project/buying centre/Opportunity.
3. 90 seconds: email E1 or paste text into chat; show extraction, missing dealer and follow-up task after Apply.
4. 30 seconds: change a scoring weight and rerun to show configurable priority.
5. 30 seconds: explain duplicates avoided, architect coverage and **estimated** hours saved = applied intakes × 22 / 60.

B01 runtime check passed on 2026-09-27. Rehearsal remains deferred until the agent/Apply flows exist. Do not present the existing legacy skill as the completed new agent.

## Safe reset

1. Stop only the demo batch/run being reset and preserve its evidence.
2. Read seed-data/fixture-manifest.json. Only non-null GUIDs explicitly marked loaded and owned by the selected fixture/run are eligible.
3. Preview exact records and dependencies. Never expand scope to all records without HackathonSeed, all records with a similar name, or all records created today.
4. Remove run-generated child links/tasks, OpportunityContact, participants and intake links before dependent Opportunities/Projects; preserve baseline parents referenced by other records. If foreign keys reference nonfixture data, stop and resolve ownership.
5. Delete run-generated fixtures only. Baseline seed records remain unless the selected reset explicitly includes them. Tags help inspection but do not grant deletion authority.
6. Reimport missing baseline fixtures in dependency order only after live lookup resolution and trigger audit. Update manifest IDs from actual read-back.
7. Confirm original nine intake IDs are untouched, baseline counts match manifest, and fixture batch has expected count. Save reset evidence.

The manifest now identifies 186 loaded demo records and the supporting Charlotte lookup, verified on 2026-09-27. Reset has not been executed or tested. Preserve the shared lookup unless its removal is separately reviewed and it is unreferenced. Platform tags are not installed; use exact manifest GUIDs.
