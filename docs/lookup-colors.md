# Lookup colours

Installed and verified on 2026-09-29 in ai_hackathon, package UsrMieleADProjects. Each lookup has a `UsrColor` column (type Color), set as the object's colour column. Freedom UI lists and forms show the values as coloured chips (the colour at 0.2 opacity). All values are in the package data bindings. They were read back with clio `execute-esq`.

The palette is Creatio's out-of-the-box colours. Green means positive or advanced, amber means review or waiting, orange and red mean risk, rejected or lost, and blue, purple and teal are neutral categories.

| Lookup | Value → colour |
|---|---|
| UsrIntakeStatus (Intake status) | New #0058EF · Processing #03A9F4 · Needs review #FFAC07 · Ready to apply #00C853 · Applied #009688 · Rejected #FF4013 · Failed #F9307F |
| UsrADProjectPriority (Priority classification) | Strategic Pursuit #00C853 · Active pursuit #98CB00 · Active Development #A6DE00 · Monitor #FFAC07 · Low priority #FF8800 · Low Probability #FF6534 · Data Incomplete #B87CCF |
| UsrProjectAIRecommendedAction (Recommended action) | Create new project #00C853 · Create Project #98CB00 · Create Opportunity #A6DE00 · Update existing project #0058EF · Update Opportunity #03A9F4 · Link as new phase #7848EE · Review Existing Project #B87CCF · Needs review #FFAC07 · Manual Review #FF8800 · Discard (low value) #FF6534 · Duplicate – no action #FF4013 · No Action #F9307F |
| UsrProjectAIAnalysisStatus | Pending #0058EF · Processing #03A9F4 · Completed #00C853 · Failed #FF4013 |
| UsrADIntelligenceSource (External source) | Dodge #0058EF · ConstructConnect #03A9F4 · ConstructionPoints #009688 · Tender portal #7848EE · SAP #B87CCF · CSV/Excel #00C853 · Manual #98CB00 · Email #FF8800 · Meeting Notes #FFAC07 · Other #FF6534 · Mockaroo #F9307F |
| UsrADSpecificationStatus | Open #03A9F4 · Under Review #FFAC07 · LOI Pending #FF8800 · Verbally Committed #98CB00 · Specified #00C853 · Lost #FF4013 · Unknown #B87CCF |
| UsrProjectClassification | Premium #7848EE · Luxury #F9307F · Sustainable #00C853 |
| UsrADRiskLevel | Low #00C853 · Medium #FFAC07 · High #FF8800 · Critical #FF4013 |
| UsrProjectCategory | New Build #00C853 · Residential #009688 · Commercial #0058EF · Remodel #FF8800 · Kitchen Studio #B87CCF |
| UsrConstructionStage | Conceptual #B87CCF · Design development #7848EE · Construction documents #0058EF · Bidding #FFAC07 · Under construction #FF8800 · Completed #009688 |
| UsrADStakeholderRole | Developer/Owner #0058EF · Developer Representative #009688 · Architect/Specifier #7848EE · Architect/Designer #B87CCF · General contractor/Builder #FF8800 · Builder #FF6534 · Dealer #00C853 · Interior designer #F9307F · Consultant #03A9F4 · Economic Decision-Maker #009688 · Technical Influencer #98CB00 · Champion #A6DE00 · Blocker #FF4013 · Operations #FFAC07 · Finance/Procurement #FF6534 |
| UsrScoringRuleType | Bands #0058EF · Value list #7848EE |

## Adding a colour to a new value

- **Existing lookup:** `upsert-data-binding-row-db` with `{"Id","Name","Description","UsrColor":"#RRGGBB"}`. Send the row's current Description: the upsert writes every column you pass.
- **New lookup:**
  1. `sync-schemas` update-entity: add column `UsrColor` of type `Color`.
  2. Set the colour column. Use `export-schema`, set `D37` to the UsrColor column UId, then `import-schema`. Alternatively, in the object designer: Object settings → Color → Save and publish.
  3. Upsert the values.
  4. Verify with `execute-esq`.
- **Not usable:** `execute-dataservice-batch` rejects Color values, and OData does not expose Color columns.
