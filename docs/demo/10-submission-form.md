# Submission form — ready-to-paste answers

Fill the hackathon form field by field with the text below. Placeholders in `<angle brackets>` are for the team to complete. Do not put the judge user's password in this repo.

## Team name
`<team name as registered>`

## Contact email
`<the email used on Register Team>`

## Category
**CRM Agent**

## What does your agent do? (150 words, limit 150)

Project Assistant turns construction project leads into qualified CRM records for an appliance manufacturer selling into multifamily, hospitality, senior-living and student-housing projects. Leads arrive as customer emails, meeting notes and weekly Dodge spreadsheets. Each one is re-typed, checked for duplicates, matched to the developer, architect, builder and dealer, and judged by hand: about five hours per lead.

One Creatio AI Studio agent with four custom skills does it in a conversation. Capture reads chat, pasted text or an uploaded Excel file into a Project Intake, linking stakeholders to existing Accounts (even by alternative names) and blocking duplicates by source ID. Verdict matches the intake against existing projects, detects new phases, and computes a deterministic, explainable score from scoring rules that administrators maintain as Creatio lookups. Apply shows a plan and, only after a human "yes", creates the Project, involved parties and Opportunity, then writes back. Nothing is deleted or invented.

## Demo video URL
`<YouTube / Vimeo / Drive link, public, under 5 minutes>` — record from [09-demo-script-final.md](09-demo-script-final.md).

## Environment access

Create the judge user first (see "How to create the judge user" below), then paste:

```
Trial URL: https://189543-crm-bundle.creatio.com/
Username: <judge login, e.g. hackathon.judge>
Password: <randomly generated, from a password manager>
Access: Supervisor-level (System administrators role), Creatio.ai / AI Studio licence assigned

Where to find the agent:
1. Sign in, open the "Project Intake" workplace and its "Project Intake" section (list of intakes with New / Needs review / Ready to apply / Strategic quick filters).
2. Open the Creatio.ai panel (top-right icon), start a new chat and pick "Project Assistant".
3. Try: paste seed-data/demo/email-the-wren.txt with "Capture this email as a new project intake", then "Yes, run the verdict", then "Prepare the apply plan".
4. Agent configuration: AI Studio > Agents > Project Assistant (id d1ff97d6-d5fd-454b-ae9a-21b0a878cd8a): Skills, Knowledge, Integrations, Policies, Versions. Run traces: AI Studio > Observability.
5. Scoring configuration: Project Intake list > Settings (gear): scoring factors, scoring rules, priority bands.
Demo inputs and expected results: https://github.com/PranshuBasak/ai_hackathon/tree/main/docs/demo
```

### How to create the judge user (team does this, not the agent)
1. System Designer > **System users** > New. Login as above, password generated in a password manager (not shared with anyone else, not typed into any repo file).
2. Roles: add to the **System administrators** organisational role (the same rights Supervisor has) and to **All employees**.
3. Licences: tick the CRM bundle products plus **Creatio.ai / AI Studio** so the Creatio.ai panel and the agent are available to that user.
4. Sign in once as that user in a private window and confirm the Project Intake workplace and the Creatio.ai panel with Project Assistant appear.
5. Leave the demo intakes for the judges to see, or reset them per the scripts' reset notes so the judges start from a clean list.

## Tools & features used

Creatio AI Studio: Enterprise prompt agent "Project Assistant" with versioning, publish and deploy lanes; 4 custom skills (project-intake-lifecycle, project-intake-capture, project-intake-verdict, project-intake-apply) with SKILL.md reference files and required tools; 12 vendor skills (query-creatio-records, creatio-records-search, creatio-explore-data-structure, creatio-create-record, creatio-update-record, creatio-analyze-record, datetime-interpretation, creatio-datetime-filtering, creatio-reporting-periods, creatio-stage-transitions, creatio-folder-operations, ai-studio-host-navigation); knowledge source "Project Assistant Reference" with citations; Creatio Business Studio MCP integration with 16 CRM tools (creatio_delete_record disabled); code execution (Excel parsing, score arithmetic); web search; present_* UI cards; platform date tools; host navigation; Default PII protection policy; Observability run traces. Creatio CRM (Freedom UI): custom objects Project Intake, Intake scoring factor / rule / priority band, A&D Involved Party; list page with quick filters and default sort, form page with Stakeholders / AI verdict tabs and Linked records island; settings tab with mini pages; entity business rule; system settings for auto-apply and review thresholds; colour-coded lookups; Project, Opportunity, Account, Contact. Build tooling: clio MCP for schema sync, page updates, data bindings and OData verification.

## Repository URL
https://github.com/PranshuBasak/ai_hackathon

## What would you improve with more time?

Web enrichment: let the agent look up a project and its stakeholders on the web and in provider portals, so it adds public facts (permits, press, team changes) to the intake instead of relying only on what the CRM already holds. Email channel: route the sales mailbox to the agent so provider alerts and customer emails become intakes without copy-paste. Scheduled digest: a daily "what is waiting, what is strategic" summary for managers, with reminders on intakes stuck in Needs review. Probability of conversion: learn a model from won and lost opportunities by developer, dealer, type and region and show it beside the rule-based score (the field and page slot already exist). Update-existing flow: field-by-field merge of provider updates into existing projects with a change log. Approvals: route Strategic Pursuits above a value threshold through AI Studio approvals to a sales director before apply. Richer buying centre: suggest missing stakeholders from the developer's past projects.

## Checkbox
Tick "This is our team's original work…" only after confirming the demo data is fictional (it is: all demo companies, contacts and projects are invented and listed in seed-data/fixture-manifest.json) and no real customer data was loaded.
