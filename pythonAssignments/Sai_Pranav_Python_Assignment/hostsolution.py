# import csv
# import socket
# import openpyxl
# with open("hosts.csv", 'r') as file:
#     a =[]
#     reader= csv.reader(file)
#     for i in reader:
#         x=i[1].split('.')
#         if(x[1]=="com"):
            
#             try:
                
#                 #print(socket.gethostbyname(i[1]))
#                 a.append(socket.gethostbyname(i[1]))

#             except Exception:
#                 pass
#     workbook = openpyxl.Workbook()
#     sheet = workbook.active
#     for i in a:
#         sheet.append(i)
#     workbook.save("ip.xlsx")


import socket

import csv

import xlsxwriter

with open('hosts.csv') as f:

    li=csv.reader(f)

    workbook=xlsxwriter.Workbook('Hostwithip.xlsx')

    worksheet=workbook.add_worksheet()

    r,c=0,0

    for l in li:

        ex=l[1].split(".")

        if(ex[1]=='com'):

            # hostname="www"+ex[0]+ex[1]

            try:

                hostname=l[1]

                ip_address = socket.gethostbyname(hostname)

                print(f"Hostname: {hostname}")

                print(f"IP Address: {ip_address}")

                worksheet.write(r,c,hostname)

                c+=1

                worksheet.write(r,c,ip_address)

                r+=1

            except Exception:

                pass

        c=0

    workbook.close()
        


       