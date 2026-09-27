from pathlib import Path
import json,re,copy
R=Path(__file__).resolve().parents[1]; p=R/'.clio-pages/UsrMieleADProjects_FormPage'
body=(p/'body.js').read_text(encoding='utf-8-sig')
def section(marker):return json.loads(re.sub(r'/\*.*?\*/','',body.split('/**'+marker+'*/')[1],flags=re.S))
view=section('SCHEMA_VIEW_CONFIG_DIFF');vm=section('SCHEMA_VIEW_MODEL_CONFIG_DIFF');model=section('SCHEMA_MODEL_CONFIG_DIFF')
b=json.loads((p/'bundle.json').read_text(encoding='utf-8-sig'))
selected=[x for x in view if x['operation']=='insert' and (x['name'].startswith('UsrHistory_') or x['name']=='UsrIntakeHistoryGrid')]
mapping={x['name']:x['name'].replace('UsrHistory_','UsrCreatedHistory_').replace('UsrIntakeHistoryGrid','UsrCreatedIntakeHistoryGrid') for x in selected}
mapping['UsrIntakeHistoryDS']='UsrCreatedIntakeHistoryDS'
def rename(s):
 for src,dst in sorted(mapping.items(),key=lambda x:-len(x[0])):s=s.replace(src,dst)
 return s
clone=[json.loads(rename(json.dumps(x))) for x in selected]
resources={'UsrMatchedIntakes':'Matched intakes','UsrCreatedIntakes':'Intakes that created this project'}
for x in selected:
 if x['name']=='UsrHistory_ExpansionPanel_zx5rcl1':x['values']['title']='#ResourceString(UsrMatchedIntakes)#'
for x in clone:
 if x['name']=='UsrCreatedHistory_ExpansionPanel_zx5rcl1':x['values']['title']='#ResourceString(UsrCreatedIntakes)#';x['index']=1
 if x['values'].get('clicked',{}).get('request')=='crt.CreateRecordRequest':x['values']['clicked']['params']['defaultValues']=[{'attributeName':'UsrMatchedProject','value':'$Id'}]
 for k in re.findall(r'#ResourceString\(([^)]+)\)#',json.dumps(x)):
  if k.startswith('UsrCreatedHistory_'):resources[k]='Export to Excel' if 'Export' in k else 'Import from Excel' if 'Import' in k else 'Search' if 'Search' in k else 'Add intake' if 'AddBtn' in k else 'Refresh' if 'RefreshBtn' in k else 'Actions'
view+=clone
collection=json.loads(rename(json.dumps(b['viewModelConfig']['attributes']['UsrIntakeHistoryGrid'])))
vm.append({'operation':'merge','path':['attributes'],'values':{'UsrCreatedIntakeHistoryGrid':collection}})
ds=copy.deepcopy(b['modelConfig']['dataSources']['UsrIntakeHistoryDS']);ds['scope']='viewElement'
model.append({'operation':'merge','path':[],'values':{'dataSources':{'UsrIntakeHistoryDS':{'scope':'viewElement'},'UsrCreatedIntakeHistoryDS':ds},'dependencies':{'UsrIntakeHistoryDS':[{'attributePath':'UsrMatchedProject','relationPath':'PDS.Id'}],'UsrCreatedIntakeHistoryDS':[{'attributePath':'UsrCreatedProject','relationPath':'PDS.Id'}]}}})
for marker,val in [('SCHEMA_VIEW_CONFIG_DIFF',view),('SCHEMA_VIEW_MODEL_CONFIG_DIFF',vm),('SCHEMA_MODEL_CONFIG_DIFF',model),('SCHEMA_HANDLERS',[])]:
 parts=body.split('/**'+marker+'*/');parts[1]=json.dumps(val,indent=2);body=('/**'+marker+'*/').join(parts)
body=body.replace('["@creatio-devkit/common"]','[]').replace('function/**SCHEMA_ARGS*/(sdk)','function/**SCHEMA_ARGS*/()')
(R/'scripts/project-history-native.js').write_text(body,encoding='utf-8')
(R/'scripts/project-history-native-resources.json').write_text(json.dumps(resources),encoding='utf-8')
print(json.dumps(resources))
