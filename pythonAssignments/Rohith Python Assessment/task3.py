import datetime
import pyexcel
import excel2json

class ConversionFiles:
    def __init__(self):
        x = datetime.datetime.now() 
        self.fileNameXsl = x.strftime("%d")+"_"+x.strftime("%b")+"_"+x.strftime("%G")+".xls"

    def csvToExcel(self):
        try:
            newFile = pyexcel.get_sheet(file_name="realestate.csv", delimiter=",")
            newFile.save_as(self.fileNameXsl)
        except Exception as ex:
            print(ex)

    def ExcelTOJson(self):
        try:
            excel2json  .convert_from_file(self.fileNameXsl)
        except Exception as ex:
            print(ex)

if __name__ == '__main__':
    conversionFiles = ConversionFiles()
    conversionFiles.csvToExcel()
    conversionFiles.ExcelTOJson()
