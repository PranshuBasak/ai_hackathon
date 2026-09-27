# Import plan

## Input mapping

Target: UsrADProjectIntelligence. The authoritative local mapping is import-mapping.json; workbook Mapping sheet mirrors it. Source resolves to UsrADIntelligenceSource by name. Duplicate matching uses **UsrExternalSource + UsrExternalProjectId**, updating the same intake.

Only source/input columns are mapped. Never map UsrStatus, UsrReviewedBy, resolved accounts, match/action/priority/score fields, analysis status/date, error or created-record links. Reimport must preserve review and AI values.

## Live blocker

B01: the exported ProjectIntelligenceLeadEntityEventListener creates a Lead on every intake insert. No intake import or manual-create test may run while that behavior remains active. Local workbook creation is not a saved Creatio FileImportTemplate and is not evidence T01/T02 passed.

## Wizard procedure after B01 is resolved

1. Open Project Intake → Import data. Upload **seed-data/ProjectIntake_Batch_15.xlsx**, which contains only the 15-row batch. The original three-sheet template remains available for manual preparation and mapping reference.
2. Match each header using import-mapping.json. Resolve Source lookup by its name.
3. Select Source and Source Project ID together as duplicate keys. Choose update existing.
4. Save the mapping as Project Intake – Source input only and record the FileImportTemplate ID in evidence.
5. Import; save report and all 15 created IDs into fixture-manifest.json. Confirm New status, PI number, received date and zero errors.
6. Set a review/result sentinel on one fixture, reimport, then verify count remains 15 and sentinel values remain unchanged. Restore original fixture values and record evidence.
7. Confirm the preexisting nine IDs remain intact and Needs review. Check no Lead, Project, Opportunity or AI process was automatically created/run by import.

## Fictional baseline

Load order: Accounts → Contacts → Projects (parents first) → Participants → Opportunities → OpportunityContact; then patch Project.Opportunity to known created opportunities. Do not map Project.Opportunity during the first Project load because those records do not exist yet. Keep Project.Name auto-generated.

SeedTag is manifest metadata, not a universal entity field. Use supported Tag/link objects per entity; never invent a SeedTag column in Creatio. Manifest GUIDs are authoritative. Resolve ProjectEntryType, Owner and Opportunity early-stage IDs live before loading; placeholder tokens in CSV explicitly prevent accidental unresolved imports.

All baseline CSVs are preparation assets until live lookup resolution and trigger audit are completed. Existing records must not be overwritten merely because their names match a fixture. Detect collisions by ID and name first.

## Connector mapping

A future Dodge/ConstructConnect adapter maps source identity, source project ID, name, type/stage/location text, value, units, dates, stakeholder names and raw description to exactly these fields. No lifecycle or AI result fields are accepted from the feed. Authentication, paging and retry/checkpoint behavior belong to that future connector.

## 2026-09-27 completed load

B01 runtime gate passed after the user-confirmed restart. Demo assets were loaded through Clio OData and read back: 171 baseline records, 15 New intakes, eight Project.Opportunity links and one Charlotte lookup. Nine original intakes remain intact. Do not rerun insert payloads: consult the loaded fixture manifest first. This does not validate a saved FileImportTemplate or the spreadsheet reimport acceptance test. Platform seed tags are not installed; manifest GUIDs identify the fixtures.
