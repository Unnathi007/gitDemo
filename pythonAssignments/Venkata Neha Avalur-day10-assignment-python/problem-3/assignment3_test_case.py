import os
import assignment3
import datetime
import pyexcel as pe

def test_excel_creation():
    x = datetime.datetime.now().date().strftime("%d_%b_%Y")
    if x+".xls" in os.listdir():
        os.remove(x+".xls")
    assignment3.copy_excel()
    assert x+".xls" in os.listdir()

def test_json_creation():
    if "realestate.csv.json" in os.listdir():
        os.remove("realestate.csv.json")
    assignment3.convert_json()
    assert "realestate.csv.json" in os.listdir()

def test_compare_no_of_rows():
    x = datetime.datetime.now().date().strftime("%d_%b_%Y")
    assert len(list(open("realestate.csv", "r").readlines())) == len(pe.get_sheet(file_name=x+".xls"))

def test_compare_no_of_coloumns():
    x = datetime.datetime.now().date().strftime("%d_%b_%Y")
    assert len(open("realestate.csv", "r").readlines()[0].split(",")) == len(pe.get_sheet(file_name=x+".xls")[0])
