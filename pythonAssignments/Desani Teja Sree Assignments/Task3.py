import csv
from openpyxl import Workbook
import datetime
import json

path = "C:\\Users\\tdesani\\Downloads\\realestate.csv"

filename = datetime.datetime.today().strftime("%d_%b_%Y")

def create_xlsx():
    data =[]
    with open(path,'r') as f:
        for line in f:
            data.append(tuple(line.split(",")))


    wbook = Workbook()
    sheet = wbook.active

    for row in data:
        sheet.append(row)

    wbook.save(filename+'.xlsx')

def create_json():
    data1={}

    with open(path, 'r') as f:
        reader = csv.DictReader(f)
        n=0

        for row in reader:
            n+=1
            key = n
            data1[key] = row

    with open(filename+".json", 'w') as jf:
        jf.write(json.dumps(data1, indent=4))

create_xlsx()
create_json()
