from pathlib import Path
import json,uuid,copy,re
R=Path(__file__).resolve().parents[1]
body=(R/'.clio-pages/UsrMieleADProjects_FormPage/body.js').read_text(encoding='utf-8-sig')
view=json.loads(re.sub(r'/\*.*?\*/', '', body.split('/**SCHEMA_VIEW_CONFIG_DIFF*/')[1], flags=re.S))
b=json.loads((R/'.clio-pages/UsrMieleADProjects_FormPage/bundle.json').read_text(encoding='utf-8-sig'))
by={x['name']:x for x in view if x['operation']=='insert'}
delta=[]; vm=[]; model=[]; resources={}
party='GridDetail_c0fg36l'; pds=party+'DS'
grid=copy.deepcopy(by[party]); panel=by[by[grid['parentName']]['parentName']]; tab=copy.deepcopy(by[panel['parentName']])
resources['UsrBuyingCentre']='Buying centre';tab['values']['caption']='#ResourceString(UsrBuyingCentre)#';delta.append(tab)
p=copy.deepcopy(panel);p['values']['title']='#ResourceString(UsrBuyingCentre)#';delta.append(p)
cols=[('UsrPartyRole','Role',10),('UsrAccount','Account',10),('UsrContact','Contact',10),('UsrIsPrimary','Primary party',12),('UsrSourceIntake','Source intake',10),('UsrBusinessPartner','Business partner',10)]
def columns(ds,cols):
    result=[]
    for name,title,typ in cols:
        key=ds+'_'+name
        result.append(dict(id=str(uuid.uuid5(uuid.NAMESPACE_URL,key)),code=key,caption='#ResourceString('+key+')#',dataValueType=typ))
    return result
grid['values']['columns']=columns(pds,cols);delta.append(grid)
vm.append({'operation':'merge','path':['attributes',party,'viewModelConfig','attributes'],'values':{pds+'_'+n:{'modelConfig':{'path':pds+'.'+n}} for n,_,_ in cols}})
model.append({'operation':'merge','path':['dataSources',pds,'config','attributes'],'values':{n:{'path':n} for n,_,_ in cols}})
# Reuse the native expanded-list structure and complete toolbar already on this page.
selected={panel['name']}
while True:
    old=len(selected);selected.update(x['name'] for x in view if x.get('parentName') in selected)
    if len(selected)==old:break
mapping={n:'UsrHistory_'+n for n in selected}; mapping[pds]='UsrIntakeHistoryDS'; mapping[party]='UsrIntakeHistoryGrid'
def rename(s):
    for src,dest in sorted(mapping.items(),key=lambda x:-len(x[0])):s=s.replace(src,dest)
    return s
history=[json.loads(rename(json.dumps(x))) for x in view if x['name'] in selected]
resources['UsrIntakeHistory']='Intake history'
delta.append({'operation':'insert','name':'UsrIntakeHistoryTab','parentName':'Tabs','propertyName':'items','index':3,'values':{'type':'crt.TabContainer','caption':'#ResourceString(UsrIntakeHistory)#','items':[]}})
hcols=[('UsrName','Intake number',1),('UsrExternalSource','Source',10),('UsrExternalProjectId','Source project ID',1),('UsrStatus','Intake status',10),('UsrReceivedOn','Received on',7),('UsrMatchedProject','Matched project',10),('UsrCreatedProject','Created project',10)]
for x in history:
    v=x['values']
    if x['name']==mapping[panel['name']]:x['parentName']='UsrIntakeHistoryTab';v['title']='#ResourceString(UsrIntakeHistory)#'
    if x['name']=='UsrIntakeHistoryGrid':v['items']='$UsrIntakeHistoryGrid';v['primaryColumnName']='UsrIntakeHistoryDS_Id';v['columns']=columns('UsrIntakeHistoryDS',hcols)
    # Retain inherited standard captions; new history-prefixed custom captions copied below.
    if v.get('clicked',{}).get('request')=='crt.CreateRecordRequest':v['clicked']['params']={'entityName':'UsrADProjectIntelligence','defaultValues':[{'attributeName':'UsrMatchedProject','value':'$Id'}]}
    if v.get('clicked',{}).get('request')=='crt.ImportDataRequest':v['clicked']['params']={'entitySchemaName':'UsrADProjectIntelligence'}
    v.pop('styles',None)
delta+=history
collection=json.loads(rename(json.dumps(b['viewModelConfig']['attributes'][party])))
collection['modelConfig'].pop('sortingConfig',None)
collection['modelConfig']['filterAttributes']=[f for f in collection['modelConfig']['filterAttributes'] if 'Predefined' not in f['name']]
collection['viewModelConfig']['attributes']={('UsrIntakeHistoryDS_'+n):{'modelConfig':{'path':'UsrIntakeHistoryDS.'+n}} for n,_,_ in hcols+[('Id','Id',0)]}
vm.append({'operation':'merge','path':['attributes'],'values':{'UsrIntakeHistoryGrid':collection}})
model.append({'operation':'merge','path':['dataSources'],'values':{'UsrIntakeHistoryDS':{'type':'crt.EntityDataSource','scope':'viewElement','config':{'entitySchemaName':'UsrADProjectIntelligence','attributes':{n:{'path':n} for n,_,_ in hcols}}}}})
# Use an OR predicate; a pair of model dependencies would incorrectly mean AND.
handler='''[{request: "crt.LoadDataRequest", handler: async (request, next) => {
 if (request.dataSourceName === "UsrIntakeHistoryDS") {
  const id = await request.$context["Id"] || "00000000-0000-0000-0000-000000000000";
  const items = {};
  for (const column of ["UsrMatchedProject", "UsrCreatedProject"]) {
   items[column] = {filterType:1,comparisonType:3,isEnabled:true,dataValueType:10,leftExpression:{expressionType:0,columnPath:column},rightExpression:{expressionType:2,parameter:{dataValueType:10,value:id}}};
  }
  request.parameters = request.parameters || [];
  request.parameters.push({type:"filter",value:{filterType:6,isEnabled:true,logicalOperation:1,rootSchemaName:"UsrADProjectIntelligence",items}});
 }
 return next?.handle(request);
}}]'''
# Source toolbar resource names are schema-local. Register concrete captions for cloned names.
import re
for x in history:
    for key in re.findall(r'#ResourceString\(([^)]+)\)#',json.dumps(x)):
        if key.startswith('UsrHistory_'):
            resources[key]='Export to Excel' if 'Export' in key else 'Import from Excel' if 'Import' in key else 'Search' if 'Search' in key else 'Add intake' if 'AddBtn' in key else 'Refresh' if 'RefreshBtn' in key else 'Actions' if 'SettingsBtn' in key else 'Intake history'
parts=[('viewConfigDiff','SCHEMA_VIEW_CONFIG_DIFF',json.dumps(delta)),('viewModelConfigDiff','SCHEMA_VIEW_MODEL_CONFIG_DIFF',json.dumps(vm)),('modelConfigDiff','SCHEMA_MODEL_CONFIG_DIFF',json.dumps(model)),('handlers','SCHEMA_HANDLERS',handler)]
out='define("UsrMieleADProjects_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {return {'+','.join(p+':/**'+m+'*/'+v+'/**'+m+'*/' for p,m,v in parts)+'};});'
(R/'scripts/project-page-delta.js').write_text(out,encoding='utf-8')
(R/'scripts/project-page-resources.json').write_text(json.dumps(resources),encoding='utf-8')
print(json.dumps({'operations':len(delta),'historyComponents':len(history),'resources':resources}))


