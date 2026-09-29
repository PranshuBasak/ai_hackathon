# Unified agent: build status

## 29 Sep 2026 — skill drafts built in AI Studio (browser UI), not published

| Skill | AI Studio id | Version | Checks | Source |
|---|---|---|---|---|
| project-intake-lifecycle | ca041cfb-0996-44cf-924a-f92737eb7a28 | v1 draft | passed | skills/project-intake-lifecycle |
| project-intake-capture | 1f2de963-1f77-46e4-b65d-0dc944c80e51 | v1 draft | passed | skills/project-intake-capture |
| project-intake-verdict | c998cbed-fefb-41c5-8e5f-fe7beb72821e | **v3 draft** (v2 still published and pinned by Verdict Assistant) | passed | skills/project-intake-verdict-v3 (SKILL.md + references/runtime-contract.md; other v2 files unchanged) |
| project-intake-apply | 5db8d782-ef60-4c68-9be3-ac011f1a4951 | v1 draft | passed | skills/project-intake-apply (+ references/apply-contract.md) |

All four are Enterprise, support the SDK, Builder and Flow modes, and have their required tools declared.

How they were built: New → Enterprise skill; name and description typed in; body pasted into the Monaco editor (a single edit, then autosave); reference file added through the folder's "Add file" file input. Every file was read back through AI Studio's GET API and matches the repo source (except for trimmed trailing newlines).

Notes:
- The platform rejects saving a SKILL.md whose markdown link points at a file that does not exist yet (409 VALIDATION_ERROR). Add the reference file first.
- "Add file" opens an OS file picker, which the browser pane cannot use. The file was supplied to the page's file input directly.
- Chat entries without a provider use Source = **Manual** (owner confirmed on 29 Sep 2026). There is no "Chat" source value.

Next steps, pending the owner's go-ahead: publish the four skills → create the Enterprise agent "Project Intake Assistant" (system prompt in agent-system-prompt.md) → attach skills and tools → Sandbox tests → deploy.

## 29 Sep 2026 — skills published by the owner, agent created (draft, not published)

The owner reviewed and published lifecycle v1, capture v1, verdict v3 and apply v1.

**Agent: Project Assistant** (Enterprise, id `d1ff97d6-d5fd-454b-ae9a-21b0a878cd8a`, code `project-assistant`). Built in the AI Studio UI and read back through the AI Studio GET API.

- **Channel**: Creatio.ai Twin. The shared Twin channel was reused as-is.
- **Model**: gpt-5.6-sol-creatio (the same as the working agents; needed for code execution).
- **System prompt**: 7,170 characters, from `agent-system-prompt.md`. Welcome title "Project Assistant", with a welcome message listing example requests.
- **Built-in model tools**: web search, code execution.
- **Other tools (16)**:
  - cards: present_confirmation, present_data_table, present_entity_card, present_entity_comparison, present_outcome, present_open_record_card, present_lookup_card, present_form, present_decision_card, present_location_map
  - execute_skill_script
  - platform date tools: platform_get_current_datetime, platform_parse_datetime, platform_diff_datetime
  - host navigation: platform_navigate_host, platform_read_host
- **Integration**: Creatio Business Studio (MCP), integration credentials. 16 of 17 CRM tools enabled; **`creatio_delete_record` is deliberately off**.
- **Skills (16, all enabled)**:
  - ours: project-intake-lifecycle v1, project-intake-capture v1, project-intake-verdict v3, project-intake-apply v1
  - vendor: query-creatio-records v5, creatio-explore-data-structure v4, creatio-create-record v5, creatio-update-record v5, creatio-records-search v2, creatio-analyze-record v2, datetime-interpretation v1, creatio-datetime-filtering v1, creatio-reporting-periods v1, creatio-stage-transitions v1, creatio-folder-operations v1, ai-studio-host-navigation v1
- **Knowledge**: the new Enterprise source **Project Assistant Reference** (`d9a7d92b-f8f1-4320-9279-0b727efe772a`, Serving, citations on), from `knowledge/project-assistant-reference.md`.

Deliberately not attached:
- The AI Studio admin vendor skills (agent composer, refiner, inspector, deployment manager, knowledge manager): they need platform admin tools the agent does not have, and they would let it change AI Studio itself.
- Scheduled Tasks: its trigger tools are not offered on this tenant.
- artifact-reading.
- The old `project-intake` v9 skill (replaced by capture) and the guardrails skill.
- The old knowledge sources (Verdict Reference describes JSON scoring; Capture Context is Personal and capture-only).

Status: draft v1, nothing published, `needsDeploy: true`. The old agents are unchanged. Next: owner publishes (or asks to) → Sandbox tests → deploy.

## 29 Sep 2026 — in-bundle chat test (PI-000034) and fixes (drafts, not published)

The owner published the agent (v1). Test record: intake **PI-000034 "Larkspur Commons"** (`c67db802-8a24-44f7-86a9-d4e0ac018bf5`), captured by chat, Source Manual.

| # | Test | Result (verified with clio read-back and Observability) |
|---|---|---|
| 1 | Capture by chat | ✅ Created as New, and no Lead was created. ⚠ The PII policy masked the contact email, and the literal `[EMAIL]` was stored in UsrKeyContactEmail and UsrRawText. ⚠ The stakeholder account lookups, UsrProjectType and UsrProjectCountry were left empty (text only). |
| 2 | Status / lifecycle | ✅ |
| 3 | Verdict | ✅ Saved as Ready to apply, 84.75, Strategic Pursuit, Create new project, with UsrAnalysisDate `2026-09-28T20:38:08Z`. The factor audit is in UsrRecommendationDetails. |
| 4 | Apply | ✅ The plan was shown and nothing was written before "yes". ❌ After "yes", `creatio_validate_record` on Project failed with "Column SupplierPrimaryImage value cannot be obtained because it has not been loaded" (run `fc09afb0-2da0-4b02-adc4-93699de56e10`). The agent stopped correctly and **nothing was written**: no Project or Opportunity for Larkspur, and the intake is unchanged. |

**Root cause:** the agent's tools run as the contact **"Creatio.ai Studio"** (`72c4fda6-bf77-4e69-b2a5-ff740524ce6b`), which has no Account.
- Project.Supplier defaults to "Account of current user", which comes out empty, and validation then fails.
- The Owner and the reviewer would also resolve to the service contact.

**Owner decisions:**
- Supplier = the Account "Our company" (`e308b781-3c5b-4ecb-89ef-5c1ed4da488e`), as used on all 25 seeded Projects.
- Owner and reviewer = a person confirmed by name in the apply plan.

**Owner request (same session):** load example Accounts and Contacts, and automatically attach stakeholder names to the intake and carry them to the Project and Opportunity.

Fixture load, verified with clio: `seed-data/stakeholder-fixtures-2026-09-29.json`, listed in `seed-data/fixture-manifest.json` → `stakeholderFixtures`.
- Accounts:
  - Granite Peak Cabinetry, Brightwater Plumbing Supply and Voltline Electrical Wholesale (Supplier)
  - Harbor Appliance Center (Dealer, tier A)
- 12 Contacts, one each for:
  - the 3 contractors and the 3 partners
  - Everline Appliances
  - the 3 new suppliers and Harbor Appliance Center
  - **Dana Reeves at Bluewater Living Co.** (PI-000034's key contact)

Skill drafts, all "checks passed", **not published**:

| Skill | Draft | Changes |
|---|---|---|
| project-intake-apply | v2 | Supplier = "Our company"; Responsible person (owner and reviewer) confirmed in the plan; stakeholders from the intake lookups or verdict accountMatches; Project.Account/Contact; one UsrADProjectParty row per resolved role, with UsrSourceIntake; Opportunity Account/Contact/Partner (dealer); fills empty intake account lookups on Applied |
| project-intake-capture | v2 | New §E: links stakeholder names to existing Accounts on an exact, unique, type-correct match; UsrProjectType/UsrProjectCountry from text; never writes masking tokens such as `[EMAIL]`; the preview shows the link state |
| project-intake-verdict | v4 | runtime-contract only: an intake account lookup that is already set counts as resolved |

Local sources updated but not yet in AI Studio:
- agent-system-prompt.md: the parties write rule, the linking rule, and rule 7 on the service contact
- knowledge/project-assistant-reference.md: v2

Next steps:
1. The owner publishes apply v2, capture v2 and verdict v4.
2. I create the agent v2 draft: re-pin those versions, and update the prompt and knowledge.
3. The owner publishes the agent.
4. Re-test apply on PI-000034. Expected: 1 Project, 4 parties, 1 Opportunity, intake Applied with its links and account lookups filled. Then repeat apply, which must create nothing.

### Update — owner published the skills; knowledge and prompt updated

- The owner published apply v2, capture v2 and verdict v4 and pinned them on the agent v2 draft. Checked via the API: lifecycle v1, capture v2, verdict v4, apply v2.
- Knowledge source **Project Assistant Reference** (`d9a7d92b…`):
  - uploaded v2 of `project-assistant-reference.md` (2:46 AM);
  - removed the v1 file (1:29 AM) so retrieval does not return both versions;
  - re-indexed. Now 1 file, extraction Ready, source Serving.
- Agent v2 draft system prompt replaced with `agent-system-prompt.md` (7,738 characters, adding the involved-parties write rule, the link-only-existing rule and rule 7 on the service contact). The API shows `inlinePrompt` saved.
- The agent v2 draft is **not published**. It is waiting for the owner.

## 29 Sep 2026 — agent v2 retest (owner published and deployed v2)

The fresh chat used Project Assistant v2 (Sandbox lane, config v2). Everything below was checked with clio read-backs; Observability shows the 2:57–3:05 AM runs completed with no tool errors, and apply took 2.6 minutes.

| # | Test | Result |
|---|---|---|
| 4 | Apply PI-000034 | ✅ The plan showed type, country, the 4 stakeholders, key contact Dana Reeves and Supplier Our company, and asked for the owner and reviewer. The owner was given as the "Qnovate" contact. **Nothing was written before "yes"** (verified). After "yes", everything below was created and linked. |
| 5 | Repeat apply | ✅ It refused and reported the existing links. Counts are unchanged (1 Project, 1 Opportunity, 4 parties) and the intake's ModifiedOn is unchanged. |

Records created (test data; clean up in this order: parties → Opportunity link on Project → Opportunity → Project; then reset the intake links only if the owner wants it):
- **Project** `f91c7b53-d3f8-4486-94e7-167f5bc706f7` (Project ID 1000000028):
  - Owner Qnovate contact `76929f8c…`, Supplier Our company, Account Bluewater Living Co., Contact Dana Reeves.
  - Type Senior Living, stage Design development, city Charlotte, country United States, value 120,000,000, 240 units.
  - Source Manual, Strategic Pursuit 84.75, linked to the Opportunity. CreatedBy = Creatio.ai Studio.
- **Opportunity** `eb598981-10ae-48fe-9082-53e73fff7f97` "Larkspur Commons pursuit":
  - Stage Qualification, owner Qnovate.
  - Account Bluewater, Contact Dana Reeves, Partner Metro Appliance Supply.
  - UsrADProject = the Project.
- **UsrADProjectParty**, all with UsrSourceIntake = PI-000034:
  - `b916c294-a4f9-4a2a-a3aa-c39750d9374c` Developer/Owner, primary, contact Dana Reeves
  - `aa074640-5020-4695-82b1-57aea4162466` Architect/Specifier
  - `fa64dc32-48d6-4870-a329-566e4773dc55` General contractor/Builder
  - `5177998e-04fc-4f9d-97d4-32a92a725878` Dealer
- **Intake** `c67db802-8a24-44f7-86a9-d4e0ac018bf5` (PI-000034):
  - Applied; Created Project and Created Opportunity set.
  - All 4 account lookups filled; Reviewer = Qnovate contact; no error.

Open items:
- PI-000034 still holds `[EMAIL]` in UsrKeyContactEmail and UsrRawText from the v1 capture. Capture v2 prevents this for new records but does not repair existing ones.
- Not yet retested: capture v2 on a new chat intake with automatic stakeholder linking, the Needs review, Duplicate and Reject paths, and Excel import.

## 29 Sep 2026 — Key contact link, clickable linked records, outcome flags (drafts)

Platform changes (clio, in UsrMieleADProjects; backups in `backups/key-contact-2026-09-29/`):
- **Column** `UsrLinkedContact` (Lookup → Contact, title "Key contact") added to UsrADProjectIntelligence. `UsrKeyContact` was refused because it collides with `UsrKeyContactName`. No column was removed.
- **Entity business rule** `BusinessRule_5d8c9e5`: when Key contact is filled, set UsrKeyContactEmail = UsrLinkedContact.Email and UsrKeyContactName = UsrLinkedContact.Name.
  - Measured: the rule runs **on the page**, including when the page is opened or refreshed. It does **not** run on an API save.
  - The owner decided against a server-side process: a page refresh fills the fields.
- **Form page** `UsrADProjectIntelligence_FormPage` (append; 106 operations; nothing dropped):
  - Key contact dropdown in the Key contact panel (row 2, column 2).
  - The four Linked records lookups are now `showValueAsLink: true` and editable, rendering as links.
- **PI-000034 repaired**: Key contact = Dana Reeves, and email `[EMAIL]` → fixture16@example.com, set by the page rule on save. Verified with clio.

Skill drafts, all "checks passed", **not published**:
- **capture v3**: links the key contact (UsrLinkedContact) and adds the optional fields (category, specification status, package, region and others). It asks once about the empty optional fields and never writes masked tokens.
- **verdict v5**: sets the outcome flags UsrCanCreateProject/UsrCanCreateOpportunity/UsrCanUpdateOpportunity by rule, and UsrBuyingCentreHealth as linked slots / 5 × 100. Classification, service risk and margin are set only when stated. Probability of conversion is never written.
- **apply v3**: UsrLinkedContact first; carries the optional fields and indicators to the Project; clears the Can* flags on Applied or Rejected.

Test set 2 loaded (`seed-data/test-set-2-2026-09-29.json`, in the manifest as `testSet2`):
- Solstice Harbor Partners (Developer, alternative name "SHP Living")
- Northlight Atelier (Architect)
- Cobalt Ridge Builders (Contractor)
- Summitline Appliance Group (Dealer B)
- Contacts: Priya Natarajan, Owen Castillo, Tessa Morgan

Next: the owner publishes the 3 drafts and pins them on the agent; then an end-to-end chat test with a new intake using the developer's alternative name "SHP Living".

## 29 Sep 2026 — end-to-end test with test set 2 (agent v3: capture v3, verdict v5, apply v3)

New intake **PI-000037 "Marigold Point"** (`fa139452-d18b-47df-b2c7-887c59ffe787`), captured by chat. Everything below was verified with clio.

| # | Test | Result |
|---|---|---|
| 1 | Capture by chat, developer named only by its alternative name "SHP Living" | ✅ Linked to **Solstice Harbor Partners** through AlternativeName. Architect, builder and dealer (new accounts) linked. Project type Hospitality and Country United States filled as lookups. The agent listed the empty optional details and asked once; the user's answer added category New Build and specification status Open. The PII policy masked the contact **name** this time. Asked to "link the existing contact who is Head of development at the developer company", the agent linked **Priya Natarajan** (UsrLinkedContact). Nothing was written before "yes". The reply included the record link. No Lead was created. |
| 2 | Verdict | ✅ Saved: Ready to apply, **82.00** (hand calculation: 17+15+15+12+10+8+0+5), Strategic Pursuit, Create new project. UsrCanCreateProject=true, UsrCanCreateOpportunity=true, UsrCanUpdateOpportunity=false. UsrBuyingCentreHealth=100. Classification **Premium** (explicitly stated in the source). Service risk and margin left empty and reported as not provided. Full UTC analysis timestamp. |
| 3 | Apply | ⛔ **Blocked**: after the verdict save, the chat showed "AI capacity used up — your organization has used all of its available AI capacity". The verdict write had already completed. Apply has not been run: no Project or Opportunity exists for Marigold Point. |

Notes:
- The PII policy masks inconsistently: on PI-000034 it masked the email, on PI-000037 the name. With the contact linked, the page business rule shows the CRM name and email (fixture28@example.com) whenever the page is opened. The raw source email that capture stored stays in UsrRawText.
- AI credits: the earlier apply run used about 160 credits. A full capture → verdict → apply chain costs several hundred.

Next: once capacity is restored, run apply on PI-000037 (expect 1 Project, 4 parties, 1 Opportunity with Contact Priya and Partner Summitline, and the intake Applied with its Can* flags false), then repeat apply.
