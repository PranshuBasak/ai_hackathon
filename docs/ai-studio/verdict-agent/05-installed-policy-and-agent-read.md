# Installed verdict policy — ai_hackathon

Verified through Clio on 28 September 2026. This supersedes earlier statements that the policy does not exist. It does not establish a deployed scoring/save workflow.

## Live setting

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
