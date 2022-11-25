import task03
import pytest
import os,csv,openpyxl
class TestClassToCheckIfRecordsAreSame():
    @pytest.mark.parametrize("path",[(r"C:\Users\rkantha\Desktop\Trainig\Python\python_test\task03\realestate.csv")])
    def test_check_if_records_are_equal(self,path):
        with open(path,"r") as fr:
            reader = csv.reader(fr)
            len_of_csv = len(list(reader))
        wb = openpyxl.load_workbook(r"C:\Users\rkantha\Desktop\Trainig\Python\python_test\25_Nov_2022.xlsx")
        sheet = wb["Sheet"]
        assert len_of_csv == sheet.max_row

    