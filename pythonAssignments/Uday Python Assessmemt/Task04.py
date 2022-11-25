import csv
import openpyxl
fw=open("hostswithip.xlsx")
with open("C:\Users\umathukumalli\Downloads\hosts\hosts.xlsx",mode="r") as fobj:
   reader=csv.reader(fobj)
for row in reader:
    print(row)