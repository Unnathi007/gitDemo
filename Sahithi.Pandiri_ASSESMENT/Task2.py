class RecordNotFound(Exception):
    pass
class Employee():
    def menu(self):
        while (True):
            print("************")
            print("press 1: To Add Employee Details")
            print("press 2: To See Employee Details")
            print("press 3: To Remove Employee")
            print("press 4: To Update Employee Details")
            print("press 5: To Exit")
            print("Please Enter Choice : ")
            ch = int(input())
            if ch == 1:
                self.AddEmployee()
            elif ch == 2:
                self.viewEmployee()
            elif ch == 3:
                self.removeEmployee()
            elif ch == 4:
                self.updateEmployee()
            elif ch == 5:
                return

    def AddEmployee(self):
        try:
            fr = open("employees.txt", "a")
            name = input("Enter Name ")
            age = (input("enter age "))
            phone_number = input("enter number ")
            emp_id = input("enter emp _id ")
            fr.write(f"{emp_id},{name},{age},{phone_number}")
            fr.write("\n")
        except FileNotFoundError as err:
            print("file not found!!!")

    def viewEmployee(self):
        try:
            c=1
            emp_id = input("enter Employee id to see details ")
            with open("employees.txt", "r") as fr:
                next(fr)
                for line in fr:
                    # print(line,type(line))
                    l = line.split(",")
                    # print(l,type(l))
                    if l[0] == emp_id:
                        print(line)
                        c = 0
            if c != 0:
                raise RecordNotFound("no record found")
        except RecordNotFound as err:
            print(err)

    def removeEmployee(self):
        try:
            c=0
            emp_id = input("enter emp_id that has to be deleted")
            with open("employees.txt", "r") as fr:
                data=fr.readlines()
                print(type(data))
            with open("employees.txt","w") as fw:
                for line in data:
                    l = line.split(",")
                    if (l[0] != emp_id):
                        fw.write(line)
                        c = 1
            if c != 1:
                raise RecordNotFound("no record found")
        except RecordNotFound as err:
            print(err)

    def updateEmployee(self):
        try:
            
            emp_id = input("enter emp_id that has to be updated ")
            with open("employees.txt", "r") as fr:
                data=fr.readlines()
            with open("employees.txt","w") as fw:
                for line in data:
                    c=1
                    l = line.split(",")
                    if (l[0] != emp_id):
                        fw.writelines(line)
                    else:
                        name = input(
                            "enter name to which it has to be updated ")
                        l[1] = name
                        fw.write(f"{l[0]},{l[1]},{l[2]},{l[3]}")
                        c = 0
            if c != 0:
                raise RecordNotFound("record not found")
        except RecordNotFound as err:
            print(err)
emp = Employee()
emp.menu()
