import time
import csv
import xlsxwriter
def Task3():
    with open('realestate.csv') as f:
        li=csv.reader(f)
        # fw=open("{}.xls".format(time.strftime('%d_%b_%Y')),'w')
        with xlsxwriter.Workbook('{}.xlsx'.format(time.strftime('%d_%b_%Y'))) as ex:
            worksheet=ex.add_worksheet()
            for row_num, data in enumerate(li):
                worksheet.write_row(row_num, 0, data)

