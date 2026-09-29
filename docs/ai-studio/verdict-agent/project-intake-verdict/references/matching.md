# Matching and review rules

1. First search exact provider/source-project identity. Separately search human Project name/aliases, normalized address, city/country and developer. Preserve phase, tower and block distinctions. Multiple exact-key results require review.
2. Rank and supply at most ten relevant Project candidates, not the first ten database rows. Supply up to five Accounts for each stakeholder role. Record filters, access limits, truncation and search success. If coverage is insufficient to make a no-match conclusion, set searchComplete=false.
3. Exact name alone is insufficient. Prefer corroborating location/developer/source identity. A conflicting address, developer or phase is material evidence.
4. Same source identity and no material updates: Duplicate – no action. Changed verified business data for the same project: Update existing project. Compare fields before deciding; source identity alone does not imply no action.
5. A phase at the same site: new-phase with candidate parent, Link as new phase, mandatory Needs review.
6. A renamed project supported by address/developer evidence: renamed, Update existing project, mandatory Needs review.
7. Reports from different providers can match the same Project. Retain their distinct intake records. Choose duplicate or update based on whether facts changed.
8. A well-supported complete no-match search can recommend Create new project. For this case matchConfidence is zero (no existing project chosen); decisionConfidence measures support for the new-project recommendation. Neither number is a calibrated probability.
9. Account spelling/alias ambiguity always needs review. Candidate IDs are proposals, not writes to reviewer-owned selections.
10. Ambiguous alternatives: explain the competing candidates and leave action null. Do not disguise uncertain identity as low commercial value.

Examples from the original demo oracle: Cedar Grove Heights duplicate; Meridian Tower Phase 2 links to Phase 1 with review; Commons at Riverside is a possible rename with review; Pier 9 cross-source records share one Project. These are evaluation expectations to verify against live records, not instructions to force the expected answer.
