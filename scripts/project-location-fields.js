define("UsrMieleADProjects_FormPage", [], function() { return {
 viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
  {"operation":"insert","name":"UsrProjectLocationGroup","parentName":"GeneralInfoTabContainer","propertyName":"items","index":3,"values":{"type":"crt.GridContainer","columns":["minmax(64px, 1fr)","minmax(64px, 1fr)"],"rows":"minmax(max-content, 32px)","gap":{"columnGap":"large","rowGap":"small"},"items":[],"layoutConfig":{"column":1,"row":4,"colSpan":2,"rowSpan":1}}},
  {"operation":"insert","name":"UsrProjectCityField","parentName":"UsrProjectLocationGroup","propertyName":"items","index":0,"values":{"type":"crt.ComboBox","control":"$UsrFoundationCity","label":"$Resources.Strings.UsrFoundationCity","labelPosition":"above","layoutConfig":{"column":1,"row":1,"colSpan":1,"rowSpan":1}}},
  {"operation":"insert","name":"UsrProjectConstructionStageField","parentName":"UsrProjectLocationGroup","propertyName":"items","index":1,"values":{"type":"crt.ComboBox","control":"$UsrFoundationConstructionStage","label":"$Resources.Strings.UsrFoundationConstructionStage","labelPosition":"above","layoutConfig":{"column":2,"row":1,"colSpan":1,"rowSpan":1}}}
 ]/**SCHEMA_VIEW_CONFIG_DIFF*/,
 viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
  {"operation":"merge","path":["attributes"],"values":{"UsrFoundationCity":{"modelConfig":{"path":"PDS.UsrCity"}},"UsrFoundationConstructionStage":{"modelConfig":{"path":"PDS.UsrConstructionStage"}}}}
 ]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/
};});
