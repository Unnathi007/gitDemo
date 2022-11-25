import unittest

from test_conversion_of_csv_to_excel import test_check_file_exists
# from test_conversion_of_csv_to_excel import test_check_columns
# from test_conversion_of_csv_to_excel import test_check_rows
from test_conversion_of_csv_to_excel import test_check_size


loader = unittest.TestLoader()
suite = unittest.TestSuite()

suite.addTest(loader.loadTestsFromModule(test_check_file_exists()))
# suite.addTest(loader.loadTestsFromModule(test_check_columns()))
# suite.addTest(loader.loadTestsFromModule(test_check_rows()))
suite.addTest(loader.loadTestsFromModule(test_check_size()))

test_result = unittest.TextTestRunner(verbosity=1).run(suite)

total_ran = test_result.testsRun
total_skipped = len(test_result.skipped)
total_error = len(test_result.errors)
total_failed = len(test_result.failures)
print("Total ran\t:"+str(total_ran))
print("Total skipped\t:"+str(total_skipped))
print("Total errors\t:"+str(total_error))
print("Total failed\t:"+str(total_failed))
