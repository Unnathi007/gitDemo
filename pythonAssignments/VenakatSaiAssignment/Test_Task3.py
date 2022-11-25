import pytest
import os
import datetime
import Task3 as t3
import pyexcel as pe
"""
- write the separate test cases to check whether the
excel file is created or not,
size of the file is greater than zero or not
-write the test case whether the no. of records in realestate.csv and database records are equal or not.
-write the test case whether the count of columns in file and database are equal  or not.
- you can also add other required test cases if required
-create a test suite with all the test cases

"""


def test_excel_creation():
    x = datetime.datetime.now().date().strftime("%d_%b_%Y")
    if x+".xls" in os.listdir():
        os.remove(x+".xls")
    t3.fun()
    assert x+".xls" in os.listdir()


def test_json_creation():
    if "realestate.csv.json" in os.listdir():
        os.remove("realestate.csv.json")
    t3.fun()
    assert "realestate.csv.json" in os.listdir()

def test_compare_no_of_rows():
    x = datetime.datetime.now().date().strftime("%d_%b_%Y")
    assert len(list(open("realestate.csv", "r").readlines())) == len(pe.get_sheet(file_name=x+".xls"))

def test_compare_no_of_coloumns():
    x = datetime.datetime.now().date().strftime("%d_%b_%Y")
    assert len(open("realestate.csv", "r").readlines()[0].split(",")) == len(pe.get_sheet(file_name=x+".xls")[0])
