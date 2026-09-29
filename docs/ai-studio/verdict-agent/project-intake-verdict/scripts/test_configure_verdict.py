"""Synthetic offline checks. Approval here applies only to test data."""
import copy
import json
import unittest
from pathlib import Path

from configure_verdict import evaluate_configured, factor_hash

ASSETS = Path(__file__).resolve().parents[1] / 'assets'


class ConfigurationTests(unittest.TestCase):
    def setUp(self):
        def read(name):
            return json.loads((ASSETS / name).read_text(encoding='utf-8'))
        self.rows = read('scoring-factor-records.proposed.json')
        for n, row in enumerate(self.rows):
            row['Id'] = 'SYNTHETIC-FACTOR-' + str(n)
        self.policy = read('policy-proposed.json')
        self.policy['approved'] = True
        self.policy['version'] = 'SYNTHETIC-TEST-ONLY'
        self.settings = {'UsrIntakeAutoApplyThreshold': 85, 'UsrIntakeReviewThreshold': 50}
        self.facts = read('example-business-facts.json')
        self.ctx = read('example-input.json')

    def run_case(self):
        return evaluate_configured(self.ctx, self.rows, self.policy, self.settings, self.facts)

    def reapprove_test_config(self):
        self.policy['factorConfigHash'] = factor_hash(self.rows)

    def test_complete_example(self):
        result = self.run_case()
        self.assertEqual(result['score'], 87.75)
        self.assertEqual(result['priority'], 'Strategic Pursuit')
        self.assertEqual(result['status'], 'Ready to apply')
        self.assertFalse(result['saved'])

    def test_rule_edit_requires_reapproval_then_changes_result(self):
        before = self.run_case()
        desc = json.loads(self.rows[0]['UsrDescription'])
        desc['rule']['bands'][1]['score'] = 40
        self.rows[0]['UsrDescription'] = json.dumps(desc)
        with self.assertRaisesRegex(ValueError, 'configuration changed'):
            self.run_case()
        self.reapprove_test_config()
        result = self.run_case()
        self.assertEqual(result['score'], 78.75)
        self.assertEqual(result['priority'], 'Active pursuit')
        self.assertNotEqual(before['configurationHash'], result['configurationHash'])

    def test_priority_edit_independent_of_confidence(self):
        self.policy['priorityBands'][0]['minScore'] = 90
        result = self.run_case()
        self.assertEqual(result['priority'], 'Active pursuit')
        self.assertEqual(result['status'], 'Ready to apply')

    def test_unknown_region_and_explicit_outside(self):
        self.facts['region']['value'] = 'us-tx'
        result = self.run_case()
        self.assertIsNone(result['score'])
        self.assertEqual(result['status'], 'Needs review')
        self.facts['region']['value'] = 'us-ca'
        self.assertEqual(self.run_case()['score'], 82.75)

    def test_optional_field_becomes_required(self):
        self.policy['requiredFacts'].append('bid_date')
        self.assertIn('Required information: bid_date', self.run_case()['reviewReasons'])

    def test_missing_and_unresolved(self):
        self.facts['construction_value']['value'] = None
        self.facts['architect_identity']['value'] = 'supplied_unresolved'
        result = self.run_case()
        self.assertIsNone(result['score'])
        self.assertIn('Stakeholder identity requires review', result['reviewReasons'])

    def test_immutable_guards_and_lower_threshold(self):
        self.settings = {'UsrIntakeAutoApplyThreshold': 20, 'UsrIntakeReviewThreshold': 10}
        self.ctx['phaseOrRename'] = True
        self.assertEqual(self.run_case()['status'], 'Needs review')
        self.policy['reviewRules'].remove('phase_or_rename')
        with self.assertRaisesRegex(ValueError, 'cannot be disabled'):
            self.run_case()

    def test_unapproved_or_plain_description(self):
        self.policy['approved'] = False
        with self.assertRaisesRegex(ValueError, 'approval'):
            self.run_case()
        self.policy['approved'] = True
        self.rows[0]['UsrDescription'] = 'Score higher for large construction values'
        with self.assertRaises(ValueError):
            self.run_case()

    def test_weights_and_inactive_factor(self):
        self.rows[7]['UsrIsActive'] = False
        self.policy['factorKeys'].remove('region')
        self.reapprove_test_config()
        with self.assertRaisesRegex(ValueError, 'total 100'):
            self.run_case()
        self.rows[0]['UsrWeight'] = 25
        self.reapprove_test_config()
        self.assertAlmostEqual(self.run_case()['score'], 87)

    def test_invalid_bounds_and_fractional_count(self):
        desc = json.loads(self.rows[0]['UsrDescription'])
        desc['rule']['bands'].reverse()
        self.rows[0]['UsrDescription'] = json.dumps(desc)
        self.reapprove_test_config()
        with self.assertRaises(ValueError):
            self.run_case()
        self.setUp()
        self.facts['units']['value'] = 1.5
        with self.assertRaisesRegex(ValueError, 'Integer fact'):
            self.run_case()

    def test_unknown_requirement_and_duplicate_key(self):
        self.policy['requiredFacts'].append('invented_field')
        with self.assertRaisesRegex(ValueError, 'required fact'):
            self.run_case()
        self.setUp()
        self.rows[7]['UsrDescription'] = self.rows[6]['UsrDescription']
        self.reapprove_test_config()
        with self.assertRaisesRegex(ValueError, 'duplicate factor key'):
            self.run_case()

    def test_query_failure_is_unknown_not_zero(self):
        self.facts['developer_relationship'] = {'value': None, 'evidence': 'CRM query unavailable'}
        self.assertIsNone(self.run_case()['score'])
        self.facts['developer_relationship'] = {'value': 0, 'evidence': 'Successful query found zero won opportunities'}
        self.assertEqual(self.run_case()['score'], 82.75)


if __name__ == '__main__':
    unittest.main()
