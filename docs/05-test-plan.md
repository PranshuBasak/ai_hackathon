# Tests and evidence

No AI test is passed by the presence of a legacy skill or process. Expected outputs are tests/oracle.csv and tests/extraction-oracle.json.

| ID | Check | Pass criteria | Current state |
|---|---|---|---|
| F01 | Current package | get-target-package resolves UsrMieleADProjects | Verified 2026-09-26; evidence/implementation-readbacks.json |
| F02 | Backup | Pre-change package exported and hash recorded | Verified; backups/before-foundation/UsrMieleADProjects.gz |
| F03 | Model | Effective fields/types/references and defaults match docs | In progress |
| F04 | Branding/navigation | Neutral app/workplace/captions; correct bindings | In progress |
| F05 | Existing data | Same nine original intake IDs, Needs review, PI identifiers | Verified 2026-09-26; handoff readback aed4be2689f6, all temporary links restored |
| F06 | Browser | List, edit, related lists, neutral captions work | In progress; signed in by user |
| F07 | Scoring | Eight active rows, weights total100; settings85/50 | Rows, settings and settings bindings verified; edit restrictions pending |
| T01 | Import15 | 15 fixture intakes, New, no errors | Blocked B01 legacy Lead creation |
| T02 | Reimport | Same15 IDs/count; review/results preserved | Blocked B01 |
| T03 | Batch | All leave New within5min, none stuck | Deferred AI phase |
| T04 | Extraction | ≥90% expected fields on E1–E4 | Deferred AI phase |
| T05 | Matching | ≥8/9 tricky scenarios correct | Deferred AI phase |
| T06 | Actions | ≥13/15 correct; no duplicate Project for4–6/15 | Deferred AI phase |
| T07 | Priority | Rows1/12/13 exact; others within one class | Deferred AI phase |
| T08 | Guardrails | Rows7/8/9 Needs review | Deferred AI phase |
| T09 | Apply new | Project,4parties,Opportunity/dealer/contact links | Deferred AI phase |
| T10 | Apply phase | NewProject.ParentProject = MeridianPhase1 | Deferred AI phase |
| T11 | Missing architect | Follow-up task on Apply | Deferred AI phase |
| T12 | Idempotency | Second Apply no extra records | Deferred AI phase |
| T13 | Alias | Confirmed alias learned; later resolution improves | Deferred AI phase |
| T14 | Email/chat | E1 intake and verdict≤60sec | Deferred AI phase |
| T15 | Explain | Rationale cites address/developer evidence | Deferred AI phase |
| T16a | Missing information | Empty business data => Needs review, missing-info message | Deferred AI phase |
| T16b | Execution failure | Injected AI/transport error => Failed + error; rerun recovers | Deferred AI phase |
| T17 | Scoring config | Weight/deactivation changes score withoutcode | Deferred AI phase |
| T18 | Threshold | Nonphase, nonrename, complete85-band case can cross threshold; rows7/8 still review at70 | Deferred AI phase |
| T19a | Intake access | Nonadmin employee can read/create/edit afterB01 | Pending nonadmin verification |
| T19b | Config access | Nonadmin cannot write scoring/settings; admin can | Pending permissions verification |
| T19c | Apply access | Authorized sales reviewer can Apply | Deferred AI phase |
| T20 | Dashboard | Counts correct; savings labeled estimate22min/applied | Deferred AI phase |

## Eval log

| Run | Prompt/version | Fixtures | Match/action/extraction pass rate | Evidence |
|---|---|---|---|---|
| None | Not implemented | Local assets only | Not run | tests/oracle.csv |

Before marking any test Verified complete, capture exact IDs, timestamp, readback/report and browser result where applicable. Missing business information is not an execution exception. The source attachment's T18 is superseded as described above.
