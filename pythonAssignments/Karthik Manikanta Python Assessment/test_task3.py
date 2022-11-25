import pytest
import os
import json
import time
import task3
import csv
def test_CheckFile():
    task3.Task3()
    res=os.path.exists('{}.xlsx'.format(time.strftime('%d_%b_%Y')))
    assert res==True
def test_checkFileSize():
    task3.Task3()
    res=os.path.getsize('{}.xlsx'.format(time.strftime('%d_%b_%Y')))
    assert res>0
def test_records():
    with open('realestate.csv','r') as file:
        csvLen=len(list(csv.reader(file))[0])
    with open('{}.xlsx'.format(time.strftime('%d_%b_%Y')),'r') as file:
        data=json.load(file)
        jsonLen=len(data["1"].keys())
    assert jsonLen==csvLen
def test_col():
    with open('realestate.csv','r') as file:
        csvLen=len(list(file))
    with open('{}.xlsx'.format(time.strftime('%d_%b_%Y')),'r') as file:
        jsonLen=len(json.load(file))
    assert jsonLen==csvLen-1