# Project Intake Verdict Analyst — build kit

## Live deployment update — 28 September 2026

`UsrIntakeVerdictPolicy` now exists in ai_hackathon as global MaxSizeText, uncached and nonpersonal. Version `demo-2026-09-28-v1` is approved for the owner-authorized hackathon demo. Eight existing factors now carry the structured rules; IDs/weights are preserved and original prose is in Description. See [installed policy and integration handoff](05-installed-policy-and-agent-read.md). The `*.proposed.*` files remain draft templates; runtime must read the installed values. Scoring/save execution in AI Studio remains unverified. Factor bindings are verified; the new setting/value package bindings remain pending after a SysSettings permission refusal.


Prepared 28 September 2026. Capture agent and Excel import are user-confirmed. This second agent is a local build kit, not a deployed/tested Creatio agent. No live platform changes were made in preparing it.

## What this agent does

Analyze one existing intake → find candidate Projects/Accounts → recommend a match/action → calculate approved configurable priority → save only the AI verdict → explain the result. Project creation and Apply remain separate.

## Use in AI Twin / AI Studio

1. Read `04-configuration-records-and-setup.md` for the exact eight factor rows, three settings, lookup meanings and worked example. Attach `03-reference-pack.md` and paste `01-build-prompt.txt` into AI Twin. The pack includes this setup guide. The reference pack combines the skill's data, matching, scoring and workflow contracts for convenient knowledge upload.
2. Create an enterprise agent called **Project Intake Verdict Analyst**, keeping the first capture agent intact. Place `02-system-prompt.txt` in System Instructions. Suggested welcome: "Give me an intake number and I will assess its project match, pursuit priority and review requirements."
3. For a reusable skill, configure/register **project-intake-verdict** using `project-intake-verdict/SKILL.md` and its references/assets/scripts through the tenant's supported mechanism. Then attach the registered skill in Build > Skills. The ZIP is a transport bundle, not a verified one-click Creatio installer. If skill registration is unavailable, attach the reference pack as Knowledge and implement the same logic using tools/workflows.
4. Bind the internal Creatio.ai Twin chat channel and enable only the necessary CRM/configuration reads plus a restricted verdict workflow. Knowledge upload alone cannot write records or run Python.
5. Implement the tool/workflow responsibilities in `references/workflow.md`. Verify candidate retrieval, lookup IDs, concurrency, reviewer preservation and field allowlists. Confirm the proposed numerical rubric/bands before approving policy configuration. Keep its approval false until then.
6. Preview one existing intake by exact ID/number. Start with a complete new-project case, then phase/rename/missing-dealer cases. Do not start an automatic batch or trigger every New record yet.
7. Verify actual saved status, match, score/priority and structured details using Clio or the connected CRM read tool. Check that no Project/Lead/Opportunity was created. Save run IDs and configuration version. Publish/deploy after those acceptance checks.

## Files

| File | Use |
|---|---|
| 01-build-prompt.txt | Builder request for AI Twin |
| 02-system-prompt.txt | Agent runtime instructions |
| 03-reference-pack.md | Single uploadable knowledge/reference document |
| 04-configuration-records-and-setup.md | Full proposed records, storage choice, setup steps and 87.75 worked example |
| project-intake-verdict/assets/scoring-factor-records.proposed.json / .csv | Eight proposed factor row specifications; update existing verified IDs only |
| project-intake-verdict/assets/system-setting-records.proposed.json | One proposed and two existing setting specifications |
| project-intake-verdict/scripts/configure_verdict.py | Dynamic rule parsing/evaluation and snapshot reference |
| project-intake-verdict/SKILL.md | Reusable skill instructions |
| project-intake-verdict/references/ | Exact data/writes, matching, proposed scoring and workflow responsibilities |
| project-intake-verdict/assets/policy-proposed.json | Unapproved policy scaffold; does not change live settings |
| project-intake-verdict/assets/example-input.json | Synthetic local script test; not CRM fixture records |
| project-intake-verdict/assets/verdict-display-template.md | Human-readable result template |
| project-intake-verdict/scripts/validate_verdict.py | Local validator, score calculator and review routing reference |
| project-intake-verdict/scripts/test_validate_verdict.py | Regression checks |
| assets/example-capture-email.txt | New fictional email input for the first capture agent |
| assets/conversation-demo.md | Capture dialog, followed by second-agent verdict invocation |

## Run local reference checks

From this folder:

```
python -m unittest discover -s project-intake-verdict/scripts -p "test_*.py"
python project-intake-verdict/scripts/validate_verdict.py project-intake-verdict/assets/example-input.json
```

Python standard library only. The example uses explicitly synthetic policy approval for tests; the separate proposed policy asset stays unapproved. Twenty-five local tests passed on 28 September, covering score arithmetic, dynamic rule changes, approval/hash drift, required fields, unknown vs zero evidence, invalid configuration, review overrides, confidence, incomplete search and record protection. This does not prove actual extraction/matching quality or a working Creatio deployment.

## Research used

Checked 28 September 2026: [Create a prompt agent](https://academy.creatio.com/guides/ai-studio/create-a-prompt-agent) documents system instructions, registered tools, attached skills with files/references/scripts/assets, Knowledge, preview and deployment. [AI Studio overview](https://academy.creatio.com/guides/ai-studio/creatio-ai-studio-overview) describes combining AI steps with deterministic workflows. The exact reusable-skill import mechanism and executable runtime support must be checked in this tenant; no unsupported upload API or tool name is assumed here.

## Remaining decisions

- Approve or revise the proposed numeric factor rubric, completeness requirements and priority bands. Live initial weights/85–50 settings are prior configuration, not proof of the new rubric's approval.
- Select actual workflow/tool IDs and runtime adapter. Python is reference code, not C# and not automatically runnable as knowledge.
- Record capture agent ID/version and the successful Excel import's actual IDs/count. Reimport preservation and email/chat capture still need their own evidence.
- Keep the original demo oracle's expected outcomes unchanged until measured; record policy conflicts explicitly.
