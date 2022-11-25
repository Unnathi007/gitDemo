import os
import datetime
import csv
import json

def test_check_if_excelfile_isCreated():
    fileName = datetime.datetime.today().strftime("%d_%b_%Y")+".xls"
    fileFound = os.path.isfile(fileName)
    assert fileFound == True
def test_check_if_size_greter_than_zero():
    fileName = datetime.datetime.today().strftime("%d_%b_%Y")+".xls"
    fileFound = os.path.getsize(fileName)
    assert fileFound > 0
def test_check_if_jsonfile_isCreated():
    fileName = datetime.datetime.today().strftime("%d_%b_%Y")+".json"
    fileFound = os.path.isfile(fileName)
    assert fileFound == True
def test_check_if_json_size_greter_than_zero():
    fileName = datetime.datetime.today().strftime("%d_%b_%Y")+".json"
    fileFound = os.path.getsize(fileName)
    assert fileFound > 0
def test_records():
    with open("C:\\Users\\avuppala\\Downloads\\realestate.csv",'r') as file:
        csvLen=len(list(csv.reader(file))[0])
    fileName = datetime.datetime.today().strftime("%d_%b_%Y")+".json"
    with open(fileName,'r') as file:
        data=json.load(file)
        jsonLen=len(data["1"].keys())
    assert jsonLen==csvLen
def test_col():
    with open('C:\\Users\\avuppala\\Downloads\\realestate.csv','r') as file:
        csvLen=len(list(file))
    fileName = datetime.datetime.today().strftime("%d_%b_%Y")+".json"
    with open(fileName,'r') as file:
        jsonLen=len(json.load(file))
    assert jsonLen==csvLen-1
