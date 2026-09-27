from pathlib import Path
import json,uuid
R=Path(__file__).resolve().parents[1]
b=json.loads((R/'.clio-pages/UsrProjectIntakeSection_ListPage/bundle.json').read_text(encoding='utf-8-sig'))
columns=[('UsrName','Intake number',1,None),('UsrProjectName','Project name',1,None),('UsrExternalSource','Source',10,'UsrADIntelligenceSource'),('UsrStatus','Status',10,'UsrIntakeStatus'),('UsrPriorityClassification','Priority',10,'UsrADProjectPriority'),('UsrProjectMatchConfidence','Confidence',5,None),('UsrReceivedOn','Received on',7,None)]
resources={};grid=[];attrs={};ds={}
for col,title,typ,ref in columns:
    key='PDS_'+col;resources[key]=title
    item=dict(id=str(uuid.uuid5(uuid.NAMESPACE_URL,'intake-list:'+col)),code=key,caption='#ResourceString('+key+')#',dataValueType=typ)
    if ref:item['referenceSchemaName']=ref
    grid.append(item);attrs[key]={'modelConfig':{'path':'PDS.'+col}};ds[col]={'path':col}
view=[{'operation':'merge','name':'DataTable','values':{'columns':grid}}]
filters=b['viewModelConfig']['attributes']['Items']['modelConfig']['filterAttributes']
for name,title,col,uid,ref in [('NeedsReview','Needs review','UsrStatus','482534fa-1256-40b1-9aa9-20579310371f','UsrIntakeStatus'),('Ready','Ready to apply','UsrStatus','34ae47af-2c13-4af0-877b-fe63f032186a','UsrIntakeStatus'),('Strategic','Strategic','UsrPriorityClassification','cd40437e-7dd9-474c-ae9a-aa8a3f427d90','UsrADProjectPriority')]:
    name='UsrFilter'+name;resources[name]=title
    predicate={'items':{'value':{'filterType':4,'comparisonType':3,'isEnabled':True,'dataValueType':10,'referenceSchemaName':ref,'leftExpression':{'expressionType':0,'columnPath':col},'rightExpressions':[{'expressionType':2,'parameter':{'dataValueType':10,'value':{'Id':uid,'value':uid,'displayValue':title,'Name':title}}}]}},'logicalOperation':0,'isEnabled':True,'filterType':6,'rootSchemaName':'UsrADProjectIntelligence'}
    view.append({'operation':'insert','name':name,'parentName':'LeftFilterContainerInner','propertyName':'items','index':1,'values':{'type':'crt.QuickFilter','filterType':'custom','config':{'caption':'#ResourceString('+name+')#','defaultValue':False,'approachState':True},'_filterOptions':{'expose':[{'attribute':name+'_Items','converters':[{'converter':'crt.QuickFilterAttributeConverter','args':[{'target':{'viewAttributeName':'Items','customFilter':predicate},'quickFilterType':'custom'}]}]}],'from':name+'_Value'}}})
    view[-1]['values']['_filterOptions']['expose'][0]['converters'][0]['args'][0]['config']=view[-1]['values']['config'].copy()
    if not any(f['name']==name+'_Items' for f in filters): filters.append({'name':name+'_Items','loadOnChange':True})
vm=[{'operation':'merge','path':['attributes','Items','viewModelConfig','attributes'],'values':attrs},{'operation':'merge','path':['attributes','Items','modelConfig'],'values':{'filterAttributes':filters}}]
model=[{'operation':'merge','path':['dataSources','PDS','config','attributes'],'values':ds}]
parts=[('viewConfigDiff','SCHEMA_VIEW_CONFIG_DIFF',view),('viewModelConfigDiff','SCHEMA_VIEW_MODEL_CONFIG_DIFF',vm),('modelConfigDiff','SCHEMA_MODEL_CONFIG_DIFF',model),('handlers','SCHEMA_HANDLERS',[]),('converters','SCHEMA_CONVERTERS',{}),('validators','SCHEMA_VALIDATORS',{})]
text='define("UsrProjectIntakeSection_ListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {\n return {\n'+',\n'.join(prop+': /**'+mark+'*/'+json.dumps(val,indent=2)+'/**'+mark+'*/' for prop,mark,val in parts)+'\n };\n});'
(R/'scripts/intake-list-delta.js').write_text(text,encoding='utf-8');(R/'scripts/intake-list-resources.json').write_text(json.dumps(resources),encoding='utf-8')

