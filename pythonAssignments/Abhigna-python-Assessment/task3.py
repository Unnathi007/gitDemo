# Task 3:
# --------------

# Write a program to read realestate.csv and insert all the records to excel file and the excel file should be today’s timestamp  ( Eg: 25_Nov_2022.xlsx )

# - write the separate test cases to check whether the 
# excel file is created or not,
# size of the file is greater than zero or not
# -write the test case whether the no. of records in realestate.csv and database records are equal or not.
# -write the test case whether the count of columns in file and database are equal  or not.
# - you can also add other required test cases if required
# -create a test suite with all the test cases


# Also  write a program to convert realestate.csv to the json file   ( dictionary of dictionaries )


import csv
import json
import datetime
import os
try:
    with open("C:\\Users\\avuppala\\Downloads\\realestate.csv") as fobj:
        reader = csv.reader(fobj)
        data={}
        fileName = datetime.datetime.today().strftime("%d_%b_%Y")+".xls"
        with open(fileName,"w+") as fobj1:
            writer = csv.writer(fobj1)
            for line in reader:
                writer.writerow(line)
    with open("C:\\Users\\avuppala\\Downloads\\realestate.csv") as fobj:
        csvReader = csv.DictReader(fobj)
        c=0
        for rows in csvReader:
            c += 1
            key = c
            data[key] = rows
        print(data)
        fileName = datetime.datetime.today().strftime("%d_%b_%Y")+".json"
        with open(fileName, 'w', encoding='utf-8') as jsonf:
            jsonf.write(json.dumps(data, indent=4))
except Exception:
    print(Exception)
        