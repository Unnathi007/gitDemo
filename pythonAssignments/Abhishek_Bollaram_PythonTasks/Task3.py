import xlsxwriter as xl
from datetime import date

today = date.today()
today = today.strftime('%d_%b_%y')
file = 'C:\\PythonPrograms\\PythonTasks\\' + str(today) + '.xlsx'
workbook = xl.Workbook(file)
worksheet = workbook.add_worksheet()
row = 0
col = 0
with open(r'C:\\PythonPrograms\\realestate2.csv', 'r') as file1:
    for line in file1:
        line = line.split(',')
        for val in line:
            worksheet.write(row, col, val)
            col += 1
        row += 1
        col = 0
workbook.close()