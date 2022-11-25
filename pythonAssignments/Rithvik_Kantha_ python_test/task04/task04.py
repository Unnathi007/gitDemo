import csv
import socket
import openpyxl as xl
import threading
def getIpAddOfHostNames():
    with open(r"C:\Users\rkantha\Desktop\Trainig\Python\python_test\task04\hosts.csv","r")as fr:
        wb = xl.Workbook()
        ws = wb.active
        reader = csv.reader(fr)
        for line in reader:
            try:
                if line[1].endswith(".com"):
                    ws.append([line[1],socket.gethostbyname(line[1])])
            except socket.gaierror as error:
                print(error)
        wb.save("Hostwithip.xlsx")
if __name__ == "__main__":
    t1 = threading.Thread(target=getIpAddOfHostNames)
    t1.start()