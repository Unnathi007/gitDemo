import unittest
import test_task1_unittest as tpvu
import test_task3_unittest as trwu
# for loading test cases from a module
loader = unittest.TestLoader()

# for adding all the loaded test cases from all the modules
suite = unittest.TestSuite()

#loading and adding test cases to suite
suite.addTests(loader.loadTestsFromModule(tpvu))
suite.addTests(loader.loadTestsFromModule(trwu))
# for running the suite
runner = unittest.TextTestRunner(verbosity=2)

#running the suite
test_results = runner.run(suite)
print("total tests ran:",test_results.testsRun)






