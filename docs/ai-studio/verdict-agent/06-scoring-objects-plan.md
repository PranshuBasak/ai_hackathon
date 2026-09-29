# Scoring rule objects — build plan (approved 2026-09-28; objects built and verified 2026-09-28, see 07-installed-scoring-objects.md)

Owner decision (28 Sep 2026): replace the JSON rules in `UsrScoringFactor.UsrDescription` and the `UsrIntakeVerdictPolicy` JSON with admin-editable lookups and mini pages, like **Intake scoring factor**. Build through **clio MCP** with `environment-name: ai_hackathon`, in package `UsrMieleADProjects`. Export the package first into `backups/scoring-objects-2026-09-28/`.

## Status of the verdict agent (for context)

- AI Studio agent **Verdict Assistant** (id `40badfe8-999b-4ae9-ab10-d2da4a228789`), release **v8**, deployed to `189543-crm-bundle`, skill `project-intake-verdict` **v2** (adds `references/runtime-contract.md` and permits `creatio_update_record` on the intake only).
- Verified 28 Sep: PI-000027 saved as Needs review / Create new project / Data Incomplete; no other CRM records created. Each save needs approval in AI Studio **Approvals** (built-in untrusted-content write rule; Tool confirmation / Prompt injection policies are "Coming soon").
- Known issues: `UsrAnalysisDate`/`runAt` saved as date-only placeholder; current rules leave most intakes Data Incomplete ("Multifamily High-Rise" not in type list; TX/AZ/WA/IL/CO/TN not in region list).

## Objects

1. **UsrScoringRuleType** — caption *Intake scoring rule type*; base lookup. Rows: `Bands`, `Value list`.
2. **UsrScoringRule** — caption *Intake scoring rule*; base lookup (Name = short label).
   - `UsrScoringFactor` lookup → UsrScoringFactor, required
   - `UsrMatchValue` text 250 — Value list factors (case-insensitive match against intake text / Account category / state code)
   - `UsrMinValue` decimal — Bands factors (inclusive lower bound; highest matching band wins)
   - `UsrScore` integer 0–100, required
   - `UsrIsActive` boolean, default true
   - `UsrNotes` text 500
3. **UsrIntakePriorityBand** — caption *Intake priority band*; base lookup.
   - `UsrPriority` lookup → UsrADProjectPriority, required
   - `UsrMinScore` decimal, required
   - `UsrIsActive` boolean, default true
4. **UsrScoringFactor** (existing) — add `UsrFactorKey` text 50 and `UsrRuleType` lookup → UsrScoringRuleType. Keep all 8 rows, IDs, weights and existing descriptions.

Register 1–3 in the Lookups section with default Freedom UI mini pages; bind schema + seed data to `UsrMieleADProjects`; restrict edit rights to administrators like UsrScoringFactor. *(Owner changed this on 28 Sep: new lookups stay open to everyone for now.)*

## Factor keys and rule types

- Construction value (`4c65a3e5-3e80-4f24-8291-0bb262c97945`): key `construction_value`, rule type **Bands**
- Unit count (`0faff287-ace6-4d9e-8f33-8496a7555cbe`): key `units`, rule type **Bands**
- Project type fit (`159ab25a-c96b-42c3-9342-a0b2971aa4d3`): key `type_fit`, rule type **Value list**
- Construction stage (`19f0eba3-ffb8-4d15-a255-ffce57bff9e5`): key `stage`, rule type **Value list**
- Architect known (`ca2d8666-f731-40bb-9f61-6a149e1c20f9`): key `architect`, rule type **Value list**
- Dealer tier (`7c04d264-eeb3-4b73-a22b-cec3eeeec0f9`): key `dealer`, rule type **Value list**
- Developer relationship (`0481e969-8310-4cc5-80a6-40782e83564a`): key `developer_relationship`, rule type **Bands**
- Region coverage (`90dc15d9-cbe2-416e-9ad8-75012dcdc57d`): key `region`, rule type **Value list**

## Seed rules (identical to the live JSON, demo-2026-09-28-v1)

| Factor | Match value | Min value | Score | Notes |
|---|---|---|---|---|
| Construction value |  | 150000000 | 100 | USD 150m+ |
| Construction value |  | 75000000 | 85 | USD 75m to under 150m |
| Construction value |  | 25000000 | 65 | USD 25m to under 75m |
| Construction value |  | 10000000 | 35 | USD 10m to under 25m |
| Construction value |  | 0 | 10 | Under USD 10m |
| Unit count |  | 300 | 100 | 300+ units |
| Unit count |  | 200 | 85 | 200-299 units |
| Unit count |  | 100 | 70 | 100-199 units |
| Unit count |  | 50 | 40 | 50-99 units |
| Unit count |  | 0 | 20 | Under 50 units |
| Project type fit | Multifamily |  | 100 |  |
| Project type fit | Apartments |  | 100 |  |
| Project type fit | Hospitality |  | 100 |  |
| Project type fit | Hotel |  | 100 |  |
| Project type fit | Senior Living |  | 100 |  |
| Project type fit | Student Housing |  | 90 |  |
| Project type fit | Mixed-Use |  | 70 |  |
| Project type fit | Small Home Remodel |  | 10 |  |
| Construction stage | Conceptual |  | 60 |  |
| Construction stage | Design development |  | 100 |  |
| Construction stage | Construction documents |  | 100 |  |
| Construction stage | Bidding |  | 80 |  |
| Construction stage | Under construction |  | 30 |  |
| Construction stage | Completed |  | 0 |  |
| Architect known | Resolved |  | 100 | Architect matches exactly one CRM Account |
| Architect known | Supplied, not resolved |  | 50 | Name given but no single CRM match |
| Architect known | Explicitly absent |  | 0 | Source says there is no architect |
| Dealer tier | A |  | 100 | Dealer Account category |
| Dealer tier | B |  | 80 | Dealer Account category |
| Dealer tier | C |  | 50 | Dealer Account category |
| Dealer tier | D |  | 20 | Dealer Account category |
| Dealer tier | Explicitly absent |  | 0 | Source says there is no dealer |
| Developer relationship |  | 3 | 100 | 3+ won opportunities |
| Developer relationship |  | 1 | 50 | 1-2 won opportunities |
| Developer relationship |  | 0 | 0 | No won opportunities (query succeeded) |
| Region coverage | NC |  | 100 | Fictional demo coverage |
| Region coverage | GA |  | 100 | Fictional demo coverage |
| Region coverage | FL |  | 100 | Fictional demo coverage |
| Region coverage | CA |  | 0 | Explicitly outside coverage |

Region match values are state codes as captured in `UsrStateText` (NC, GA, FL, CA). Architect/dealer values are derived facts (Resolved, Supplied not resolved, Explicitly absent, A–D).

## Seed priority bands

| Priority (UsrADProjectPriority Id) | Min score |
|---|---|
| Strategic Pursuit (`cd40437e-7dd9-474c-ae9a-aa8a3f427d90`) | 80 |
| Active pursuit (`e0e28bab-371b-45fe-884a-98fac2223895`) | 60 |
| Monitor (`81dac008-adeb-42ea-92bc-6bb5a12fbfa9`) | 35 |
| Low priority (`78b15b90-0c32-4b5e-8f83-89626e7b2ca4`) | 0 |

Score unknown → **Data Incomplete** (`056bb6d1-4bca-4b58-ad23-0400585d42b8`), not a band.

## Suggested additions after build (owner to confirm)

- Project type fit: `Multifamily High-Rise` = 100, `Single-Family` = 10.
- Region coverage: demo states used by fixtures (TX, AZ, WA, IL, CO, TN) with owner-chosen scores.

## After build

1. Read back all rows through clio; confirm 8 factors keep IDs/weights and 39 rules + 4 bands exist.
2. Update skill `project-intake-verdict` (v3): runtime contract reads `UsrScoringRule` (active rows) and `UsrIntakePriorityBand` instead of `UsrDescription` JSON and the policy JSON; fix timestamp (full UTC ISO from code execution).
3. Republish/deploy Verdict Assistant to 189543-crm-bundle; rerun PI-000027 and one complete intake (e.g. PI-000002); verify via clio read-back.
4. Leave `UsrIntakeVerdictPolicy` in place until the new path is verified; then mark it superseded (do not delete).
