import csv
from openpyxl import Workbook
import socket
def readHost():
    try:
        with open('hosts.csv','r') as file:
            data=csv.reader(file)
            dataList=[]
            for link in data:
                if link[1].endswith('.com'):
                    dataList.append(link)
        # with open('HostsWithIp.xlsx','w') as file:
        # for rec in dataList:
        #     file.write(str(rec))
        book = Workbook()
        sheet = book.active
        for row in dataList:
            print(row)
            try:
                name=socket.gethostbyname(row[1])
            except Exception as err:
                pass
            row.append(name)
            sheet.append(row)
        book.save('HostWithIp'+'.xlsx')
        
    except FileNotFoundError as err:
        print(err)
readHost()