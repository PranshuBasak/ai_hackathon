define("UsrADProjectIntelligence_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
  {
    "operation": "insert",
    "name": "Input_UsrExternalProjectId",
    "values": {
      "layoutConfig": {
        "column": 1,
        "colSpan": 1,
        "row": 1,
        "rowSpan": 1
      },
      "type": "crt.Input",
      "label": "$Resources.Strings.PDS_UsrExternalProjectId",
      "control": "$PDS_UsrExternalProjectId",
      "labelPosition": "above",
      "multiline": false,
      "tooltip": "",
      "placeholder": "",
      "visible": true,
      "readonly": false
    },
    "parentName": "GridContainer_Section1_Fields",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "Input_UsrExternalSource",
    "values": {
      "layoutConfig": {
        "column": 2,
        "colSpan": 1,
        "row": 1,
        "rowSpan": 1
      },
      "type": "crt.ComboBox",
      "label": "$Resources.Strings.PDS_UsrExternalSource",
      "control": "$PDS_UsrExternalSource",
      "labelPosition": "above",
      "multiline": false,
      "tooltip": "",
      "placeholder": "",
      "visible": true,
      "readonly": false
    },
    "parentName": "GridContainer_Section1_Fields",
    "propertyName": "items",
    "index": 1
  },
  {
    "operation": "insert",
    "name": "Input_UsrProjectName",
    "values": {
      "layoutConfig": {
        "column": 1,
        "colSpan": 1,
        "row": 2,
        "rowSpan": 1
      },
      "type": "crt.Input",
      "label": "$Resources.Strings.PDS_UsrProjectName",
      "control": "$PDS_UsrProjectName",
      "labelPosition": "above",
      "multiline": false,
      "tooltip": "",
      "placeholder": "",
      "visible": true,
      "readonly": false
    },
    "parentName": "GridContainer_Section1_Fields",
    "propertyName": "items",
    "index": 2
  },
  {
    "operation": "insert",
    "name": "Input_UsrProjectDescription",
    "values": {
      "layoutConfig": {
        "column": 1,
        "colSpan": 2,
        "row": 3,
        "rowSpan": 1
      },
      "type": "crt.Input",
      "label": "$Resources.Strings.PDS_UsrProjectDescription",
      "control": "$PDS_UsrProjectDescription",
      "labelPosition": "above",
      "multiline": true,
      "tooltip": "",
      "placeholder": "",
      "visible": true,
      "readonly": false
    },
    "parentName": "GridContainer_Section1_Fields",
    "propertyName": "items",
    "index": 3
  },
  {
    "operation": "insert",
    "name": "Input_UsrProjectAddress",
    "values": {
      "layoutConfig": {
        "column": 1,
        "colSpan": 1,
        "row": 4,
        "rowSpan": 1
      },
      "type": "crt.Input",
      "label": "$Resources.Strings.PDS_UsrProjectAddress",
      "control": "$PDS_UsrProjectAddress",
      "labelPosition": "above",
      "multiline": false,
      "tooltip": "",
      "placeholder": "",
      "visible": true,
      "readonly": false
    },
    "parentName": "GridContainer_Section1_Fields",
    "propertyName": "items",
    "index": 4
  },
  {
    "operation": "insert",
    "name": "ComboBox_UsrProjectCountry",
    "values": {
      "layoutConfig": {
        "column": 2,
        "colSpan": 1,
        "row": 4,
        "rowSpan": 1
      },
      "type": "crt.ComboBox",
      "label": "$Resources.Strings.PDS_UsrProjectCountry",
      "ariaLabel": "",
      "isAddAllowed": true,
      "showValueAsLink": true,
      "labelPosition": "above",
      "controlActions": [],
      "listActions": [],
      "tooltip": "",
      "control": "$PDS_UsrProjectCountry",
      "visible": true,
      "readonly": false,
      "placeholder": ""
    },
    "parentName": "GridContainer_Section1_Fields",
    "propertyName": "items",
    "index": 5
  },
  {
    "operation": "insert",
    "name": "ComboBox_UsrProjectType",
    "values": {
      "layoutConfig": {
        "column": 1,
        "colSpan": 1,
        "row": 5,
        "rowSpan": 1
      },
      "type": "crt.ComboBox",
      "label": "$Resources.Strings.PDS_UsrProjectType",
      "ariaLabel": "",
      "isAddAllowed": true,
      "showValueAsLink": true,
      "labelPosition": "above",
      "controlActions": [],
      "listActions": [],
      "tooltip": "",
      "control": "$PDS_UsrProjectType",
      "visible": true,
      "readonly": false,
      "placeholder": ""
    },
    "parentName": "GridContainer_Section1_Fields",
    "propertyName": "items",
    "index": 6
  },
  {
    "operation": "insert",
    "name": "ComboBox_UsrProjectCategory",
    "values": {
      "layoutConfig": {
        "column": 2,
        "colSpan": 1,
        "row": 5,
        "rowSpan": 1
      },
      "type": "crt.ComboBox",
      "label": "$Resources.Strings.PDS_UsrProjectCategory",
      "ariaLabel": "",
      "isAddAllowed": true,
      "showValueAsLink": true,
      "labelPosition": "above",
      "controlActions": [],
      "listActions": [],
      "tooltip": "",
      "control": "$PDS_UsrProjectCategory",
      "visible": true,
      "readonly": false,
      "placeholder": ""
    },
    "parentName": "GridContainer_Section1_Fields",
    "propertyName": "items",
    "index": 7
  },
  {
    "operation": "insert",
    "name": "NumberInput_UsrEstimatedProjectValue",
    "values": {
      "layoutConfig": {
        "column": 1,
        "colSpan": 1,
        "row": 6,
        "rowSpan": 1
      },
      "type": "crt.NumberInput",
      "label": "$Resources.Strings.PDS_UsrEstimatedProjectValue",
      "control": "$PDS_UsrEstimatedProjectValue",
      "readonly": false,
      "placeholder": "",
      "labelPosition": "above",
      "tooltip": "",
      "visible": true
    },
    "parentName": "GridContainer_Section1_Fields",
    "propertyName": "items",
    "index": 8
  },
  {
    "operation": "insert",
    "name": "NumberInput_UsrExpectedOrderValue",
    "values": {
      "layoutConfig": {
        "column": 2,
        "colSpan": 1,
        "row": 6,
        "rowSpan": 1
      },
      "type": "crt.NumberInput",
      "label": "$Resources.Strings.PDS_UsrExpectedOrderValue",
      "control": "$PDS_UsrExpectedOrderValue",
      "readonly": false,
      "placeholder": "",
      "labelPosition": "above",
      "tooltip": "",
      "visible": true
    },
    "parentName": "GridContainer_Section1_Fields",
    "propertyName": "items",
    "index": 9
  },
  {
    "operation": "insert",
    "name": "NumberInput_UsrNumberOfUnits",
    "values": {
      "layoutConfig": {
        "column": 1,
        "colSpan": 1,
        "row": 7,
        "rowSpan": 1
      },
      "type": "crt.NumberInput",
      "label": "$Resources.Strings.PDS_UsrNumberOfUnits",
      "control": "$PDS_UsrNumberOfUnits",
      "readonly": false,
      "placeholder": "",
      "labelPosition": "above",
      "tooltip": "",
      "visible": true
    },
    "parentName": "GridContainer_Section1_Fields",
    "propertyName": "items",
    "index": 10
  },
  {
    "operation": "insert",
    "name": "NumberInput_UsrCompletionYear",
    "values": {
      "layoutConfig": {
        "column": 2,
        "colSpan": 1,
        "row": 7,
        "rowSpan": 1
      },
      "type": "crt.NumberInput",
      "label": "$Resources.Strings.PDS_UsrCompletionYear",
      "control": "$PDS_UsrCompletionYear",
      "readonly": false,
      "placeholder": "",
      "labelPosition": "above",
      "tooltip": "",
      "visible": true
    },
    "parentName": "GridContainer_Section1_Fields",
    "propertyName": "items",
    "index": 11
  },
  {
    "operation": "insert",
    "name": "NumberInput_UsrDeliveryYear",
    "values": {
      "layoutConfig": {
        "column": 1,
        "colSpan": 1,
        "row": 8,
        "rowSpan": 1
      },
      "type": "crt.NumberInput",
      "label": "$Resources.Strings.PDS_UsrDeliveryYear",
      "control": "$PDS_UsrDeliveryYear",
      "readonly": false,
      "placeholder": "",
      "labelPosition": "above",
      "tooltip": "",
      "visible": true
    },
    "parentName": "GridContainer_Section1_Fields",
    "propertyName": "items",
    "index": 12
  },
  {
    "operation": "insert",
    "name": "Input_UsrProductPackage",
    "values": {
      "layoutConfig": {
        "column": 2,
        "colSpan": 1,
        "row": 8,
        "rowSpan": 1
      },
      "type": "crt.Input",
      "label": "$Resources.Strings.PDS_UsrProductPackage",
      "control": "$PDS_UsrProductPackage",
      "labelPosition": "above",
      "multiline": false,
      "tooltip": "",
      "placeholder": "",
      "visible": true,
      "readonly": false
    },
    "parentName": "GridContainer_Section1_Fields",
    "propertyName": "items",
    "index": 13
  },
  {
    "operation": "insert",
    "name": "ComboBox_UsrSpecificationStatus",
    "values": {
      "layoutConfig": {
        "column": 1,
        "colSpan": 1,
        "row": 9,
        "rowSpan": 1
      },
      "type": "crt.ComboBox",
      "label": "$Resources.Strings.PDS_UsrSpecificationStatus",
      "ariaLabel": "",
      "isAddAllowed": true,
      "showValueAsLink": true,
      "labelPosition": "above",
      "controlActions": [],
      "listActions": [],
      "tooltip": "",
      "control": "$PDS_UsrSpecificationStatus",
      "visible": true,
      "readonly": false,
      "placeholder": ""
    },
    "parentName": "GridContainer_Section1_Fields",
    "propertyName": "items",
    "index": 14
  },
  {
    "operation": "insert",
    "name": "Checkbox_UsrCanCreateProject",
    "values": {
      "layoutConfig": {
        "column": 1,
        "colSpan": 1,
        "row": 1,
        "rowSpan": 1
      },
      "type": "crt.Checkbox",
      "value": false,
      "disabled": false,
      "inversed": false,
      "label": "$Resources.Strings.PDS_UsrCanCreateProject",
      "ariaLabel": "",
      "labelPosition": "above",
      "tooltip": "",
      "control": "$PDS_UsrCanCreateProject",
      "visible": true,
      "readonly": true,
      "placeholder": ""
    },
    "parentName": "GridContainer_Section6_Fields",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "Checkbox_UsrCanCreateOpportunity",
    "values": {
      "layoutConfig": {
        "column": 2,
        "colSpan": 1,
        "row": 1,
        "rowSpan": 1
      },
      "type": "crt.Checkbox",
      "value": false,
      "disabled": false,
      "inversed": false,
      "label": "$Resources.Strings.PDS_UsrCanCreateOpportunity",
      "ariaLabel": "",
      "labelPosition": "above",
      "tooltip": "",
      "control": "$PDS_UsrCanCreateOpportunity",
      "visible": true,
      "readonly": true,
      "placeholder": ""
    },
    "parentName": "GridContainer_Section6_Fields",
    "propertyName": "items",
    "index": 1
  },
  {
    "operation": "insert",
    "name": "Checkbox_UsrCanUpdateOpportunity",
    "values": {
      "layoutConfig": {
        "column": 1,
        "colSpan": 1,
        "row": 2,
        "rowSpan": 1
      },
      "type": "crt.Checkbox",
      "value": false,
      "disabled": false,
      "inversed": false,
      "label": "$Resources.Strings.PDS_UsrCanUpdateOpportunity",
      "ariaLabel": "",
      "labelPosition": "above",
      "tooltip": "",
      "control": "$PDS_UsrCanUpdateOpportunity",
      "visible": true,
      "readonly": true,
      "placeholder": ""
    },
    "parentName": "GridContainer_Section6_Fields",
    "propertyName": "items",
    "index": 2
  },
  {
    "operation": "insert",
    "name": "ComboBox_UsrCreatedProject",
    "values": {
      "layoutConfig": {
        "column": 2,
        "colSpan": 1,
        "row": 2,
        "rowSpan": 1
      },
      "type": "crt.ComboBox",
      "label": "$Resources.Strings.PDS_UsrCreatedProject",
      "ariaLabel": "",
      "isAddAllowed": true,
      "showValueAsLink": true,
      "labelPosition": "above",
      "controlActions": [],
      "listActions": [],
      "tooltip": "",
      "control": "$PDS_UsrCreatedProject",
      "visible": true,
      "readonly": true,
      "placeholder": ""
    },
    "parentName": "GridContainer_Section6_Fields",
    "propertyName": "items",
    "index": 3
  },
  {
    "operation": "insert",
    "name": "ComboBox_UsrCreatedOpportunity",
    "values": {
      "layoutConfig": {
        "column": 1,
        "colSpan": 1,
        "row": 3,
        "rowSpan": 1
      },
      "type": "crt.ComboBox",
      "label": "$Resources.Strings.PDS_UsrCreatedOpportunity",
      "ariaLabel": "",
      "isAddAllowed": true,
      "showValueAsLink": true,
      "labelPosition": "above",
      "controlActions": [],
      "listActions": [],
      "tooltip": "",
      "control": "$PDS_UsrCreatedOpportunity",
      "visible": true,
      "readonly": true,
      "placeholder": ""
    },
    "parentName": "GridContainer_Section6_Fields",
    "propertyName": "items",
    "index": 4
  },
  {
    "operation": "insert",
    "name": "TabContainer_15ah0vf",
    "values": {
      "type": "crt.TabContainer",
      "items": [],
      "caption": "$Resources.Strings.UsrVerdictTab",
      "iconPosition": "only-text",
      "visible": true
    },
    "parentName": "Tabs",
    "propertyName": "items",
    "index": 1
  },
  {
    "operation": "insert",
    "name": "ComboBox_UsrMatchedProject",
    "values": {
      "layoutConfig": {
        "column": 1,
        "colSpan": 1,
        "row": 1,
        "rowSpan": 1
      },
      "type": "crt.ComboBox",
      "label": "$Resources.Strings.PDS_UsrMatchedProject",
      "ariaLabel": "",
      "isAddAllowed": true,
      "showValueAsLink": true,
      "labelPosition": "above",
      "controlActions": [],
      "listActions": [],
      "tooltip": "",
      "control": "$PDS_UsrMatchedProject",
      "visible": true,
      "readonly": true,
      "placeholder": ""
    },
    "parentName": "GridContainer_Section3_Fields",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "NumberInput_UsrProjectMatchConfidence",
    "values": {
      "layoutConfig": {
        "column": 2,
        "colSpan": 1,
        "row": 1,
        "rowSpan": 1
      },
      "type": "crt.NumberInput",
      "label": "$Resources.Strings.PDS_UsrProjectMatchConfidence",
      "control": "$PDS_UsrProjectMatchConfidence",
      "readonly": true,
      "placeholder": "",
      "labelPosition": "above",
      "tooltip": "",
      "visible": true
    },
    "parentName": "GridContainer_Section3_Fields",
    "propertyName": "items",
    "index": 1
  },
  {
    "operation": "insert",
    "name": "ComboBox_UsrMatchedOpportunity",
    "values": {
      "layoutConfig": {
        "column": 1,
        "colSpan": 1,
        "row": 2,
        "rowSpan": 1
      },
      "type": "crt.ComboBox",
      "label": "$Resources.Strings.PDS_UsrMatchedOpportunity",
      "ariaLabel": "",
      "isAddAllowed": true,
      "showValueAsLink": true,
      "labelPosition": "above",
      "controlActions": [],
      "listActions": [],
      "tooltip": "",
      "control": "$PDS_UsrMatchedOpportunity",
      "visible": true,
      "readonly": true,
      "placeholder": ""
    },
    "parentName": "GridContainer_Section3_Fields",
    "propertyName": "items",
    "index": 2
  },
  {
    "operation": "insert",
    "name": "NumberInput_UsrOpportunityMatchConfidence",
    "values": {
      "layoutConfig": {
        "column": 2,
        "colSpan": 1,
        "row": 2,
        "rowSpan": 1
      },
      "type": "crt.NumberInput",
      "label": "$Resources.Strings.PDS_UsrOpportunityMatchConfidence",
      "control": "$PDS_UsrOpportunityMatchConfidence",
      "readonly": true,
      "placeholder": "",
      "labelPosition": "above",
      "tooltip": "",
      "visible": true
    },
    "parentName": "GridContainer_Section3_Fields",
    "propertyName": "items",
    "index": 3
  },
  {
    "operation": "insert",
    "name": "ComboBox_UsrRecommendedAction",
    "values": {
      "layoutConfig": {
        "column": 1,
        "colSpan": 1,
        "row": 3,
        "rowSpan": 1
      },
      "type": "crt.ComboBox",
      "label": "$Resources.Strings.PDS_UsrRecommendedAction",
      "ariaLabel": "",
      "isAddAllowed": true,
      "showValueAsLink": true,
      "labelPosition": "above",
      "controlActions": [],
      "listActions": [],
      "tooltip": "",
      "control": "$PDS_UsrRecommendedAction",
      "visible": true,
      "readonly": true,
      "placeholder": ""
    },
    "parentName": "GridContainer_Section3_Fields",
    "propertyName": "items",
    "index": 4
  },
  {
    "operation": "insert",
    "name": "ComboBox_UsrAnalysisStatus",
    "values": {
      "layoutConfig": {
        "column": 2,
        "colSpan": 1,
        "row": 3,
        "rowSpan": 1
      },
      "type": "crt.ComboBox",
      "label": "$Resources.Strings.PDS_UsrAnalysisStatus",
      "ariaLabel": "",
      "isAddAllowed": true,
      "showValueAsLink": true,
      "labelPosition": "above",
      "controlActions": [],
      "listActions": [],
      "tooltip": "",
      "control": "$PDS_UsrAnalysisStatus",
      "visible": true,
      "readonly": true,
      "placeholder": ""
    },
    "parentName": "GridContainer_Section3_Fields",
    "propertyName": "items",
    "index": 5
  },
  {
    "operation": "insert",
    "name": "Checkbox_UsrAnalysisCompleted",
    "values": {
      "layoutConfig": {
        "column": 1,
        "colSpan": 1,
        "row": 4,
        "rowSpan": 1
      },
      "type": "crt.Checkbox",
      "value": false,
      "disabled": false,
      "inversed": false,
      "label": "$Resources.Strings.PDS_UsrAnalysisCompleted",
      "ariaLabel": "",
      "labelPosition": "above",
      "tooltip": "",
      "control": "$PDS_UsrAnalysisCompleted",
      "visible": true,
      "readonly": true,
      "placeholder": ""
    },
    "parentName": "GridContainer_Section3_Fields",
    "propertyName": "items",
    "index": 6
  },
  {
    "operation": "insert",
    "name": "DateTimePicker_UsrAnalysisDate",
    "values": {
      "layoutConfig": {
        "column": 2,
        "colSpan": 1,
        "row": 4,
        "rowSpan": 1
      },
      "type": "crt.DateTimePicker",
      "label": "$Resources.Strings.PDS_UsrAnalysisDate",
      "control": "$PDS_UsrAnalysisDate",
      "labelPosition": "above",
      "tooltip": "",
      "placeholder": "",
      "visible": true,
      "readonly": true,
      "pickerType": "datetime"
    },
    "parentName": "GridContainer_Section3_Fields",
    "propertyName": "items",
    "index": 7
  },
  {
    "operation": "insert",
    "name": "NumberInput_UsrQualificationScore",
    "values": {
      "layoutConfig": {
        "column": 1,
        "colSpan": 1,
        "row": 1,
        "rowSpan": 1
      },
      "type": "crt.NumberInput",
      "label": "$Resources.Strings.PDS_UsrQualificationScore",
      "control": "$PDS_UsrQualificationScore",
      "readonly": true,
      "placeholder": "",
      "labelPosition": "above",
      "tooltip": "",
      "visible": true
    },
    "parentName": "GridContainer_Section4_Fields",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "Input_UsrQualificationExplanation",
    "values": {
      "layoutConfig": {
        "column": 1,
        "colSpan": 2,
        "row": 2,
        "rowSpan": 1
      },
      "type": "crt.Input",
      "label": "$Resources.Strings.PDS_UsrQualificationExplanation",
      "control": "$PDS_UsrQualificationExplanation",
      "labelPosition": "above",
      "multiline": true,
      "tooltip": "",
      "placeholder": "",
      "visible": true,
      "readonly": true
    },
    "parentName": "GridContainer_Section4_Fields",
    "propertyName": "items",
    "index": 1
  },
  {
    "operation": "insert",
    "name": "NumberInput_UsrProbabilityOfConversion",
    "values": {
      "layoutConfig": {
        "column": 1,
        "colSpan": 1,
        "row": 3,
        "rowSpan": 1
      },
      "type": "crt.NumberInput",
      "label": "$Resources.Strings.PDS_UsrProbabilityOfConversion",
      "control": "$PDS_UsrProbabilityOfConversion",
      "readonly": false,
      "placeholder": "",
      "labelPosition": "above",
      "tooltip": "",
      "visible": true
    },
    "parentName": "GridContainer_Section4_Fields",
    "propertyName": "items",
    "index": 2
  },
  {
    "operation": "insert",
    "name": "NumberInput_UsrBuyingCentreHealth",
    "values": {
      "layoutConfig": {
        "column": 2,
        "colSpan": 1,
        "row": 3,
        "rowSpan": 1
      },
      "type": "crt.NumberInput",
      "label": "$Resources.Strings.PDS_UsrBuyingCentreHealth",
      "control": "$PDS_UsrBuyingCentreHealth",
      "readonly": false,
      "placeholder": "",
      "labelPosition": "above",
      "tooltip": "",
      "visible": true
    },
    "parentName": "GridContainer_Section4_Fields",
    "propertyName": "items",
    "index": 3
  },
  {
    "operation": "insert",
    "name": "ComboBox_UsrPriorityClassification",
    "values": {
      "layoutConfig": {
        "column": 1,
        "colSpan": 1,
        "row": 4,
        "rowSpan": 1
      },
      "type": "crt.ComboBox",
      "label": "$Resources.Strings.PDS_UsrPriorityClassification",
      "ariaLabel": "",
      "isAddAllowed": true,
      "showValueAsLink": true,
      "labelPosition": "above",
      "controlActions": [],
      "listActions": [],
      "tooltip": "",
      "control": "$PDS_UsrPriorityClassification",
      "visible": true,
      "readonly": true,
      "placeholder": ""
    },
    "parentName": "GridContainer_Section4_Fields",
    "propertyName": "items",
    "index": 4
  },
  {
    "operation": "insert",
    "name": "ComboBox_UsrProjectClassification",
    "values": {
      "layoutConfig": {
        "column": 2,
        "colSpan": 1,
        "row": 4,
        "rowSpan": 1
      },
      "type": "crt.ComboBox",
      "label": "$Resources.Strings.PDS_UsrProjectClassification",
      "ariaLabel": "",
      "isAddAllowed": true,
      "showValueAsLink": true,
      "labelPosition": "above",
      "controlActions": [],
      "listActions": [],
      "tooltip": "",
      "control": "$PDS_UsrProjectClassification",
      "visible": true,
      "readonly": false,
      "placeholder": ""
    },
    "parentName": "GridContainer_Section4_Fields",
    "propertyName": "items",
    "index": 5
  },
  {
    "operation": "insert",
    "name": "ComboBox_UsrServiceRiskLevel",
    "values": {
      "layoutConfig": {
        "column": 1,
        "colSpan": 1,
        "row": 5,
        "rowSpan": 1
      },
      "type": "crt.ComboBox",
      "label": "$Resources.Strings.PDS_UsrServiceRiskLevel",
      "ariaLabel": "",
      "isAddAllowed": true,
      "showValueAsLink": true,
      "labelPosition": "above",
      "controlActions": [],
      "listActions": [],
      "tooltip": "",
      "control": "$PDS_UsrServiceRiskLevel",
      "visible": true,
      "readonly": false,
      "placeholder": ""
    },
    "parentName": "GridContainer_Section4_Fields",
    "propertyName": "items",
    "index": 6
  },
  {
    "operation": "insert",
    "name": "Input_UsrSalesRegion",
    "values": {
      "layoutConfig": {
        "column": 2,
        "colSpan": 1,
        "row": 5,
        "rowSpan": 1
      },
      "type": "crt.Input",
      "label": "$Resources.Strings.PDS_UsrSalesRegion",
      "control": "$PDS_UsrSalesRegion",
      "labelPosition": "above",
      "multiline": false,
      "tooltip": "",
      "placeholder": "",
      "visible": true,
      "readonly": false
    },
    "parentName": "GridContainer_Section4_Fields",
    "propertyName": "items",
    "index": 7
  },
  {
    "operation": "insert",
    "name": "NumberInput_UsrExpectedMargin",
    "values": {
      "layoutConfig": {
        "column": 1,
        "colSpan": 1,
        "row": 6,
        "rowSpan": 1
      },
      "type": "crt.NumberInput",
      "label": "$Resources.Strings.PDS_UsrExpectedMargin",
      "control": "$PDS_UsrExpectedMargin",
      "readonly": false,
      "placeholder": "",
      "labelPosition": "above",
      "tooltip": "",
      "visible": true
    },
    "parentName": "GridContainer_Section4_Fields",
    "propertyName": "items",
    "index": 8
  },
  {
    "operation": "insert",
    "name": "DateTimePicker_UsrExpectedCloseDate",
    "values": {
      "layoutConfig": {
        "column": 2,
        "colSpan": 1,
        "row": 6,
        "rowSpan": 1
      },
      "type": "crt.DateTimePicker",
      "label": "$Resources.Strings.PDS_UsrExpectedCloseDate",
      "control": "$PDS_UsrExpectedCloseDate",
      "labelPosition": "above",
      "tooltip": "",
      "placeholder": "",
      "visible": true,
      "readonly": false,
      "pickerType": "datetime"
    },
    "parentName": "GridContainer_Section4_Fields",
    "propertyName": "items",
    "index": 9
  },
  {
    "operation": "insert",
    "name": "Input_UsrMissingInformation",
    "values": {
      "layoutConfig": {
        "column": 1,
        "colSpan": 2,
        "row": 1,
        "rowSpan": 1
      },
      "type": "crt.Input",
      "label": "$Resources.Strings.PDS_UsrMissingInformation",
      "control": "$PDS_UsrMissingInformation",
      "labelPosition": "above",
      "multiline": true,
      "tooltip": "",
      "placeholder": "",
      "visible": true,
      "readonly": true
    },
    "parentName": "GridContainer_Section5_Fields",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "Input_UsrMissingStakeholders",
    "values": {
      "layoutConfig": {
        "column": 1,
        "colSpan": 2,
        "row": 2,
        "rowSpan": 1
      },
      "type": "crt.Input",
      "label": "$Resources.Strings.PDS_UsrMissingStakeholders",
      "control": "$PDS_UsrMissingStakeholders",
      "labelPosition": "above",
      "multiline": true,
      "tooltip": "",
      "placeholder": "",
      "visible": true,
      "readonly": true
    },
    "parentName": "GridContainer_Section5_Fields",
    "propertyName": "items",
    "index": 1
  },
  {
    "operation": "insert",
    "name": "Input_UsrAISummary",
    "values": {
      "layoutConfig": {
        "column": 1,
        "colSpan": 2,
        "row": 3,
        "rowSpan": 1
      },
      "type": "crt.Input",
      "label": "$Resources.Strings.PDS_UsrAISummary",
      "control": "$PDS_UsrAISummary",
      "labelPosition": "above",
      "multiline": true,
      "tooltip": "",
      "placeholder": "",
      "visible": true,
      "readonly": true
    },
    "parentName": "GridContainer_Section5_Fields",
    "propertyName": "items",
    "index": 2
  },
  {
    "operation": "insert",
    "name": "Input_UsrRecommendationDetails",
    "values": {
      "layoutConfig": {
        "column": 1,
        "colSpan": 2,
        "row": 4,
        "rowSpan": 1
      },
      "type": "crt.Input",
      "label": "$Resources.Strings.PDS_UsrRecommendationDetails",
      "control": "$PDS_UsrRecommendationDetails",
      "labelPosition": "above",
      "multiline": true,
      "tooltip": "",
      "placeholder": "",
      "visible": true,
      "readonly": true
    },
    "parentName": "GridContainer_Section5_Fields",
    "propertyName": "items",
    "index": 3
  },
  {
    "operation": "insert",
    "name": "TabContainer_qe34u35",
    "values": {
      "type": "crt.TabContainer",
      "items": [],
      "caption": "$Resources.Strings.UsrStakeholderTab",
      "iconPosition": "only-text",
      "visible": true
    },
    "parentName": "Tabs",
    "propertyName": "items",
    "index": 2
  },
  {
    "operation": "insert",
    "name": "Input_UsrDeveloperName",
    "values": {
      "layoutConfig": {
        "column": 1,
        "colSpan": 1,
        "row": 1,
        "rowSpan": 1
      },
      "type": "crt.Input",
      "label": "$Resources.Strings.PDS_UsrDeveloperName",
      "control": "$PDS_UsrDeveloperName",
      "labelPosition": "above",
      "multiline": false,
      "tooltip": "",
      "placeholder": "",
      "visible": true,
      "readonly": false
    },
    "parentName": "GridContainer_Section2_Fields",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "Input_UsrBuilderName",
    "values": {
      "layoutConfig": {
        "column": 2,
        "colSpan": 1,
        "row": 1,
        "rowSpan": 1
      },
      "type": "crt.Input",
      "label": "$Resources.Strings.PDS_UsrBuilderName",
      "control": "$PDS_UsrBuilderName",
      "labelPosition": "above",
      "multiline": false,
      "tooltip": "",
      "placeholder": "",
      "visible": true,
      "readonly": false
    },
    "parentName": "GridContainer_Section2_Fields",
    "propertyName": "items",
    "index": 1
  },
  {
    "operation": "insert",
    "name": "Input_UsrArchitectName",
    "values": {
      "layoutConfig": {
        "column": 1,
        "colSpan": 1,
        "row": 2,
        "rowSpan": 1
      },
      "type": "crt.Input",
      "label": "$Resources.Strings.PDS_UsrArchitectName",
      "control": "$PDS_UsrArchitectName",
      "labelPosition": "above",
      "multiline": false,
      "tooltip": "",
      "placeholder": "",
      "visible": true,
      "readonly": false
    },
    "parentName": "GridContainer_Section2_Fields",
    "propertyName": "items",
    "index": 2
  },
  {
    "operation": "insert",
    "name": "Input_UsrDealerName",
    "values": {
      "layoutConfig": {
        "column": 2,
        "colSpan": 1,
        "row": 2,
        "rowSpan": 1
      },
      "type": "crt.Input",
      "label": "$Resources.Strings.PDS_UsrDealerName",
      "control": "$PDS_UsrDealerName",
      "labelPosition": "above",
      "multiline": false,
      "tooltip": "",
      "placeholder": "",
      "visible": true,
      "readonly": false
    },
    "parentName": "GridContainer_Section2_Fields",
    "propertyName": "items",
    "index": 3
  },
  {
    "operation": "insert",
    "name": "Input_UsrContractorName",
    "values": {
      "layoutConfig": {
        "column": 1,
        "colSpan": 1,
        "row": 3,
        "rowSpan": 1
      },
      "type": "crt.Input",
      "label": "$Resources.Strings.PDS_UsrContractorName",
      "control": "$PDS_UsrContractorName",
      "labelPosition": "above",
      "multiline": false,
      "tooltip": "",
      "placeholder": "",
      "visible": true,
      "readonly": false
    },
    "parentName": "GridContainer_Section2_Fields",
    "propertyName": "items",
    "index": 4
  },
  {
    "operation": "insert",
    "name": "Input_UsrCompetitorPresence",
    "values": {
      "layoutConfig": {
        "column": 2,
        "colSpan": 1,
        "row": 3,
        "rowSpan": 1
      },
      "type": "crt.Input",
      "label": "$Resources.Strings.PDS_UsrCompetitorPresence",
      "control": "$PDS_UsrCompetitorPresence",
      "labelPosition": "above",
      "multiline": true,
      "tooltip": "",
      "placeholder": "",
      "visible": true,
      "readonly": false
    },
    "parentName": "GridContainer_Section2_Fields",
    "propertyName": "items",
    "index": 5
  },
  {
    "operation": "merge",
    "name": "GeneralInfoTab",
    "values": {
      "caption": "$Resources.Strings.UsrSourceTab"
    }
  },
  {
    "operation": "insert",
    "name": "UsrFoundation_source",
    "parentName": "GeneralInfoTabContainer",
    "propertyName": "items",
    "index": 0,
    "values": {
      "type": "crt.GridContainer",
      "columns": [
        "minmax(64px, 1fr)",
        "minmax(64px, 1fr)"
      ],
      "rows": "minmax(max-content, 32px)",
      "gap": {
        "columnGap": "large",
        "rowGap": "small"
      },
      "items": [],
      "layoutConfig": {
        "column": 1,
        "row": 1,
        "colSpan": 2,
        "rowSpan": 1
      }
    }
  },
  {
    "operation": "insert",
    "name": "GridContainer_Section1",
    "values": {
      "type": "crt.GridContainer",
      "rows": "minmax(max-content, 32px)",
      "columns": [
        "minmax(32px, 1fr)"
      ],
      "gap": {
        "columnGap": "large",
        "rowGap": "none"
      },
      "items": [],
      "visible": true,
      "padding": {
        "top": "none",
        "right": "none",
        "bottom": "none",
        "left": "none"
      },
      "color": "transparent",
      "borderRadius": "none",
      "alignItems": "stretch",
      "layoutConfig": {
        "column": 1,
        "colSpan": 2,
        "row": 2,
        "rowSpan": 1
      }
    },
    "parentName": "GeneralInfoTabContainer",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "GridContainer_Section6",
    "values": {
      "type": "crt.GridContainer",
      "rows": "minmax(max-content, 32px)",
      "columns": [
        "minmax(32px, 1fr)"
      ],
      "gap": {
        "columnGap": "large",
        "rowGap": "none"
      },
      "items": [],
      "visible": true,
      "padding": {
        "top": "none",
        "right": "none",
        "bottom": "none",
        "left": "none"
      },
      "color": "transparent",
      "borderRadius": "none",
      "alignItems": "stretch",
      "layoutConfig": {
        "column": 1,
        "colSpan": 2,
        "row": 3,
        "rowSpan": 1
      }
    },
    "parentName": "GeneralInfoTabContainer",
    "propertyName": "items",
    "index": 1
  },
  {
    "operation": "insert",
    "name": "UsrField_UsrName",
    "parentName": "UsrFoundation_source",
    "propertyName": "items",
    "index": 0,
    "values": {
      "type": "crt.Input",
      "control": "$UsrFoundation_UsrName",
      "label": "$Resources.Strings.UsrFoundation_UsrName",
      "readonly": true,
      "layoutConfig": {
        "column": 1,
        "row": 1,
        "colSpan": 1,
        "rowSpan": 1
      },
      "multiline": false
    }
  },
  {
    "operation": "insert",
    "name": "UsrField_UsrReceivedOn",
    "parentName": "UsrFoundation_source",
    "propertyName": "items",
    "index": 1,
    "values": {
      "type": "crt.DateTimePicker",
      "control": "$UsrFoundation_UsrReceivedOn",
      "label": "$Resources.Strings.UsrFoundation_UsrReceivedOn",
      "readonly": true,
      "layoutConfig": {
        "column": 2,
        "row": 1,
        "colSpan": 1,
        "rowSpan": 1
      },
      "pickerType": "datetime"
    }
  },
  {
    "operation": "insert",
    "name": "UsrField_UsrBidDate",
    "parentName": "UsrFoundation_source",
    "propertyName": "items",
    "index": 2,
    "values": {
      "type": "crt.DateTimePicker",
      "control": "$UsrFoundation_UsrBidDate",
      "label": "$Resources.Strings.UsrFoundation_UsrBidDate",
      "readonly": false,
      "layoutConfig": {
        "column": 1,
        "row": 2,
        "colSpan": 1,
        "rowSpan": 1
      },
      "pickerType": "date"
    }
  },
  {
    "operation": "insert",
    "name": "UsrField_UsrStartDate",
    "parentName": "UsrFoundation_source",
    "propertyName": "items",
    "index": 3,
    "values": {
      "type": "crt.DateTimePicker",
      "control": "$UsrFoundation_UsrStartDate",
      "label": "$Resources.Strings.UsrFoundation_UsrStartDate",
      "readonly": false,
      "layoutConfig": {
        "column": 2,
        "row": 2,
        "colSpan": 1,
        "rowSpan": 1
      },
      "pickerType": "date"
    }
  },
  {
    "operation": "insert",
    "name": "UsrField_UsrCompletionDate",
    "parentName": "UsrFoundation_source",
    "propertyName": "items",
    "index": 4,
    "values": {
      "type": "crt.DateTimePicker",
      "control": "$UsrFoundation_UsrCompletionDate",
      "label": "$Resources.Strings.UsrFoundation_UsrCompletionDate",
      "readonly": false,
      "layoutConfig": {
        "column": 1,
        "row": 3,
        "colSpan": 1,
        "rowSpan": 1
      },
      "pickerType": "date"
    }
  },
  {
    "operation": "insert",
    "name": "UsrField_UsrRawText",
    "parentName": "UsrFoundation_source",
    "propertyName": "items",
    "index": 5,
    "values": {
      "type": "crt.Input",
      "control": "$UsrFoundation_UsrRawText",
      "label": "$Resources.Strings.UsrFoundation_UsrRawText",
      "readonly": false,
      "layoutConfig": {
        "column": 2,
        "row": 3,
        "colSpan": 1,
        "rowSpan": 1
      },
      "multiline": true
    }
  },
  {
    "operation": "insert",
    "name": "UsrField_UsrProjectTypeText",
    "parentName": "UsrFoundation_source",
    "propertyName": "items",
    "index": 6,
    "values": {
      "type": "crt.Input",
      "control": "$UsrFoundation_UsrProjectTypeText",
      "label": "$Resources.Strings.UsrFoundation_UsrProjectTypeText",
      "readonly": false,
      "layoutConfig": {
        "column": 1,
        "row": 4,
        "colSpan": 1,
        "rowSpan": 1
      },
      "multiline": false
    }
  },
  {
    "operation": "insert",
    "name": "UsrField_UsrStageText",
    "parentName": "UsrFoundation_source",
    "propertyName": "items",
    "index": 7,
    "values": {
      "type": "crt.Input",
      "control": "$UsrFoundation_UsrStageText",
      "label": "$Resources.Strings.UsrFoundation_UsrStageText",
      "readonly": false,
      "layoutConfig": {
        "column": 2,
        "row": 4,
        "colSpan": 1,
        "rowSpan": 1
      },
      "multiline": false
    }
  },
  {
    "operation": "insert",
    "name": "UsrField_UsrCityText",
    "parentName": "UsrFoundation_source",
    "propertyName": "items",
    "index": 8,
    "values": {
      "type": "crt.Input",
      "control": "$UsrFoundation_UsrCityText",
      "label": "$Resources.Strings.UsrFoundation_UsrCityText",
      "readonly": false,
      "layoutConfig": {
        "column": 1,
        "row": 5,
        "colSpan": 1,
        "rowSpan": 1
      },
      "multiline": false
    }
  },
  {
    "operation": "insert",
    "name": "UsrField_UsrStateText",
    "parentName": "UsrFoundation_source",
    "propertyName": "items",
    "index": 9,
    "values": {
      "type": "crt.Input",
      "control": "$UsrFoundation_UsrStateText",
      "label": "$Resources.Strings.UsrFoundation_UsrStateText",
      "readonly": false,
      "layoutConfig": {
        "column": 2,
        "row": 5,
        "colSpan": 1,
        "rowSpan": 1
      },
      "multiline": false
    }
  },
  {
    "operation": "insert",
    "name": "UsrField_UsrCountryText",
    "parentName": "UsrFoundation_source",
    "propertyName": "items",
    "index": 10,
    "values": {
      "type": "crt.Input",
      "control": "$UsrFoundation_UsrCountryText",
      "label": "$Resources.Strings.UsrFoundation_UsrCountryText",
      "readonly": false,
      "layoutConfig": {
        "column": 1,
        "row": 6,
        "colSpan": 1,
        "rowSpan": 1
      },
      "multiline": false
    }
  },
  {
    "operation": "insert",
    "name": "UsrField_UsrEmailActivity",
    "parentName": "UsrFoundation_source",
    "propertyName": "items",
    "index": 11,
    "values": {
      "type": "crt.ComboBox",
      "control": "$UsrFoundation_UsrEmailActivity",
      "label": "$Resources.Strings.UsrFoundation_UsrEmailActivity",
      "readonly": false,
      "layoutConfig": {
        "column": 2,
        "row": 6,
        "colSpan": 1,
        "rowSpan": 1
      }
    }
  },
  {
    "operation": "insert",
    "name": "UsrField_UsrStatus",
    "parentName": "UsrFoundation_source",
    "propertyName": "items",
    "index": 12,
    "values": {
      "type": "crt.ComboBox",
      "control": "$UsrFoundation_UsrStatus",
      "label": "$Resources.Strings.UsrFoundation_UsrStatus",
      "readonly": false,
      "layoutConfig": {
        "column": 1,
        "row": 7,
        "colSpan": 1,
        "rowSpan": 1
      }
    }
  },
  {
    "operation": "insert",
    "name": "UsrFoundation_stakeholder",
    "parentName": "GridContainer_gg670zy",
    "propertyName": "items",
    "index": 0,
    "values": {
      "type": "crt.GridContainer",
      "columns": [
        "minmax(64px, 1fr)",
        "minmax(64px, 1fr)"
      ],
      "rows": "minmax(max-content, 32px)",
      "gap": {
        "columnGap": "large",
        "rowGap": "small"
      },
      "items": [],
      "layoutConfig": {
        "column": 1,
        "row": 1,
        "colSpan": 2,
        "rowSpan": 1
      }
    }
  },
  {
    "operation": "insert",
    "name": "Label_Section2",
    "values": {
      "type": "crt.Label",
      "caption": "#MacrosTemplateString(#ResourceString(Label_Section2_caption)#)#",
      "labelType": "headline-3",
      "labelThickness": "semibold",
      "labelEllipsis": false,
      "labelColor": "auto",
      "labelBackgroundColor": "transparent",
      "labelTextAlign": "start",
      "headingLevel": "label",
      "visible": true,
      "layoutConfig": {
        "column": 1,
        "colSpan": 2,
        "row": 2,
        "rowSpan": 1
      }
    },
    "parentName": "GridContainer_gg670zy",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "GridContainer_Section2_Fields",
    "values": {
      "type": "crt.GridContainer",
      "rows": "minmax(max-content, 32px)",
      "columns": [
        "minmax(32px, 1fr)",
        "minmax(32px, 1fr)"
      ],
      "gap": {
        "columnGap": "large",
        "rowGap": "none"
      },
      "styles": {
        "overflow-x": "hidden"
      },
      "items": [],
      "visible": true,
      "padding": {
        "top": "none",
        "right": "none",
        "bottom": "none",
        "left": "none"
      },
      "color": "transparent",
      "borderRadius": "none",
      "alignItems": "stretch",
      "layoutConfig": {
        "column": 1,
        "colSpan": 2,
        "row": 3,
        "rowSpan": 1
      }
    },
    "parentName": "GridContainer_gg670zy",
    "propertyName": "items",
    "index": 1
  },
  {
    "operation": "insert",
    "name": "UsrField_UsrKeyContactName",
    "parentName": "UsrFoundation_stakeholder",
    "propertyName": "items",
    "index": 0,
    "values": {
      "type": "crt.Input",
      "control": "$UsrFoundation_UsrKeyContactName",
      "label": "$Resources.Strings.UsrFoundation_UsrKeyContactName",
      "readonly": false,
      "layoutConfig": {
        "column": 1,
        "row": 1,
        "colSpan": 1,
        "rowSpan": 1
      },
      "multiline": false
    }
  },
  {
    "operation": "insert",
    "name": "UsrField_UsrKeyContactRoleText",
    "parentName": "UsrFoundation_stakeholder",
    "propertyName": "items",
    "index": 1,
    "values": {
      "type": "crt.Input",
      "control": "$UsrFoundation_UsrKeyContactRoleText",
      "label": "$Resources.Strings.UsrFoundation_UsrKeyContactRoleText",
      "readonly": false,
      "layoutConfig": {
        "column": 2,
        "row": 1,
        "colSpan": 1,
        "rowSpan": 1
      },
      "multiline": false
    }
  },
  {
    "operation": "insert",
    "name": "UsrField_UsrKeyContactEmail",
    "parentName": "UsrFoundation_stakeholder",
    "propertyName": "items",
    "index": 2,
    "values": {
      "type": "crt.EmailInput",
      "control": "$UsrFoundation_UsrKeyContactEmail",
      "label": "$Resources.Strings.UsrFoundation_UsrKeyContactEmail",
      "readonly": false,
      "layoutConfig": {
        "column": 1,
        "row": 2,
        "colSpan": 1,
        "rowSpan": 1
      }
    }
  },
  {
    "operation": "insert",
    "name": "UsrField_UsrDeveloperAccount",
    "parentName": "UsrFoundation_stakeholder",
    "propertyName": "items",
    "index": 3,
    "values": {
      "type": "crt.ComboBox",
      "control": "$UsrFoundation_UsrDeveloperAccount",
      "label": "$Resources.Strings.UsrFoundation_UsrDeveloperAccount",
      "readonly": false,
      "layoutConfig": {
        "column": 2,
        "row": 2,
        "colSpan": 1,
        "rowSpan": 1
      }
    }
  },
  {
    "operation": "insert",
    "name": "UsrField_UsrArchitectAccount",
    "parentName": "UsrFoundation_stakeholder",
    "propertyName": "items",
    "index": 4,
    "values": {
      "type": "crt.ComboBox",
      "control": "$UsrFoundation_UsrArchitectAccount",
      "label": "$Resources.Strings.UsrFoundation_UsrArchitectAccount",
      "readonly": false,
      "layoutConfig": {
        "column": 1,
        "row": 3,
        "colSpan": 1,
        "rowSpan": 1
      }
    }
  },
  {
    "operation": "insert",
    "name": "UsrField_UsrBuilderAccount",
    "parentName": "UsrFoundation_stakeholder",
    "propertyName": "items",
    "index": 5,
    "values": {
      "type": "crt.ComboBox",
      "control": "$UsrFoundation_UsrBuilderAccount",
      "label": "$Resources.Strings.UsrFoundation_UsrBuilderAccount",
      "readonly": false,
      "layoutConfig": {
        "column": 2,
        "row": 3,
        "colSpan": 1,
        "rowSpan": 1
      }
    }
  },
  {
    "operation": "insert",
    "name": "UsrField_UsrDealerAccount",
    "parentName": "UsrFoundation_stakeholder",
    "propertyName": "items",
    "index": 6,
    "values": {
      "type": "crt.ComboBox",
      "control": "$UsrFoundation_UsrDealerAccount",
      "label": "$Resources.Strings.UsrFoundation_UsrDealerAccount",
      "readonly": false,
      "layoutConfig": {
        "column": 1,
        "row": 4,
        "colSpan": 1,
        "rowSpan": 1
      }
    }
  },
  {
    "operation": "insert",
    "name": "UsrField_UsrReviewedBy",
    "parentName": "UsrFoundation_stakeholder",
    "propertyName": "items",
    "index": 7,
    "values": {
      "type": "crt.ComboBox",
      "control": "$UsrFoundation_UsrReviewedBy",
      "label": "$Resources.Strings.UsrFoundation_UsrReviewedBy",
      "readonly": false,
      "layoutConfig": {
        "column": 2,
        "row": 4,
        "colSpan": 1,
        "rowSpan": 1
      }
    }
  },
  {
    "operation": "insert",
    "name": "UsrFoundation_verdict",
    "parentName": "GridContainer_1twllnd",
    "propertyName": "items",
    "index": 0,
    "values": {
      "type": "crt.GridContainer",
      "columns": [
        "minmax(64px, 1fr)",
        "minmax(64px, 1fr)"
      ],
      "rows": "minmax(max-content, 32px)",
      "gap": {
        "columnGap": "large",
        "rowGap": "small"
      },
      "items": [],
      "layoutConfig": {
        "column": 1,
        "row": 1,
        "colSpan": 2,
        "rowSpan": 1
      }
    }
  },
  {
    "operation": "insert",
    "name": "GridContainer_Section3",
    "values": {
      "type": "crt.GridContainer",
      "rows": "minmax(max-content, 32px)",
      "columns": [
        "minmax(32px, 1fr)"
      ],
      "gap": {
        "columnGap": "large",
        "rowGap": "none"
      },
      "items": [],
      "visible": true,
      "padding": {
        "top": "none",
        "right": "none",
        "bottom": "none",
        "left": "none"
      },
      "color": "transparent",
      "borderRadius": "none",
      "alignItems": "stretch",
      "layoutConfig": {
        "row": 2,
        "column": 1,
        "rowSpan": 1,
        "colSpan": 2
      }
    },
    "parentName": "GridContainer_1twllnd",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "GridContainer_Section4",
    "values": {
      "type": "crt.GridContainer",
      "rows": "minmax(max-content, 32px)",
      "columns": [
        "minmax(32px, 1fr)"
      ],
      "gap": {
        "columnGap": "large",
        "rowGap": "none"
      },
      "items": [],
      "visible": true,
      "padding": {
        "top": "none",
        "right": "none",
        "bottom": "none",
        "left": "none"
      },
      "color": "transparent",
      "borderRadius": "none",
      "alignItems": "stretch",
      "layoutConfig": {
        "row": 2
      }
    },
    "parentName": "GridContainer_1twllnd",
    "propertyName": "items",
    "index": 1
  },
  {
    "operation": "insert",
    "name": "UsrField_UsrMatchReason",
    "parentName": "UsrFoundation_verdict",
    "propertyName": "items",
    "index": 0,
    "values": {
      "type": "crt.Input",
      "control": "$UsrFoundation_UsrMatchReason",
      "label": "$Resources.Strings.UsrFoundation_UsrMatchReason",
      "readonly": true,
      "layoutConfig": {
        "column": 1,
        "row": 1,
        "colSpan": 1,
        "rowSpan": 1
      },
      "multiline": true
    }
  },
  {
    "operation": "insert",
    "name": "UsrField_UsrAgentError",
    "parentName": "UsrFoundation_verdict",
    "propertyName": "items",
    "index": 1,
    "values": {
      "type": "crt.Input",
      "control": "$UsrFoundation_UsrAgentError",
      "label": "$Resources.Strings.UsrFoundation_UsrAgentError",
      "readonly": true,
      "layoutConfig": {
        "column": 2,
        "row": 1,
        "colSpan": 1,
        "rowSpan": 1
      },
      "multiline": true
    }
  }
]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
  {
    "operation": "merge",
    "path": [],
    "values": {
      "attributes": {
        "PDS_UsrExternalProjectId": {
          "modelConfig": {
            "path": "PDS.UsrExternalProjectId"
          }
        },
        "PDS_UsrExternalSource": {
          "modelConfig": {
            "path": "PDS.UsrExternalSource"
          }
        },
        "PDS_UsrProjectName": {
          "modelConfig": {
            "path": "PDS.UsrProjectName"
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
        "PDS_UsrProjectCountry": {
          "modelConfig": {
            "path": "PDS.UsrProjectCountry"
          }
        },
        "PDS_UsrProjectType": {
          "modelConfig": {
            "path": "PDS.UsrProjectType"
          }
        },
        "PDS_UsrProjectCategory": {
          "modelConfig": {
            "path": "PDS.UsrProjectCategory"
          }
        },
        "PDS_UsrEstimatedProjectValue": {
          "modelConfig": {
            "path": "PDS.UsrEstimatedProjectValue"
          }
        },
        "PDS_UsrExpectedOrderValue": {
          "modelConfig": {
            "path": "PDS.UsrExpectedOrderValue"
          }
        },
        "PDS_UsrNumberOfUnits": {
          "modelConfig": {
            "path": "PDS.UsrNumberOfUnits"
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
        "PDS_UsrProductPackage": {
          "modelConfig": {
            "path": "PDS.UsrProductPackage"
          }
        },
        "PDS_UsrSpecificationStatus": {
          "modelConfig": {
            "path": "PDS.UsrSpecificationStatus"
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
        "PDS_UsrCreatedProject": {
          "modelConfig": {
            "path": "PDS.UsrCreatedProject"
          }
        },
        "PDS_UsrCreatedOpportunity": {
          "modelConfig": {
            "path": "PDS.UsrCreatedOpportunity"
          }
        },
        "PDS_UsrMatchedProject": {
          "modelConfig": {
            "path": "PDS.UsrMatchedProject"
          }
        },
        "PDS_UsrProjectMatchConfidence": {
          "modelConfig": {
            "path": "PDS.UsrProjectMatchConfidence"
          }
        },
        "PDS_UsrMatchedOpportunity": {
          "modelConfig": {
            "path": "PDS.UsrMatchedOpportunity"
          }
        },
        "PDS_UsrOpportunityMatchConfidence": {
          "modelConfig": {
            "path": "PDS.UsrOpportunityMatchConfidence"
          }
        },
        "PDS_UsrRecommendedAction": {
          "modelConfig": {
            "path": "PDS.UsrRecommendedAction"
          }
        },
        "PDS_UsrAnalysisStatus": {
          "modelConfig": {
            "path": "PDS.UsrAnalysisStatus"
          }
        },
        "PDS_UsrAnalysisCompleted": {
          "modelConfig": {
            "path": "PDS.UsrAnalysisCompleted"
          }
        },
        "PDS_UsrAnalysisDate": {
          "modelConfig": {
            "path": "PDS.UsrAnalysisDate"
          }
        },
        "PDS_UsrQualificationScore": {
          "modelConfig": {
            "path": "PDS.UsrQualificationScore"
          }
        },
        "PDS_UsrQualificationExplanation": {
          "modelConfig": {
            "path": "PDS.UsrQualificationExplanation"
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
        "PDS_UsrPriorityClassification": {
          "modelConfig": {
            "path": "PDS.UsrPriorityClassification"
          }
        },
        "PDS_UsrProjectClassification": {
          "modelConfig": {
            "path": "PDS.UsrProjectClassification"
          }
        },
        "PDS_UsrServiceRiskLevel": {
          "modelConfig": {
            "path": "PDS.UsrServiceRiskLevel"
          }
        },
        "PDS_UsrSalesRegion": {
          "modelConfig": {
            "path": "PDS.UsrSalesRegion"
          }
        },
        "PDS_UsrExpectedMargin": {
          "modelConfig": {
            "path": "PDS.UsrExpectedMargin"
          }
        },
        "PDS_UsrExpectedCloseDate": {
          "modelConfig": {
            "path": "PDS.UsrExpectedCloseDate"
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
        "PDS_UsrDeveloperName": {
          "modelConfig": {
            "path": "PDS.UsrDeveloperName"
          }
        },
        "PDS_UsrBuilderName": {
          "modelConfig": {
            "path": "PDS.UsrBuilderName"
          }
        },
        "PDS_UsrArchitectName": {
          "modelConfig": {
            "path": "PDS.UsrArchitectName"
          }
        },
        "PDS_UsrDealerName": {
          "modelConfig": {
            "path": "PDS.UsrDealerName"
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
        "UsrFoundation_UsrName": {
          "modelConfig": {
            "path": "PDS.UsrName"
          }
        },
        "UsrFoundation_UsrReceivedOn": {
          "modelConfig": {
            "path": "PDS.UsrReceivedOn"
          }
        },
        "UsrFoundation_UsrBidDate": {
          "modelConfig": {
            "path": "PDS.UsrBidDate"
          }
        },
        "UsrFoundation_UsrStartDate": {
          "modelConfig": {
            "path": "PDS.UsrStartDate"
          }
        },
        "UsrFoundation_UsrCompletionDate": {
          "modelConfig": {
            "path": "PDS.UsrCompletionDate"
          }
        },
        "UsrFoundation_UsrRawText": {
          "modelConfig": {
            "path": "PDS.UsrRawText"
          }
        },
        "UsrFoundation_UsrProjectTypeText": {
          "modelConfig": {
            "path": "PDS.UsrProjectTypeText"
          }
        },
        "UsrFoundation_UsrStageText": {
          "modelConfig": {
            "path": "PDS.UsrStageText"
          }
        },
        "UsrFoundation_UsrCityText": {
          "modelConfig": {
            "path": "PDS.UsrCityText"
          }
        },
        "UsrFoundation_UsrStateText": {
          "modelConfig": {
            "path": "PDS.UsrStateText"
          }
        },
        "UsrFoundation_UsrCountryText": {
          "modelConfig": {
            "path": "PDS.UsrCountryText"
          }
        },
        "UsrFoundation_UsrEmailActivity": {
          "modelConfig": {
            "path": "PDS.UsrEmailActivity"
          }
        },
        "UsrFoundation_UsrStatus": {
          "modelConfig": {
            "path": "PDS.UsrStatus"
          }
        },
        "UsrFoundation_UsrKeyContactName": {
          "modelConfig": {
            "path": "PDS.UsrKeyContactName"
          }
        },
        "UsrFoundation_UsrKeyContactRoleText": {
          "modelConfig": {
            "path": "PDS.UsrKeyContactRoleText"
          }
        },
        "UsrFoundation_UsrKeyContactEmail": {
          "modelConfig": {
            "path": "PDS.UsrKeyContactEmail"
          }
        },
        "UsrFoundation_UsrDeveloperAccount": {
          "modelConfig": {
            "path": "PDS.UsrDeveloperAccount"
          }
        },
        "UsrFoundation_UsrArchitectAccount": {
          "modelConfig": {
            "path": "PDS.UsrArchitectAccount"
          }
        },
        "UsrFoundation_UsrBuilderAccount": {
          "modelConfig": {
            "path": "PDS.UsrBuilderAccount"
          }
        },
        "UsrFoundation_UsrDealerAccount": {
          "modelConfig": {
            "path": "PDS.UsrDealerAccount"
          }
        },
        "UsrFoundation_UsrReviewedBy": {
          "modelConfig": {
            "path": "PDS.UsrReviewedBy"
          }
        },
        "UsrFoundation_UsrMatchReason": {
          "modelConfig": {
            "path": "PDS.UsrMatchReason"
          }
        },
        "UsrFoundation_UsrAgentError": {
          "modelConfig": {
            "path": "PDS.UsrAgentError"
          }
        }
      }
    }
  }
]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});
