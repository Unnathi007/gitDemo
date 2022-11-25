import socket
import csv
import xlsxwriter
with open('hosts.csv') as f:
    li=csv.reader(f)
    workbook=xlsxwriter.Workbook('Hostwithip.xlsx')
    worksheet=workbook.add_worksheet()
    r,c=0,0
    for l in li:
        ext=l[1].split(".")
        if(ext[1]=='com'):
            try:
                hostname=l[1]
                ip_address = socket.gethostbyname(hostname)
                print(hostname,ip_address)
                worksheet.write(r,c,hostname)
                c+=1
                worksheet.write(r,c,ip_address)
                r+=1
            except Exception:
                pass
        c=0
    workbook.close()