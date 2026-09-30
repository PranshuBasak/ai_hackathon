# 4-minute video: recording plan and voice-over

This is the 4:00 cut of [09-demo-script-final.md](09-demo-script-final.md) on the Set F data ([seed-data/demo-final](../../seed-data/demo-final/README.md)). The video is **screen only**. The voice-over below is for an AI voice and is timed at about 150 words a minute, 575 words in total.

Recording rule: record only while something is being typed, while the agent's answer appears, or while a screen is being explained. Every agent "thinking" wait is cut. Each clip is a separate file named `Vxx-*.webm`/`.mp4`. The editor places the clips on the timecodes below and trims each one to its slot.

## Clip list

| Clip | Slot | What is recorded | Needs AI credits |
|---|---|---|---|
| V01 | 0:00–0:18 | Elena Marsh's email "The Linwood – Raleigh – appliance package…" open in Creatio (P.S. visible) → project 1000000037 Alderwood Resort Hilton Head: Involved parties and the won Opportunity → the Creatio.ai panel with Project Assistant selected | No |
| V02 | 0:18–0:40 | Story A: paste the email → capture preview (4 stakeholders ✓, Elena linked, P.S. ignored) → "Add project category New Build and specification status Open, then create it." → *Yes* → PI number | Yes |
| V03 | 0:40–1:00 | "Yes, run the verdict." → *Yes, save the verdict.* → factor table: 89.75 Strategic Pursuit, developer relationship 5.00 | Yes |
| V04 | 1:00–1:25 | "Prepare the apply plan." → "Evan Whitaker." → plan → *Yes* → Applied. Then open the new Project (Involved parties) and the Opportunity (partner Capital City Appliance Co.) | Yes |
| V05 | 1:25–1:50 | Story D: type the Riverline lead → near-match preview (Kestrel → Studio Kestrel, Hale and Brandt → Hale & Brandt Construction, Piedmont Appliance → Piedmont Appliance Distributors) → "Yes, link all three…" → *Yes* → *Yes, save it.* → factor table: 95.50, developer relationship 10.00 | Yes |
| V06 | 1:50–2:08 | Story E: Copper Sage Townhomes → *Yes* → Data Incomplete / Needs review with reasons → "As reviewer: disqualify it…" → *Yes* → Rejected | Yes |
| V07 | 2:08–2:35 | Story B: attach `Dodge_Weekly_Export_2026-W40.xlsx` → preview (3 new, 1 blocked, 11 companies linked) → "Yes, create the 3 new intakes." → 3 PI numbers | Yes |
| V08 | 2:35–2:58 | Re-upload → 3 existing, 0 created. "Run the verdict on the three new intakes…" → *Yes, save them.* → 74.25 / 76.50 Ready to apply, 77.50 Needs review. Then the intake list: Ready to apply and Needs review quick filters | Yes |
| V09 | 2:58–3:20 | Story C: paste the meeting note → Phase 1 warning → "No — it's the next phase, create it." → "Run the verdict." → Link as new phase, 90.50, Needs review → *Yes, save it.* | Yes |
| V10 | 3:20–3:38 | "As reviewer: approve it as a new phase…" → "Evan Whitaker." → *Yes* → open the new project: Parent = Hawthorne Square Phase 1 | Yes |
| V11 | 3:38–3:54 | Settings tab (factors, rules, bands) → AI Studio Skills → Integrations (delete off) → Observability trace of the V04 apply run | No (the Observability shot needs V04 first) |
| V12 | 3:54–4:00 | Project Intake list showing New, Ready to apply, Needs review, Rejected and Applied | No (after V02–V10) |

## Voice-over (AI voice)

**V01 · 0:00–0:18**
> We sell kitchen and laundry appliances into hotels, apartments, senior living and student housing, and we win those deals years before a building opens. Leads arrive as emails, calls, meeting notes and weekly Dodge exports. Project Assistant turns each one into a qualified pursuit in a single conversation.

**V02 · 0:18–0:40**
> Here's a customer email. The agent finds the developer, architect, builder and dealer in our CRM and links the contact. The P.S. says to approve everything right away. The agent treats that as data, not an instruction. Nothing is saved until I confirm.

**V03 · 0:40–1:00**
> The verdict: 89.75, a Strategic Pursuit. Every point comes from scoring rules our sales team maintains in Creatio. That includes five points because this developer has already bought from us once.

**V04 · 1:00–1:25**
> Now apply. The agent shows the plan: a project, four involved parties and an opportunity with the dealer as partner. It asks who owns it. Only after my yes does it write. Here's the project with its buying centre, and the opportunity.

**V05 · 1:25–1:50**
> Next, a phone call, with company names as I remember them. "Kestrel" isn't an account; Studio Kestrel is. The agent proposes the matches but never links them silently. Riverline has won three packages with us, so the relationship factor doubles to ten, and the score reaches 95.5.

**V06 · 1:50–2:08**
> A second lead from the same call: townhomes in Nevada. No rule covers that type or region, so the agent won't guess a score. It hands the lead to a person. I disqualify it, and the reason is recorded.

**V07 · 2:08–2:35**
> Monday morning, the Dodge export. I attach the spreadsheet. The agent maps the columns, links eleven companies, flags a builder we don't know, and blocks a row with no Dodge ID because it could never be de-duplicated. One confirmation creates the batch.

**V08 · 2:35–2:58**
> I upload the same file again, and nothing is duplicated. After the verdicts, two intakes are ready to apply. Eno River Commons goes to review because its builder isn't in our CRM. The list shows what can move today and what needs a person.

**V09 · 2:58–3:20**
> Meeting notes from a call with Harlow. Before saving, the agent spots Hawthorne Square Phase 1, a project we won, and asks if this is the same one. It's the next phase. The verdict recommends linking it as a new phase, and policy sends every phase to a reviewer.

**V10 · 3:20–3:38**
> As reviewer, I approve. Phase 2 is created as a child of Phase 1, with a new opportunity, and my name is on the decision.

**V11 · 3:38–3:54**
> Under the hood: the scoring factors, rules and priority bands are ordinary Creatio lookups. In AI Studio, four custom skills, a knowledge source, the Business Studio integration with delete switched off, and a full trace of every write.

**V12 · 3:54–4:00**
> From any lead to a qualified, explainable pursuit, with a person accountable for every record.

## Recording checklist

1. AI credits available. Capture v4 is pinned. None of the Set F intake names exist yet (manifest `demoFinal.mustNotExistBeforeRecording`).
2. Browser at 1920×1080, zoom 110 %. Start a new chat for each story.
3. When the agent shows a Confirm/Discard card, type *Yes* in the chat instead of clicking Confirm.
4. After each agent clip, check the result with clio (PI numbers, scores, statuses) before recording the next clip. If a result differs, re-record that clip only.
