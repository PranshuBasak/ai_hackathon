from pathlib import Path
import json,re
R=Path(__file__).resolve().parents[1]
p=R/'.clio-pages/UsrADProjectIntelligence_FormPage'
body=(p/'body.js').read_text(encoding='utf-8-sig')
def section(marker):return json.loads(body.split('/**'+marker+'*/')[1])
view=section('SCHEMA_VIEW_CONFIG_DIFF');vm=section('SCHEMA_VIEW_MODEL_CONFIG_DIFF')
attrs={}
for op in vm:attrs.update(op.get('values',{}).get('attributes',{}))
bundle=json.loads((p/'bundle.json').read_text(encoding='utf-8-sig'))
attrs.update(bundle.get('viewModelConfig',{}).get('attributes',{}))
metadata=json.loads((R/'evidence/intake-effective.json').read_text(encoding='utf-8'))
cols={c['name']:c for c in metadata['columns']}
verdict={'UsrMatchedProject','UsrMatchedOpportunity','UsrProjectMatchConfidence','UsrOpportunityMatchConfidence','UsrQualificationScore','UsrPriorityClassification','UsrRecommendedAction','UsrQualificationExplanation','UsrRecommendationDetails','UsrMissingInformation','UsrMissingStakeholders','UsrAISummary','UsrAnalysisDate','UsrAnalysisCompleted','UsrAnalysisStatus','UsrCanCreateProject','UsrCanCreateOpportunity','UsrCanUpdateOpportunity','UsrCreatedProject','UsrCreatedOpportunity','UsrMatchReason','UsrAgentError'}
types={'Lookup':'crt.ComboBox','DateTime':'crt.DateTimePicker','Integer':'crt.NumberInput','Float':'crt.NumberInput','Money':'crt.NumberInput','Currency2':'crt.NumberInput','Email':'crt.EmailInput','Boolean':'crt.Checkbox'}
delta=[];newattrs={};resources={'UsrSourceTab':'Source and project','UsrVerdictTab':'Agent verdict','UsrStakeholderTab':'Stakeholders'}
for op in view:
    v=op.get('values',{});control=v.get('control','')
    if op['operation']=='insert' and control.startswith('$'):
        attr=control[1:];path=attrs.get(attr,{}).get('modelConfig',{}).get('path','');col=path.split('.')[-1]
        if col not in cols:continue
        v['type']=types.get(cols[col]['type'],'crt.Input');v['readonly']=col in verdict
        if v['type']=='crt.Input':v['multiline']=cols[col]['type'] in ['MaxSizeText','RichText']
        if v['type']=='crt.DateTimePicker':v['pickerType']='datetime'
        newattrs[attr]={'modelConfig':{'path':path}};delta.append(op)
    if op['name']=='TabContainer_15ah0vf':
        v['caption']='$Resources.Strings.UsrVerdictTab';delta.append(op)
    if op['name']=='TabContainer_qe34u35':
        v['caption']='$Resources.Strings.UsrStakeholderTab';delta.append(op)
delta.append({'operation':'merge','name':'GeneralInfoTab','values':{'caption':'$Resources.Strings.UsrSourceTab'}})
additions=json.loads((R/'scripts/02-model.json').read_text())['operations'][0]['columns']
groups={'source':[],'stakeholder':[],'verdict':[]}
for c in additions:
    n=c['column-name'];groups['verdict' if n in verdict else 'stakeholder' if ('Account' in n or 'Contact' in n or n=='UsrReviewedBy') else 'source'].append(c)
parents={'source':'GeneralInfoTabContainer','stakeholder':'GridContainer_gg670zy','verdict':'GridContainer_1twllnd'}
for group,fields in groups.items():
    grid='UsrFoundation_'+group
    delta.append({'operation':'insert','name':grid,'parentName':parents[group],'propertyName':'items','index':0,'values':{'type':'crt.GridContainer','columns':['minmax(64px, 1fr)','minmax(64px, 1fr)'],'rows':'minmax(max-content, 32px)','gap':{'columnGap':'large','rowGap':'small'},'items':[],'layoutConfig':{'column':1,'row':1,'colSpan':2,'rowSpan':1}}})
    # Move existing siblings down to avoid overlap with the new first group.
    for old in view:
        if old.get('parentName')==parents[group] and old['operation']=='insert' and old['name']!=grid:
            copy=json.loads(json.dumps(old));layout=copy['values'].get('layoutConfig',{});layout['row']=layout.get('row',1)+1;copy['values']['layoutConfig']=layout
            delta=[x for x in delta if x['name']!=copy['name']];delta.append(copy)
    for i,c in enumerate(fields):
        n=c['column-name'];a='UsrFoundation_'+n;newattrs[a]={'modelConfig':{'path':'PDS.'+n}}
        v={'type':types.get(c['type'],'crt.Input'),'control':'$'+a,'label':'$Resources.Strings.'+a,'readonly':n in verdict or n in ['UsrName','UsrReceivedOn'],'layoutConfig':{'column':i%2+1,'row':i//2+1,'colSpan':1,'rowSpan':1}}
        if v['type']=='crt.Input':v['multiline']=c['type']=='MaxSizeText'
        if v['type']=='crt.DateTimePicker':v['pickerType']='datetime' if n=='UsrReceivedOn' else 'date'
        delta.append({'operation':'insert','name':'UsrField_'+n,'parentName':grid,'propertyName':'items','index':i,'values':v})
parts={'SCHEMA_VIEW_CONFIG_DIFF':delta,'SCHEMA_VIEW_MODEL_CONFIG_DIFF':[{'operation':'merge','path':[],'values':{'attributes':newattrs}}],'SCHEMA_MODEL_CONFIG_DIFF':[],'SCHEMA_HANDLERS':[],'SCHEMA_CONVERTERS':{},'SCHEMA_VALIDATORS':{}}
prop=['viewConfigDiff','viewModelConfigDiff','modelConfigDiff','handlers','converters','validators']
out='define("UsrADProjectIntelligence_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {\n\treturn {\n'+',\n'.join('\t\t'+name+': /**'+marker+'*/'+json.dumps(value,indent=2)+'/**'+marker+'*/' for name,(marker,value) in zip(prop,parts.items()))+'\n\t};\n});\n'
(R/'scripts/intake-form-delta.js').write_text(out,encoding='utf-8')
(R/'scripts/intake-form-resources.json').write_text(json.dumps(resources),encoding='utf-8')
print('Prepared form delta with',len(delta),'view operations; preserves unrelated existing content.')
