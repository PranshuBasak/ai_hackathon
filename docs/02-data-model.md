# Data model

Snapshot and intended additions, 2026-09-26. Read back effective metadata before marking installed. No technical identifiers are renamed. Existing column types and lookup IDs remain unchanged.

## Canonical mapping

| Concept | Retained implementation |
|---|---|
| Intake | UsrADProjectIntelligence |
| Source / source ID | UsrExternalSource / UsrExternalProjectId |
| Value / units | UsrEstimatedProjectValue / UsrNumberOfUnits |
| Match / confidence | UsrMatchedProject / UsrProjectMatchConfidence |
| Priority / score | UsrPriorityClassification / UsrQualificationScore |
| Rationale / missing info / run date | UsrQualificationExplanation / UsrMissingInformation / UsrAnalysisDate |
| Participants / role | UsrADProjectParty / UsrPartyRole → UsrADStakeholderRole |
| Human project name | Project.UsrProjectName |
| Generated Project ID | Project.Name (preserve) |

## UsrADProjectParty

Live package-owned column read-back, 2026-09-26. Inherited columns are available through effective metadata.

| Column | Caption | Type | Reference | Required | Default |
|---|---|---|---|---|---|
| UsrAccount | Account | Lookup | Account | false | {} |
| UsrBusinessPartner | Party Name | Lookup | UsrBusinessPartner | false | {} |
| UsrContact | Contact | Lookup | Contact | false | {} |
| UsrIsPrimary | Primary party | Boolean |  | false | {} |
| UsrPartyRole | Party Role | Lookup | UsrADStakeholderRole | false | {} |
| UsrProject | Project | Lookup | Project | false | {} |
| UsrSourceIntake | Source intake | Lookup | UsrADProjectIntelligence | false | {} |

## UsrScoringFactor

Live package-owned column read-back, 2026-09-26. Inherited columns are available through effective metadata.

| Column | Caption | Type | Reference | Required | Default |
|---|---|---|---|---|---|
| UsrDescription | Scoring guidance | MAXSIZE_TEXT |  | false | {} |
| UsrIsActive | Active | Boolean |  | false | {"source": "Const", "value": true} |
| UsrWeight | Weight | Integer |  | false | {} |

## Project

The saved app inventory returned the base Project columns below and omitted the custom extension columns. It is a partial inventory, not the complete effective model. A full effective metadata refresh is pending completion of source generation.

The retained custom fields used by the foundation are `UsrProjectName`, `UsrExternalId`, `UsrExternalSource`, `UsrProjectAddress`, `UsrProjectCountry`, `UsrEstimatedProjectValue`, `UsrNumberOfUnits`, `UsrPriorityClassification`, `UsrQualificationScore`, and the existing commercial fields. Their physical values were read from an existing Project through OData (correlation fd40950f1bee).

The two additions are `UsrCity` (lookup to City) and `UsrConstructionStage` (lookup to UsrConstructionStage). Both are present in the authoring payload and the live Project row read-back, and have controls on the Project form. Do not infer missing custom fields from the incomplete app-inventory table.

| Column | Caption | Type | Reference | Required | Default |
|---|---|---|---|---|---|
| Account | Account | Lookup | Account | false | {} |
| ActualCompletion | Completion % | FLOAT2 |  | false | {} |
| Contact | Contact | Lookup | Contact | false | {} |
| Deadline | Deadline | Date |  | false | {} |
| Duration | Duration | Integer |  | false | {} |
| EndDate | End | Date |  | false | {} |
| ExpenseDev | Direct expenses deviation | FLOAT2 |  | false | {} |
| ExpenseDevPerc | Direct expenses deviation, % | FLOAT2 |  | false | {} |
| ExternalCostDev | Total cost deviation | FLOAT2 |  | false | {} |
| FactExpense | Actual direct expense | FLOAT2 |  | false | {} |
| FactExternalCost | Actual total cost | FLOAT2 |  | false | {} |
| FactIncome | Actual revenue | FLOAT2 |  | false | {} |
| FactInternalCost | Actual prime cost | FLOAT2 |  | false | {} |
| FactMargin | Actual margin | FLOAT2 |  | false | {} |
| FactMarginPerc | Actual margin, % | FLOAT2 |  | false | {} |
| IncomeDev | Revenue deviation | FLOAT2 |  | false | {} |
| IncomeDevPerc | Revenue deviation, % | FLOAT2 |  | false | {} |
| InternalCostDev | Prime cost deviation | FLOAT2 |  | false | {} |
| IsAutoCalcCompletion | Calculate automatically | Boolean |  | false | {} |
| MarginDev | Margin deviation | FLOAT2 |  | false | {} |
| MarginDevPerc | Margin deviation, % | FLOAT2 |  | false | {} |
| Name | Project ID | MEDIUM_TEXT |  | true | {"source": "Sequence", "sequence-prefix": "10000", "sequence-number-of-chars": 5} |
| Opportunity | Opportunity | Lookup | Opportunity | false | {} |
| Owner | Owner | Lookup | Contact | true | {"source": "SystemValue", "value-source": "4f367ca9-549b-4a1a-b64e-a40123f52ac0", "resolved-value-source": "4f367ca9-549b-4a1a-b64e-a40123f52ac0"} |
| ParentProject | Parent item | Lookup | Project | false | {} |
| PlanExpense | Expected direct expense | FLOAT2 |  | false | {} |
| PlanExternalCost | Expected total cost | FLOAT2 |  | false | {} |
| PlanExternalDevPerc | Total cost deviation, % | FLOAT2 |  | false | {} |
| PlanIncome | Expected revenue | FLOAT2 |  | false | {} |
| PlanInternalCost | Expected prime cost | FLOAT2 |  | false | {} |
| PlanInternalDevPerc | Prime cost deviation, % | FLOAT2 |  | false | {} |
| PlanMargin | Expected margin | FLOAT2 |  | false | {} |
| PlanMarginPerc | Expected margin, % | FLOAT2 |  | false | {} |
| Position | Position | Integer |  | false | {} |
| ProjectEntryType | Project record type | Lookup | ProjectEntryType | true | {} |
| StartDate | Start | Date |  | false | {"source": "SystemValue", "value-source": "91bd3856-9686-4eb2-9e7c-99f1e6ca0f02", "resolved-value-source": "91bd3856-9686-4eb2-9e7c-99f1e6ca0f02"} |
| Status | Status | Lookup | ProjectStatus | true | {"source": "Settings", "value-source": "ProjectStateDef", "resolved-value-source": "ProjectStateDef"} |
| Supplier | Supplier | Lookup | Account | false | {"source": "SystemValue", "value-source": "c9a1fa4a-0392-4dc0-887c-b6e3d67470b8", "resolved-value-source": "c9a1fa4a-0392-4dc0-887c-b6e3d67470b8"} |
| Type | Type | Lookup | ProjectType | false | {} |

## UsrADProjectIntelligence

Live package-owned column read-back, 2026-09-26. Inherited columns are available through effective metadata.

| Column | Caption | Type | Reference | Required | Default |
|---|---|---|---|---|---|
| UsrAISummary | AI Summary | MAXSIZE_TEXT |  | false | {} |
| UsrAgentError | Execution error | MAXSIZE_TEXT |  | false | {} |
| UsrAnalysisCompleted | Analysis Completed | Boolean |  | false | {} |
| UsrAnalysisDate | Analysis Date | DateTime |  | false | {} |
| UsrAnalysisStatus | Analysis Status | Lookup | UsrProjectAIAnalysisStatus | false | {} |
| UsrArchitectAccount | Architect account | Lookup | Account | false | {} |
| UsrArchitectName | Architect Name | MEDIUM_TEXT |  | false | {} |
| UsrBidDate | Bid date | DateTime |  | false | {} |
| UsrBuilderAccount | Builder account | Lookup | Account | false | {} |
| UsrBuilderName | Builder Name | MEDIUM_TEXT |  | false | {} |
| UsrBuyingCentreHealth | Buying Centre Health | FLOAT2 |  | false | {} |
| UsrCanCreateOpportunity | Can Create Opportunity | Boolean |  | false | {} |
| UsrCanCreateProject | Can Create Project | Boolean |  | false | {} |
| UsrCanUpdateOpportunity | Can Update Opportunity | Boolean |  | false | {} |
| UsrCityText | City (source) | MEDIUM_TEXT |  | false | {} |
| UsrCompetitorPresence | Competitor Presence | MAXSIZE_TEXT |  | false | {} |
| UsrCompletionDate | Completion date | DateTime |  | false | {} |
| UsrCompletionYear | Completion Year | Integer |  | false | {} |
| UsrContractorName | Contractor Name | MEDIUM_TEXT |  | false | {} |
| UsrCountryText | Country (source) | MEDIUM_TEXT |  | false | {} |
| UsrCreatedOpportunity | Created Opportunity | Lookup | Opportunity | false | {} |
| UsrCreatedProject | Created Project | Lookup | Project | false | {} |
| UsrDealerAccount | Dealer account | Lookup | Account | false | {} |
| UsrDealerName | Dealer Name | MEDIUM_TEXT |  | false | {} |
| UsrDeliveryYear | Delivery Year | Integer |  | false | {} |
| UsrDeveloperAccount | Developer account | Lookup | Account | false | {} |
| UsrDeveloperName | Developer Name | MEDIUM_TEXT |  | false | {} |
| UsrEmailActivity | Source email | Lookup | Activity | false | {} |
| UsrEstimatedProjectValue | Estimated Project Value | Money |  | false | {} |
| UsrExpectedCloseDate | Expected Close Date | DateTime |  | false | {} |
| UsrExpectedMargin | Expected Margin | FLOAT2 |  | false | {} |
| UsrExpectedOrderValue | Expected Order Value | Money |  | false | {} |
| UsrExternalProjectId | External Project ID | MEDIUM_TEXT |  | false | {} |
| UsrExternalSource | External Source | Lookup | UsrADIntelligenceSource | false | {} |
| UsrKeyContactEmail | Contact email | EMAIL_TEXT |  | false | {} |
| UsrKeyContactName | Contact name | MEDIUM_TEXT |  | false | {} |
| UsrKeyContactRoleText | Contact role | MEDIUM_TEXT |  | false | {} |
| UsrMatchReason | Match reason | MAXSIZE_TEXT |  | false | {} |
| UsrMatchedOpportunity | Matched Opportunity | Lookup | Opportunity | false | {} |
| UsrMatchedProject | Matched Project | Lookup | Project | false | {} |
| UsrMissingInformation | Missing Information | MAXSIZE_TEXT |  | false | {} |
| UsrMissingStakeholders | Missing Stakeholders | MAXSIZE_TEXT |  | false | {} |
| UsrName | Intake number | MEDIUM_TEXT |  | false | {"source": "Sequence", "sequence-prefix": "PI-", "sequence-number-of-chars": 6} |
| UsrNumberOfUnits | Number of Units | Integer |  | false | {} |
| UsrOpportunityMatchConfidence | Opportunity Match Confidence | FLOAT2 |  | false | {} |
| UsrPriorityClassification | Priority Classification | Lookup | UsrADProjectPriority | false | {} |
| UsrProbabilityOfConversion | Probability of Conversion | FLOAT2 |  | false | {} |
| UsrProductPackage | Product Package | MEDIUM_TEXT |  | false | {} |
| UsrProjectAddress | Project Address | MEDIUM_TEXT |  | false | {} |
| UsrProjectCategory | Project Category | Lookup | UsrProjectCategory | false | {} |
| UsrProjectClassification | Project Classification | Lookup | UsrProjectClassification | false | {} |
| UsrProjectCountry | Project Country | Lookup | Country | false | {} |
| UsrProjectDescription | Project Description | RICH_TEXT |  | false | {} |
| UsrProjectMatchConfidence | Project Match Confidence | FLOAT2 |  | false | {} |
| UsrProjectName | Project Name | MEDIUM_TEXT |  | false | {} |
| UsrProjectType | Project Type | Lookup | ProjectType | false | {} |
| UsrProjectTypeText | Project type (source) | MEDIUM_TEXT |  | false | {} |
| UsrQualificationExplanation | Qualification Explanation | MAXSIZE_TEXT |  | false | {} |
| UsrQualificationScore | Qualification Score | FLOAT2 |  | false | {} |
| UsrRawText | Raw source text | MAXSIZE_TEXT |  | false | {} |
| UsrReceivedOn | Received on | DateTime |  | false | {"source": "SystemValue", "value-source": "d7c295d3-3146-4ee1-ac49-3a7bd0edc45d", "resolved-value-source": "d7c295d3-3146-4ee1-ac49-3a7bd0edc45d"} |
| UsrRecommendationDetails | Recommendation Details | MAXSIZE_TEXT |  | false | {} |
| UsrRecommendedAction | Recommended Action | Lookup | UsrProjectAIRecommendedAction | false | {} |
| UsrReviewedBy | Reviewer | Lookup | Contact | false | {} |
| UsrSalesRegion | Sales Region | MEDIUM_TEXT |  | false | {} |
| UsrServiceRiskLevel | Service Risk Level | Lookup | UsrADRiskLevel | false | {} |
| UsrSourcePayload | Source Payload | MAXSIZE_TEXT |  | false | {} |
| UsrSpecificationStatus | Specification Status | Lookup | UsrADSpecificationStatus | false | {} |
| UsrStageText | Stage (source) | MEDIUM_TEXT |  | false | {} |
| UsrStartDate | Start date | DateTime |  | false | {} |
| UsrStateText | State (source) | MEDIUM_TEXT |  | false | {} |
| UsrStatus | Intake status | Lookup | UsrIntakeStatus | false | {"source": "Const", "value": "efc4cf1b-1b15-4d92-9a65-59960f61e99e"} |

## Default and preservation rules

UsrName uses PI- plus six sequence digits for new intakes. Existing records use distinct PI-LEGACY identifiers to avoid colliding with the new sequence. UsrReceivedOn defaults to the system current date/time; historical records use their CreatedOn. UsrStatus defaults to New; original nine records migrate to Needs review. UsrAnalysisStatus remains untouched. New columns remain optional at schema level to avoid breaking existing records; completeness guards are implemented in the future workflow and review UI.

## Lookups and configuration

New: UsrIntakeStatus (New, Processing, Needs review, Ready to apply, Applied, Rejected, Failed); UsrConstructionStage (Conceptual, Design development, Construction documents, Bidding, Under construction, Completed); UsrScoringFactor (Name, UsrWeight integer, UsrDescription unlimited text, UsrIsActive boolean).

Preserved lookup objects: UsrADIntelligenceSource, UsrADProjectPriority, UsrProjectAIRecommendedAction, UsrADStakeholderRole. Add missing canonical values rather than renaming legacy rows. Add Developer/Architect/Dealer AccountTypes, seven industry ProjectTypes, and missing AccountIndustry values from the reference. AccountCategory A/B/C/D remains standard dealer-tier configuration.

Scoring weights: construction value20, unit count15, project type15, stage15, architect10, dealer10, developer relationship10, region5. Sum100. Settings: UsrIntakeAutoApplyThreshold85 and UsrIntakeReviewThreshold50. These do not execute scoring or application by themselves.

## Source contract

Every source header is mapped in import-mapping.json. Use raw location/type/stage text on intake; Project uses resolved City and ConstructionStage lookups. Participant BusinessPartner remains for compatibility beside direct Account and Contact. Dates are DateTime storage; date-only form controls must use pickerType=date. Existing floating confidence and score fields are retained; do not replace them with parallel integer columns.

