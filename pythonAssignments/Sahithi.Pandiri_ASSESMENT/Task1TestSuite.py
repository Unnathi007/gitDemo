import unittest
import Task1Test
suite = unittest.TestSuite()
loader= unittest.TestLoader()
suite.addTest(loader.loadTestsFromModule(Task1Test))
runner=unittest.TextTestRunner(verbosity=1)
test_results=runner.run(suite)
total_ran=test_results.testsRun
total_skipped=len(test_results.skipped)
total_errors=len(test_results.errors)
print(test_results)
print(total_ran)
print(total_skipped)
print(total_errors)