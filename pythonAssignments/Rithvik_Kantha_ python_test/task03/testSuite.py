import unittest
import test01
import test02
import test03
loader = unittest.TestLoader()
suite = unittest.TestSuite()

suite.addTest(loader.loadTestsFromModule(test01))
suite.addTest(loader.loadTestsFromModule(test02))
suite.addTest(loader.loadTestsFromModule(test03))

runner = unittest.TextTestRunner(verbosity=1)
test_result = runner.run(suite)
total_ran = test_result.testsRun
total_skipped = len(test_result.skipped)
total_errors = len(test_result.errors)

print(total_ran)
print(total_skipped)
print(total_errors)