import unittest
import test_criteria_validations as tcv
from test_criteria_validations import test_check_small_letters
from test_criteria_validations import test_check_numerics
from test_criteria_validations import test_check_cap_letters
from test_criteria_validations import test_check_spl_chars
from test_criteria_validations import test_check_min_length
from test_criteria_validations import test_check_max_length

loader = unittest.TestLoader()
suite = unittest.TestSuite()

suite.addTest(loader.loadTestsFromModule(test_check_small_letters()))
suite.addTest(loader.loadTestsFromModule(test_check_numerics()))
suite.addTest(loader.loadTestsFromModule(test_check_cap_letters()))
suite.addTest(loader.loadTestsFromModule(test_check_spl_chars()))
suite.addTest(loader.loadTestsFromModule(test_check_min_length()))
suite.addTest(loader.loadTestsFromModule(test_check_max_length()))

test_result = unittest.TextTestRunner(verbosity=1).run(suite)

total_ran = test_result.testsRun
total_skipped = len(test_result.skipped)
total_error = len(test_result.errors)
total_failed = len(test_result.failures)
print("Total ran\t:"+str(total_ran))
print("Total skipped\t:"+str(total_skipped))
print("Total errors\t:"+str(total_error))
print("Total failed\t:"+str(total_failed))
