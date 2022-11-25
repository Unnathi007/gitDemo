import unittest
import os
import csvToXlsx
import datetime
class test_csvToXlsx(unittest.TestCase):
    def test_checkFileCreation(self):
        csvToXlsx.csvToxlsx()
        present = datetime.datetime.now()
        fileName="{}_{}_{}.xlsx".format(present.strftime('%d'),present.strftime('%b'),present.year)
        cwd = "C:\\Users\\sbatraju\\WebDev\\python\\Test\\thirdQuestion\\csv files"
        xlsxFilePath = cwd+"\\"+fileName
        fileSize = os.path.getsize(xlsxFilePath)
        assert fileSize > 0