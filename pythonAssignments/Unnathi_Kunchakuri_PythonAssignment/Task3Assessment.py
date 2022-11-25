from openpyxl import Workbook
import csv
import datetime
import json
# with open('realestate.csv','r') as file:
#     data=[]
#     for line in file:
#         data.append(tuple(line.split(",")))

# book = Workbook()
# date=datetime.datetime.today()
# formatted=date.strftime("%d_%b_%Y")
# print(formatted)
# sheet = book.active
# for row in data:
#     sheet.append(row)

# book.save(formatted+'.xlsx')
def csvToJson():
    try:
        with open('realestate.csv','r') as file:
            csv_reader=csv.DictReader(file)
            data_dict={}
            n=0
            for row in csv_reader:
                n+=1
                key=n
                data_dict[key]=row
            with open("Task3Output.json", 'w', encoding = 'utf-8') as jsonFile:
                jsonFile.write(json.dumps(data_dict, indent = 4))
    except FileNotFoundError as err:
        print(err)
csvToJson()