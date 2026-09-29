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

## 2026-09-27 UI pass

- `build_intake_form_v2.py` regenerates `intake-form-v2.js` and `intake-form-v2-resources.json`, the current body of `UsrADProjectIntelligence_FormPage`. Edit the script, rerun it, validate with Clio `validate-page`, then save with `update-page` in replace mode passing the resources file and the latest checksum from `get-page`.
- `build_list_page_v2.py` does the same for `UsrProjectIntakeSection_ListPage`; it reads the current body from `.clio-pages`, so run `get-page` first.
- `project-page-location-island.js` is the append fragment that created the Location and stage island; `project-page-v2.js` is the full replace-mode snapshot saved afterwards to restore parent-first operation order. It supersedes `project-history-native.js`.
