# Write a program to read hosts.csv file containing all the hostnames of the 
# topmost servers and check whether the hostname is the valid or not 
# (ending with .com ) and also find the IP Address of each hostname and 
# write the output the ip addresses to Hostwithip.xlsx

# Also implement the same solution with multithreading module

# Also implement the same solution with multiprocessing module

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



