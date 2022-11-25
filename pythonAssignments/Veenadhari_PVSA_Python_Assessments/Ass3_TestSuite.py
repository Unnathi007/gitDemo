import unittest,Ass3_Test,Ass3_Test1

loader=unittest.TestLoader()

suite=unittest.TestSuite()

suite.addTests(loader.loadTestsFromModule(Ass3_Test))
suite.addTests(loader.loadTestsFromModule(Ass3_Test1))

runner=unittest.TextTestRunner(verbosity=1)

test_runner=runner.run(suite)

print("Total Run : ",test_runner.testsRun)
print("Total Skipped : ",test_runner.skipped)
print("Total Errors : ",test_runner.errors)
print("Total Failed : ",test_runner.failures)