# Script E — Full demo run (end-to-end, word for word)

One continuous live demo of Project Assistant, from the first "hi" to the manager wrap-up. It covers the whole journey:
- guidance and next steps;
- capture with **near-match stakeholder linking**;
- verdict, with the **score calculation explained**;
- **qualifying** and converting into a **Project and Opportunity**;
- **disqualifying** an out-of-territory lead;
- proof in CRM, and a look under the hood.

**Length:** about 12 minutes live (use Script 06 for the 5-minute video cut).
**Backing data (Set E, loaded 29 Sep 2026):**

| CRM record | Said in the demo as | Linking |
|---|---|---|
| Northbeam Communities (Developer, alternative name "Northbeam"), with **3 Closed won** opportunities (Midtown Flats 2022, Decatur Commons 2023, Georgia Tech West 2025) | "Northbeam" | exact through the alternative name |
| Studio Arcadia (Architect) | "Arcadia" | near match → confirm |
| Keel & Stone Construction (Contractor) + Omar Haddad | "Keel and Stone" | near match → confirm |
| Peach State Appliance Distributors (Dealer, tier A) + Rachel Kim | "Peach State Appliance" | near match → confirm |
| Grace Liu, SVP Development, Northbeam | "Grace Liu" | contact at the developer |
| Sierra Pines Builders (Developer, NV) + Dylan Brooks | "Sierra Pines Builders" | exact |

Expected results:
- **Midtown Crossing Student Residences** = **95.50 · Strategic Pursuit** → Project + Opportunity.
- **Desert Bloom Townhomes** = **Data Incomplete → Needs review** (type and region outside the scoring rules) → **disqualified**.

---

## Act 0 — Pre-flight (before the audience joins)

1. The AI capacity is topped up. Project Assistant v3 or later is deployed to 189543-crm-bundle.
2. Tab 1: Creatio bundle → **Project Intake** list, filtered to today, with the Creatio.ai panel open on a **new chat** with Project Assistant.
3. Tab 2: AI Studio → **Agents → Project Assistant** (Skills tab).
4. Tab 3: AI Studio → **Observability**.
5. Neither "Midtown Crossing" nor "Desert Bloom" exists yet: search the intake list to check.
6. Zoom the browser to 110–125%.

---

## Act 1 — Opening (0:00–1:00)

**Screen:** the Project Intake list.
**Say:**
> "We make appliances for apartments, hotels, senior living and student housing. We win those deals years before a building opens, so our reps chase project leads from Dodge reports, spreadsheets, emails and trade shows.
> The pain: every lead is re-typed into CRM, the architect and dealer are looked up by hand, nobody is sure whether it's a duplicate or worth chasing, and building the project and opportunity takes most of a morning.
> Project Assistant is one AI agent, built in Creatio AI Studio, that does all of that in a conversation, and never writes anything without my yes."

---

## Act 2 — Guided capture with near-match linking (1:00–4:00)

**Type:**
> Hi! I just got off a call about a new project. What do you need from me?

**Expect:** a short guide: it can capture from chat, email or a spreadsheet, and the essentials are project name, location, type, stage, value and units, plus the developer, architect, builder and dealer. It invites the details and mentions anything already waiting in the pipeline.

**Say:** "It tells me what matters: I don't need to know the CRM fields."

**Type:**
> Northbeam is building Midtown Crossing Student Residences at 400 10th Street NW in Atlanta, GA — 612 beds, construction documents stage, about USD 105 million. Architect is Arcadia, GC is Keel and Stone, and Peach State Appliance will be the dealer. Grace Liu is our contact.

**Expect** (preview, nothing saved):
- Midtown Crossing Student Residences · Student Housing · Construction documents · 612 units · USD 105M · 400 10th Street NW, Atlanta, GA, USA · Source Manual
- Stakeholders:
  - Developer "Northbeam" → **✓ Northbeam Communities** (found by alternative name)
  - Architect "Arcadia" → **possible match: Studio Arcadia** — link it?
  - GC "Keel and Stone" → **possible match: Keel & Stone Construction** — link it?
  - Dealer "Peach State Appliance" → **possible match: Peach State Appliance Distributors** — link it?
  - Key contact: Grace Liu (SVP Development, Northbeam Communities) ✓
- Optional details not provided: category, specification status, dates … Add any?

**Say:** "I said 'Keel and Stone'; CRM says 'Keel & Stone Construction'. It proposes the match but lets me decide, because linking the wrong company would corrupt the buying centre."

**Type:**
> Yes, link all three. Category New Build, specification status Open. Create it.

**Expect:** "PI-0000xx · Midtown Crossing Student Residences · New", created and verified, with a link. "Run the verdict now?"

**Screen (optional, 15 s):** click the link. On the **Stakeholders** tab all four company lookups are filled, and the Key contact shows Grace Liu with her CRM email. Go back to the chat.

---

## Act 3 — Verdict and the explained score (4:00–6:30)

**Type:**
> Yes — run the verdict.

**Expect:**
- It checks CRM for existing projects: none for Midtown Crossing; Northbeam's history is found.
- Recommended action **Create new project**.
- **95.50 / 100 · Strategic Pursuit** · buying-centre health **100%**.
- Can create project **Yes** · Can create opportunity **Yes**.
- "Save the verdict?" → **Type** *"Yes, save it."*

**Type:**
> Walk me through the calculation.

**Expect:**

| Factor (weight) | Fact | Rule | Score | Points |
|---|---|---|---|---|
| Construction value (20) | USD 105M | USD 75m to under 150m | 85 | 17.00 |
| Unit count (15) | 612 | 300+ units | 100 | 15.00 |
| Project type fit (15) | Student Housing | Student Housing | 90 | 13.50 |
| Construction stage (15) | Construction documents | Construction documents | 100 | 15.00 |
| Architect known (10) | Resolved (Studio Arcadia) | Resolved | 100 | 10.00 |
| Dealer tier (10) | A (Peach State Appliance Distributors) | A | 100 | 10.00 |
| Developer relationship (10) | 3 won opportunities | 3+ won opportunities | 100 | 10.00 |
| Region coverage (5) | GA | GA | 100 | 5.00 |
| **Total** | | | | **95.50** → ≥ 80 **Strategic Pursuit** |

**Say:**
> "This is the part sales managers love. Every point comes from a rule in Creatio, not from the model's opinion. Northbeam scores full marks on relationship because we've won three packages with them. The model reads the rules; it doesn't make them up."

**Type:**
> Why is it Strategic and not Active?

**Expect:** "Priority bands are configured as Strategic ≥ 80, Active ≥ 60, Monitor ≥ 35, Low ≥ 0. 95.50 is in the Strategic band."

---

## Act 4 — Qualify and convert into Project + Opportunity (6:30–8:30)

**Type:**
> It's qualified — convert it.

**Expect** (plan; nothing written):
- **Project**: Midtown Crossing Student Residences · Student Housing · Construction documents · Atlanta, United States · USD 105M · 612 units · Category New Build · Account Northbeam Communities · Contact Grace Liu · Supplier Our company · Strategic Pursuit 95.50
- **Involved parties**:
  - Northbeam Communities (Developer/Owner, primary, Grace Liu)
  - Studio Arcadia (Architect/Specifier)
  - Keel & Stone Construction (General contractor/Builder)
  - Peach State Appliance Distributors (Dealer)
- **Opportunity**: "Midtown Crossing Student Residences pursuit" · stage Qualification · Account Northbeam · Contact Grace Liu · Partner Peach State Appliance Distributors
- **Owner and reviewer**: "Who should own these?" → **Type** *"Me."*
- **Intake**: Applied
- "Proceed? (yes / change … / cancel)"

**Say:** "It shows exactly what it will create, including the owner and the dealer partner, and waits for me."

**Type:**
> Yes

**Expect:** "Project 10000000xx — Midtown Crossing Student Residences", an Opportunity link, "4 involved parties created", and the intake **Applied**.

**Screen:**
1. Open the **Project**: account, contact, stage, city, value, units, qualification, and the **Involved parties** list with roles.
2. Open the **Opportunity**: Qualification stage, Contact Grace Liu, Partner Peach State, A&D Project linked.
3. On the intake **Linked records**, click through to the Project and Opportunity.

**Type:**
> Apply it again.

**Expect:** "Already applied — nothing new was created", with the links.
**Say:** "It can't be applied twice."

---

## Act 5 — Disqualify an out-of-territory lead (8:30–10:15)

**Type:**
> Another one from the same call: Sierra Pines Builders is planning Desert Bloom Townhomes in Henderson, NV — 64 townhomes, conceptual stage, about USD 21 million. No architect or dealer yet.

**Expect:** a preview with Sierra Pines Builders ✓ linked, architect and dealer "not selected yet", type Townhomes. "Create this intake?" → **Type** *"Create it and run the verdict."* (confirm the save when asked)

**Expect** verdict:
- Priority **Data Incomplete**, status **Needs review**.
- Reasons: project type "Townhomes" and region "NV" have no scoring rule. Architect and dealer are unknown.
- Outcome flags: all No.
- Options: fill the facts and re-run, decide as reviewer, or reject.

**Say:** "It won't guess a score for a market we don't serve. Unknown stays unknown, and a human decides."

**Type:**
> As reviewer: disqualify it. Nevada is outside our territory and townhomes aren't a fit.

**Expect:** a plan: **nothing will be created**, the intake will be **Rejected** with the reason, reviewed by you. **Type** *"Yes"*
**Expect:** "PI-0000xx · Desert Bloom Townhomes · Rejected", with the reason recorded.

---

## Act 6 — Manager wrap-up (10:15–11:00)

**Type:**
> Give me today's summary for my manager.

**Expect:**
- Midtown Crossing: **Applied**, 95.50 Strategic, Project + Opportunity + 4 parties.
- Desert Bloom: **Rejected**, out of territory.
- What else is waiting (Ready to apply or Needs review), with counts and links.

---

## Act 7 — Under the hood (11:00–12:00)

**Screen and Say:**
1. **Project Intake list → Settings (gear)**: "Scoring factors, rules and priority bands are Creatio records. Sales ops tunes them; the agent reads them live on every verdict."
2. **AI Studio → Project Assistant → Skills**:
   - "Four custom skills (lifecycle guide, capture, verdict, apply), plus Creatio's own data skills."
   - Show the **knowledge source** and the **integration**: "Creatio CRM tools through the Business Studio MCP. The delete tool is switched off."
3. **Observability → the apply run**: "Every run is traceable: validate, create the project, create the parties, create the opportunity, write back, read back."

**Close — Say:**
> "From a phone call to a qualified, fully linked pursuit in a few minutes. Consistent scoring anyone can audit, no duplicates, no invented data, and a person accountable for every record."

---

## Q&A prompts to keep handy
See [04-live-examples.md](04-live-examples.md): *"Delete PI-…"* (refused), *"What is waiting for review?"*, and correcting facts on a Needs review intake.

**Reset after a rehearsal.** Remove only the intakes Midtown Crossing Student Residences and Desert Bloom Townhomes, plus the Midtown Project, its Opportunity and 4 parties, in dependency order. Keep the Set E companies, contacts and the three historic won opportunities.
