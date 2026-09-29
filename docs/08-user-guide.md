# Project Intake — step-by-step user guide

> **Update 29 Sep 2026:** the AI phase is available through **Project Assistant** in the Creatio.ai panel on the Project Intake page. Chat or paste a lead, attach a spreadsheet, ask for a verdict, and approve the apply plan. See [the capabilities reference](demo/05-agent-capabilities.md) and [the demo scripts](demo/README.md). Sections below marked *Future* describe the original plan; the agent now covers capture, verdict and apply. Buttons such as *Run agent* are replaced by the chat.

Updated: 27 September 2026 (UI pass). Environment: **ai_hackathon**.

## 1. What this application is for

Project Intake helps a building-products manufacturer turn project information from reports, spreadsheets and emails into reviewed CRM projects, stakeholders and opportunities. The demo companies and people are fictional.

**Available now:** demo CRM records, the Project Intake section, source/input fields, lifecycle status and the configuration foundation. The 15 demo intakes have been loaded through Clio. Their initial status is New.

**Planned for the AI phase:** extraction, matching, scoring execution, Run agent, batch processing, Apply, chat/email entry and AI dashboard metrics. Steps marked **Future** describe the intended experience; their buttons and automation are not ready to use. Do not use the legacy Miele skill as a substitute.

## 2. Roles

| Role | Main responsibility |
|---|---|
| Intake user | Enter source information and correct business facts. |
| Reviewer | Confirm matches, phases, renames and missing stakeholder information. |
| Sales user | Work on approved projects, buying centres and opportunities. |
| Administrator | Maintain lookup values, scoring factors, thresholds and import/reset configuration. |

Employee/admin permission testing is still incomplete; these are the intended responsibilities.

## 3. Start with the loaded demo

1. Sign in to the ai_hackathon Creatio environment.
2. Choose the **Project Intake** workplace, then its **Project Intake** section.
3. Find **Aurora Skyline** in the project-name column. The list is sorted newest first; use the **New**, **Needs review**, **Ready to apply** or **Strategic** quick filters to narrow it.
4. Open the intake. The left column shows the number, status, source, source project ID, received date, reviewer, priority and score, plus a Linked records island. The **Project** tab holds the Project, Location, Value and timeline and Source text panels; **Stakeholders** holds the key contact and the source company names beside their CRM accounts; **AI verdict** holds the read-only agent output.
5. Confirm that it has a generated PI number, a received timestamp and status **New**. Its AI verdict is intentionally empty.
6. Review the existing demo Projects separately. Use the human-readable project name; the standard Project Name can be a generated identifier.
7. Open a demo Project to inspect its stored participants and linked opportunity, where present. The Project related-list UI still has outstanding verification; an empty widget is not proof that linked records were not loaded.

The loaded set contains 20 accounts, 15 contacts, 25 projects, 95 project participants, eight opportunities, eight opportunity-contact links and 15 intakes. The nine older intakes remain separate, identified by PI-LEGACY numbers and Needs review status.

## 4. Enter one new intake manually — foundation workflow

1. Open the Project Intake section and choose **New**.
2. Select the source and enter its Source Project ID. Together these identify the incoming source record. Do not reuse a demo source key for a different project.
3. Enter the project name and available source details. Paste source text into the raw-text field when appropriate.
4. Enter known location, type, stage, value, units, dates, stakeholder names and contact details. Leave genuinely unknown information empty.
5. Save the intake, reopen it and verify the saved values.
6. Confirm the generated PI number, received date and New status.
7. Stop here for now. Processing and Apply will be enabled in the AI phase.

Clio insert tests have verified these defaults. End-to-end manual creation in the browser remains an acceptance check, so report a failed save rather than claiming this path has already passed.

## 5. Import a spreadsheet — prepared, platform mapping pending

The current demo is already loaded. **Do not import the 15-row workbook again yet:** the saved platform mapping and duplicate-safe reimport test are still pending.

When that acceptance check is complete:

1. Copy `seed-data/ProjectIntake_Import_Template.xlsx` for a new batch.
2. Populate source and source-project ID for every row, then the available input details.
3. Open the intake import action and select the workbook.
4. Use the approved mapping from `docs/import-mapping.json`; match records using **Source + Source Project ID**.
5. Map only source/input fields. Do not map lifecycle status, reviewer selections or AI results.
6. Review the preview and resolve missing lookup values or mapping errors before committing.
7. Import, review the error report and compare the created/updated counts with the batch.
8. Reimport the same approved test batch only during the reimport test. It must leave 15 fixture intakes and preserve review/result fields.

The Clio data load does not prove the spreadsheet wizard or its saved matching rule.

## 6. Full workflow — Future AI phase

### A. Process an intake

1. Open a New intake and confirm the source facts.
2. Use the planned **Run agent** action, or select the planned batch action for New intakes.
3. The intake moves to Processing while the workflow extracts raw text where needed, searches existing projects/accounts, and calculates a configurable score.
4. Read the recommended action, matched project, confidence, priority, explanation and missing information.
5. Continue according to its lifecycle status below. Processing must not itself create the final CRM project or opportunity.

### B. Review a recommendation

1. Compare the suggested project with address, developer, source identity and phase details.
2. Confirm stakeholder account matches; do not accept a similar company name without checking it.
3. Correct missing business facts and select the intended records.
4. For a phase, confirm the parent project. For a renamed project, confirm which existing project should be updated.
5. Record the reviewer decision before applying. Phase, rename and ambiguous-account cases always require review, even when confidence thresholds are lowered.

### C. Apply the approved result

1. Use the planned **Apply** action only after the recommendation is ready or an authorized reviewer has resolved the review case.
2. The workflow performs the approved create/update/link/no-action decision.
3. Open the linked Project and verify its location, type, stage and commercial information.
4. Check the Buying centre for approved accounts, contacts and participant roles.
5. Inspect the linked opportunity if the intake qualifies for one, and any tasks for missing stakeholders.
6. Return to the intake: it should be Applied and retain its output record links.
7. Applying it again must not create duplicates. This is a required future test.

## 7. Understand the statuses

| Status | What it means | User action |
|---|---|---|
| New | Saved input waiting for processing | Check source details; processing is future functionality. |
| Processing | Agent workflow is running | Wait for the result. |
| Needs review | Missing/ambiguous business facts, phase or rename case | Resolve facts and confirm the intended match. |
| Ready to apply | Recommendation passed the configured checks | Review the result, then explicitly Apply. |
| Applied | Approved CRM changes completed | Follow the linked records. |
| Failed | Workflow execution failed | Read error details and ask the administrator to investigate before retrying. |

The separate legacy analysis status may say Completed. That does **not** mean the intake was Applied. Threshold settings currently start at 85 and 50; phase/rename review rules take precedence over thresholds.

## 8. Worked demo scenarios

All 15 rows are currently **New**. The following are expected future results from `tests/oracle.csv`, not completed AI runs.

| Example to open | Steps after the AI phase | Expected result |
|---|---|---|
| Aurora Skyline — PI-DEMO-01 | Process; inspect facts and priority; approve; Apply | New project, expected Strategic Pursuit, subject to completeness/confidence checks. |
| Cedar Grove Heights — BASE-004 | Process; compare the existing project | Duplicate/no action; no second Project. |
| The Meridian Tower – Phase 2 — PI-DEMO-07 | Process; review parent and phase; approve the relationship | Needs review; link as a new phase after approval. |
| The Commons at Riverside — PI-DEMO-08 | Process; confirm Riverside Commons is the same project | Needs review; update the approved existing project. |
| Harborline West Residences — PI-DEMO-09 | Review the developer alias before approval | Needs review until the account match is confirmed. |
| Scenario 10 / Scenario 11 | Inspect missing architect/dealer information | Needs review; missing information is not an execution failure. |
| Small Home Remodel — PI-DEMO-12 | Review low fit and missing parties | Expected discard/low-value recommendation; avoid creating pipeline. |
| Pier 9 Residences — PI-DEMO-14 and TENDER-PIER9-2026 | Compare both source records to the same CRM project | Two source intakes, one matched Project; no duplicate Project. |

## 9. Email or chat example — Future

1. Open `seed-data/email_E1.txt` and copy its project information into the planned intake chat, or send it through the email channel once configured.
2. Ask the assistant to create an intake and extract the stated facts.
3. Open the created intake and compare the extraction against the original message.
4. Leave absent information unresolved. Review any missing dealer or stakeholder flag.
5. Process, review and Apply using the steps above.
6. Check the resulting project, participants and follow-up task where required.

Additional extraction exercises are in `seed-data/sample_texts/E2.txt`, `E3.txt` and `E4.txt`. These are test inputs, not connected email integrations.

## 10. Administrator preparation and safe reset

1. Before a demo, confirm the expected fixture counts using Clio and the exact IDs in `seed-data/fixture-manifest.json`.
2. Maintain eight scoring factors with weights totaling 100. Scoring execution is future work; changing configuration alone does not recalculate records today.
3. Finish import mapping/reimport and permission acceptance checks before promising those capabilities.
4. Reset only records explicitly owned by the selected fixture/run manifest. Review child links and dependencies first; follow `docs/07-demo-script.md`.
5. Preserve the nine original intakes and any unrelated CRM records. Never reset by deleting everything without a tag or everything created on a date.
6. Dashboard hours saved, when implemented, is an **estimate**: applied intakes × 22 minutes ÷ 60. It is not measured staff time.

## 11. Simple demonstration sequence

**Today:** show the loaded intakes, open Aurora Skyline, explain source details and New status, then show baseline projects and stored participant/opportunity relationships. Explain that AI results are pending.

**After AI acceptance:** process the batch; show Cedar Grove as a duplicate; review Meridian Phase 2; Apply Aurora Skyline; inspect its Project/buying centre/opportunity; run the E1 extraction example; explain the estimated time-saving metric.

For implementation status, use `docs/06-checklist.md`. For expected automated results, use `tests/oracle.csv`.
