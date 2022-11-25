import csv
import xlsxwriter,datetime
def csvToxlsx():
    filePath = "C:\\Users\\sbatraju\\WebDev\\python\\Test\\thirdQuestion\\csv files\\realestate.csv"
    with open(filePath, "r") as fileReader:
        rows = csv.reader(fileReader)
        headings = next(rows)
        present = datetime.datetime.now()
        fileName="{}_{}_{}.xlsx".format(present.strftime('%d'),present.strftime('%b'),present.year)
        cwd = "C:\\Users\\sbatraju\\WebDev\\python\\Test\\thirdQuestion\\csv files"
        xlsxFilePath = cwd+"\\"+fileName
        workbook = xlsxwriter.Workbook(xlsxFilePath)
        worksheet = workbook.add_worksheet()
        row = 0
        column = 0
        for heading in headings:
            worksheet.write(row, column, heading)
            column = column + 1
        row = row + 1
        for singleRow in rows:
            column = 0
            for item in singleRow:
                worksheet.write(row,column,item)
                column = column + 1
            row = row + 1
        workbook.close()
csvToxlsx()