# Project Intake

Project intelligence to pipeline for building-products manufacturers.

## Public repository scope

This repository contains project documentation, configuration/page scripts, fictional demo assets and AI Studio build materials. Local `backups/`, `evidence/` and `.clio-pages/` are excluded from Git because they contain environment exports and runtime snapshots. References to those folders describe locally retained evidence; a fresh clone does not contain it. Scripts that depend on those inputs require an authorized environment export before use. This repository is not a standalone application or a complete installable Creatio package.

Fictional demonstration: Everline Appliances. Native Creatio AI is a later implementation phase; existing legacy AI components are not proof of a working intake workflow.

## Environment

- Workspace: C:\Others\proj\ai_hackathon
- Clio environment: `ai_hackathon`
- URL: https://189543-crm-bundle.creatio.com
- Configuration: https://189543-crm-bundle.creatio.com/0/ClientApp/#/WorkspaceExplorer (verified from the user's supplied link).
- Package: `UsrMieleADProjects` (technical name intentionally retained).
- Intended app/workplace caption: **Project Intake**.
- Intake: `UsrADProjectIntelligence`; participants: `UsrADProjectParty`.
- Project human-readable name: `Project.UsrProjectName`; `Project.Name` remains its generated ID.

## Start here

1. Read docs/06-checklist.md and docs/implementation-log.md for actual progress.
2. Read docs/decisions.md before making model or naming changes.
3. Read evidence/import-blocker.md before any intake insertion. The listener runtime gate passed on 2026-09-27; retain its historical evidence.
4. Refresh live metadata through Clio MCP; snapshots are dated evidence, not current guarantees.
5. Use Clio read-back to verify record creation, as requested. Browser checks apply to remaining UI acceptance work.

The original reference is retained unchanged under reference/original-plan.txt. The approved implementation direction supersedes its new-package and AI_Creatio-folder instructions.

## Files

Seven planning documents are in docs/01-architecture.md through docs/07-demo-script.md. Inventory and read-back evidence are under evidence/. Pre-change backups are under backups/. Fictional CSVs, workbook and text samples are under seed-data/. tests/oracle.csv defines future AI expectations, not executed results.

## Scope

This phase establishes schema, configuration, navigation, review UI, import assets and evidence. Native agent skills, matching/scoring execution, batch processing, Apply, chat/email entry and AI metrics remain deferred.

## Verification

Use Clio metadata/data read-back plus browser checks. A schema count, successful save, or an old checked box does not prove a workflow works. Statuses are Verified complete, Partial, Not started, Blocked and Deferred.

## User walkthrough

See [the step-by-step user guide](docs/08-user-guide.md) for available foundation tasks, demo examples and the future AI workflow. Demo records are loaded and verified; spreadsheet reimport acceptance remains pending.

## Latest checkpoint — 28 September 2026

The owner confirms the capture agent is built and Excel intake import succeeded. Actual agent/import IDs and broader acceptance remain to be recorded. See [checkpoint](docs/checkpoint.md) and the [Verdict Analyst build kit](docs/ai-studio/verdict-agent/README.md). The kit includes system/build prompts, a skill, references, assets, an offline reference script and email/chat examples; it is not a deployed verdict agent.
