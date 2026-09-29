# Foundation checklist

Updated 2026-09-28. Statuses: **Verified complete / Partial / Not started / Blocked / Deferred**. F1-F5 refer to sections of the approved implementation plan. Original references point to reference/original-plan.txt. Verification date is the evidence review date; blocked tests have not run.

| Item / plan reference | Status | Owner role | Evidence | Next action | Verification date |
|---|---|---|---|---|---|
| Scope/package reuse (F1) | Verified complete | Architect | README; decisions; live package identity | Preserve technical identifiers | 2026-09-26 |
| Original reference (F2) | Verified complete | Analyst | reference/original-plan.txt | Retain unchanged | 2026-09-26 |
| Seven documents/instructions (F2) | Verified complete | Analyst | docs/01-07; README; AGENTS | Keep status current | 2026-09-26 |
| Pre-change export (F2) | Verified complete | Administrator | backups/before-foundation; evidence/backup-sha256.json | Retain archive | 2026-09-26 |
| Regenerate/compile/restart (user follow-up) | Verified complete | Administrator | Saved compile success; user confirms no active compile and restart; successful runtime insert 2026-09-27 | Retain evidence | 2026-09-27 |
| Current package (F3) | Verified complete | Administrator | evidence/implementation-readbacks.json; target readback | Final readback | 2026-09-26 |
| Model and defaults (F3/original §2) | Partial | Developer | scripts/02-model.json; intake-effective.json; docs/02; dated appFinal readback confirms defaults | Clio insert defaults passed 2026-09-27; finish remaining metadata alignment | 2026-09-26 |
| Lifecycle and canonical lookups (F3) | Verified complete | Developer | model-and-lookups.json; live canonical readbacks | Final binding inventory | 2026-09-26 |
| Eight scoring factors totaling 100 (F3) | Verified complete | Administrator | UsrScoringFactor readback | Restrict writes | 2026-09-26 |
| Thresholds 85/50 (F3) | Partial | Administrator | Settings and SysSettings/SysSettingsValue binding readbacks | Verify permissions | 2026-09-26 |
| Nine original intakes backfilled (F3) | Verified complete | Data steward | Nine preserved GUIDs; PI-LEGACY and Needs review readback | Final count | 2026-09-26 |
| Generic branding (F3) | Partial | Developer | App/workplace renamed; browser navigation verified | Remaining captions and bindings | 2026-09-26 |
| Intake section/list/form (F4) | Partial | Developer | Browser list/filter checks; existing form addon; raw-text save and restoration verified; verdict-only readonly rule | Manual creation after compiled listener fix | 2026-09-26 |
| Buying centre/Intake history (F4) | Partial | Developer | New Project fields and both related-list areas saved; matched intake list verified against temporary link | Verify created-project history and Buying centre in browser | 2026-09-26 |
| Static baseline assets (F2/F4/original §6) | Verified complete | Data steward | seed-data; workbook; manifest; tests/oracle.csv | Resolve live values before load | 2026-09-26 |
| Baseline loaded (F4) | Verified complete | Data steward | demo-readback-2026-09-27.json: 20 accounts, 15 contacts, 25 projects, 95 participants, 8 opportunities, 8 opportunity contacts and 8 project links | Use manifest for scoped reset; platform tags pending | 2026-09-27 |
| Import mapping (F4) | Partial | Data steward | docs/import-mapping.json; workbook mapping | Record actual mapping/tool used by owner; reimport acceptance remains | 2026-09-26 |
| Import/reimport 15 rows (F5/T01/T02) | Partial | Tester | Clio loaded/read back 15 New fixtures; original nine preserved; zero intake Leads | Saved wizard mapping and reimport preservation test remain | 2026-09-27 |
| Manual create/default execution (F4/F5) | Partial | Tester | Clio inserts verify PI numbers, received timestamps and New defaults | Manual UI create acceptance remains; user prefers Clio for record verification | 2026-09-27 |
| Employee/admin permissions (F4/F5/T19) | Partial | Administrator | Existing workplace grant retained; scoring operation rights saved and Clio role rows verified (scoring-acl-readback.json) | Package permissions; settings/global override checks; nonadmin verification | 2026-09-26 |
| Navigation/package bindings (F5) | Partial | Tester | Section visible in Project Intake; B02 resolved using native section update; app/workplace/section binding readbacks | Final addon/export inventory | 2026-09-26 |
| Corrected review/error/reset/estimate rules (F5) | Verified complete | Architect | docs/04,05,07; decisions | Implement in AI phase | 2026-09-26 |
| Capture agent and Excel capture (owner follow-up) | Partial | AI developer / Data steward | Owner confirms built agent and successful Excel import on 2026-09-28; IDs/count not provided | Capture agent ID/version and actual import evidence; verify reimport/email/chat separately | 2026-09-28 |
| Verdict-agent build kit (owner follow-up) | Verified complete | AI developer | docs/ai-studio/verdict-agent; 25 local reference tests pass | Configure agent/tools and approve proposed scoring rubric in Creatio | 2026-09-28 |
| Scoring rule objects (UsrScoringRuleType/UsrScoringRule/UsrIntakePriorityBand, factor keys) | Verified complete | Administrator | docs/ai-studio/verdict-agent/07-installed-scoring-objects.md; clio read-back 2 types, 39 rules, 4 bands, 8 factors; bindings verified | Skill v3 reads the new objects; redeploy; rerun PI-000027/PI-000002; permissions stay open per owner | 2026-09-28 |
| Verdict matching/scoring execution (F5) | Not started | AI developer | Local kit prepared; no live verdict execution verified | Build and test one intake | 2026-09-28 |
| Apply/batch/email-chat acceptance/AI metrics (F5) | Deferred | AI developer | docs/05-test-plan.md | Next phase | 2026-09-26 |
| Dynamic configuration examples and verdict-kit refinement (owner follow-up / F3 / F5) | Verified complete | AI developer | 04-configuration-records-and-setup.md; exact eight row specifications; policy/configuration adapter; 25 offline tests | Review proposed business values; implement live adapter and approve only after validation | 2026-09-28 |
| Structured rule configuration installed (F3 / F5) | Verified complete | Administrator / AI developer | evidence/verdict-policy-readback-2026-09-28.json; policy demo-2026-09-28-v1 approved; eight IDs/weights and rule hash verified | Test AI Studio runtime access and implement evaluator/save action | 2026-09-28 |
| Verdict-policy transfer bindings (F3 / F5) | Partial | Administrator | Factor binding verified; SysSettings binding update refused protected object (ebcdc8611bee) | Bind new setting/value through native Configuration or supported installation script | 2026-09-28 |

Foundation acceptance is **not complete**. Original checked boxes are not accepted as execution evidence.
