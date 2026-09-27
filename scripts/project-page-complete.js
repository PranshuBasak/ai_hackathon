define("UsrMieleADProjects_FormPage", /**SCHEMA_DEPS*/["@creatio-devkit/common"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/(sdk)/**SCHEMA_ARGS*/ {
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
    "name": "CardContentWrapper",
    "values": {
      "padding": {
        "left": "extra-small",
        "right": "extra-small",
        "top": "none",
        "bottom": "none"
      },
      "visible": true,
      "color": "transparent",
      "borderRadius": "none",
      "alignItems": "stretch"
    }
  },
  {
    "operation": "merge",
    "name": "SideContainer",
    "values": {
      "layoutConfig": {
        "column": 1,
        "row": 2,
        "colSpan": 1,
        "rowSpan": 1
      }
    }
  },
  {
    "operation": "merge",
    "name": "SideAreaProfileContainer",
    "values": {
      "gap": {
        "columnGap": "large",
        "rowGap": "none"
      },
      "layoutConfig": {
        "column": 1,
        "colSpan": 1,
        "row": 1,
        "rowSpan": 1
      },
      "visible": true,
      "alignItems": "stretch"
    }
  },
  {
    "operation": "move",
    "name": "SideAreaProfileContainer",
    "parentName": "GridContainer_k808co1",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "merge",
    "name": "CenterContainer",
    "values": {
      "layoutConfig": {
        "column": 1,
        "row": 1,
        "colSpan": 2,
        "rowSpan": 1
      }
    }
  },
  {
    "operation": "move",
    "name": "CenterContainer",
    "parentName": "CardContentWrapper",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "move",
    "name": "CardContentContainer",
    "parentName": "SideContainer",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "move",
    "name": "Tabs",
    "parentName": "CenterContainer",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "merge",
    "name": "Tabs",
    "values": {
      "styleType": "partiallyColored",
      "mode": "tab",
      "bodyBackgroundColor": "primary-contrast-500",
      "selectedTabTitleColor": "auto",
      "tabTitleColor": "auto",
      "underlineSelectedTabColor": "auto",
      "headerBackgroundColor": "auto",
      "allowToggleClose": true,
      "visible": true,
      "stretch": true,
      "selectedTab": {
        "value": "GeneralInfoTab"
      }
    }
  },
  {
    "operation": "merge",
    "name": "GeneralInfoTab",
    "values": {
      "iconPosition": "left-icon",
      "visible": true,
      "icon": "employee-icon"
    }
  },
  {
    "operation": "merge",
    "name": "GeneralInfoTabContainer",
    "values": {
      "gap": {
        "columnGap": "large",
        "rowGap": "large"
      },
      "visible": true,
      "padding": {
        "top": "none",
        "right": "none",
        "bottom": "none",
        "left": null
      },
      "color": "transparent",
      "borderRadius": "none",
      "alignItems": "stretch"
    }
  },
  {
    "operation": "merge",
    "name": "CardToggleTabPanel",
    "values": {
      "styleType": "default",
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
    "name": "Feed",
    "values": {
      "dataSourceName": "PDS",
      "entitySchemaName": "Project"
    }
  },
  {
    "operation": "merge",
    "name": "AttachmentList",
    "values": {
      "recordColumnName": "Project",
      "columns": [
        {
          "id": "906f4ff1-ef86-c9c9-48f3-33a7fbfebbb4",
          "code": "AttachmentListDS_Name",
          "caption": "#ResourceString(AttachmentListDS_Name)#",
          "dataValueType": 28
        },
        {
          "id": "691c83ee-cc5f-af4b-6e3b-837b1dc5fe6c",
          "code": "AttachmentListDS_CreatedOn",
          "caption": "#ResourceString(AttachmentListDS_CreatedOn)#",
          "dataValueType": 7
        },
        {
          "id": "6e8eb544-102d-4150-42b7-f1d7dc64f1f8",
          "code": "AttachmentListDS_CreatedBy",
          "caption": "#ResourceString(AttachmentListDS_CreatedBy)#",
          "dataValueType": 10
        },
        {
          "id": "d68ad1c7-590a-0540-2e0e-c55ce6f07afd",
          "code": "AttachmentListDS_Size",
          "caption": "#ResourceString(AttachmentListDS_Size)#",
          "dataValueType": 4
        }
      ],
      "tileSize": "large",
      "visible": true
    }
  },
  {
    "operation": "insert",
    "name": "Button_s44syjw",
    "values": {
      "type": "crt.Button",
      "caption": "#ResourceString(Button_s44syjw_caption)#",
      "color": "outline",
      "disabled": false,
      "size": "medium",
      "iconPosition": "only-icon",
      "visible": true,
      "icon": "image-update",
      "clicked": {
        "request": "crt.LoadDataRequest",
        "params": {
          "config": {
            "loadType": "reload"
          },
          "refreshDataConfig": {
            "mode": "RefreshAll"
          }
        }
      },
      "clickMode": "default"
    },
    "parentName": "CardToggleContainer",
    "propertyName": "items",
    "index": 1
  },
  {
    "operation": "insert",
    "name": "GridContainer_eju1ubo",
    "values": {
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
      "color": "transparent",
      "borderRadius": "none",
      "padding": {
        "top": "none",
        "right": "small",
        "bottom": "none",
        "left": "small"
      }
    },
    "parentName": "MainContainer",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "EntityStageProgressBar_jwwcu68",
    "values": {
      "type": "crt.EntityStageProgressBar",
      "saveOnChange": false,
      "askUserToChangeSchema": true,
      "entityName": "Project",
      "layoutConfig": {
        "column": 1,
        "colSpan": 1,
        "row": 1,
        "rowSpan": 1
      }
    },
    "parentName": "GridContainer_eju1ubo",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "GridContainer_k808co1",
    "values": {
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
      "color": "transparent",
      "borderRadius": "none",
      "padding": {
        "top": "none",
        "right": "small",
        "bottom": "none",
        "left": "small"
      }
    },
    "parentName": "MainContainer",
    "propertyName": "items",
    "index": 1
  },
  {
    "operation": "insert",
    "name": "GridContainer_24fsla7",
    "values": {
      "layoutConfig": {
        "column": 1,
        "colSpan": 1,
        "row": 1,
        "rowSpan": 1
      },
      "type": "crt.GridContainer",
      "columns": [
        "minmax(32px, 1fr)",
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
      "color": "transparent",
      "borderRadius": "none",
      "padding": {
        "top": "none",
        "right": "none",
        "bottom": "none",
        "left": "none"
      }
    },
    "parentName": "SideAreaProfileContainer",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "Name",
    "values": {
      "layoutConfig": {
        "column": 1,
        "colSpan": 1,
        "row": 1,
        "rowSpan": 1
      },
      "type": "crt.Input",
      "label": "$Resources.Strings.Name",
      "control": "$Name",
      "labelPosition": "above",
      "multiline": false,
      "visible": true,
      "readonly": false,
      "placeholder": "",
      "tooltip": ""
    },
    "parentName": "GridContainer_24fsla7",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "Input_9fru47a",
    "values": {
      "layoutConfig": {
        "column": 2,
        "colSpan": 1,
        "row": 1,
        "rowSpan": 1
      },
      "type": "crt.Input",
      "label": "$Resources.Strings.PDS_UsrExternalId_i1614hg",
      "control": "$PDS_UsrExternalId_i1614hg",
      "placeholder": "",
      "tooltip": "",
      "readonly": false,
      "multiline": false,
      "labelPosition": "above",
      "visible": true
    },
    "parentName": "GridContainer_24fsla7",
    "propertyName": "items",
    "index": 1
  },
  {
    "operation": "insert",
    "name": "Input_h156bqy",
    "values": {
      "layoutConfig": {
        "column": 1,
        "colSpan": 1,
        "row": 2,
        "rowSpan": 1
      },
      "type": "crt.Input",
      "label": "$Resources.Strings.PDS_UsrProjectName_a2kpj36",
      "control": "$PDS_UsrProjectName_a2kpj36",
      "placeholder": "",
      "tooltip": "",
      "readonly": false,
      "multiline": false,
      "labelPosition": "above",
      "visible": true
    },
    "parentName": "GridContainer_24fsla7",
    "propertyName": "items",
    "index": 2
  },
  {
    "operation": "insert",
    "name": "ComboBox_etvcgks",
    "values": {
      "layoutConfig": {
        "column": 2,
        "colSpan": 1,
        "row": 2,
        "rowSpan": 1
      },
      "type": "crt.ComboBox",
      "label": "$Resources.Strings.PDS_Status_739sv8e",
      "ariaLabel": "",
      "isAddAllowed": true,
      "showValueAsLink": true,
      "labelPosition": "above",
      "controlActions": [],
      "listActions": [],
      "tooltip": "",
      "control": "$PDS_Status_739sv8e",
      "mode": "List",
      "visible": true,
      "readonly": false,
      "placeholder": ""
    },
    "parentName": "GridContainer_24fsla7",
    "propertyName": "items",
    "index": 3
  },
  {
    "operation": "insert",
    "name": "addRecord_l31hx7f",
    "values": {
      "code": "addRecord",
      "type": "crt.ComboboxSearchTextAction",
      "icon": "combobox-add-new",
      "caption": "#ResourceString(addRecord_l31hx7f_caption)#",
      "clicked": {
        "request": "crt.CreateRecordFromLookupRequest",
        "params": {}
      }
    },
    "parentName": "ComboBox_etvcgks",
    "propertyName": "listActions",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "ComboBox_xqhdg7f",
    "values": {
      "layoutConfig": {
        "column": 1,
        "colSpan": 1,
        "row": 3,
        "rowSpan": 1
      },
      "type": "crt.ComboBox",
      "label": "$Resources.Strings.PDS_UsrProjectCategory_tp928od",
      "ariaLabel": "",
      "isAddAllowed": true,
      "showValueAsLink": true,
      "labelPosition": "above",
      "controlActions": [],
      "listActions": [],
      "tooltip": "",
      "control": "$PDS_UsrProjectCategory_tp928od",
      "visible": true,
      "readonly": false,
      "placeholder": "",
      "valueDetails": null
    },
    "parentName": "GridContainer_24fsla7",
    "propertyName": "items",
    "index": 4
  },
  {
    "operation": "insert",
    "name": "addRecord_bs3f8n1",
    "values": {
      "code": "addRecord",
      "type": "crt.ComboboxSearchTextAction",
      "icon": "combobox-add-new",
      "caption": "#ResourceString(addRecord_bs3f8n1_caption)#",
      "clicked": {
        "request": "crt.CreateRecordFromLookupRequest",
        "params": {}
      }
    },
    "parentName": "ComboBox_xqhdg7f",
    "propertyName": "listActions",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "ComboBox_mfg7yqm",
    "values": {
      "layoutConfig": {
        "column": 2,
        "colSpan": 1,
        "row": 3,
        "rowSpan": 1
      },
      "type": "crt.ComboBox",
      "label": "$Resources.Strings.PDS_Type_t0ig83j",
      "ariaLabel": "",
      "isAddAllowed": true,
      "showValueAsLink": true,
      "labelPosition": "above",
      "controlActions": [],
      "listActions": [],
      "tooltip": "",
      "control": "$PDS_Type_t0ig83j",
      "mode": "List",
      "visible": true,
      "readonly": false,
      "placeholder": ""
    },
    "parentName": "GridContainer_24fsla7",
    "propertyName": "items",
    "index": 5
  },
  {
    "operation": "insert",
    "name": "addRecord_i2nya5x",
    "values": {
      "code": "addRecord",
      "type": "crt.ComboboxSearchTextAction",
      "icon": "combobox-add-new",
      "caption": "#ResourceString(addRecord_i2nya5x_caption)#",
      "clicked": {
        "request": "crt.CreateRecordFromLookupRequest",
        "params": {}
      }
    },
    "parentName": "ComboBox_mfg7yqm",
    "propertyName": "listActions",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "ComboBox_o1166w2",
    "values": {
      "layoutConfig": {
        "column": 1,
        "colSpan": 1,
        "row": 4,
        "rowSpan": 1
      },
      "type": "crt.ComboBox",
      "label": "$Resources.Strings.PDS_UsrExternalSource_tyn68z2",
      "ariaLabel": "",
      "isAddAllowed": true,
      "showValueAsLink": true,
      "labelPosition": "above",
      "controlActions": [],
      "listActions": [],
      "tooltip": "",
      "control": "$PDS_UsrExternalSource_tyn68z2",
      "visible": true,
      "readonly": false,
      "placeholder": ""
    },
    "parentName": "GridContainer_24fsla7",
    "propertyName": "items",
    "index": 6
  },
  {
    "operation": "insert",
    "name": "addRecord_s9ozzgn",
    "values": {
      "code": "addRecord",
      "type": "crt.ComboboxSearchTextAction",
      "icon": "combobox-add-new",
      "caption": "#ResourceString(addRecord_s9ozzgn_caption)#",
      "clicked": {
        "request": "crt.CreateRecordFromLookupRequest",
        "params": {}
      }
    },
    "parentName": "ComboBox_o1166w2",
    "propertyName": "listActions",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "ComboBox_sdfrxz4",
    "values": {
      "layoutConfig": {
        "column": 2,
        "colSpan": 1,
        "row": 4,
        "rowSpan": 1
      },
      "type": "crt.ComboBox",
      "label": "$Resources.Strings.PDS_UsrPriorityClassification_rng1q6g",
      "ariaLabel": "",
      "isAddAllowed": true,
      "showValueAsLink": true,
      "labelPosition": "above",
      "controlActions": [],
      "listActions": [],
      "tooltip": "",
      "control": "$PDS_UsrPriorityClassification_rng1q6g",
      "visible": true,
      "readonly": false,
      "placeholder": ""
    },
    "parentName": "GridContainer_24fsla7",
    "propertyName": "items",
    "index": 7
  },
  {
    "operation": "insert",
    "name": "addRecord_iiiuopl",
    "values": {
      "code": "addRecord",
      "type": "crt.ComboboxSearchTextAction",
      "icon": "combobox-add-new",
      "caption": "#ResourceString(addRecord_iiiuopl_caption)#",
      "clicked": {
        "request": "crt.CreateRecordFromLookupRequest",
        "params": {}
      }
    },
    "parentName": "ComboBox_sdfrxz4",
    "propertyName": "listActions",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "ComboBox_vmq9e9o",
    "values": {
      "layoutConfig": {
        "column": 1,
        "colSpan": 1,
        "row": 5,
        "rowSpan": 1
      },
      "type": "crt.ComboBox",
      "label": "$Resources.Strings.PDS_Account_e1qeezm",
      "ariaLabel": "",
      "isAddAllowed": true,
      "showValueAsLink": true,
      "labelPosition": "above",
      "controlActions": [],
      "listActions": [],
      "tooltip": "",
      "control": "$PDS_Account_e1qeezm",
      "mode": "SelectionWindow",
      "visible": true,
      "readonly": false,
      "placeholder": ""
    },
    "parentName": "GridContainer_24fsla7",
    "propertyName": "items",
    "index": 8
  },
  {
    "operation": "insert",
    "name": "addRecord_x4rt2nq",
    "values": {
      "code": "addRecord",
      "type": "crt.ComboboxSearchTextAction",
      "icon": "combobox-add-new",
      "caption": "#ResourceString(addRecord_x4rt2nq_caption)#",
      "clicked": {
        "request": "crt.CreateRecordFromLookupRequest",
        "params": {}
      }
    },
    "parentName": "ComboBox_vmq9e9o",
    "propertyName": "listActions",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "GridContainer_8uv0i2m",
    "values": {
      "layoutConfig": {
        "column": 1,
        "colSpan": 1,
        "row": 2,
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
      "color": "transparent",
      "borderRadius": "none",
      "padding": {
        "top": "none",
        "right": "none",
        "bottom": "none",
        "left": "none"
      }
    },
    "parentName": "SideAreaProfileContainer",
    "propertyName": "items",
    "index": 1
  },
  {
    "operation": "insert",
    "name": "GridContainer_pvs982x",
    "values": {
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
      },
      "layoutConfig": {
        "column": 1,
        "colSpan": 1,
        "row": 1,
        "rowSpan": 1
      }
    },
    "parentName": "GridContainer_8uv0i2m",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "FlexContainer_459gkis",
    "values": {
      "layoutConfig": {
        "column": 1,
        "colSpan": 1,
        "row": 1,
        "rowSpan": 1
      },
      "type": "crt.FlexContainer",
      "direction": "row",
      "wrap": "wrap",
      "items": [],
      "fitContent": true
    },
    "parentName": "GridContainer_pvs982x",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "Icon_7s4e9ah",
    "values": {
      "type": "crt.Icon",
      "iconName": "instapage-icon",
      "size": "24",
      "color": "#0D2E4E",
      "backgroundType": "none",
      "backgroundColor": "#E7ECFA",
      "padding": "none",
      "visible": true,
      "ariaLabel": "",
      "tooltip": ""
    },
    "parentName": "FlexContainer_459gkis",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "Label_epa1w3w",
    "values": {
      "type": "crt.Label",
      "caption": "#MacrosTemplateString(#ResourceString(Label_epa1w3w_caption)#)#",
      "labelType": "headline-3",
      "labelThickness": "semibold",
      "labelEllipsis": false,
      "labelColor": "auto",
      "labelBackgroundColor": "transparent",
      "labelTextAlign": "start",
      "headingLevel": "h4",
      "visible": true
    },
    "parentName": "FlexContainer_459gkis",
    "propertyName": "items",
    "index": 1
  },
  {
    "operation": "insert",
    "name": "Button_a58jedb",
    "values": {
      "type": "crt.Button",
      "caption": "#ResourceString(Button_a58jedb_caption)#",
      "color": "default",
      "disabled": false,
      "size": "small",
      "iconPosition": "only-icon",
      "visible": true,
      "clicked": {
        "request": "crt.UploadFileRequest",
        "params": {
          "viewElementName": "AttachmentList",
          "allowedFileTypes": "png,jpeg,jpg"
        }
      },
      "clickMode": "default",
      "icon": "clip-icon"
    },
    "parentName": "FlexContainer_459gkis",
    "propertyName": "items",
    "index": 2
  },
  {
    "operation": "insert",
    "name": "ImageGallery_6paea2h",
    "values": {
      "type": "qnt.ImageGallery",
      "attachments": "$AttachmentList",
      "fileEntitySchemaName": "ProjectFile",
      "fileEntitySchemaUId": "",
      "idColumnName": "AttachmentListDS_Id",
      "fileNameColumnName": "AttachmentListDS_Name",
      "fileUrlColumnName": "",
      "emptyMessage": "No image attachments please Add in the attachment ",
      "gallerySize": "large",
      "layoutConfig": {
        "column": 1,
        "colSpan": 1,
        "row": 2,
        "rowSpan": 1
      }
    },
    "parentName": "GridContainer_pvs982x",
    "propertyName": "items",
    "index": 1
  },
  {
    "operation": "insert",
    "name": "GridContainer_btswsbp",
    "values": {
      "layoutConfig": {
        "column": 1,
        "colSpan": 2,
        "row": 1,
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
    },
    "parentName": "GeneralInfoTabContainer",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "Label_ium9r5t",
    "values": {
      "layoutConfig": {
        "column": 1,
        "colSpan": 1,
        "row": 1,
        "rowSpan": 1
      },
      "type": "crt.Label",
      "caption": "#MacrosTemplateString(#ResourceString(Label_ium9r5t_caption)#)#",
      "labelType": "headline-3",
      "labelThickness": "semibold",
      "labelEllipsis": false,
      "labelColor": "auto",
      "labelBackgroundColor": "transparent",
      "labelTextAlign": "start",
      "headingLevel": "label",
      "visible": true
    },
    "parentName": "GridContainer_btswsbp",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "GridContainer_hy5yps7",
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
        "colSpan": 1,
        "row": 2,
        "rowSpan": 1
      }
    },
    "parentName": "GridContainer_btswsbp",
    "propertyName": "items",
    "index": 1
  },
  {
    "operation": "insert",
    "name": "ComboBox_hm741ld",
    "values": {
      "layoutConfig": {
        "column": 1,
        "colSpan": 1,
        "row": 1,
        "rowSpan": 1
      },
      "type": "crt.ComboBox",
      "label": "$Resources.Strings.PDS_Account_5eoaqxd",
      "ariaLabel": "",
      "isAddAllowed": true,
      "showValueAsLink": true,
      "labelPosition": "above",
      "controlActions": [],
      "listActions": [],
      "tooltip": "",
      "control": "$PDS_Account_5eoaqxd",
      "visible": true,
      "readonly": false,
      "placeholder": ""
    },
    "parentName": "GridContainer_hy5yps7",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "addRecord_1oytk4n",
    "values": {
      "code": "addRecord",
      "type": "crt.ComboboxSearchTextAction",
      "icon": "combobox-add-new",
      "caption": "#ResourceString(addRecord_1oytk4n_caption)#",
      "clicked": {
        "request": "crt.CreateRecordFromLookupRequest",
        "params": {}
      }
    },
    "parentName": "ComboBox_hm741ld",
    "propertyName": "listActions",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "ComboBox_doqoa45",
    "values": {
      "layoutConfig": {
        "column": 2,
        "colSpan": 1,
        "row": 1,
        "rowSpan": 1
      },
      "type": "crt.ComboBox",
      "label": "#ResourceString(ComboBox_doqoa45_label)#",
      "ariaLabel": "#ResourceString(ComboBox_doqoa45_ariaLabel)#",
      "isAddAllowed": true,
      "showValueAsLink": true,
      "labelPosition": "above",
      "controlActions": [],
      "listActions": [],
      "tooltip": "",
      "readonly": true,
      "control": "$PDS_AccountType_dsct9b6",
      "visible": true,
      "placeholder": ""
    },
    "parentName": "GridContainer_hy5yps7",
    "propertyName": "items",
    "index": 1
  },
  {
    "operation": "insert",
    "name": "Input_5lqzir6",
    "values": {
      "layoutConfig": {
        "column": 1,
        "colSpan": 2,
        "row": 2,
        "rowSpan": 1
      },
      "type": "crt.Input",
      "label": "$Resources.Strings.PDS_AccountAddress_cj0sb50",
      "control": "$PDS_AccountAddress_cj0sb50",
      "placeholder": "",
      "tooltip": "",
      "readonly": true,
      "multiline": false,
      "labelPosition": "above",
      "visible": true
    },
    "parentName": "GridContainer_hy5yps7",
    "propertyName": "items",
    "index": 2
  },
  {
    "operation": "insert",
    "name": "Checkbox_k8cq0js",
    "values": {
      "layoutConfig": {
        "column": 1,
        "colSpan": 1,
        "row": 3,
        "rowSpan": 1
      },
      "type": "crt.Checkbox",
      "value": true,
      "disabled": false,
      "inversed": false,
      "label": "$Resources.Strings.PDS_UsrSiteVisitRequired_g5eax3g",
      "ariaLabel": "",
      "labelPosition": "above",
      "tooltip": "",
      "control": "$PDS_UsrSiteVisitRequired_g5eax3g",
      "visible": true,
      "readonly": false,
      "placeholder": ""
    },
    "parentName": "GridContainer_hy5yps7",
    "propertyName": "items",
    "index": 3
  },
  {
    "operation": "insert",
    "name": "Checkbox_fhgr77l",
    "values": {
      "layoutConfig": {
        "column": 2,
        "colSpan": 1,
        "row": 3,
        "rowSpan": 1
      },
      "type": "crt.Checkbox",
      "value": true,
      "disabled": false,
      "inversed": false,
      "label": "$Resources.Strings.PDS_UsrContractSigned_05s1lxt",
      "ariaLabel": "",
      "labelPosition": "above",
      "tooltip": "",
      "control": "$PDS_UsrContractSigned_05s1lxt",
      "visible": true,
      "readonly": false,
      "placeholder": ""
    },
    "parentName": "GridContainer_hy5yps7",
    "propertyName": "items",
    "index": 4
  },
  {
    "operation": "insert",
    "name": "GridContainer_gxx0nv8",
    "values": {
      "layoutConfig": {
        "column": 1,
        "colSpan": 2,
        "row": 2,
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
    },
    "parentName": "GeneralInfoTabContainer",
    "propertyName": "items",
    "index": 1
  },
  {
    "operation": "insert",
    "name": "Label_6ehnuza",
    "values": {
      "layoutConfig": {
        "column": 1,
        "colSpan": 1,
        "row": 1,
        "rowSpan": 1
      },
      "type": "crt.Label",
      "caption": "#MacrosTemplateString(#ResourceString(Label_6ehnuza_caption)#)#",
      "labelType": "headline-3",
      "labelThickness": "semibold",
      "labelEllipsis": false,
      "labelColor": "auto",
      "labelBackgroundColor": "transparent",
      "labelTextAlign": "start",
      "headingLevel": "label",
      "visible": true
    },
    "parentName": "GridContainer_gxx0nv8",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "GridContainer_x5kuum9",
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
        "colSpan": 1,
        "row": 2,
        "rowSpan": 1
      }
    },
    "parentName": "GridContainer_gxx0nv8",
    "propertyName": "items",
    "index": 1
  },
  {
    "operation": "insert",
    "name": "NumberInput_paq5fus",
    "values": {
      "layoutConfig": {
        "column": 1,
        "colSpan": 1,
        "row": 1,
        "rowSpan": 1
      },
      "type": "crt.NumberInput",
      "label": "$Resources.Strings.PDS_UsrExpectedOrderValue_zdgd8k1",
      "control": "$PDS_UsrExpectedOrderValue_zdgd8k1",
      "readonly": false,
      "placeholder": "",
      "labelPosition": "above",
      "tooltip": "",
      "visible": true
    },
    "parentName": "GridContainer_x5kuum9",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "ComboBox_4t6hp0d",
    "values": {
      "layoutConfig": {
        "column": 2,
        "colSpan": 1,
        "row": 1,
        "rowSpan": 1
      },
      "type": "crt.ComboBox",
      "label": "$Resources.Strings.PDS_UsrCurrency_6pvi0l7",
      "ariaLabel": "",
      "isAddAllowed": true,
      "showValueAsLink": true,
      "labelPosition": "above",
      "controlActions": [],
      "listActions": [],
      "tooltip": "",
      "control": "$PDS_UsrCurrency_6pvi0l7",
      "visible": true,
      "readonly": false,
      "placeholder": "",
      "valueDetails": "$ComboBox_4t6hp0d_ValueDetails",
      "secondaryDisplayValue": "Symbol"
    },
    "parentName": "GridContainer_x5kuum9",
    "propertyName": "items",
    "index": 1
  },
  {
    "operation": "insert",
    "name": "addRecord_rg4bq7j",
    "values": {
      "code": "addRecord",
      "type": "crt.ComboboxSearchTextAction",
      "icon": "combobox-add-new",
      "caption": "#ResourceString(addRecord_rg4bq7j_caption)#",
      "clicked": {
        "request": "crt.CreateRecordFromLookupRequest",
        "params": {}
      }
    },
    "parentName": "ComboBox_4t6hp0d",
    "propertyName": "listActions",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "NumberInput_9jj4cuw",
    "values": {
      "layoutConfig": {
        "column": 1,
        "colSpan": 1,
        "row": 2,
        "rowSpan": 1
      },
      "type": "crt.NumberInput",
      "label": "$Resources.Strings.PDS_UsrDeliveryYear_pxu70gn",
      "control": "$PDS_UsrDeliveryYear_pxu70gn",
      "readonly": false,
      "placeholder": "",
      "labelPosition": "above",
      "tooltip": "",
      "visible": true
    },
    "parentName": "GridContainer_x5kuum9",
    "propertyName": "items",
    "index": 2
  },
  {
    "operation": "insert",
    "name": "GridContainer_qhc1cgg",
    "values": {
      "layoutConfig": {
        "column": 1,
        "colSpan": 2,
        "row": 3,
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
    },
    "parentName": "GeneralInfoTabContainer",
    "propertyName": "items",
    "index": 2
  },
  {
    "operation": "insert",
    "name": "Label_1trpjzj",
    "values": {
      "layoutConfig": {
        "column": 1,
        "colSpan": 1,
        "row": 1,
        "rowSpan": 1
      },
      "type": "crt.Label",
      "caption": "#MacrosTemplateString(#ResourceString(Label_1trpjzj_caption)#)#",
      "labelType": "headline-3",
      "labelThickness": "semibold",
      "labelEllipsis": false,
      "labelColor": "auto",
      "labelBackgroundColor": "transparent",
      "labelTextAlign": "start",
      "headingLevel": "label",
      "visible": true
    },
    "parentName": "GridContainer_qhc1cgg",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "GridContainer_pfcxmy3",
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
        "colSpan": 1,
        "row": 2,
        "rowSpan": 1
      }
    },
    "parentName": "GridContainer_qhc1cgg",
    "propertyName": "items",
    "index": 1
  },
  {
    "operation": "insert",
    "name": "DateTimePicker_5tbym0c",
    "values": {
      "layoutConfig": {
        "column": 1,
        "colSpan": 1,
        "row": 1,
        "rowSpan": 1
      },
      "type": "crt.DateTimePicker",
      "label": "$Resources.Strings.PDS_StartDate_bkb3xhe",
      "placeholder": "",
      "readonly": false,
      "labelPosition": "above",
      "tooltip": "",
      "pickerType": "date",
      "control": "$PDS_StartDate_bkb3xhe",
      "visible": true
    },
    "parentName": "GridContainer_pfcxmy3",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "DateTimePicker_a3fkgn4",
    "values": {
      "layoutConfig": {
        "column": 2,
        "colSpan": 1,
        "row": 1,
        "rowSpan": 1
      },
      "type": "crt.DateTimePicker",
      "label": "$Resources.Strings.PDS_EndDate_yw2fcgr",
      "placeholder": "",
      "readonly": false,
      "labelPosition": "above",
      "tooltip": "",
      "pickerType": "date",
      "control": "$PDS_EndDate_yw2fcgr",
      "visible": true
    },
    "parentName": "GridContainer_pfcxmy3",
    "propertyName": "items",
    "index": 1
  },
  {
    "operation": "insert",
    "name": "TabContainer_7wcao5a",
    "values": {
      "type": "crt.TabContainer",
      "items": [],
      "caption": "#ResourceString(TabContainer_7wcao5a_caption)#",
      "iconPosition": "left-icon",
      "visible": true,
      "icon": "instapage-icon"
    },
    "parentName": "Tabs",
    "propertyName": "items",
    "index": 1
  },
  {
    "operation": "insert",
    "name": "GridContainer_2sw2w0m",
    "values": {
      "type": "crt.GridContainer",
      "items": [],
      "rows": "minmax(32px, max-content)",
      "columns": [
        "minmax(32px, 1fr)",
        "minmax(32px, 1fr)"
      ],
      "gap": {
        "columnGap": "large",
        "rowGap": null
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
    },
    "parentName": "TabContainer_7wcao5a",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "Input_yqg59jg",
    "values": {
      "layoutConfig": {
        "column": 1,
        "colSpan": 2,
        "row": 1,
        "rowSpan": 1
      },
      "type": "crt.RichTextEditor",
      "label": "$Resources.Strings.PDS_UsrProjectDescription_cum7c2v",
      "control": "$PDS_UsrProjectDescription_cum7c2v",
      "placeholder": "",
      "tooltip": "",
      "readonly": false,
      "multiline": false,
      "labelPosition": "above",
      "filesStorage": {
        "masterRecordColumnValue": "$Id",
        "entitySchemaName": "SysFile",
        "recordColumnName": "RecordId"
      },
      "visible": true,
      "toolbarDisplayMode": null
    },
    "parentName": "GridContainer_2sw2w0m",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "Input_z5i4uz4",
    "values": {
      "layoutConfig": {
        "column": 1,
        "colSpan": 1,
        "row": 2,
        "rowSpan": 1
      },
      "type": "crt.Input",
      "label": "$Resources.Strings.PDS_UsrProjectAddress_8jk3a3h",
      "control": "$PDS_UsrProjectAddress_8jk3a3h",
      "placeholder": "",
      "tooltip": "",
      "readonly": false,
      "multiline": false,
      "labelPosition": "above",
      "visible": true
    },
    "parentName": "GridContainer_2sw2w0m",
    "propertyName": "items",
    "index": 1
  },
  {
    "operation": "insert",
    "name": "TabContainer_jkj4m50",
    "values": {
      "type": "crt.TabContainer",
      "items": [],
      "caption": "#ResourceString(TabContainer_jkj4m50_caption)#",
      "iconPosition": "left-icon",
      "visible": true,
      "icon": "contact-icon"
    },
    "parentName": "Tabs",
    "propertyName": "items",
    "index": 2
  },
  {
    "operation": "insert",
    "name": "ExpansionPanel_meirp3t",
    "values": {
      "type": "crt.ExpansionPanel",
      "tools": [],
      "items": [],
      "title": "#ResourceString(ExpansionPanel_meirp3t_title)#",
      "toggleType": "default",
      "togglePosition": "before",
      "expanded": false,
      "labelColor": "auto",
      "fullWidthHeader": false,
      "titleWidth": 20,
      "padding": {
        "top": "small",
        "bottom": "small",
        "left": "none",
        "right": "none"
      },
      "fitContent": true,
      "visible": true,
      "alignItems": "stretch"
    },
    "parentName": "TabContainer_jkj4m50",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "GridContainer_2cv398r",
    "values": {
      "type": "crt.GridContainer",
      "rows": "minmax(max-content, 24px)",
      "columns": [
        "minmax(32px, 1fr)"
      ],
      "gap": {
        "columnGap": "large",
        "rowGap": 0
      },
      "styles": {
        "overflow-x": "hidden"
      },
      "items": []
    },
    "parentName": "ExpansionPanel_meirp3t",
    "propertyName": "tools",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "FlexContainer_zak9816",
    "values": {
      "type": "crt.FlexContainer",
      "direction": "row",
      "gap": "none",
      "alignItems": "center",
      "items": [],
      "layoutConfig": {
        "colSpan": 1,
        "column": 1,
        "row": 1,
        "rowSpan": 1
      }
    },
    "parentName": "GridContainer_2cv398r",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "GridDetailAddBtn_ktjrtpk",
    "values": {
      "type": "crt.Button",
      "caption": "#ResourceString(GridDetailAddBtn_ktjrtpk_caption)#",
      "icon": "add-button-icon",
      "iconPosition": "only-icon",
      "color": "default",
      "size": "medium",
      "clicked": {
        "request": "crt.CreateRecordRequest",
        "params": {
          "entityName": "UsrProjectXContact",
          "defaultValues": [
            {
              "attributeName": "UsrProject",
              "value": "$Id"
            }
          ]
        }
      },
      "visible": true,
      "clickMode": "default"
    },
    "parentName": "FlexContainer_zak9816",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "GridDetailRefreshBtn_e85ti1n",
    "values": {
      "type": "crt.Button",
      "caption": "#ResourceString(GridDetailRefreshBtn_e85ti1n_caption)#",
      "icon": "reload-icon",
      "iconPosition": "only-icon",
      "color": "default",
      "size": "medium",
      "clicked": {
        "request": "crt.LoadDataRequest",
        "params": {
          "config": {
            "loadType": "reload"
          },
          "dataSourceName": "GridDetail_ofptdroDS"
        }
      }
    },
    "parentName": "FlexContainer_zak9816",
    "propertyName": "items",
    "index": 1
  },
  {
    "operation": "insert",
    "name": "GridDetailSettingsBtn_gc3fnre",
    "values": {
      "type": "crt.Button",
      "caption": "#ResourceString(GridDetailSettingsBtn_gc3fnre_caption)#",
      "icon": "actions-button-icon",
      "iconPosition": "only-icon",
      "color": "default",
      "size": "medium",
      "clickMode": "menu",
      "menuItems": []
    },
    "parentName": "FlexContainer_zak9816",
    "propertyName": "items",
    "index": 2
  },
  {
    "operation": "insert",
    "name": "GridDetailExportDataBtn_hodzum6",
    "values": {
      "type": "crt.MenuItem",
      "caption": "#ResourceString(GridDetailExportDataBtn_hodzum6_caption)#",
      "icon": "export-button-icon",
      "color": "default",
      "size": "medium",
      "clicked": {
        "request": "crt.ExportDataGridToExcelRequest",
        "params": {
          "viewName": "GridDetail_ofptdro"
        }
      }
    },
    "parentName": "GridDetailSettingsBtn_gc3fnre",
    "propertyName": "menuItems",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "GridDetailImportDataBtn_z41l2cp",
    "values": {
      "type": "crt.MenuItem",
      "caption": "#ResourceString(GridDetailImportDataBtn_z41l2cp_caption)#",
      "icon": "import-button-icon",
      "color": "default",
      "size": "medium",
      "clicked": {
        "request": "crt.ImportDataRequest",
        "params": {
          "entitySchemaName": "UsrProjectXContact"
        }
      }
    },
    "parentName": "GridDetailSettingsBtn_gc3fnre",
    "propertyName": "menuItems",
    "index": 1
  },
  {
    "operation": "insert",
    "name": "GridDetailSearchFilter_f6bnb60",
    "values": {
      "type": "crt.SearchFilter",
      "placeholder": "#ResourceString(GridDetailSearchFilter_f6bnb60_placeholder)#",
      "iconOnly": true,
      "_filterOptions": {
        "expose": [
          {
            "attribute": "GridDetailSearchFilter_f6bnb60_GridDetail_ofptdro",
            "converters": [
              {
                "converter": "crt.SearchFilterAttributeConverter",
                "args": [
                  "GridDetail_ofptdro"
                ]
              }
            ]
          }
        ],
        "from": [
          "GridDetailSearchFilter_f6bnb60_SearchValue",
          "GridDetailSearchFilter_f6bnb60_FilteredColumnsGroups"
        ]
      }
    },
    "parentName": "FlexContainer_zak9816",
    "propertyName": "items",
    "index": 3
  },
  {
    "operation": "insert",
    "name": "GridContainer_jccnucz",
    "values": {
      "type": "crt.GridContainer",
      "rows": "minmax(max-content, 32px)",
      "columns": [
        "minmax(32px, 1fr)",
        "minmax(32px, 1fr)"
      ],
      "gap": {
        "columnGap": "large",
        "rowGap": 0
      },
      "styles": {
        "overflow-x": "hidden"
      },
      "items": []
    },
    "parentName": "ExpansionPanel_meirp3t",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "GridDetail_ofptdro",
    "values": {
      "type": "crt.DataGrid",
      "layoutConfig": {
        "colSpan": 2,
        "column": 1,
        "row": 1,
        "rowSpan": 6
      },
      "features": {
        "rows": {
          "selection": {
            "enable": true,
            "multiple": true
          }
        },
        "editable": {
          "enable": false,
          "itemsCreation": false,
          "floatingEditPanel": false
        }
      },
      "items": "$GridDetail_ofptdro",
      "primaryColumnName": "GridDetail_ofptdroDS_Id",
      "columns": [
        {
          "id": "e862cb60-ac53-8e1e-3640-68e4dd92b1d2",
          "code": "GridDetail_ofptdroDS_UsrContact",
          "caption": "#ResourceString(GridDetail_ofptdroDS_UsrContact)#",
          "dataValueType": 10
        },
        {
          "id": "97d2d285-9cd4-9a10-1010-e98dacdce566",
          "code": "GridDetail_ofptdroDS_UsrContact_Department",
          "caption": "#ResourceString(GridDetail_ofptdroDS_UsrContact_Department)#",
          "dataValueType": 10
        },
        {
          "id": "c591d6f5-19fc-b47a-24ca-486e14625da8",
          "code": "GridDetail_ofptdroDS_UsrContact_JobTitle",
          "caption": "#ResourceString(GridDetail_ofptdroDS_UsrContact_JobTitle)#",
          "dataValueType": 28
        },
        {
          "id": "a7c49bf9-f9bf-1169-b5c7-668cda5d0a4b",
          "code": "GridDetail_ofptdroDS_UsrContact_MobilePhone",
          "caption": "#ResourceString(GridDetail_ofptdroDS_UsrContact_MobilePhone)#",
          "dataValueType": 42
        },
        {
          "id": "bae21123-0d80-979e-b63b-f735fd991251",
          "code": "GridDetail_ofptdroDS_UsrContact_Phone",
          "caption": "#ResourceString(GridDetail_ofptdroDS_UsrContact_Phone)#",
          "dataValueType": 42
        },
        {
          "id": "e644b7d3-0a38-30c1-03aa-f556c383724d",
          "code": "GridDetail_ofptdroDS_UsrContact_Email",
          "caption": "#ResourceString(GridDetail_ofptdroDS_UsrContact_Email)#",
          "dataValueType": 45
        }
      ],
      "placeholder": false,
      "visible": true,
      "fitContent": true
    },
    "parentName": "GridContainer_jccnucz",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "TabContainer_h2voz5w",
    "values": {
      "type": "crt.TabContainer",
      "items": [],
      "caption": "#ResourceString(TabContainer_h2voz5w_caption)#",
      "iconPosition": "left-icon",
      "visible": true,
      "icon": "checkbox-icon"
    },
    "parentName": "Tabs",
    "propertyName": "items",
    "index": 3
  },
  {
    "operation": "insert",
    "name": "Timeline_v6j95k9",
    "values": {
      "type": "crt.Timeline",
      "items": [],
      "tools": [],
      "customFilters": [],
      "hideTools": false,
      "masterSchemaId": "$Id",
      "caption": "#ResourceString(Timeline_v6j95k9_caption)#",
      "label": "#ResourceString(Timeline_v6j95k9_label)#",
      "filters": [],
      "masterEntitySchemaName": "Project",
      "filterValues": "$Timeline_v6j95k9_AllTileFilters"
    },
    "parentName": "TabContainer_h2voz5w",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "TimelineTile_Email_dbxcaxr",
    "values": {
      "type": "crt.TimelineTile",
      "classes": [
        "view-element"
      ],
      "linkedColumn": "Project",
      "sortedByColumn": "SendDate",
      "ownerColumn": "SenderContact",
      "iconId": null,
      "data": {
        "columns": [
          {
            "columnName": "Title",
            "columnLayout": {
              "column": 1,
              "row": 1,
              "colSpan": 12,
              "rowSpan": 1
            }
          },
          {
            "columnName": "Body",
            "columnLayout": {
              "column": 1,
              "row": 2,
              "colSpan": 12,
              "rowSpan": 2
            }
          }
        ],
        "schemaName": "Activity",
        "schemaType": "Email",
        "isDefault": true,
        "uId": "c449d832-a4cc-4b01-b9d5-8a12c42a9f89",
        "filter": {
          "columnName": "Type",
          "columnValue": "e2831dec-cfc0-df11-b00f-001d60e938c6",
          "comparisonType": 3
        }
      },
      "filters": "$TimelineTile_Email_dbxcaxr_Items"
    },
    "parentName": "Timeline_v6j95k9",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "TimelineTile_Activity_codqqw3",
    "values": {
      "type": "crt.TimelineTile",
      "classes": [
        "view-element"
      ],
      "linkedColumn": "Project",
      "sortedByColumn": "CreatedOn",
      "ownerColumn": "Owner",
      "iconId": null,
      "data": {
        "columns": [
          {
            "columnName": "Title",
            "columnLayout": null
          },
          {
            "columnName": "Status",
            "columnLayout": {
              "column": 1,
              "row": 1,
              "colSpan": 6,
              "rowSpan": 1
            }
          },
          {
            "columnName": "DetailedResult",
            "columnLayout": {
              "column": 1,
              "row": 2,
              "colSpan": 6,
              "rowSpan": 1
            }
          }
        ],
        "schemaName": "Activity",
        "schemaType": "Activity",
        "isDefault": true,
        "uId": "c449d832-a4cc-4b01-b9d5-8a12c42a9f89",
        "filter": {
          "columnName": "Type",
          "columnValue": "e2831dec-cfc0-df11-b00f-001d60e938c6",
          "comparisonType": 4
        }
      },
      "filters": "$TimelineTile_Activity_codqqw3_Items",
      "iconPosition": "only-icon",
      "icon": "star-icon",
      "visible": true
    },
    "parentName": "Timeline_v6j95k9",
    "propertyName": "items",
    "index": 1
  },
  {
    "operation": "insert",
    "name": "TimelineTile_Case_gvfpeox",
    "values": {
      "type": "crt.TimelineTile",
      "classes": [
        "view-element"
      ],
      "linkedColumn": "UsrADProject",
      "sortedByColumn": "RegisteredOn",
      "ownerColumn": "Owner",
      "iconId": null,
      "data": {
        "columns": [
          {
            "columnName": "Category",
            "columnLayout": {
              "column": 1,
              "row": 1,
              "colSpan": 3,
              "rowSpan": 1
            }
          },
          {
            "columnName": "Priority",
            "columnLayout": {
              "column": 4,
              "row": 1,
              "colSpan": 3,
              "rowSpan": 1
            }
          },
          {
            "columnName": "Status",
            "columnLayout": {
              "column": 7,
              "row": 1,
              "colSpan": 3,
              "rowSpan": 1
            }
          },
          {
            "columnName": "SolutionDate",
            "columnLayout": {
              "column": 10,
              "row": 1,
              "colSpan": 3,
              "rowSpan": 1
            }
          },
          {
            "columnName": "Symptoms",
            "columnLayout": {
              "column": 1,
              "row": 2,
              "colSpan": 12,
              "rowSpan": 1
            }
          }
        ],
        "schemaName": "Case",
        "schemaType": null,
        "isDefault": true,
        "uId": "117d32f9-8275-4534-8411-1c66115ce9cd",
        "filter": null
      },
      "filters": "$TimelineTile_Case_gvfpeox_Items",
      "iconPosition": "only-icon",
      "icon": "star-icon",
      "visible": true
    },
    "parentName": "Timeline_v6j95k9",
    "propertyName": "items",
    "index": 2
  },
  {
    "operation": "insert",
    "name": "TimelineTile_Contract_si47a69",
    "values": {
      "type": "crt.TimelineTile",
      "classes": [
        "view-element"
      ],
      "linkedColumn": "UsrADProject",
      "sortedByColumn": "CreatedOn",
      "ownerColumn": "CreatedBy",
      "iconId": null,
      "data": {
        "columns": [
          {
            "columnName": "CreatedOn",
            "columnLayout": null
          },
          {
            "columnName": "Number",
            "columnLayout": null
          },
          {
            "columnName": "Account",
            "columnLayout": {
              "column": 1,
              "row": 1,
              "colSpan": 3,
              "rowSpan": 1
            }
          },
          {
            "columnName": "Contact",
            "columnLayout": {
              "column": 4,
              "row": 1,
              "colSpan": 3,
              "rowSpan": 1
            }
          },
          {
            "columnName": "State",
            "columnLayout": {
              "column": 7,
              "row": 1,
              "colSpan": 3,
              "rowSpan": 1
            }
          },
          {
            "columnName": "StartDate",
            "columnLayout": {
              "column": 1,
              "row": 2,
              "colSpan": 3,
              "rowSpan": 1
            }
          },
          {
            "columnName": "EndDate",
            "columnLayout": {
              "column": 2,
              "row": 2,
              "colSpan": 3,
              "rowSpan": 1
            }
          }
        ],
        "schemaName": "Contract",
        "schemaType": null,
        "isDefault": true,
        "uId": "897be3e4-0333-467d-88e2-b7a945c0d810",
        "filter": null
      },
      "filters": "$TimelineTile_Contract_si47a69_Items",
      "iconPosition": "only-icon",
      "icon": "star-icon",
      "visible": true
    },
    "parentName": "Timeline_v6j95k9",
    "propertyName": "items",
    "index": 3
  },
  {
    "operation": "insert",
    "name": "TimelineTile_Document_5h6dkpl",
    "values": {
      "type": "crt.TimelineTile",
      "classes": [
        "view-element"
      ],
      "linkedColumn": "Project",
      "sortedByColumn": "CreatedOn",
      "ownerColumn": "CreatedBy",
      "iconId": null,
      "data": {
        "columns": [
          {
            "columnName": "CreatedOn",
            "columnLayout": null
          },
          {
            "columnName": "Number",
            "columnLayout": null
          },
          {
            "columnName": "Type",
            "columnLayout": {
              "column": 1,
              "row": 1,
              "colSpan": 3,
              "rowSpan": 1
            }
          },
          {
            "columnName": "State",
            "columnLayout": {
              "column": 4,
              "row": 1,
              "colSpan": 3,
              "rowSpan": 1
            }
          }
        ],
        "schemaName": "Document",
        "schemaType": null,
        "isDefault": true,
        "uId": "8b33b6b2-19f7-4222-9161-b4054b3fbb09",
        "filter": null
      },
      "filters": "$TimelineTile_Document_5h6dkpl_Items"
    },
    "parentName": "Timeline_v6j95k9",
    "propertyName": "items",
    "index": 4
  },
  {
    "operation": "insert",
    "name": "TimelineTile_Invoice_0f9vkc5",
    "values": {
      "type": "crt.TimelineTile",
      "classes": [
        "view-element"
      ],
      "linkedColumn": "Project",
      "sortedByColumn": "CreatedOn",
      "ownerColumn": "CreatedBy",
      "iconId": null,
      "data": {
        "columns": [
          {
            "columnName": "CreatedOn",
            "columnLayout": null
          },
          {
            "columnName": "Number",
            "columnLayout": null
          },
          {
            "columnName": "Account",
            "columnLayout": {
              "column": 1,
              "row": 1,
              "colSpan": 3,
              "rowSpan": 1
            }
          },
          {
            "columnName": "Contact",
            "columnLayout": {
              "column": 4,
              "row": 1,
              "colSpan": 3,
              "rowSpan": 1
            }
          },
          {
            "columnName": "PaymentStatus",
            "columnLayout": {
              "column": 7,
              "row": 1,
              "colSpan": 3,
              "rowSpan": 1
            }
          },
          {
            "columnName": "Amount",
            "columnLayout": {
              "column": 1,
              "row": 2,
              "colSpan": 3,
              "rowSpan": 1
            }
          },
          {
            "columnName": "DueDate",
            "columnLayout": {
              "column": 4,
              "row": 2,
              "colSpan": 3,
              "rowSpan": 1
            }
          }
        ],
        "schemaName": "Invoice",
        "schemaType": null,
        "isDefault": true,
        "uId": "bfb313dd-bb55-4e1b-8e42-3d346e0da7c5",
        "filter": null
      },
      "filters": "$TimelineTile_Invoice_0f9vkc5_Items"
    },
    "parentName": "Timeline_v6j95k9",
    "propertyName": "items",
    "index": 5
  },
  {
    "operation": "insert",
    "name": "TimelineTile_Opportunity_40nj2qi",
    "values": {
      "type": "crt.TimelineTile",
      "classes": [
        "view-element"
      ],
      "linkedColumn": "UsrADProject",
      "sortedByColumn": "CreatedOn",
      "ownerColumn": "CreatedBy",
      "iconId": null,
      "data": {
        "columns": [
          {
            "columnName": "CreatedOn",
            "columnLayout": null
          },
          {
            "columnName": "Title",
            "columnLayout": null
          },
          {
            "columnName": "Account",
            "columnLayout": {
              "column": 1,
              "row": 1,
              "colSpan": 3,
              "rowSpan": 1
            }
          },
          {
            "columnName": "Contact",
            "columnLayout": {
              "column": 4,
              "row": 1,
              "colSpan": 3,
              "rowSpan": 1
            }
          },
          {
            "columnName": "Amount",
            "columnLayout": {
              "column": 1,
              "row": 2,
              "colSpan": 3,
              "rowSpan": 1
            }
          },
          {
            "columnName": "DueDate",
            "columnLayout": {
              "column": 4,
              "row": 2,
              "colSpan": 3,
              "rowSpan": 1
            }
          }
        ],
        "schemaName": "Opportunity",
        "schemaType": null,
        "isDefault": true,
        "uId": "ae46fb87-c02c-4ae8-ad31-a923cdd994cf",
        "filter": null
      },
      "filters": "$TimelineTile_Opportunity_40nj2qi_Items"
    },
    "parentName": "Timeline_v6j95k9",
    "propertyName": "items",
    "index": 6
  },
  {
    "operation": "insert",
    "name": "TimelineTile_Order_c47q2l3",
    "values": {
      "type": "crt.TimelineTile",
      "classes": [
        "view-element"
      ],
      "linkedColumn": "UsrADProject",
      "sortedByColumn": "CreatedOn",
      "ownerColumn": "CreatedBy",
      "iconId": null,
      "data": {
        "columns": [
          {
            "columnName": "CreatedOn",
            "columnLayout": null
          },
          {
            "columnName": "Number",
            "columnLayout": null
          },
          {
            "columnName": "Account",
            "columnLayout": {
              "column": 1,
              "row": 1,
              "colSpan": 3,
              "rowSpan": 1
            }
          },
          {
            "columnName": "Contact",
            "columnLayout": {
              "column": 4,
              "row": 1,
              "colSpan": 3,
              "rowSpan": 1
            }
          },
          {
            "columnName": "Status",
            "columnLayout": {
              "column": 1,
              "row": 2,
              "colSpan": 3,
              "rowSpan": 1
            }
          },
          {
            "columnName": "Amount",
            "columnLayout": {
              "column": 4,
              "row": 2,
              "colSpan": 3,
              "rowSpan": 1
            }
          }
        ],
        "schemaName": "Order",
        "schemaType": null,
        "isDefault": true,
        "uId": "80294582-06b5-4faa-a85f-3323e5536b71",
        "filter": null
      },
      "filters": "$TimelineTile_Order_c47q2l3_Items"
    },
    "parentName": "Timeline_v6j95k9",
    "propertyName": "items",
    "index": 7
  },
  {
    "operation": "insert",
    "name": "TimelineTile_SysFile_r7hu9ms",
    "values": {
      "type": "crt.TimelineTile",
      "classes": [
        "view-element"
      ],
      "sortedByColumn": "CreatedOn",
      "data": {
        "schemaType": "SysFile",
        "isDefault": true
      }
    },
    "parentName": "Timeline_v6j95k9",
    "propertyName": "items",
    "index": 8
  },
  {
    "operation": "insert",
    "name": "TimelineTile_Feed_n9fozsx",
    "values": {
      "type": "crt.TimelineTile",
      "classes": [
        "view-element"
      ],
      "sortedByColumn": "CreatedOn",
      "data": {
        "schemaType": "Feed",
        "isDefault": true
      }
    },
    "parentName": "Timeline_v6j95k9",
    "propertyName": "items",
    "index": 9
  },
  {
    "operation": "insert",
    "name": "TimelineTile_Lead_xp8wx11",
    "values": {
      "type": "crt.TimelineTile",
      "classes": [
        "view-element"
      ],
      "linkedColumn": "UsrProject",
      "sortedByColumn": "CreatedOn",
      "ownerColumn": "CreatedBy",
      "iconId": null,
      "data": {
        "columns": [
          {
            "columnName": "CreatedOn",
            "columnLayout": null
          },
          {
            "columnName": "LeadName",
            "columnLayout": null
          },
          {
            "columnName": "QualifiedAccount",
            "columnLayout": {
              "column": 1,
              "row": 1,
              "colSpan": 3,
              "rowSpan": 1
            }
          },
          {
            "columnName": "QualifiedContact",
            "columnLayout": {
              "column": 4,
              "row": 1,
              "colSpan": 3,
              "rowSpan": 1
            }
          },
          {
            "columnName": "QualifyStatus",
            "columnLayout": {
              "column": 1,
              "row": 2,
              "colSpan": 3,
              "rowSpan": 1
            }
          }
        ],
        "schemaName": "Lead",
        "schemaType": null,
        "isDefault": true,
        "uId": "41af89e9-750b-4ebb-8cac-ff39b64841ec",
        "filter": null
      },
      "filters": "$TimelineTile_Lead_xp8wx11_Items"
    },
    "parentName": "Timeline_v6j95k9",
    "propertyName": "items",
    "index": 10
  },
  {
    "operation": "insert",
    "name": "MessageComposerSelector_q906zwm",
    "values": {
      "type": "crt.MessageComposerSelector",
      "items": [],
      "classes": [
        "view-element"
      ],
      "visible": true,
      "defaultChannel": "Email"
    },
    "parentName": "Timeline_v6j95k9",
    "propertyName": "tools",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "FeedComposer_cw5eqp1",
    "values": {
      "type": "crt.FeedComposer",
      "classes": [
        "view-element"
      ],
      "sortedByColumn": "CreatedOn",
      "data": {
        "uId": "6d006667-3496-4e2d-adc0-3a42648dd97b",
        "schemaType": "Feed",
        "caption": "Feed",
        "sortedByColumn": "CreatedOn",
        "typeName": "crt.FeedComposer",
        "icon": "feed-composer-icon"
      },
      "feedType": "Record",
      "primaryColumnValue": "$Id",
      "cardState": "$CardState",
      "entitySchemaName": "Project",
      "dataSourceName": "PDS"
    },
    "parentName": "MessageComposerSelector_q906zwm",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "EmailComposer_wjmkf2c",
    "values": {
      "type": "crt.EmailComposer",
      "classes": [
        "view-element"
      ],
      "sortedByColumn": "CreatedOn",
      "data": {
        "uId": "75aadc65-a834-42d0-b880-fac9bdee4c86",
        "schemaType": "Email",
        "caption": "Email",
        "sortedByColumn": "CreatedOn",
        "typeName": "crt.EmailComposer",
        "icon": "email-composer-icon"
      },
      "recordId": "$Id",
      "defaultSenderRequest": "crt.DefaultSenderComposerRequest",
      "entitySchemaName": "Project"
    },
    "parentName": "MessageComposerSelector_q906zwm",
    "propertyName": "items",
    "index": 1
  },
  {
    "operation": "insert",
    "name": "ChatComposer_esoify2",
    "values": {
      "type": "crt.ChatComposer",
      "classes": [
        "view-element"
      ],
      "sortedByColumn": "CreatedOn",
      "data": {
        "uId": "a1c2d3e4-f5a6-47b8-c9d0-e1f2a3b4c5d6",
        "schemaType": "Telegram",
        "caption": "Telegram",
        "sortedByColumn": "CreatedOn",
        "typeName": "crt.ChatComposer",
        "icon": "telegram-composer-icon"
      },
      "items": [],
      "providerId": "$ChatComposer_esoify2_ProviderId",
      "selectedChannelSchemaType": "$ChatComposer_esoify2_SelectedChannelSchemaType",
      "selectedChannelId": "$ChatComposer_esoify2_SelectedChannelId",
      "selectedContactId": "$ChatComposer_esoify2_SelectedContactId",
      "channels": "$ChatComposer_esoify2_Channels",
      "sendersChannels": "$ChatComposer_esoify2_ActiveChannels",
      "recipientContacts": "$ChatComposer_esoify2_RecipientContacts",
      "chatInput": "$OutboundChatInput",
      "filesToUpload": "$FilesToUpload",
      "selectedChannelIdChange": {
        "request": "crt.ChangeViewModelAttributeValueRequest",
        "params": {
          "attributeName": "ChatComposer_esoify2_SelectedChannelId",
          "attributeValue": "@event"
        }
      },
      "selectedContactIdChange": {
        "request": "crt.ChangeViewModelAttributeValueRequest",
        "params": {
          "attributeName": "ChatComposer_esoify2_SelectedContactId",
          "attributeValue": "@event"
        }
      },
      "chatId": "$ChatComposer_esoify2_ChatId",
      "chatIdChange": {
        "request": "crt.ChangeViewModelAttributeValueRequest",
        "params": {
          "attributeName": "ChatComposer_esoify2_ChatId",
          "attributeValue": "@event"
        }
      },
      "editorReadonlyChange": {
        "request": "crt.ChangeViewModelAttributeValueRequest",
        "params": {
          "attributeName": "OutboundChatInputReadonly",
          "attributeValue": "@event"
        }
      },
      "editorPlaceholderKeyChange": {
        "request": "crt.ChangeViewModelAttributeValueRequest",
        "params": {
          "attributeName": "OutboundChatReadonlyPlaceholderKey",
          "attributeValue": "@event"
        }
      },
      "editorTooltipChange": {
        "request": "crt.ChangeViewModelAttributeValueRequest",
        "params": {
          "attributeName": "OutboundChatEditorTooltip",
          "attributeValue": "@event"
        }
      },
      "sendDisabledChange": {
        "request": "crt.ChangeViewModelAttributeValueRequest",
        "params": {
          "attributeName": "OutboundChatInputDisabled",
          "attributeValue": "@event"
        }
      },
      "messageInputDisabledChange": {
        "request": "crt.ChangeViewModelAttributeValueRequest",
        "params": {
          "attributeName": "OutboundChatMessageInputDisabled",
          "attributeValue": "@event"
        }
      },
      "templateSelectDisabledChange": {
        "request": "crt.ChangeViewModelAttributeValueRequest",
        "params": {
          "attributeName": "OutboundChatTemplateSelectDisabled",
          "attributeValue": "@event"
        }
      },
      "chatInputChange": {
        "request": "crt.ChangeViewModelAttributeValueRequest",
        "params": {
          "attributeName": "OutboundChatInput",
          "attributeValue": "@event"
        }
      },
      "filesToUploadChange": {
        "request": "crt.ChangeViewModelAttributeValueRequest",
        "params": {
          "attributeName": "FilesToUpload",
          "attributeValue": "@event"
        }
      },
      "recordIdDataSourceName": "PDS",
      "sendMessage": {
        "request": "crt.SendOutboundChatRequest",
        "params": {
          "composerName": "ChatComposer_esoify2",
          "recordIdDataSourceName": "PDS"
        }
      }
    },
    "parentName": "MessageComposerSelector_q906zwm",
    "propertyName": "items",
    "index": 2
  },
  {
    "operation": "insert",
    "name": "OutboundChat_EditorBody",
    "values": {
      "type": "crt.MessageEditorBody",
      "toolbarItems": [],
      "inputs": [],
      "chatInput": "$OutboundChatInput",
      "isDisabled": "$OutboundChatInputDisabled",
      "attachments": "$FilesToUpload",
      "isFileUploadEnabled": "$OutboundIsFileUploadEnabled",
      "editorTooltip": "$OutboundChatEditorTooltip",
      "sendMessage": {
        "request": "crt.SendOutboundChatRequest",
        "params": {
          "composerName": "ChatComposer_esoify2",
          "recordIdDataSourceName": "PDS"
        }
      }
    },
    "parentName": "ChatComposer_esoify2",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "OutboundChat_AttachFileButton",
    "values": {
      "type": "crt.Button",
      "icon": "clip-button-icon",
      "size": "small",
      "iconPosition": "only-icon",
      "clicked": {
        "request": "crt.SelectChatFilesRequest"
      },
      "visible": "$OutboundIsFileUploadEnabled",
      "disabled": "$OutboundChatInputDisabled"
    },
    "parentName": "OutboundChat_EditorBody",
    "propertyName": "toolbarItems",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "OutboundChat_EmojiSelect",
    "values": {
      "type": "crt.EmojiSelect",
      "chatInput": "$OutboundChatInput",
      "chatId": "$ChatComposer_esoify2_ChatId",
      "chatInputChange": {
        "request": "crt.ChangeViewModelAttributeValueRequest",
        "params": {
          "attributeName": "OutboundChatInput",
          "attributeValue": "@event"
        }
      },
      "disabled": "$OutboundChatInputDisabled"
    },
    "parentName": "OutboundChat_EditorBody",
    "propertyName": "toolbarItems",
    "index": 1
  },
  {
    "operation": "insert",
    "name": "OutboundChat_TemplateSelect",
    "values": {
      "type": "crt.TemplateSelect",
      "disabled": "$OutboundChatTemplateSelectDisabled",
      "chatInput": "$OutboundChatInput",
      "chatId": "$ChatComposer_esoify2_ChatId",
      "editorDisabled": "$OutboundChatInputDisabled",
      "chatInputChange": {
        "request": "crt.ChangeViewModelAttributeValueRequest",
        "params": {
          "attributeName": "OutboundChatInput",
          "attributeValue": "@event"
        }
      }
    },
    "parentName": "OutboundChat_EditorBody",
    "propertyName": "toolbarItems",
    "index": 2
  },
  {
    "operation": "insert",
    "name": "OutboundChat_EditorInput",
    "values": {
      "type": "crt.MessageEditorInput",
      "inputMode": "text",
      "chatInput": "$OutboundChatInput",
      "attachments": "$FilesToUpload",
      "isFileUploadEnabled": "$OutboundIsFileUploadEnabled",
      "isDisabled": "$OutboundChatMessageInputDisabled",
      "readonly": "$OutboundChatInputReadonly",
      "readonlyPlaceholderKey": "$OutboundChatReadonlyPlaceholderKey",
      "chatInputChange": {
        "request": "crt.ChangeViewModelAttributeValueRequest",
        "params": {
          "attributeName": "OutboundChatInput",
          "attributeValue": "@event"
        }
      },
      "sendMessage": {
        "request": "crt.SendOutboundChatRequest",
        "params": {
          "composerName": "ChatComposer_esoify2",
          "recordIdDataSourceName": "PDS"
        }
      }
    },
    "parentName": "OutboundChat_EditorBody",
    "propertyName": "inputs",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "TimelineFilterContainer_y404oel",
    "values": {
      "type": "crt.FlexContainer",
      "items": [],
      "classes": [],
      "fitContent": true,
      "direction": "row"
    },
    "parentName": "Timeline_v6j95k9",
    "propertyName": "customFilters",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "Timeline_v6j95k9_TimelineFilter_Entity",
    "values": {
      "type": "TimelineFilter_Entity",
      "visible": true
    },
    "parentName": "Timeline_v6j95k9",
    "propertyName": "filters",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "Timeline_v6j95k9_TimelineFilter_Date",
    "values": {
      "type": "TimelineFilter_Date",
      "visible": true
    },
    "parentName": "Timeline_v6j95k9",
    "propertyName": "filters",
    "index": 1
  },
  {
    "operation": "insert",
    "name": "Timeline_v6j95k9_TimelineFilter_Owner",
    "values": {
      "type": "TimelineFilter_Owner",
      "visible": true
    },
    "parentName": "Timeline_v6j95k9",
    "propertyName": "filters",
    "index": 2
  },
  {
    "operation": "insert",
    "name": "Timeline_v6j95k9_TimelineFilter_SystemMessages",
    "values": {
      "type": "TimelineFilter_SystemMessages",
      "visible": true
    },
    "parentName": "Timeline_v6j95k9",
    "propertyName": "filters",
    "index": 3
  },
  {
    "operation": "insert",
    "name": "TabContainer_39prrhn",
    "values": {
      "type": "crt.TabContainer",
      "items": [],
      "caption": "#ResourceString(TabContainer_39prrhn_caption)#",
      "iconPosition": "left-icon",
      "visible": true,
      "icon": "coins-icon"
    },
    "parentName": "Tabs",
    "propertyName": "items",
    "index": 4
  },
  {
    "operation": "insert",
    "name": "ExpansionPanel_ws7o5qm",
    "values": {
      "type": "crt.ExpansionPanel",
      "tools": [],
      "items": [],
      "title": "#ResourceString(ExpansionPanel_ws7o5qm_title)#",
      "toggleType": "default",
      "togglePosition": "before",
      "expanded": true,
      "labelColor": "auto",
      "fullWidthHeader": false,
      "titleWidth": 20,
      "padding": {
        "top": "small",
        "bottom": "small",
        "left": "none",
        "right": "none"
      },
      "fitContent": true,
      "visible": true,
      "alignItems": "stretch"
    },
    "parentName": "TabContainer_39prrhn",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "GridContainer_ws47ukv",
    "values": {
      "type": "crt.GridContainer",
      "rows": "minmax(max-content, 24px)",
      "columns": [
        "minmax(32px, 1fr)"
      ],
      "gap": {
        "columnGap": "large",
        "rowGap": 0
      },
      "styles": {
        "overflow-x": "hidden"
      },
      "items": []
    },
    "parentName": "ExpansionPanel_ws7o5qm",
    "propertyName": "tools",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "FlexContainer_agah4ii",
    "values": {
      "type": "crt.FlexContainer",
      "direction": "row",
      "gap": "none",
      "alignItems": "center",
      "items": [],
      "layoutConfig": {
        "colSpan": 1,
        "column": 1,
        "row": 1,
        "rowSpan": 1
      }
    },
    "parentName": "GridContainer_ws47ukv",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "GridDetailAddBtn_52vt3a7",
    "values": {
      "type": "crt.Button",
      "caption": "#ResourceString(GridDetailAddBtn_52vt3a7_caption)#",
      "icon": "add-button-icon",
      "iconPosition": "only-icon",
      "color": "default",
      "size": "medium",
      "clicked": {
        "request": "crt.CreateRecordRequest",
        "params": {
          "entityName": "Lead"
        }
      },
      "visible": false,
      "clickMode": "default"
    },
    "parentName": "FlexContainer_agah4ii",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "GridDetailRefreshBtn_gse8zar",
    "values": {
      "type": "crt.Button",
      "caption": "#ResourceString(GridDetailRefreshBtn_gse8zar_caption)#",
      "icon": "reload-icon",
      "iconPosition": "only-icon",
      "color": "default",
      "size": "medium",
      "clicked": {
        "request": "crt.LoadDataRequest",
        "params": {
          "config": {
            "loadType": "reload"
          },
          "dataSourceName": "GridDetail_ve0qd8fDS"
        }
      }
    },
    "parentName": "FlexContainer_agah4ii",
    "propertyName": "items",
    "index": 1
  },
  {
    "operation": "insert",
    "name": "GridDetailSettingsBtn_ghzo78q",
    "values": {
      "type": "crt.Button",
      "caption": "#ResourceString(GridDetailSettingsBtn_ghzo78q_caption)#",
      "icon": "actions-button-icon",
      "iconPosition": "only-icon",
      "color": "default",
      "size": "medium",
      "clickMode": "menu",
      "menuItems": []
    },
    "parentName": "FlexContainer_agah4ii",
    "propertyName": "items",
    "index": 2
  },
  {
    "operation": "insert",
    "name": "GridDetailExportDataBtn_xmfc9mf",
    "values": {
      "type": "crt.MenuItem",
      "caption": "#ResourceString(GridDetailExportDataBtn_xmfc9mf_caption)#",
      "icon": "export-button-icon",
      "color": "default",
      "size": "medium",
      "clicked": {
        "request": "crt.ExportDataGridToExcelRequest",
        "params": {
          "viewName": "GridDetail_ve0qd8f"
        }
      }
    },
    "parentName": "GridDetailSettingsBtn_ghzo78q",
    "propertyName": "menuItems",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "GridDetailImportDataBtn_2ilruhy",
    "values": {
      "type": "crt.MenuItem",
      "caption": "#ResourceString(GridDetailImportDataBtn_2ilruhy_caption)#",
      "icon": "import-button-icon",
      "color": "default",
      "size": "medium",
      "clicked": {
        "request": "crt.ImportDataRequest",
        "params": {
          "entitySchemaName": "Lead"
        }
      }
    },
    "parentName": "GridDetailSettingsBtn_ghzo78q",
    "propertyName": "menuItems",
    "index": 1
  },
  {
    "operation": "insert",
    "name": "GridDetailSearchFilter_8f8aeoo",
    "values": {
      "type": "crt.SearchFilter",
      "placeholder": "#ResourceString(GridDetailSearchFilter_8f8aeoo_placeholder)#",
      "iconOnly": true,
      "_filterOptions": {
        "expose": [
          {
            "attribute": "GridDetailSearchFilter_8f8aeoo_GridDetail_ve0qd8f",
            "converters": [
              {
                "converter": "crt.SearchFilterAttributeConverter",
                "args": [
                  "GridDetail_ve0qd8f"
                ]
              }
            ]
          }
        ],
        "from": [
          "GridDetailSearchFilter_8f8aeoo_SearchValue",
          "GridDetailSearchFilter_8f8aeoo_FilteredColumnsGroups"
        ]
      }
    },
    "parentName": "FlexContainer_agah4ii",
    "propertyName": "items",
    "index": 3
  },
  {
    "operation": "insert",
    "name": "GridContainer_958s64z",
    "values": {
      "type": "crt.GridContainer",
      "rows": "minmax(max-content, 32px)",
      "columns": [
        "minmax(32px, 1fr)",
        "minmax(32px, 1fr)"
      ],
      "gap": {
        "columnGap": "large",
        "rowGap": 0
      },
      "styles": {
        "overflow-x": "hidden"
      },
      "items": []
    },
    "parentName": "ExpansionPanel_ws7o5qm",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "GridDetail_ve0qd8f",
    "values": {
      "type": "crt.DataGrid",
      "layoutConfig": {
        "colSpan": 2,
        "column": 1,
        "row": 1,
        "rowSpan": 6
      },
      "features": {
        "rows": {
          "selection": {
            "enable": true,
            "multiple": true
          }
        },
        "editable": {
          "enable": false,
          "itemsCreation": false,
          "floatingEditPanel": false
        }
      },
      "items": "$GridDetail_ve0qd8f",
      "primaryColumnName": "GridDetail_ve0qd8fDS_Id",
      "columns": [
        {
          "id": "61784f21-756d-2f53-ad5a-0152992de41a",
          "code": "GridDetail_ve0qd8fDS_LeadName",
          "caption": "#ResourceString(GridDetail_ve0qd8fDS_LeadName)#",
          "dataValueType": 30,
          "width": 250
        },
        {
          "id": "6f712a74-73e8-a863-6846-4a9ff8c53c69",
          "code": "GridDetail_ve0qd8fDS_Status",
          "caption": "#ResourceString(GridDetail_ve0qd8fDS_Status)#",
          "dataValueType": 10
        },
        {
          "id": "d43ad972-1171-fd65-1d0d-0db82b2196e0",
          "code": "GridDetail_ve0qd8fDS_Owner",
          "caption": "#ResourceString(GridDetail_ve0qd8fDS_Owner)#",
          "dataValueType": 10
        },
        {
          "id": "a1a545db-760a-e8a1-0a20-a132c9214810",
          "code": "GridDetail_ve0qd8fDS_CreatedOn",
          "caption": "#ResourceString(GridDetail_ve0qd8fDS_CreatedOn)#",
          "dataValueType": 7
        },
        {
          "id": "4378fd3a-cc63-a1cd-4966-123d4bb258ef",
          "code": "GridDetail_ve0qd8fDS_CreatedBy",
          "caption": "#ResourceString(GridDetail_ve0qd8fDS_CreatedBy)#",
          "dataValueType": 10
        },
        {
          "id": "1b809428-7a74-4709-2a4b-a80ecff6ada1",
          "code": "GridDetail_ve0qd8fDS_ModifiedOn",
          "caption": "#ResourceString(GridDetail_ve0qd8fDS_ModifiedOn)#",
          "dataValueType": 7
        },
        {
          "id": "f1059f5a-a1da-565b-44ff-8972907524d7",
          "code": "GridDetail_ve0qd8fDS_ModifiedBy",
          "caption": "#ResourceString(GridDetail_ve0qd8fDS_ModifiedBy)#",
          "dataValueType": 10
        }
      ],
      "placeholder": false,
      "visible": true,
      "fitContent": true
    },
    "parentName": "GridContainer_958s64z",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "TabContainer_okf0kch",
    "values": {
      "type": "crt.TabContainer",
      "items": [],
      "caption": "#ResourceString(TabContainer_okf0kch_caption)#",
      "iconPosition": "left-icon",
      "visible": true,
      "icon": "money-icon"
    },
    "parentName": "Tabs",
    "propertyName": "items",
    "index": 5
  },
  {
    "operation": "insert",
    "name": "ExpansionPanel_c1nhz2l",
    "values": {
      "type": "crt.ExpansionPanel",
      "tools": [],
      "items": [],
      "title": "#ResourceString(ExpansionPanel_c1nhz2l_title)#",
      "toggleType": "default",
      "togglePosition": "before",
      "expanded": true,
      "labelColor": "auto",
      "fullWidthHeader": false,
      "titleWidth": 20,
      "padding": {
        "top": "small",
        "bottom": "small",
        "left": "none",
        "right": "none"
      },
      "fitContent": true,
      "visible": true,
      "alignItems": "stretch"
    },
    "parentName": "TabContainer_okf0kch",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "GridContainer_kzzqewo",
    "values": {
      "type": "crt.GridContainer",
      "rows": "minmax(max-content, 24px)",
      "columns": [
        "minmax(32px, 1fr)"
      ],
      "gap": {
        "columnGap": "large",
        "rowGap": 0
      },
      "styles": {
        "overflow-x": "hidden"
      },
      "items": []
    },
    "parentName": "ExpansionPanel_c1nhz2l",
    "propertyName": "tools",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "FlexContainer_oclog28",
    "values": {
      "type": "crt.FlexContainer",
      "direction": "row",
      "gap": "none",
      "alignItems": "center",
      "items": [],
      "layoutConfig": {
        "colSpan": 1,
        "column": 1,
        "row": 1,
        "rowSpan": 1
      }
    },
    "parentName": "GridContainer_kzzqewo",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "GridDetailAddBtn_r1hyqz4",
    "values": {
      "type": "crt.Button",
      "caption": "#ResourceString(GridDetailAddBtn_r1hyqz4_caption)#",
      "icon": "add-button-icon",
      "iconPosition": "only-icon",
      "color": "default",
      "size": "medium",
      "clicked": {
        "request": "crt.CreateRecordRequest",
        "params": {
          "entityName": "Opportunity",
          "defaultValues": [
            {
              "attributeName": "UsrADProject",
              "value": "$Id"
            }
          ]
        }
      },
      "visible": true,
      "clickMode": "default"
    },
    "parentName": "FlexContainer_oclog28",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "GridDetailRefreshBtn_q3ngeyk",
    "values": {
      "type": "crt.Button",
      "caption": "#ResourceString(GridDetailRefreshBtn_q3ngeyk_caption)#",
      "icon": "reload-icon",
      "iconPosition": "only-icon",
      "color": "default",
      "size": "medium",
      "clicked": {
        "request": "crt.LoadDataRequest",
        "params": {
          "config": {
            "loadType": "reload"
          },
          "dataSourceName": "GridDetail_zfmb2cnDS"
        }
      }
    },
    "parentName": "FlexContainer_oclog28",
    "propertyName": "items",
    "index": 1
  },
  {
    "operation": "insert",
    "name": "GridDetailSettingsBtn_gn06han",
    "values": {
      "type": "crt.Button",
      "caption": "#ResourceString(GridDetailSettingsBtn_gn06han_caption)#",
      "icon": "actions-button-icon",
      "iconPosition": "only-icon",
      "color": "default",
      "size": "medium",
      "clickMode": "menu",
      "menuItems": []
    },
    "parentName": "FlexContainer_oclog28",
    "propertyName": "items",
    "index": 2
  },
  {
    "operation": "insert",
    "name": "GridDetailExportDataBtn_vra0ap9",
    "values": {
      "type": "crt.MenuItem",
      "caption": "#ResourceString(GridDetailExportDataBtn_vra0ap9_caption)#",
      "icon": "export-button-icon",
      "color": "default",
      "size": "medium",
      "clicked": {
        "request": "crt.ExportDataGridToExcelRequest",
        "params": {
          "viewName": "GridDetail_zfmb2cn"
        }
      }
    },
    "parentName": "GridDetailSettingsBtn_gn06han",
    "propertyName": "menuItems",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "GridDetailImportDataBtn_735ujxn",
    "values": {
      "type": "crt.MenuItem",
      "caption": "#ResourceString(GridDetailImportDataBtn_735ujxn_caption)#",
      "icon": "import-button-icon",
      "color": "default",
      "size": "medium",
      "clicked": {
        "request": "crt.ImportDataRequest",
        "params": {
          "entitySchemaName": "Opportunity"
        }
      }
    },
    "parentName": "GridDetailSettingsBtn_gn06han",
    "propertyName": "menuItems",
    "index": 1
  },
  {
    "operation": "insert",
    "name": "GridDetailSearchFilter_p99xepo",
    "values": {
      "type": "crt.SearchFilter",
      "placeholder": "#ResourceString(GridDetailSearchFilter_p99xepo_placeholder)#",
      "iconOnly": true,
      "_filterOptions": {
        "expose": [
          {
            "attribute": "GridDetailSearchFilter_p99xepo_GridDetail_zfmb2cn",
            "converters": [
              {
                "converter": "crt.SearchFilterAttributeConverter",
                "args": [
                  "GridDetail_zfmb2cn"
                ]
              }
            ]
          }
        ],
        "from": [
          "GridDetailSearchFilter_p99xepo_SearchValue",
          "GridDetailSearchFilter_p99xepo_FilteredColumnsGroups"
        ]
      }
    },
    "parentName": "FlexContainer_oclog28",
    "propertyName": "items",
    "index": 3
  },
  {
    "operation": "insert",
    "name": "GridContainer_w2bn9cz",
    "values": {
      "type": "crt.GridContainer",
      "rows": "minmax(max-content, 32px)",
      "columns": [
        "minmax(32px, 1fr)",
        "minmax(32px, 1fr)"
      ],
      "gap": {
        "columnGap": "large",
        "rowGap": 0
      },
      "styles": {
        "overflow-x": "hidden"
      },
      "items": []
    },
    "parentName": "ExpansionPanel_c1nhz2l",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "GridDetail_zfmb2cn",
    "values": {
      "type": "crt.DataGrid",
      "layoutConfig": {
        "colSpan": 2,
        "column": 1,
        "row": 1,
        "rowSpan": 6
      },
      "features": {
        "rows": {
          "selection": {
            "enable": true,
            "multiple": true
          }
        }
      },
      "items": "$GridDetail_zfmb2cn",
      "primaryColumnName": "GridDetail_zfmb2cnDS_Id",
      "columns": [
        {
          "id": "3b2c8c4a-267f-22df-3e95-3cd1f30fdb16",
          "code": "GridDetail_zfmb2cnDS_Title",
          "caption": "#ResourceString(GridDetail_zfmb2cnDS_Title)#",
          "dataValueType": 30
        },
        {
          "id": "f6c57832-9105-fb92-9232-b43d44529c48",
          "code": "GridDetail_zfmb2cnDS_Type",
          "caption": "#ResourceString(GridDetail_zfmb2cnDS_Type)#",
          "dataValueType": 10
        },
        {
          "id": "9ab4e568-dc1d-4047-ad64-903adfdeade3",
          "code": "GridDetail_zfmb2cnDS_Stage",
          "caption": "#ResourceString(GridDetail_zfmb2cnDS_Stage)#",
          "dataValueType": 10
        },
        {
          "id": "b605dd00-876c-f5b5-7f52-d4842aa7b329",
          "code": "GridDetail_zfmb2cnDS_UsrADProject",
          "caption": "#ResourceString(GridDetail_zfmb2cnDS_UsrADProject)#",
          "dataValueType": 10
        },
        {
          "id": "1b6a906f-126f-c3b2-0d87-75965b6e1be0",
          "code": "GridDetail_zfmb2cnDS_CreatedOn",
          "caption": "#ResourceString(GridDetail_zfmb2cnDS_CreatedOn)#",
          "dataValueType": 7
        },
        {
          "id": "367e8732-ceea-e925-3083-e554ec04025c",
          "code": "GridDetail_zfmb2cnDS_CreatedBy",
          "caption": "#ResourceString(GridDetail_zfmb2cnDS_CreatedBy)#",
          "dataValueType": 10
        }
      ],
      "placeholder": false
    },
    "parentName": "GridContainer_w2bn9cz",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "TabContainer_b8hq3p6",
    "values": {
      "type": "crt.TabContainer",
      "items": [],
      "caption": "#ResourceString(TabContainer_b8hq3p6_caption)#",
      "iconPosition": "left-icon",
      "visible": true,
      "icon": "trolley-icon"
    },
    "parentName": "Tabs",
    "propertyName": "items",
    "index": 6
  },
  {
    "operation": "insert",
    "name": "ExpansionPanel_fmze8o4",
    "values": {
      "type": "crt.ExpansionPanel",
      "tools": [],
      "items": [],
      "title": "#ResourceString(ExpansionPanel_fmze8o4_title)#",
      "toggleType": "default",
      "togglePosition": "before",
      "expanded": true,
      "labelColor": "auto",
      "fullWidthHeader": false,
      "titleWidth": 20,
      "padding": {
        "top": "small",
        "bottom": "small",
        "left": "none",
        "right": "none"
      },
      "fitContent": true,
      "visible": true,
      "alignItems": "stretch"
    },
    "parentName": "TabContainer_b8hq3p6",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "GridContainer_p2rm83a",
    "values": {
      "type": "crt.GridContainer",
      "rows": "minmax(max-content, 24px)",
      "columns": [
        "minmax(32px, 1fr)"
      ],
      "gap": {
        "columnGap": "large",
        "rowGap": 0
      },
      "styles": {
        "overflow-x": "hidden"
      },
      "items": []
    },
    "parentName": "ExpansionPanel_fmze8o4",
    "propertyName": "tools",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "FlexContainer_7k9hdmj",
    "values": {
      "type": "crt.FlexContainer",
      "direction": "row",
      "gap": "none",
      "alignItems": "center",
      "items": [],
      "layoutConfig": {
        "colSpan": 1,
        "column": 1,
        "row": 1,
        "rowSpan": 1
      }
    },
    "parentName": "GridContainer_p2rm83a",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "GridDetailAddBtn_5gy03sq",
    "values": {
      "type": "crt.Button",
      "caption": "#ResourceString(GridDetailAddBtn_5gy03sq_caption)#",
      "icon": "add-button-icon",
      "iconPosition": "only-icon",
      "color": "default",
      "size": "medium",
      "clicked": {
        "request": "crt.CreateRecordRequest",
        "params": {
          "entityName": "Order"
        }
      }
    },
    "parentName": "FlexContainer_7k9hdmj",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "GridDetailRefreshBtn_ihwgeuf",
    "values": {
      "type": "crt.Button",
      "caption": "#ResourceString(GridDetailRefreshBtn_ihwgeuf_caption)#",
      "icon": "reload-icon",
      "iconPosition": "only-icon",
      "color": "default",
      "size": "medium",
      "clicked": {
        "request": "crt.LoadDataRequest",
        "params": {
          "config": {
            "loadType": "reload"
          },
          "dataSourceName": "GridDetail_42l6u2aDS"
        }
      }
    },
    "parentName": "FlexContainer_7k9hdmj",
    "propertyName": "items",
    "index": 1
  },
  {
    "operation": "insert",
    "name": "GridDetailSettingsBtn_q9mjw3h",
    "values": {
      "type": "crt.Button",
      "caption": "#ResourceString(GridDetailSettingsBtn_q9mjw3h_caption)#",
      "icon": "actions-button-icon",
      "iconPosition": "only-icon",
      "color": "default",
      "size": "medium",
      "clickMode": "menu",
      "menuItems": []
    },
    "parentName": "FlexContainer_7k9hdmj",
    "propertyName": "items",
    "index": 2
  },
  {
    "operation": "insert",
    "name": "GridDetailExportDataBtn_dicrp8m",
    "values": {
      "type": "crt.MenuItem",
      "caption": "#ResourceString(GridDetailExportDataBtn_dicrp8m_caption)#",
      "icon": "export-button-icon",
      "color": "default",
      "size": "medium",
      "clicked": {
        "request": "crt.ExportDataGridToExcelRequest",
        "params": {
          "viewName": "GridDetail_42l6u2a"
        }
      }
    },
    "parentName": "GridDetailSettingsBtn_q9mjw3h",
    "propertyName": "menuItems",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "GridDetailImportDataBtn_vlv4qqa",
    "values": {
      "type": "crt.MenuItem",
      "caption": "#ResourceString(GridDetailImportDataBtn_vlv4qqa_caption)#",
      "icon": "import-button-icon",
      "color": "default",
      "size": "medium",
      "clicked": {
        "request": "crt.ImportDataRequest",
        "params": {
          "entitySchemaName": "Order"
        }
      }
    },
    "parentName": "GridDetailSettingsBtn_q9mjw3h",
    "propertyName": "menuItems",
    "index": 1
  },
  {
    "operation": "insert",
    "name": "GridDetailSearchFilter_1qq8578",
    "values": {
      "type": "crt.SearchFilter",
      "placeholder": "#ResourceString(GridDetailSearchFilter_1qq8578_placeholder)#",
      "iconOnly": true,
      "_filterOptions": {
        "expose": [
          {
            "attribute": "GridDetailSearchFilter_1qq8578_GridDetail_42l6u2a",
            "converters": [
              {
                "converter": "crt.SearchFilterAttributeConverter",
                "args": [
                  "GridDetail_42l6u2a"
                ]
              }
            ]
          }
        ],
        "from": [
          "GridDetailSearchFilter_1qq8578_SearchValue",
          "GridDetailSearchFilter_1qq8578_FilteredColumnsGroups"
        ]
      }
    },
    "parentName": "FlexContainer_7k9hdmj",
    "propertyName": "items",
    "index": 3
  },
  {
    "operation": "insert",
    "name": "GridContainer_24j9rou",
    "values": {
      "type": "crt.GridContainer",
      "rows": "minmax(max-content, 32px)",
      "columns": [
        "minmax(32px, 1fr)",
        "minmax(32px, 1fr)"
      ],
      "gap": {
        "columnGap": "large",
        "rowGap": 0
      },
      "styles": {
        "overflow-x": "hidden"
      },
      "items": []
    },
    "parentName": "ExpansionPanel_fmze8o4",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "GridDetail_42l6u2a",
    "values": {
      "type": "crt.DataGrid",
      "layoutConfig": {
        "colSpan": 2,
        "column": 1,
        "row": 1,
        "rowSpan": 6
      },
      "features": {
        "rows": {
          "selection": {
            "enable": true,
            "multiple": true
          }
        }
      },
      "items": "$GridDetail_42l6u2a",
      "primaryColumnName": "GridDetail_42l6u2aDS_Id",
      "columns": [
        {
          "id": "3f1324f3-9661-163e-ae57-2daf8dc81852",
          "code": "GridDetail_42l6u2aDS_Number",
          "caption": "#ResourceString(GridDetail_42l6u2aDS_Number)#",
          "dataValueType": 28
        }
      ],
      "placeholder": false
    },
    "parentName": "GridContainer_24j9rou",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "TabContainer_168wq5a",
    "values": {
      "type": "crt.TabContainer",
      "items": [],
      "caption": "#ResourceString(TabContainer_168wq5a_caption)#",
      "iconPosition": "left-icon",
      "visible": true,
      "icon": "gift-icon"
    },
    "parentName": "Tabs",
    "propertyName": "items",
    "index": 7
  },
  {
    "operation": "insert",
    "name": "ExpansionPanel_iu6hi3s",
    "values": {
      "type": "crt.ExpansionPanel",
      "tools": [],
      "items": [],
      "title": "#ResourceString(ExpansionPanel_iu6hi3s_title)#",
      "toggleType": "default",
      "togglePosition": "before",
      "expanded": true,
      "labelColor": "auto",
      "fullWidthHeader": false,
      "titleWidth": 20,
      "padding": {
        "top": "small",
        "bottom": "small",
        "left": "none",
        "right": "none"
      },
      "fitContent": true
    },
    "parentName": "TabContainer_168wq5a",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "GridContainer_zayoej3",
    "values": {
      "type": "crt.GridContainer",
      "rows": "minmax(max-content, 24px)",
      "columns": [
        "minmax(32px, 1fr)"
      ],
      "gap": {
        "columnGap": "large",
        "rowGap": 0
      },
      "styles": {
        "overflow-x": "hidden"
      },
      "items": []
    },
    "parentName": "ExpansionPanel_iu6hi3s",
    "propertyName": "tools",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "FlexContainer_73f8h9a",
    "values": {
      "type": "crt.FlexContainer",
      "direction": "row",
      "gap": "none",
      "alignItems": "center",
      "items": [],
      "layoutConfig": {
        "colSpan": 1,
        "column": 1,
        "row": 1,
        "rowSpan": 1
      }
    },
    "parentName": "GridContainer_zayoej3",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "GridDetailAddBtn_1mpp2pf",
    "values": {
      "type": "crt.Button",
      "caption": "#ResourceString(GridDetailAddBtn_1mpp2pf_caption)#",
      "icon": "add-button-icon",
      "iconPosition": "only-icon",
      "color": "default",
      "size": "medium",
      "clicked": {
        "request": "crt.CreateRecordRequest",
        "params": {
          "entityName": "UsrConsumers",
          "defaultValues": [
            {
              "attributeName": "UsrProject",
              "value": "$Id"
            }
          ]
        }
      },
      "visible": true,
      "clickMode": "default"
    },
    "parentName": "FlexContainer_73f8h9a",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "GridDetailRefreshBtn_27oruuz",
    "values": {
      "type": "crt.Button",
      "caption": "#ResourceString(GridDetailRefreshBtn_27oruuz_caption)#",
      "icon": "reload-icon",
      "iconPosition": "only-icon",
      "color": "default",
      "size": "medium",
      "clicked": {
        "request": "crt.LoadDataRequest",
        "params": {
          "config": {
            "loadType": "reload"
          },
          "dataSourceName": "GridDetail_ddkohw8DS"
        }
      }
    },
    "parentName": "FlexContainer_73f8h9a",
    "propertyName": "items",
    "index": 1
  },
  {
    "operation": "insert",
    "name": "GridDetailSettingsBtn_84vl1na",
    "values": {
      "type": "crt.Button",
      "caption": "#ResourceString(GridDetailSettingsBtn_84vl1na_caption)#",
      "icon": "actions-button-icon",
      "iconPosition": "only-icon",
      "color": "default",
      "size": "medium",
      "clickMode": "menu",
      "menuItems": []
    },
    "parentName": "FlexContainer_73f8h9a",
    "propertyName": "items",
    "index": 2
  },
  {
    "operation": "insert",
    "name": "GridDetailExportDataBtn_vwxy55c",
    "values": {
      "type": "crt.MenuItem",
      "caption": "#ResourceString(GridDetailExportDataBtn_vwxy55c_caption)#",
      "icon": "export-button-icon",
      "color": "default",
      "size": "medium",
      "clicked": {
        "request": "crt.ExportDataGridToExcelRequest",
        "params": {
          "viewName": "GridDetail_ddkohw8"
        }
      }
    },
    "parentName": "GridDetailSettingsBtn_84vl1na",
    "propertyName": "menuItems",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "GridDetailImportDataBtn_c0gqobb",
    "values": {
      "type": "crt.MenuItem",
      "caption": "#ResourceString(GridDetailImportDataBtn_c0gqobb_caption)#",
      "icon": "import-button-icon",
      "color": "default",
      "size": "medium",
      "clicked": {
        "request": "crt.ImportDataRequest",
        "params": {
          "entitySchemaName": "UsrConsumers"
        }
      }
    },
    "parentName": "GridDetailSettingsBtn_84vl1na",
    "propertyName": "menuItems",
    "index": 1
  },
  {
    "operation": "insert",
    "name": "GridDetailSearchFilter_epk2azi",
    "values": {
      "type": "crt.SearchFilter",
      "placeholder": "#ResourceString(GridDetailSearchFilter_epk2azi_placeholder)#",
      "iconOnly": true,
      "_filterOptions": {
        "expose": [
          {
            "attribute": "GridDetailSearchFilter_epk2azi_GridDetail_ddkohw8",
            "converters": [
              {
                "converter": "crt.SearchFilterAttributeConverter",
                "args": [
                  "GridDetail_ddkohw8"
                ]
              }
            ]
          }
        ],
        "from": [
          "GridDetailSearchFilter_epk2azi_SearchValue",
          "GridDetailSearchFilter_epk2azi_FilteredColumnsGroups"
        ]
      }
    },
    "parentName": "FlexContainer_73f8h9a",
    "propertyName": "items",
    "index": 3
  },
  {
    "operation": "insert",
    "name": "GridContainer_1uwok6u",
    "values": {
      "type": "crt.GridContainer",
      "rows": "minmax(max-content, 32px)",
      "columns": [
        "minmax(32px, 1fr)",
        "minmax(32px, 1fr)"
      ],
      "gap": {
        "columnGap": "large",
        "rowGap": 0
      },
      "styles": {
        "overflow-x": "hidden"
      },
      "items": []
    },
    "parentName": "ExpansionPanel_iu6hi3s",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "GridDetail_ddkohw8",
    "values": {
      "type": "crt.DataGrid",
      "layoutConfig": {
        "colSpan": 2,
        "column": 1,
        "row": 1,
        "rowSpan": 6
      },
      "features": {
        "rows": {
          "selection": {
            "enable": true,
            "multiple": true
          }
        },
        "editable": {
          "enable": false,
          "itemsCreation": false,
          "floatingEditPanel": false
        },
        "header": {
          "visible": true
        },
        "columns": {
          "dragAndDrop": true,
          "resizing": true,
          "sorting": true
        }
      },
      "items": "$GridDetail_ddkohw8",
      "primaryColumnName": "GridDetail_ddkohw8DS_Id",
      "columns": [
        {
          "id": "d9a596e8-e937-cd6a-e046-60729ebcdfb8",
          "code": "GridDetail_ddkohw8DS_UsrConsumer",
          "caption": "#ResourceString(GridDetail_ddkohw8DS_UsrConsumer)#",
          "dataValueType": 10
        },
        {
          "id": "f372e776-491a-d25c-5ffb-e2aa296ded9d",
          "code": "GridDetail_ddkohw8DS_UsrConsumer_UsrAddress",
          "caption": "#ResourceString(GridDetail_ddkohw8DS_UsrConsumer_UsrAddress)#",
          "dataValueType": 30
        },
        {
          "id": "2a98b4d5-7431-48c4-7035-04915d6ef31d",
          "code": "GridDetail_ddkohw8DS_UsrConsumer_UsrEmail",
          "caption": "#ResourceString(GridDetail_ddkohw8DS_UsrConsumer_UsrEmail)#",
          "dataValueType": 45
        },
        {
          "id": "e0835702-ba1f-573a-a1c6-068aa5157c35",
          "code": "GridDetail_ddkohw8DS_UsrConsumer_UsrPhone",
          "caption": "#ResourceString(GridDetail_ddkohw8DS_UsrConsumer_UsrPhone)#",
          "dataValueType": 42
        },
        {
          "id": "13134f37-5b8e-2aca-cfae-e4007ac807e8",
          "code": "GridDetail_ddkohw8DS_UsrConsumer_UsrMobile",
          "caption": "#ResourceString(GridDetail_ddkohw8DS_UsrConsumer_UsrMobile)#",
          "dataValueType": 42
        },
        {
          "id": "b495734c-94ac-f9ea-cf18-17c8981ba9a4",
          "code": "GridDetail_ddkohw8DS_CreatedOn",
          "caption": "#ResourceString(GridDetail_ddkohw8DS_CreatedOn)#",
          "dataValueType": 7
        },
        {
          "id": "51a47355-bdef-146a-484a-ac7cad80bbd2",
          "code": "GridDetail_ddkohw8DS_CreatedBy",
          "caption": "#ResourceString(GridDetail_ddkohw8DS_CreatedBy)#",
          "dataValueType": 10
        },
        {
          "id": "51927e45-f2bf-f75c-8080-5e3410e02953",
          "code": "GridDetail_ddkohw8DS_ModifiedOn",
          "caption": "#ResourceString(GridDetail_ddkohw8DS_ModifiedOn)#",
          "dataValueType": 7
        },
        {
          "id": "e6c21218-36be-aa88-40d9-5209abf27844",
          "code": "GridDetail_ddkohw8DS_ModifiedBy",
          "caption": "#ResourceString(GridDetail_ddkohw8DS_ModifiedBy)#",
          "dataValueType": 10
        }
      ],
      "placeholder": false,
      "visible": true,
      "fitContent": true
    },
    "parentName": "GridContainer_1uwok6u",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "TabContainer_i392h70",
    "values": {
      "type": "crt.TabContainer",
      "items": [],
      "caption": "#ResourceString(UsrBuyingCentre)#",
      "iconPosition": "left-icon",
      "visible": true,
      "icon": "contact-group-icon"
    },
    "parentName": "Tabs",
    "propertyName": "items",
    "index": 8
  },
  {
    "operation": "insert",
    "name": "ExpansionPanel_zx5rcl1",
    "values": {
      "type": "crt.ExpansionPanel",
      "tools": [],
      "items": [],
      "title": "#ResourceString(UsrBuyingCentre)#",
      "toggleType": "default",
      "togglePosition": "before",
      "expanded": true,
      "labelColor": "auto",
      "fullWidthHeader": false,
      "titleWidth": 20,
      "padding": {
        "top": "small",
        "bottom": "small",
        "left": "none",
        "right": "none"
      },
      "fitContent": true
    },
    "parentName": "TabContainer_i392h70",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "GridContainer_0f1wyqq",
    "values": {
      "type": "crt.GridContainer",
      "rows": "minmax(max-content, 24px)",
      "columns": [
        "minmax(32px, 1fr)"
      ],
      "gap": {
        "columnGap": "large",
        "rowGap": 0
      },
      "styles": {
        "overflow-x": "hidden"
      },
      "items": []
    },
    "parentName": "ExpansionPanel_zx5rcl1",
    "propertyName": "tools",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "FlexContainer_5iushsf",
    "values": {
      "type": "crt.FlexContainer",
      "direction": "row",
      "gap": "none",
      "alignItems": "center",
      "items": [],
      "layoutConfig": {
        "colSpan": 1,
        "column": 1,
        "row": 1,
        "rowSpan": 1
      }
    },
    "parentName": "GridContainer_0f1wyqq",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "GridDetailAddBtn_yg0305z",
    "values": {
      "type": "crt.Button",
      "caption": "#ResourceString(GridDetailAddBtn_yg0305z_caption)#",
      "icon": "add-button-icon",
      "iconPosition": "only-icon",
      "color": "default",
      "size": "medium",
      "clicked": {
        "request": "crt.CreateRecordRequest",
        "params": {
          "entityName": "UsrADProjectParty",
          "defaultValues": [
            {
              "attributeName": "UsrProject",
              "value": "$Id"
            }
          ]
        }
      },
      "visible": true,
      "clickMode": "default"
    },
    "parentName": "FlexContainer_5iushsf",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "GridDetailRefreshBtn_1scqevs",
    "values": {
      "type": "crt.Button",
      "caption": "#ResourceString(GridDetailRefreshBtn_1scqevs_caption)#",
      "icon": "reload-icon",
      "iconPosition": "only-icon",
      "color": "default",
      "size": "medium",
      "clicked": {
        "request": "crt.LoadDataRequest",
        "params": {
          "config": {
            "loadType": "reload"
          },
          "dataSourceName": "GridDetail_c0fg36lDS"
        }
      }
    },
    "parentName": "FlexContainer_5iushsf",
    "propertyName": "items",
    "index": 1
  },
  {
    "operation": "insert",
    "name": "GridDetailSettingsBtn_2180rpq",
    "values": {
      "type": "crt.Button",
      "caption": "#ResourceString(GridDetailSettingsBtn_2180rpq_caption)#",
      "icon": "actions-button-icon",
      "iconPosition": "only-icon",
      "color": "default",
      "size": "medium",
      "clickMode": "menu",
      "menuItems": []
    },
    "parentName": "FlexContainer_5iushsf",
    "propertyName": "items",
    "index": 2
  },
  {
    "operation": "insert",
    "name": "GridDetailExportDataBtn_o9xlrzp",
    "values": {
      "type": "crt.MenuItem",
      "caption": "#ResourceString(GridDetailExportDataBtn_o9xlrzp_caption)#",
      "icon": "export-button-icon",
      "color": "default",
      "size": "medium",
      "clicked": {
        "request": "crt.ExportDataGridToExcelRequest",
        "params": {
          "viewName": "GridDetail_c0fg36l"
        }
      }
    },
    "parentName": "GridDetailSettingsBtn_2180rpq",
    "propertyName": "menuItems",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "GridDetailImportDataBtn_nj8pdyp",
    "values": {
      "type": "crt.MenuItem",
      "caption": "#ResourceString(GridDetailImportDataBtn_nj8pdyp_caption)#",
      "icon": "import-button-icon",
      "color": "default",
      "size": "medium",
      "clicked": {
        "request": "crt.ImportDataRequest",
        "params": {
          "entitySchemaName": "UsrADProjectParty"
        }
      }
    },
    "parentName": "GridDetailSettingsBtn_2180rpq",
    "propertyName": "menuItems",
    "index": 1
  },
  {
    "operation": "insert",
    "name": "GridDetailSearchFilter_8w0kqsr",
    "values": {
      "type": "crt.SearchFilter",
      "placeholder": "#ResourceString(GridDetailSearchFilter_8w0kqsr_placeholder)#",
      "iconOnly": true,
      "_filterOptions": {
        "expose": [
          {
            "attribute": "GridDetailSearchFilter_8w0kqsr_GridDetail_c0fg36l",
            "converters": [
              {
                "converter": "crt.SearchFilterAttributeConverter",
                "args": [
                  "GridDetail_c0fg36l"
                ]
              }
            ]
          }
        ],
        "from": [
          "GridDetailSearchFilter_8w0kqsr_SearchValue",
          "GridDetailSearchFilter_8w0kqsr_FilteredColumnsGroups"
        ]
      }
    },
    "parentName": "FlexContainer_5iushsf",
    "propertyName": "items",
    "index": 3
  },
  {
    "operation": "insert",
    "name": "GridContainer_ld2tq5z",
    "values": {
      "type": "crt.GridContainer",
      "rows": "minmax(max-content, 32px)",
      "columns": [
        "minmax(32px, 1fr)",
        "minmax(32px, 1fr)"
      ],
      "gap": {
        "columnGap": "large",
        "rowGap": 0
      },
      "styles": {
        "overflow-x": "hidden"
      },
      "items": []
    },
    "parentName": "ExpansionPanel_zx5rcl1",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "GridDetail_c0fg36l",
    "values": {
      "type": "crt.DataGrid",
      "layoutConfig": {
        "colSpan": 2,
        "column": 1,
        "row": 1,
        "rowSpan": 6
      },
      "features": {
        "rows": {
          "selection": {
            "enable": true,
            "multiple": true
          }
        },
        "editable": {
          "enable": false,
          "itemsCreation": false,
          "floatingEditPanel": false
        }
      },
      "items": "$GridDetail_c0fg36l",
      "primaryColumnName": "GridDetail_c0fg36lDS_Id",
      "columns": [
        {
          "id": "2a309f0e-a35a-57d4-bf23-fb91d2eac262",
          "code": "GridDetail_c0fg36lDS_UsrPartyRole",
          "caption": "#ResourceString(GridDetail_c0fg36lDS_UsrPartyRole)#",
          "dataValueType": 10
        },
        {
          "id": "e058458a-0da9-5142-bf4c-b7f52ca0f58f",
          "code": "GridDetail_c0fg36lDS_UsrAccount",
          "caption": "#ResourceString(GridDetail_c0fg36lDS_UsrAccount)#",
          "dataValueType": 10
        },
        {
          "id": "5076f38b-d1b8-557f-a286-3738a18dcf2f",
          "code": "GridDetail_c0fg36lDS_UsrContact",
          "caption": "#ResourceString(GridDetail_c0fg36lDS_UsrContact)#",
          "dataValueType": 10
        },
        {
          "id": "c20f420d-a623-52fe-abb3-8f88477bbf33",
          "code": "GridDetail_c0fg36lDS_UsrIsPrimary",
          "caption": "#ResourceString(GridDetail_c0fg36lDS_UsrIsPrimary)#",
          "dataValueType": 12
        },
        {
          "id": "e9492d2f-6d62-52ee-9e48-b939e7ef5100",
          "code": "GridDetail_c0fg36lDS_UsrSourceIntake",
          "caption": "#ResourceString(GridDetail_c0fg36lDS_UsrSourceIntake)#",
          "dataValueType": 10
        },
        {
          "id": "e3446203-fb23-5edc-a5d7-41ea405689a4",
          "code": "GridDetail_c0fg36lDS_UsrBusinessPartner",
          "caption": "#ResourceString(GridDetail_c0fg36lDS_UsrBusinessPartner)#",
          "dataValueType": 10
        }
      ],
      "placeholder": false,
      "visible": true,
      "fitContent": true
    },
    "parentName": "GridContainer_ld2tq5z",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "TabContainer_vibhyt5",
    "values": {
      "type": "crt.TabContainer",
      "tools": [],
      "items": [],
      "caption": "#ResourceString(TabContainer_vibhyt5_caption)#",
      "iconPosition": "left-icon",
      "visible": true,
      "icon": "instapage-icon"
    },
    "parentName": "CardToggleTabPanel",
    "propertyName": "items",
    "index": 2
  },
  {
    "operation": "insert",
    "name": "FlexContainer_5271vbq",
    "values": {
      "type": "crt.FlexContainer",
      "direction": "row",
      "alignItems": "center",
      "items": []
    },
    "parentName": "TabContainer_vibhyt5",
    "propertyName": "tools",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "Label_0mx4kvp",
    "values": {
      "type": "crt.Label",
      "caption": "#ResourceString(Label_0mx4kvp_caption)#",
      "labelType": "headline-3",
      "labelThickness": "default",
      "labelEllipsis": false,
      "labelColor": "#0D2E4E",
      "labelBackgroundColor": "transparent",
      "labelTextAlign": "start"
    },
    "parentName": "FlexContainer_5271vbq",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "FlexContainer_zutouzi",
    "values": {
      "type": "crt.FlexContainer",
      "items": [],
      "direction": "column"
    },
    "parentName": "TabContainer_vibhyt5",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "UsrIntakeHistoryTab",
    "parentName": "Tabs",
    "propertyName": "items",
    "index": 3,
    "values": {
      "type": "crt.TabContainer",
      "caption": "#ResourceString(UsrIntakeHistory)#",
      "items": []
    }
  },
  {
    "operation": "insert",
    "name": "UsrHistory_ExpansionPanel_zx5rcl1",
    "values": {
      "type": "crt.ExpansionPanel",
      "tools": [],
      "items": [],
      "title": "#ResourceString(UsrIntakeHistory)#",
      "toggleType": "default",
      "togglePosition": "before",
      "expanded": true,
      "labelColor": "auto",
      "fullWidthHeader": false,
      "titleWidth": 20,
      "padding": {
        "top": "small",
        "bottom": "small",
        "left": "none",
        "right": "none"
      },
      "fitContent": true
    },
    "parentName": "UsrIntakeHistoryTab",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "UsrHistory_GridContainer_0f1wyqq",
    "values": {
      "type": "crt.GridContainer",
      "rows": "minmax(max-content, 24px)",
      "columns": [
        "minmax(32px, 1fr)"
      ],
      "gap": {
        "columnGap": "large",
        "rowGap": 0
      },
      "items": []
    },
    "parentName": "UsrHistory_ExpansionPanel_zx5rcl1",
    "propertyName": "tools",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "UsrHistory_FlexContainer_5iushsf",
    "values": {
      "type": "crt.FlexContainer",
      "direction": "row",
      "gap": "none",
      "alignItems": "center",
      "items": [],
      "layoutConfig": {
        "colSpan": 1,
        "column": 1,
        "row": 1,
        "rowSpan": 1
      }
    },
    "parentName": "UsrHistory_GridContainer_0f1wyqq",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "UsrHistory_GridDetailAddBtn_yg0305z",
    "values": {
      "type": "crt.Button",
      "caption": "#ResourceString(UsrHistory_GridDetailAddBtn_yg0305z_caption)#",
      "icon": "add-button-icon",
      "iconPosition": "only-icon",
      "color": "default",
      "size": "medium",
      "clicked": {
        "request": "crt.CreateRecordRequest",
        "params": {
          "entityName": "UsrADProjectIntelligence",
          "defaultValues": [
            {
              "attributeName": "UsrMatchedProject",
              "value": "$Id"
            }
          ]
        }
      },
      "visible": true,
      "clickMode": "default"
    },
    "parentName": "UsrHistory_FlexContainer_5iushsf",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "UsrHistory_GridDetailRefreshBtn_1scqevs",
    "values": {
      "type": "crt.Button",
      "caption": "#ResourceString(UsrHistory_GridDetailRefreshBtn_1scqevs_caption)#",
      "icon": "reload-icon",
      "iconPosition": "only-icon",
      "color": "default",
      "size": "medium",
      "clicked": {
        "request": "crt.LoadDataRequest",
        "params": {
          "config": {
            "loadType": "reload"
          },
          "dataSourceName": "UsrIntakeHistoryDS"
        }
      }
    },
    "parentName": "UsrHistory_FlexContainer_5iushsf",
    "propertyName": "items",
    "index": 1
  },
  {
    "operation": "insert",
    "name": "UsrHistory_GridDetailSettingsBtn_2180rpq",
    "values": {
      "type": "crt.Button",
      "caption": "#ResourceString(UsrHistory_GridDetailSettingsBtn_2180rpq_caption)#",
      "icon": "actions-button-icon",
      "iconPosition": "only-icon",
      "color": "default",
      "size": "medium",
      "clickMode": "menu",
      "menuItems": []
    },
    "parentName": "UsrHistory_FlexContainer_5iushsf",
    "propertyName": "items",
    "index": 2
  },
  {
    "operation": "insert",
    "name": "UsrHistory_GridDetailExportDataBtn_o9xlrzp",
    "values": {
      "type": "crt.MenuItem",
      "caption": "#ResourceString(UsrHistory_GridDetailExportDataBtn_o9xlrzp_caption)#",
      "icon": "export-button-icon",
      "color": "default",
      "size": "medium",
      "clicked": {
        "request": "crt.ExportDataGridToExcelRequest",
        "params": {
          "viewName": "UsrIntakeHistoryGrid"
        }
      }
    },
    "parentName": "UsrHistory_GridDetailSettingsBtn_2180rpq",
    "propertyName": "menuItems",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "UsrHistory_GridDetailImportDataBtn_nj8pdyp",
    "values": {
      "type": "crt.MenuItem",
      "caption": "#ResourceString(UsrHistory_GridDetailImportDataBtn_nj8pdyp_caption)#",
      "icon": "import-button-icon",
      "color": "default",
      "size": "medium",
      "clicked": {
        "request": "crt.ImportDataRequest",
        "params": {
          "entitySchemaName": "UsrADProjectIntelligence"
        }
      }
    },
    "parentName": "UsrHistory_GridDetailSettingsBtn_2180rpq",
    "propertyName": "menuItems",
    "index": 1
  },
  {
    "operation": "insert",
    "name": "UsrHistory_GridDetailSearchFilter_8w0kqsr",
    "values": {
      "type": "crt.SearchFilter",
      "placeholder": "#ResourceString(UsrHistory_GridDetailSearchFilter_8w0kqsr_placeholder)#",
      "iconOnly": true,
      "_filterOptions": {
        "expose": [
          {
            "attribute": "UsrHistory_GridDetailSearchFilter_8w0kqsr_UsrIntakeHistoryGrid",
            "converters": [
              {
                "converter": "crt.SearchFilterAttributeConverter",
                "args": [
                  "UsrIntakeHistoryGrid"
                ]
              }
            ]
          }
        ],
        "from": [
          "UsrHistory_GridDetailSearchFilter_8w0kqsr_SearchValue",
          "UsrHistory_GridDetailSearchFilter_8w0kqsr_FilteredColumnsGroups"
        ]
      }
    },
    "parentName": "UsrHistory_FlexContainer_5iushsf",
    "propertyName": "items",
    "index": 3
  },
  {
    "operation": "insert",
    "name": "UsrHistory_GridContainer_ld2tq5z",
    "values": {
      "type": "crt.GridContainer",
      "rows": "minmax(max-content, 32px)",
      "columns": [
        "minmax(32px, 1fr)",
        "minmax(32px, 1fr)"
      ],
      "gap": {
        "columnGap": "large",
        "rowGap": 0
      },
      "items": []
    },
    "parentName": "UsrHistory_ExpansionPanel_zx5rcl1",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "UsrIntakeHistoryGrid",
    "values": {
      "type": "crt.DataGrid",
      "layoutConfig": {
        "colSpan": 2,
        "column": 1,
        "row": 1,
        "rowSpan": 6
      },
      "features": {
        "rows": {
          "selection": {
            "enable": true,
            "multiple": true
          }
        },
        "editable": {
          "enable": false,
          "itemsCreation": false,
          "floatingEditPanel": false
        }
      },
      "items": "$UsrIntakeHistoryGrid",
      "primaryColumnName": "UsrIntakeHistoryDS_Id",
      "columns": [
        {
          "id": "c838c0bc-39cc-5a64-9c4d-365dc2fda748",
          "code": "UsrIntakeHistoryDS_UsrName",
          "caption": "#ResourceString(UsrIntakeHistoryDS_UsrName)#",
          "dataValueType": 1
        },
        {
          "id": "889299ba-c428-584c-b481-669d28dfce00",
          "code": "UsrIntakeHistoryDS_UsrExternalSource",
          "caption": "#ResourceString(UsrIntakeHistoryDS_UsrExternalSource)#",
          "dataValueType": 10
        },
        {
          "id": "465014f5-c0cf-539b-8733-0e2f1ecf95eb",
          "code": "UsrIntakeHistoryDS_UsrExternalProjectId",
          "caption": "#ResourceString(UsrIntakeHistoryDS_UsrExternalProjectId)#",
          "dataValueType": 1
        },
        {
          "id": "03feade7-9ca5-58bc-a6fe-e636e5fc4834",
          "code": "UsrIntakeHistoryDS_UsrStatus",
          "caption": "#ResourceString(UsrIntakeHistoryDS_UsrStatus)#",
          "dataValueType": 10
        },
        {
          "id": "2e33863f-8eeb-5cdc-8ea8-fb8aa624a4e6",
          "code": "UsrIntakeHistoryDS_UsrReceivedOn",
          "caption": "#ResourceString(UsrIntakeHistoryDS_UsrReceivedOn)#",
          "dataValueType": 7
        },
        {
          "id": "a4b51bf9-3789-5774-b15c-25cd4a7689b4",
          "code": "UsrIntakeHistoryDS_UsrMatchedProject",
          "caption": "#ResourceString(UsrIntakeHistoryDS_UsrMatchedProject)#",
          "dataValueType": 10
        },
        {
          "id": "8dcac04b-9074-5861-8347-b5ca93189068",
          "code": "UsrIntakeHistoryDS_UsrCreatedProject",
          "caption": "#ResourceString(UsrIntakeHistoryDS_UsrCreatedProject)#",
          "dataValueType": 10
        }
      ],
      "placeholder": false,
      "visible": true,
      "fitContent": true
    },
    "parentName": "UsrHistory_GridContainer_ld2tq5z",
    "propertyName": "items",
    "index": 0
  }
]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
  {
    "operation": "merge",
    "path": [
      "attributes"
    ],
    "values": {
      "Name": {
        "modelConfig": {
          "path": "PDS.Name"
        }
      },
      "PDS_UsrProjectName_a2kpj36": {
        "modelConfig": {
          "path": "PDS.UsrProjectName"
        }
      },
      "PDS_Type_t0ig83j": {
        "modelConfig": {
          "path": "PDS.Type"
        }
      },
      "PDS_Type_t0ig83j_List": {
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
      "PDS_Status_739sv8e": {
        "modelConfig": {
          "path": "PDS.Status"
        }
      },
      "PDS_Status_739sv8e_List": {
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
      "PDS_UsrProjectCategory_tp928od": {
        "modelConfig": {
          "path": "PDS.UsrProjectCategory"
        }
      },
      "PDS_UsrProjectCategory_tp928od_List": {
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
      "PDS_UsrPriorityClassification_rng1q6g": {
        "modelConfig": {
          "path": "PDS.UsrPriorityClassification"
        }
      },
      "PDS_UsrPriorityClassification_rng1q6g_List": {
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
      "PDS_Account_e1qeezm": {
        "modelConfig": {
          "path": "PDS.Account"
        }
      },
      "PDS_Account_e1qeezm_List": {
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
      "PDS_Account_5eoaqxd": {
        "modelConfig": {
          "path": "PDS.Account"
        }
      },
      "PDS_Account_5eoaqxd_List": {
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
      "undefined_List": {
        "isCollection": true,
        "modelConfig": {}
      },
      "PDS_AccountType_dsct9b6": {
        "modelConfig": {
          "path": "PDS.AccountType_dsct9b6"
        }
      },
      "PDS_AccountType_dsct9b6_List": {
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
      "PDS_AccountAddress_cj0sb50": {
        "modelConfig": {
          "path": "PDS.AccountAddress_cj0sb50"
        }
      },
      "PDS_UsrSiteVisitRequired_g5eax3g": {
        "modelConfig": {
          "path": "PDS.UsrSiteVisitRequired"
        }
      },
      "PDS_UsrContractSigned_05s1lxt": {
        "modelConfig": {
          "path": "PDS.UsrContractSigned"
        }
      },
      "PDS_UsrExpectedOrderValue_zdgd8k1": {
        "modelConfig": {
          "path": "PDS.UsrExpectedOrderValue"
        }
      },
      "PDS_UsrCurrency_6pvi0l7": {
        "modelConfig": {
          "path": "PDS.UsrCurrency"
        }
      },
      "PDS_UsrCurrency_6pvi0l7_List": {
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
      "PDS_StartDate_bkb3xhe": {
        "modelConfig": {
          "path": "PDS.StartDate"
        }
      },
      "PDS_EndDate_yw2fcgr": {
        "modelConfig": {
          "path": "PDS.EndDate"
        }
      },
      "PDS_UsrProjectAddress_8jk3a3h": {
        "modelConfig": {
          "path": "PDS.UsrProjectAddress"
        }
      },
      "PDS_UsrProjectDescription_cum7c2v": {
        "modelConfig": {
          "path": "PDS.UsrProjectDescription"
        }
      },
      "GridDetail_ve0qd8f": {
        "isCollection": true,
        "modelConfig": {
          "path": "GridDetail_ve0qd8fDS",
          "filterAttributes": [
            {
              "name": "GridDetailSearchFilter_8f8aeoo_GridDetail_ve0qd8f",
              "loadOnChange": true
            }
          ]
        },
        "viewModelConfig": {
          "attributes": {
            "GridDetail_ve0qd8fDS_LeadName": {
              "modelConfig": {
                "path": "GridDetail_ve0qd8fDS.LeadName"
              }
            },
            "GridDetail_ve0qd8fDS_Status": {
              "modelConfig": {
                "path": "GridDetail_ve0qd8fDS.Status"
              }
            },
            "GridDetail_ve0qd8fDS_Owner": {
              "modelConfig": {
                "path": "GridDetail_ve0qd8fDS.Owner"
              }
            },
            "GridDetail_ve0qd8fDS_CreatedOn": {
              "modelConfig": {
                "path": "GridDetail_ve0qd8fDS.CreatedOn"
              }
            },
            "GridDetail_ve0qd8fDS_CreatedBy": {
              "modelConfig": {
                "path": "GridDetail_ve0qd8fDS.CreatedBy"
              }
            },
            "GridDetail_ve0qd8fDS_ModifiedOn": {
              "modelConfig": {
                "path": "GridDetail_ve0qd8fDS.ModifiedOn"
              }
            },
            "GridDetail_ve0qd8fDS_ModifiedBy": {
              "modelConfig": {
                "path": "GridDetail_ve0qd8fDS.ModifiedBy"
              }
            },
            "GridDetail_ve0qd8fDS_Id": {
              "modelConfig": {
                "path": "GridDetail_ve0qd8fDS.Id"
              }
            }
          }
        }
      },
      "GridDetail_zfmb2cn": {
        "isCollection": true,
        "modelConfig": {
          "path": "GridDetail_zfmb2cnDS",
          "filterAttributes": [
            {
              "name": "GridDetailSearchFilter_p99xepo_GridDetail_zfmb2cn",
              "loadOnChange": true
            }
          ]
        },
        "viewModelConfig": {
          "attributes": {
            "GridDetail_zfmb2cnDS_Title": {
              "modelConfig": {
                "path": "GridDetail_zfmb2cnDS.Title"
              }
            },
            "GridDetail_zfmb2cnDS_Type": {
              "modelConfig": {
                "path": "GridDetail_zfmb2cnDS.Type"
              }
            },
            "GridDetail_zfmb2cnDS_Stage": {
              "modelConfig": {
                "path": "GridDetail_zfmb2cnDS.Stage"
              }
            },
            "GridDetail_zfmb2cnDS_UsrADProject": {
              "modelConfig": {
                "path": "GridDetail_zfmb2cnDS.UsrADProject"
              }
            },
            "GridDetail_zfmb2cnDS_CreatedOn": {
              "modelConfig": {
                "path": "GridDetail_zfmb2cnDS.CreatedOn"
              }
            },
            "GridDetail_zfmb2cnDS_CreatedBy": {
              "modelConfig": {
                "path": "GridDetail_zfmb2cnDS.CreatedBy"
              }
            },
            "GridDetail_zfmb2cnDS_Id": {
              "modelConfig": {
                "path": "GridDetail_zfmb2cnDS.Id"
              }
            }
          }
        }
      },
      "GridDetail_42l6u2a": {
        "isCollection": true,
        "modelConfig": {
          "path": "GridDetail_42l6u2aDS",
          "filterAttributes": [
            {
              "name": "GridDetailSearchFilter_1qq8578_GridDetail_42l6u2a",
              "loadOnChange": true
            }
          ]
        },
        "viewModelConfig": {
          "attributes": {
            "GridDetail_42l6u2aDS_Number": {
              "modelConfig": {
                "path": "GridDetail_42l6u2aDS.Number"
              }
            },
            "GridDetail_42l6u2aDS_Id": {
              "modelConfig": {
                "path": "GridDetail_42l6u2aDS.Id"
              }
            }
          }
        }
      },
      "GridDetail_ofptdro": {
        "isCollection": true,
        "modelConfig": {
          "path": "GridDetail_ofptdroDS",
          "filterAttributes": [
            {
              "name": "GridDetailSearchFilter_f6bnb60_GridDetail_ofptdro",
              "loadOnChange": true
            }
          ],
          "sortingConfig": {
            "default": [
              {
                "direction": "asc",
                "columnName": "UsrContact_Department"
              }
            ]
          }
        },
        "viewModelConfig": {
          "attributes": {
            "GridDetail_ofptdroDS_UsrContact": {
              "modelConfig": {
                "path": "GridDetail_ofptdroDS.UsrContact"
              }
            },
            "GridDetail_ofptdroDS_UsrContact_Department": {
              "modelConfig": {
                "path": "GridDetail_ofptdroDS.UsrContact_Department"
              }
            },
            "GridDetail_ofptdroDS_UsrContact_JobTitle": {
              "modelConfig": {
                "path": "GridDetail_ofptdroDS.UsrContact_JobTitle"
              }
            },
            "GridDetail_ofptdroDS_UsrContact_MobilePhone": {
              "modelConfig": {
                "path": "GridDetail_ofptdroDS.UsrContact_MobilePhone"
              }
            },
            "GridDetail_ofptdroDS_UsrContact_Phone": {
              "modelConfig": {
                "path": "GridDetail_ofptdroDS.UsrContact_Phone"
              }
            },
            "GridDetail_ofptdroDS_UsrContact_Email": {
              "modelConfig": {
                "path": "GridDetail_ofptdroDS.UsrContact_Email"
              }
            },
            "GridDetail_ofptdroDS_Id": {
              "modelConfig": {
                "path": "GridDetail_ofptdroDS.Id"
              }
            }
          }
        }
      },
      "OutboundChatInput": {
        "value": ""
      },
      "OutboundChatInputDisabled": {
        "value": false
      },
      "OutboundChatMessageInputDisabled": {
        "value": false
      },
      "OutboundChatInputReadonly": {
        "value": false
      },
      "OutboundChatReadonlyPlaceholderKey": {
        "value": ""
      },
      "OutboundChatEditorTooltip": {
        "value": null
      },
      "OutboundChatTemplateSelectDisabled": {
        "value": false
      },
      "FilesToUpload": {
        "value": []
      },
      "OutboundIsFileUploadEnabled": {
        "value": true
      },
      "ChatComposer_esoify2_SelectedChannelId": {
        "value": ""
      },
      "ChatComposer_esoify2_SelectedContactId": {
        "value": ""
      },
      "ChatComposer_esoify2_ChatId": {
        "value": ""
      },
      "ChatComposer_esoify2_Channels": {
        "value": [
          {
            "schemaType": "Telegram",
            "caption": "Telegram",
            "icon": "telegram-composer-icon",
            "providerId": "645170ab-c67a-4dcc-9def-c0e5236bdfe0"
          },
          {
            "schemaType": "FacebookMessenger",
            "caption": "Facebook messenger",
            "icon": "messenger-composer-icon",
            "providerId": "50491c6c-d82b-4b86-b38c-99262d11a5ac"
          },
          {
            "schemaType": "SMS",
            "caption": "SMS",
            "icon": "sms-composer-icon",
            "providerId": "21af0484-eee0-4f61-8822-f8789838ba66"
          },
          {
            "schemaType": "WhatsApp",
            "caption": "WhatsApp",
            "icon": "whatsapp-composer-icon",
            "providerId": "1398dc73-b428-4e21-b97a-c1bb6b4bc621"
          }
        ]
      },
      "ChatComposer_esoify2_SelectedChannelSchemaType": {
        "value": "Telegram"
      },
      "ChatComposer_esoify2_ProviderId": {
        "from": [
          "ChatComposer_esoify2_SelectedChannelSchemaType",
          "ChatComposer_esoify2_Channels"
        ],
        "converter": "crt.ToProviderIdBySchemaType"
      },
      "ChatComposer_esoify2_ActiveChannels": {
        "from": "ChatComposer_esoify2_ProviderId",
        "converter": "crt.ToActiveChannelsByProvider"
      },
      "ChatComposer_esoify2_RecipientContacts": {
        "from": "ChatComposer_esoify2_ProviderId",
        "converter": "crt.ToRecipientsByProvider"
      },
      "Timeline_v6j95k9_AllTileFilters": {
        "from": [],
        "converter": "crt.ToTileFilterGroup"
      },
      "GridDetail_c0fg36l": {
        "isCollection": true,
        "modelConfig": {
          "path": "GridDetail_c0fg36lDS",
          "filterAttributes": [
            {
              "name": "GridDetailSearchFilter_8w0kqsr_GridDetail_c0fg36l",
              "loadOnChange": true
            },
            {
              "loadOnChange": true,
              "name": "GridDetail_c0fg36l_PredefinedFilter"
            }
          ],
          "sortingConfig": {
            "default": [
              {
                "direction": "asc",
                "columnName": "UsrBusinessPartner"
              }
            ]
          }
        },
        "viewModelConfig": {
          "attributes": {
            "GridDetail_c0fg36lDS_UsrPartyRole": {
              "modelConfig": {
                "path": "GridDetail_c0fg36lDS.UsrPartyRole"
              }
            },
            "GridDetail_c0fg36lDS_UsrBusinessPartner": {
              "modelConfig": {
                "path": "GridDetail_c0fg36lDS.UsrBusinessPartner"
              }
            },
            "GridDetail_c0fg36lDS_UsrBusinessPartner_UsrAddress": {
              "modelConfig": {
                "path": "GridDetail_c0fg36lDS.UsrBusinessPartner_UsrAddress"
              }
            },
            "GridDetail_c0fg36lDS_UsrBusinessPartner_UsrEmail": {
              "modelConfig": {
                "path": "GridDetail_c0fg36lDS.UsrBusinessPartner_UsrEmail"
              }
            },
            "GridDetail_c0fg36lDS_UsrBusinessPartner_UsrMobile": {
              "modelConfig": {
                "path": "GridDetail_c0fg36lDS.UsrBusinessPartner_UsrMobile"
              }
            },
            "GridDetail_c0fg36lDS_UsrBusinessPartner_UsrPhone": {
              "modelConfig": {
                "path": "GridDetail_c0fg36lDS.UsrBusinessPartner_UsrPhone"
              }
            },
            "GridDetail_c0fg36lDS_CreatedOn": {
              "modelConfig": {
                "path": "GridDetail_c0fg36lDS.CreatedOn"
              }
            },
            "GridDetail_c0fg36lDS_CreatedBy": {
              "modelConfig": {
                "path": "GridDetail_c0fg36lDS.CreatedBy"
              }
            },
            "GridDetail_c0fg36lDS_ModifiedOn": {
              "modelConfig": {
                "path": "GridDetail_c0fg36lDS.ModifiedOn"
              }
            },
            "GridDetail_c0fg36lDS_ModifiedBy": {
              "modelConfig": {
                "path": "GridDetail_c0fg36lDS.ModifiedBy"
              }
            },
            "GridDetail_c0fg36lDS_Id": {
              "modelConfig": {
                "path": "GridDetail_c0fg36lDS.Id"
              }
            }
          }
        }
      },
      "GridDetail_c0fg36l_PredefinedFilter": {
        "value": null
      },
      "GridDetail_ddkohw8": {
        "isCollection": true,
        "modelConfig": {
          "path": "GridDetail_ddkohw8DS",
          "filterAttributes": [
            {
              "name": "GridDetailSearchFilter_epk2azi_GridDetail_ddkohw8",
              "loadOnChange": true
            },
            {
              "loadOnChange": true,
              "name": "GridDetail_ddkohw8_PredefinedFilter"
            }
          ]
        },
        "viewModelConfig": {
          "attributes": {
            "GridDetail_ddkohw8DS_UsrConsumer": {
              "modelConfig": {
                "path": "GridDetail_ddkohw8DS.UsrConsumer"
              }
            },
            "GridDetail_ddkohw8DS_UsrConsumer_UsrAddress": {
              "modelConfig": {
                "path": "GridDetail_ddkohw8DS.UsrConsumer_UsrAddress"
              }
            },
            "GridDetail_ddkohw8DS_UsrConsumer_UsrEmail": {
              "modelConfig": {
                "path": "GridDetail_ddkohw8DS.UsrConsumer_UsrEmail"
              }
            },
            "GridDetail_ddkohw8DS_UsrConsumer_UsrPhone": {
              "modelConfig": {
                "path": "GridDetail_ddkohw8DS.UsrConsumer_UsrPhone"
              }
            },
            "GridDetail_ddkohw8DS_UsrConsumer_UsrMobile": {
              "modelConfig": {
                "path": "GridDetail_ddkohw8DS.UsrConsumer_UsrMobile"
              }
            },
            "GridDetail_ddkohw8DS_CreatedOn": {
              "modelConfig": {
                "path": "GridDetail_ddkohw8DS.CreatedOn"
              }
            },
            "GridDetail_ddkohw8DS_CreatedBy": {
              "modelConfig": {
                "path": "GridDetail_ddkohw8DS.CreatedBy"
              }
            },
            "GridDetail_ddkohw8DS_ModifiedOn": {
              "modelConfig": {
                "path": "GridDetail_ddkohw8DS.ModifiedOn"
              }
            },
            "GridDetail_ddkohw8DS_ModifiedBy": {
              "modelConfig": {
                "path": "GridDetail_ddkohw8DS.ModifiedBy"
              }
            },
            "GridDetail_ddkohw8DS_Id": {
              "modelConfig": {
                "path": "GridDetail_ddkohw8DS.Id"
              }
            }
          }
        }
      },
      "GridDetail_ddkohw8_PredefinedFilter": {
        "value": null
      },
      "ComboBox_4t6hp0d_ValueDetails": {
        "modelConfig": {
          "path": "PDS.UsrCurrencySymbol"
        }
      },
      "PDS_UsrDeliveryYear_pxu70gn": {
        "modelConfig": {
          "path": "PDS.UsrDeliveryYear"
        }
      },
      "PDS_UsrExternalId_i1614hg": {
        "modelConfig": {
          "path": "PDS.UsrExternalId"
        }
      },
      "PDS_UsrExternalSource_tyn68z2": {
        "modelConfig": {
          "path": "PDS.UsrExternalSource"
        }
      },
      "PDS_UsrExternalSource_tyn68z2_List": {
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
      }
    }
  },
  {
    "operation": "merge",
    "path": [
      "attributes",
      "Id",
      "modelConfig"
    ],
    "values": {
      "path": "PDS.Id"
    }
  },
  {
    "operation": "merge",
    "path": [
      "attributes",
      "GridDetail_c0fg36l",
      "viewModelConfig",
      "attributes"
    ],
    "values": {
      "GridDetail_c0fg36lDS_UsrPartyRole": {
        "modelConfig": {
          "path": "GridDetail_c0fg36lDS.UsrPartyRole"
        }
      },
      "GridDetail_c0fg36lDS_UsrAccount": {
        "modelConfig": {
          "path": "GridDetail_c0fg36lDS.UsrAccount"
        }
      },
      "GridDetail_c0fg36lDS_UsrContact": {
        "modelConfig": {
          "path": "GridDetail_c0fg36lDS.UsrContact"
        }
      },
      "GridDetail_c0fg36lDS_UsrIsPrimary": {
        "modelConfig": {
          "path": "GridDetail_c0fg36lDS.UsrIsPrimary"
        }
      },
      "GridDetail_c0fg36lDS_UsrSourceIntake": {
        "modelConfig": {
          "path": "GridDetail_c0fg36lDS.UsrSourceIntake"
        }
      },
      "GridDetail_c0fg36lDS_UsrBusinessPartner": {
        "modelConfig": {
          "path": "GridDetail_c0fg36lDS.UsrBusinessPartner"
        }
      }
    }
  },
  {
    "operation": "merge",
    "path": [
      "attributes"
    ],
    "values": {
      "UsrIntakeHistoryGrid": {
        "isCollection": true,
        "modelConfig": {
          "path": "UsrIntakeHistoryDS",
          "filterAttributes": [
            {
              "name": "UsrHistory_GridDetailSearchFilter_8w0kqsr_UsrIntakeHistoryGrid",
              "loadOnChange": true
            }
          ]
        },
        "viewModelConfig": {
          "attributes": {
            "UsrIntakeHistoryDS_UsrName": {
              "modelConfig": {
                "path": "UsrIntakeHistoryDS.UsrName"
              }
            },
            "UsrIntakeHistoryDS_UsrExternalSource": {
              "modelConfig": {
                "path": "UsrIntakeHistoryDS.UsrExternalSource"
              }
            },
            "UsrIntakeHistoryDS_UsrExternalProjectId": {
              "modelConfig": {
                "path": "UsrIntakeHistoryDS.UsrExternalProjectId"
              }
            },
            "UsrIntakeHistoryDS_UsrStatus": {
              "modelConfig": {
                "path": "UsrIntakeHistoryDS.UsrStatus"
              }
            },
            "UsrIntakeHistoryDS_UsrReceivedOn": {
              "modelConfig": {
                "path": "UsrIntakeHistoryDS.UsrReceivedOn"
              }
            },
            "UsrIntakeHistoryDS_UsrMatchedProject": {
              "modelConfig": {
                "path": "UsrIntakeHistoryDS.UsrMatchedProject"
              }
            },
            "UsrIntakeHistoryDS_UsrCreatedProject": {
              "modelConfig": {
                "path": "UsrIntakeHistoryDS.UsrCreatedProject"
              }
            },
            "UsrIntakeHistoryDS_Id": {
              "modelConfig": {
                "path": "UsrIntakeHistoryDS.Id"
              }
            }
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
      "primaryDataSourceName": "PDS",
      "dependencies": {
        "GridDetail_zfmb2cnDS": [
          {
            "attributePath": "UsrADProject",
            "relationPath": "PDS.Id"
          }
        ],
        "GridDetail_42l6u2aDS": [
          {
            "attributePath": "UsrADProject",
            "relationPath": "PDS.Id"
          }
        ],
        "GridDetail_ofptdroDS": [
          {
            "attributePath": "UsrProject",
            "relationPath": "PDS.Id"
          }
        ],
        "GridDetail_ve0qd8fDS": [
          {
            "attributePath": "UsrProject",
            "relationPath": "PDS.Id"
          }
        ],
        "GridDetail_c0fg36lDS": [
          {
            "attributePath": "UsrProject",
            "relationPath": "PDS.Id"
          }
        ],
        "GridDetail_ddkohw8DS": [
          {
            "attributePath": "UsrProject",
            "relationPath": "PDS.Id"
          }
        ]
      }
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
          "entitySchemaName": "Project",
          "attributes": {
            "AccountType_dsct9b6": {
              "path": "Account.Type",
              "type": "ForwardReference"
            },
            "AccountAddress_cj0sb50": {
              "path": "Account.Address",
              "type": "ForwardReference"
            },
            "UsrCurrencySymbol": {
              "path": "UsrCurrency.Symbol",
              "type": "ForwardReference"
            }
          }
        },
        "scope": "page"
      },
      "GridDetail_ve0qd8fDS": {
        "type": "crt.EntityDataSource",
        "scope": "viewElement",
        "config": {
          "entitySchemaName": "Lead",
          "attributes": {
            "LeadName": {
              "path": "LeadName"
            },
            "Status": {
              "path": "Status"
            },
            "Owner": {
              "path": "Owner"
            },
            "CreatedOn": {
              "path": "CreatedOn"
            },
            "CreatedBy": {
              "path": "CreatedBy"
            },
            "ModifiedOn": {
              "path": "ModifiedOn"
            },
            "ModifiedBy": {
              "path": "ModifiedBy"
            }
          }
        }
      },
      "GridDetail_zfmb2cnDS": {
        "type": "crt.EntityDataSource",
        "scope": "viewElement",
        "config": {
          "entitySchemaName": "Opportunity",
          "attributes": {
            "Title": {
              "path": "Title"
            },
            "Type": {
              "path": "Type"
            },
            "Stage": {
              "path": "Stage"
            },
            "UsrADProject": {
              "path": "UsrADProject"
            },
            "CreatedOn": {
              "path": "CreatedOn"
            },
            "CreatedBy": {
              "path": "CreatedBy"
            }
          }
        }
      },
      "GridDetail_42l6u2aDS": {
        "type": "crt.EntityDataSource",
        "scope": "viewElement",
        "config": {
          "entitySchemaName": "Order",
          "attributes": {
            "Number": {
              "path": "Number"
            }
          }
        }
      },
      "GridDetail_ofptdroDS": {
        "type": "crt.EntityDataSource",
        "scope": "viewElement",
        "config": {
          "entitySchemaName": "UsrProjectXContact",
          "attributes": {
            "UsrContact": {
              "path": "UsrContact"
            },
            "UsrContact_Department": {
              "type": "ForwardReference",
              "path": "UsrContact.Department"
            },
            "UsrContact_JobTitle": {
              "type": "ForwardReference",
              "path": "UsrContact.JobTitle"
            },
            "UsrContact_MobilePhone": {
              "type": "ForwardReference",
              "path": "UsrContact.MobilePhone"
            },
            "UsrContact_Phone": {
              "type": "ForwardReference",
              "path": "UsrContact.Phone"
            },
            "UsrContact_Email": {
              "type": "ForwardReference",
              "path": "UsrContact.Email"
            }
          }
        }
      },
      "TimelineTile_Email_dbxcaxrDS": {
        "type": "crt.EntityDataSource",
        "scope": "viewElement",
        "config": {
          "entitySchemaName": "Activity"
        }
      },
      "TimelineTile_Activity_codqqw3DS": {
        "type": "crt.EntityDataSource",
        "scope": "viewElement",
        "config": {
          "entitySchemaName": "Activity"
        }
      },
      "TimelineTile_Case_gvfpeoxDS": {
        "type": "crt.EntityDataSource",
        "scope": "viewElement",
        "config": {
          "entitySchemaName": "Case"
        }
      },
      "TimelineTile_Contract_si47a69DS": {
        "type": "crt.EntityDataSource",
        "scope": "viewElement",
        "config": {
          "entitySchemaName": "Contract"
        }
      },
      "TimelineTile_Document_5h6dkplDS": {
        "type": "crt.EntityDataSource",
        "scope": "viewElement",
        "config": {
          "entitySchemaName": "Document"
        }
      },
      "TimelineTile_Invoice_0f9vkc5DS": {
        "type": "crt.EntityDataSource",
        "scope": "viewElement",
        "config": {
          "entitySchemaName": "Invoice"
        }
      },
      "TimelineTile_Opportunity_40nj2qiDS": {
        "type": "crt.EntityDataSource",
        "scope": "viewElement",
        "config": {
          "entitySchemaName": "Opportunity"
        }
      },
      "TimelineTile_Order_c47q2l3DS": {
        "type": "crt.EntityDataSource",
        "scope": "viewElement",
        "config": {
          "entitySchemaName": "Order"
        }
      },
      "GridDetail_c0fg36lDS": {
        "type": "crt.EntityDataSource",
        "scope": "viewElement",
        "config": {
          "entitySchemaName": "UsrADProjectParty",
          "attributes": {
            "UsrPartyRole": {
              "path": "UsrPartyRole"
            },
            "UsrBusinessPartner": {
              "path": "UsrBusinessPartner"
            },
            "UsrBusinessPartner_UsrAddress": {
              "type": "ForwardReference",
              "path": "UsrBusinessPartner.UsrAddress"
            },
            "UsrBusinessPartner_UsrEmail": {
              "type": "ForwardReference",
              "path": "UsrBusinessPartner.UsrEmail"
            },
            "UsrBusinessPartner_UsrMobile": {
              "type": "ForwardReference",
              "path": "UsrBusinessPartner.UsrMobile"
            },
            "UsrBusinessPartner_UsrPhone": {
              "type": "ForwardReference",
              "path": "UsrBusinessPartner.UsrPhone"
            },
            "CreatedOn": {
              "path": "CreatedOn"
            },
            "CreatedBy": {
              "path": "CreatedBy"
            },
            "ModifiedOn": {
              "path": "ModifiedOn"
            },
            "ModifiedBy": {
              "path": "ModifiedBy"
            }
          }
        }
      },
      "TimelineTile_Lead_xp8wx11DS": {
        "type": "crt.EntityDataSource",
        "scope": "viewElement",
        "config": {
          "entitySchemaName": "Lead"
        }
      },
      "GridDetail_ddkohw8DS": {
        "type": "crt.EntityDataSource",
        "scope": "viewElement",
        "config": {
          "entitySchemaName": "UsrConsumers",
          "attributes": {
            "UsrConsumer": {
              "path": "UsrConsumer"
            },
            "UsrConsumer_UsrAddress": {
              "type": "ForwardReference",
              "path": "UsrConsumer.UsrAddress"
            },
            "UsrConsumer_UsrEmail": {
              "type": "ForwardReference",
              "path": "UsrConsumer.UsrEmail"
            },
            "UsrConsumer_UsrPhone": {
              "type": "ForwardReference",
              "path": "UsrConsumer.UsrPhone"
            },
            "UsrConsumer_UsrMobile": {
              "type": "ForwardReference",
              "path": "UsrConsumer.UsrMobile"
            },
            "CreatedOn": {
              "path": "CreatedOn"
            },
            "CreatedBy": {
              "path": "CreatedBy"
            },
            "ModifiedOn": {
              "path": "ModifiedOn"
            },
            "ModifiedBy": {
              "path": "ModifiedBy"
            }
          }
        }
      }
    }
  },
  {
    "operation": "merge",
    "path": [
      "dataSources",
      "AttachmentListDS",
      "config"
    ],
    "values": {
      "entitySchemaName": "ProjectFile"
    }
  },
  {
    "operation": "merge",
    "path": [
      "dataSources",
      "GridDetail_c0fg36lDS",
      "config",
      "attributes"
    ],
    "values": {
      "UsrPartyRole": {
        "path": "UsrPartyRole"
      },
      "UsrAccount": {
        "path": "UsrAccount"
      },
      "UsrContact": {
        "path": "UsrContact"
      },
      "UsrIsPrimary": {
        "path": "UsrIsPrimary"
      },
      "UsrSourceIntake": {
        "path": "UsrSourceIntake"
      },
      "UsrBusinessPartner": {
        "path": "UsrBusinessPartner"
      }
    }
  },
  {
    "operation": "merge",
    "path": [
      "dataSources"
    ],
    "values": {
      "UsrIntakeHistoryDS": {
        "type": "crt.EntityDataSource",
        "scope": "viewElement",
        "config": {
          "entitySchemaName": "UsrADProjectIntelligence",
          "attributes": {
            "UsrName": {
              "path": "UsrName"
            },
            "UsrExternalSource": {
              "path": "UsrExternalSource"
            },
            "UsrExternalProjectId": {
              "path": "UsrExternalProjectId"
            },
            "UsrStatus": {
              "path": "UsrStatus"
            },
            "UsrReceivedOn": {
              "path": "UsrReceivedOn"
            },
            "UsrMatchedProject": {
              "path": "UsrMatchedProject"
            },
            "UsrCreatedProject": {
              "path": "UsrCreatedProject"
            }
          }
        }
      }
    }
  }
]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[{
   request: "crt.LoadDataRequest",
   handler: async (request, next) => {
    if (request.dataSourceName === "UsrIntakeHistoryDS") {
     const projectId = await request.$context["Id"] || "00000000-0000-0000-0000-000000000000";
     const filters = new sdk.FilterGroup();
     filters.logicalOperation = 1;
     await filters.addSchemaColumnFilterWithParameter(sdk.ComparisonType.Equal, "UsrMatchedProject", projectId);
     await filters.addSchemaColumnFilterWithParameter(sdk.ComparisonType.Equal, "UsrCreatedProject", projectId);
     request.parameters = request.parameters || [];
     request.parameters.push({type:sdk.ModelParameterType.Filter, value:filters});
    }
    return next?.handle(request);
   }
  }]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});
