import pytest
import os
import json
import csv
def test_CheckFile():
    res=os.path.exists('Task3Output.json')
    assert res==True
def test_checkFileSize():
    res=os.path.getsize('Task3Output.json')
    assert res>0
def test_records():
    with open('realestate.csv','r') as file:
        csvLen=len(list(csv.reader(file))[0])
    with open('Task3Output.json','r') as file:
        data=json.load(file)
        jsonLen=len(data["1"].keys())
    assert jsonLen==csvLen

def test_col():
    with open('realestate.csv','r') as file:
        csvLen=len(list(file))
    with open('Task3Output.json','r') as file:
        jsonLen=len(json.load(file))
    assert jsonLen==csvLen-1

