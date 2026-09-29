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

## 2026-09-27 — page repair and UI/UX pass (Clio, no compile)

Environment ai_hackathon re-registered locally. Pre-change bodies of the five package pages are in backups/pages-before-ui-pass-2026-09-27 (local only). All writes went through Clio `update-page` with checksum baselines and read-back; no compile or restart was needed or run.

- Entity: ten intake lookups (`UsrStatus`, `UsrPriorityClassification`, `UsrExternalSource`, `UsrRecommendedAction`, `UsrAnalysisStatus`, `UsrProjectCategory`, `UsrProjectClassification`, `UsrSpecificationStatus`, `UsrServiceRiskLevel`, `UsrProjectType`) and `Project.UsrConstructionStage` are now simple lookups, so they render as inline dropdowns instead of selection windows. Read back per column.
- `UsrADProjectIntelligence_FormPage` rebuilt from `scripts/build_intake_form_v2.py` (105 operations, 92 attributes, 146 registered strings). Profile island restored with number, status, source, source ID, received on, reviewer, priority and score; second island "Linked records" for matched/created project and opportunity; tabs Project (Project, Location, Value and timeline, Source text panels), Stakeholders (Key contact, Companies) and AI verdict (Recommendation, Scoring, Review notes, Outcome). Sentence-case captions, tooltips on every read-only field, placeholders on free-text inputs, rich text editor for the description. Element names used by business rule `BusinessRule_5066f40` are unchanged, so the read-only verdict rule still applies. The two `ComboBox.AddNewRecord` inline-caption defects that failed validation are gone.
- `UsrProjectIntakeSection_ListPage` rebuilt from `scripts/build_list_page_v2.py`: duplicate merges removed, columns are Number, Project name, Source, Status, Priority, Recommended action, Match confidence, Estimated value, Received on; default sort Received on descending; quick filters New, Needs review, Ready to apply, Strategic (all registered in `filterAttributes`).
- `UsrMieleADProjects_FormPage`: the bare City/Construction stage group became a titled "Location and stage" island matching the other General tab islands, and the project address moved into it; "New label" placeholder in the Images tab and Title Case captions ("Additional Details", "Project Images") corrected. An append save first left the three re-parented fields before their container in the operation array, so the page was re-saved in replace mode with parent-first order (`scripts/project-page-v2.js`). Read-back confirms 199 operations.
- Not done: browser acceptance of the three pages (the agent cannot sign in to the site itself); the home page `UsrProjectMangement` validates but was not redesigned; the unused `UsrProjectIntakeSection_FormPage` was left as is.

### Browser acceptance, 2026-09-27 evening (user signed in; agent drove Chrome)

- Intake list: renders nine columns, sorted newest first (PI-000016 first, PI-LEGACY rows last). The New quick filter narrows the list to the 15 fixture intakes; clearing it restores all rows. No console errors.
- Intake form (PI-LEGACY-0009 and PI-000002): profile island and Linked records island on the left; Project, Stakeholders and AI verdict tabs with icons; panels render with native toggles; tooltips on read-only fields; placeholders on empty inputs; Source text panel collapsed by default. The Status field opens as an inline dropdown (clear and chevron controls), confirming the simple-lookup change.
- Project page (1000000001): the Location and stage island renders under Timeline with address, city and construction stage; Intake history tab shows both lists loaded ("No data" for this project is a real query result); Buying centre tab lists four participants. Pre-existing defect noted, not fixed: the "Project images" island in the profile uses component type `qnt.ImageGallery`, which is not installed on this environment, so it renders the unknown-component placeholder.

## 2026-09-28 — capture owner confirmation and verdict-agent kit

Owner reports that the first intake-creation agent has been built and Excel records have been successfully imported into Creatio Project Intake. This is user-confirmed evidence; agent ID/version, workbook, row count and record GUIDs were not supplied or independently queried in this turn. Do not infer that the five-row test file or all email/chat/reimport paths passed. The 27 September counts remain a dated baseline, not current totals.

Prepared docs/ai-studio/verdict-agent: builder/system prompts, project-intake-verdict skill with references/assets, proposed scoring policy, pure-Python local validation/calculation reference and 13 passing local tests, plus new fictional email and conversational samples. Matching confidence and action decision confidence are separate. Phase/rename/alias/missing data/search-incomplete guards force review. Numeric scoring bands/completeness rules are newly proposed, not silently installed. No live platform mutations or GitHub push in this turn. Next checkpoint: docs/checkpoint.md.

## 2026-09-28 — Dynamic verdict configuration build-kit refinement

- Scope: user requested storage design, all example configuration records and refined verdict AI; local kit only under current AGENTS authorization.
- Chose reuse of eight UsrScoringFactor rows with structured JSON in existing unlimited-text UsrDescription. One proposed global UsrIntakeVerdictPolicy setting holds priority/requirements/approval; existing 85/50 confidence settings remain separate. No new custom object/list page.
- Added full row JSON/CSV, setting specifications, worked example and record-by-record setup guide. Region map explicitly fictional. Proposed policy remains approved=false; no live GUIDs invented.
- Added configure_verdict.py reference, approval-hash drift checks, dynamic bands/maps/requirements, active-weight validation and configuration snapshots. Refined prompt/skill/workflow/data/scoring references; regenerated upload reference pack and ZIP.
- Verification: python -m unittest discover -s docs/ai-studio/verdict-agent/project-intake-verdict/scripts -p "test_*.py" — 25 passed. git diff --check passed. Local example 87.75 Strategic; changing and reapproving the construction-value band gives 78.75 Active without changing prompt. Unknown region and phase/rename still route to review.
- Limits: no live settings/row updates, permission checks, executable workflow deployment, knowledge upload or GitHub push. Verify system-setting capacity, existing description consumers and supported runtime during authorized deployment.

## 2026-09-28 — Live verdict policy created



- Name: **Project Intake verdict policy**
- Code: `UsrIntakeVerdictPolicy`
- Setting record ID: `c04e4469-4341-4c61-b400-386e90d9a2e8`
- Global value record ID: `65c45cba-a76d-461b-b321-f19df0653ffe`
- Type: `MaxSizeText`; personal: false; cacheable: false.
- Native All-Users value is associated with **All employees**. This value scope does not itself grant editing permissions.
- Version: `demo-2026-09-28-v1`; approved: true for the owner-authorized hackathon demo configuration.
- Policy file snapshot: `project-intake-verdict/assets/policy-installed-ai_hackathon.json`.
- Existing settings unchanged: `UsrIntakeAutoApplyThreshold=85`, `UsrIntakeReviewThreshold=50`.

## Factors

All eight existing UsrScoringFactor GUIDs, names, weights and active flags are preserved. UsrDescription now contains versioned JSON rules; original readable guidance was copied into the previously empty Description column. The existing UsrScoringFactor package binding contains eight rows and six columns, including both descriptions. No new factor rows, intake records or verdict results were created.

Numeric bands are the previously documented demo rubric. Coverage is fictional: US-NC/US-GA/US-FL covered, US-CA outside, every other region unknown. Currency semantics must be verified; no implicit USD conversion or fabricated zero values. Phase/rename and other mandatory review rules remain in force. Approved is not an auto-Apply permission.

## How the assistant should retrieve it

Use the current integration tool schemas. Resolve SysSettings by exact Code `UsrIntakeVerdictPolicy`, then read its related SysSettingsValue row and parse TextValue as JSON. The known GUIDs above can be used for a direct get-record test in this environment. Do not fabricate a filters shape; use the tool's actual input contract.

Read the eight live UsrScoringFactor rows and both current confidence values each run. Validate approved, version, factorConfigHash, active keys/weights and rules. The local snapshot is evidence, not a fallback when live reads fail. These reads were verified through Clio with Supervisor; access by the AI Studio integration's execution identity has not been verified.

Suggested assistant test:

> Read the live UsrIntakeVerdictPolicy setting and its TextValue. Report policy version, approval state, priority bands and the count/sum of active UsrScoringFactor weights. Do not update any intake. Report any access error exactly and do not fall back to uploaded examples.

## Verification

- Native setting read-back and DataService row read-back agree; complete JSON preserved.
- Eight factors match their intended records and hash, with active weights totaling 100.
- All canonical priority, action and status lookup meanings are present; legacy values preserved.
- Saved live configuration evaluated by the local reference: complete synthetic example 87.75 / Strategic Pursuit / Ready to apply; phase case Needs review; unknown region null score / Data Incomplete / Needs review. These are local tests using live configuration, not live agent runs or CRM result writes.

## Remaining integration work

The assistant still needs a supported executable scoring entry point and a restricted verdict-save action, followed by read-back verification. No AI Studio prompt, skill publication or agent deployment was changed by this operation. A new conversation/test should fetch live configuration; an existing chat may retain older context.

## Packaging and permissions limitation

Live creation/update through native system-setting tools succeeded. Adding the new setting to SysSettings_ProjectIntake through the DataService-backed binding updater was refused: SysSettings object permission, correlation ebcdc8611bee. No retry with alternate credentials or permission bypass was attempted. The existing settings and values bindings still cover the prior threshold settings; the new policy setting/value require native Configuration data binding or a supported package installation script before transfer to another environment. Factor bindings are updated and read back.

System-setting edit permissions and AI Studio integration access need effective-user tests; the existing management permissions were not changed. Browser verification was unavailable: the opened tab reached login and subsequently was no longer accessible.

## Evidence and recovery

Pre-change package: backups/verdict-policy-2026-09-28/UsrMieleADProjects.zip (1,315,267 bytes); SHA256 818b209f08e5d9582d5a34c08a6acc74911587b69818c36534783235e87f982f. Export completed before the owner's later request to skip waiting for it. No further export was run.

Snapshots: evidence/verdict-policy-before-2026-09-28.json; evidence/verdict-policy-readback-2026-09-28.json; evidence/verdict-policy-validation-2026-09-28.json; evidence/verdict-policy-lookups-2026-09-28.json.

For a deliberate rollback: set policy approved=false through the native setting action, restore only the eight recorded factor GUIDs from the before snapshot with the corresponding binding values, and read back. Do not delete intake records. Do not remove binding rows to unbind settings: that operation can delete live data.

## 2026-09-28 — Scoring rule objects built (clio MCP)

- Pre-change export: backups/scoring-objects-2026-09-28/UsrMieleADProjects.zip, SHA256 7a60ca994ee26949f4c885f83e0be1216e8583af92ec42e6403843777c7d56a1 (owner also exported separately).
- sync-schemas created the BaseLookups UsrScoringRuleType, UsrScoringRule and UsrIntakePriorityBand, registered them in Lookups, and added UsrFactorKey and UsrRuleType to UsrScoringFactor.
- DB-first bindings seeded 2 rule types, 39 rules and 4 bands. The 8 factors got their keys and rule types through the existing UsrScoringFactor binding. Lookup_* registration bindings were added. The GUIDs are in evidence/scoring-objects-seed-2026-09-28.json.
- OData/ESQ read-back matches the plan. Factor IDs, weights (sum 100), descriptions and the JSON in UsrDescription are unchanged. Binding contents were verified with read-data-binding-db.
- Owner decision: no admin lock on the new lookups for now. No object permissions were set. No browser check: the owner accepted the clio read-backs.
- Caveat: decimals are non-nullable, so Value-list rules have UsrMinValue 0.00. The runtime must branch on UsrRuleType.
- Not done: skill v3, agent redeploy, live reruns. The policy setting and the JSON stay in place.
- Settings tab on UsrProjectIntakeSection_ListPage (clio update-page, append mode): the factor grid gained Factor key and Rule type columns; new Scoring rules and Priority bands expanded lists were added. Bundle read-back verified. No browser check, per the owner.
- Mini pages: created UsrScoringRule_MiniPage and UsrIntakePriorityBand_MiniPage and bound them as default/add pages; added 7 field tooltips to UsrPage_93laf3g (factor mini page) without changing anything else. Clio read-backs verified.

## 2026-09-29 — Project Assistant chat test, apply fix, stakeholder fixtures

- The in-bundle test on PI-000034 passed capture, status and verdict. Apply stopped at Project validation (service contact "Creatio.ai Studio" has no Account, so the Supplier default fails). Nothing was written; confirmed with clio. Details are in docs/ai-studio/unified-agent/01-build-status.md.
- Loaded 4 Accounts and 12 Contacts with explicit uuid5 Ids via clio `odata-create` and read them back. They are listed in seed-data/fixture-manifest.json (stakeholderFixtures). Reset order: contacts, then accounts.
- AI Studio drafts saved and checked (not published): apply v2, capture v2, verdict v4. The agent prompt and knowledge are updated locally only.
- Agent v2 retest (owner published and deployed): apply on PI-000034 created Project 1000000028 (`f91c7b53…`), Opportunity `eb598981…` and 4 UsrADProjectParty rows, and marked the intake Applied with links, account lookups and reviewer. The repeat apply created nothing. Everything was verified with clio. Record IDs are in docs/ai-studio/unified-agent/01-build-status.md.

## 2026-09-29 — Demo pack and demo data

- Demo docs in `docs/demo/`:
  - README (index, preparation, expected scores);
  - 00-submission (written description);
  - three scripts: A email→pursuit, B Dodge spreadsheet, C Phase 2 with a reviewer;
  - 04 live examples; 05 capabilities reference; 06 run-of-show for a video under 5 minutes.
- Demo data loaded with clio `odata-create` (uuid5 Ids, read back) and listed in the fixture manifest under `demoScripts`:
  - 8 Accounts, 6 Contacts;
  - 2 history Projects (1000000032 Crescent Bay Resort Myrtle Beach; 1000000033 Tech Square Commons Phase 1);
  - 2 Closed won Opportunities, linked through Project.Opportunity;
  - 8 involved parties.
- Demo inputs in `seed-data/demo/`: email-the-wren.txt, meeting-note-tech-square-phase-2.txt, and Dodge_Weekly_Export_2026-09-29.xlsx (4 rows: 3 valid, 1 without a Dodge ID). Script B uses the 27 Sep seed companies; "Triangle Builders Group" is intentionally absent from CRM.
- Expected scores were computed from the live scoring rules: A 89.75 Strategic; B 74.25 / 76.50 Active and Brightleaf 77.50 Needs review; C 90.50 Strategic → Needs review (phase).

## 2026-09-29 — Scripts D/E, capture v4 source, context refresh

- Demo data sets D and E loaded with clio (uuid5 Ids, read back; manifest `demoScriptsDE`): 10 Accounts, 6 Contacts, and 3 Closed won Northbeam opportunities.
- Scripts D (guided assistant: missing facts, near-match linking, explain score, qualify → convert, disqualify) and E (full end-to-end demo run, word for word) added to docs/demo.
- Capture skill v4 source (near-match proposals) written locally; the AI Studio draft is pending owner sign-in.
- Knowledge reference updated to v3 locally (outcome flags, buying centre, key contact, near match, qualify/disqualify, score explanation); upload to the AI Studio knowledge source is pending.
- Context refreshed: README, AGENTS, checkpoint, checklist, decisions, agent design, demo-script pointer, ai-studio README, user guide.

## 2026-09-29 — Lookup colours (Freedom UI coloured list values)

- Pre-change export of all 12 lookups with clio `export-schema` in `backups/lookup-colors-2026-09-29/` (git-ignored).
- Colour column (`UsrColor`, type Color) added with clio `sync-schemas` to 9 lookups: UsrIntakeStatus, UsrProjectAIRecommendedAction, UsrProjectAIAnalysisStatus, UsrADIntelligenceSource, UsrADSpecificationStatus, UsrProjectClassification, UsrADRiskLevel, UsrConstructionStage and UsrScoringRuleType. UsrADProjectPriority, UsrProjectCategory and UsrADStakeholderRole already had it.
- The object's colour-column setting (metadata `D37`) is not settable by `sync-schemas` or `set-entity-schema-properties`. It was set in the object designer (Object settings → Color → Save and publish) for the 9 lookups. For future lookups use the clio route: `export-schema` → set `D37` to the UsrColor column UId → `import-schema`.
- Colour values for all 83 existing rows written with clio `upsert-data-binding-row-db`, which also adds UsrColor to each package binding. Existing Ids, names and descriptions are unchanged; no rows were added or removed. `execute-dataservice-batch` cannot write Color columns, and OData does not expose them.
- Read-back: `execute-esq` returned the expected hex value for all 83 rows. A post-change `export-schema` shows `D37` equal to the UsrColor column UId for all 8 newly flagged lookups; Intake status was verified earlier. In the browser, the Project Intake list renders the "Needs review" status as a coloured chip, rgba(255,172,7,0.2), which is #FFAC07 at 0.2 opacity.
- Palette: the out-of-the-box Creatio colours. Green means positive or advanced, amber means review or waiting, orange and red mean risk, lost, rejected or duplicate, and blue, purple and teal are neutral categories. Full mapping: `docs/lookup-colors.md`.
