import unittest
import os
from Task3 import ExcelCreation
class Excel_sheet_Test(unittest.TestCase):
    def test_check_file(self):
        result=ExcelCreation()
        res = result.check_file()
        self.assertEqual(res,True)
    def test_check_size_of_file(self):
        result=ExcelCreation()
        res = result.checkSizeOfFile()
        self.assertEqual(res,True)
    

