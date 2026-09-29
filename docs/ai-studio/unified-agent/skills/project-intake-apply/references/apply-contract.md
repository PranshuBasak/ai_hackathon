# Apply contract — 189543-crm-bundle (verified 2026-09-29, rev. 3)

Use these column codes and IDs exactly. Resolve everything else live. Never invent values.

## 1. Intake read (UsrADProjectIntelligence)
Id, UsrName, UsrStatus, UsrReviewedBy, UsrDeveloperName, UsrArchitectName, UsrBuilderName, UsrDealerName, UsrArchitectAccount, UsrBuilderAccount, UsrKeyContactName, UsrKeyContactRoleText, UsrLinkedContact, UsrProjectCategory, UsrSpecificationStatus, UsrProductPackage, UsrSalesRegion, UsrCompetitorPresence, UsrExpectedCloseDate, UsrDeliveryYear, UsrProjectClassification, UsrServiceRiskLevel, UsrExpectedMargin, UsrBuyingCentreHealth, UsrProbabilityOfConversion, UsrRecommendedAction, UsrPriorityClassification, UsrQualificationScore, UsrMatchedProject, UsrMatchedOpportunity, UsrCreatedProject, UsrCreatedOpportunity, UsrRecommendationDetails, UsrMatchReason, UsrMissingInformation, UsrProjectName, UsrProjectDescription, UsrProjectAddress, UsrCityText, UsrStateText, UsrCountryText, UsrProjectCountry, UsrProjectType, UsrProjectTypeText, UsrStageText, UsrEstimatedProjectValue, UsrExpectedOrderValue, UsrNumberOfUnits, UsrCompletionYear, UsrExternalSource, UsrExternalProjectId, UsrDeveloperAccount, UsrDealerAccount, UsrAISummary, UsrQualificationExplanation.

Status IDs:
- Needs review 482534fa-1256-40b1-9aa9-20579310371f
- Ready to apply 34ae47af-2c13-4af0-877b-fe63f032186a
- Applied ed10d767-5af4-4499-b2d1-0dc2eafb90e7
- Rejected 9ba55372-9208-423c-af9b-6548fe2a7097
- Failed 5ea67c8a-12a4-46dc-9446-2786402a52db

Recommended action IDs:
- Create new project 8d1f9fbe-383e-4dff-a941-5dcf90e1088e
- Update existing project 3b92e710-a9f9-43d7-ae2d-f69e42c2c78b
- Link as new phase dcf2f30f-5b8b-4e26-b964-33e5e7b358d7
- Duplicate – no action cf6911d3-809d-4643-8b3e-3c8765e80fcb
- Needs review a69a4216-1c34-4704-9336-0dfc07fc1ac1

Opportunity-qualifying priorities: Strategic Pursuit cd40437e-7dd9-474c-ae9a-aa8a3f427d90, Active pursuit e0e28bab-371b-45fe-884a-98fac2223895. Any other priority (Monitor, Low priority, Data Incomplete) → no Opportunity.

## 1a. Responsible person (owner and reviewer)
Agent tools run as the service contact **"Creatio.ai Studio"**, which has no Account. Column defaults based on the "current user" therefore resolve to that service contact or to nothing. Never rely on them.
1. Call `creatio_get_current_user`. If it returns a person other than "Creatio.ai Studio" (or another service/system contact), propose that contact.
2. Otherwise ask: "Who should own the new records and be recorded as reviewer?" Resolve the answer with `creatio_list_records` Contact, where Name contains the given name. Exactly one → use it. Several → list them (name, account) and ask. None → stop, and create nothing.
3. Show the chosen contact in the plan as **Owner and reviewer**. The user's yes covers it. This contact is the **Responsible person** below.

## 2. Project (create or update)
Platform defaults — **do not send**:
- Name (Project ID, auto-number)
- Status (system setting ProjectStateDef)

Required and without a default: **ProjectEntryType = Project `6b4928d7-456a-4acd-a863-3361d46b7649`**.

Always send on create (never on update):
- **Owner** = Responsible person (§1a).
- **Supplier** = the Account named exactly **"Our company"**, resolved with `creatio_list_records`. Exactly one → Id, else stop. The platform default "Account of current user" is empty for the service contact and makes validation fail with "SupplierPrimaryImage … has not been loaded".

| Project column | From intake | Rule |
|---|---|---|
| UsrProjectName | UsrProjectName | Required for the plan; stop if empty |
| Type (ProjectType) | UsrProjectType | Copy the Id when set, else ProjectType by exact Name = UsrProjectTypeText (ignore case), else empty |
| UsrConstructionStage | UsrStageText | Exact name match (ignore case) to Conceptual 6df74fb4-0475-4cb6-827f-9f81a89f9bfc, Design development 1249048d-3461-4b50-8812-cb67324358b8, Construction documents 84537afd-88b6-49d5-8ea7-6669d5dcaa63, Bidding 26e05974-3e86-4e03-a5d8-35d2135b7ee0, Under construction 04093795-e152-4c0d-af39-2a2459a470d5, Completed bfde4e4f-b890-4f73-bf19-6f5ca83dad74; else empty |
| UsrProjectAddress | UsrProjectAddress | text |
| UsrCity (City) | UsrCityText | `creatio_list_records` City by exact Name; exactly one result → Id, else empty |
| UsrProjectCountry (Country) | UsrProjectCountry | Copy the Id when set, else Country by Name or Code = UsrCountryText (USA/US → United States), else empty |
| UsrEstimatedProjectValue | UsrEstimatedProjectValue | when >0 |
| UsrExpectedOrderValue | UsrExpectedOrderValue | when >0 |
| UsrNumberOfUnits | UsrNumberOfUnits | when >0 |
| UsrCompletionYear | UsrCompletionYear | when >0 |
| UsrExternalSource / UsrExternalId | UsrExternalSource / UsrExternalProjectId | copy |
| UsrProjectDescription | UsrProjectDescription | copy |
| Account | developer | Stakeholder developer (§2a) |
| Contact | key contact | Key contact (§2a), when resolved |
| UsrPriorityClassification, UsrQualificationScore, UsrQualificationExplanation | same columns | copy verdict values |
| UsrProjectCategory, UsrSpecificationStatus, UsrProjectClassification, UsrServiceRiskLevel | same columns | copy the Id when set |
| UsrProductPackage, UsrSalesRegion, UsrCompetitorPresence | same columns | copy when non-empty |
| UsrExpectedCloseDate, UsrDeliveryYear, UsrExpectedMargin, UsrBuyingCentreHealth, UsrProbabilityOfConversion | same columns | copy when set / >0 |
| ParentProject | UsrMatchedProject | **Link as new phase only** |
| UsrLastIntelligenceUpdateOn | – | current UTC ISO timestamp (update path) |

On the update path (Update existing project), only listed columns may change, and a non-empty project value is overwritten only with an explicit per-field yes. Never change Name, Status, Owner, ProjectEntryType or ParentProject when updating.

## 2a. Stakeholders (carried to the Project and Opportunity)
Resolve each role in this order and use the first hit:
1. the intake account lookup;
2. the verdict's `UsrRecommendationDetails.accountMatches.<role>.accountId`;
3. otherwise unresolved. List it under "Will not set". **Never create Accounts or Contacts.**

| Role | Intake lookup | accountMatches key | Party role (UsrADStakeholderRole) | Primary |
|---|---|---|---|---|
| Developer | UsrDeveloperAccount | developer | Developer/Owner `aa3bb455-2c37-4a2f-9759-fd12ab81420b` | true |
| Architect | UsrArchitectAccount | architect | Architect/Specifier `a9333388-7aa3-4105-bf94-06387926df02` | false |
| Builder | UsrBuilderAccount | builder | General contractor/Builder `29309fa7-9741-4f2b-a060-2b96168d9524` | false |
| Dealer | UsrDealerAccount | dealer | Dealer `a8b40e92-b8fa-467b-8b6b-88309cd65dbd` | false |

**Key contact.** When UsrLinkedContact is set, use it (read it to confirm it exists). Otherwise, when UsrKeyContactName is set, use `creatio_list_records` Contact with Name eq <name>. Keep only rows whose Account is one of the resolved stakeholder accounts. Exactly one row → key contact, else unresolved. Never link a namesake from another company.

**Involved parties.** For each resolved role, create an `UsrADProjectParty` row with:
- UsrProject = the Project, UsrAccount = the account, UsrPartyRole = the role above, UsrIsPrimary as above;
- UsrContact = the key contact when its Account equals this account;
- UsrSourceIntake = the intake Id.

On the update path, first read the existing parties (`creatio_list_records` UsrADProjectParty, UsrProject eq <project>). Skip any role and account pair that already exists. Never update or delete existing parties.

## 3. Opportunity (create)
Default — do not send: Stage (Qualification).

| Column | Value |
|---|---|
| Owner | Responsible person (§1a) |
| Title | `<UsrProjectName> pursuit` |
| UsrADProject | the created or matched Project Id |
| Account | Stakeholder developer (§2a); empty if unresolved |
| Contact | Key contact (§2a), when resolved |
| Partner | Stakeholder dealer (§2a), when resolved |
| Amount | UsrExpectedOrderValue when >0, else not sent |
| Description | UsrAISummary (plain text) |

Open-opportunity check on the update path: `creatio_list_records` Opportunity, filter UsrADProject eq <project Id> and Stage.End eq false. One or more rows → do not create; set UsrMatchedOpportunity to the newest.

After creating: `creatio_update_record` Project Opportunity = <opportunity Id>, only when Project.Opportunity is empty.

## 4. Intake write-back
- **Applied**: UsrStatus Applied, UsrCanCreateProject / UsrCanCreateOpportunity / UsrCanUpdateOpportunity = false (the actions are done), UsrLinkedContact when empty and the key contact was resolved, the empty intake account lookups (UsrDeveloperAccount, UsrArchitectAccount, UsrBuilderAccount, UsrDealerAccount) filled with the stakeholders used in §2a (never overwrite a set lookup), UsrCreatedProject (new project Id; on update path leave empty and keep UsrMatchedProject), UsrCreatedOpportunity (when created), UsrMatchedOpportunity (existing open one, when found), UsrReviewedBy = Responsible person (§1a), UsrAgentError "".
- **Rejected**: UsrStatus Rejected, UsrCanCreateProject / UsrCanCreateOpportunity / UsrCanUpdateOpportunity = false, UsrReviewedBy = Responsible person (§1a), and for non-duplicate reasons UsrMatchReason = "Rejected by reviewer: <reason>. " + existing text.
- **Partial failure**: the links that exist, UsrStatus Failed, UsrAgentError = the short step + error.
