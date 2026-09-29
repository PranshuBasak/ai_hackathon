define("UsrMieleADProjects_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "insert",
				"name": "UsrProjectLocationGroup",
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3,
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 2,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"items": [],
					"fitContent": true,
					"visible": true,
					"alignItems": "stretch",
					"color": "primary",
					"borderRadius": "medium",
					"padding": {
						"top": "medium",
						"bottom": "medium",
						"right": "medium",
						"left": "medium"
					}
				}
			},
			{
				"operation": "insert",
				"name": "UsrProjectLocationLabel",
				"parentName": "UsrProjectLocationGroup",
				"propertyName": "items",
				"index": 0,
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.Label",
					"caption": "#ResourceString(UsrProjectLocationLabel_caption)#",
					"labelType": "headline-3",
					"labelThickness": "semibold",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"headingLevel": "label",
					"visible": true
				}
			},
			{
				"operation": "insert",
				"name": "UsrProjectLocationFields",
				"parentName": "UsrProjectLocationGroup",
				"propertyName": "items",
				"index": 1,
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
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					}
				}
			},
			{
				"operation": "insert",
				"name": "Input_z5i4uz4",
				"parentName": "UsrProjectLocationFields",
				"propertyName": "items",
				"index": 0,
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 2,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrProjectAddress_8jk3a3h",
					"control": "$PDS_UsrProjectAddress_8jk3a3h",
					"placeholder": "$Resources.Strings.UsrPh_ProjectAddress",
					"readonly": false,
					"multiline": false,
					"labelPosition": "above",
					"visible": true
				}
			},
			{
				"operation": "insert",
				"name": "UsrProjectCityField",
				"parentName": "UsrProjectLocationFields",
				"propertyName": "items",
				"index": 1,
				"values": {
					"type": "crt.ComboBox",
					"control": "$UsrFoundationCity",
					"label": "$Resources.Strings.UsrFoundationCity",
					"labelPosition": "above",
					"visible": true,
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
				"name": "UsrProjectConstructionStageField",
				"parentName": "UsrProjectLocationFields",
				"propertyName": "items",
				"index": 2,
				"values": {
					"type": "crt.ComboBox",
					"control": "$UsrFoundationConstructionStage",
					"label": "$Resources.Strings.UsrFoundationConstructionStage",
					"labelPosition": "above",
					"visible": true,
					"tooltip": "$Resources.Strings.UsrTip_ConstructionStage",
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					}
				}
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"attributes": {
						"PDS_UsrProjectAddress_8jk3a3h": {
							"modelConfig": {
								"path": "PDS.UsrProjectAddress"
							}
						},
						"UsrFoundationCity": {
							"modelConfig": {
								"path": "PDS.UsrCity"
							}
						},
						"UsrFoundationConstructionStage": {
							"modelConfig": {
								"path": "PDS.UsrConstructionStage"
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
