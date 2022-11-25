import unittest
import openpyxl
import csvToXlsx
import csv
import datetime
class test_csvToXlsx(unittest.TestCase):
    def test_checkFileCreation(self):
        filePath = "C:\\Users\\sbatraju\\WebDev\\python\\Test\\thirdQuestion\\csv files\\realestate.csv"
        with open(filePath, "r") as fileReader:
            rows = csv.reader(fileReader)
            headings = next(rows)
            numberOfColumns = len(headings)
        csvToXlsx.csvToxlsx()
        present = datetime.datetime.now()
        fileName="{}_{}_{}.xlsx".format(present.strftime('%d'),present.strftime('%b'),present.year)
        cwd = "C:\\Users\\sbatraju\\WebDev\\python\\Test\\thirdQuestion\\csv files"
        xlsxFilePath = cwd+"\\"+fileName
        xlsxReader = openpyxl.load_workbook(xlsxFilePath)
        sheet = xlsxReader['Sheet1']
        assert int(sheet.max_column) == numberOfColumns
        