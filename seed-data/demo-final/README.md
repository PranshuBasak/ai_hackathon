# Set F — final demo data

This is the only data set used by [docs/demo/09-demo-script-final.md](../../docs/demo/09-demo-script-final.md). It was seeded into `ai_hackathon` on 29 Sep 2026 with clio (`odata-create` and `odata-update`) and read back with `execute-esq`. No record from the earlier sets (A–E, 27 Sep baseline) is reused. Ids are uuid5, so `build_demo_final.py` regenerates the same values.

| File | What it is |
|---|---|
| `demo-final-data-2026-09-29.json` | Every seeded row (accounts, contacts, projects, opportunities, parties, activities) and the expected score for each story |
| `build_demo_final.py` | Generates the JSON, the source documents and the spreadsheet |
| `email-the-linwood.txt` | Story A email (also in Creatio as an incoming Email activity on Elena Marsh) |
| `call-notes-riverline.txt` | Story D/E: the two leads to type, word for word (also a Call activity on Rhea Donovan) |
| `Dodge_Weekly_Export_2026-W40.xlsx` | Story B spreadsheet: 3 importable rows and 1 blocked row |
| `meeting-note-hawthorne-square-phase-2.txt` | Story C meeting note (also a Call activity on Rebecca Lindqvist) |

## What is in CRM

- **Owner and reviewer for the demo:** Evan Whitaker, an Employee contact of "Our company".
- **Story A:** Alderwood Hospitality Group (alternative name "Alderwood"), Arden & Pike Architects, Northfield Construction and Capital City Appliance Co. (tier A). Contact Elena Marsh. Project 1000000037 Alderwood Resort Hilton Head, with 4 parties and 1 Closed won opportunity.
- **Story D/E:** Riverline Communities (alternative name "Riverline", 3 Closed won opportunities), Studio Kestrel, Hale & Brandt Construction and Piedmont Appliance Distributors (tier A). Contact Rhea Donovan. Also Canyon Ridge Builders, with contact Luis Ortega.
- **Story B:** Ashgrove, Mosaic, Cardinal Point, Chattahoochee (B); Seagrass, Studio Halcyon, Tarpon Coast, Gulfstream (B); Longleaf, Pruitt + Vale, Tar Heel Appliance (C); Riverbend Urban Ventures. Contacts Fletcher Wynn, Nadia Kerr and Grant Holloway. **Bull City Builders Group is intentionally not in CRM.**
- **Story C:** Harlow Residential (alternative name "Harlow"), Whitfield & Crane Architects, Stonebridge Builders and Magnolia Appliance Distributors (tier A). Contact Rebecca Lindqvist. Project 1000000038 Hawthorne Square Phase 1 (under construction), with 4 parties and 1 Closed won opportunity.

## Expected results (from the live scoring rules)

| Intake | Expected |
|---|---|
| The Linwood Hotel & Residences | 89.75 Strategic Pursuit, Ready to apply (developer relationship 1 win = 5.00) |
| Westside Yards Student Residences | 95.50 Strategic Pursuit, Ready to apply (3 wins = 10.00) |
| Copper Sage Townhomes | Data Incomplete, Needs review (no rule for Townhomes or NV) → disqualified |
| Ashford Park Lofts | 74.25 Active pursuit, Ready to apply |
| Coral Bay Senior Residences | 76.50 Active pursuit, Ready to apply |
| Eno River Commons | 77.50 Active pursuit, Needs review (GC not in CRM) |
| Cumberland Yards Tower | blocked (no Dodge ID) |
| Hawthorne Square Phase 2 | 90.50 Strategic Pursuit, Needs review (phase) → Link as new phase |

The Dodge IDs (`DG-AP7315`, `DG-CB2946`, `DG-ER8051`) deliberately avoid long runs of digits. The AI Studio PII policy masks such IDs as phone numbers, and the agent then blocks every row (found in the 29 Sep rehearsal).

Record Ids and the reset order are in `seed-data/fixture-manifest.json` → `demoFinal`.
