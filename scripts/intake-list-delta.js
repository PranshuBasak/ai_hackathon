define("UsrProjectIntakeSection_ListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
 return {
viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
  {
    "operation": "merge",
    "name": "DataTable",
    "values": {
      "columns": [
        {
          "id": "a064f73c-bcbd-501c-a1f6-3939d5cf6592",
          "code": "PDS_UsrName",
          "caption": "#ResourceString(PDS_UsrName)#",
          "dataValueType": 1
        },
        {
          "id": "991477a4-6225-50cd-8524-aae83e5a361f",
          "code": "PDS_UsrProjectName",
          "caption": "#ResourceString(PDS_UsrProjectName)#",
          "dataValueType": 1
        },
        {
          "id": "902cfbf9-efdf-5faf-a82f-eac5b5ff6192",
          "code": "PDS_UsrExternalSource",
          "caption": "#ResourceString(PDS_UsrExternalSource)#",
          "dataValueType": 10,
          "referenceSchemaName": "UsrADIntelligenceSource"
        },
        {
          "id": "c498ee25-7655-5ae3-8cd0-eb1102901eef",
          "code": "PDS_UsrStatus",
          "caption": "#ResourceString(PDS_UsrStatus)#",
          "dataValueType": 10,
          "referenceSchemaName": "UsrIntakeStatus"
        },
        {
          "id": "fc5a4728-82c8-5aad-8fcc-12aa08eac905",
          "code": "PDS_UsrPriorityClassification",
          "caption": "#ResourceString(PDS_UsrPriorityClassification)#",
          "dataValueType": 10,
          "referenceSchemaName": "UsrADProjectPriority"
        },
        {
          "id": "2bb504d8-28ef-5fe2-a15d-ce2b6f42c060",
          "code": "PDS_UsrProjectMatchConfidence",
          "caption": "#ResourceString(PDS_UsrProjectMatchConfidence)#",
          "dataValueType": 5
        },
        {
          "id": "c139f659-9f65-5b15-86b3-28a6485066c4",
          "code": "PDS_UsrReceivedOn",
          "caption": "#ResourceString(PDS_UsrReceivedOn)#",
          "dataValueType": 7
        }
      ]
    }
  },
  {
    "operation": "insert",
    "name": "UsrFilterNeedsReview",
    "parentName": "LeftFilterContainerInner",
    "propertyName": "items",
    "index": 1,
    "values": {
      "type": "crt.QuickFilter",
      "filterType": "custom",
      "config": {
        "caption": "#ResourceString(UsrFilterNeedsReview)#",
        "defaultValue": false,
        "approachState": true
      },
      "_filterOptions": {
        "expose": [
          {
            "attribute": "UsrFilterNeedsReview_Items",
            "converters": [
              {
                "converter": "crt.QuickFilterAttributeConverter",
                "args": [
                  {
                    "target": {
                      "viewAttributeName": "Items",
                      "customFilter": {
                        "items": {
                          "value": {
                            "filterType": 4,
                            "comparisonType": 3,
                            "isEnabled": true,
                            "dataValueType": 10,
                            "referenceSchemaName": "UsrIntakeStatus",
                            "leftExpression": {
                              "expressionType": 0,
                              "columnPath": "UsrStatus"
                            },
                            "rightExpressions": [
                              {
                                "expressionType": 2,
                                "parameter": {
                                  "dataValueType": 10,
                                  "value": {
                                    "Id": "482534fa-1256-40b1-9aa9-20579310371f",
                                    "value": "482534fa-1256-40b1-9aa9-20579310371f",
                                    "displayValue": "Needs review",
                                    "Name": "Needs review"
                                  }
                                }
                              }
                            ]
                          }
                        },
                        "logicalOperation": 0,
                        "isEnabled": true,
                        "filterType": 6,
                        "rootSchemaName": "UsrADProjectIntelligence"
                      }
                    },
                    "quickFilterType": "custom",
                    "config": {
                      "caption": "#ResourceString(UsrFilterNeedsReview)#",
                      "defaultValue": false,
                      "approachState": true
                    }
                  }
                ]
              }
            ]
          }
        ],
        "from": "UsrFilterNeedsReview_Value"
      }
    }
  },
  {
    "operation": "insert",
    "name": "UsrFilterReady",
    "parentName": "LeftFilterContainerInner",
    "propertyName": "items",
    "index": 1,
    "values": {
      "type": "crt.QuickFilter",
      "filterType": "custom",
      "config": {
        "caption": "#ResourceString(UsrFilterReady)#",
        "defaultValue": false,
        "approachState": true
      },
      "_filterOptions": {
        "expose": [
          {
            "attribute": "UsrFilterReady_Items",
            "converters": [
              {
                "converter": "crt.QuickFilterAttributeConverter",
                "args": [
                  {
                    "target": {
                      "viewAttributeName": "Items",
                      "customFilter": {
                        "items": {
                          "value": {
                            "filterType": 4,
                            "comparisonType": 3,
                            "isEnabled": true,
                            "dataValueType": 10,
                            "referenceSchemaName": "UsrIntakeStatus",
                            "leftExpression": {
                              "expressionType": 0,
                              "columnPath": "UsrStatus"
                            },
                            "rightExpressions": [
                              {
                                "expressionType": 2,
                                "parameter": {
                                  "dataValueType": 10,
                                  "value": {
                                    "Id": "34ae47af-2c13-4af0-877b-fe63f032186a",
                                    "value": "34ae47af-2c13-4af0-877b-fe63f032186a",
                                    "displayValue": "Ready to apply",
                                    "Name": "Ready to apply"
                                  }
                                }
                              }
                            ]
                          }
                        },
                        "logicalOperation": 0,
                        "isEnabled": true,
                        "filterType": 6,
                        "rootSchemaName": "UsrADProjectIntelligence"
                      }
                    },
                    "quickFilterType": "custom",
                    "config": {
                      "caption": "#ResourceString(UsrFilterReady)#",
                      "defaultValue": false,
                      "approachState": true
                    }
                  }
                ]
              }
            ]
          }
        ],
        "from": "UsrFilterReady_Value"
      }
    }
  },
  {
    "operation": "insert",
    "name": "UsrFilterStrategic",
    "parentName": "LeftFilterContainerInner",
    "propertyName": "items",
    "index": 1,
    "values": {
      "type": "crt.QuickFilter",
      "filterType": "custom",
      "config": {
        "caption": "#ResourceString(UsrFilterStrategic)#",
        "defaultValue": false,
        "approachState": true
      },
      "_filterOptions": {
        "expose": [
          {
            "attribute": "UsrFilterStrategic_Items",
            "converters": [
              {
                "converter": "crt.QuickFilterAttributeConverter",
                "args": [
                  {
                    "target": {
                      "viewAttributeName": "Items",
                      "customFilter": {
                        "items": {
                          "value": {
                            "filterType": 4,
                            "comparisonType": 3,
                            "isEnabled": true,
                            "dataValueType": 10,
                            "referenceSchemaName": "UsrADProjectPriority",
                            "leftExpression": {
                              "expressionType": 0,
                              "columnPath": "UsrPriorityClassification"
                            },
                            "rightExpressions": [
                              {
                                "expressionType": 2,
                                "parameter": {
                                  "dataValueType": 10,
                                  "value": {
                                    "Id": "cd40437e-7dd9-474c-ae9a-aa8a3f427d90",
                                    "value": "cd40437e-7dd9-474c-ae9a-aa8a3f427d90",
                                    "displayValue": "Strategic",
                                    "Name": "Strategic"
                                  }
                                }
                              }
                            ]
                          }
                        },
                        "logicalOperation": 0,
                        "isEnabled": true,
                        "filterType": 6,
                        "rootSchemaName": "UsrADProjectIntelligence"
                      }
                    },
                    "quickFilterType": "custom",
                    "config": {
                      "caption": "#ResourceString(UsrFilterStrategic)#",
                      "defaultValue": false,
                      "approachState": true
                    }
                  }
                ]
              }
            ]
          }
        ],
        "from": "UsrFilterStrategic_Value"
      }
    }
  }
]/**SCHEMA_VIEW_CONFIG_DIFF*/,
viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
  {
    "operation": "merge",
    "path": [
      "attributes",
      "Items",
      "viewModelConfig",
      "attributes"
    ],
    "values": {
      "PDS_UsrName": {
        "modelConfig": {
          "path": "PDS.UsrName"
        }
      },
      "PDS_UsrProjectName": {
        "modelConfig": {
          "path": "PDS.UsrProjectName"
        }
      },
      "PDS_UsrExternalSource": {
        "modelConfig": {
          "path": "PDS.UsrExternalSource"
        }
      },
      "PDS_UsrStatus": {
        "modelConfig": {
          "path": "PDS.UsrStatus"
        }
      },
      "PDS_UsrPriorityClassification": {
        "modelConfig": {
          "path": "PDS.UsrPriorityClassification"
        }
      },
      "PDS_UsrProjectMatchConfidence": {
        "modelConfig": {
          "path": "PDS.UsrProjectMatchConfidence"
        }
      },
      "PDS_UsrReceivedOn": {
        "modelConfig": {
          "path": "PDS.UsrReceivedOn"
        }
      }
    }
  },
  {
    "operation": "merge",
    "path": [
      "attributes",
      "Items",
      "modelConfig"
    ],
    "values": {
      "filterAttributes": [
        {
          "loadOnChange": true,
          "name": "FolderTree_active_folder_filter"
        },
        {
          "name": "Items_PredefinedFilter",
          "loadOnChange": true
        },
        {
          "name": "LookupQuickFilterByTag_Items",
          "loadOnChange": true
        },
        {
          "name": "SearchFilter_Items",
          "loadOnChange": true
        },
        {
          "name": "Filters_Filter",
          "loadOnChange": true
        },
        {
          "name": "UsrFilterNeedsReview_Items",
          "loadOnChange": true
        },
        {
          "name": "UsrFilterReady_Items",
          "loadOnChange": true
        },
        {
          "name": "UsrFilterStrategic_Items",
          "loadOnChange": true
        }
      ]
    }
  }
]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
  {
    "operation": "merge",
    "path": [
      "dataSources",
      "PDS",
      "config",
      "attributes"
    ],
    "values": {
      "UsrName": {
        "path": "UsrName"
      },
      "UsrProjectName": {
        "path": "UsrProjectName"
      },
      "UsrExternalSource": {
        "path": "UsrExternalSource"
      },
      "UsrStatus": {
        "path": "UsrStatus"
      },
      "UsrPriorityClassification": {
        "path": "UsrPriorityClassification"
      },
      "UsrProjectMatchConfidence": {
        "path": "UsrProjectMatchConfidence"
      },
      "UsrReceivedOn": {
        "path": "UsrReceivedOn"
      }
    }
  }
]/**SCHEMA_MODEL_CONFIG_DIFF*/,
handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
 };
});