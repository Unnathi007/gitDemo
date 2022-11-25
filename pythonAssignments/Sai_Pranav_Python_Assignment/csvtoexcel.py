
import csv
import os
import xlrd
import time
import openpyxl
from os.path import exists as file_exists
class CsvToExcel:
    # def __init__(self,csv_file, excel_file):
    #     self.csv_file = csv_file
    #     self.excel_file = excel_file

    def csv_to_excel(self,csv_file, excel_file):
        try:

            csv_data = []
            with open(csv_file) as file_obj:
                reader = csv.reader(file_obj)
                for row in reader:

                    csv_data.append(row)
            workbook = openpyxl.Workbook()
            sheet = workbook.active
            for row in csv_data:
                sheet.append(row)
            workbook.save(excel_file)
            return excel_file
        except Exception as err:
            print(err)

class FileOperations:
    
    def checkIfExist(self, name):
        try:

            if file_exists(name):
                print("oki")
        except FileNotFoundError as err:
            print("File not found")
            print(err)

    def sizeCheck(self, file_path):
        try:
            if(os.path.getsize(file_path)>0):
                print("okii")
        except FileNotFoundError as err:
            print("File not found")
            print(err)

    def rowCount(self,csvfile,excelfile):
        try:
            with open(csvfile) as obj:
                read= csv.reader(obj)
                n=0
                
                for i in read:
                    n+=1
                wb = xlrd.open_workbook(excelfile)
                if(n==wb):
                    print("ok")
        except Exception as err:
            print(err)
    

    

   

if __name__ == "__main__":
    today= time.strftime('%d-%b-%y-%H_%M_%S')
    excel_name = str(today+".xlsx")
    csvtoex = CsvToExcel()

    csvtoex.csv_to_excel("realestate.csv", excel_name)

    x = FileOperations()
    x.checkIfExist(excel_name)
    x.sizeCheck("C:\\Users\sdadwai\\Documents\\Python\\25-Nov-22-11_00_11.xlsx")
    x.rowCount("realestate.csv","C:\\Users\sdadwai\\Documents\\Python\\25-Nov-22-11_00_11.xlsx")

