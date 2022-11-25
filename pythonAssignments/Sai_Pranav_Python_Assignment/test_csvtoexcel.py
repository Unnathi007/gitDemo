from csvtoexcel import CsvToExcel

import time


def CsvTest():
    today= time.strftime('%d-%b-%y-%H_%M_%S')
    excel_name = str(today+".xlsx")
    csvtest = CsvToExcel("realestate.csv", excel_name)
    return CsvTest

def test_if_formed():
    CsvTest.


