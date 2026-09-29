"""Build the redesigned UsrADProjectIntelligence_FormPage body (v2).

Writes scripts/intake-form-v2.js (full replace-mode body) and
scripts/intake-form-v2-resources.json (en-US localizable strings to register).

Design: profile island (key stable data) + "Linked records" island on the left;
three tabs (Project, Stakeholders, AI verdict) made of stacked expansion panels.
Element names referenced by the page business rule "Keep agent verdict read-only"
are preserved exactly.
"""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SCHEMA = "UsrADProjectIntelligence_FormPage"
ENTITY = "UsrADProjectIntelligence"

# column -> (control type, sentence-case caption, extra props)
# extra keys: ro (readonly), multi (multiline), picker, prec (decimalPrecision), lookup (bool)
F = {
    "UsrName": ("crt.Input", "Intake number", {"ro": True}),
    "UsrStatus": ("crt.ComboBox", "Status", {"lookup": True}),
    "UsrExternalSource": ("crt.ComboBox", "Source", {"lookup": True}),
    "UsrExternalProjectId": ("crt.Input", "Source project ID", {}),
    "UsrReceivedOn": ("crt.DateTimePicker", "Received on", {"ro": True, "picker": "datetime"}),
    "UsrReviewedBy": ("crt.ComboBox", "Reviewer", {"lookup": True}),
    "UsrPriorityClassification": ("crt.ComboBox", "Priority", {"ro": True, "lookup": True}),
    "UsrQualificationScore": ("crt.NumberInput", "Qualification score", {"ro": True, "prec": 2}),
    "UsrMatchedProject": ("crt.ComboBox", "Matched project", {"ro": True, "lookup": True}),
    "UsrCreatedProject": ("crt.ComboBox", "Created project", {"ro": True, "lookup": True}),
    "UsrMatchedOpportunity": ("crt.ComboBox", "Matched opportunity", {"ro": True, "lookup": True}),
    "UsrCreatedOpportunity": ("crt.ComboBox", "Created opportunity", {"ro": True, "lookup": True}),
    "UsrProjectName": ("crt.Input", "Project name", {}),
    "UsrProjectType": ("crt.ComboBox", "Project type", {"lookup": True}),
    "UsrProjectCategory": ("crt.ComboBox", "Project category", {"lookup": True}),
    "UsrSpecificationStatus": ("crt.ComboBox", "Specification status", {"lookup": True}),
    "UsrProjectTypeText": ("crt.Input", "Project type (source)", {}),
    "UsrStageText": ("crt.Input", "Stage (source)", {}),
    "UsrProductPackage": ("crt.Input", "Product package", {}),
    "UsrSalesRegion": ("crt.Input", "Sales region", {}),
    "UsrProjectDescription": ("crt.RichTextEditor", "Project description", {}),
    "UsrProjectAddress": ("crt.Input", "Project address", {}),
    "UsrCityText": ("crt.Input", "City (source)", {}),
    "UsrStateText": ("crt.Input", "State (source)", {}),
    "UsrCountryText": ("crt.Input", "Country (source)", {}),
    "UsrProjectCountry": ("crt.ComboBox", "Country", {"lookup": True}),
    "UsrEstimatedProjectValue": ("crt.NumberInput", "Estimated project value", {"prec": 2}),
    "UsrNumberOfUnits": ("crt.NumberInput", "Number of units", {"prec": 0}),
    "UsrExpectedOrderValue": ("crt.NumberInput", "Expected order value", {"prec": 2}),
    "UsrExpectedCloseDate": ("crt.DateTimePicker", "Expected close date", {"picker": "date"}),
    "UsrBidDate": ("crt.DateTimePicker", "Bid date", {"picker": "date"}),
    "UsrStartDate": ("crt.DateTimePicker", "Start date", {"picker": "date"}),
    "UsrCompletionDate": ("crt.DateTimePicker", "Completion date", {"picker": "date"}),
    "UsrCompletionYear": ("crt.NumberInput", "Completion year", {"prec": 0}),
    "UsrDeliveryYear": ("crt.NumberInput", "Delivery year", {"prec": 0}),
    "UsrEmailActivity": ("crt.ComboBox", "Source email", {"lookup": True}),
    "UsrRawText": ("crt.Input", "Raw source text", {"multi": True}),
    "UsrKeyContactName": ("crt.Input", "Contact name", {}),
    "UsrKeyContactRoleText": ("crt.Input", "Contact role", {}),
    "UsrKeyContactEmail": ("crt.EmailInput", "Contact email", {}),
    "UsrDeveloperName": ("crt.Input", "Developer (source name)", {}),
    "UsrDeveloperAccount": ("crt.ComboBox", "Developer account", {"lookup": True}),
    "UsrBuilderName": ("crt.Input", "Builder (source name)", {}),
    "UsrBuilderAccount": ("crt.ComboBox", "Builder account", {"lookup": True}),
    "UsrArchitectName": ("crt.Input", "Architect (source name)", {}),
    "UsrArchitectAccount": ("crt.ComboBox", "Architect account", {"lookup": True}),
    "UsrDealerName": ("crt.Input", "Dealer (source name)", {}),
    "UsrDealerAccount": ("crt.ComboBox", "Dealer account", {"lookup": True}),
    "UsrContractorName": ("crt.Input", "Contractor (source name)", {}),
    "UsrCompetitorPresence": ("crt.Input", "Competitor presence", {"multi": True}),
    "UsrRecommendedAction": ("crt.ComboBox", "Recommended action", {"ro": True, "lookup": True}),
    "UsrAnalysisStatus": ("crt.ComboBox", "Analysis status", {"ro": True, "lookup": True}),
    "UsrAnalysisDate": ("crt.DateTimePicker", "Analysis date", {"ro": True, "picker": "datetime"}),
    "UsrAnalysisCompleted": ("crt.Checkbox", "Analysis completed", {"ro": True}),
    "UsrProjectMatchConfidence": ("crt.NumberInput", "Project match confidence", {"ro": True, "prec": 2}),
    "UsrOpportunityMatchConfidence": ("crt.NumberInput", "Opportunity match confidence", {"ro": True, "prec": 2}),
    "UsrMatchReason": ("crt.Input", "Match reason", {"ro": True, "multi": True}),
    "UsrProbabilityOfConversion": ("crt.NumberInput", "Probability of conversion", {"ro": True, "prec": 2}),
    "UsrBuyingCentreHealth": ("crt.NumberInput", "Buying centre health", {"ro": True, "prec": 2}),
    "UsrProjectClassification": ("crt.ComboBox", "Project classification", {"ro": True, "lookup": True}),
    "UsrServiceRiskLevel": ("crt.ComboBox", "Service risk level", {"ro": True, "lookup": True}),
    "UsrExpectedMargin": ("crt.NumberInput", "Expected margin", {"ro": True, "prec": 2}),
    "UsrQualificationExplanation": ("crt.Input", "Qualification explanation", {"ro": True, "multi": True}),
    "UsrAISummary": ("crt.Input", "AI summary", {"ro": True, "multi": True}),
    "UsrRecommendationDetails": ("crt.Input", "Recommendation details", {"ro": True, "multi": True}),
    "UsrMissingInformation": ("crt.Input", "Missing information", {"ro": True, "multi": True}),
    "UsrMissingStakeholders": ("crt.Input", "Missing stakeholders", {"ro": True, "multi": True}),
    "UsrCanCreateProject": ("crt.Checkbox", "Can create project", {"ro": True}),
    "UsrCanCreateOpportunity": ("crt.Checkbox", "Can create opportunity", {"ro": True}),
    "UsrCanUpdateOpportunity": ("crt.Checkbox", "Can update opportunity", {"ro": True}),
    "UsrAgentError": ("crt.Input", "Execution error", {"ro": True, "multi": True}),
}

PREFIX = {
    "crt.Input": "Input_", "crt.ComboBox": "ComboBox_", "crt.NumberInput": "NumberInput_",
    "crt.DateTimePicker": "DateTimePicker_", "crt.Checkbox": "Checkbox_",
    "crt.EmailInput": "EmailInput_", "crt.RichTextEditor": "RichTextEditor_",
}

AI_TIP = "Filled by the AI agent when the intake is processed. Read-only."
TOOLTIPS = {
    "UsrName": "Generated automatically when the intake is saved",
    "UsrReceivedOn": "Set automatically when the intake was received",
    "UsrStatus": "New, Processing and Ready to apply are set by the workflow. Reviewers set Needs review, Applied or Rejected",
    "UsrExternalSource": "Feed or channel the intake came from",
    "UsrExternalProjectId": "Together with the source this identifies the incoming record and prevents duplicates on reimport",
    "UsrPriorityClassification": AI_TIP,
    "UsrQualificationScore": "Weighted result of the configured scoring factors, filled when the intake is processed. Read-only",
    "UsrMatchedProject": "Existing project the AI agent matched this intake to. Read-only",
    "UsrCreatedProject": "Project created by the Apply step. Read-only",
    "UsrMatchedOpportunity": "Existing opportunity the AI agent matched. Read-only",
    "UsrCreatedOpportunity": "Opportunity created by the Apply step. Read-only",
    "UsrEstimatedProjectValue": "Total construction value stated by the source",
    "UsrExpectedOrderValue": "Value of the order we expect to win on this project",
    "UsrRecommendedAction": AI_TIP,
    "UsrAnalysisStatus": AI_TIP,
    "UsrAnalysisDate": AI_TIP,
    "UsrAnalysisCompleted": AI_TIP,
    "UsrProjectMatchConfidence": AI_TIP,
    "UsrOpportunityMatchConfidence": AI_TIP,
    "UsrMatchReason": AI_TIP,
    "UsrProbabilityOfConversion": AI_TIP,
    "UsrBuyingCentreHealth": AI_TIP,
    "UsrProjectClassification": AI_TIP,
    "UsrServiceRiskLevel": AI_TIP,
    "UsrExpectedMargin": AI_TIP,
    "UsrQualificationExplanation": AI_TIP,
    "UsrAISummary": AI_TIP,
    "UsrRecommendationDetails": AI_TIP,
    "UsrMissingInformation": "Business facts the agent could not find. Resolve them before applying",
    "UsrMissingStakeholders": "Stakeholder roles the agent could not identify. Resolve them before applying",
    "UsrCanCreateProject": AI_TIP,
    "UsrCanCreateOpportunity": AI_TIP,
    "UsrCanUpdateOpportunity": AI_TIP,
    "UsrAgentError": "Technical error from the last processing run. Ask an administrator before retrying",
    "UsrProjectCountry": "Resolved country. The source spelling stays in Country (source)",
    "UsrReviewedBy": "Person responsible for confirming this intake",
}
PLACEHOLDERS = {
    "UsrExternalProjectId": "Record ID in the source system",
    "UsrProjectName": "Name as it appears in the source",
    "UsrProjectAddress": "Street, building, suite",
    "UsrCityText": "As written in the source",
    "UsrStateText": "As written in the source",
    "UsrCountryText": "As written in the source",
    "UsrProjectTypeText": "Type as written in the source",
    "UsrStageText": "Stage as written in the source",
    "UsrSalesRegion": "Region or territory",
    "UsrProductPackage": "Products or package of interest",
    "UsrEstimatedProjectValue": "Total construction value",
    "UsrExpectedOrderValue": "Expected order value",
    "UsrNumberOfUnits": "Total units in the project",
    "UsrCompletionYear": "YYYY",
    "UsrDeliveryYear": "YYYY",
    "UsrRawText": "Paste the original report, email or spreadsheet row",
    "UsrKeyContactName": "Full name",
    "UsrKeyContactRoleText": "Role on the project, for example Project manager",
    "UsrKeyContactEmail": "name@company.com",
    "UsrDeveloperName": "Company name as written in the source",
    "UsrBuilderName": "Company name as written in the source",
    "UsrArchitectName": "Company name as written in the source",
    "UsrDealerName": "Company name as written in the source",
    "UsrContractorName": "Company name as written in the source",
    "UsrCompetitorPresence": "Competing brands or suppliers mentioned",
    "UsrProjectDescription": "Scope, products, notes from the source",
}

ops = []          # viewConfigDiff
attrs = {}        # viewModelConfigDiff attributes
resources = {}    # resources to register (en-US)
used_names = set()


def elem_name(col):
    return PREFIX[F[col][0]] + col


def field(col, parent, index, column, row, colspan=1, rowspan=1):
    ctype, caption, x = F[col]
    name = elem_name(col)
    assert name not in used_names, name
    used_names.add(name)
    attr = "PDS_" + col
    attrs[attr] = {"modelConfig": {"path": "PDS." + col}}
    if x.get("lookup"):
        attrs[attr + "_List"] = {"isCollection": True, "modelConfig": {
            "sortingConfig": {"default": [{"columnName": "Name", "direction": "asc"}]}}}
    resources[attr] = caption
    v = {
        "type": ctype,
        "label": "$Resources.Strings." + attr,
        "control": "$" + attr,
        "labelPosition": "above",
        "readonly": bool(x.get("ro")),
        "visible": True,
        "layoutConfig": {"column": column, "row": row, "colSpan": colspan, "rowSpan": rowspan},
    }
    if ctype == "crt.Input":
        v["multiline"] = bool(x.get("multi"))
    if ctype == "crt.NumberInput" and "prec" in x:
        v["format"] = {"decimalPrecision": x["prec"]}
    if ctype == "crt.DateTimePicker":
        v["pickerType"] = x.get("picker", "datetime")
    if ctype == "crt.ComboBox":
        v["listActions"] = []
        v["controlActions"] = []
    if ctype == "crt.RichTextEditor":
        v["editorType"] = "inline"
        v["alwaysShowToolbar"] = False
        v["maxContentHeight"] = "320px"
    if col in TOOLTIPS:
        key = "UsrTip_" + col
        resources[key] = TOOLTIPS[col]
        v["tooltip"] = "$Resources.Strings." + key
    if col in PLACEHOLDERS and not x.get("ro"):
        key = "UsrPh_" + col
        resources[key] = PLACEHOLDERS[col]
        v["placeholder"] = "$Resources.Strings." + key
    ops.append({"operation": "insert", "name": name, "values": v,
                "parentName": parent, "propertyName": "items", "index": index})


def grid2(name, parent, index, layout=None):
    v = {
        "type": "crt.GridContainer",
        "columns": ["minmax(64px, 1fr)", "minmax(64px, 1fr)"],
        "rows": "minmax(max-content, 32px)",
        "gap": {"columnGap": "large", "rowGap": "none"},
        "alignItems": "stretch",
        "color": "transparent",
        "borderRadius": "none",
        "padding": {"top": "none", "right": "none", "bottom": "none", "left": "none"},
        "items": [],
        "fitContent": True,
        "visible": True,
    }
    if layout:
        v["layoutConfig"] = layout
    ops.append({"operation": "insert", "name": name, "values": v,
                "parentName": parent, "propertyName": "items", "index": index})


def flex_column(name, parent, index, layout=None, gap="medium"):
    v = {
        "type": "crt.FlexContainer",
        "direction": "column",
        "gap": gap,
        "alignItems": "stretch",
        "justifyContent": "start",
        "wrap": "nowrap",
        "color": "transparent",
        "borderRadius": "none",
        "padding": {"top": "none", "right": "none", "bottom": "none", "left": "none"},
        "items": [],
        "fitContent": True,
        "visible": True,
    }
    if layout:
        v["layoutConfig"] = layout
    ops.append({"operation": "insert", "name": name, "values": v,
                "parentName": parent, "propertyName": "items", "index": index})


def panel(name, parent, index, title, expanded=True):
    key = name + "_title"
    resources[key] = title
    ops.append({"operation": "insert", "name": name, "values": {
        "type": "crt.ExpansionPanel",
        "title": "#ResourceString(" + key + ")#",
        "expanded": expanded,
        "toggleType": "default",
        "togglePosition": "before",
        "titleWidth": 20,
        "fullWidthHeader": True,
        "fitContent": True,
        "padding": {"top": "small", "bottom": "small", "left": "none", "right": "none"},
        "items": [],
        "tools": [],
        "visible": True,
    }, "parentName": parent, "propertyName": "items", "index": index})
    grid2(name + "_body", name, 0)
    return name + "_body"


def label(name, parent, index, text, layout=None, ltype="body", thick="default", heading="label"):
    key = name + "_caption"
    resources[key] = text
    v = {
        "type": "crt.Label",
        "caption": "#ResourceString(" + key + ")#",
        "labelType": ltype,
        "labelThickness": thick,
        "labelEllipsis": False,
        "labelColor": "auto",
        "labelBackgroundColor": "transparent",
        "labelTextAlign": "start",
        "headingLevel": heading,
        "visible": True,
    }
    if layout:
        v["layoutConfig"] = layout
    ops.append({"operation": "insert", "name": name, "values": v,
                "parentName": parent, "propertyName": "items", "index": index})


# ---------------------------------------------------------------- template merges
ops.append({"operation": "remove", "name": "RequeueQueueItemButton"})
ops.append({"operation": "remove", "name": "PostponeQueueItemButton"})
ops.append({"operation": "merge", "name": "Tabs", "values": {
    "styleType": "default", "mode": "tab", "bodyBackgroundColor": "primary-contrast-500",
    "selectedTabTitleColor": "auto", "tabTitleColor": "auto", "underlineSelectedTabColor": "auto",
    "headerBackgroundColor": "auto", "allowToggleClose": True}})
ops.append({"operation": "merge", "name": "GeneralInfoTab", "values": {
    "caption": "$Resources.Strings.UsrSourceTab", "icon": "work-icon", "iconPosition": "left-icon"}})
resources["UsrSourceTab"] = "Project"
ops.append({"operation": "merge", "name": "GeneralInfoTabContainer", "values": {
    "gap": {"columnGap": "large", "rowGap": "none"}, "visible": True,
    "padding": {"top": "none", "right": "none", "bottom": "none", "left": "none"},
    "color": "transparent", "borderRadius": "none", "alignItems": "stretch"}})

# ---------------------------------------------------------------- profile island (left)
side = "SideAreaProfileContainer"
r = 1
for col in ["UsrName", "UsrStatus", "UsrExternalSource", "UsrExternalProjectId",
            "UsrReceivedOn", "UsrReviewedBy", "UsrPriorityClassification", "UsrQualificationScore"]:
    field(col, side, r - 1, 1, r)
    r += 1

# second island: linked records (same settings as the template island)
ops.append({"operation": "insert", "name": "UsrLinkedRecordsIsland", "values": {
    "type": "crt.GridContainer",
    "columns": ["minmax(64px, 1fr)"],
    "rows": "minmax(max-content, 32px)",
    "gap": {"columnGap": "large", "rowGap": "none"},
    "color": "primary",
    "borderRadius": "medium",
    "padding": {"top": "medium", "right": "large", "bottom": "medium", "left": "large"},
    "items": [],
    "fitContent": True,
    "visible": True,
}, "parentName": "SideContainer", "propertyName": "items", "index": 1})
label("UsrLinkedRecordsLabel", "UsrLinkedRecordsIsland", 0, "Linked records",
      {"column": 1, "row": 1, "colSpan": 1, "rowSpan": 1}, ltype="headline-3", thick="semibold", heading="h3")
r = 2
for col in ["UsrMatchedProject", "UsrCreatedProject", "UsrMatchedOpportunity", "UsrCreatedOpportunity"]:
    field(col, "UsrLinkedRecordsIsland", r - 1, 1, r)
    r += 1

# ---------------------------------------------------------------- tab 1: Project
flex_column("UsrProjectTabBody", "GeneralInfoTabContainer", 0,
            {"column": 1, "row": 1, "colSpan": 2, "rowSpan": 1})

b = panel("UsrPanelProject", "UsrProjectTabBody", 0, "Project")
field("UsrProjectName", b, 0, 1, 1)
field("UsrProjectType", b, 1, 2, 1)
field("UsrProjectCategory", b, 2, 1, 2)
field("UsrSpecificationStatus", b, 3, 2, 2)
field("UsrProjectTypeText", b, 4, 1, 3)
field("UsrStageText", b, 5, 2, 3)
field("UsrProductPackage", b, 6, 1, 4)
field("UsrSalesRegion", b, 7, 2, 4)
field("UsrProjectDescription", b, 8, 1, 5, colspan=2, rowspan=3)

b = panel("UsrPanelLocation", "UsrProjectTabBody", 1, "Location")
field("UsrProjectAddress", b, 0, 1, 1, colspan=2)
field("UsrCityText", b, 1, 1, 2)
field("UsrStateText", b, 2, 2, 2)
field("UsrCountryText", b, 3, 1, 3)
field("UsrProjectCountry", b, 4, 2, 3)

b = panel("UsrPanelValue", "UsrProjectTabBody", 2, "Value and timeline")
field("UsrEstimatedProjectValue", b, 0, 1, 1)
field("UsrNumberOfUnits", b, 1, 2, 1)
field("UsrExpectedOrderValue", b, 2, 1, 2)
field("UsrExpectedCloseDate", b, 3, 2, 2)
field("UsrBidDate", b, 4, 1, 3)
field("UsrStartDate", b, 5, 2, 3)
field("UsrCompletionDate", b, 6, 1, 4)
field("UsrCompletionYear", b, 7, 2, 4)
field("UsrDeliveryYear", b, 8, 1, 5)

b = panel("UsrPanelSourceText", "UsrProjectTabBody", 3, "Source text", expanded=False)
field("UsrEmailActivity", b, 0, 1, 1)
field("UsrRawText", b, 1, 1, 2, colspan=2, rowspan=4)

# ---------------------------------------------------------------- tab 2: Stakeholders
resources["UsrStakeholderTab"] = "Stakeholders"
ops.append({"operation": "insert", "name": "TabContainer_qe34u35", "values": {
    "type": "crt.TabContainer", "items": [],
    "caption": "$Resources.Strings.UsrStakeholderTab",
    "icon": "contact-group-icon", "iconPosition": "left-icon", "visible": True,
}, "parentName": "Tabs", "propertyName": "items", "index": 1})
flex_column("UsrStakeholderTabBody", "TabContainer_qe34u35", 0)

b = panel("UsrPanelKeyContact", "UsrStakeholderTabBody", 0, "Key contact")
field("UsrKeyContactName", b, 0, 1, 1)
field("UsrKeyContactRoleText", b, 1, 2, 1)
field("UsrKeyContactEmail", b, 2, 1, 2)

b = panel("UsrPanelCompanies", "UsrStakeholderTabBody", 1, "Companies")
label("UsrCompaniesHint", b, 0,
      "Names on the left come from the source feed. Select the matching CRM account on the right once it is confirmed",
      {"column": 1, "row": 1, "colSpan": 2, "rowSpan": 1})
field("UsrDeveloperName", b, 1, 1, 2)
field("UsrDeveloperAccount", b, 2, 2, 2)
field("UsrBuilderName", b, 3, 1, 3)
field("UsrBuilderAccount", b, 4, 2, 3)
field("UsrArchitectName", b, 5, 1, 4)
field("UsrArchitectAccount", b, 6, 2, 4)
field("UsrDealerName", b, 7, 1, 5)
field("UsrDealerAccount", b, 8, 2, 5)
field("UsrContractorName", b, 9, 1, 6)
field("UsrCompetitorPresence", b, 10, 1, 7, colspan=2, rowspan=2)

# ---------------------------------------------------------------- tab 3: AI verdict
resources["UsrVerdictTab"] = "AI verdict"
ops.append({"operation": "insert", "name": "TabContainer_15ah0vf", "values": {
    "type": "crt.TabContainer", "items": [],
    "caption": "$Resources.Strings.UsrVerdictTab",
    "icon": "copilot-action-button-icon", "iconPosition": "left-icon", "visible": True,
}, "parentName": "Tabs", "propertyName": "items", "index": 2})
flex_column("UsrVerdictTabBody", "TabContainer_15ah0vf", 0)
label("UsrVerdictHint", "UsrVerdictTabBody", 0,
      "Everything in this tab is produced by the AI agent and is read-only. Review it, then set the intake status")

b = panel("UsrPanelRecommendation", "UsrVerdictTabBody", 1, "Recommendation")
field("UsrRecommendedAction", b, 0, 1, 1)
field("UsrAnalysisStatus", b, 1, 2, 1)
field("UsrAnalysisDate", b, 2, 1, 2)
field("UsrAnalysisCompleted", b, 3, 2, 2)
field("UsrProjectMatchConfidence", b, 4, 1, 3)
field("UsrOpportunityMatchConfidence", b, 5, 2, 3)
field("UsrMatchReason", b, 6, 1, 4, colspan=2, rowspan=2)

b = panel("UsrPanelScoring", "UsrVerdictTabBody", 2, "Scoring")
field("UsrProbabilityOfConversion", b, 0, 1, 1)
field("UsrBuyingCentreHealth", b, 1, 2, 1)
field("UsrProjectClassification", b, 2, 1, 2)
field("UsrServiceRiskLevel", b, 3, 2, 2)
field("UsrExpectedMargin", b, 4, 1, 3)
field("UsrQualificationExplanation", b, 5, 1, 4, colspan=2, rowspan=2)

b = panel("UsrPanelReviewNotes", "UsrVerdictTabBody", 3, "Review notes")
field("UsrAISummary", b, 0, 1, 1, colspan=2, rowspan=2)
field("UsrRecommendationDetails", b, 1, 1, 3, colspan=2, rowspan=2)
field("UsrMissingInformation", b, 2, 1, 5, colspan=2, rowspan=2)
field("UsrMissingStakeholders", b, 3, 1, 7, colspan=2, rowspan=2)

b = panel("UsrPanelOutcome", "UsrVerdictTabBody", 4, "Outcome", expanded=False)
field("UsrCanCreateProject", b, 0, 1, 1)
field("UsrCanCreateOpportunity", b, 1, 2, 1)
field("UsrCanUpdateOpportunity", b, 2, 1, 2)
field("UsrAgentError", b, 3, 1, 3, colspan=2, rowspan=2)

# ---------------------------------------------------------------- sanity: every column placed once
placed = {op["name"] for op in ops if op["operation"] == "insert"}
missing = [c for c in F if elem_name(c) not in placed]
assert not missing, missing

view_model = [{"operation": "merge", "path": [], "values": {"attributes": attrs}}]
model = [
    {"operation": "merge", "path": [], "values": {"primaryDataSourceName": "PDS"}},
    {"operation": "merge", "path": ["dataSources"], "values": {
        "PDS": {"type": "crt.EntityDataSource", "config": {"entitySchemaName": ENTITY}, "scope": "page"}}},
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

(ROOT / "scripts" / "intake-form-v2.js").write_text(body, encoding="utf-8")
(ROOT / "scripts" / "intake-form-v2-resources.json").write_text(
    json.dumps(resources, indent=2, ensure_ascii=False), encoding="utf-8")
print("ops:", len(ops), "attributes:", len(attrs), "resources:", len(resources))
print("body bytes:", len(body.encode("utf-8")))
