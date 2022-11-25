import read_write_task3 as rw
import unittest

class TestReadWrite(unittest.TestCase):

    def test_existence_of_file(self):
        cte = rw.CsvToExcel()
        res = cte.check_file("C:\\Users\\avutukuri\\Desktop\\python\\Assessment\\25_11_22.xlsx")
        self.assertEqual(res,True)

    def test_file_size(self):
        cte = rw.CsvToExcel()
        res = cte.check_size_of_file("C:\\Users\\avutukuri\\Desktop\\python\\Assessment\\25_11_22.xlsx")
        self.assertEqual(76672,res)



        
