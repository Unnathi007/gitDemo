import openpyxl as xl
import csv,json
from datetime import datetime
def convert_csv_to_xlsx():
    wb = xl.Workbook()
    ws = wb.active
    with open(r"C:\Users\rkantha\Desktop\Trainig\Python\python_test\task03\realestate.csv","r",encoding="UTF-8") as fr:
        reader = csv.reader(fr)

        for line in reader:
            ws.append(line)
    today = datetime.now().strftime("%d_%b_%Y")

    wb.save(f"{today}.xlsx")
    
def convert_csv_to_json():
    with open(r"C:\Users\rkantha\Desktop\Trainig\Python\python_test\task03\realestate.csv","r",encoding="UTF-8") as fr:
        reader = csv.reader(fr)
        data = {}
        i = 0
        l = next(reader)

        for line in reader:
            row = {}
            for col in range(len(l)):
                row[l[col]] = line[col]
            
            data[f"row {i}"] = row
            i+=1
    with open(r"C:\Users\rkantha\Desktop\Trainig\Python\python_test\task03\realestate.json","w") as fw:

        json.dump(data,fw,indent=4)
if __name__ == "__main__":
    # convert_csv_to_xlsx()
    convert_csv_to_json()