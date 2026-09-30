# Rehearsal transcripts — 29 Sep 2026

There are **no video or screen recordings** of these tests. The browser used for testing cannot record. These files are the text of each chat, exported from the Creatio.ai panel's conversation history (bundle 189543-crm-bundle, agent **Project Assistant**). Every turn is copied verbatim. When the panel rendered the same confirmation card twice, the repeat is replaced with a note. Timestamps are local panel times.

The full traces (every tool call, with inputs, outputs and policy decisions) are in **AI Studio → Observability**, filtered on Project Assistant, 29 Sep 2026, 21:31–23:21.

| # | File | Who ran it | Story | Outcome |
|---|---|---|---|---|
| 1 | [01-wren-email-capture-verdict.md](01-wren-email-capture-verdict.md) | Owner | A: email capture, verdict, apply plan | PI-000040 created, 89.75 Strategic Pursuit; the apply plan was prepared but not executed |
| 2 | [02-excel-import-blocked-pii.md](02-excel-import-blocked-pii.md) | Owner (3 chats) | B: Dodge spreadsheet | Every row blocked: the PII policy masked the Dodge IDs as phone numbers |
| 3 | [03-excel-import-after-fix.md](03-excel-import-after-fix.md) | Claude | B: spreadsheet after the ID fix | 3 created, 1 blocked; re-upload created nothing; verdicts 74.25 / 76.50 / 77.50 |
| 4 | [04-wren-apply.md](04-wren-apply.md) | Claude | A: apply | Project 1000000036, Opportunity and 4 parties; "Me — Qnovate." was not resolved |
| 5 | [05-near-match-and-disqualify.md](05-near-match-and-disqualify.md) | Claude | D/E: phone call | PI-000050 95.50 with near matches confirmed; PI-000052 created, then AI credits ran out |

These runs used the **old** demo data. The final script now uses Set F (`seed-data/demo-final/`). The rehearsal records are listed in `seed-data/fixture-manifest.json` → `rehearsalRun20260929`.
