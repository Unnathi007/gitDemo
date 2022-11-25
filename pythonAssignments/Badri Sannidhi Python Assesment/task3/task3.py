from openpyxl import Workbook
from datetime import date
import csv 
import json

def create_realestatexslx():

    todays_date = date.today()
    date_stamp = todays_date.strftime("%d")+'_'+todays_date.strftime("%b")+"_"+todays_date.strftime("%Y")+".xlsx"


    with open("realestate.csv",'r') as fr:
        data=[]
        for line in fr:
            data.append(tuple(line.split(",")))

    # rows=tuple(rows)
    book = Workbook()
    sheet = book.active



    for row in data:
        sheet.append(row)

    book.save(date_stamp)


def csvToJson():

    jsonFile = {}
    filePath = "realestate.csv"
    jsonFilePath = "realestate.json"

    with open(filePath, "r") as fileReader:
        rows = csv.reader(fileReader)
        headings = next(rows)
        rowNum = 1
        for row in rows:
            newJsonFile = {}
            for i in range(len(row)):
                newJsonFile[headings[i]] = row[i]
            jsonFile[rowNum] = newJsonFile
            rowNum = rowNum+1
    
    with open(jsonFilePath, 'w', encoding='utf-8') as jsonf:
        jsonf.write(json.dumps(jsonFile, indent=4))


if __name__=="__main__":
    try:
        create_realestatexslx()
    except ImportError:
        print("Module not found")
    except FileNotFoundError:
        print("Realestate.csv not found")
    except Exception:
        print("Exception occured")

    try:
        csvToJson()
    except ImportError:
        print("Module not found")
    except FileNotFoundError:
        print("Realestate.csv not found")
    except Exception:
        print("Exception occured")
