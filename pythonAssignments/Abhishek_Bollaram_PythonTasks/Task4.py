import socket 
import xlsxwriter as xl

def isValidHostname(s):
    if s.endswith('.com'):
        return True
    return False

try:
    workbook = xl.Workbook('C:/PythonPrograms/PythonTasks/Hostwithip.xlsx')
    worksheet = workbook.add_worksheet()
    row = 0
    col = 0
    with open('C:/PythonPrograms/PythonTasks/hosts.csv', 'r') as file:
        for line in file:
            line = line.split(',')
            host = line[-1]
            if isValidHostname(host.strip()):
                ip = socket.gethostbyname(host)
                print(ip)
                worksheet.write(row, col, row + 1)
                col += 1
                worksheet.write(row, col, host)
                col += 1
                worksheet.write(row, col, ip)
                row += 1
                col = 0
            else:
                continue
    workbook.close()
except Exception as ex:
    print(ex)
