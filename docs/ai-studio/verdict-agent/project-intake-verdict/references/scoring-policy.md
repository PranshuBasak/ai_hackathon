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
