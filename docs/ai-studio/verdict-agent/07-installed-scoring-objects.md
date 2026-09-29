# Installed scoring rule objects — ai_hackathon

Built and verified through clio MCP on 28 September 2026 in package `UsrMieleADProjects`, following [06-scoring-objects-plan.md](06-scoring-objects-plan.md). This covers the configuration objects only. The verdict skill still reads the old JSON (`UsrScoringFactor.UsrDescription` and `UsrIntakeVerdictPolicy`); the skill v3 switch, redeploy and live reruns have not been done.

## Pre-change export

`backups/scoring-objects-2026-09-28/UsrMieleADProjects.zip` (1,315,840 bytes), SHA256 `7a60ca994ee26949f4c885f83e0be1216e8583af92ec42e6403843777c7d56a1`, from `clio pull-pkg`. The owner also exported the package separately.

## Schemas (all BaseLookup, registered in Lookups with the default page)

| Schema | Caption | Own columns (read-back type) | Lookup record |
|---|---|---|---|
| UsrScoringRuleType | Intake scoring rule type | none | `58e73372-0df1-42f5-a260-fa71b72aecf8` |
| UsrScoringRule | Intake scoring rule | UsrScoringFactor → UsrScoringFactor (required); UsrMatchValue MediumText(250); UsrMinValue Float(2 dp); UsrScore Integer (required); UsrIsActive Boolean default true; UsrNotes LongText(500) | `2d6b5477-fb05-4a05-9f6d-6b1c537d4038` |
| UsrIntakePriorityBand | Intake priority band | UsrPriority → UsrADProjectPriority (required); UsrMinScore Float(2 dp, required); UsrIsActive Boolean default true | `b0c0c6a9-a48f-49fb-bf81-f68568905389` |
| UsrScoringFactor (existing) | Intake scoring factor | added UsrFactorKey ShortText(50), UsrRuleType → UsrScoringRuleType | unchanged |

The 0–100 range on UsrScore is not enforced by the schema. No business rule was added for it.

## Data (read back through OData)

- Rule types: Bands `16c2bb64-4f3a-4a26-a41a-9c406df08129`, Value list `6f08edcc-0936-4127-9a1c-98fca5f8f6e3`.
- 39 rules, all active, exactly matching the plan table. Name = `<Factor>: <match value>` or `<Factor>: <band note>`.
- 4 bands: Strategic Pursuit 80, Active pursuit 60, Monitor 35, Low priority 0. They point to the existing priority IDs. Data Incomplete is not a band.
- The 8 factors keep their IDs, names, weights (sum 100), active flags, Description and UsrDescription. Keys and rule types were set as planned.
- All seed GUIDs are in `evidence/scoring-objects-seed-2026-09-28.json`.

**Runtime caveat:** Creatio decimal columns are not nullable. Value-list rules read back `UsrMinValue = 0.00` and band rules read back `UsrMatchValue = ""`. The runtime must branch on the factor's `UsrRuleType`, not on whether a column is empty.

## Package bindings (verified with read-data-binding-db)

| Binding | Rows | Columns |
|---|---|---|
| UsrScoringRuleType | 2 | Id, Name, Description |
| UsrScoringRule | 39 | Id, Name, UsrScoringFactor, UsrMatchValue, UsrMinValue, UsrScore, UsrIsActive, UsrNotes |
| UsrIntakePriorityBand | 4 | Id, Name, UsrPriority, UsrMinScore, UsrIsActive |
| UsrScoringFactor (existing) | 8 | now 8 columns, adding UsrFactorKey and UsrRuleType |
| Lookup_UsrScoringRuleType / Lookup_UsrScoringRule / Lookup_UsrIntakePriorityBand | 1 each | Lookups-section registration |

## Permissions

The owner decided on 28 Sep 2026 that the new lookups stay open to everyone for now. Object operation permissions are **not** enabled on the three new schemas (`administrated-by-operations: false`). UsrScoringFactor keeps its existing admin-edit restriction. Revisit this before production use.

## Not done / next

1. Skill `project-intake-verdict` v3: read active `UsrScoringRule` joined to the factor's `UsrFactorKey`/`UsrRuleType`, and read `UsrIntakePriorityBand`. Fix the timestamp to a full UTC ISO value.
2. Republish/deploy Verdict Assistant. Rerun PI-000027 and PI-000002, then do a clio read-back.
3. Owner to confirm the suggested extra rules (Multifamily High-Rise, Single-Family, TX/AZ/WA/IL/CO/TN).
4. Keep `UsrIntakeVerdictPolicy` and the UsrDescription JSON until the new path is verified, then mark them superseded. Do not delete them.
5. The UI mini pages were not opened in a browser. The owner accepted the clio read-backs.

## Settings tab on the Project Intake list page (28 Sep 2026)

`UsrProjectIntakeSection_ListPage` was changed through clio `update-page` in append mode. Before saving, a dry run showed 22 operations added, 1 replaced and 0 dropped. The gear-icon settings tab now shows:

- **Scoring Factors** (existing grid): adds the Factor key and Rule type columns.
- **Scoring rules** (new expanded list on UsrScoringRule): Rule, Scoring factor, Match value, Minimum value, Score, Active, Notes. Sorted by Rule. Has add, refresh, export/import and a search box wired to the list (not tested in the browser).
- **Priority bands** (new expanded list on UsrIntakePriorityBand): Band, Priority, Minimum score, Active. Sorted by minimum score, highest first. Has the same toolbar.

Read back with get-page: the merged bundle has every collection attribute, row attribute and data source, and 27 captions are registered. At the owner's request the page was not opened in a browser. If someone has saved their own column settings on the Scoring Factors grid, the new columns may not show for them until they reset that grid's columns.

## Mini pages (28–29 Sep 2026)

- **UsrScoringRule_MiniPage** (new, `BaseMiniPageTemplate`, UId `7a910a08-b8e7-4fa5-806e-43cfe3c41cad`): Name, Scoring factor, Active, Match value, Minimum value, Score, Notes, plus a hint line explaining how Bands and Value list rules are filled in.
- **UsrIntakePriorityBand_MiniPage** (new, UId `7a5e669a-6a53-4885-8119-c1d2f52d2f02`): Name, Priority, Active, Minimum score, plus a hint line explaining how a band is picked.
- Both pages are bound as the open page and the add page for their object (the "All employees" audience) through `create-related-page-addon`. Clio read-back confirmed the bindings.
- **UsrPage_93laf3g** (existing factor mini page): tooltips were added to its 7 fields and nothing else changed. The owner's designer edit (Rule type and Factor key fields) was kept. The existing "Scoring Weight" caption was kept.
- Verified through get-page and get-related-page-addon read-backs. The pages were not opened in a browser.
- 29 Sep: added tooltips and placeholders to the owner-arranged rule and band mini pages. Only `tooltip`/`placeholder` lines changed; layout, sliders and headings were left as the owner set them. Rule page: 12 strings. Band page: 6 strings. Checkboxes and sliders got tooltips only. The saves used `validate=false` because clio rejects the designer's own `ComboBox.AddNewRecord` list-action caption; that caption was left unchanged.
