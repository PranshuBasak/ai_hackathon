define("UsrADProjectIntelligence_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
  {
    "operation": "remove",
    "name": "RequeueQueueItemButton"
  },
  {
    "operation": "remove",
    "name": "PostponeQueueItemButton"
  },
  {
    "operation": "merge",
    "name": "Tabs",
    "values": {
      "styleType": "default",
      "mode": "tab",
      "bodyBackgroundColor": "primary-contrast-500",
      "selectedTabTitleColor": "auto",
      "tabTitleColor": "auto",
      "underlineSelectedTabColor": "auto",
      "headerBackgroundColor": "auto",
      "allowToggleClose": true
    }
  },
  {
    "operation": "merge",
    "name": "GeneralInfoTab",
    "values": {
      "caption": "$Resources.Strings.UsrSourceTab",
      "icon": "work-icon",
      "iconPosition": "left-icon"
    }
  },
  {
    "operation": "merge",
    "name": "GeneralInfoTabContainer",
    "values": {
      "gap": {
        "columnGap": "large",
        "rowGap": "none"
      },
      "visible": true,
      "padding": {
        "top": "none",
        "right": "none",
        "bottom": "none",
        "left": "none"
      },
      "color": "transparent",
      "borderRadius": "none",
      "alignItems": "stretch"
    }
  },
  {
    "operation": "insert",
    "name": "Input_UsrName",
    "values": {
      "type": "crt.Input",
      "label": "$Resources.Strings.PDS_UsrName",
      "control": "$PDS_UsrName",
      "labelPosition": "above",
      "readonly": true,
      "visible": true,
      "layoutConfig": {
        "column": 1,
        "row": 1,
        "colSpan": 1,
        "rowSpan": 1
      },
      "multiline": false,
      "tooltip": "$Resources.Strings.UsrTip_UsrName"
    },
    "parentName": "SideAreaProfileContainer",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "ComboBox_UsrStatus",
    "values": {
      "type": "crt.ComboBox",
      "label": "$Resources.Strings.PDS_UsrStatus",
      "control": "$PDS_UsrStatus",
      "labelPosition": "above",
      "readonly": false,
      "visible": true,
      "layoutConfig": {
        "column": 1,
        "row": 2,
        "colSpan": 1,
        "rowSpan": 1
      },
      "listActions": [],
      "controlActions": [],
      "tooltip": "$Resources.Strings.UsrTip_UsrStatus"
    },
    "parentName": "SideAreaProfileContainer",
    "propertyName": "items",
    "index": 1
  },
  {
    "operation": "insert",
    "name": "ComboBox_UsrExternalSource",
    "values": {
      "type": "crt.ComboBox",
      "label": "$Resources.Strings.PDS_UsrExternalSource",
      "control": "$PDS_UsrExternalSource",
      "labelPosition": "above",
      "readonly": false,
      "visible": true,
      "layoutConfig": {
        "column": 1,
        "row": 3,
        "colSpan": 1,
        "rowSpan": 1
      },
      "listActions": [],
      "controlActions": [],
      "tooltip": "$Resources.Strings.UsrTip_UsrExternalSource"
    },
    "parentName": "SideAreaProfileContainer",
    "propertyName": "items",
    "index": 2
  },
  {
    "operation": "insert",
    "name": "Input_UsrExternalProjectId",
    "values": {
      "type": "crt.Input",
      "label": "$Resources.Strings.PDS_UsrExternalProjectId",
      "control": "$PDS_UsrExternalProjectId",
      "labelPosition": "above",
      "readonly": false,
      "visible": true,
      "layoutConfig": {
        "column": 1,
        "row": 4,
        "colSpan": 1,
        "rowSpan": 1
      },
      "multiline": false,
      "tooltip": "$Resources.Strings.UsrTip_UsrExternalProjectId",
      "placeholder": "$Resources.Strings.UsrPh_UsrExternalProjectId"
    },
    "parentName": "SideAreaProfileContainer",
    "propertyName": "items",
    "index": 3
  },
  {
    "operation": "insert",
    "name": "DateTimePicker_UsrReceivedOn",
    "values": {
      "type": "crt.DateTimePicker",
      "label": "$Resources.Strings.PDS_UsrReceivedOn",
      "control": "$PDS_UsrReceivedOn",
      "labelPosition": "above",
      "readonly": true,
      "visible": true,
      "layoutConfig": {
        "column": 1,
        "row": 5,
        "colSpan": 1,
        "rowSpan": 1
      },
      "pickerType": "datetime",
      "tooltip": "$Resources.Strings.UsrTip_UsrReceivedOn"
    },
    "parentName": "SideAreaProfileContainer",
    "propertyName": "items",
    "index": 4
  },
  {
    "operation": "insert",
    "name": "ComboBox_UsrReviewedBy",
    "values": {
      "type": "crt.ComboBox",
      "label": "$Resources.Strings.PDS_UsrReviewedBy",
      "control": "$PDS_UsrReviewedBy",
      "labelPosition": "above",
      "readonly": false,
      "visible": true,
      "layoutConfig": {
        "column": 1,
        "row": 6,
        "colSpan": 1,
        "rowSpan": 1
      },
      "listActions": [],
      "controlActions": [],
      "tooltip": "$Resources.Strings.UsrTip_UsrReviewedBy"
    },
    "parentName": "SideAreaProfileContainer",
    "propertyName": "items",
    "index": 5
  },
  {
    "operation": "insert",
    "name": "ComboBox_UsrPriorityClassification",
    "values": {
      "type": "crt.ComboBox",
      "label": "$Resources.Strings.PDS_UsrPriorityClassification",
      "control": "$PDS_UsrPriorityClassification",
      "labelPosition": "above",
      "readonly": true,
      "visible": true,
      "layoutConfig": {
        "column": 1,
        "row": 7,
        "colSpan": 1,
        "rowSpan": 1
      },
      "listActions": [],
      "controlActions": [],
      "tooltip": "$Resources.Strings.UsrTip_UsrPriorityClassification"
    },
    "parentName": "SideAreaProfileContainer",
    "propertyName": "items",
    "index": 6
  },
  {
    "operation": "insert",
    "name": "NumberInput_UsrQualificationScore",
    "values": {
      "type": "crt.NumberInput",
      "label": "$Resources.Strings.PDS_UsrQualificationScore",
      "control": "$PDS_UsrQualificationScore",
      "labelPosition": "above",
      "readonly": true,
      "visible": true,
      "layoutConfig": {
        "column": 1,
        "row": 8,
        "colSpan": 1,
        "rowSpan": 1
      },
      "format": {
        "decimalPrecision": 2
      },
      "tooltip": "$Resources.Strings.UsrTip_UsrQualificationScore"
    },
    "parentName": "SideAreaProfileContainer",
    "propertyName": "items",
    "index": 7
  },
  {
    "operation": "insert",
    "name": "UsrLinkedRecordsIsland",
    "values": {
      "type": "crt.GridContainer",
      "columns": [
        "minmax(64px, 1fr)"
      ],
      "rows": "minmax(max-content, 32px)",
      "gap": {
        "columnGap": "large",
        "rowGap": "none"
      },
      "color": "primary",
      "borderRadius": "medium",
      "padding": {
        "top": "medium",
        "right": "large",
        "bottom": "medium",
        "left": "large"
      },
      "items": [],
      "fitContent": true,
      "visible": true
    },
    "parentName": "SideContainer",
    "propertyName": "items",
    "index": 1
  },
  {
    "operation": "insert",
    "name": "UsrLinkedRecordsLabel",
    "values": {
      "type": "crt.Label",
      "caption": "#ResourceString(UsrLinkedRecordsLabel_caption)#",
      "labelType": "headline-3",
      "labelThickness": "semibold",
      "labelEllipsis": false,
      "labelColor": "auto",
      "labelBackgroundColor": "transparent",
      "labelTextAlign": "start",
      "headingLevel": "h3",
      "visible": true,
      "layoutConfig": {
        "column": 1,
        "row": 1,
        "colSpan": 1,
        "rowSpan": 1
      }
    },
    "parentName": "UsrLinkedRecordsIsland",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "ComboBox_UsrMatchedProject",
    "values": {
      "type": "crt.ComboBox",
      "label": "$Resources.Strings.PDS_UsrMatchedProject",
      "control": "$PDS_UsrMatchedProject",
      "labelPosition": "above",
      "readonly": true,
      "visible": true,
      "layoutConfig": {
        "column": 1,
        "row": 2,
        "colSpan": 1,
        "rowSpan": 1
      },
      "listActions": [],
      "controlActions": [],
      "tooltip": "$Resources.Strings.UsrTip_UsrMatchedProject"
    },
    "parentName": "UsrLinkedRecordsIsland",
    "propertyName": "items",
    "index": 1
  },
  {
    "operation": "insert",
    "name": "ComboBox_UsrCreatedProject",
    "values": {
      "type": "crt.ComboBox",
      "label": "$Resources.Strings.PDS_UsrCreatedProject",
      "control": "$PDS_UsrCreatedProject",
      "labelPosition": "above",
      "readonly": true,
      "visible": true,
      "layoutConfig": {
        "column": 1,
        "row": 3,
        "colSpan": 1,
        "rowSpan": 1
      },
      "listActions": [],
      "controlActions": [],
      "tooltip": "$Resources.Strings.UsrTip_UsrCreatedProject"
    },
    "parentName": "UsrLinkedRecordsIsland",
    "propertyName": "items",
    "index": 2
  },
  {
    "operation": "insert",
    "name": "ComboBox_UsrMatchedOpportunity",
    "values": {
      "type": "crt.ComboBox",
      "label": "$Resources.Strings.PDS_UsrMatchedOpportunity",
      "control": "$PDS_UsrMatchedOpportunity",
      "labelPosition": "above",
      "readonly": true,
      "visible": true,
      "layoutConfig": {
        "column": 1,
        "row": 4,
        "colSpan": 1,
        "rowSpan": 1
      },
      "listActions": [],
      "controlActions": [],
      "tooltip": "$Resources.Strings.UsrTip_UsrMatchedOpportunity"
    },
    "parentName": "UsrLinkedRecordsIsland",
    "propertyName": "items",
    "index": 3
  },
  {
    "operation": "insert",
    "name": "ComboBox_UsrCreatedOpportunity",
    "values": {
      "type": "crt.ComboBox",
      "label": "$Resources.Strings.PDS_UsrCreatedOpportunity",
      "control": "$PDS_UsrCreatedOpportunity",
      "labelPosition": "above",
      "readonly": true,
      "visible": true,
      "layoutConfig": {
        "column": 1,
        "row": 5,
        "colSpan": 1,
        "rowSpan": 1
      },
      "listActions": [],
      "controlActions": [],
      "tooltip": "$Resources.Strings.UsrTip_UsrCreatedOpportunity"
    },
    "parentName": "UsrLinkedRecordsIsland",
    "propertyName": "items",
    "index": 4
  },
  {
    "operation": "insert",
    "name": "UsrProjectTabBody",
    "values": {
      "type": "crt.FlexContainer",
      "direction": "column",
      "gap": "medium",
      "alignItems": "stretch",
      "justifyContent": "start",
      "wrap": "nowrap",
      "color": "transparent",
      "borderRadius": "none",
      "padding": {
        "top": "none",
        "right": "none",
        "bottom": "none",
        "left": "none"
      },
      "items": [],
      "fitContent": true,
      "visible": true,
      "layoutConfig": {
        "column": 1,
        "row": 1,
        "colSpan": 2,
        "rowSpan": 1
      }
    },
    "parentName": "GeneralInfoTabContainer",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "UsrPanelProject",
    "values": {
      "type": "crt.ExpansionPanel",
      "title": "#ResourceString(UsrPanelProject_title)#",
      "expanded": true,
      "toggleType": "default",
      "togglePosition": "before",
      "titleWidth": 20,
      "fullWidthHeader": true,
      "fitContent": true,
      "padding": {
        "top": "small",
        "bottom": "small",
        "left": "none",
        "right": "none"
      },
      "items": [],
      "tools": [],
      "visible": true
    },
    "parentName": "UsrProjectTabBody",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "UsrPanelProject_body",
    "values": {
      "type": "crt.GridContainer",
      "columns": [
        "minmax(64px, 1fr)",
        "minmax(64px, 1fr)"
      ],
      "rows": "minmax(max-content, 32px)",
      "gap": {
        "columnGap": "large",
        "rowGap": "none"
      },
      "alignItems": "stretch",
      "color": "transparent",
      "borderRadius": "none",
      "padding": {
        "top": "none",
        "right": "none",
        "bottom": "none",
        "left": "none"
      },
      "items": [],
      "fitContent": true,
      "visible": true
    },
    "parentName": "UsrPanelProject",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "Input_UsrProjectName",
    "values": {
      "type": "crt.Input",
      "label": "$Resources.Strings.PDS_UsrProjectName",
      "control": "$PDS_UsrProjectName",
      "labelPosition": "above",
      "readonly": false,
      "visible": true,
      "layoutConfig": {
        "column": 1,
        "row": 1,
        "colSpan": 1,
        "rowSpan": 1
      },
      "multiline": false,
      "placeholder": "$Resources.Strings.UsrPh_UsrProjectName"
    },
    "parentName": "UsrPanelProject_body",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "ComboBox_UsrProjectType",
    "values": {
      "type": "crt.ComboBox",
      "label": "$Resources.Strings.PDS_UsrProjectType",
      "control": "$PDS_UsrProjectType",
      "labelPosition": "above",
      "readonly": false,
      "visible": true,
      "layoutConfig": {
        "column": 2,
        "row": 1,
        "colSpan": 1,
        "rowSpan": 1
      },
      "listActions": [],
      "controlActions": []
    },
    "parentName": "UsrPanelProject_body",
    "propertyName": "items",
    "index": 1
  },
  {
    "operation": "insert",
    "name": "ComboBox_UsrProjectCategory",
    "values": {
      "type": "crt.ComboBox",
      "label": "$Resources.Strings.PDS_UsrProjectCategory",
      "control": "$PDS_UsrProjectCategory",
      "labelPosition": "above",
      "readonly": false,
      "visible": true,
      "layoutConfig": {
        "column": 1,
        "row": 2,
        "colSpan": 1,
        "rowSpan": 1
      },
      "listActions": [],
      "controlActions": []
    },
    "parentName": "UsrPanelProject_body",
    "propertyName": "items",
    "index": 2
  },
  {
    "operation": "insert",
    "name": "ComboBox_UsrSpecificationStatus",
    "values": {
      "type": "crt.ComboBox",
      "label": "$Resources.Strings.PDS_UsrSpecificationStatus",
      "control": "$PDS_UsrSpecificationStatus",
      "labelPosition": "above",
      "readonly": false,
      "visible": true,
      "layoutConfig": {
        "column": 2,
        "row": 2,
        "colSpan": 1,
        "rowSpan": 1
      },
      "listActions": [],
      "controlActions": []
    },
    "parentName": "UsrPanelProject_body",
    "propertyName": "items",
    "index": 3
  },
  {
    "operation": "insert",
    "name": "Input_UsrProjectTypeText",
    "values": {
      "type": "crt.Input",
      "label": "$Resources.Strings.PDS_UsrProjectTypeText",
      "control": "$PDS_UsrProjectTypeText",
      "labelPosition": "above",
      "readonly": false,
      "visible": true,
      "layoutConfig": {
        "column": 1,
        "row": 3,
        "colSpan": 1,
        "rowSpan": 1
      },
      "multiline": false,
      "placeholder": "$Resources.Strings.UsrPh_UsrProjectTypeText"
    },
    "parentName": "UsrPanelProject_body",
    "propertyName": "items",
    "index": 4
  },
  {
    "operation": "insert",
    "name": "Input_UsrStageText",
    "values": {
      "type": "crt.Input",
      "label": "$Resources.Strings.PDS_UsrStageText",
      "control": "$PDS_UsrStageText",
      "labelPosition": "above",
      "readonly": false,
      "visible": true,
      "layoutConfig": {
        "column": 2,
        "row": 3,
        "colSpan": 1,
        "rowSpan": 1
      },
      "multiline": false,
      "placeholder": "$Resources.Strings.UsrPh_UsrStageText"
    },
    "parentName": "UsrPanelProject_body",
    "propertyName": "items",
    "index": 5
  },
  {
    "operation": "insert",
    "name": "Input_UsrProductPackage",
    "values": {
      "type": "crt.Input",
      "label": "$Resources.Strings.PDS_UsrProductPackage",
      "control": "$PDS_UsrProductPackage",
      "labelPosition": "above",
      "readonly": false,
      "visible": true,
      "layoutConfig": {
        "column": 1,
        "row": 4,
        "colSpan": 1,
        "rowSpan": 1
      },
      "multiline": false,
      "placeholder": "$Resources.Strings.UsrPh_UsrProductPackage"
    },
    "parentName": "UsrPanelProject_body",
    "propertyName": "items",
    "index": 6
  },
  {
    "operation": "insert",
    "name": "Input_UsrSalesRegion",
    "values": {
      "type": "crt.Input",
      "label": "$Resources.Strings.PDS_UsrSalesRegion",
      "control": "$PDS_UsrSalesRegion",
      "labelPosition": "above",
      "readonly": false,
      "visible": true,
      "layoutConfig": {
        "column": 2,
        "row": 4,
        "colSpan": 1,
        "rowSpan": 1
      },
      "multiline": false,
      "placeholder": "$Resources.Strings.UsrPh_UsrSalesRegion"
    },
    "parentName": "UsrPanelProject_body",
    "propertyName": "items",
    "index": 7
  },
  {
    "operation": "insert",
    "name": "RichTextEditor_UsrProjectDescription",
    "values": {
      "type": "crt.RichTextEditor",
      "label": "$Resources.Strings.PDS_UsrProjectDescription",
      "control": "$PDS_UsrProjectDescription",
      "labelPosition": "above",
      "readonly": false,
      "visible": true,
      "layoutConfig": {
        "column": 1,
        "row": 5,
        "colSpan": 2,
        "rowSpan": 3
      },
      "editorType": "inline",
      "alwaysShowToolbar": false,
      "maxContentHeight": "320px",
      "placeholder": "$Resources.Strings.UsrPh_UsrProjectDescription"
    },
    "parentName": "UsrPanelProject_body",
    "propertyName": "items",
    "index": 8
  },
  {
    "operation": "insert",
    "name": "UsrPanelLocation",
    "values": {
      "type": "crt.ExpansionPanel",
      "title": "#ResourceString(UsrPanelLocation_title)#",
      "expanded": true,
      "toggleType": "default",
      "togglePosition": "before",
      "titleWidth": 20,
      "fullWidthHeader": true,
      "fitContent": true,
      "padding": {
        "top": "small",
        "bottom": "small",
        "left": "none",
        "right": "none"
      },
      "items": [],
      "tools": [],
      "visible": true
    },
    "parentName": "UsrProjectTabBody",
    "propertyName": "items",
    "index": 1
  },
  {
    "operation": "insert",
    "name": "UsrPanelLocation_body",
    "values": {
      "type": "crt.GridContainer",
      "columns": [
        "minmax(64px, 1fr)",
        "minmax(64px, 1fr)"
      ],
      "rows": "minmax(max-content, 32px)",
      "gap": {
        "columnGap": "large",
        "rowGap": "none"
      },
      "alignItems": "stretch",
      "color": "transparent",
      "borderRadius": "none",
      "padding": {
        "top": "none",
        "right": "none",
        "bottom": "none",
        "left": "none"
      },
      "items": [],
      "fitContent": true,
      "visible": true
    },
    "parentName": "UsrPanelLocation",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "Input_UsrProjectAddress",
    "values": {
      "type": "crt.Input",
      "label": "$Resources.Strings.PDS_UsrProjectAddress",
      "control": "$PDS_UsrProjectAddress",
      "labelPosition": "above",
      "readonly": false,
      "visible": true,
      "layoutConfig": {
        "column": 1,
        "row": 1,
        "colSpan": 2,
        "rowSpan": 1
      },
      "multiline": false,
      "placeholder": "$Resources.Strings.UsrPh_UsrProjectAddress"
    },
    "parentName": "UsrPanelLocation_body",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "Input_UsrCityText",
    "values": {
      "type": "crt.Input",
      "label": "$Resources.Strings.PDS_UsrCityText",
      "control": "$PDS_UsrCityText",
      "labelPosition": "above",
      "readonly": false,
      "visible": true,
      "layoutConfig": {
        "column": 1,
        "row": 2,
        "colSpan": 1,
        "rowSpan": 1
      },
      "multiline": false,
      "placeholder": "$Resources.Strings.UsrPh_UsrCityText"
    },
    "parentName": "UsrPanelLocation_body",
    "propertyName": "items",
    "index": 1
  },
  {
    "operation": "insert",
    "name": "Input_UsrStateText",
    "values": {
      "type": "crt.Input",
      "label": "$Resources.Strings.PDS_UsrStateText",
      "control": "$PDS_UsrStateText",
      "labelPosition": "above",
      "readonly": false,
      "visible": true,
      "layoutConfig": {
        "column": 2,
        "row": 2,
        "colSpan": 1,
        "rowSpan": 1
      },
      "multiline": false,
      "placeholder": "$Resources.Strings.UsrPh_UsrStateText"
    },
    "parentName": "UsrPanelLocation_body",
    "propertyName": "items",
    "index": 2
  },
  {
    "operation": "insert",
    "name": "Input_UsrCountryText",
    "values": {
      "type": "crt.Input",
      "label": "$Resources.Strings.PDS_UsrCountryText",
      "control": "$PDS_UsrCountryText",
      "labelPosition": "above",
      "readonly": false,
      "visible": true,
      "layoutConfig": {
        "column": 1,
        "row": 3,
        "colSpan": 1,
        "rowSpan": 1
      },
      "multiline": false,
      "placeholder": "$Resources.Strings.UsrPh_UsrCountryText"
    },
    "parentName": "UsrPanelLocation_body",
    "propertyName": "items",
    "index": 3
  },
  {
    "operation": "insert",
    "name": "ComboBox_UsrProjectCountry",
    "values": {
      "type": "crt.ComboBox",
      "label": "$Resources.Strings.PDS_UsrProjectCountry",
      "control": "$PDS_UsrProjectCountry",
      "labelPosition": "above",
      "readonly": false,
      "visible": true,
      "layoutConfig": {
        "column": 2,
        "row": 3,
        "colSpan": 1,
        "rowSpan": 1
      },
      "listActions": [],
      "controlActions": [],
      "tooltip": "$Resources.Strings.UsrTip_UsrProjectCountry"
    },
    "parentName": "UsrPanelLocation_body",
    "propertyName": "items",
    "index": 4
  },
  {
    "operation": "insert",
    "name": "UsrPanelValue",
    "values": {
      "type": "crt.ExpansionPanel",
      "title": "#ResourceString(UsrPanelValue_title)#",
      "expanded": true,
      "toggleType": "default",
      "togglePosition": "before",
      "titleWidth": 20,
      "fullWidthHeader": true,
      "fitContent": true,
      "padding": {
        "top": "small",
        "bottom": "small",
        "left": "none",
        "right": "none"
      },
      "items": [],
      "tools": [],
      "visible": true
    },
    "parentName": "UsrProjectTabBody",
    "propertyName": "items",
    "index": 2
  },
  {
    "operation": "insert",
    "name": "UsrPanelValue_body",
    "values": {
      "type": "crt.GridContainer",
      "columns": [
        "minmax(64px, 1fr)",
        "minmax(64px, 1fr)"
      ],
      "rows": "minmax(max-content, 32px)",
      "gap": {
        "columnGap": "large",
        "rowGap": "none"
      },
      "alignItems": "stretch",
      "color": "transparent",
      "borderRadius": "none",
      "padding": {
        "top": "none",
        "right": "none",
        "bottom": "none",
        "left": "none"
      },
      "items": [],
      "fitContent": true,
      "visible": true
    },
    "parentName": "UsrPanelValue",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "NumberInput_UsrEstimatedProjectValue",
    "values": {
      "type": "crt.NumberInput",
      "label": "$Resources.Strings.PDS_UsrEstimatedProjectValue",
      "control": "$PDS_UsrEstimatedProjectValue",
      "labelPosition": "above",
      "readonly": false,
      "visible": true,
      "layoutConfig": {
        "column": 1,
        "row": 1,
        "colSpan": 1,
        "rowSpan": 1
      },
      "format": {
        "decimalPrecision": 2
      },
      "tooltip": "$Resources.Strings.UsrTip_UsrEstimatedProjectValue",
      "placeholder": "$Resources.Strings.UsrPh_UsrEstimatedProjectValue"
    },
    "parentName": "UsrPanelValue_body",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "NumberInput_UsrNumberOfUnits",
    "values": {
      "type": "crt.NumberInput",
      "label": "$Resources.Strings.PDS_UsrNumberOfUnits",
      "control": "$PDS_UsrNumberOfUnits",
      "labelPosition": "above",
      "readonly": false,
      "visible": true,
      "layoutConfig": {
        "column": 2,
        "row": 1,
        "colSpan": 1,
        "rowSpan": 1
      },
      "format": {
        "decimalPrecision": 0
      },
      "placeholder": "$Resources.Strings.UsrPh_UsrNumberOfUnits"
    },
    "parentName": "UsrPanelValue_body",
    "propertyName": "items",
    "index": 1
  },
  {
    "operation": "insert",
    "name": "NumberInput_UsrExpectedOrderValue",
    "values": {
      "type": "crt.NumberInput",
      "label": "$Resources.Strings.PDS_UsrExpectedOrderValue",
      "control": "$PDS_UsrExpectedOrderValue",
      "labelPosition": "above",
      "readonly": false,
      "visible": true,
      "layoutConfig": {
        "column": 1,
        "row": 2,
        "colSpan": 1,
        "rowSpan": 1
      },
      "format": {
        "decimalPrecision": 2
      },
      "tooltip": "$Resources.Strings.UsrTip_UsrExpectedOrderValue",
      "placeholder": "$Resources.Strings.UsrPh_UsrExpectedOrderValue"
    },
    "parentName": "UsrPanelValue_body",
    "propertyName": "items",
    "index": 2
  },
  {
    "operation": "insert",
    "name": "DateTimePicker_UsrExpectedCloseDate",
    "values": {
      "type": "crt.DateTimePicker",
      "label": "$Resources.Strings.PDS_UsrExpectedCloseDate",
      "control": "$PDS_UsrExpectedCloseDate",
      "labelPosition": "above",
      "readonly": false,
      "visible": true,
      "layoutConfig": {
        "column": 2,
        "row": 2,
        "colSpan": 1,
        "rowSpan": 1
      },
      "pickerType": "date"
    },
    "parentName": "UsrPanelValue_body",
    "propertyName": "items",
    "index": 3
  },
  {
    "operation": "insert",
    "name": "DateTimePicker_UsrBidDate",
    "values": {
      "type": "crt.DateTimePicker",
      "label": "$Resources.Strings.PDS_UsrBidDate",
      "control": "$PDS_UsrBidDate",
      "labelPosition": "above",
      "readonly": false,
      "visible": true,
      "layoutConfig": {
        "column": 1,
        "row": 3,
        "colSpan": 1,
        "rowSpan": 1
      },
      "pickerType": "date"
    },
    "parentName": "UsrPanelValue_body",
    "propertyName": "items",
    "index": 4
  },
  {
    "operation": "insert",
    "name": "DateTimePicker_UsrStartDate",
    "values": {
      "type": "crt.DateTimePicker",
      "label": "$Resources.Strings.PDS_UsrStartDate",
      "control": "$PDS_UsrStartDate",
      "labelPosition": "above",
      "readonly": false,
      "visible": true,
      "layoutConfig": {
        "column": 2,
        "row": 3,
        "colSpan": 1,
        "rowSpan": 1
      },
      "pickerType": "date"
    },
    "parentName": "UsrPanelValue_body",
    "propertyName": "items",
    "index": 5
  },
  {
    "operation": "insert",
    "name": "DateTimePicker_UsrCompletionDate",
    "values": {
      "type": "crt.DateTimePicker",
      "label": "$Resources.Strings.PDS_UsrCompletionDate",
      "control": "$PDS_UsrCompletionDate",
      "labelPosition": "above",
      "readonly": false,
      "visible": true,
      "layoutConfig": {
        "column": 1,
        "row": 4,
        "colSpan": 1,
        "rowSpan": 1
      },
      "pickerType": "date"
    },
    "parentName": "UsrPanelValue_body",
    "propertyName": "items",
    "index": 6
  },
  {
    "operation": "insert",
    "name": "NumberInput_UsrCompletionYear",
    "values": {
      "type": "crt.NumberInput",
      "label": "$Resources.Strings.PDS_UsrCompletionYear",
      "control": "$PDS_UsrCompletionYear",
      "labelPosition": "above",
      "readonly": false,
      "visible": true,
      "layoutConfig": {
        "column": 2,
        "row": 4,
        "colSpan": 1,
        "rowSpan": 1
      },
      "format": {
        "decimalPrecision": 0
      },
      "placeholder": "$Resources.Strings.UsrPh_UsrCompletionYear"
    },
    "parentName": "UsrPanelValue_body",
    "propertyName": "items",
    "index": 7
  },
  {
    "operation": "insert",
    "name": "NumberInput_UsrDeliveryYear",
    "values": {
      "type": "crt.NumberInput",
      "label": "$Resources.Strings.PDS_UsrDeliveryYear",
      "control": "$PDS_UsrDeliveryYear",
      "labelPosition": "above",
      "readonly": false,
      "visible": true,
      "layoutConfig": {
        "column": 1,
        "row": 5,
        "colSpan": 1,
        "rowSpan": 1
      },
      "format": {
        "decimalPrecision": 0
      },
      "placeholder": "$Resources.Strings.UsrPh_UsrDeliveryYear"
    },
    "parentName": "UsrPanelValue_body",
    "propertyName": "items",
    "index": 8
  },
  {
    "operation": "insert",
    "name": "UsrPanelSourceText",
    "values": {
      "type": "crt.ExpansionPanel",
      "title": "#ResourceString(UsrPanelSourceText_title)#",
      "expanded": false,
      "toggleType": "default",
      "togglePosition": "before",
      "titleWidth": 20,
      "fullWidthHeader": true,
      "fitContent": true,
      "padding": {
        "top": "small",
        "bottom": "small",
        "left": "none",
        "right": "none"
      },
      "items": [],
      "tools": [],
      "visible": true
    },
    "parentName": "UsrProjectTabBody",
    "propertyName": "items",
    "index": 3
  },
  {
    "operation": "insert",
    "name": "UsrPanelSourceText_body",
    "values": {
      "type": "crt.GridContainer",
      "columns": [
        "minmax(64px, 1fr)",
        "minmax(64px, 1fr)"
      ],
      "rows": "minmax(max-content, 32px)",
      "gap": {
        "columnGap": "large",
        "rowGap": "none"
      },
      "alignItems": "stretch",
      "color": "transparent",
      "borderRadius": "none",
      "padding": {
        "top": "none",
        "right": "none",
        "bottom": "none",
        "left": "none"
      },
      "items": [],
      "fitContent": true,
      "visible": true
    },
    "parentName": "UsrPanelSourceText",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "ComboBox_UsrEmailActivity",
    "values": {
      "type": "crt.ComboBox",
      "label": "$Resources.Strings.PDS_UsrEmailActivity",
      "control": "$PDS_UsrEmailActivity",
      "labelPosition": "above",
      "readonly": false,
      "visible": true,
      "layoutConfig": {
        "column": 1,
        "row": 1,
        "colSpan": 1,
        "rowSpan": 1
      },
      "listActions": [],
      "controlActions": []
    },
    "parentName": "UsrPanelSourceText_body",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "Input_UsrRawText",
    "values": {
      "type": "crt.Input",
      "label": "$Resources.Strings.PDS_UsrRawText",
      "control": "$PDS_UsrRawText",
      "labelPosition": "above",
      "readonly": false,
      "visible": true,
      "layoutConfig": {
        "column": 1,
        "row": 2,
        "colSpan": 2,
        "rowSpan": 4
      },
      "multiline": true,
      "placeholder": "$Resources.Strings.UsrPh_UsrRawText"
    },
    "parentName": "UsrPanelSourceText_body",
    "propertyName": "items",
    "index": 1
  },
  {
    "operation": "insert",
    "name": "TabContainer_qe34u35",
    "values": {
      "type": "crt.TabContainer",
      "items": [],
      "caption": "$Resources.Strings.UsrStakeholderTab",
      "icon": "contact-group-icon",
      "iconPosition": "left-icon",
      "visible": true
    },
    "parentName": "Tabs",
    "propertyName": "items",
    "index": 1
  },
  {
    "operation": "insert",
    "name": "UsrStakeholderTabBody",
    "values": {
      "type": "crt.FlexContainer",
      "direction": "column",
      "gap": "medium",
      "alignItems": "stretch",
      "justifyContent": "start",
      "wrap": "nowrap",
      "color": "transparent",
      "borderRadius": "none",
      "padding": {
        "top": "none",
        "right": "none",
        "bottom": "none",
        "left": "none"
      },
      "items": [],
      "fitContent": true,
      "visible": true
    },
    "parentName": "TabContainer_qe34u35",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "UsrPanelKeyContact",
    "values": {
      "type": "crt.ExpansionPanel",
      "title": "#ResourceString(UsrPanelKeyContact_title)#",
      "expanded": true,
      "toggleType": "default",
      "togglePosition": "before",
      "titleWidth": 20,
      "fullWidthHeader": true,
      "fitContent": true,
      "padding": {
        "top": "small",
        "bottom": "small",
        "left": "none",
        "right": "none"
      },
      "items": [],
      "tools": [],
      "visible": true
    },
    "parentName": "UsrStakeholderTabBody",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "UsrPanelKeyContact_body",
    "values": {
      "type": "crt.GridContainer",
      "columns": [
        "minmax(64px, 1fr)",
        "minmax(64px, 1fr)"
      ],
      "rows": "minmax(max-content, 32px)",
      "gap": {
        "columnGap": "large",
        "rowGap": "none"
      },
      "alignItems": "stretch",
      "color": "transparent",
      "borderRadius": "none",
      "padding": {
        "top": "none",
        "right": "none",
        "bottom": "none",
        "left": "none"
      },
      "items": [],
      "fitContent": true,
      "visible": true
    },
    "parentName": "UsrPanelKeyContact",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "Input_UsrKeyContactName",
    "values": {
      "type": "crt.Input",
      "label": "$Resources.Strings.PDS_UsrKeyContactName",
      "control": "$PDS_UsrKeyContactName",
      "labelPosition": "above",
      "readonly": false,
      "visible": true,
      "layoutConfig": {
        "column": 1,
        "row": 1,
        "colSpan": 1,
        "rowSpan": 1
      },
      "multiline": false,
      "placeholder": "$Resources.Strings.UsrPh_UsrKeyContactName"
    },
    "parentName": "UsrPanelKeyContact_body",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "Input_UsrKeyContactRoleText",
    "values": {
      "type": "crt.Input",
      "label": "$Resources.Strings.PDS_UsrKeyContactRoleText",
      "control": "$PDS_UsrKeyContactRoleText",
      "labelPosition": "above",
      "readonly": false,
      "visible": true,
      "layoutConfig": {
        "column": 2,
        "row": 1,
        "colSpan": 1,
        "rowSpan": 1
      },
      "multiline": false,
      "placeholder": "$Resources.Strings.UsrPh_UsrKeyContactRoleText"
    },
    "parentName": "UsrPanelKeyContact_body",
    "propertyName": "items",
    "index": 1
  },
  {
    "operation": "insert",
    "name": "EmailInput_UsrKeyContactEmail",
    "values": {
      "type": "crt.EmailInput",
      "label": "$Resources.Strings.PDS_UsrKeyContactEmail",
      "control": "$PDS_UsrKeyContactEmail",
      "labelPosition": "above",
      "readonly": false,
      "visible": true,
      "layoutConfig": {
        "column": 1,
        "row": 2,
        "colSpan": 1,
        "rowSpan": 1
      },
      "placeholder": "$Resources.Strings.UsrPh_UsrKeyContactEmail"
    },
    "parentName": "UsrPanelKeyContact_body",
    "propertyName": "items",
    "index": 2
  },
  {
    "operation": "insert",
    "name": "UsrPanelCompanies",
    "values": {
      "type": "crt.ExpansionPanel",
      "title": "#ResourceString(UsrPanelCompanies_title)#",
      "expanded": true,
      "toggleType": "default",
      "togglePosition": "before",
      "titleWidth": 20,
      "fullWidthHeader": true,
      "fitContent": true,
      "padding": {
        "top": "small",
        "bottom": "small",
        "left": "none",
        "right": "none"
      },
      "items": [],
      "tools": [],
      "visible": true
    },
    "parentName": "UsrStakeholderTabBody",
    "propertyName": "items",
    "index": 1
  },
  {
    "operation": "insert",
    "name": "UsrPanelCompanies_body",
    "values": {
      "type": "crt.GridContainer",
      "columns": [
        "minmax(64px, 1fr)",
        "minmax(64px, 1fr)"
      ],
      "rows": "minmax(max-content, 32px)",
      "gap": {
        "columnGap": "large",
        "rowGap": "none"
      },
      "alignItems": "stretch",
      "color": "transparent",
      "borderRadius": "none",
      "padding": {
        "top": "none",
        "right": "none",
        "bottom": "none",
        "left": "none"
      },
      "items": [],
      "fitContent": true,
      "visible": true
    },
    "parentName": "UsrPanelCompanies",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "UsrCompaniesHint",
    "values": {
      "type": "crt.Label",
      "caption": "#ResourceString(UsrCompaniesHint_caption)#",
      "labelType": "body",
      "labelThickness": "default",
      "labelEllipsis": false,
      "labelColor": "auto",
      "labelBackgroundColor": "transparent",
      "labelTextAlign": "start",
      "headingLevel": "label",
      "visible": true,
      "layoutConfig": {
        "column": 1,
        "row": 1,
        "colSpan": 2,
        "rowSpan": 1
      }
    },
    "parentName": "UsrPanelCompanies_body",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "Input_UsrDeveloperName",
    "values": {
      "type": "crt.Input",
      "label": "$Resources.Strings.PDS_UsrDeveloperName",
      "control": "$PDS_UsrDeveloperName",
      "labelPosition": "above",
      "readonly": false,
      "visible": true,
      "layoutConfig": {
        "column": 1,
        "row": 2,
        "colSpan": 1,
        "rowSpan": 1
      },
      "multiline": false,
      "placeholder": "$Resources.Strings.UsrPh_UsrDeveloperName"
    },
    "parentName": "UsrPanelCompanies_body",
    "propertyName": "items",
    "index": 1
  },
  {
    "operation": "insert",
    "name": "ComboBox_UsrDeveloperAccount",
    "values": {
      "type": "crt.ComboBox",
      "label": "$Resources.Strings.PDS_UsrDeveloperAccount",
      "control": "$PDS_UsrDeveloperAccount",
      "labelPosition": "above",
      "readonly": false,
      "visible": true,
      "layoutConfig": {
        "column": 2,
        "row": 2,
        "colSpan": 1,
        "rowSpan": 1
      },
      "listActions": [],
      "controlActions": []
    },
    "parentName": "UsrPanelCompanies_body",
    "propertyName": "items",
    "index": 2
  },
  {
    "operation": "insert",
    "name": "Input_UsrBuilderName",
    "values": {
      "type": "crt.Input",
      "label": "$Resources.Strings.PDS_UsrBuilderName",
      "control": "$PDS_UsrBuilderName",
      "labelPosition": "above",
      "readonly": false,
      "visible": true,
      "layoutConfig": {
        "column": 1,
        "row": 3,
        "colSpan": 1,
        "rowSpan": 1
      },
      "multiline": false,
      "placeholder": "$Resources.Strings.UsrPh_UsrBuilderName"
    },
    "parentName": "UsrPanelCompanies_body",
    "propertyName": "items",
    "index": 3
  },
  {
    "operation": "insert",
    "name": "ComboBox_UsrBuilderAccount",
    "values": {
      "type": "crt.ComboBox",
      "label": "$Resources.Strings.PDS_UsrBuilderAccount",
      "control": "$PDS_UsrBuilderAccount",
      "labelPosition": "above",
      "readonly": false,
      "visible": true,
      "layoutConfig": {
        "column": 2,
        "row": 3,
        "colSpan": 1,
        "rowSpan": 1
      },
      "listActions": [],
      "controlActions": []
    },
    "parentName": "UsrPanelCompanies_body",
    "propertyName": "items",
    "index": 4
  },
  {
    "operation": "insert",
    "name": "Input_UsrArchitectName",
    "values": {
      "type": "crt.Input",
      "label": "$Resources.Strings.PDS_UsrArchitectName",
      "control": "$PDS_UsrArchitectName",
      "labelPosition": "above",
      "readonly": false,
      "visible": true,
      "layoutConfig": {
        "column": 1,
        "row": 4,
        "colSpan": 1,
        "rowSpan": 1
      },
      "multiline": false,
      "placeholder": "$Resources.Strings.UsrPh_UsrArchitectName"
    },
    "parentName": "UsrPanelCompanies_body",
    "propertyName": "items",
    "index": 5
  },
  {
    "operation": "insert",
    "name": "ComboBox_UsrArchitectAccount",
    "values": {
      "type": "crt.ComboBox",
      "label": "$Resources.Strings.PDS_UsrArchitectAccount",
      "control": "$PDS_UsrArchitectAccount",
      "labelPosition": "above",
      "readonly": false,
      "visible": true,
      "layoutConfig": {
        "column": 2,
        "row": 4,
        "colSpan": 1,
        "rowSpan": 1
      },
      "listActions": [],
      "controlActions": []
    },
    "parentName": "UsrPanelCompanies_body",
    "propertyName": "items",
    "index": 6
  },
  {
    "operation": "insert",
    "name": "Input_UsrDealerName",
    "values": {
      "type": "crt.Input",
      "label": "$Resources.Strings.PDS_UsrDealerName",
      "control": "$PDS_UsrDealerName",
      "labelPosition": "above",
      "readonly": false,
      "visible": true,
      "layoutConfig": {
        "column": 1,
        "row": 5,
        "colSpan": 1,
        "rowSpan": 1
      },
      "multiline": false,
      "placeholder": "$Resources.Strings.UsrPh_UsrDealerName"
    },
    "parentName": "UsrPanelCompanies_body",
    "propertyName": "items",
    "index": 7
  },
  {
    "operation": "insert",
    "name": "ComboBox_UsrDealerAccount",
    "values": {
      "type": "crt.ComboBox",
      "label": "$Resources.Strings.PDS_UsrDealerAccount",
      "control": "$PDS_UsrDealerAccount",
      "labelPosition": "above",
      "readonly": false,
      "visible": true,
      "layoutConfig": {
        "column": 2,
        "row": 5,
        "colSpan": 1,
        "rowSpan": 1
      },
      "listActions": [],
      "controlActions": []
    },
    "parentName": "UsrPanelCompanies_body",
    "propertyName": "items",
    "index": 8
  },
  {
    "operation": "insert",
    "name": "Input_UsrContractorName",
    "values": {
      "type": "crt.Input",
      "label": "$Resources.Strings.PDS_UsrContractorName",
      "control": "$PDS_UsrContractorName",
      "labelPosition": "above",
      "readonly": false,
      "visible": true,
      "layoutConfig": {
        "column": 1,
        "row": 6,
        "colSpan": 1,
        "rowSpan": 1
      },
      "multiline": false,
      "placeholder": "$Resources.Strings.UsrPh_UsrContractorName"
    },
    "parentName": "UsrPanelCompanies_body",
    "propertyName": "items",
    "index": 9
  },
  {
    "operation": "insert",
    "name": "Input_UsrCompetitorPresence",
    "values": {
      "type": "crt.Input",
      "label": "$Resources.Strings.PDS_UsrCompetitorPresence",
      "control": "$PDS_UsrCompetitorPresence",
      "labelPosition": "above",
      "readonly": false,
      "visible": true,
      "layoutConfig": {
        "column": 1,
        "row": 7,
        "colSpan": 2,
        "rowSpan": 2
      },
      "multiline": true,
      "placeholder": "$Resources.Strings.UsrPh_UsrCompetitorPresence"
    },
    "parentName": "UsrPanelCompanies_body",
    "propertyName": "items",
    "index": 10
  },
  {
    "operation": "insert",
    "name": "TabContainer_15ah0vf",
    "values": {
      "type": "crt.TabContainer",
      "items": [],
      "caption": "$Resources.Strings.UsrVerdictTab",
      "icon": "copilot-action-button-icon",
      "iconPosition": "left-icon",
      "visible": true
    },
    "parentName": "Tabs",
    "propertyName": "items",
    "index": 2
  },
  {
    "operation": "insert",
    "name": "UsrVerdictTabBody",
    "values": {
      "type": "crt.FlexContainer",
      "direction": "column",
      "gap": "medium",
      "alignItems": "stretch",
      "justifyContent": "start",
      "wrap": "nowrap",
      "color": "transparent",
      "borderRadius": "none",
      "padding": {
        "top": "none",
        "right": "none",
        "bottom": "none",
        "left": "none"
      },
      "items": [],
      "fitContent": true,
      "visible": true
    },
    "parentName": "TabContainer_15ah0vf",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "UsrVerdictHint",
    "values": {
      "type": "crt.Label",
      "caption": "#ResourceString(UsrVerdictHint_caption)#",
      "labelType": "body",
      "labelThickness": "default",
      "labelEllipsis": false,
      "labelColor": "auto",
      "labelBackgroundColor": "transparent",
      "labelTextAlign": "start",
      "headingLevel": "label",
      "visible": true
    },
    "parentName": "UsrVerdictTabBody",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "UsrPanelRecommendation",
    "values": {
      "type": "crt.ExpansionPanel",
      "title": "#ResourceString(UsrPanelRecommendation_title)#",
      "expanded": true,
      "toggleType": "default",
      "togglePosition": "before",
      "titleWidth": 20,
      "fullWidthHeader": true,
      "fitContent": true,
      "padding": {
        "top": "small",
        "bottom": "small",
        "left": "none",
        "right": "none"
      },
      "items": [],
      "tools": [],
      "visible": true
    },
    "parentName": "UsrVerdictTabBody",
    "propertyName": "items",
    "index": 1
  },
  {
    "operation": "insert",
    "name": "UsrPanelRecommendation_body",
    "values": {
      "type": "crt.GridContainer",
      "columns": [
        "minmax(64px, 1fr)",
        "minmax(64px, 1fr)"
      ],
      "rows": "minmax(max-content, 32px)",
      "gap": {
        "columnGap": "large",
        "rowGap": "none"
      },
      "alignItems": "stretch",
      "color": "transparent",
      "borderRadius": "none",
      "padding": {
        "top": "none",
        "right": "none",
        "bottom": "none",
        "left": "none"
      },
      "items": [],
      "fitContent": true,
      "visible": true
    },
    "parentName": "UsrPanelRecommendation",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "ComboBox_UsrRecommendedAction",
    "values": {
      "type": "crt.ComboBox",
      "label": "$Resources.Strings.PDS_UsrRecommendedAction",
      "control": "$PDS_UsrRecommendedAction",
      "labelPosition": "above",
      "readonly": true,
      "visible": true,
      "layoutConfig": {
        "column": 1,
        "row": 1,
        "colSpan": 1,
        "rowSpan": 1
      },
      "listActions": [],
      "controlActions": [],
      "tooltip": "$Resources.Strings.UsrTip_UsrRecommendedAction"
    },
    "parentName": "UsrPanelRecommendation_body",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "ComboBox_UsrAnalysisStatus",
    "values": {
      "type": "crt.ComboBox",
      "label": "$Resources.Strings.PDS_UsrAnalysisStatus",
      "control": "$PDS_UsrAnalysisStatus",
      "labelPosition": "above",
      "readonly": true,
      "visible": true,
      "layoutConfig": {
        "column": 2,
        "row": 1,
        "colSpan": 1,
        "rowSpan": 1
      },
      "listActions": [],
      "controlActions": [],
      "tooltip": "$Resources.Strings.UsrTip_UsrAnalysisStatus"
    },
    "parentName": "UsrPanelRecommendation_body",
    "propertyName": "items",
    "index": 1
  },
  {
    "operation": "insert",
    "name": "DateTimePicker_UsrAnalysisDate",
    "values": {
      "type": "crt.DateTimePicker",
      "label": "$Resources.Strings.PDS_UsrAnalysisDate",
      "control": "$PDS_UsrAnalysisDate",
      "labelPosition": "above",
      "readonly": true,
      "visible": true,
      "layoutConfig": {
        "column": 1,
        "row": 2,
        "colSpan": 1,
        "rowSpan": 1
      },
      "pickerType": "datetime",
      "tooltip": "$Resources.Strings.UsrTip_UsrAnalysisDate"
    },
    "parentName": "UsrPanelRecommendation_body",
    "propertyName": "items",
    "index": 2
  },
  {
    "operation": "insert",
    "name": "Checkbox_UsrAnalysisCompleted",
    "values": {
      "type": "crt.Checkbox",
      "label": "$Resources.Strings.PDS_UsrAnalysisCompleted",
      "control": "$PDS_UsrAnalysisCompleted",
      "labelPosition": "above",
      "readonly": true,
      "visible": true,
      "layoutConfig": {
        "column": 2,
        "row": 2,
        "colSpan": 1,
        "rowSpan": 1
      },
      "tooltip": "$Resources.Strings.UsrTip_UsrAnalysisCompleted"
    },
    "parentName": "UsrPanelRecommendation_body",
    "propertyName": "items",
    "index": 3
  },
  {
    "operation": "insert",
    "name": "NumberInput_UsrProjectMatchConfidence",
    "values": {
      "type": "crt.NumberInput",
      "label": "$Resources.Strings.PDS_UsrProjectMatchConfidence",
      "control": "$PDS_UsrProjectMatchConfidence",
      "labelPosition": "above",
      "readonly": true,
      "visible": true,
      "layoutConfig": {
        "column": 1,
        "row": 3,
        "colSpan": 1,
        "rowSpan": 1
      },
      "format": {
        "decimalPrecision": 2
      },
      "tooltip": "$Resources.Strings.UsrTip_UsrProjectMatchConfidence"
    },
    "parentName": "UsrPanelRecommendation_body",
    "propertyName": "items",
    "index": 4
  },
  {
    "operation": "insert",
    "name": "NumberInput_UsrOpportunityMatchConfidence",
    "values": {
      "type": "crt.NumberInput",
      "label": "$Resources.Strings.PDS_UsrOpportunityMatchConfidence",
      "control": "$PDS_UsrOpportunityMatchConfidence",
      "labelPosition": "above",
      "readonly": true,
      "visible": true,
      "layoutConfig": {
        "column": 2,
        "row": 3,
        "colSpan": 1,
        "rowSpan": 1
      },
      "format": {
        "decimalPrecision": 2
      },
      "tooltip": "$Resources.Strings.UsrTip_UsrOpportunityMatchConfidence"
    },
    "parentName": "UsrPanelRecommendation_body",
    "propertyName": "items",
    "index": 5
  },
  {
    "operation": "insert",
    "name": "Input_UsrMatchReason",
    "values": {
      "type": "crt.Input",
      "label": "$Resources.Strings.PDS_UsrMatchReason",
      "control": "$PDS_UsrMatchReason",
      "labelPosition": "above",
      "readonly": true,
      "visible": true,
      "layoutConfig": {
        "column": 1,
        "row": 4,
        "colSpan": 2,
        "rowSpan": 2
      },
      "multiline": true,
      "tooltip": "$Resources.Strings.UsrTip_UsrMatchReason"
    },
    "parentName": "UsrPanelRecommendation_body",
    "propertyName": "items",
    "index": 6
  },
  {
    "operation": "insert",
    "name": "UsrPanelScoring",
    "values": {
      "type": "crt.ExpansionPanel",
      "title": "#ResourceString(UsrPanelScoring_title)#",
      "expanded": true,
      "toggleType": "default",
      "togglePosition": "before",
      "titleWidth": 20,
      "fullWidthHeader": true,
      "fitContent": true,
      "padding": {
        "top": "small",
        "bottom": "small",
        "left": "none",
        "right": "none"
      },
      "items": [],
      "tools": [],
      "visible": true
    },
    "parentName": "UsrVerdictTabBody",
    "propertyName": "items",
    "index": 2
  },
  {
    "operation": "insert",
    "name": "UsrPanelScoring_body",
    "values": {
      "type": "crt.GridContainer",
      "columns": [
        "minmax(64px, 1fr)",
        "minmax(64px, 1fr)"
      ],
      "rows": "minmax(max-content, 32px)",
      "gap": {
        "columnGap": "large",
        "rowGap": "none"
      },
      "alignItems": "stretch",
      "color": "transparent",
      "borderRadius": "none",
      "padding": {
        "top": "none",
        "right": "none",
        "bottom": "none",
        "left": "none"
      },
      "items": [],
      "fitContent": true,
      "visible": true
    },
    "parentName": "UsrPanelScoring",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "NumberInput_UsrProbabilityOfConversion",
    "values": {
      "type": "crt.NumberInput",
      "label": "$Resources.Strings.PDS_UsrProbabilityOfConversion",
      "control": "$PDS_UsrProbabilityOfConversion",
      "labelPosition": "above",
      "readonly": true,
      "visible": true,
      "layoutConfig": {
        "column": 1,
        "row": 1,
        "colSpan": 1,
        "rowSpan": 1
      },
      "format": {
        "decimalPrecision": 2
      },
      "tooltip": "$Resources.Strings.UsrTip_UsrProbabilityOfConversion"
    },
    "parentName": "UsrPanelScoring_body",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "NumberInput_UsrBuyingCentreHealth",
    "values": {
      "type": "crt.NumberInput",
      "label": "$Resources.Strings.PDS_UsrBuyingCentreHealth",
      "control": "$PDS_UsrBuyingCentreHealth",
      "labelPosition": "above",
      "readonly": true,
      "visible": true,
      "layoutConfig": {
        "column": 2,
        "row": 1,
        "colSpan": 1,
        "rowSpan": 1
      },
      "format": {
        "decimalPrecision": 2
      },
      "tooltip": "$Resources.Strings.UsrTip_UsrBuyingCentreHealth"
    },
    "parentName": "UsrPanelScoring_body",
    "propertyName": "items",
    "index": 1
  },
  {
    "operation": "insert",
    "name": "ComboBox_UsrProjectClassification",
    "values": {
      "type": "crt.ComboBox",
      "label": "$Resources.Strings.PDS_UsrProjectClassification",
      "control": "$PDS_UsrProjectClassification",
      "labelPosition": "above",
      "readonly": true,
      "visible": true,
      "layoutConfig": {
        "column": 1,
        "row": 2,
        "colSpan": 1,
        "rowSpan": 1
      },
      "listActions": [],
      "controlActions": [],
      "tooltip": "$Resources.Strings.UsrTip_UsrProjectClassification"
    },
    "parentName": "UsrPanelScoring_body",
    "propertyName": "items",
    "index": 2
  },
  {
    "operation": "insert",
    "name": "ComboBox_UsrServiceRiskLevel",
    "values": {
      "type": "crt.ComboBox",
      "label": "$Resources.Strings.PDS_UsrServiceRiskLevel",
      "control": "$PDS_UsrServiceRiskLevel",
      "labelPosition": "above",
      "readonly": true,
      "visible": true,
      "layoutConfig": {
        "column": 2,
        "row": 2,
        "colSpan": 1,
        "rowSpan": 1
      },
      "listActions": [],
      "controlActions": [],
      "tooltip": "$Resources.Strings.UsrTip_UsrServiceRiskLevel"
    },
    "parentName": "UsrPanelScoring_body",
    "propertyName": "items",
    "index": 3
  },
  {
    "operation": "insert",
    "name": "NumberInput_UsrExpectedMargin",
    "values": {
      "type": "crt.NumberInput",
      "label": "$Resources.Strings.PDS_UsrExpectedMargin",
      "control": "$PDS_UsrExpectedMargin",
      "labelPosition": "above",
      "readonly": true,
      "visible": true,
      "layoutConfig": {
        "column": 1,
        "row": 3,
        "colSpan": 1,
        "rowSpan": 1
      },
      "format": {
        "decimalPrecision": 2
      },
      "tooltip": "$Resources.Strings.UsrTip_UsrExpectedMargin"
    },
    "parentName": "UsrPanelScoring_body",
    "propertyName": "items",
    "index": 4
  },
  {
    "operation": "insert",
    "name": "Input_UsrQualificationExplanation",
    "values": {
      "type": "crt.Input",
      "label": "$Resources.Strings.PDS_UsrQualificationExplanation",
      "control": "$PDS_UsrQualificationExplanation",
      "labelPosition": "above",
      "readonly": true,
      "visible": true,
      "layoutConfig": {
        "column": 1,
        "row": 4,
        "colSpan": 2,
        "rowSpan": 2
      },
      "multiline": true,
      "tooltip": "$Resources.Strings.UsrTip_UsrQualificationExplanation"
    },
    "parentName": "UsrPanelScoring_body",
    "propertyName": "items",
    "index": 5
  },
  {
    "operation": "insert",
    "name": "UsrPanelReviewNotes",
    "values": {
      "type": "crt.ExpansionPanel",
      "title": "#ResourceString(UsrPanelReviewNotes_title)#",
      "expanded": true,
      "toggleType": "default",
      "togglePosition": "before",
      "titleWidth": 20,
      "fullWidthHeader": true,
      "fitContent": true,
      "padding": {
        "top": "small",
        "bottom": "small",
        "left": "none",
        "right": "none"
      },
      "items": [],
      "tools": [],
      "visible": true
    },
    "parentName": "UsrVerdictTabBody",
    "propertyName": "items",
    "index": 3
  },
  {
    "operation": "insert",
    "name": "UsrPanelReviewNotes_body",
    "values": {
      "type": "crt.GridContainer",
      "columns": [
        "minmax(64px, 1fr)",
        "minmax(64px, 1fr)"
      ],
      "rows": "minmax(max-content, 32px)",
      "gap": {
        "columnGap": "large",
        "rowGap": "none"
      },
      "alignItems": "stretch",
      "color": "transparent",
      "borderRadius": "none",
      "padding": {
        "top": "none",
        "right": "none",
        "bottom": "none",
        "left": "none"
      },
      "items": [],
      "fitContent": true,
      "visible": true
    },
    "parentName": "UsrPanelReviewNotes",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "Input_UsrAISummary",
    "values": {
      "type": "crt.Input",
      "label": "$Resources.Strings.PDS_UsrAISummary",
      "control": "$PDS_UsrAISummary",
      "labelPosition": "above",
      "readonly": true,
      "visible": true,
      "layoutConfig": {
        "column": 1,
        "row": 1,
        "colSpan": 2,
        "rowSpan": 2
      },
      "multiline": true,
      "tooltip": "$Resources.Strings.UsrTip_UsrAISummary"
    },
    "parentName": "UsrPanelReviewNotes_body",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "Input_UsrRecommendationDetails",
    "values": {
      "type": "crt.Input",
      "label": "$Resources.Strings.PDS_UsrRecommendationDetails",
      "control": "$PDS_UsrRecommendationDetails",
      "labelPosition": "above",
      "readonly": true,
      "visible": true,
      "layoutConfig": {
        "column": 1,
        "row": 3,
        "colSpan": 2,
        "rowSpan": 2
      },
      "multiline": true,
      "tooltip": "$Resources.Strings.UsrTip_UsrRecommendationDetails"
    },
    "parentName": "UsrPanelReviewNotes_body",
    "propertyName": "items",
    "index": 1
  },
  {
    "operation": "insert",
    "name": "Input_UsrMissingInformation",
    "values": {
      "type": "crt.Input",
      "label": "$Resources.Strings.PDS_UsrMissingInformation",
      "control": "$PDS_UsrMissingInformation",
      "labelPosition": "above",
      "readonly": true,
      "visible": true,
      "layoutConfig": {
        "column": 1,
        "row": 5,
        "colSpan": 2,
        "rowSpan": 2
      },
      "multiline": true,
      "tooltip": "$Resources.Strings.UsrTip_UsrMissingInformation"
    },
    "parentName": "UsrPanelReviewNotes_body",
    "propertyName": "items",
    "index": 2
  },
  {
    "operation": "insert",
    "name": "Input_UsrMissingStakeholders",
    "values": {
      "type": "crt.Input",
      "label": "$Resources.Strings.PDS_UsrMissingStakeholders",
      "control": "$PDS_UsrMissingStakeholders",
      "labelPosition": "above",
      "readonly": true,
      "visible": true,
      "layoutConfig": {
        "column": 1,
        "row": 7,
        "colSpan": 2,
        "rowSpan": 2
      },
      "multiline": true,
      "tooltip": "$Resources.Strings.UsrTip_UsrMissingStakeholders"
    },
    "parentName": "UsrPanelReviewNotes_body",
    "propertyName": "items",
    "index": 3
  },
  {
    "operation": "insert",
    "name": "UsrPanelOutcome",
    "values": {
      "type": "crt.ExpansionPanel",
      "title": "#ResourceString(UsrPanelOutcome_title)#",
      "expanded": false,
      "toggleType": "default",
      "togglePosition": "before",
      "titleWidth": 20,
      "fullWidthHeader": true,
      "fitContent": true,
      "padding": {
        "top": "small",
        "bottom": "small",
        "left": "none",
        "right": "none"
      },
      "items": [],
      "tools": [],
      "visible": true
    },
    "parentName": "UsrVerdictTabBody",
    "propertyName": "items",
    "index": 4
  },
  {
    "operation": "insert",
    "name": "UsrPanelOutcome_body",
    "values": {
      "type": "crt.GridContainer",
      "columns": [
        "minmax(64px, 1fr)",
        "minmax(64px, 1fr)"
      ],
      "rows": "minmax(max-content, 32px)",
      "gap": {
        "columnGap": "large",
        "rowGap": "none"
      },
      "alignItems": "stretch",
      "color": "transparent",
      "borderRadius": "none",
      "padding": {
        "top": "none",
        "right": "none",
        "bottom": "none",
        "left": "none"
      },
      "items": [],
      "fitContent": true,
      "visible": true
    },
    "parentName": "UsrPanelOutcome",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "Checkbox_UsrCanCreateProject",
    "values": {
      "type": "crt.Checkbox",
      "label": "$Resources.Strings.PDS_UsrCanCreateProject",
      "control": "$PDS_UsrCanCreateProject",
      "labelPosition": "above",
      "readonly": true,
      "visible": true,
      "layoutConfig": {
        "column": 1,
        "row": 1,
        "colSpan": 1,
        "rowSpan": 1
      },
      "tooltip": "$Resources.Strings.UsrTip_UsrCanCreateProject"
    },
    "parentName": "UsrPanelOutcome_body",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "Checkbox_UsrCanCreateOpportunity",
    "values": {
      "type": "crt.Checkbox",
      "label": "$Resources.Strings.PDS_UsrCanCreateOpportunity",
      "control": "$PDS_UsrCanCreateOpportunity",
      "labelPosition": "above",
      "readonly": true,
      "visible": true,
      "layoutConfig": {
        "column": 2,
        "row": 1,
        "colSpan": 1,
        "rowSpan": 1
      },
      "tooltip": "$Resources.Strings.UsrTip_UsrCanCreateOpportunity"
    },
    "parentName": "UsrPanelOutcome_body",
    "propertyName": "items",
    "index": 1
  },
  {
    "operation": "insert",
    "name": "Checkbox_UsrCanUpdateOpportunity",
    "values": {
      "type": "crt.Checkbox",
      "label": "$Resources.Strings.PDS_UsrCanUpdateOpportunity",
      "control": "$PDS_UsrCanUpdateOpportunity",
      "labelPosition": "above",
      "readonly": true,
      "visible": true,
      "layoutConfig": {
        "column": 1,
        "row": 2,
        "colSpan": 1,
        "rowSpan": 1
      },
      "tooltip": "$Resources.Strings.UsrTip_UsrCanUpdateOpportunity"
    },
    "parentName": "UsrPanelOutcome_body",
    "propertyName": "items",
    "index": 2
  },
  {
    "operation": "insert",
    "name": "Input_UsrAgentError",
    "values": {
      "type": "crt.Input",
      "label": "$Resources.Strings.PDS_UsrAgentError",
      "control": "$PDS_UsrAgentError",
      "labelPosition": "above",
      "readonly": true,
      "visible": true,
      "layoutConfig": {
        "column": 1,
        "row": 3,
        "colSpan": 2,
        "rowSpan": 2
      },
      "multiline": true,
      "tooltip": "$Resources.Strings.UsrTip_UsrAgentError"
    },
    "parentName": "UsrPanelOutcome_body",
    "propertyName": "items",
    "index": 3
  }
]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
  {
    "operation": "merge",
    "path": [],
    "values": {
      "attributes": {
        "PDS_UsrName": {
          "modelConfig": {
            "path": "PDS.UsrName"
          }
        },
        "PDS_UsrStatus": {
          "modelConfig": {
            "path": "PDS.UsrStatus"
          }
        },
        "PDS_UsrStatus_List": {
          "isCollection": true,
          "modelConfig": {
            "sortingConfig": {
              "default": [
                {
                  "columnName": "Name",
                  "direction": "asc"
                }
              ]
            }
          }
        },
        "PDS_UsrExternalSource": {
          "modelConfig": {
            "path": "PDS.UsrExternalSource"
          }
        },
        "PDS_UsrExternalSource_List": {
          "isCollection": true,
          "modelConfig": {
            "sortingConfig": {
              "default": [
                {
                  "columnName": "Name",
                  "direction": "asc"
                }
              ]
            }
          }
        },
        "PDS_UsrExternalProjectId": {
          "modelConfig": {
            "path": "PDS.UsrExternalProjectId"
          }
        },
        "PDS_UsrReceivedOn": {
          "modelConfig": {
            "path": "PDS.UsrReceivedOn"
          }
        },
        "PDS_UsrReviewedBy": {
          "modelConfig": {
            "path": "PDS.UsrReviewedBy"
          }
        },
        "PDS_UsrReviewedBy_List": {
          "isCollection": true,
          "modelConfig": {
            "sortingConfig": {
              "default": [
                {
                  "columnName": "Name",
                  "direction": "asc"
                }
              ]
            }
          }
        },
        "PDS_UsrPriorityClassification": {
          "modelConfig": {
            "path": "PDS.UsrPriorityClassification"
          }
        },
        "PDS_UsrPriorityClassification_List": {
          "isCollection": true,
          "modelConfig": {
            "sortingConfig": {
              "default": [
                {
                  "columnName": "Name",
                  "direction": "asc"
                }
              ]
            }
          }
        },
        "PDS_UsrQualificationScore": {
          "modelConfig": {
            "path": "PDS.UsrQualificationScore"
          }
        },
        "PDS_UsrMatchedProject": {
          "modelConfig": {
            "path": "PDS.UsrMatchedProject"
          }
        },
        "PDS_UsrMatchedProject_List": {
          "isCollection": true,
          "modelConfig": {
            "sortingConfig": {
              "default": [
                {
                  "columnName": "Name",
                  "direction": "asc"
                }
              ]
            }
          }
        },
        "PDS_UsrCreatedProject": {
          "modelConfig": {
            "path": "PDS.UsrCreatedProject"
          }
        },
        "PDS_UsrCreatedProject_List": {
          "isCollection": true,
          "modelConfig": {
            "sortingConfig": {
              "default": [
                {
                  "columnName": "Name",
                  "direction": "asc"
                }
              ]
            }
          }
        },
        "PDS_UsrMatchedOpportunity": {
          "modelConfig": {
            "path": "PDS.UsrMatchedOpportunity"
          }
        },
        "PDS_UsrMatchedOpportunity_List": {
          "isCollection": true,
          "modelConfig": {
            "sortingConfig": {
              "default": [
                {
                  "columnName": "Name",
                  "direction": "asc"
                }
              ]
            }
          }
        },
        "PDS_UsrCreatedOpportunity": {
          "modelConfig": {
            "path": "PDS.UsrCreatedOpportunity"
          }
        },
        "PDS_UsrCreatedOpportunity_List": {
          "isCollection": true,
          "modelConfig": {
            "sortingConfig": {
              "default": [
                {
                  "columnName": "Name",
                  "direction": "asc"
                }
              ]
            }
          }
        },
        "PDS_UsrProjectName": {
          "modelConfig": {
            "path": "PDS.UsrProjectName"
          }
        },
        "PDS_UsrProjectType": {
          "modelConfig": {
            "path": "PDS.UsrProjectType"
          }
        },
        "PDS_UsrProjectType_List": {
          "isCollection": true,
          "modelConfig": {
            "sortingConfig": {
              "default": [
                {
                  "columnName": "Name",
                  "direction": "asc"
                }
              ]
            }
          }
        },
        "PDS_UsrProjectCategory": {
          "modelConfig": {
            "path": "PDS.UsrProjectCategory"
          }
        },
        "PDS_UsrProjectCategory_List": {
          "isCollection": true,
          "modelConfig": {
            "sortingConfig": {
              "default": [
                {
                  "columnName": "Name",
                  "direction": "asc"
                }
              ]
            }
          }
        },
        "PDS_UsrSpecificationStatus": {
          "modelConfig": {
            "path": "PDS.UsrSpecificationStatus"
          }
        },
        "PDS_UsrSpecificationStatus_List": {
          "isCollection": true,
          "modelConfig": {
            "sortingConfig": {
              "default": [
                {
                  "columnName": "Name",
                  "direction": "asc"
                }
              ]
            }
          }
        },
        "PDS_UsrProjectTypeText": {
          "modelConfig": {
            "path": "PDS.UsrProjectTypeText"
          }
        },
        "PDS_UsrStageText": {
          "modelConfig": {
            "path": "PDS.UsrStageText"
          }
        },
        "PDS_UsrProductPackage": {
          "modelConfig": {
            "path": "PDS.UsrProductPackage"
          }
        },
        "PDS_UsrSalesRegion": {
          "modelConfig": {
            "path": "PDS.UsrSalesRegion"
          }
        },
        "PDS_UsrProjectDescription": {
          "modelConfig": {
            "path": "PDS.UsrProjectDescription"
          }
        },
        "PDS_UsrProjectAddress": {
          "modelConfig": {
            "path": "PDS.UsrProjectAddress"
          }
        },
        "PDS_UsrCityText": {
          "modelConfig": {
            "path": "PDS.UsrCityText"
          }
        },
        "PDS_UsrStateText": {
          "modelConfig": {
            "path": "PDS.UsrStateText"
          }
        },
        "PDS_UsrCountryText": {
          "modelConfig": {
            "path": "PDS.UsrCountryText"
          }
        },
        "PDS_UsrProjectCountry": {
          "modelConfig": {
            "path": "PDS.UsrProjectCountry"
          }
        },
        "PDS_UsrProjectCountry_List": {
          "isCollection": true,
          "modelConfig": {
            "sortingConfig": {
              "default": [
                {
                  "columnName": "Name",
                  "direction": "asc"
                }
              ]
            }
          }
        },
        "PDS_UsrEstimatedProjectValue": {
          "modelConfig": {
            "path": "PDS.UsrEstimatedProjectValue"
          }
        },
        "PDS_UsrNumberOfUnits": {
          "modelConfig": {
            "path": "PDS.UsrNumberOfUnits"
          }
        },
        "PDS_UsrExpectedOrderValue": {
          "modelConfig": {
            "path": "PDS.UsrExpectedOrderValue"
          }
        },
        "PDS_UsrExpectedCloseDate": {
          "modelConfig": {
            "path": "PDS.UsrExpectedCloseDate"
          }
        },
        "PDS_UsrBidDate": {
          "modelConfig": {
            "path": "PDS.UsrBidDate"
          }
        },
        "PDS_UsrStartDate": {
          "modelConfig": {
            "path": "PDS.UsrStartDate"
          }
        },
        "PDS_UsrCompletionDate": {
          "modelConfig": {
            "path": "PDS.UsrCompletionDate"
          }
        },
        "PDS_UsrCompletionYear": {
          "modelConfig": {
            "path": "PDS.UsrCompletionYear"
          }
        },
        "PDS_UsrDeliveryYear": {
          "modelConfig": {
            "path": "PDS.UsrDeliveryYear"
          }
        },
        "PDS_UsrEmailActivity": {
          "modelConfig": {
            "path": "PDS.UsrEmailActivity"
          }
        },
        "PDS_UsrEmailActivity_List": {
          "isCollection": true,
          "modelConfig": {
            "sortingConfig": {
              "default": [
                {
                  "columnName": "Name",
                  "direction": "asc"
                }
              ]
            }
          }
        },
        "PDS_UsrRawText": {
          "modelConfig": {
            "path": "PDS.UsrRawText"
          }
        },
        "PDS_UsrKeyContactName": {
          "modelConfig": {
            "path": "PDS.UsrKeyContactName"
          }
        },
        "PDS_UsrKeyContactRoleText": {
          "modelConfig": {
            "path": "PDS.UsrKeyContactRoleText"
          }
        },
        "PDS_UsrKeyContactEmail": {
          "modelConfig": {
            "path": "PDS.UsrKeyContactEmail"
          }
        },
        "PDS_UsrDeveloperName": {
          "modelConfig": {
            "path": "PDS.UsrDeveloperName"
          }
        },
        "PDS_UsrDeveloperAccount": {
          "modelConfig": {
            "path": "PDS.UsrDeveloperAccount"
          }
        },
        "PDS_UsrDeveloperAccount_List": {
          "isCollection": true,
          "modelConfig": {
            "sortingConfig": {
              "default": [
                {
                  "columnName": "Name",
                  "direction": "asc"
                }
              ]
            }
          }
        },
        "PDS_UsrBuilderName": {
          "modelConfig": {
            "path": "PDS.UsrBuilderName"
          }
        },
        "PDS_UsrBuilderAccount": {
          "modelConfig": {
            "path": "PDS.UsrBuilderAccount"
          }
        },
        "PDS_UsrBuilderAccount_List": {
          "isCollection": true,
          "modelConfig": {
            "sortingConfig": {
              "default": [
                {
                  "columnName": "Name",
                  "direction": "asc"
                }
              ]
            }
          }
        },
        "PDS_UsrArchitectName": {
          "modelConfig": {
            "path": "PDS.UsrArchitectName"
          }
        },
        "PDS_UsrArchitectAccount": {
          "modelConfig": {
            "path": "PDS.UsrArchitectAccount"
          }
        },
        "PDS_UsrArchitectAccount_List": {
          "isCollection": true,
          "modelConfig": {
            "sortingConfig": {
              "default": [
                {
                  "columnName": "Name",
                  "direction": "asc"
                }
              ]
            }
          }
        },
        "PDS_UsrDealerName": {
          "modelConfig": {
            "path": "PDS.UsrDealerName"
          }
        },
        "PDS_UsrDealerAccount": {
          "modelConfig": {
            "path": "PDS.UsrDealerAccount"
          }
        },
        "PDS_UsrDealerAccount_List": {
          "isCollection": true,
          "modelConfig": {
            "sortingConfig": {
              "default": [
                {
                  "columnName": "Name",
                  "direction": "asc"
                }
              ]
            }
          }
        },
        "PDS_UsrContractorName": {
          "modelConfig": {
            "path": "PDS.UsrContractorName"
          }
        },
        "PDS_UsrCompetitorPresence": {
          "modelConfig": {
            "path": "PDS.UsrCompetitorPresence"
          }
        },
        "PDS_UsrRecommendedAction": {
          "modelConfig": {
            "path": "PDS.UsrRecommendedAction"
          }
        },
        "PDS_UsrRecommendedAction_List": {
          "isCollection": true,
          "modelConfig": {
            "sortingConfig": {
              "default": [
                {
                  "columnName": "Name",
                  "direction": "asc"
                }
              ]
            }
          }
        },
        "PDS_UsrAnalysisStatus": {
          "modelConfig": {
            "path": "PDS.UsrAnalysisStatus"
          }
        },
        "PDS_UsrAnalysisStatus_List": {
          "isCollection": true,
          "modelConfig": {
            "sortingConfig": {
              "default": [
                {
                  "columnName": "Name",
                  "direction": "asc"
                }
              ]
            }
          }
        },
        "PDS_UsrAnalysisDate": {
          "modelConfig": {
            "path": "PDS.UsrAnalysisDate"
          }
        },
        "PDS_UsrAnalysisCompleted": {
          "modelConfig": {
            "path": "PDS.UsrAnalysisCompleted"
          }
        },
        "PDS_UsrProjectMatchConfidence": {
          "modelConfig": {
            "path": "PDS.UsrProjectMatchConfidence"
          }
        },
        "PDS_UsrOpportunityMatchConfidence": {
          "modelConfig": {
            "path": "PDS.UsrOpportunityMatchConfidence"
          }
        },
        "PDS_UsrMatchReason": {
          "modelConfig": {
            "path": "PDS.UsrMatchReason"
          }
        },
        "PDS_UsrProbabilityOfConversion": {
          "modelConfig": {
            "path": "PDS.UsrProbabilityOfConversion"
          }
        },
        "PDS_UsrBuyingCentreHealth": {
          "modelConfig": {
            "path": "PDS.UsrBuyingCentreHealth"
          }
        },
        "PDS_UsrProjectClassification": {
          "modelConfig": {
            "path": "PDS.UsrProjectClassification"
          }
        },
        "PDS_UsrProjectClassification_List": {
          "isCollection": true,
          "modelConfig": {
            "sortingConfig": {
              "default": [
                {
                  "columnName": "Name",
                  "direction": "asc"
                }
              ]
            }
          }
        },
        "PDS_UsrServiceRiskLevel": {
          "modelConfig": {
            "path": "PDS.UsrServiceRiskLevel"
          }
        },
        "PDS_UsrServiceRiskLevel_List": {
          "isCollection": true,
          "modelConfig": {
            "sortingConfig": {
              "default": [
                {
                  "columnName": "Name",
                  "direction": "asc"
                }
              ]
            }
          }
        },
        "PDS_UsrExpectedMargin": {
          "modelConfig": {
            "path": "PDS.UsrExpectedMargin"
          }
        },
        "PDS_UsrQualificationExplanation": {
          "modelConfig": {
            "path": "PDS.UsrQualificationExplanation"
          }
        },
        "PDS_UsrAISummary": {
          "modelConfig": {
            "path": "PDS.UsrAISummary"
          }
        },
        "PDS_UsrRecommendationDetails": {
          "modelConfig": {
            "path": "PDS.UsrRecommendationDetails"
          }
        },
        "PDS_UsrMissingInformation": {
          "modelConfig": {
            "path": "PDS.UsrMissingInformation"
          }
        },
        "PDS_UsrMissingStakeholders": {
          "modelConfig": {
            "path": "PDS.UsrMissingStakeholders"
          }
        },
        "PDS_UsrCanCreateProject": {
          "modelConfig": {
            "path": "PDS.UsrCanCreateProject"
          }
        },
        "PDS_UsrCanCreateOpportunity": {
          "modelConfig": {
            "path": "PDS.UsrCanCreateOpportunity"
          }
        },
        "PDS_UsrCanUpdateOpportunity": {
          "modelConfig": {
            "path": "PDS.UsrCanUpdateOpportunity"
          }
        },
        "PDS_UsrAgentError": {
          "modelConfig": {
            "path": "PDS.UsrAgentError"
          }
        }
      }
    }
  }
]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
  {
    "operation": "merge",
    "path": [],
    "values": {
      "primaryDataSourceName": "PDS"
    }
  },
  {
    "operation": "merge",
    "path": [
      "dataSources"
    ],
    "values": {
      "PDS": {
        "type": "crt.EntityDataSource",
        "config": {
          "entitySchemaName": "UsrADProjectIntelligence"
        },
        "scope": "page"
      }
    }
  }
]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});
