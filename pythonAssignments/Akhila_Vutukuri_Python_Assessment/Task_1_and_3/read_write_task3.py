import openpyxl,csv,datetime,os
class CsvToExcel:
    def write_to_file():
        work_book = openpyxl.Workbook()
        save_work = work_book.active
        with open("Task 3\\realestate.csv",'r') as csvreader:
            reader = csv.reader(csvreader,delimiter=',')
            for record in reader:
                save_work.append(record)
        today_date = datetime.datetime.now().strftime('%d_%m_%y')
        work_book.save(f'{today_date}.xlsx')
    
    def check_file(self,file_path):
        return os.path.exists(file_path)

    def check_size_of_file(self,file_path):
        return os.path.getsize(file_path)

if __name__ == '__main__':
    cte = CsvToExcel()
    print(cte.check_file("C:\\Users\\avutukuri\\Desktop\\python\\Assessment\\25_11_22.xlsx"))
    print(cte.check_size_of_file("C:\\Users\\avutukuri\\Desktop\\python\\Assessment\\25_11_22.xlsx"))

    

        

