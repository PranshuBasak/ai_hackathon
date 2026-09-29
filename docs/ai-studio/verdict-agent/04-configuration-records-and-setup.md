# Dynamic verdict configuration: records and setup

## Live deployment update — 28 September 2026

`UsrIntakeVerdictPolicy` now exists in ai_hackathon as global MaxSizeText, uncached and nonpersonal. Version `demo-2026-09-28-v1` is approved for the owner-authorized hackathon demo. Eight existing factors now carry the structured rules; IDs/weights are preserved and original prose is in Description. See [installed policy and integration handoff](05-installed-policy-and-agent-read.md). The `*.proposed.*` files remain draft templates; runtime must read the installed values. Scoring/save execution in AI Studio remains unverified. Factor bindings are verified; the new setting/value package bindings remain pending after a SysSettings permission refusal.


Prepared 28 September 2026. **Local proposal only. No live configuration or agent deployment performed.** Existing object/field names and initial weights are supported by the repository's schema/seed definitions and earlier read-backs; this document is not a fresh environment audit.

## 1. Which object stores what?

| Store | Purpose | Proposed work |
|---|---|---|
| `UsrADProjectIntelligence` | One intake and its AI verdict | Keep source inputs and result fields here. Store configuration snapshot/hash in `UsrRecommendationDetails`, not shared rule definitions. |
| `UsrScoringFactor` | One row per scoring factor | Reuse the eight existing rows and their IDs. Keep `Name`, `UsrWeight`, `UsrIsActive`; replace free-text `UsrDescription` with the structured JSON below only during an authorized deployment. |
| Existing confidence settings | Confidence gates | Read `UsrIntakeAutoApplyThreshold` (85) and `UsrIntakeReviewThreshold` (50). |
| Proposed `UsrIntakeVerdictPolicy` setting | Priority bands, required facts, mandatory review declarations and approval/version | Add one global text setting containing the policy JSON below during deployment. |

**No new custom object or list page is needed for this proposed hackathon design.** This uses JSON in the existing unlimited-text scoring-guidance column. An administrator edits the configuration; employees run/review intakes. JSON is less convenient for business users than a dedicated rule editor. A future editor can validate/save the same configuration; a normalized rule object is an optional future design, not a requirement for this release.

The new policy system setting needs a text type that preserves the complete JSON. Verify the tenant supports sufficient length and a global effective value before creating it. If it cannot round-trip this content, stop and select a dedicated policy object with an unlimited-text column; do not truncate it or split it into undocumented pieces. Neither system-setting capacity nor its permissions has been tested in this turn.

## 2. Exact eight scoring records

Common values: `UsrIsActive = true`. Preserve each existing `Id`; do not insert another row just because the file omits IDs. `Name` below identifies a row for an initial audited lookup; after resolving its unique existing GUID, persist the GUID-to-key mapping. Abort ambiguous/missing row resolution. The JSON `key` is stable even if a visible name changes.

The CSV contains `Name,UsrWeight,UsrIsActive,UsrDescription`; it is a **record specification, not an approved insert/import file**. The JSON file contains the same eight records. Read back existing rows, export/back up them and package bindings, then update by verified GUID only. Never run the original seed generator to apply these changes.

Scores in the rules are normalized 0–100 points. Contribution to the final score is `weight × points / 100`.

| Row / Name | Weight | All proposed scoring values |
|---|---:|---|
| Construction value | 20 | Verified USD: <10m → 10; 10m–<25m → 35; 25m–<75m → 65; 75m–<150m → 85; ≥150m → 100 |
| Unit count | 15 | 0–49 → 20; 50–99 → 40; 100–199 → 70; 200–299 → 85; ≥300 → 100 |
| Project type fit | 15 | multifamily, apartments, hospitality, hotel, senior living → 100; student housing → 90; mixed-use → 70; small home remodel → 10 |
| Construction stage | 15 | conceptual → 60; design development → 100; construction documents → 100; bidding → 80; under construction → 30; completed → 0 |
| Architect known | 10 | resolved → 100; supplied_unresolved → 50; explicitly_absent → 0 |
| Dealer tier | 10 | A → 100; B → 80; C → 50; D → 20; explicitly_absent → 0 |
| Developer relationship | 10 | Verified won-opportunity count: 0 → 0; 1–2 → 50; ≥3 → 100 |
| Region coverage | 5 | **Fictional demo only:** US-NC, US-GA, US-FL → 100; US-CA → 0; all unlisted regions → unknown |

All weights total 100. An inactive row does not contribute; adjust remaining active weights to total 100 and update the policy's active `factorKeys`. Rule boundaries use inclusive minimums, tested highest first. Map matching only trims/case-folds strings; it does not guess aliases. Invalid/negative/nonfinite numbers are validation errors. A missing amount/currency, failed evidence query or unmapped label is unknown, not zero.

### Field values to enter for each row

For each row, keep the existing `Id`, set the shown weight and Active flag, and paste the full JSON object into `UsrDescription` (no Markdown fences). Guidance is retained inside the JSON.

### Record 1: Construction value

- `Name`: `Construction value`
- `UsrWeight`: `20`
- `UsrIsActive`: `true`
- `UsrDescription`:

```json
{
  "formatVersion": 1,
  "key": "construction_value",
  "guidance": "Input is verified USD construction value, not manufacturer revenue; dated conversion evidence required for other currencies.",
  "rule": {
    "kind": "bands",
    "integer": false,
    "bands": [
      {
        "min": 150000000,
        "score": 100
      },
      {
        "min": 75000000,
        "score": 85
      },
      {
        "min": 25000000,
        "score": 65
      },
      {
        "min": 10000000,
        "score": 35
      },
      {
        "min": 0,
        "score": 10
      }
    ]
  }
}
```

### Record 2: Unit count

- `Name`: `Unit count`
- `UsrWeight`: `15`
- `UsrIsActive`: `true`
- `UsrDescription`:

```json
{
  "formatVersion": 1,
  "key": "units",
  "guidance": "Input is verified nonnegative integer unit count. Unknown is null, not zero.",
  "rule": {
    "kind": "bands",
    "integer": true,
    "bands": [
      {
        "min": 300,
        "score": 100
      },
      {
        "min": 200,
        "score": 85
      },
      {
        "min": 100,
        "score": 70
      },
      {
        "min": 50,
        "score": 40
      },
      {
        "min": 0,
        "score": 20
      }
    ]
  }
}
```

### Record 3: Project type fit

- `Name`: `Project type fit`
- `UsrWeight`: `15`
- `UsrIsActive`: `true`
- `UsrDescription`:

```json
{
  "formatVersion": 1,
  "key": "type_fit",
  "guidance": "Use only verified canonical type or explicit listed alias. Unmapped values are unknown.",
  "rule": {
    "kind": "map",
    "values": {
      "multifamily": 100,
      "apartments": 100,
      "hospitality": 100,
      "hotel": 100,
      "senior living": 100,
      "student housing": 90,
      "mixed-use": 70,
      "small home remodel": 10
    }
  }
}
```

### Record 4: Construction stage

- `Name`: `Construction stage`
- `UsrWeight`: `15`
- `UsrIsActive`: `true`
- `UsrDescription`:

```json
{
  "formatVersion": 1,
  "key": "stage",
  "guidance": "Use verified current stage. No inferred stage from a project title.",
  "rule": {
    "kind": "map",
    "values": {
      "conceptual": 60,
      "design development": 100,
      "construction documents": 100,
      "bidding": 80,
      "under construction": 30,
      "completed": 0
    }
  }
}
```

### Record 5: Architect known

- `Name`: `Architect known`
- `UsrWeight`: `10`
- `UsrIsActive`: `true`
- `UsrDescription`:

```json
{
  "formatVersion": 1,
  "key": "architect",
  "guidance": "Resolved requires a verified CRM candidate. An unresolved name still requires review.",
  "rule": {
    "kind": "map",
    "values": {
      "resolved": 100,
      "supplied_unresolved": 50,
      "explicitly_absent": 0
    }
  }
}
```

### Record 6: Dealer tier

- `Name`: `Dealer tier`
- `UsrWeight`: `10`
- `UsrIsActive`: `true`
- `UsrDescription`:

```json
{
  "formatVersion": 1,
  "key": "dealer",
  "guidance": "Tier comes from verified dealer Account category; query failure is unknown.",
  "rule": {
    "kind": "map",
    "values": {
      "a": 100,
      "b": 80,
      "c": 50,
      "d": 20,
      "explicitly_absent": 0
    }
  }
}
```

### Record 7: Developer relationship

- `Name`: `Developer relationship`
- `UsrWeight`: `10`
- `UsrIsActive`: `true`
- `UsrDescription`:

```json
{
  "formatVersion": 1,
  "key": "developer_relationship",
  "guidance": "Count won opportunities for the resolved developer using the verified won-stage mapping. A successful zero-row query is zero; failed query is unknown.",
  "rule": {
    "kind": "bands",
    "integer": true,
    "bands": [
      {
        "min": 3,
        "score": 100
      },
      {
        "min": 1,
        "score": 50
      },
      {
        "min": 0,
        "score": 0
      }
    ]
  }
}
```

### Record 8: Region coverage

- `Name`: `Region coverage`
- `UsrWeight`: `5`
- `UsrIsActive`: `true`
- `UsrDescription`:

```json
{
  "formatVersion": 1,
  "key": "region",
  "guidance": "FICTIONAL DEMO territory: North Carolina, Georgia and Florida covered; California explicitly outside. Every other region unknown. Replace with approved manufacturer coverage.",
  "rule": {
    "kind": "map",
    "values": {
      "us-nc": 100,
      "us-ga": 100,
      "us-fl": 100,
      "us-ca": 0
    }
  }
}
```

## 3. Three system-setting records

| Code | Value | Action |
|---|---|---|
| `UsrIntakeAutoApplyThreshold` | 85 | Preserve existing ID/type/title. This gates **Ready to apply**, despite its legacy technical name; never automatically Apply. |
| `UsrIntakeReviewThreshold` | 50 | Preserve existing ID/type/title. Confidence below 50 adds a low-confidence escalation reason. |
| `UsrIntakeVerdictPolicy` | Full JSON below | Proposed new setting, title **Project Intake verdict policy**, unlimited/sufficient-length text, one global effective value, administrators edit, workflow reads. |

Resolve settings by exact unique code, preserve existing IDs and package bindings. Do not create per-user overrides. Verify permissions with an employee account and the workflow's execution identity. Bind any new setting and its global value in `UsrMieleADProjects` through supported package data bindings.

The first two settings are confidence percentages, not pursuit-score bands. Read their current effective values every run; do not copy 85/50 into prompt instructions as fixed constants.

### Value for UsrIntakeVerdictPolicy

Paste the JSON below as the setting's text value. `approved: false` is intentional: these business choices have not been approved. The reference workflow refuses to score until an administrator approves a reviewed configuration. The supplied hash covers the exact eight proposed factor rows. It is not a signature or a replacement for access control.

```json
{
  "formatVersion": 1,
  "version": "proposed-2026-09-28-v2",
  "approved": false,
  "factorConfigHash": "b87237cf3040116174e49daa3ef13f0ec20727dc51931c4e76e2645675af350a",
  "factorKeys": [
    "construction_value",
    "units",
    "type_fit",
    "stage",
    "architect",
    "dealer",
    "developer_relationship",
    "region"
  ],
  "allowDiscard": false,
  "priorityBands": [
    {
      "minScore": 80,
      "name": "Strategic Pursuit"
    },
    {
      "minScore": 60,
      "name": "Active pursuit"
    },
    {
      "minScore": 35,
      "name": "Monitor"
    },
    {
      "minScore": 0,
      "name": "Low priority"
    }
  ],
  "requiredFacts": [
    "project_name",
    "usable_location",
    "type_fit",
    "stage",
    "construction_value",
    "units",
    "developer_identity",
    "architect_identity",
    "builder_identity",
    "dealer_identity"
  ],
  "reviewRules": [
    "phase_or_rename",
    "unresolved_stakeholder",
    "missing_required",
    "conflicting_evidence",
    "incomplete_search"
  ],
  "notes": "PROPOSED, not installed or approved. Confidence thresholds are read separately from the existing system settings. Region policy is fictional demo coverage."
}
```

Priority values: 80–100 Strategic Pursuit; 60–<80 Active pursuit; 35–<60 Monitor; 0–<35 Low priority. An unknown overall score uses **Data Incomplete**. Resolve these to existing priority lookup IDs by verified meaning; don't repurpose or duplicate legacy values. Discard remains disabled.

### Required facts and their sources

| Policy key | Source / trusted interpretation |
|---|---|
| project_name | `UsrProjectName`; nonblank human name |
| usable_location | Boolean derived from address/city/state/country; sufficient information to identify location, not merely country text |
| type_fit | Verified canonical interpretation of `UsrProjectTypeText`; mapped type |
| stage | Verified canonical interpretation of `UsrStageText`; mapped stage |
| construction_value | `UsrEstimatedProjectValue` with explicit currency semantics; convert to USD only with approved dated conversion evidence. There is no assumed currency column in this kit. Unknown currency => null. |
| units | `UsrNumberOfUnits`; confirmed integer, including zero only when explicitly evidenced. Database default zero is not evidence of zero units. |
| developer_identity | `UsrDeveloperName` plus verified Account candidate or explicit reviewer-approved new-party handling |
| architect_identity | `UsrArchitectName` plus verified Account candidate or explicit reviewer-approved new-party handling |
| builder_identity | `UsrBuilderName` plus verified Account candidate or explicit reviewer-approved new-party handling |
| dealer_identity | `UsrDealerName` plus verified Account candidate or explicit reviewer-approved new-party handling |

`resolved` and `approved_new` are trusted adapter values, not new CRM lookups. `approved_new` requires recorded human approval; a model cannot assert it. Required stakeholder identity is independent of its factor score. For example an unresolved architect can receive 50 factor points and still require review. A newly approved developer can have zero historical wins only after a successful query; a new dealer with no tier still leaves that scoring factor unknown.

Optional fields can be made required by adding their supported keys: `bid_date`, `start_date`, `completion_date`, `contact_name`, `contact_email`. The adapter must first validate dates/contact data and supply canonical facts with provenance; text presence alone is not full validation. Unsupported requirement keys fail configuration validation, preventing silent typos. At present every active factor must be known for a total score, even when it is omitted from `requiredFacts`.

### Review rules

The five declarations above are mandatory workflow rules: phase/rename, unresolved stakeholder, missing required information, conflicting evidence and incomplete search. They cannot be switched off by reducing a confidence threshold or removing a JSON entry. Ambiguous project identity also always requires review. Additional business restrictions need a supported adapter rule and test before adding them to configuration.

- Complete evidence + confidence at/above the ready threshold + no review flags → Ready to apply.
- Missing business evidence/unmapped coverage or type/phase/rename/uncertainty → Needs review.
- Invalid/unapproved configuration or an execution/tool failure → failure handler; record Failed only through the owning workflow after a successful write.
- Reviewer-owned, stale, concurrent or protected records → stop without overwriting another user's result.

## 4. Lookup values to resolve before running

These are canonical meanings to find in existing lookup records, not instructions to insert duplicates:

| Object | Required meanings |
|---|---|
| `UsrADProjectPriority` | Strategic Pursuit; Active pursuit; Monitor; Low priority; Data Incomplete |
| `UsrIntakeStatus` | New; Processing; Needs review; Ready to apply; Failed; Applied; Rejected |
| `UsrProjectAIRecommendedAction` | Create new project; Update existing project; Link as new phase; Duplicate – no action; Discard (low value), with Discard disabled in this release |

Verify exact stored titles/IDs and retain legacy values. Review existing analysis-status lookup separately; it is not lifecycle status. Region/type/stage maps above are JSON entries, not additional table rows. CRM candidate Projects, Accounts and their verified categories/history remain ordinary business records, never configuration seeded by the verdict agent.

## 5. Wire the verdict agent

1. Load the selected intake, candidates and trusted business facts.
2. Read all configured factor rows with IDs/ModifiedOn and the three global setting values through a restricted read action. Resolve lookup IDs. The model must not supply these records.
3. Parse structured descriptions, validate factor keys, bands, active weights, policy approval, hash, thresholds and mandatory review rules. Legacy prose descriptions are unsupported: return configuration required rather than guessing numeric bands.
4. Snapshot the configuration once for the run. The retrieval adapter must detect changes during its multiple reads (version/re-read check) and retry; use consistent reads where available.
5. Use the model for evidence-backed identity interpretation. The trusted adapter verifies evidence and derives canonical facts/flags. Deterministic code evaluates configured maps/bands and calculates the total/priority. Never accept a model's final score as authoritative.
6. Enforce review and concurrency guards; resolve lookup IDs; save only permitted verdict fields. Persist policy version, actual factor IDs, exact rule/weight/threshold snapshot and hash in `UsrRecommendationDetails` or a supported audit log if too large. Verify storage capacity and read-back.
7. Read back the saved record and summarize it. A configuration change affects the next requested analysis; it does not automatically rewrite old verdicts. Keep previous snapshots/history and require a deliberate rerun.

The Python files demonstrate steps 3 and 5 and validation gates locally. They are not deployed tools or an automatic Python runtime in Creatio. Port to supported workflow/code actions or a verified service integration; attaching them as Knowledge does not execute them. See the system prompt, skill and workflow contract for other responsibilities.

## 6. Worked example (synthetic; not a CRM insertion)

**Cedar Quay Residences**: USD 90m verified construction value; 240 units; apartments; design development; resolved architect; dealer tier B; resolved developer with two verified won opportunities; North Carolina (US-NC). All required identities/location are verified; no phase/rename/conflict; candidate search complete; new-project decision confidence 95. See `example-business-facts.json` for the trusted fact structure.

| Factor | Points | Weight | Contribution |
|---|---:|---:|---:|
| Construction value | 85 | 20 | 17.00 |
| Units | 85 | 15 | 12.75 |
| Type fit | 100 | 15 | 15.00 |
| Stage | 100 | 15 | 15.00 |
| Architect | 100 | 10 | 10.00 |
| Dealer | 80 | 10 | 8.00 |
| Developer relationship | 50 | 10 | 5.00 |
| Region | 100 | 5 | 5.00 |
| **Total** | | **100** | **87.75** |

After administrator approval, the local reference returns **Strategic Pursuit / Ready to apply / Create new project**; no Project is created. Changing the 75m construction-value band from 85 to 40 points, refreshing the factor hash/version and reapproving yields **78.75 / Active pursuit** using the same agent prompt. Changing only the Strategic threshold from 80 to 90 also yields Active pursuit, with the score remaining 87.75. A new phase remains Needs review in both cases. An unmapped region makes the overall score unknown / Data Incomplete / Needs review.

## 7. Configure safely, then test

1. Export the package and snapshot existing factor/settings/binding values. Inspect consumers of `UsrDescription` so a legacy reader is not silently broken by the JSON format. Do not reactivate legacy automation.
2. Resolve existing factor and setting IDs; preserve originals. Verify the settings storage length and administrator-only editing. No new list page is part of this work.
3. Review the proposed values with the manufacturer, especially currency, region coverage and required stakeholders. These are examples, not factual commercial policy.
4. Keep policy unapproved while updating the eight rows. Update by GUID. Bind updated rows/settings to the existing package. Read them back.
5. Use `factor_hash(rows)` in the reference module (or equivalent native logic) to compute the canonical hash from the actual values; set `factorConfigHash`, increment `version`, then explicitly approve the reviewed policy. `Id`/ModifiedOn are excluded from the approval hash, but included in the execution snapshot. Never let the model self-approve or recompute an approval hash to hide drift.
6. Enable restricted read/evaluate/save actions; Preview one existing intake. Verify complete, missing-fact, phase, rename, invalid-config, stale-input and permission cases. Recheck the current legacy listener gate before any separately authorized intake creation.
7. For future factor edits: set approved=false, edit/review, refresh hash/version, then approve. Restrict all settings/row writes to administrators. Existing completed verdicts retain their original snapshots until explicitly rerun.

**Record count for this design:** update eight existing factor rows, read two existing confidence settings, add one proposed policy setting, and resolve existing lookup IDs. No extra intake, Account, Project or custom object is created by configuration setup.
