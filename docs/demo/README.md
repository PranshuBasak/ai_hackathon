# Project Assistant — demo pack

**Hackathon category:** CRM Agent. It works on CRM data inside Creatio, updates records, surfaces insight and drives the process. It carries a strong industry angle: building-products manufacturing and A&D (architecture and design) project sales.

**Agent:** *Project Assistant* (Enterprise, Creatio AI Studio). The agent id is `d1ff97d6-d5fd-454b-ae9a-21b0a878cd8a`, and it is deployed to 189543-crm-bundle.

| File | What it is |
|---|---|
| [00-submission.md](00-submission.md) | The written description for the submission: the problem, what the agent does, how it works, the Creatio features used, and what's next |
| [01-script-A-email-to-pursuit.md](01-script-A-email-to-pursuit.md) | **Script A**: a customer email becomes a qualified Strategic Pursuit with a Project and an Opportunity |
| [02-script-B-dodge-spreadsheet.md](02-script-B-dodge-spreadsheet.md) | **Script B**: a weekly Dodge spreadsheet is triaged into intakes, with duplicate-safe re-upload and review routing |
| [03-script-C-phase-2-reviewer.md](03-script-C-phase-2-reviewer.md) | **Script C**: Phase 2 of an existing project goes through a reviewer decision and becomes a child project |
| [04-live-examples.md](04-live-examples.md) | Extra prompts for live Q&A: status, pipeline questions, corrections, rejection, guardrails |
| [05-agent-capabilities.md](05-agent-capabilities.md) | Detailed reference: every step and skill the agent can perform, with the records it reads and writes |
| [06-video-run-of-show.md](06-video-run-of-show.md) | A cut of the scripts into one video of under 5 minutes |
| [07-script-D-guided-assistant.md](07-script-D-guided-assistant.md) | **Script D**: the assistant guides a rep. It asks for missing facts, proposes **near-match** companies, qualifies and explains the score, converts one lead and **disqualifies** another |
| [08-script-E-full-demo-run.md](08-script-E-full-demo-run.md) | **Script E**: the full end-to-end demo run, word for word (about 12 minutes live), from the first "hi" to the manager wrap-up and the look under the hood |
| **[FINAL-demo-script.md](FINAL-demo-script.md)** | **The script to record (4:00)**: workspace → scoring → chat → Excel → email, on Set F, with exact prompts, expected answers, clip list and AI voice-over |
| [09-demo-script-final.md](09-demo-script-final.md) | **Final video script** (4:58): Stories A, D/E, B and C cut to the judging criteria, word for word, with a judge map, lower thirds, pre-flight, editing notes and recovery lines. Uses only **Set F** ([seed-data/demo-final](../../seed-data/demo-final/README.md)), seeded 29 Sep 2026; the data table below belongs to scripts 01–08 |
| [10-submission-form.md](10-submission-form.md) | Ready-to-paste answers for every field of the submission form, plus how to create the judge user |

## Demo data (loaded 29 Sep 2026; each script uses different companies)

| Script | Input | Companies behind it | History already in CRM |
|---|---|---|---|
| A | `seed-data/demo/email-the-wren.txt` | Crescent Bay Hospitality Group (developer, alternative name "Crescent Bay"), Linden & Voss Architects, Ironbridge Construction, Carolina Kitchen & Appliance (dealer, tier A). Contacts: Marcus Delgado, Hannah Voss, Ray Whitfield | Project **1000000032 "Crescent Bay Resort Myrtle Beach"** (completed 2024) with a **Closed won** opportunity of USD 2.35M, which gives the developer a real relationship score |
| B | `seed-data/demo/Dodge_Weekly_Export_2026-09-29.xlsx` (sheet "Dodge export") | Harborline Development Group, Summit Ridge Properties, Cedar & Stone Developments, Meridian Design Studio, Studio Lumen, Halvorsen + Reyes Architecture, Keystone Construction Co., Pinnacle General Contracting, Coastal Kitchen Distributors, Lakeshore Builder Supply, Prairie Home Appliance. "Triangle Builders Group" is deliberately **not** in CRM | — |
| C | `seed-data/demo/meeting-note-tech-square-phase-2.txt` | Bellwether Residential (developer, alternative name "Bellwether"), Arbor & Finch Architects, Tidewater Builders, Blue Ridge Appliance Distributors (dealer, tier A). Contacts: Diane Okafor, Tom Brennan, Leah Chambers | Project **1000000033 "Tech Square Commons Phase 1"** (Atlanta, under construction, 520 beds) with 4 involved parties and a **Closed won** opportunity of USD 1.68M |
| D | typed in chat (see the script) | Oakhurst Senior Living LLC (said as "Oakhurst Living"), Kline & Hart Architects ("Kline Hart"), Granitefield Builders, Sunbelt Appliance Supply Co. ("Sunbelt Appliance", tier A), contact Nina Patel. Pacific Crest Homes (CA) + Ben Carter for the disqualified lead | — (new relationship: 0 won) |
| E | typed in chat (see the script) | Northbeam Communities (alternative name "Northbeam"), Studio Arcadia ("Arcadia"), Keel & Stone Construction ("Keel and Stone"), Peach State Appliance Distributors ("Peach State Appliance", tier A), contacts Grace Liu, Omar Haddad, Rachel Kim. Sierra Pines Builders (NV) + Dylan Brooks for the disqualified lead | **3 Closed won** Northbeam opportunities (2022, 2023, 2025), so the relationship factor is at its maximum |

All demo records are listed in `seed-data/fixture-manifest.json` under `demoScripts` and `demoScriptsDE` (plus `stakeholderFixtures` and `testSet2`). They use deterministic Ids and can be removed in reverse dependency order.

## Before you record

0. **Agent version.** Scripts D and E rely on near-match stakeholder proposals (capture skill **v4**). Publish capture v4 and pin it on Project Assistant before rehearsing them.
1. **AI capacity.** Each agent turn uses AI Studio credits (about 150–200 for a full apply). Make sure the organization's AI capacity is topped up, and do a full dry run of each script the day before.
2. Open the bundle at **Project Intake** and open the Creatio.ai panel. Start a **new chat** and pick **Project Assistant**.
3. **List view.** The Project Intake list also holds older test intakes. Before recording, filter the list (for example by *Received on = today*, or the *New* / *Ready to apply* quick filters), or save a list folder "This week", so the screen shows only the demo records.
4. Keep the input files open in a text editor, and keep the spreadsheet in a folder you can reach from the attach dialog.
5. Keep a second browser tab on **AI Studio → Observability** to show the run trace (tool calls, duration) in the architecture shot.
6. If a demo record already exists from a rehearsal, use the reset notes at the end of each script. Never delete other records.

## Expected results (computed from the live scoring rules)

| Script | Project | Score | Priority | Action | Status after the verdict |
|---|---|---|---|---|---|
| A | The Wren Hotel & Residences | **89.75** | Strategic Pursuit | Create new project | Ready to apply |
| B | Peachtree Station Lofts | **74.25** | Active pursuit | Create new project | Ready to apply |
| B | Biscayne Harbor Senior Residences | **76.50** | Active pursuit | Create new project | Ready to apply |
| B | Brightleaf Commons | 77.50 | Active pursuit | — | **Needs review**: GC "Triangle Builders Group" is not in CRM |
| B | Music Row Tower | — | — | — | **Not created**: the row has no Dodge project ID |
| C | Tech Square Commons Phase 2 | **90.50** | Strategic Pursuit | Link as new phase | **Needs review**: a phase of an existing project always gets a human decision |
| D | Bayshore Terrace Senior Living | **84.75** | Strategic Pursuit | Create new project | Ready to apply → converted |
| D | Cypress Lane Kitchen Remodel | **11.50** | Low priority | Create new project | Ready to apply → **disqualified (Rejected)** |
| E | Midtown Crossing Student Residences | **95.50** | Strategic Pursuit | Create new project | Ready to apply → converted |
| E | Desert Bloom Townhomes | — | Data Incomplete | — | **Needs review** (type/region outside the rules) → **disqualified (Rejected)** |

The scores follow from the configured factors (Settings tab on the Project Intake list): value 20, units 15, type 15, stage 15, architect 10, dealer tier 10, developer relationship 10, region 5.
