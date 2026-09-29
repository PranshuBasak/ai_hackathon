# Data and write contract

Environment ai_hackathon; package UsrMieleADProjects; intake UsrADProjectIntelligence. Names are intentional compatibility identifiers. Read current metadata before writing; this reference does not certify current tenant tool availability.

## Read context

- Intake: Id, ModifiedOn, UsrName, UsrStatus, UsrReviewedBy; source IDs, project name/address/location/type/stage, value/units/dates, stakeholder text, raw text and description; existing verdict and resolved selections.
- Projects: Id, UsrProjectName (human name), Name (generated ID), source/external ID, address/city/country, developer/account, parent Project, stage/value and linked opportunity when authorized. Do not query Project.Name as the human name.
- Accounts: candidate ID, names/verified aliases, type, dealer AccountCategory. Developer won-opportunity count must come from CRM; zero is valid only after a successful complete query.
- UsrScoringFactor: Id, Name, UsrWeight, UsrDescription, UsrIsActive. Use a maintained mapping of factor IDs to stable semantic keys. Do not match configuration by list position.
- Settings: proposed global JSON UsrIntakeVerdictPolicy plus existing UsrIntakeAutoApplyThreshold and UsrIntakeReviewThreshold (initial 85/50). Despite the first setting's legacy name, this phase never auto-applies.
- Lookups: UsrIntakeStatus, UsrADProjectPriority and UsrProjectAIRecommendedAction; read and resolve actual IDs. Missing/ambiguous configuration is an error, not an opportunity to invent GUIDs.

## Model proposal (JSON only)

Required keys, no additional keys:

```
{
  "intakeId": "ID supplied by context",
  "matchType": "exact|existing-update|new-phase|renamed|cross-source|none|ambiguous",
  "matchedProjectId": "candidate ID or null",
  "matchConfidence": 0,
  "decisionConfidence": 0,
  "recommendedAction": "Create new project|Update existing project|Link as new phase|Duplicate – no action|Discard (low value)|null",
  "matchReason": "Concise evidence and conflicts",
  "accountMatches": {"developer": null, "architect": null, "builder": null, "dealer": null},
  "missingInfo": ["Business facts still needed"],
  "summary": "Short proposed verdict"
}
```

Each non-null account match: `{ "accountId": "candidate ID", "confidence": 0..100, "evidence": "why" }`. A null match means unresolved, not permission to create an Account. Unknown matchType uses ambiguous and action null, with an explanation; do not force a false new-project choice. Additional LLM factor suggestions may be collected by a separate scoring step, but the host must validate/derive normalized factor inputs from approved policy and actual evidence.

## Trusted host envelope for the reference script

`intake`: id, status (state at acquisition before marking Processing), reviewerOwned, versionCurrent. `candidateProjectIds` and `accountCandidateIds` by role come from the query step. `searchComplete`, `phaseOrRename`, `ambiguousAccounts`, `requiredMissing` and `conflictingEvidence` are trusted guard results recomputed by the workflow. `policy` is administrator-approved configuration. `factors` contains active factor id/key/weight, normalized 0..100 or null, and evidence. `proposal` is the JSON above. None of the trusted envelope should be accepted from arbitrary model output or incoming source text.

## Restricted persistence mapping

| Validated result | Existing intake column |
|---|---|
| Suggested Project ID or null | UsrMatchedProject |
| Existing-project match confidence | UsrProjectMatchConfidence |
| Match evidence | UsrMatchReason |
| Canonical action lookup | UsrRecommendedAction |
| Canonical priority lookup | UsrPriorityClassification |
| Computed score | UsrQualificationScore |
| Factor contributions/rationale | UsrQualificationExplanation |
| Missing facts/stakeholders | UsrMissingInformation / UsrMissingStakeholders |
| User-facing summary | UsrAISummary |
| Full structured verdict, decision confidence, proposed Account matches, versions | UsrRecommendationDetails |
| Host completion timestamp | UsrAnalysisDate |
| Successful evaluation flag | UsrAnalysisCompleted |
| Canonical legacy analysis status, when its mapping is verified | UsrAnalysisStatus |
| Guarded lifecycle | UsrStatus |
| Sanitized execution failure; empty on successful retry | UsrAgentError |

For a valid incomplete verdict store scoreUnknown=true and a null computed score in structured details. Verify the numeric field's clear/null behavior before deployment; if it cannot represent null, write zero as an explicitly documented storage placeholder and display Data Incomplete with explanation that zero is not an evaluated score. Never leave an old score looking current.

Do not modify UsrReviewedBy, resolved Account selectors, source/raw fields, created Project/Opportunity links, opportunity recommendations or create/update booleans. This phase does not calculate an opportunity match. When a new valid run has no Project/action, explicitly clear an earlier agent-owned lookup using the supported null convention; do not retain a stale match. If a reviewer may own that field and ownership cannot be established, refuse automatic overwrite.
