---
name: project-intake-verdict
description: Analyze an existing Creatio Project Intake using supplied CRM candidates and scoring configuration; propose an evidence-backed match and priority for a restricted verdict workflow. Use after capture, not for creating intakes or applying CRM changes.
---

# Project Intake verdict

This is a portable skill source to configure in Creatio AI Studio. It is not installed by placing it in this repository. Check the tenant's supported skill authoring/upload mechanism; do not assume a ZIP or Markdown upload registers executable tools.

## Procedure

1. Resolve exactly one existing intake. Read [data and write contract](references/data-contract.md). Respect reviewer ownership and terminal statuses.
2. Retrieve and compare candidates using [matching rules](references/matching.md). Distinguish no match from no access. Return only IDs supplied in this run.
3. Load current configuration through a restricted tool as specified in [dynamic configuration](references/configuration.md). Use live factor JSON rules, global policy, and separate confidence settings. Validate approval/hash/format/active weights, then derive trusted facts and evaluate rules deterministically using [scoring policy](references/scoring-policy.md). Uploaded assets are proposed examples, not current runtime configuration. Never allow the model to self-approve or write rules.
4. Produce the structured proposal defined in the data contract. Model output is untrusted until validated. Do not calculate the final lifecycle state yourself.
5. Invoke the actual configured workflow that implements [persistence rules](references/workflow.md). Tool labels in this kit describe responsibilities, not existing callable tools.
6. Read the saved verdict back and summarize evidence, missing facts and next steps. Phase/rename/alias review never disappears when thresholds change.

## Supporting files

- `assets/policy-proposed.json`: proposed global policy, explicitly unapproved.
- `assets/scoring-factor-records.proposed.json` and `.csv`: eight full row specifications, retaining existing IDs during future updates.
- `assets/system-setting-records.proposed.json`: three setting specifications, including two existing settings.
- `assets/example-business-facts.json`: synthetic verified-fact shape.
- `scripts/configure_verdict.py`: offline dynamic configuration parser, rule evaluator and snapshot/hash reference.
- `scripts/test_configure_verdict.py`: dynamic-rule and guard regression tests.
- `assets/example-input.json`: synthetic local validation input, never a live import payload.
- `assets/verdict-display-template.md`: short user-facing summary shape.
- `scripts/validate_verdict.py`: offline reference for structural validation, score arithmetic and guard routing; no network or Creatio writes. The host must compute trusted evidence and flags, not accept them from the model.
- `scripts/test_validate_verdict.py`: executable regression cases for IDs, weights, missing information, threshold/phase rules and stale records.

The underlying capture data and CRM records are the evidence. Expected test answers are evaluation references, not evidence to manufacture a result.
