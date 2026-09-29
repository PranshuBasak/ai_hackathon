# Project Assistant — from project lead to qualified pursuit, inside Creatio

**Category:** CRM Agent · **Built on:** Creatio AI Studio + Creatio CRM (Freedom UI) · **Environment:** 189543-crm-bundle

## The problem

A building-products manufacturer (kitchen and laundry appliances for multifamily, hospitality, senior-living and student-housing projects) wins business years before a building opens. The sales team hears about projects from many sources:
- data providers (Dodge, ConstructConnect, ConstructionPoints, tender portals);
- weekly spreadsheets;
- customer emails, calls and meeting notes.

Today every lead is handled by hand:
- re-typed into CRM;
- checked against existing projects (is it new, a duplicate, or phase 2 of something we already track?);
- matched to the right developer, architect, builder and dealer;
- judged on whether it is worth pursuing;
- and only then turned into a Project and an Opportunity.

That work is slow and inconsistent, and it is often skipped. The result is duplicate projects, missing stakeholders, good leads found too late and no audit trail of why a project was pursued.

## What the agent does

**Project Assistant** is one Creatio AI Studio agent that takes a construction project from the first mention to a qualified CRM Project and Opportunity, stage by stage, with a human confirming every write.

1. **Capture.** Chat, a pasted email or meeting note, or an uploaded Excel/CSV provider export becomes a structured **Project Intake** record.
   - Stakeholder names are linked to existing CRM Accounts, including by alternative name (for example "SHP Living" → Solstice Harbor Partners).
   - The key contact is linked to the CRM Contact.
   - Project type and country are matched to CRM lookups.
   - Duplicates are blocked by Source + provider project ID, so re-uploading the same file creates nothing.
2. **Verdict.** For each intake the agent:
   - searches CRM for an existing or related project (new, duplicate, update or new phase);
   - computes a **deterministic qualification score** from scoring rules that administrators maintain in Creatio;
   - classifies the priority (Strategic Pursuit, Active pursuit, Monitor, Low);
   - measures **buying-centre health** (how many of developer, architect, builder, dealer and contact are known in CRM);
   - sets outcome flags (can create project, can create opportunity, can update opportunity);
   - lists what is missing, and writes a JSON audit trail of every factor and rule used.
3. **Guide.** It explains where each intake stands (New → Needs review → Ready to apply → Applied or Rejected) and offers the single next step. It answers pipeline questions such as "what is waiting for review?".
4. **Apply.** Only after a **human "yes" to a written plan**, it:
   - creates the **Project**, with record type, owner, supplier, account, contact, location, value, units and qualification;
   - adds the **involved parties** (developer, architect, builder, dealer with roles);
   - creates an **Opportunity** when the priority justifies it, with account, contact, dealer as partner, and linked to the project;
   - or links a **new phase** to its parent project;
   - then writes everything back to the intake (links, reviewer, status Applied).

   It never deletes, never invents data, and never applies the same intake twice.

**The result for the user:** an email or a spreadsheet row becomes a scored, de-duplicated, stakeholder-linked Project and Opportunity in about a minute of conversation. The score is consistent and explainable, and a person stays accountable for every record created.

## How it works

```
User (Creatio.ai panel, Project Intake list)
  └─ Project Assistant (Enterprise prompt agent, AI Studio)
       ├─ Skills (4 custom + vendor skills)
       │    ├─ project-intake-lifecycle  – router: identifies the intake, explains the stage, hands off
       │    ├─ project-intake-capture    – chat/email/Excel → Project Intake; stakeholder & lookup linking; duplicates
       │    ├─ project-intake-verdict    – matching, deterministic scoring from CRM lookups, review rules, audit JSON
       │    └─ project-intake-apply      – plan → human "yes" → Project, parties, Opportunity, intake write-back
       ├─ Knowledge source "Project Assistant Reference" (RAG, citations on)
       ├─ Creatio Business Studio MCP integration (CRM tools, delete disabled)
       ├─ Code execution (Excel parsing, score arithmetic)
       └─ Present-* cards, date tools, host navigation
Creatio CRM (Freedom UI)
  ├─ Project Intake object + list/form pages (Stakeholders, AI verdict tabs, linked records)
  ├─ Scoring configuration as lookups: Intake scoring factor / rule / priority band (Settings tab)
  ├─ System settings: auto-apply and review thresholds
  ├─ Entity business rule: Key contact fills contact name and email from the CRM Contact
  └─ Project, Opportunity, A&D Involved Party, Account, Contact
```

Key design choices:
- **One agent, four skills.** Each skill owns exactly one kind of write. The system prompt routes intent to the right skill and enforces the hard rules.
- **Configuration, not prompt text.** Scoring weights, rule bands, value lists and priority thresholds live in Creatio lookups with mini pages. Administrators tune them without touching the agent, and the agent must read them live.
- **Human in the loop for every write.** Validate first, show a plain-language plan, write only after an explicit "yes"; a yes covers only the plan shown.
- **Explainable.** Every verdict stores the factor table (fact → rule → points) and a JSON audit trail. Every run is traceable in AI Studio Observability.
- **Safe by construction.**
  - The delete tool is not enabled.
  - Record text is treated as data, never as instructions (the demo email contains an "approve it right away" line that the agent ignores).
  - The PII-protection policy masks emails and names. The CRM then fills contact details from the linked Contact through a business rule, so the model never needs the address.
  - The agent writes as a service identity, so the plan asks for the responsible person by name and records them as owner and reviewer.

## Creatio products, features, tools and APIs used

- **Creatio AI Studio**:
  - Prompt Agent Designer, Enterprise agent with versioning, publish and deploy lanes.
  - Custom skills (SKILL.md + reference files, required tools, checks), plus vendor skills: query-creatio-records, creatio-records-search, creatio-explore-data-structure, creatio-create-record, creatio-update-record, creatio-analyze-record, datetime-interpretation, creatio-datetime-filtering, creatio-reporting-periods, creatio-stage-transitions, creatio-folder-operations, ai-studio-host-navigation.
  - Knowledge source (file, indexed, citations).
  - Integrations: the Creatio Business Studio MCP server with integration credentials.
  - Built-in tools: code execution and web search; present_* UI cards; platform date tools; host navigation.
  - Policies: Default PII protection. Observability: run traces with tool inputs and outputs.
- **Creatio CRM tools used by the agent:**
  - `creatio_describe_object`, `creatio_list_records`, `creatio_get_record`, `creatio_search_records`, `creatio_aggregate_records`
  - `creatio_validate_record`, `creatio_create_record`, `creatio_update_record`
  - `creatio_get_current_user`, `creatio_build_record_url`
- **Creatio platform (Freedom UI):**
  - Custom objects: Project Intake, Intake scoring factor / rule / priority band, A&D Involved Party.
  - List and form pages with a settings tab and mini pages.
  - Entity-level business rule; related-page bindings.
  - System settings (UsrIntakeAutoApplyThreshold, UsrIntakeReviewThreshold, UsrIntakeVerdictPolicy).
  - Lookups: sources, statuses, recommended actions, priorities, construction stages, stakeholder roles.
- **Build tooling:** the clio MCP (schema sync, data bindings, page updates, business rules, OData reads for verification).

## What's next

- **Email channel.** Route the sales mailbox to the agent so provider alerts and customer emails become intakes without copy-paste, using AI Studio channels.
- **Scheduled digest.** A daily "what's waiting / what's strategic" summary for managers via scheduled tasks, plus reminders on intakes stuck in Needs review.
- **Probability of conversion.** Learn a conversion model from won and lost opportunities by developer, dealer, type and region, and show it next to the rule-based score. The field and page slot already exist.
- **Update-existing flow.** Field-by-field merge of provider updates into existing projects, with a change log on the project.
- **Approvals.** Route Strategic Pursuits above a value threshold through AI Studio approvals to a sales director before apply.
- **Richer buying centre.** Suggest missing stakeholders from past projects of the same developer, and create involved-party contacts once they are confirmed.
