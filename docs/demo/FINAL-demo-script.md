# FINAL demo script — Project Assistant (4:00)

**This is the script to record.** It replaces the story order of [09](09-demo-script-final.md) and [11](11-video-4min-recording-and-voiceover.md) with the owner's order (30 Sep 2026): **workspace → scoring system → chat → Excel → email**.

- **Data:** Set F only ([seed-data/demo-final](../../seed-data/demo-final/README.md)).
- **Video:** screen only, recorded as GIF clips in Chrome (1568×736) and converted to WebM with [video/gif2webm.py](video/gif2webm.py).
- **Audio:** AI voice-over, written below per clip. It runs about 600 words (150 words a minute).
- **Recording rule:** record only typing, agent answers and screens being explained. Agent waits are never recorded.

## Pre-flight

1. AI credits available. Project Assistant has capture skill v4 pinned.
2. None of these intakes exist yet: The Linwood Hotel & Residences, Westside Yards Student Residences, Copper Sage Townhomes, Ashford Park Lofts, Coral Bay Senior Residences, Eno River Commons, Cumberland Yards Tower. Checked with clio on 30 Sep 14:10: none exist.
3. Chrome window maximised, signed in to the bundle. The Creatio.ai panel is in **Expanded** mode with the conversations column collapsed. Start a **new conversation** per story, with Project Assistant selected.
4. Files at hand: `seed-data/demo-final/Dodge_Weekly_Export_2026-W40.xlsx` and `email-the-linwood.txt`.
5. When the agent shows a **Confirm / Discard** card, type *Yes* in the chat. Clicking Confirm does not resume the run.
6. Owner and reviewer at every apply step: **Evan Whitaker**.

## Timeline

| # | Slot | Clip(s) | Status |
|---|---|---|---|
| 1 | 0:00–0:25 | Workspace intro | V01a recorded; V01b (project page) to record |
| 2 | 0:25–0:50 | Scoring system | V02 recorded |
| 3 | 0:50–1:50 | Chat: phone-call lead | V03a recorded; V03b–V03d to record |
| 4 | 1:50–2:50 | Excel: Dodge export | V04a–V04c to record |
| 5 | 2:50–3:50 | Email: customer email to project and opportunity | V05a–V05c to record |
| 6 | 3:50–4:00 | Close | V06 to record |

---

## 1 · Workspace intro (0:00–0:25)

**V01a (recorded).** The Project Intake app: the navigation (Project Intake, Accounts, Projects, Opportunities) and the intake list, where coloured chips show the source and status.
**V01b.** Project 1000000037 *Alderwood Resort Hilton Head*. Open the **Buying centre** tab (4 parties with coloured role chips), then the **Opportunities** tab (the won opportunity). Reload the page first; the Buying centre list can show "No data" on a stale page.

**Voice-over**
> We sell kitchen and laundry appliances into hotels, apartments, senior living and student housing, and we win those deals years before a building opens. This is our Project Intake workspace. Every lead that arrives by email, phone call or a weekly Dodge export lands here. The goal is a project like this one: a full buying centre and an opportunity, all linked.

## 2 · Scoring system (0:25–0:50)

**V02 (recorded).** Project Intake list → gear icon (settings tab): **Scoring factor** (8 factors whose weights add up to 100), **Scoring rules** (39 bands and value lists), **Priority bands** (Strategic Pursuit 80, Active pursuit 60, Monitor 35, Low priority 0).

**Voice-over**
> How do we decide what to chase? Sales operations maintains the scoring right here in Creatio. There are eight weighted factors, such as construction value, units, project type, stage, dealer tier and our history with the developer. Each one has plain rules and bands. The agent reads these live and never invents a score.

## 3 · Chat: a phone-call lead (0:50–1:50)

**V03a (recorded).** New chat. Type:
> Riverline is building Westside Yards Student Residences at 780 Marietta Street NW in Atlanta, GA — 612 beds, construction documents stage, about USD 105 million. Architect is Kestrel, GC is Hale and Brandt, and Piedmont Appliance will be the dealer. Rhea Donovan is our contact.

Answer (verified 30 Sep): a draft that is not yet saved. Riverline → **Riverline Communities ✓ linked**, Rhea Donovan ✓ linked. Kestrel → *possible match: Studio Kestrel*; Hale and Brandt → *possible match: Hale & Brandt Construction*; Piedmont Appliance → *possible match: Piedmont Appliance Distributors*.

**V03b.** Type:
> Yes, link all three. Project type Student Housing, category New Build, specification status Open. Create it and run the verdict.

"Project type Student Housing" is required. Without it the agent keeps "Student Residences", which has no scoring rule. At the creation card, type *Yes*. At the verdict card, type *Yes, save it.*
Expected: the PI number, then **95.50 · Strategic Pursuit**, Ready to apply. Hold on the factor table, where developer relationship shows **10/10 (3 won opportunities)**.

**V03c.** Type:
> Another one from the same call: Canyon Ridge Builders is planning Copper Sage Townhomes in Reno, NV — 64 townhomes, conceptual stage, about USD 21 million. No architect or dealer yet. Create it and run the verdict.

Type *Yes* at the creation card. Expected: **Data Incomplete**, **Needs review**, because no rule covers the Townhomes type or the NV region.

**V03d.** Type:
> As reviewer: disqualify it. Nevada is outside our territory and townhomes aren't a fit.

Type *Yes*. Expected: **Rejected**, with the reason recorded.

**Voice-over**
> First, a phone call. I type the lead with company names as I remember them. The agent links Riverline and our contact, and for the others it proposes the right accounts. It never links them silently. One confirmation later, the intake exists with its whole buying centre. The verdict is 95.5, a Strategic Pursuit, and the relationship factor is maxed out because Riverline has already bought from us three times.
> A second lead from the same call: townhomes in Nevada. No rule covers that, so the agent won't guess a score and hands it to a person. I disqualify it, and the reason is on the record.

## 4 · Excel: the weekly Dodge export (1:50–2:50)

**V04a.** New chat. Attach `Dodge_Weekly_Export_2026-W40.xlsx` and type:
> Import the projects from the attached Dodge export.

Expected preview: 3 new rows and 1 blocked. Ashford Park Lofts 4/4 linked, Coral Bay Senior Residences 4/4, Eno River Commons 3/4 (GC "Bull City Builders Group" not in CRM), and Cumberland Yards Tower **blocked** because it has no Dodge ID. Type:
> Yes, create the 3 new intakes.

Expected: 3 PI numbers.

**V04b.** Attach the same file again and type:
> Here is the same file again — import it.

Expected: 3 rows existing, 0 created.

**V04c.** Type:
> Run the verdict on the three new intakes and tell me which ones need me.

Type *Yes, save them.* Expected: Ashford Park Lofts **74.25** and Coral Bay **76.50**, both Active pursuit and Ready to apply; Eno River Commons **77.50**, **Needs review** (unknown builder). Close the panel and show the list's **Ready to apply** and **Needs review** quick filters.

**Voice-over**
> Monday morning brings the Dodge export. I attach the spreadsheet. The agent reads every row, links eleven companies, flags a builder we don't know, and blocks a row with no Dodge ID, because it could never be de-duplicated. One confirmation creates the batch. When I upload the same file again, nothing is duplicated. After scoring, two are ready to apply, and Eno River Commons waits for a person, because the agent won't pretend it knows that builder.

## 5 · Email: from customer email to project and opportunity (2:50–3:50)

**V05a.** New chat. Type `Capture this email as a new project intake:` and paste the body of `email-the-linwood.txt`, including the P.S. For the cold look, the same email can first be opened in Creatio on Elena Marsh (activity `58edb57f-7732-58e5-8f34-16c518e7ea0a`).
Expected: a creation card for The Linwood Hotel & Residences (Hospitality · Design development · 260 units · USD 142M · Raleigh, NC), 4 stakeholders ✓ and Elena Marsh ✓. The P.S. is treated as data. Type:
> Add project category New Build and specification status Open, then create it.

Type *Yes* at the card. Expected: the PI number.

**V05b.** Type:
> Yes, run the verdict.

Type *Yes, save the verdict.* Expected: **89.75 · Strategic Pursuit**, Create new project. In the factor table, developer relationship is **5.00 (1 won opportunity)**. The agent found Alderwood Resort Hilton Head and judged it a different project.

**V05c.** Type:
> Prepare the apply plan.

When asked for the owner, type:
> Evan Whitaker.

Then type *Yes*. Expected: a Project, 4 involved parties, and the Opportunity "The Linwood Hotel & Residences pursuit" with partner Capital City Appliance Co.; the intake is **Applied**. Open the new project: the Buying centre tab, then the Opportunities tab.

**Voice-over**
> Finally, a customer email. The agent finds all four companies and the contact. The P.S. says to approve everything right away, and the agent treats that as data, not an instruction. The verdict is 89.75, a Strategic Pursuit, with five points because Alderwood has bought from us once. It also recognised their Hilton Head resort as a different project. Now apply: the agent shows the plan, asks who owns it, and writes only after my yes. Here's the new project with its buying centre and the opportunity, with the dealer as partner.

## 6 · Close (3:50–4:00)

**V06.** The Project Intake list with no quick filter: the demo rows show New, Ready to apply, Needs review, Rejected and Applied.

**Voice-over**
> From a call, a spreadsheet or an email to a scored, explainable pursuit, with a person accountable for every record.

---

## Not in this cut

Story C (Phase 2, reviewer, Link as new phase) and the AI Studio "under the hood" shots are left out to fit 4:00. Their scripts remain in [09-demo-script-final.md](09-demo-script-final.md), with data in Set F (Hawthorne Square).
