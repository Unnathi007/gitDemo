# Task 3:
# --------------

# Write a program to read realestate.csv and insert all the records to excel file and the excel file should be today’s timestamp  ( Eg: 25_Nov_2022.xlsx )

# - write the separate test cases to check whether the 
# excel file is created or not,
# size of the file is greater than zero or not
# -write the test case whether the no. of records in realestate.csv and xlsx records are equal or not.
# -write the test case whether the count of columns in file and xlsx are equal  or not.
# - you can also add other required test cases if required
# -create a test suite with all the test cases


# Also  write a program to convert realestate.csv to the json file   ( dictionary of dictionaries )



import datetime,csv,json
from openpyxl import Workbook
class ToExcelFromCsv:

    def convertToExcel(self):
        x = datetime.datetime.now()
        wb=Workbook()
        ws=wb.active
        with open("realestate.csv",'r') as fr:
            reader=csv.reader(fr)
            for read in reader:
                ws.append(read)
        filename="{}_{}_{}.xlsx".format(x.strftime('%d'),x.strftime('%b'),x.year)
        wb.save(filename)


    def convert_csv_to_json(self):

        with open(r"realestate.csv","r") as fr:
            reader = csv.reader(fr)
            data = {}
            i = 0
            l = next(reader)

            for line in reader:
                row = {}
                for col in range(len(l)):
                    row[l[col]] = line[col]
                data[f"row {i}"] = row
                i+=1
        with open(r"realestate.json","w") as fw:
            json.dump(data,fw,indent=4)


ex=ToExcelFromCsv()
# ex.convertToExcel()
ex.convert_csv_to_json()
