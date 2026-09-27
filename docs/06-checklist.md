# Foundation checklist

Updated 2026-09-27. Statuses: **Verified complete / Partial / Not started / Blocked / Deferred**. F1-F5 refer to sections of the approved implementation plan. Original references point to reference/original-plan.txt. Verification date is the evidence review date; blocked tests have not run.

| Item / plan reference | Status | Owner role | Evidence | Next action | Verification date |
|---|---|---|---|---|---|
| Scope/package reuse (F1) | Verified complete | Architect | README; decisions; live package identity | Preserve technical identifiers | 2026-09-26 |
| Original reference (F2) | Verified complete | Analyst | reference/original-plan.txt | Retain unchanged | 2026-09-26 |
| Seven documents/instructions (F2) | Verified complete | Analyst | docs/01-07; README; AGENTS | Keep status current | 2026-09-26 |
| Pre-change export (F2) | Verified complete | Administrator | backups/before-foundation; evidence/backup-sha256.json | Retain archive | 2026-09-26 |
| Regenerate/compile/restart (user follow-up) | Verified complete | Administrator | Saved compile success; user confirms no active compile and restart; successful runtime insert 2026-09-27 | Retain evidence | 2026-09-27 |
| Current package (F3) | Verified complete | Administrator | evidence/implementation-readbacks.json; target readback | Final readback | 2026-09-26 |
| Model and defaults (F3/original §2) | Partial | Developer | scripts/02-model.json; intake-effective.json; docs/02; dated appFinal readback confirms defaults | Execute insert/default test after compiled listener fix | 2026-09-26 |
| Lifecycle and canonical lookups (F3) | Verified complete | Developer | model-and-lookups.json; live canonical readbacks | Final binding inventory | 2026-09-26 |
| Eight scoring factors totaling 100 (F3) | Verified complete | Administrator | UsrScoringFactor readback | Restrict writes | 2026-09-26 |
| Thresholds 85/50 (F3) | Partial | Administrator | Settings and SysSettings/SysSettingsValue binding readbacks | Verify permissions | 2026-09-26 |
| Nine original intakes backfilled (F3) | Verified complete | Data steward | Nine preserved GUIDs; PI-LEGACY and Needs review readback | Final count | 2026-09-26 |
| Generic branding (F3) | Partial | Developer | App/workplace renamed; browser navigation verified | Remaining captions and bindings | 2026-09-26 |
| Intake section/list/form (F4) | Partial | Developer | Browser list/filter checks; existing form addon; raw-text save and restoration verified; verdict-only readonly rule | Manual creation after compiled listener fix | 2026-09-26 |
| Buying centre/Intake history (F4) | Partial | Developer | New Project fields and both related-list areas saved; matched intake list verified against temporary link | Verify created-project history and Buying centre in browser | 2026-09-26 |
| Static baseline assets (F2/F4/original §6) | Verified complete | Data steward | seed-data; workbook; manifest; tests/oracle.csv | Resolve live values before load | 2026-09-26 |
| Baseline loaded (F4) | Verified complete | Data steward | demo-readback-2026-09-27.json: 20 accounts, 15 contacts, 25 projects, 95 participants, 8 opportunities, 8 opportunity contacts and 8 project links | Use manifest for scoped reset; platform tags pending | 2026-09-27 |
| Import mapping (F4) | Partial | Data steward | docs/import-mapping.json; workbook mapping | Save platform mapping after B01 | 2026-09-26 |
| Import/reimport 15 rows (F5/T01/T02) | Partial | Tester | Clio loaded/read back 15 New fixtures; original nine preserved; zero intake Leads | Saved wizard mapping and reimport preservation test remain | 2026-09-27 |
| Manual create/default execution (F4/F5) | Partial | Tester | Clio inserts verify PI numbers, received timestamps and New defaults | Manual UI create acceptance remains; user prefers Clio for record verification | 2026-09-27 |
| Employee/admin permissions (F4/F5/T19) | Partial | Administrator | Existing workplace grant retained; scoring operation rights saved and Clio role rows verified (scoring-acl-readback.json) | Package permissions; settings/global override checks; nonadmin verification | 2026-09-26 |
| Navigation/package bindings (F5) | Partial | Tester | Section visible in Project Intake; B02 resolved using native section update; app/workplace/section binding readbacks | Final addon/export inventory | 2026-09-26 |
| Corrected review/error/reset/estimate rules (F5) | Verified complete | Architect | docs/04,05,07; decisions | Implement in AI phase | 2026-09-26 |
| Agent/skills/matching/scoring execution (F5) | Deferred | AI developer | docs/04-agent-design.md | Next phase | 2026-09-26 |
| Apply/batch/chat/email/AI metrics (F5) | Deferred | AI developer | docs/05-test-plan.md | Next phase | 2026-09-26 |

Foundation acceptance is **not complete**. Original checked boxes are not accepted as execution evidence.
