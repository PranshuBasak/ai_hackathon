# Unified Project Intake agent: proposal

Status: **proposal, not built.** Prepared 29 Sep 2026 after reading the Creatio AI Studio documentation, plus a read-only pass over the tenant's 22 skills and 7 agents (browser, `eu3-ai-studio.creatio.com`). Nothing in AI Studio was changed.

## 1. What exists today (read on 29 Sep 2026)

| Item | Kind | Scope | Notes |
|---|---|---|---|
| **Project Intake** agent v6 | ours | Enterprise | Model `gpt-5.6-sol-creatio`, built-in `code_execution` and `web_search`. Skills: `project-intake`@9, vendor create/update/query/explore. 17 CRM tools, **including `creatio_delete_record`**. Its prompt says to use only a "restricted save action" and never generic create, but its skill v9 says to use `creatio_create_record`. The two contradict each other. |
| **Verdict Assistant** agent v8 | ours | Enterprise | Same model and built-in tools. Skills: `project-intake-verdict`@2, vendor create/update/query/explore/records-search. Knowledge: "Project Intake Verdict Reference". 23 tools, **including `creatio_delete_record`** and `creatio_create_record`. The prompt forbids creating anything. |
| Project Intake Capture Assistant v3, project Intake 1 (offline) | ours | – | Earlier attempts. |
| `project-intake` v9 | our skill | Enterprise | Capture for chat and spreadsheets using describe → validate → confirm → duplicate check (Source + Source Project ID) → `creatio_create_record` → verify. This is the working behaviour. |
| `project-intake-verdict` v2 | our skill | Enterprise | Match and score, then save the verdict with `creatio_update_record` on the intake only. The runtime contract has the real queries and lookup IDs. Scripts: `configure_verdict.py`, `validate_verdict.py`. It still reads the JSON rules and policy, not the new scoring lookups. |
| `project-intake-capture-guardrails` v1 | our skill | **Personal** | Older copy of the capture rules built around a "restricted save action" that never existed. Superseded by `project-intake` v9. |
| 19 vendor skills | Creatio | Enterprise, read-only | Useful for this agent: `creatio-create-record`@5, `creatio-update-record`@5, `query-creatio-records`@5, `creatio-explore-data-structure`@4, `datetime-interpretation`, `creatio-datetime-filtering`. The rest cover platform administration (agent composer/refiner/inspector, deployment, knowledge, scheduling, navigation) and analytics (folders, stage history, reporting periods, analyze-record, artifact-reading), which this agent does not need. |

Tool names in use: `creatio_describe_object`, `creatio_list_records`, `creatio_get_record`, `creatio_aggregate_records`, `creatio_validate_record`, `creatio_create_record`, `creatio_update_record`, `creatio_build_record_url`, `creatio_get_current_user`, `execute_skill_script`, `present_entity_card`/`present_data_table`/`present_outcome`. On this tenant the verdict agent reports `creatio_search_records` as unavailable.

Governance: only the built-in **Default (system)** policy exists. Earlier runs needed an approval in AI Studio **Approvals** for each save. The docs say tool confirmation and HITL can be "coming soon" per tenant.

## 2. Proposal: one agent, five skills of our own plus vendor helpers

**Agent: Project Intake Assistant** (new, Enterprise, same model so `code_execution` still reads Excel).

| # | Skill (new, Enterprise) | Based on | Job |
|---|---|---|---|
| 1 | `project-intake-lifecycle` | new | **Router / stage guide.** Resolves the intake, reads its status, explains where it is and the next step, then hands off to the right skill. New → verdict. Needs review → show the reasons, fix inputs, re-run the verdict or record a reviewer decision. Ready to apply → apply with confirmation. Applied → show links. |
| 2 | `project-intake-capture` | `project-intake` v9 | Chat capture and Excel import (read with `code_execution`), duplicate key Source + Source Project ID, batch preview, one confirmation, row outcomes. The prompt contradiction is fixed: `creatio_create_record` on `UsrADProjectIntelligence` is the approved save. Also corrects **input** fields on New/Needs review intakes when a user fixes missing facts (never result, reviewer or link fields). |
| 3 | `project-intake-verdict` **v3** | v2 | Same matching. Reads the new `UsrScoringFactor` keys, `UsrScoringRule` and `UsrIntakePriorityBand` instead of the JSON. Full UTC timestamp. Saves verdict columns only. |
| 4 | `project-intake-apply` | new | For Ready to apply (or Needs review with an explicit reviewer decision in chat): builds a plan from the recommended action, **shows the exact records and fields, asks for a yes in chat**, creates or updates the Project and/or Opportunity, then writes back to the intake (`UsrCreatedProject`, `UsrCreatedOpportunity`, `UsrStatus` = Applied, `UsrReviewedBy`) and reads everything back. Idempotent: if the created-record links are already set, it does not create again. |
| 5 | — | vendor | `creatio-create-record`, `creatio-update-record`, `query-creatio-records`, `creatio-explore-data-structure`, `datetime-interpretation`, `creatio-datetime-filtering` (attached read-only, as today). |

We edit only our own skills. Vendor skills are attached unchanged.

### Stage flow

```
New ──verdict──▶ Needs review ──fix facts / re-run verdict / reviewer decision──▶ Ready to apply
 │                                                                                    │
 └──verdict (all clear)──────────────────────────────────────────────────────────────▶│
                                                             confirm in chat ──▶ apply ──▶ Applied
                                                             (Project / Opportunity created, intake updated)
Rejected: user decision in chat, reason stored. Failed: execution error, with retry.
```

### Apply rules (default proposal, needs your OK)

| Recommended action | Creates / changes | Intake write-back |
|---|---|---|
| Create new project | New **Project** (UsrProjectName, type, stage, value, units, city/country, developer Account if resolved). **Opportunity** too when the priority is Strategic Pursuit or Active pursuit. | UsrCreatedProject, UsrCreatedOpportunity, Applied |
| Link as new phase | New **Project** with ParentProject = matched project. Opportunity by the same rule. | same |
| Update existing project | Update agreed fields on the **matched Project** (shown as a before/after table). Opportunity only if that project has no open one. | UsrMatchedProject kept, UsrCreatedOpportunity if created, Applied |
| Duplicate – no action | Nothing created | Rejected with "duplicate of <project>" |
| Needs review | Nothing until the reviewer decides in chat | – |

Required fields checked live: Project needs Name, Owner, Project record type and Status. Opportunity needs Title, Owner and Stage. Owner is the current user's contact.

## 3. Tool set (tighter than today)

Keep: describe, list, get, aggregate, validate, create, update, build_record_url, get_current_user, execute_skill_script, present_* cards, `code_execution`.
Remove: `creatio_delete_record`, `web_search` (on by default; the agent does not need the internet), folder/transition/knowledge-search tools.

Skills can declare required tools, and the skills restrict which objects are written: intake, Project, Opportunity only.

## 4. Build and test plan (after approval)

1. Create the four Enterprise skills in the AI Studio UI (draft → checks → publish), and `project-intake-verdict` v3 as a new version.
2. Create the Enterprise agent with its system prompt (routing lines per skill), tools, knowledge and a welcome message.
3. Preview in Sandbox with **Show trace**:
   - chat capture
   - Excel import of 3 new test rows, plus a re-upload that must create zero rows
   - verdicts for PI-000027 and PI-000002
   - apply on one fresh test intake, checking that a Project and Opportunity are created only after a "yes"
   - a repeat apply that must create nothing
   - a prompt-injection cell
4. Verify every write with clio read-backs and list the test record IDs for cleanup.
5. Deploy to 189543-crm-bundle. Keep the old agents online until the new one passes, then retire them (do not delete).

## 5. Known risks

- Tenants may not have tool confirmation yet, so the "yes in chat" is enforced by the skill, backed by the platform's default approval rule for write tools.
- Integration access mode is `integration` (service credentials). `creatio_get_current_user` may return the integration user, so reviewer and owner attribution must be checked in testing.
- The Excel path depends on `code_execution` (OpenAI models only per the docs). A model change would break import.

## 6. Owner decisions (29 Sep 2026)

- Opportunity: created together with the Project only when the priority is Strategic Pursuit or Active pursuit, and shown in the confirmation first.
- Duplicate – no action: nothing is created. The intake is marked Rejected with "duplicate of <project>" and the matched project link kept.
- Build method: the AI Studio browser UI, step by step, pausing at publish/deploy.
- Old agents: left online and untouched until the new agent passes. The owner then decides. Nothing is deleted.
