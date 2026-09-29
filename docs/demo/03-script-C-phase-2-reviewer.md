# Script C — "Phase 2 of a project we already won: the reviewer decides"

**Story:** After a call with Bellwether Residential, the rep pastes the meeting notes. The agent recognises the project as **Phase 2** of Tech Square Commons, which is already in CRM (Phase 1 is under construction and its appliance package was won). It does not create a duplicate. It routes the intake to a reviewer. Once the reviewer approves, it creates Phase 2 as a **child project** of Phase 1 with a new pursuit.
**Length:** about 3 minutes live (about 1:15 in the combined video).
**Shows:** meeting-note capture · project matching and phase detection · "Needs review" governance · a reviewer decision in chat · Link as new phase (parent project) · a new Opportunity · the lifecycle guide.

**Input:** `seed-data/demo/meeting-note-tech-square-phase-2.txt`
**Backing data:** Bellwether Residential (alternative name "Bellwether"), Arbor & Finch Architects, Tidewater Builders, Blue Ridge Appliance Distributors (tier A), Diane Okafor. Existing project **1000000033 "Tech Square Commons Phase 1"** (Atlanta, 780 Spring Street NW, 520 beds, under construction) with 4 involved parties and a **Closed won** opportunity of USD 1.68M.

---

### Scene 1 — Capture the meeting note (0:00–0:40)
**Screen:** Creatio.ai panel, new chat with Project Assistant.
**Type:**
> Here are my notes from today's call with Bellwether — capture the new project:
> *(paste the meeting note)*

**Expect** (preview):
- **Tech Square Commons Phase 2** · Student Housing · Design development · 420 units · USD 78 million · 790 Spring Street NW, Atlanta, GA, USA · Source **Meeting Notes**, or Manual if the agent keeps the chat default
- Stakeholders, all ✓ linked: Bellwether Residential, Arbor & Finch Architects, Tidewater Builders, Blue Ridge Appliance Distributors. Key contact Diane Okafor.
- The duplicate check warns that **Tech Square Commons Phase 1** exists and asks whether this is the same project. **Type:** *"No — it's the next phase, create it."*

**Type:**
> Yes, create it.

**Expect:** "PI-0000xx · Tech Square Commons Phase 2 · New", with a link.

### Scene 2 — Verdict: a related project, so a human decides (0:40–1:40)
**Type:**
> Run the verdict.

**Expect:**
- Match: **Tech Square Commons Phase 1**. Same developer, the neighbouring address and the name say it is the next phase.
- Recommended action **Link as new phase**.
- Score **90.50 · Strategic Pursuit**:
  - value 17.00 · units 15.00 · Student Housing 13.50 · Design development 15.00
  - architect 10.00 · dealer A 10.00 · developer relationship (1 win) 5.00 · GA 5.00
- Status **Needs review**, reason "phase of an existing project". Outcome flags are all **No** until a reviewer decides.
- Buying-centre health 100%.

**Say:** "Here most tools would create a duplicate. The agent found Phase 1, which we won last year, and by policy any phase or rename goes to a human."

**Type:** *"Yes, save it."*

### Scene 3 — Where does it stand? (1:40–2:00)
**Type:**
> What's the status of Tech Square Commons Phase 2 and what do I need to do?

**Expect:** "PI-0000xx · Tech Square Commons Phase 2 · Needs review", the reason, and the options: (a) fill facts and re-run, (b) take a reviewer decision now, or (c) reject.

### Scene 4 — Reviewer decision and apply (2:00–2:45)
**Type:**
> As reviewer: approve it as a new phase of Tech Square Commons Phase 1 and prepare the plan.

**Expect** (plan):
- **New Project** "Tech Square Commons Phase 2", **Parent: Tech Square Commons Phase 1**. Student Housing · Design development · Atlanta · USD 78M · 420 units · Account Bellwether Residential · Contact Diane Okafor · Supplier Our company
- **Involved parties**: 4
- **Opportunity**: "Tech Square Commons Phase 2 pursuit" · Partner Blue Ridge Appliance Distributors. Created because the priority is Strategic Pursuit and the new project has no open opportunity.
- **Owner and reviewer**: *"Me — Qnovate."*
- "Proceed? (yes / change … / cancel)"

**Type:** *"Yes"*

**Expect:** links to the new Project and Opportunity. The intake shows **Applied** and reviewed by you.

### Scene 5 — Proof (2:45–3:00)
**Screen:** open the new project and show **Parent item = Tech Square Commons Phase 1**, the involved parties and the linked opportunity. Then open Phase 1 to show the history: the won opportunity and the same stakeholders.
**Say:** "Phase 2 is now linked to the relationship we already have: no duplicate, a reviewer on record, and a new pursuit ready for the dealer."

---

**Alternative ending (show a rejection):**
> As reviewer: reject it — Bellwether told us Phase 2 is on hold.

**Expect:** a plan saying nothing will be created, the intake **Rejected** with the match reason "Rejected by reviewer: Phase 2 on hold", and outcome flags cleared.

**Reset after a rehearsal.** Remove only the created intake, child project, opportunity and parties, in dependency order. Never touch Phase 1 (1000000033) or its opportunity.
