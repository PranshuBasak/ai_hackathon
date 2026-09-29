# Project Intake Verdict Analyst — reference pack

## Live deployment update — 28 September 2026

`UsrIntakeVerdictPolicy` now exists in ai_hackathon as global MaxSizeText, uncached and nonpersonal. Version `demo-2026-09-28-v1` is approved for the owner-authorized hackathon demo. Eight existing factors now carry the structured rules; IDs/weights are preserved and original prose is in Description. See [installed policy and integration handoff](05-installed-policy-and-agent-read.md). The `*.proposed.*` files remain draft templates; runtime must read the installed values. Scoring/save execution in AI Studio remains unverified. Factor bindings are verified; the new setting/value package bindings remain pending after a SysSettings permission refusal.


---

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

---

# Matching and review rules

1. First search exact provider/source-project identity. Separately search human Project name/aliases, normalized address, city/country and developer. Preserve phase, tower and block distinctions. Multiple exact-key results require review.
2. Rank and supply at most ten relevant Project candidates, not the first ten database rows. Supply up to five Accounts for each stakeholder role. Record filters, access limits, truncation and search success. If coverage is insufficient to make a no-match conclusion, set searchComplete=false.
3. Exact name alone is insufficient. Prefer corroborating location/developer/source identity. A conflicting address, developer or phase is material evidence.
4. Same source identity and no material updates: Duplicate – no action. Changed verified business data for the same project: Update existing project. Compare fields before deciding; source identity alone does not imply no action.
5. A phase at the same site: new-phase with candidate parent, Link as new phase, mandatory Needs review.
6. A renamed project supported by address/developer evidence: renamed, Update existing project, mandatory Needs review.
7. Reports from different providers can match the same Project. Retain their distinct intake records. Choose duplicate or update based on whether facts changed.
8. A well-supported complete no-match search can recommend Create new project. For this case matchConfidence is zero (no existing project chosen); decisionConfidence measures support for the new-project recommendation. Neither number is a calibrated probability.
9. Account spelling/alias ambiguity always needs review. Candidate IDs are proposals, not writes to reviewer-owned selections.
10. Ambiguous alternatives: explain the competing candidates and leave action null. Do not disguise uncertain identity as low commercial value.

Examples from the original demo oracle: Cedar Grove Heights duplicate; Meridian Tower Phase 2 links to Phase 1 with review; Commons at Riverside is a possible rename with review; Pier 9 cross-source records share one Project. These are evaluation expectations to verify against live records, not instructions to force the expected answer.

---

# Proposed scoring policy — administrator review required

Runtime storage and parsing: see [dynamic configuration](configuration.md). The numeric tables here document the proposed seed example; the workflow reads approved current rules from UsrScoringFactor.UsrDescription plus UsrIntakeVerdictPolicy, with confidence thresholds from the existing settings. Never use this document as a live fallback.

Existing initial weights: construction value 20, units 15, type fit 15, stage 15, architect 10, dealer 10, developer relationship 10, region 5. The original plan specified direction and examples but did not define precise numeric bands. The following bands are a NEW PROPOSAL and are not installed or approved. `assets/policy-proposed.json` is deliberately approved=false. Review these choices with the business owner before enabling scoring.

| Factor | Proposed normalized score (0–100) |
|---|---|
| Construction value | Under USD 10m: 10; 10m–under 25m: 35; 25m–under 75m: 65; 75m–under 150m: 85; 150m+: 100. Apply only with verified USD amount or approved dated conversion. |
| Units | Under 50: 20; 50–99: 40; 100–199: 70; 200–299: 85; 300+: 100. |
| Type fit | Administrator mapping: multifamily/apartments, hospitality/hotel, senior living 100; student housing 90; mixed-use 70; small home remodel 10. Unmapped type is unknown until configured. |
| Stage | Conceptual 60; Design development 100; Construction documents 100; Bidding 80; Under construction 30; Completed 0. Unmapped is unknown. |
| Architect | Confirmed CRM match 100; supplied but unresolved name 50; explicitly absent 0; unavailable evidence unknown. |
| Dealer tier | A 100, B 80, C 50, D 20; explicitly no dealer 0; unknown category/access unknown. |
| Developer relationship | Successful CRM query: 0 won opportunities 0; 1–2 wins 50; 3+ wins 100. Query failure is not zero. |
| Region | Approved coverage map: covered 100; outside coverage 0; unspecified coverage unknown. The asset demonstrates FICTIONAL coverage US-NC/US-GA/US-FL=100, US-CA=0; all other regions unknown. This is not a verified manufacturer territory. Do not infer coverage from country or seed cities. |

Arithmetic: sum(weight × normalizedScore / 100), with active weights totaling exactly 100 under this initial policy. Disable/change a factor only with corresponding weight/configuration adjustments; do not silently renormalize. Unknown active factor => overall score unknown, priority Data Incomplete, Needs review. Known absence can score zero while still appearing as missing business information.

Proposed priority bands: >=80 Strategic Pursuit; >=60 Active pursuit; >=35 Monitor; otherwise Low priority. Resolve the corresponding existing lookup values by meaning/ID; capitalization is not a new lookup. A low score does not by itself authorize Discard; a separately approved discard eligibility rule is required, default disabled in the asset.

Proposed essential completeness for this release: project name, usable location, type/stage, construction value with known currency semantics, units, developer, architect, builder and dealer (names plus identity resolution or explicit reviewer-approved new-party handling). Dates/contact omissions are warnings unless business policy marks them essential. Expose this list as configuration; it is not currently enforced by database required flags. Missing source facts must never be fabricated to pass it.

Thresholds 85/50 are decision-confidence settings, not score thresholds. Ready to apply requires decisionConfidence >= ready threshold, sufficient match confidence when an existing candidate is selected, complete evidence and no mandatory-review flags. Below-ready cases stay Needs review; below-review-threshold cases receive an explicit low-confidence escalation reason. Neither threshold enables automatic Apply.

The original 15-row oracle remains NOT RUN. This proposed rubric may not reproduce every expected demo priority, especially without real dealer/history/coverage evidence. Record differences and obtain a policy decision; do not tune outputs to match labels or change the oracle silently.

---

# Dynamic configuration contract

Prepared 28 September 2026; proposed design, not installed. Full field-by-field setup is in `04-configuration-records-and-setup.md` at the build-kit root and included in the combined reference pack.

Reuse `UsrScoringFactor` (eight rows). Parse existing `UsrDescription` as JSON with exactly formatVersion=1, key, guidance and rule. Retain actual row IDs. Name is display text; use stable key and a verified ID mapping. Band rules have kind=bands, integer flag and descending min/score entries ending at min=0. Map rules have kind=map and lowercase values mapping. Unknown map keys/data are unknown, never automatically zero. No native Creatio interpretation of this JSON is assumed: implement the parser in the workflow/tool.

Read one proposed global `UsrIntakeVerdictPolicy` setting: formatVersion, version, approved, factorConfigHash, active factorKeys, allowDiscard=false, descending priorityBands covering zero, requiredFacts and mandatory reviewRules. Read confidence thresholds independently from the two existing settings. Verify settings text length/round-trip, no personal overrides, and administrator-only editing. Configuration-read failure is a technical failure, not missing business data.

`configure_verdict.prepare` requires actual factor row IDs and trusted facts keyed by factor/requirement name, each `{value, evidence}`. Construction value must be verified USD; query failures return null facts with explanations. Identity facts use resolved/approved_new only when verified by the adapter/reviewer. Use the complete facts/source table in the setup guide. Normalized scores come from the configured maps/bands. Mandatory guards are enforced by code regardless of confidence. Numeric/format errors fail closed; unknown valid business data requires review.

The administrator reviews factor edits, updates the canonical factorConfigHash and policy version, and explicitly approves. Hash generation uses canonical sorted JSON as implemented in the reference module; it is change detection, not authentication. Models never write configuration or approve it. Active factor weights total 100; disabled factors require rebalancing and updating active factorKeys. Policy/threshold changes require administrator control and a version update too.

Read one consistent snapshot per run, with retries/version rechecks if source rows change during retrieval. Run the model on candidate evidence, then call `evaluate_configured` (or tested equivalent) with trusted context/facts. Merge review reasons; never let model values remove host guards. Store returned configurationSnapshot/configurationHash and policy version in allowed verdict details or supported audit log. Re-check intake/reviewer version before persistence. Configuration changes affect later explicit runs; old verdicts retain their own snapshot.

No repository asset is a live policy fallback. Original free-text descriptions intentionally fail parsing until the approved configuration migration is performed. An upload cannot execute Python or create a system setting. The owner subsequently authorized live policy setup: see the deployment update below. No list page was created.

## Deployment update — 28 September 2026

The owner-authorized demo policy is now installed in ai_hackathon, version demo-2026-09-28-v1, approved=true. UsrScoringFactor.UsrDescription contains the eight JSON rules; original guidance is retained in Description. SysSettings ID c04e4469-4341-4c61-b400-386e90d9a2e8, SysSettingsValue ID 65c45cba-a76d-461b-b321-f19df0653ffe. Read TextValue and parse JSON, using the actual integration tool schema. All-Users scope, MaxSizeText, not personal, not cached. Existing 85/50 values unchanged. Do not report the policy missing without a fresh read; do not treat permission failure as absence. Clio reads succeeded; AI Studio execution-identity access remains to be tested. Restricted scoring/save execution is not installed by this settings change. New system-setting package bindings are pending after a protected-object refusal; eight factor bindings are verified.

---

# Required workflow/tool implementation

These are responsibilities to implement using the tenant's supported workflow/tools. Names are not claims that such tools already exist.

1. **Acquire run**: authorize requested intake ID; reject terminal records or reviewer-owned verdicts without deliberate review; atomically acquire a per-intake run lease. Store input ModifiedOn/hash and previous verdict, run ID, prompt/policy versions. Mark Processing only after acquisition. A second run must not steal the first run's state.
2. **Load context**: read source and reviewer selections, exact/ranked candidates, all configured factor rows, the proposed global policy setting, both existing confidence settings and lookup IDs. Validate a consistent snapshot using the dynamic configuration contract; keep actual row IDs and versions. No prompt/knowledge fallback for unreadable or unapproved configuration. Log query coverage. Resolve configuration before LLM calls. Do not import source text as instructions.
3. **Analyze**: obtain match proposal and evidenced factor judgments. Calculate deterministic business guard flags independently of the model (phase indicators, unresolved matches, missing requirements, conflicts). Model flags can add review reasons but cannot remove host flags.
4. **Validate**: enforce schema, candidate membership, compatible match/action, numeric ranges, active-factor IDs and configured policy version. The trusted adapter derives canonical facts and always computes factor scores from the approved configured numerical mappings; unknown mappings remain unknown. Use configure_verdict.py plus validate_verdict.py as the offline reference. Neither accepts an LLM-authored configuration as trusted. Run the reference validator after adapting it or implement equivalent native logic. Its output is a semantic proposal, not a raw OData request.
5. **Persist atomically**: compare current input/reviewer version with the acquired snapshot, allowing only this run's own Processing write. Abort stale runs. Resolve canonical lookups, apply the verdict allowlist, clear obsolete agent-owned values and save final status. Store decision confidence, factor evidence, scoreUnknown, the exact configuration snapshot/hash/version and run metadata in UsrRecommendationDetails (verify capacity; use a supported audit log when necessary). Use a run-log entity or approved workflow log for historical versions and partial failures; detailed audit history is not added by a prompt alone.
6. **Failure**: only the lease owner may set Failed and sanitized UsrAgentError, set analysis completed false and mark the old verdict stale in details. Preserve business inputs, reviewer fields and last result history. A validation/configuration/transport failure is not Needs review. A conflict should return conflict without overwriting the current owner's record. Release the lease in a finally path; define timeout recovery.
7. **Read back**: confirm the actual status, action/match, score/priority and run ID. Return saved vs unsaved honestly. Retry uncertain writes by run ID/read-back, never blind resubmission.

Required access: intake/configuration/candidate reads and a restricted verdict-writing workflow. No Project, Account, Contact, participant, Lead or Opportunity mutations. No original/raw fields or reviewer-selector writes. No generic batch/all-record agent activation yet. The new capture agent remains unchanged unless separately extended after acceptance.

Python in this kit is an offline reference. Uploading it as Knowledge does not execute it. If no supported Python runner exists, port the validation/calculation into native workflow/code actions or an approved HTTP service; register that action as a tool and test it. Do not instruct users to execute a Python file in a C# script task.

---

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

---

# Installed verdict policy — ai_hackathon

Verified through Clio on 28 September 2026. This supersedes earlier statements that the policy does not exist. It does not establish a deployed scoring/save workflow.

## Live setting

- Name: **Project Intake verdict policy**
- Code: `UsrIntakeVerdictPolicy`
- Setting record ID: `c04e4469-4341-4c61-b400-386e90d9a2e8`
- Global value record ID: `65c45cba-a76d-461b-b321-f19df0653ffe`
- Type: `MaxSizeText`; personal: false; cacheable: false.
- Native All-Users value is associated with **All employees**. This value scope does not itself grant editing permissions.
- Version: `demo-2026-09-28-v1`; approved: true for the owner-authorized hackathon demo configuration.
- Policy file snapshot: `project-intake-verdict/assets/policy-installed-ai_hackathon.json`.
- Existing settings unchanged: `UsrIntakeAutoApplyThreshold=85`, `UsrIntakeReviewThreshold=50`.

## Factors

All eight existing UsrScoringFactor GUIDs, names, weights and active flags are preserved. UsrDescription now contains versioned JSON rules; original readable guidance was copied into the previously empty Description column. The existing UsrScoringFactor package binding contains eight rows and six columns, including both descriptions. No new factor rows, intake records or verdict results were created.

Numeric bands are the previously documented demo rubric. Coverage is fictional: US-NC/US-GA/US-FL covered, US-CA outside, every other region unknown. Currency semantics must be verified; no implicit USD conversion or fabricated zero values. Phase/rename and other mandatory review rules remain in force. Approved is not an auto-Apply permission.

## How the assistant should retrieve it

Use the current integration tool schemas. Resolve SysSettings by exact Code `UsrIntakeVerdictPolicy`, then read its related SysSettingsValue row and parse TextValue as JSON. The known GUIDs above can be used for a direct get-record test in this environment. Do not fabricate a filters shape; use the tool's actual input contract.

Read the eight live UsrScoringFactor rows and both current confidence values each run. Validate approved, version, factorConfigHash, active keys/weights and rules. The local snapshot is evidence, not a fallback when live reads fail. These reads were verified through Clio with Supervisor; access by the AI Studio integration's execution identity has not been verified.

Suggested assistant test:

> Read the live UsrIntakeVerdictPolicy setting and its TextValue. Report policy version, approval state, priority bands and the count/sum of active UsrScoringFactor weights. Do not update any intake. Report any access error exactly and do not fall back to uploaded examples.

## Verification

- Native setting read-back and DataService row read-back agree; complete JSON preserved.
- Eight factors match their intended records and hash, with active weights totaling 100.
- All canonical priority, action and status lookup meanings are present; legacy values preserved.
- Saved live configuration evaluated by the local reference: complete synthetic example 87.75 / Strategic Pursuit / Ready to apply; phase case Needs review; unknown region null score / Data Incomplete / Needs review. These are local tests using live configuration, not live agent runs or CRM result writes.

## Remaining integration work

The assistant still needs a supported executable scoring entry point and a restricted verdict-save action, followed by read-back verification. No AI Studio prompt, skill publication or agent deployment was changed by this operation. A new conversation/test should fetch live configuration; an existing chat may retain older context.

## Packaging and permissions limitation

Live creation/update through native system-setting tools succeeded. Adding the new setting to SysSettings_ProjectIntake through the DataService-backed binding updater was refused: SysSettings object permission, correlation ebcdc8611bee. No retry with alternate credentials or permission bypass was attempted. The existing settings and values bindings still cover the prior threshold settings; the new policy setting/value require native Configuration data binding or a supported package installation script before transfer to another environment. Factor bindings are updated and read back.

System-setting edit permissions and AI Studio integration access need effective-user tests; the existing management permissions were not changed. Browser verification was unavailable: the opened tab reached login and subsequently was no longer accessible.

## Evidence and recovery

Pre-change package: backups/verdict-policy-2026-09-28/UsrMieleADProjects.zip (1,315,267 bytes); SHA256 818b209f08e5d9582d5a34c08a6acc74911587b69818c36534783235e87f982f. Export completed before the owner's later request to skip waiting for it. No further export was run.

Snapshots: evidence/verdict-policy-before-2026-09-28.json; evidence/verdict-policy-readback-2026-09-28.json; evidence/verdict-policy-validation-2026-09-28.json; evidence/verdict-policy-lookups-2026-09-28.json.

For a deliberate rollback: set policy approved=false through the native setting action, restore only the eight recorded factor GUIDs from the before snapshot with the corresponding binding values, and read back. Do not delete intake records. Do not remove binding rows to unbind settings: that operation can delete live data.
