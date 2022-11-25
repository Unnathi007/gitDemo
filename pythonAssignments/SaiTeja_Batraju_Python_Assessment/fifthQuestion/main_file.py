from student import Student
from database_handling import DataBase
if __name__=="__main__":
    database = DataBase()
    while True:
        print("Press 1. Add Record")
        print("Press 2. Display Records")
        print("Press 3. Delete Record")
        print("Press 4. Update Record")
        print("Press 5. Search Record")
        choice = int(input("Enter your choice\n"))
        if choice == 1:
            id = input("Enter Id :\n")
            name = input("Enter Name :\n")
            roll_no = input("Enter Roll No. :\n")
            Class = input("Enter Class :\n")
            print("Enter all subjects marks seperated by comma(,)\n")
            marks = list(map(int,input().split(",")))
            student = Student(id,name,roll_no,Class,marks)
            database.addRecord(student)
        elif choice == 2:
            database.displayRecords()
        elif choice == 3:
            id = input("Enter Id of the record to be deleted")
            database.deleteRecord(id)
            print("Deleted successfully")
        elif choice == 4:
            id = input("Enter id of record to be updated :")
            name = input("Enter Name to be updated:\n")
            roll_no = input("Enter Roll No. to be updated:\n")
            Class = input("Enter Class to be updated:\n")
            print("Enter all subjects marks seperated by comma(,) to be updated\n")
            marks = list(map(int,input().split(",")))
            student = Student(id,name,roll_no,Class,marks)
            database.updateRecord(id,student)
        elif choice == 5:
            name = input("Enter Name of the record to be searched:\n")
            database.searchRecord(name)
        else:
            print("Exiting.....")
            break 