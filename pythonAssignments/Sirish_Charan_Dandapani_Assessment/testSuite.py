import unittest
from test_task3 import test_task3_v01
from test_task3 import test_task3_v02

loader = unittest.TestLoader()
suite = unittest.TestSuite()

suite.addTest(loader.loadTestsFromModule(test_task3_v01))
suite.addTest(loader.loadTestsFromModule(test_task3_v02))

test_result = unittest.TextTestRunner(verbosity=1)
runner = test_result.run(suite)

total_ran = runner.testsRun
total_skipped = len(test_result.skipped)
total_error = len(test_result.errors)
total_failed = len(test_result.failures)
print("Total ran\t:"+str(total_ran))
print("Total skipped\t:"+str(total_skipped))
print("Total errors\t:"+str(total_error))
print("Total failed\t:"+str(total_failed))