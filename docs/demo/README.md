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
| [06-video-run-of-show.md](06-video-run-of-show.md) | A cut of all three scripts into one video of under 5 minutes |

## Demo data (loaded 29 Sep 2026; each script uses different companies)

| Script | Input | Companies behind it | History already in CRM |
|---|---|---|---|
| A | `seed-data/demo/email-the-wren.txt` | Crescent Bay Hospitality Group (developer, alternative name "Crescent Bay"), Linden & Voss Architects, Ironbridge Construction, Carolina Kitchen & Appliance (dealer, tier A). Contacts: Marcus Delgado, Hannah Voss, Ray Whitfield | Project **1000000032 "Crescent Bay Resort Myrtle Beach"** (completed 2024) with a **Closed won** opportunity of USD 2.35M, which gives the developer a real relationship score |
| B | `seed-data/demo/Dodge_Weekly_Export_2026-09-29.xlsx` (sheet "Dodge export") | Harborline Development Group, Summit Ridge Properties, Cedar & Stone Developments, Meridian Design Studio, Studio Lumen, Halvorsen + Reyes Architecture, Keystone Construction Co., Pinnacle General Contracting, Coastal Kitchen Distributors, Lakeshore Builder Supply, Prairie Home Appliance. "Triangle Builders Group" is deliberately **not** in CRM | — |
| C | `seed-data/demo/meeting-note-tech-square-phase-2.txt` | Bellwether Residential (developer, alternative name "Bellwether"), Arbor & Finch Architects, Tidewater Builders, Blue Ridge Appliance Distributors (dealer, tier A). Contacts: Diane Okafor, Tom Brennan, Leah Chambers | Project **1000000033 "Tech Square Commons Phase 1"** (Atlanta, under construction, 520 beds) with 4 involved parties and a **Closed won** opportunity of USD 1.68M |

All demo records are listed in `seed-data/fixture-manifest.json` under `demoScripts` (plus `stakeholderFixtures` and `testSet2`). They use deterministic Ids and can be removed in reverse dependency order.

## Before you record

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

The scores follow from the configured factors (Settings tab on the Project Intake list): value 20, units 15, type 15, stage 15, architect 10, dealer tier 10, developer relationship 10, region 5.
