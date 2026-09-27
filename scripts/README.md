# Implementation artifacts

These files record incremental authoring work. They are not a migration runner and must not be executed as a batch.

- Read the current page from Creatio before any further edit. Files under `.clio-pages` are overwritten by `get-page`.
- `project-history-native.js` is the latest submitted Project page snapshot. The two native relationship lists still require final browser acceptance.
- `history-debug.js`, `history-filter-fix.js`, `history-scope-fix.js`, and `project-page-complete.js` are superseded experiments. Do not deploy them.
- `build_project_page.py`, `fix_history_native.py`, and the page builders were one-time transformations. Re-running them against already changed pages can duplicate controls or overwrite later edits.
- `build_assets.py` recreates the original planned assets and manifest. Do not run it after fixture loading: it resets manifest load state.
- `refresh_model_docs.py` regenerates model documentation from the saved metadata snapshot and validates static assets. Refresh its evidence input before treating it as current metadata.

The live environment and dated evidence, not these historical snapshots, determine current implementation status.

`prepare_fixture_payloads.py` resolves local seed CSVs against dated live lookup evidence and writes `evidence/fixture-payloads-prepared.json`. It performs no remote actions and does not change the manifest. Its output includes explicit outstanding gates and missing lookups; do not submit it until those are resolved. Large OData collision queries were rejected; five-record groups succeeded.
