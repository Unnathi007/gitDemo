import csv
import json


def csvToJson():
    jsonFile = {}
    filePath = "C:\\Users\\sbatraju\\WebDev\\python\\Test\\thirdQuestion\\csv files\\realestate.csv"
    jsonFilePath = "C:\\Users\\sbatraju\\WebDev\\python\\Test\\thirdQuestion\\csv files\\file.json"
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
    print(jsonFile)
    with open(jsonFilePath, 'w', encoding='utf-8') as jsonf:
        jsonf.write(json.dumps(jsonFile, indent=4))


csvToJson()
