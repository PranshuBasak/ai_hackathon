import copy
import json
import unittest
from pathlib import Path
from validate_verdict import evaluate

class VerdictRules(unittest.TestCase):
    def setUp(self):
        self.ctx=json.loads((Path(__file__).resolve().parents[1]/'assets/example-input.json').read_text())

    def test_complete_new_project(self):
        r=evaluate(self.ctx)
        self.assertEqual((r['status'],r['score'],r['priority']),('Ready to apply',100,'Strategic Pursuit'))
        self.assertFalse(r['saved'])

    def test_phase_even_with_lower_threshold(self):
        p=self.ctx['proposal']; p.update(matchType='new-phase',matchedProjectId='test-project-1',matchConfidence=99,recommendedAction='Link as new phase')
        self.ctx['policy']['readyThreshold']=70
        self.assertEqual(evaluate(self.ctx)['status'],'Needs review')

    def test_host_flag_cannot_be_overridden(self):
        self.ctx['phaseOrRename']=True
        self.assertEqual(evaluate(self.ctx)['status'],'Needs review')

    def test_rename_and_alias(self):
        for flag in ['ambiguousAccounts','conflictingEvidence']:
            c=copy.deepcopy(self.ctx); c[flag]=True
            self.assertEqual(evaluate(c)['status'],'Needs review')
        p=self.ctx['proposal']; p.update(matchType='renamed',matchedProjectId='test-project-1',matchConfidence=99,recommendedAction='Update existing project')
        self.assertEqual(evaluate(self.ctx)['status'],'Needs review')

    def test_unknown_and_missing(self):
        self.ctx['factors'][0]['normalized']=None
        r=evaluate(self.ctx); self.assertIsNone(r['score']); self.assertEqual(r['priority'],'Data Incomplete')
        self.assertEqual(r['status'],'Needs review')
        self.ctx['factors'][0]['normalized']=100; self.ctx['requiredMissing']=['Dealer']
        self.assertEqual(evaluate(self.ctx)['status'],'Needs review')

    def test_invalid_id_and_action(self):
        for changes in [dict(matchedProjectId='forged',matchType='exact'),dict(recommendedAction='Apply')]:
            c=copy.deepcopy(self.ctx); c['proposal'].update(changes)
            with self.assertRaises(ValueError): evaluate(c)

    def test_forged_account(self):
        self.ctx['proposal']['accountMatches']['dealer']={'accountId':'forged','confidence':90,'evidence':'name'}
        with self.assertRaises(ValueError): evaluate(self.ctx)

    def test_config_failures(self):
        for change in ['approval','weight','nan','duplicate']:
            c=copy.deepcopy(self.ctx)
            if change=='approval': c['policy']['approved']=False
            if change=='weight': c['factors'][0]['weight']=19
            if change=='nan': c['factors'][0]['normalized']=float('nan')
            if change=='duplicate': c['factors'][0]['id']=c['factors'][1]['id']
            with self.assertRaises(ValueError): evaluate(c)

    def test_preserve_reviewed_terminal_and_stale(self):
        for change in [dict(status='Applied'),dict(status='Rejected'),dict(reviewerOwned=True),dict(versionCurrent=False)]:
            c=copy.deepcopy(self.ctx); c['intake'].update(change)
            with self.assertRaises(ValueError): evaluate(c)

    def test_incomplete_search(self):
        self.ctx['searchComplete']=False
        self.assertEqual(evaluate(self.ctx)['status'],'Needs review')

    def test_low_confidence_and_matched_confidence(self):
        self.ctx['proposal']['decisionConfidence']=49
        self.assertIn('Low-confidence escalation',evaluate(self.ctx)['reviewReasons'])
        self.ctx['proposal'].update(decisionConfidence=95,matchType='exact',matchedProjectId='test-project-1',matchConfidence=70,recommendedAction='Duplicate – no action')
        self.assertEqual(evaluate(self.ctx)['status'],'Needs review')

    def test_weighted_sum_and_priority(self):
        self.ctx['factors'][0]['normalized']=0
        self.assertEqual(evaluate(self.ctx)['score'],80)
        self.ctx['factors'][1]['normalized']=0
        r=evaluate(self.ctx); self.assertEqual((r['score'],r['priority']),(65,'Active pursuit'))

    def test_discard_not_enabled(self):
        self.ctx['proposal']['recommendedAction']='Discard (low value)'
        with self.assertRaises(ValueError): evaluate(self.ctx)

if __name__=='__main__': unittest.main()
