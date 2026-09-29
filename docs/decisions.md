# Decision log

| Date | Decision | Reason / departure |
|---|---|---|
| 2026-09-26 | Reuse UsrMieleADProjects and existing records | Explicit approved implementation plan supersedes original new neutral package proposal. |
| 2026-09-26 | Visible branding Project Intake; retain technical Miele identifiers | Preserve references and compatibility; internal names are intentional exceptions. |
| 2026-09-26 | Reuse UsrADProjectIntelligence and UsrADProjectParty | Avoid competing intake/participant objects. |
| 2026-09-26 | Reuse Project Managment workplace, rename caption, retain All employees grant | Approved placement and audience; preserve workplace/homepage IDs. |
| 2026-09-26 | Local root ai_hackathon | Supersedes original AI_Creatio folder convention. |
| 2026-09-26 | Distinct lifecycle status | Analysis Completed does not mean Applied. Existing nine intakes must be Needs review. |
| 2026-09-26 | Scoring weights 20/15/15/15/10/10/10/5 | Initial configurable allocation totaling 100; original listed factors without numeric weights. |
| 2026-09-26 | Confidence defaults 85 and 50 | Configuration only; phases and renamed projects always require review regardless of threshold. |
| 2026-09-26 | Missing information => Needs review; execution failure => Failed | Correct original T16 contradiction. |
| 2026-09-26 | Import blocked by exported OnInserted Lead creation | Follow explicit safe-import gate; deliberately adapt legacy listener before T01/T02/manual-create. |
| 2026-09-26 | Reset by manifest GUID only | Protect all original records; tags support identification but never expand delete scope. |
| 2026-09-26 | Savings is estimate: applied count × 22 / 60 hours | Not a measured productivity claim. |
| 2026-09-26 | User commented the intake Lead-creation listener; source diff verified | User deliberately adapted this legacy component; other quotation code unchanged. Runtime test awaits full compilation and restart requested by the user. |
| 2026-09-26 | Intake history uses matched and created-project lists | Native relationship dependencies replace a custom handler that did not filter grid requests. A record linked both ways can appear in both lists. Created-project subset still needs verification. |
| 2026-09-26 | Restrict the old all-fields-readonly rule to the agent verdict | Source/project/stakeholder review fields must remain editable on existing intakes. |

| 2026-09-28 | Separate capture from verdict analysis | Owner confirms capture agent and Excel success; second agent prepares verdict without creating CRM Projects or applying changes. |
| 2026-09-28 | Proposed numerical rubric requires explicit configuration approval | Original plan did not specify factor bands/priority cutoffs. Preserve oracle and live lookup meanings; do not fabricate installed policy. |

## 2026-09-28 — Dynamic verdict configuration proposal

Reuse UsrScoringFactor for the eight factor definitions; store versioned JSON rules in existing UsrDescription with guidance retained inside JSON. Keep shared policy out of intake records. Propose one global sufficiently long text setting UsrIntakeVerdictPolicy, retaining existing threshold settings. No new object/list page in this design. A dedicated policy object is a fallback only if text-setting capacity cannot be verified, not an implemented change.

Preserve row GUIDs and lookup meanings. Policy is unapproved until administrator review; exact proposed region coverage is fictional. Runtime reads approved configuration and calculates deterministically, records snapshot/hash/version, and preserves mandatory review. Old verdicts are not automatically rewritten. These decisions refine the local build kit and do not establish installed behavior.

## 2026-09-28 — Owner-authorized live demo policy

Created UsrIntakeVerdictPolicy using native system-setting lifecycle tools (MaxSizeText, global, uncached). Activated demo-2026-09-28-v1 after exact factor read-back. Reused eight existing GUIDs/weights and copied original guidance into Description before installing structured UsrDescription rules. Earlier proposed files stay unapproved as templates; the installed snapshot is separate. Source examples and fictional territory remain demo-only. Protected SysSettings DataService binding refusal is recorded; no permission bypass. No intake writes or AI Studio deployment.
