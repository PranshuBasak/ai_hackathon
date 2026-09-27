# Capture Assistant — five-project Excel test

These fictional records were prepared locally on 27 September 2026. They have not been imported by this script. Source values simulate provider submissions; they are not real provider reports. The five CAPTEST source IDs differ from the earlier 15-row demo batch. The assistant must still check live source keys before saving.

## Run the test

1. Open your new Project Intake Capture Assistant.
2. Attach Project_Intake_Capture_Test_5.xlsx. Choose sheet **Project Intakes** if asked.
3. Send the test prompt below.
4. Review the five-row preview. If asked about currency, values are explicitly USD in each populated row's Description; the save action must confirm how that maps to the environment's money field. Unknown values should stay blank.
5. Confirm the import when the preview is correct.
6. Expect five New intake records only if none of these source keys already exists. Ask the assistant to read them back and return actual intake numbers and links. Record the returned GUIDs in your test-run manifest before any cleanup.
7. Upload the same unchanged file again. Expect no additional records. A changed file should trigger the configured conflict/review policy, not silently overwrite results.

## Prompt to paste

Read the attached workbook's Project Intakes sheet. Preview the five projects and map its headers to the existing Project Intake input fields. Check for existing records using Source plus Source Project ID. Keep unknown facts blank and show me any missing information. Do not create Projects, Leads or Opportunities. Ask me to confirm before saving new intake records. After saving, read back and return the actual intake numbers, New status and links. If you cannot read XLSX or save to Creatio, state that clearly; do not claim an import succeeded.

## Expected capture behavior

| Source Project ID | Project | Expected |
|---|---|---|
| CAPTEST-20260927-001 | Oakline Court Residences | Complete input; USD 48 million; 120 units. |
| CAPTEST-20260927-002 | Juniper Harbor Apartments | Complete input; USD 72 million; 180 units. |
| CAPTEST-20260927-003 | Silverleaf Senior Living | Complete input; USD 36 million; 90 units. |
| CAPTEST-20260927-004 | Cedarbrook Student Village | Architect and dealer remain empty. Allow incomplete draft on confirmation. |
| CAPTEST-20260927-005 | Willowgate Mixed-Use Development | Value, units, all three dates, builder and dealer remain empty. November 2026 design review must not become a fabricated completion date. |

New captures remain New. Matching, scoring and later Needs review routing are outside this capture test. No lifecycle, reviewer, AI-result or generated-number columns are included in the workbook.

The CSV companion contains the same rows if your configured tool supports CSV but cannot parse XLSX. Its availability does not prove the agent has a CSV reader. Do not attach this README as intake data.
