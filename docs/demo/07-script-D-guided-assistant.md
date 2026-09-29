# Script D — "The assistant guides a rep: from a half-remembered lead to a decision"

**Story:** Jordan, a sales rep, comes back from a trade show with two leads scribbled on a card. The details are half remembered and the company names are not quite right. Project Assistant:
1. asks for what's missing and proposes the CRM companies that are close matches;
2. runs the verdict;
3. **qualifies** one lead and explains every point of the score, then converts it into a Project and Opportunity;
4. **disqualifies** the other with a recorded reason.

**Length:** about 5–6 minutes live.
**Shows:** a conversational next-step guide · questions for missing facts · **near-match (proximate) stakeholder linking with confirmation** · verdict · **score explanation** · qualify → Project + Opportunity · **disqualify → Rejected** · pipeline summary.

**Backing data (Set D, loaded 29 Sep 2026):**

| CRM record | How the rep says it | Match |
|---|---|---|
| Oakhurst Senior Living LLC (Developer) | "Oakhurst Living" | near match → confirm |
| Kline & Hart Architects (Architect) | "Kline Hart" | near match → confirm |
| Granitefield Builders (Contractor) | "Granitefield Builders" | exact |
| Sunbelt Appliance Supply Co. (Dealer, tier A) | "Sunbelt Appliance" | near match → confirm |
| Nina Patel, VP of Development, Oakhurst | "Nina from Oakhurst" | contact at the developer |
| Pacific Crest Homes (Developer, CA) + Ben Carter | "Pacific Crest Homes" | exact |

Expected verdicts:
- **Bayshore Terrace Senior Living** = **84.75 · Strategic Pursuit**.
- **Cypress Lane Kitchen Remodel** = **11.50 · Low priority**, which gets disqualified.

---

### Scene 1 — "What can you do for me today?" (0:00–0:40)
**Screen:** Project Intake list, Creatio.ai panel, new chat, **Project Assistant**.
**Type:**
> Hi — I'm back from the trade show with a couple of leads. What can you help me with, and what's waiting for me?

**Expect:**
- A short introduction: capture from chat, email or spreadsheet; verdict and score; apply to Project and Opportunity after your yes.
- A **pipeline snapshot** grouped by status with counts (for example Ready to apply: Marigold Point …) and a suggested next step.

**Say:** "It starts like a colleague: here's what I can do, here's what's waiting, what do you have?"

### Scene 2 — A half-remembered lead (0:40–1:50)
**Type:**
> First one: a senior living project in Miami by Oakhurst Living, about 210 units. Architect is Kline Hart, GC Granitefield Builders, and Sunbelt Appliance would supply. Nina from Oakhurst is the contact.

**Expect:** the agent summarises what it has and asks **only for what's missing**, 1–2 questions at a time: project name, address, stage, construction value.
**Type:**
> It's called Bayshore Terrace Senior Living, 3300 South Bayshore Drive. Construction documents stage, budget around USD 88 million.

**Expect** (preview) — Stakeholders:
- Developer "Oakhurst Living" → **possible match: Oakhurst Senior Living LLC (Developer)**
- Architect "Kline Hart" → **possible match: Kline & Hart Architects (Architect)**
- GC: Granitefield Builders ✓ linked
- Dealer "Sunbelt Appliance" → **possible match: Sunbelt Appliance Supply Co. (Dealer)**
- Key contact: Nina Patel (VP of Development, Oakhurst). It asks to link her once the developer is confirmed.
- "Link these matches?" · "Optional details not provided: …" · "Create this intake?"

**Say:** "I got the names slightly wrong. Instead of creating junk or saying 'not found', it proposes the right CRM companies and asks me."

**Type:**
> Yes, link all three matches and Nina. Category New Build. Create it.

**Expect:** "PI-0000xx · Bayshore Terrace Senior Living · New". All 4 companies and the contact are linked; a record link; "Run the verdict now?"

### Scene 3 — Verdict and "explain the score" (1:50–3:10)
**Type:**
> Yes, run the verdict.

**Expect:** Create new project · **84.75 · Strategic Pursuit** · buying-centre health 100% · Can create project and opportunity: Yes · Ready to apply. A confirmation card to save. **Type** *"Yes, save it."*

**Type:**
> Explain exactly how you got 84.75.

**Expect:** a step-by-step explanation read from the configured rules:

| Factor (weight) | Fact | Rule applied | Rule score | Points |
|---|---|---|---|---|
| Construction value (20) | USD 88M | band "USD 75m to under 150m" | 85 | 20 × 85/100 = **17.00** |
| Unit count (15) | 210 | band "200–299 units" | 85 | **12.75** |
| Project type fit (15) | Senior Living | value "Senior Living" | 100 | **15.00** |
| Construction stage (15) | Construction documents | value "Construction documents" | 100 | **15.00** |
| Architect known (10) | Resolved (Kline & Hart) | "Resolved" | 100 | **10.00** |
| Dealer tier (10) | A (Sunbelt Appliance Supply Co.) | "A" | 100 | **10.00** |
| Developer relationship (10) | 0 won opportunities | band "No won opportunities" | 0 | **0.00** |
| Region coverage (5) | FL | value "FL" | 100 | **5.00** |
| **Total** | | | | **84.75** → band ≥ 80 = **Strategic Pursuit** |

- It adds: "The only gap is the relationship: we have never won with Oakhurst. That is where this lead could grow."

**Say:** "No black box. Each point traces to a rule sales ops maintains in Creatio. Change the rule and the score follows."

### Scene 4 — Qualify and convert (3:10–4:10)
**Type:**
> Great — it's qualified. Convert it into a project and opportunity.

**Expect** (plan):
- **Project**: Bayshore Terrace Senior Living · Senior Living · Construction documents · Miami, United States · USD 88M · 210 units · Account Oakhurst Senior Living LLC · Contact Nina Patel · Supplier Our company
- **4 involved parties**
- **Opportunity** "Bayshore Terrace Senior Living pursuit" · Contact Nina Patel · Partner Sunbelt Appliance Supply Co.
- **Owner and reviewer?** → *"Me."*
- "Proceed?" → **Type** *"Yes"*

**Expect:** Project and Opportunity links; "4 involved parties"; the intake **Applied**.

### Scene 5 — Disqualify the second lead (4:10–5:20)
**Type:**
> Second lead, a small home remodel: Pacific Crest Homes is redoing kitchens in 18 units at 4411 Cypress Lane, San Diego, CA. About USD 4.2 million, already under construction. No architect — it's design-build — and no dealer, they buy direct. Call it Cypress Lane Kitchen Remodel.

**Expect:** a preview with Pacific Crest Homes ✓ linked, architect and dealer recorded as **explicitly none**, type Small Home Remodel. **Type** *"Create it and run the verdict."* (confirm each step).
**Expect** verdict: **11.50 · Low priority**:
- value 2.00 · units 3.00 · type 1.50 · stage 4.50
- architect 0 · dealer 0 · relationship 0 · region CA 0

**Say:** "Small, late-stage, outside our territory, with no dealer involved. The score says so, and it tells me why."

**Type:**
> Disqualify it — too small, already under construction and outside our territory.

**Expect:** a plan: **nothing will be created**, the intake will be marked **Rejected**, reason recorded. **Type** *"Yes"*
**Expect:** "PI-0000xx · Cypress Lane Kitchen Remodel · Rejected". The outcome flags are cleared and the reason is saved in *Match reason*.

### Scene 6 — Wrap-up (5:20–5:50)
**Type:**
> Summarise what we did today and what's next.

**Expect:**
- Bayshore Terrace: Applied, with Project and Opportunity links.
- Cypress Lane: Rejected, with the reason.
- Remaining items waiting in the pipeline, and the next suggested step.

**Say:** "Two leads, two decisions, both explained and recorded. One is now a live pursuit with the whole buying centre attached."

---

**Reset after a rehearsal.** Remove only the two intakes created here, plus the Bayshore Project, its Opportunity and 4 parties, in dependency order. Keep the Set D companies and contacts.
