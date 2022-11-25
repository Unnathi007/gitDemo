import csv
# opening the CSV file
hosts=[]
import socket, xlsxwriter
with open('C:\\Users\\mgirukala\\Desktop\\py_training\\assignments\\hosts.csv', mode ='r')as file:
    csvFile = csv.reader(file)
    for lines in csvFile:
        hosts.append(lines[1])
valid_hosts=[]
for host in hosts:
    splits=host.split(".")
    if splits[1]=="com":
        valid_hosts.append(host)
v_hosts=[]
try:
    for v_host in valid_hosts:
        str=v_host+" "+socket.gethostbyname(v_host)
        v_hosts.append(str)
except socket.gaierror as err:
    pass
except socket.error as err:
    pass

workbook = xlsxwriter.Workbook('host-ip.xlsx')
worksheet = workbook.add_worksheet()
row = 0
column = 0
for item in v_hosts :
    worksheet.write(row, column, item)
    row += 1
workbook.close()
