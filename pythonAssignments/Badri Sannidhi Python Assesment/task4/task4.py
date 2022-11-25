import socket
from openpyxl import Workbook

def create_ip_xlsx(): 
    with open("hosts.csv",'r') as fr:
        data=[]
        for line in fr:
            l=line.split(",")
            if(l[1].endswith(".com")):
                if (l[1].startswith('w')):
                    pass
                else:
                    l[1]="www."+l[1]
                
                #l[1] = 'www.google.com'
                try:
                    ip_add_host=socket.gethostbyname(l[1].strip())
                    data.append([l[1].strip(),ip_add_host])
                    print(l[0])
                except:
                    pass

        book = Workbook()
        sheet = book.active

        for row in data:
            sheet.append(row)

        book.save("Hostwithip.xlsx")

try:
    create_ip_xlsx()
except socket.gaierror:
    print("Unable to access website")
