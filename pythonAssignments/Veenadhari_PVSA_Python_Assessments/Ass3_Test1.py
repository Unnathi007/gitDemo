import unittest,os,csv,openpyxl

class Test_Check(unittest.TestCase):
    def test_checkRows(self):
        with open("realestate.csv",'r') as fr:
            reader=csv.reader(fr)
            NoOfRecords=len(list(reader))

        wb=openpyxl.load_workbook(r"C:\Users\vpvsa\Documents\Python Training\25_Nov_2022.xlsx")
        sheet=wb['Sheet']
        NoOfRecordsExcel=sheet.max_row

        assert NoOfRecords==NoOfRecordsExcel
    
    def test_checkCols(self):
        with open("realestate.csv",'r') as fr:
            reader=csv.reader(fr)
            cols=next(reader)
            NoOfCols=len(list(cols))
        wb=openpyxl.load_workbook(r"C:\Users\vpvsa\Documents\Python Training\25_Nov_2022.xlsx")
        sheet=wb['Sheet']
        NoOfColsExcel=sheet.max_column

        assert NoOfCols==NoOfColsExcel