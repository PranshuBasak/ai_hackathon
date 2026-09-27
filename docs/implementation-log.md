# Foundation implementation log

Started 2026-09-26. Environment: ai_hackathon. Package: UsrMieleADProjects.

## Completed
- Original supplied plan copied unchanged to reference/original-plan.txt.
- Prior read-only audit preserved in evidence/baseline-audit.json (2026-09-25 snapshot).

## In progress
- Refresh target package, export pre-change application archive, inspect legacy automation.

## Remaining
- Repair current package and add missing model/configuration.
- Generalize visible branding and package bindings.
- Build intake navigation, form/list and Project related lists.
- Prepare fictional fixtures, template, samples and oracle; load only after trigger audit.
- Verify import/reimport, existing records, employee/admin access and browser behavior.
- Finish seven planning documents and evidence-based checklist.

## Live progress update — 2026-09-26

The initial task list above is historical. Remote mutations have now been performed:

- CurrentPackageId repaired to database ID 9b1d2f9d-2ffe-4a23-a06c-a27bc9aeb2b2; target package read-back succeeded.
- Package exported before changes; hashes recorded in evidence/backup-sha256.json.
- Added lifecycle and construction-stage lookups, scoring object, eight factors totaling 100, canonical lookup values, intake/participant/Project fields and defaults.
- Created confidence settings 85 and 50, configuration only.
- All nine original intake IDs preserved, assigned PI-LEGACY numbers, received timestamps and Needs review.
- App and workplace renamed Project Intake; existing workplace identity and All employees grant retained. Dedicated section created and related-page addon points to existing intake form.
- Intake form and seven-column list saved with three review/priority filters. Browser verification in progress.
- Fictional baseline CSVs, 15-row batch, workbook, extraction samples, oracle and fixture manifest prepared. No fixtures loaded.

### Blockers and remaining work

- B01: intake OnInserted listener creates a Lead automatically. No intake insertion/import/reimport until deliberately adapted and verified; see evidence/import-blocker.md.
- B02 resolved: DB-first SysModule binding updates failed on Image32, but the supported update-app-section path saved the section and regenerated its binding. Price index, Project and Visits binding readbacks now contain neutral captions/descriptions and retain image data.
- Project related lists, remaining captions/bindings, access controls and browser checks are still being completed.
- AI agent, Apply, batch, chat/email and metrics remain deferred.

Long-running Clio writes can save before the tool times out. Read back before retrying.

### Browser verification and configuration follow-up

- Navigation shows Project Intake workplace, Project Intake section and Price index.
- List displays nine PI-LEGACY rows. Needs review retains nine; Ready to apply and Strategic return zero. Fixed custom quick-filter converter config using the shipped Products page example.
- Existing intake form opens through the existing UsrADProjectIntelligence_FormPage. Fixed legacy BusinessRule_5066f40, which had locked every existing field; source and stakeholder fields are now editable while agent verdict remains locked.
- Saved a temporary raw-text value on PI-LEGACY-0001 in the browser, confirmed by OData, restored it to empty and confirmed restoration.
- Settings and their 85/50 values are bound in SysSettings_ProjectIntake and SysSettingsValue_ProjectIntake. App identity is bound in SysInstalledApp_ProjectIntake. Workplace and new membership binding readbacks preserve the agreed IDs.
- Buying centre and Intake history tabs saved. Related-list filtering is still under browser verification; do not treat a visible grid as a passed relationship test.

### Regeneration and preparation follow-up

**Latest status, 2026-09-26 21:31 IST:** the user confirmed source generation completed. A full compile was launched at 17:03 IST. On this resume the MCP session no longer has the earlier operation tracker, but `last-compilation-log` returns compilation-succeeded=true, build-result=0, diagnostics=[] (evidence/latest-compilation-result.json). That is the latest saved result, without a build timestamp or operation ID. No restart or listener runtime test has been performed by the agent. Earlier waiting/blocker entries below are historical.

- User's entire intake Lead listener comment-out verified against the original package; C# runtime verification remains pending.
- Full generation launched once through Clio. MCP transport timed out, but individual schema events continued until LOG-65321 at 16:54:38 IST. The user subsequently confirmed completion and supplied the working Configuration URL. Full compile was launched once; see the latest status above and evidence/generation-attempt.md. Restart remains pending.
- Scoring operation permissions enabled in native UI: System administrators priority 0 with CRUD; All employees priority 1 with read only. Clio confirms rows. Packaging and effective nonadmin test remain pending.
- Global Add/Edit/Delete any data grants exist for System administrators and the Administrator/Developer functional roles. System-settings management also grants the Creatio ALM Integration service user. No global permissions changed; no direct All employees override found.
- Prepared baseline request payloads locally and verified parent entity GUID/name collision checks in small groups. Charlotte is the only missing resolved city. No fixtures loaded.
- Added a single-sheet ProjectIntake_Batch_15.xlsx (15 data rows, 22 columns). Updated import instructions to use it. Native Excel import click did not open a wizard; no file uploaded or intake inserted.
- Corrected the data-model document to identify the app inventory's Project column list as partial; custom fields are present in live data but need final effective metadata refresh.

## 2026-09-27 — demo import and user guide

User confirmed no active compile and a personally completed restart; no compile or restart was run here. First DataService insert failed with a null-value error; read-back found no intake or Lead before retry. The same source values succeeded through Clio OData (bd6bf16dd625); root cause within the DataService route is not established. First fixture PI-000002 demonstrated generated number, timestamp and New status; a sequence gap from the failed attempt is harmless and was not reset. Loaded 171 baseline records plus 15 intakes and Charlotte lookup, then patched eight Project.Opportunity links. All 186 fixture IDs and project links read back successfully. Nine original PI-LEGACY intakes remain Needs review. Lead.BpmRef prefix query found zero intake-linked Leads (7e91a5150d76); fixture output links remain empty. Evidence: demo-load-2026-09-27.json and demo-readback-2026-09-27.json. Manifest marked loaded only from read-back.

User explicitly prefers Clio record verification for this task. Browser sign-in occurred but no browser acceptance claim is made. Spreadsheet wizard mapping/reimport, platform tag links, broader UI/permissions and AI work remain pending. Created docs/08-user-guide.md with current foundation steps and explicitly future AI scenarios.
