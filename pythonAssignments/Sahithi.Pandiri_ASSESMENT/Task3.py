import csv
import openpyxl
import datetime
import os
class ExcelCreation:
      def create_excel(self):
            wb = openpyxl.Workbook()
            ws = wb.active
            with open('realestate.csv') as f:
                reader = csv.reader(f, delimiter=',')
                for row in reader:
                    ws.append(row)
            wb.save(datetime.datetime.now().strftime("%d_%b_%Y")+'.xlsx')
      def check_file(self):
          return os.path.exists("25_Nov_2022.xlsx")
      def checkSizeOfFile(self):
       size= os.path.getsize("25_Nov_2022.xlsx")
       if(size>0):
        return True
       else:
        return False
        
obj=ExcelCreation()
obj.create_excel()
obj.check_file()


