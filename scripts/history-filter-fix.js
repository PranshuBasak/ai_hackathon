define("UsrMieleADProjects_FormPage", /**SCHEMA_DEPS*/["@creatio-devkit/common"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/(sdk)/**SCHEMA_ARGS*/ {
 return {
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
  }]/**SCHEMA_HANDLERS*/
 };
});
