from datetime import date
import csv
import xlsxwriter
workbook = xlsxwriter.Workbook(date.today().strftime("%d-%b-%y")+'.xlsx')
worksheet = workbook.add_worksheet()
with open('realestate.csv','r') as fobj:
    reader = list(csv.reader(fobj))
    for i in range(0,len(reader)):
        worksheet.write(f'A{i+1}',reader[i][0])
        worksheet.write(f'B{i+1}',reader[i][1])
        worksheet.write(f'C{i+1}',reader[i][2])
        worksheet.write(f'D{i+1}',reader[i][3])
        worksheet.write(f'E{i+1}',reader[i][4])
        worksheet.write(f'F{i+1}',reader[i][5])
        worksheet.write(f'G{i+1}',reader[i][6])
        worksheet.write(f'H{i+1}',reader[i][7])
        worksheet.write(f'I{i+1}',reader[i][8])
        worksheet.write(f'J{i+1}',reader[i][9])
        worksheet.write(f'K{i+1}',reader[i][10])
        worksheet.write(f'L{i+1}',reader[i][11])
workbook.close()




