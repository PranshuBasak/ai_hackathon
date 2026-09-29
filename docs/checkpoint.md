# Project checkpoint — 29 September 2026

## Current state — 29 September 2026

**Project Assistant** is built, released and deployed. It is an Enterprise AI Studio agent (`d1ff97d6-d5fd-454b-ae9a-21b0a878cd8a`), agent version 3, on 189543-crm-bundle. It combines four custom skills:
- lifecycle v1;
- capture v3 (**v4 with near-match proposals prepared**);
- verdict v5;
- apply v3.

Sources: `docs/ai-studio/unified-agent/`.

**Verified in the bundle with clio read-backs:**
- Chat capture with stakeholder, lookup and contact linking.
- Verdict: deterministic scoring from the lookups, outcome flags, buying-centre health, JSON audit.
- Apply after an explicit "yes": Project, 4 involved parties, Opportunity and intake write-back.
- Idempotent re-apply.
- Records: PI-000034 → Project 1000000028 + "Larkspur Commons pursuit"; PI-000037 → Ready to apply, 82.00 Strategic.

**Platform additions:**
- Key contact lookup `UsrLinkedContact`, with entity business rule `BusinessRule_5d8c9e5` filling the contact name and email on the page.
- Linked-record lookups render as links.

**Demo pack:** `docs/demo/` (Scripts A–E, submission text, capabilities reference, video run-of-show). The backing data is manifest-listed (`demoScripts`, `demoScriptsDE`, `stakeholderFixtures`, `testSet2`).

**Not yet run end to end in the bundle:** the Excel batch import through Project Assistant, and Scripts B–E (the AI capacity ran out on 29 Sep). The legacy Project Intake and Verdict Assistant agents are kept until the new agent passes all demos.


## Live deployment update — 28 September 2026

`UsrIntakeVerdictPolicy` now exists in ai_hackathon as global MaxSizeText, uncached and nonpersonal. Version `demo-2026-09-28-v1` is approved for the owner-authorized hackathon demo. Eight existing factors now carry the structured rules; IDs/weights are preserved and original prose is in Description. See [installed policy and integration handoff](ai-studio/verdict-agent/05-installed-policy-and-agent-read.md). The `*.proposed.*` files remain draft templates; runtime must read the installed values. Scoring/save execution in AI Studio remains unverified. Factor bindings are verified; the new setting/value package bindings remain pending after a SysSettings permission refusal.


## Latest owner confirmation

- The first agent for creating Project Intake records has been built.
- Excel records were successfully imported into Creatio Project Intake.
- Evidence source: direct user report on 28 September 2026. Agent name/ID/version, workbook identity, imported row count/IDs and field-by-field verification were not supplied in this report. Do not invent them or infer a fresh total count.
- This confirmation supersedes earlier blanket statements that capture has not been built. It does not establish email/chat capture, repeat-import preservation, permission testing or AI-verdict execution.

## Last independently verified platform baseline

27 September: 171 baseline fixture records, 15 demo intakes, eight Project–Opportunity links and supporting Charlotte lookup verified through Clio; nine original intakes preserved. No intake-linked Leads. Exact IDs are in the fixture manifest. That snapshot predates the owner's latest import, so it is not a current total count.

## Deliverables prepared now

`docs/ai-studio/verdict-agent/`: build prompt, system instructions, portable skill source, reference documents, proposed policy asset, offline validator/tests, example capture email and conversation. Local tests: 25 passed (13 verdict checks plus 12 dynamic-configuration checks). No verdict agent or workflow deployed by Codex in this turn. No live lookup/policy changes. No repository push performed in this turn.

## Next work

1. Record the first agent's actual ID/version and imported intake IDs when available; validate duplicate/reimport preservation separately. Do not reset unmanifested imported records.
2. Build the Verdict Analyst against one selected existing intake using the kit.
3. Approve/configure numerical scoring rules and register restricted retrieval/save actions.
4. Verify complete, phase, rename, unknown stakeholder, incomplete-search and failure cases via CRM read-back.
5. Implement Apply only in the later phase. Preserve reviewer fields and original records.

## Resume rules

Work in this folder; always pass environment-name ai_hackathon to Clio. Read this checkpoint, implementation-log, checklist and import-blocker. Record owner reports separately from tool-verified behavior. Never run scripts/build_assets.py after fixture loading; it resets the manifest. Prefer Clio for record verification as requested. The owner's current request authorizes preparation of the verdict-agent kit, not live deployment.

## Dynamic verdict configuration refinement — 28 September 2026

User requested exact configuration records and refinement of the verdict AI. Added a complete setup guide and eight factor record specifications (JSON/CSV), one proposed global policy setting plus two existing threshold specifications, synthetic business facts and a deterministic dynamic-configuration adapter. Reuses UsrScoringFactor; no new object/list page. The proposed JSON-in-UsrDescription migration and text-setting capacity still require deployment review and read-back. Policy stays unapproved.

Prompt/skill/contracts now require current approved configuration, stable factor keys/IDs, validated hash/weights/bands, required facts, immutable phase/rename review, and saved configuration snapshots. Worked example 87.75 Strategic; reapproved band change 78.75 Active. All 25 offline tests pass. No live changes, agent deployment, new intake insertion or GitHub push. Next: review business policy, then separately implement restricted configuration/read/evaluate/save tools and verify on one existing intake.

## Current authorization

The owner explicitly requested live creation of UsrIntakeVerdictPolicy and then directed creation to proceed without waiting for export. The export had just finished. Live configuration setup supersedes the older kit-only scope for this operation; AI Studio deployment and verdict-save implementation are still separate remaining work.

## Scoring rule objects — 28 September 2026

Built through clio MCP and verified: UsrScoringRuleType (2), UsrScoringRule (39 active), UsrIntakePriorityBand (4). UsrScoringFactor now has UsrFactorKey and UsrRuleType, and its 8 rows are preserved. All of it is bound to UsrMieleADProjects. At the owner's request the new lookups are open to everyone. See [07-installed-scoring-objects.md](ai-studio/verdict-agent/07-installed-scoring-objects.md). Next: skill v3 reads these objects, redeploy the Verdict Assistant, rerun PI-000027/PI-000002. Keep UsrIntakeVerdictPolicy until the new path is verified.
