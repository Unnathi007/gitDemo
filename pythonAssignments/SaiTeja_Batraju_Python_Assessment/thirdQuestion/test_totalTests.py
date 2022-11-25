import unittest
import test_fileCreation
import test_noOfColumns
import test_noOfRecords
import test_sizeOfFile

loader = unittest.TestLoader()

suite = unittest.TestSuite()

suite.addTest(loader.loadTestsFromModule(test_fileCreation))
suite.addTest(loader.loadTestsFromModule(test_noOfColumns))
suite.addTest(loader.loadTestsFromModule(test_noOfRecords))
suite.addTest(loader.loadTestsFromModule(test_sizeOfFile))

runner = unittest.TextTestRunner(verbosity=1)
test_results = runner.run(suite)
total_ran = test_results.testsRun
total_skipper = len(test_results.skipped)
total_errors = len(test_results.errors)

print("Test results :",test_results)
print("Total run time :",total_ran)
print("Total tests skipped :",total_skipper)
print("Total errors :",total_errors)