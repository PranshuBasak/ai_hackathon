"""Build the redesigned UsrProjectIntakeSection_ListPage body (v2).

Reads the current body from .clio-pages (fetched by get-page), keeps the template
merges, de-duplicates the repeated viewModel/model merges, adds a "New" quick
filter, two columns (estimated value, recommended action) and a default sort by
Received on (newest first). Writes scripts/intake-list-v2.js and
scripts/intake-list-v2-resources.json.
"""
import copy, json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SCHEMA = "UsrProjectIntakeSection_ListPage"
ENTITY = "UsrADProjectIntelligence"
src = (ROOT / ".clio-pages" / SCHEMA / "body.js").read_text(encoding="utf-8-sig")
vc = json.loads(src.split("/**SCHEMA_VIEW_CONFIG_DIFF*/")[1])

# columns: (column, caption, dataValueType, referenceSchemaName)
COLS = [
    ("UsrName", "Number", 1, None),
    ("UsrProjectName", "Project name", 1, None),
    ("UsrExternalSource", "Source", 10, "UsrADIntelligenceSource"),
    ("UsrStatus", "Status", 10, "UsrIntakeStatus"),
    ("UsrPriorityClassification", "Priority", 10, "UsrADProjectPriority"),
    ("UsrRecommendedAction", "Recommended action", 10, "UsrProjectAIRecommendedAction"),
    ("UsrProjectMatchConfidence", "Match confidence", 5, None),
    ("UsrEstimatedProjectValue", "Estimated value", 6, None),
    ("UsrReceivedOn", "Received on", 7, None),
]
existing_ids = {}
for op in vc:
    if op["operation"] == "merge" and op["name"] == "DataTable":
        for c in op["values"]["columns"]:
            existing_ids[c["code"]] = c["id"]
import uuid
columns = []
for col, cap, dvt, ref in COLS:
    code = "PDS_" + col
    c = {"id": existing_ids.get(code, str(uuid.uuid5(uuid.NAMESPACE_URL, SCHEMA + code))),
         "code": code, "caption": "#ResourceString(%s)#" % code, "dataValueType": dvt}
    if ref:
        c["referenceSchemaName"] = ref
    columns.append(c)

resources = {"PDS_" + col: cap for col, cap, _, _ in COLS}

# ---- template merges (kept verbatim, DataTable columns replaced)
ops = []
for op in vc:
    if op["operation"] == "merge":
        op = copy.deepcopy(op)
        if op["name"] == "DataTable":
            op["values"]["columns"] = columns
        ops.append(op)

# ---- quick filters: reuse the shipped structure, in a deliberate order
filters = {op["name"]: copy.deepcopy(op) for op in vc if op["operation"] == "insert"}
needs_review = filters["UsrFilterNeedsReview"]


def make_filter(name, caption, column, ref_schema, guid, display):
    f = copy.deepcopy(needs_review)
    f["name"] = name
    f["values"]["config"]["caption"] = "#ResourceString(%s)#" % name
    expose = f["values"]["_filterOptions"]["expose"][0]
    expose["attribute"] = name + "_Items"
    arg = expose["converters"][0]["args"][0]
    leaf = arg["target"]["customFilter"]["items"]["value"]
    leaf["referenceSchemaName"] = ref_schema
    leaf["leftExpression"]["columnPath"] = column
    leaf["rightExpressions"][0]["parameter"]["value"] = {
        "Id": guid, "value": guid, "displayValue": display, "Name": display}
    arg["config"]["caption"] = "#ResourceString(%s)#" % name
    f["values"]["_filterOptions"]["from"] = name + "_Value"
    resources[name] = caption
    return f


order = [
    make_filter("UsrFilterNew", "New", "UsrStatus", "UsrIntakeStatus",
                "efc4cf1b-1b15-4d92-9a65-59960f61e99e", "New"),
    filters["UsrFilterNeedsReview"],
    filters["UsrFilterReady"],
    filters["UsrFilterStrategic"],
]
resources["UsrFilterNeedsReview"] = "Needs review"
resources["UsrFilterReady"] = "Ready to apply"
resources["UsrFilterStrategic"] = "Strategic"
for i, f in enumerate(order):
    f["index"] = 1 + i
    ops.append(f)

# ---- view model
item_attrs = {"PDS_" + col: {"modelConfig": {"path": "PDS." + col}} for col, _, _, _ in COLS}
filter_attrs = [
    {"loadOnChange": True, "name": "FolderTree_active_folder_filter"},
    {"name": "Items_PredefinedFilter", "loadOnChange": True},
    {"name": "LookupQuickFilterByTag_Items", "loadOnChange": True},
    {"name": "SearchFilter_Items", "loadOnChange": True},
    {"name": "Filters_Filter", "loadOnChange": True},
] + [{"name": f["name"] + "_Items", "loadOnChange": True} for f in order]
view_model = [
    {"operation": "merge", "path": ["attributes", "Items", "viewModelConfig", "attributes"],
     "values": item_attrs},
    {"operation": "merge", "path": ["attributes", "Items", "modelConfig"], "values": {
        "sortingConfig": {"attributeName": "ItemsSorting",
                          "default": [{"direction": "desc", "columnName": "UsrReceivedOn"}]},
        "filterAttributes": filter_attrs}},
]
model = [
    {"operation": "merge", "path": ["dataSources", "PDS", "config"], "values": {"entitySchemaName": ENTITY}},
    {"operation": "merge", "path": ["dataSources", "PDS", "config", "attributes"],
     "values": {col: {"path": col} for col, _, _, _ in COLS}},
]


def j(v):
    return json.dumps(v, indent=2, ensure_ascii=False)


body = (
    'define("%s", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {\n'
    "\treturn {\n"
    "\t\tviewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/%s/**SCHEMA_VIEW_CONFIG_DIFF*/,\n"
    "\t\tviewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/%s/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,\n"
    "\t\tmodelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/%s/**SCHEMA_MODEL_CONFIG_DIFF*/,\n"
    "\t\thandlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,\n"
    "\t\tconverters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,\n"
    "\t\tvalidators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/\n"
    "\t};\n"
    "});\n"
) % (SCHEMA, j(ops), j(view_model), j(model))
(ROOT / "scripts" / "intake-list-v2.js").write_text(body, encoding="utf-8")
(ROOT / "scripts" / "intake-list-v2-resources.json").write_text(json.dumps(resources, indent=2), encoding="utf-8")
print("ops", len(ops), "cols", len(columns), "filters", len(order), "resources", json.dumps(resources))
