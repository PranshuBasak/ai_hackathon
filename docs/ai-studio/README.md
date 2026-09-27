# Build the Project Intake Capture Assistant

Prepared 27 September 2026. These are design/build handoff files. No agent, channel, workflow or platform setting was changed by preparing them.

## Use the files

1. In the AI Twin screen, attach **02-project-intake-capture-context.md** using the attachment control. It describes your existing schema and the proposed capture rules. If attaching context in chat is unavailable, paste its text or use Knowledge as described below.
2. Paste the complete contents of **01-build-prompt.txt** into AI Twin. It is a builder request, not the runtime system prompt.
3. Let Twin inspect the connected CRM metadata and report prerequisites. It must verify access to UsrADProjectIntelligence and the actual registered write tools. Clio access in Codex does not mean AI Twin's CRM MCP connection is configured.
4. Use **03-runtime-instructions.txt** for the agent's System prompt, or ask Twin to apply it. Critical rules must also be enforced by tool permissions and the save workflow.
5. For persistent reference, create a File knowledge source containing **02-project-intake-capture-context.md**, wait for Ready, and attach it to the agent. A file attached to a build conversation is not proof of persistent runtime knowledge attachment. Do not add the builder prompt as operational knowledge.
6. Start with the internal Creatio.ai Twin chat channel. Test a dialog and a pasted email through the same shared save action before enabling automated email or batch writes.
7. Configure the actual mailbox and routing rule. Test the tenant's file reader separately. Use the mapped import path when XLSX reading is unavailable.
8. Run the context document's acceptance cases with fresh test keys. Review read-backs and tool permissions, then publish/deploy to ai_hackathon using your normal deployment controls.

Existing sample inputs: ../../seed-data/email_E1.txt and ../../seed-data/ProjectIntake_Import_Template.xlsx. The 15-row demo batch is already loaded; do not import it again until reimport preservation is tested. Sample files are test inputs, not operating knowledge or automatic instructions to create records.

## Research findings and practical implications

Sources below were read on 27 September 2026. Published capabilities are not confirmation that each integration is enabled in this tenant.

- AI Twin can build/refine agents and attach knowledge conversationally. Its live CRM data access requires the Creatio CRM MCP integration. Your screenshot shows this Twin surface. [AI Twin overview](https://academy.creatio.com/guides/ai-studio/ai-twin-overview)
- AI Studio supports prompt agents and structured workflow agents. We recommend a conversational capture agent with a controlled save action; this architecture is our project-specific recommendation. [AI Studio overview](https://academy.creatio.com/guides/ai-studio/creatio-ai-studio-overview)
- The documented creation route is Managed Agents > Agents > New > Enterprise agent > Prompt Agent Designer. It provides System Instructions, tools, skills, knowledge, channels, preview and publishing/deployment. Enterprise visibility is appropriate for the team; actual record access still depends on permissions. [Create a prompt agent](https://academy.creatio.com/guides/ai-studio/create-a-prompt-agent)
- Web Chat supports conversations and attachments. The documented Email channel connects Microsoft 365 and includes inbound attachments/thread context. Configure the mailbox and agent binding; do not infer Gmail support or silent ingestion from a prompt. Email mode names do not replace restrictions on outbound tool access. [Channels](https://academy.creatio.com/guides/ai-studio/channels)
- Knowledge File sources list PDF, TXT, MD, JSON, DOCX and PPTX. XLSX/CSV are not listed there. This does not establish whether a separate runtime file reader can parse workbooks; inspect available tools. Markdown was chosen for the supporting context because it is explicitly documented. [Add a knowledge source](https://academy.creatio.com/guides/ai-studio/knowledge/add-knowledge-source)

## Suggested first chat test

User: "Create an intake for Oakline Court, a 120-unit apartment development in Austin. The developer is Bluewater Living Co. I do not know the architect or dealer yet."

Expected assistant: summarize known facts, keep unknowns empty, ask only relevant missing questions, offer an incomplete draft, obtain save confirmation, call the restricted save action, then return a verified PI number and record link. No Project, Lead or Opportunity should be created.

## What success means

The agent can save and read back a New intake from an authorized chat submission; repeats do not duplicate it. The equivalent email and spreadsheet paths pass their own tests. Tools enforce the input-only write scope and preserve review/results on updates. A fluent chat response, attached document or published agent alone does not establish those outcomes.
