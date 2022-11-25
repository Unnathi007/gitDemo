# Task 3:
# -------------------------------------------------------------------------------

# Write a program to read realestate.csv and 
# insert all the records to excel file and 
# the excel file should be today’s timestamp  ( Eg: 25_Nov_2022.xlsx )

# - write the separate test cases to check whether the 
# excel file is created or not,
# size of the file is greater than zero or not
# -write the test case whether the no. of records in realestate.csv
# and database records are equal or not.
# -write the test case whether the count of columns in file and database are equal  or not.
# - you can also add other required test cases if required
# -create a test suite with all the test cases


# Also  write a program to convert realestate.csv 
# to the json file   ( dictionary of dictionaries )
#---------------------------------------------------------------------------------
import xlrd as xl  # Import xlrd package
import pandas as pd
import datetime
import xlwt
import os
from os.path import exists



# Reading the csv file
df_new = pd.read_csv('realestate.csv')

file_name  = datetime.datetime.now().strftime("%d_%b_%Y")
file = pd.ExcelWriter(file_name+'.xls')
df_new.to_excel(file, index=False)
file.save()

# excel file is created or not,
def check_file_exists():
    file_name = datetime.datetime.now().strftime("%d_%b_%Y")

    file_exists = exists(file_name+".xls")
    if(file_exists):
        return True
    else:
        return False
    
def check_rows():
    loc = "25_Nov_2022.xls"  # Giving the location of the file

    wb = xl.open_workbook(loc)  # opening & reading the excel file
    s1 = wb.sheet_by_index(0)   # extracting the worksheet
    # initializing cell from the excel file mentioned through the cell position
    s1.cell_value(0, 0)
    # Counting & Printing thenumber of rows respectively
    excel_rows = (s1.nrows) 

    # count no. of lines in csv
    results = pd.read_csv('realestate.csv')
    csv_rows = (len(results)+1)
    
    if(excel_rows == csv_rows):
        return True
    else:
        return False

# size of the file is greater than zero or not
def check_size():
    loc = "25_Nov_2022.xls"
    if(os.path.getsize(loc)):
        return True
    else:
        return False
    
# -write the test case whether the count of columns in file 
# and database are equal  or not.


def check_columns():
    df = pd.read_excel('25_Nov_2022.xls')



    
    # Counting & Printing thenumber of cols respectively
    excel_cols = (df.axes[1])

    # count no. of lines in csv


# ===> reads in all the rows, but skips the first one as it is a header.
    df = pd.read_csv("realestate.csv")

   
    total_cols = len(df.axes[1])  # ===> Axes of 0 is for a column
    
    csv_cols = total_cols

    
    if (excel_cols == csv_cols):
        return True
    else:
        return False
