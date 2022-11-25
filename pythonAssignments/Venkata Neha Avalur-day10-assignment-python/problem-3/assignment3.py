'''
Write a program to read realestate.csv and insert all the records to excel file and the excel file should be today's timestamp  ( Eg: 25_Nov_2022.xlsx )

- write the separate test cases to check whether the 
excel file is created or not,
-size of the file is greater than zero or not
-write the test case whether the no. of records in realestate.csv and database records are equal or not.
-write the test case whether the count of columns in file and database are equal  or not.
- you can also add other required test cases if required
-create a test suite with all the test cases


Also  write a program to convert realestate.csv to the json file   ( dictionary of dictionaries )

'''

import datetime
import csv
import json
import pyexcel as pe

def copy_excel():
    try:
        x = datetime.datetime.now().date().strftime("%d_%b_%Y")
        sheet = pe.get_sheet(file_name="C:\\Users\\vavalur\\Desktop\\Python\\realestate.csv")
        sheet.save_as(x+".xls")
    except FileNotFoundError as f:
        print(f)
    else:
        print("Copy successfull")

def convert_json():
        csv_path="C:\\Users\\vavalur\\Desktop\\Python\\realestate.csv"
        json_path="C:\\Users\\vavalur\\Desktop\\Python\\realestate.csv.json"
        json_Array=[]
        try:
            with open(csv_path,encoding="utf-8") as csvf:
                csvReader=csv.DictReader(csvf)
                for row in csvReader:
                    json_Array.append(row)
            with open(json_path, 'w', encoding='utf-8') as jsonf: 
                jsonString = json.dumps(json_Array, indent=4)
                jsonf.write(jsonString)
        except Exception as f:
            print(f)
        else:
            print("conversion successful")

if __name__=="__main__":
    copy_excel()
    convert_json()


#ModuleNotFoundError: