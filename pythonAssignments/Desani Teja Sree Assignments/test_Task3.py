import pytest
import os
import datetime
import csv
import json


csv_path = "C:\\Users\\tdesani\\Downloads\\realestate.csv"
xlsx_path = datetime.datetime.today().strftime("%d_%b_%Y.xlsx")
json_path = datetime.datetime.today().strftime("%d_%b_%Y.json")

def test_checkXlsx():
    path = os.path.exists(xlsx_path)
    assert path == True

def test_checkJson():
    path = os.path.exists(json_path)
    assert path == True

def test_size_greater_than_zero_xlsx():
    res = os.path.getsize(xlsx_path)
    assert res > 0

def test_size_greater_han_zero_json():
    res = os.path.getsize(json_path)
    assert res > 0

def test_records():
    with open(csv_path,'r') as file:
        csvLen=len(list(csv.reader(file))[0])

    with open(json_path,'r') as file:
        data=json.load(file)
        jsonLen=len(data["1"].keys())

    assert jsonLen==csvLen

def test_col():
    with open(csv_path,'r') as file:
        csvLen=len(list(file))

    with open(json_path,'r') as file:
        jsonLen=len(json.load(file))

    assert jsonLen==csvLen-1