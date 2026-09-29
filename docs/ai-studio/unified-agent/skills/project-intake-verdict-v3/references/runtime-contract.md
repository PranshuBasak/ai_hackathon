# Runtime contract — 189543-crm-bundle (v5, verified 2026-09-29)

Use these exact column codes and IDs. Do not rediscover them.

## 1. Intake read — UsrADProjectIntelligence
`creatio_list_records` filter `{ all:[{ field:"UsrName", op:"eq", value:"PI-000027" }] }`, or `creatio_get_record` by Id.
Columns: Id, ModifiedOn, UsrName, UsrStatus, UsrReviewedBy, UsrProjectName, UsrProjectDescription, UsrProjectAddress, UsrCityText, UsrStateText, UsrCountryText, UsrProjectTypeText, UsrStageText, UsrEstimatedProjectValue, UsrExpectedOrderValue, UsrNumberOfUnits, UsrCompletionYear, UsrDeveloperName, UsrArchitectName, UsrBuilderName, UsrDealerName, UsrContractorName, UsrDeveloperAccount, UsrArchitectAccount, UsrBuilderAccount, UsrDealerAccount, UsrExternalProjectId, UsrExternalSource, UsrRawText, UsrMatchedProject, UsrRecommendedAction, UsrCreatedProject, UsrLinkedContact, UsrKeyContactName, UsrProjectClassification, UsrServiceRiskLevel, UsrExpectedMargin.

## 2. Candidate reads
Project (max 10 per query), columns: Id, Name, UsrProjectName, UsrExternalId, UsrExternalSource, UsrProjectAddress, UsrCity, UsrProjectCountry, Account, ParentProject, UsrConstructionStage, UsrEstimatedProjectValue, UsrNumberOfUnits, Type.
Run all of these queries and record which succeeded:
- UsrProjectName contains the distinctive word(s) of the intake name. Drop generic words such as Residences, Apartments, Tower, Phase, Development.
- UsrExternalId eq UsrExternalProjectId, when present.
- UsrProjectAddress contains the street part of UsrProjectAddress, when present.
- Account eq the developer candidate Id, after the developer Account read.

Project.Name is a generated ID, never the human name.

Account (max 5 per role), columns: Id, Name, AlternativeName, Type, AccountCategory. Filter `{ any:[{field:"Name",op:"contains",value:"<word>"},{field:"AlternativeName",op:"contains",value:"<word>"}] }` for the developer, architect, builder and dealer names. A stakeholder is **resolved** when exactly one candidate's Name or AlternativeName equals the supplied name, ignoring case, punctuation and legal suffix. Otherwise it is unresolved. **A stakeholder whose intake account lookup (UsrDeveloperAccount, UsrArchitectAccount, UsrBuilderAccount, UsrDealerAccount) is already set is resolved to that Account.** It was linked at capture, possibly by the user's choice. Read that Account by Id and skip the name search for that role.

Developer won opportunities: `creatio_aggregate_records` on objectCode Opportunity, metrics `[{op:"count"}]`, filter Account eq <developer Id> and Stage.Successful eq true. A successful call gives the count (0 is valid). An error means unknown.

## 3. Configuration reads (lookups)
- **Factors**: `creatio_list_records` UsrScoringFactor, columns Id, Name, UsrFactorKey, UsrRuleType, UsrWeight, UsrIsActive, filter UsrIsActive eq true. Expect 8 rows with weights totalling 100. If the total is not 100, or any key or rule type is empty → configuration error: save a Data Incomplete verdict (Needs review) and say so.
  - Rule type Ids: Bands `16c2bb64-4f3a-4a26-a41a-9c406df08129`, Value list `6f08edcc-0936-4127-9a1c-98fca5f8f6e3`.
- **Rules**: `creatio_list_records` UsrScoringRule, columns Id, Name, UsrScoringFactor, UsrMatchValue, UsrMinValue, UsrScore, filter UsrIsActive eq true, up to 200 rows.
  - For a **Bands** factor, use UsrMinValue. Ignore UsrMatchValue.
  - For a **Value list** factor, use UsrMatchValue. **Ignore UsrMinValue**: it reads 0.00 because Creatio decimals cannot be empty.
- **Priority bands**: `creatio_list_records` UsrIntakePriorityBand, columns Name, UsrPriority, UsrMinScore, filter UsrIsActive eq true, sorted by UsrMinScore desc.
- **Thresholds**: `creatio_list_records` SysSettingsValue, columns [SysSettings, IntegerValue, FloatValue], filter SysSettings.Code in [UsrIntakeAutoApplyThreshold, UsrIntakeReviewThreshold]. If they cannot be read, report it and treat the result as Needs review.

## 4. Fact derivation and scoring
Facts per factor key (from the intake plus the CRM reads):
- `construction_value` = UsrEstimatedProjectValue (>0). US projects are USD. Non-US without currency evidence → unknown.
- `units` = UsrNumberOfUnits (>0), else unknown.
- `type_fit` = UsrProjectTypeText. Blank → unknown.
- `stage` = UsrStageText. Blank → unknown.
- `architect`: resolved → "Resolved"; name given but unresolved → "Supplied, not resolved"; the source says there is none → "Explicitly absent"; blank → unknown.
- `dealer`: the resolved dealer Account's AccountCategory "A".."D"; the source says there is none → "Explicitly absent"; otherwise unknown.
- `developer_relationship`: won-opportunity count from §2. An unresolved developer or a failed query → unknown.
- `region`: two-letter US state code from UsrStateText (North Carolina → NC, Georgia → GA, and so on).

Scoring:
- **Bands**: sort that factor's rules by UsrMinValue from high to low. Take the first rule where UsrMinValue ≤ fact. None → unknown.
- **Value list**: take the rule whose UsrMatchValue equals the fact, ignoring case and surrounding spaces. None → unknown. Never pick the closest one.
- Points = UsrWeight × UsrScore / 100. Score = sum over the active factors, rounded to 2 decimals. Any unknown → score unknown.
- Priority: the first band (UsrMinScore desc) with UsrMinScore ≤ score. Score unknown → Data Incomplete `056bb6d1-4bca-4b58-ad23-0400585d42b8`.
- Configuration snapshot for the details JSON: `configSource:"lookups"`, plus the list of rule Ids used.

## 4b. Outcome flags and secondary indicators (deterministic; never guessed)
Outcome flags (Boolean), from this verdict's own result:
- **UsrCanCreateProject** = true when the status is Ready to apply and the action is Create new project or Link as new phase; otherwise false.
- **UsrCanUpdateOpportunity** = true when a Project is matched and it has an open Opportunity: `creatio_list_records` Opportunity, filter UsrADProject eq <matched project> and Stage.End eq false. Otherwise false.
- **UsrCanCreateOpportunity** = true when the status is Ready to apply, the priority is Strategic Pursuit or Active pursuit, the action is not Duplicate or Needs review, and UsrCanUpdateOpportunity is false; otherwise false.
- On Needs review, all three are false (a reviewer decides).

Secondary indicators:
- **UsrBuyingCentreHealth** (0–100) = the share of the 5 buying-centre slots that are linked to CRM records × 100, rounded to 2 decimals. The slots are developer, architect, builder and dealer (resolved Account) plus the key contact (UsrLinkedContact set, or exactly one Contact with Name eq UsrKeyContactName at a resolved stakeholder Account). Example: 4 companies + contact = 100; 3 companies, no contact = 60. Put the per-slot list in the details JSON (`buyingCentre`).
- **UsrProjectClassification** (Premium `69a89461-7907-4ab8-858e-ffb0da7c13cf`, Luxury `6e319723-81da-490e-9f53-7d80507c7b0d`, Sustainable `d563b295-eaf8-4a25-ba53-66ecd83f06e5`), **UsrServiceRiskLevel** (Low `2a1c4a2e-2187-4943-8dd2-dedcbbf414fc`, Medium `13fa1326-3785-4e41-8e13-ba5f11edcabb`, High `37d80109-0cbe-4ab2-8e64-88d27a274aa4`, Critical `bc85b023-6aa1-48a2-bff4-51227d0de65b`) and **UsrExpectedMargin** (%): set ONLY when the intake text (UsrRawText or UsrProjectDescription) states the value explicitly, or the user states it in this conversation. Never infer from project type, value or name. If already set on the intake, keep it. If not stated, leave it empty and list it under "optional, not provided" in the reply.
- **UsrProbabilityOfConversion**: never written; no approved formula exists yet.

## 5. Lookup IDs
UsrStatus (UsrIntakeStatus):
- New efc4cf1b-1b15-4d92-9a65-59960f61e99e
- Needs review 482534fa-1256-40b1-9aa9-20579310371f
- Ready to apply 34ae47af-2c13-4af0-877b-fe63f032186a
- Failed 5ea67c8a-12a4-46dc-9446-2786402a52db
- Applied ed10d767-5af4-4499-b2d1-0dc2eafb90e7 (never written by the verdict)
- Rejected 9ba55372-9208-423c-af9b-6548fe2a7097 (never written by the verdict)

UsrPriorityClassification (UsrADProjectPriority):
- Strategic Pursuit cd40437e-7dd9-474c-ae9a-aa8a3f427d90
- Active pursuit e0e28bab-371b-45fe-884a-98fac2223895
- Monitor 81dac008-adeb-42ea-92bc-6bb5a12fbfa9
- Low priority 78b15b90-0c32-4b5e-8f83-89626e7b2ca4
- Data Incomplete 056bb6d1-4bca-4b58-ad23-0400585d42b8

UsrRecommendedAction (UsrProjectAIRecommendedAction), by matchType:
- none (verified no match) → Create new project 8d1f9fbe-383e-4dff-a941-5dcf90e1088e
- existing-update / renamed / cross-source → Update existing project 3b92e710-a9f9-43d7-ae2d-f69e42c2c78b
- new-phase → Link as new phase dcf2f30f-5b8b-4e26-b964-33e5e7b358d7
- exact → Duplicate – no action cf6911d3-809d-4643-8b3e-3c8765e80fcb
- ambiguous / incomplete search → Needs review a69a4216-1c34-4704-9336-0dfc07fc1ac1

UsrAnalysisStatus (UsrProjectAIAnalysisStatus): Completed b94d62f8-61d6-4f5b-88c8-3ee99001eda3 | Failed c1598d40-1016-4c2d-a323-290706496ac2.

## 6. Status decision
Needs review if ANY of these holds:
- phase or rename
- unresolved stakeholder
- missing required fact
- score unknown
- conflicting evidence
- incomplete search
- decisionConfidence < the auto-apply threshold
- a selected match with matchConfidence < the auto-apply threshold

Otherwise Ready to apply. Below the review threshold, add "low confidence" to UsrMissingInformation.

## 7. Write — creatio_update_record, objectCode UsrADProjectIntelligence, id <intake Id>
Allowed keys only:
- UsrMatchedProject (Project Id or null)
- UsrProjectMatchConfidence (0-100)
- UsrMatchReason (text)
- UsrRecommendedAction (Id)
- UsrPriorityClassification (Id)
- UsrQualificationScore (number; 0 when unknown, and say "not evaluated" in the explanation)
- UsrQualificationExplanation (factor table text)
- UsrMissingInformation (text)
- UsrMissingStakeholders (text)
- UsrAISummary (2-4 sentences)
- UsrRecommendationDetails (JSON string)
- UsrAnalysisDate (**full current UTC ISO timestamp** with time, e.g. 2026-09-29T14:05:12Z, from the platform date tool or code execution; never a date-only value)
- UsrAnalysisCompleted (true)
- UsrAnalysisStatus (Completed Id)
- UsrStatus (Needs review or Ready to apply Id)
- UsrAgentError ("" on success)
- UsrCanCreateProject, UsrCanCreateOpportunity, UsrCanUpdateOpportunity (§4b)
- UsrBuyingCentreHealth (§4b)
- UsrProjectClassification, UsrServiceRiskLevel, UsrExpectedMargin (§4b; only when stated and currently empty)

Run `creatio_validate_record` mode "update" with the same values first. Fix any key it rejects using its suggestions; never add other columns.

On failure: one update with UsrCanCreateProject=false, UsrCanCreateOpportunity=false, UsrCanUpdateOpportunity=false, UsrStatus=Failed, UsrAnalysisStatus=Failed, UsrAnalysisCompleted=false, UsrAgentError=<short error>.

UsrRecommendationDetails JSON:
`{"runAt":"<UTC ISO>","configSource":"lookups","ruleIds":["..."],"matchType":"...","matchedProjectId":null,"matchConfidence":0,"decisionConfidence":0,"accountMatches":{"developer":null,"architect":null,"builder":null,"dealer":null},"searchCoverage":[{"query":"...","ok":true,"rows":0}],"factors":[{"key":"...","weight":0,"fact":"...","ruleId":null,"score":null,"points":null}],"score":null,"scoreUnknown":true,"priority":"...","reviewReasons":["..."],"buyingCentre":{"developer":true,"architect":true,"builder":true,"dealer":true,"keyContact":false,"health":80},"outcomeFlags":{"canCreateProject":true,"canCreateOpportunity":true,"canUpdateOpportunity":false}}`

In accountMatches, each resolved role holds `{"accountId":"<Id>","name":"<Account name>"}`, otherwise null. The apply skill reads these.

## 8. Read back
`creatio_get_record` the intake with UsrStatus, UsrRecommendedAction, UsrMatchedProject, UsrQualificationScore, UsrPriorityClassification, UsrAnalysisDate. Report saved values only.
