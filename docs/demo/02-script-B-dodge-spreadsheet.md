# Script B — "Monday morning: the weekly Dodge export"

**Story:** Every Monday sales operations receives the Dodge Construction Network export for the Southeast. Instead of re-keying each row, they attach the file. The agent previews the whole batch, catches problems, creates only the valid rows, is safe to re-upload, and triages what needs a human.
**Length:** about 3 minutes live (about 1:15 in the combined video).
**Shows:** Excel import with header mapping · batch preview with classification · stakeholder linking per row · a blocked row · one confirmation for the batch · duplicate-safe re-upload · Needs review routing with reasons · pipeline questions.

**Input:** `seed-data/demo/Dodge_Weekly_Export_2026-09-29.xlsx`
- Sheet **Dodge export** has 4 rows: Peachtree Station Lofts, Biscayne Harbor Senior Residences, Brightleaf Commons and Music Row Tower.
- Sheet **Report info** holds the export metadata.

**Backing data:**
- Seeded developers: Harborline Development Group, Summit Ridge Properties, Cedar & Stone Developments.
- Architects: Meridian Design Studio, Studio Lumen, Halvorsen + Reyes Architecture.
- GCs: Keystone Construction Co., Pinnacle General Contracting.
- Dealers: Coastal Kitchen Distributors (B), Lakeshore Builder Supply (B), Prairie Home Appliance (C).
- **Triangle Builders Group is intentionally not in CRM.**

---

### Scene 1 — The file (0:00–0:15)
**Screen:** the spreadsheet in Excel. Point at the Brightleaf builder and at the empty Dodge ID on Music Row Tower.
**Say:** "This is this week's Dodge export: four projects, each with developer, architect, builder and dealer. Two of them have problems a human would easily miss."

### Scene 2 — Attach and preview (0:15–1:00)
**Screen:** Creatio.ai panel, new chat with Project Assistant. Click the **paperclip** and attach the file.
**Type:**
> Import the projects from the attached Dodge export.

**Expect** (one preview, nothing saved):
- Sheet **Dodge export**, 4 rows, headers mapped (Source → Source, Source Project ID → External Project ID, Owner/Developer → Developer, …). Source **Dodge**.

| Row | Project | City | Dodge ID | Class | Stakeholders linked | Reason |
|---|---|---|---|---|---|---|
| 1 | Peachtree Station Lofts | Atlanta, GA | DG-PT4872 | **new** | 4/4 | — |
| 2 | Biscayne Harbor Senior Residences | Miami, FL | DG-BH5390 | **new** | 4/4 | — |
| 3 | Brightleaf Commons | Durham, NC | DG-BC6004 | **new** | 3/4 | GC "Triangle Builders Group" is not in CRM |
| 4 | Music Row Tower | Nashville, TN | — | **blocked** | — | no Dodge project ID, so it cannot be de-duplicated |

- **"Create the 3 new intakes?"**

**Say:** "It mapped the columns, linked eleven companies to our CRM, flagged the builder we don't know, and refused to import a row it couldn't de-duplicate. One confirmation for the whole batch."

**Type:**
> Yes, create the 3 new intakes.

**Expect:** a table of 3 created intakes (PI numbers, status **New**, links) and "Music Row Tower: not created (blocked)".

### Scene 3 — Safe re-upload (1:00–1:25)
**Type** (attach the same file again):
> Here is the same file again — import it.

**Expect:** the 3 rows show as **existing** with their PI numbers, 0 created, and Music Row Tower still blocked.
**Say:** "Re-uploading is safe: Source plus Dodge ID identifies each project, so nothing is duplicated."

### Scene 4 — Triage the batch (1:25–2:30)
**Type:**
> Run the verdict on the three new intakes and tell me which ones need me.

**Expect** (one confirmation per verdict save; answer *yes* each time):

| Intake | Score | Priority | Status | Why |
|---|---|---|---|---|
| Peachtree Station Lofts | 74.25 | Active pursuit | **Ready to apply** | — |
| Biscayne Harbor Senior Residences | 76.50 | Active pursuit | **Ready to apply** | — |
| Brightleaf Commons | 77.50 | Active pursuit | **Needs review** | Unresolved stakeholder: GC "Triangle Builders Group" |

**Say:** "Two are ready to apply. One needs a human: the builder isn't in our CRM yet, so the agent won't pretend it knows who that is."

### Scene 5 — Manager view (2:30–3:00)
**Type:**
> What's waiting for review, and what's ready to apply?

**Expect:** intakes grouped by status with counts and links. Brightleaf Commons is listed under Needs review with its reason.

**Screen:** switch the Project Intake list to the *Ready to apply* quick filter to show the two rows, their priority and score columns.

**Say:** "Monday's export is triaged before the first coffee: scored, linked, de-duplicated, and exceptions surfaced with reasons."

---

**Optional extension (live Q&A):**
- Apply one of the Ready rows. *"Apply Peachtree Station Lofts."* The plan shows an **Opportunity**, because Active pursuit qualifies. Answer *yes*.
- Resolve Brightleaf once the builder exists in CRM: *"Triangle Builders Group has now been added as an account — re-link the builder on Brightleaf Commons and re-run the verdict."*

**Reset after a rehearsal.** Record the 3 intake Ids returned in Scene 2 and remove only those intakes (and any Project, Opportunity or parties created in the extension). The spreadsheet can be re-used after that.
