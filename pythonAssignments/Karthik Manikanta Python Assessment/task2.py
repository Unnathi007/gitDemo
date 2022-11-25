import csv
import os

class Person:
    name=""
    age=0
    def __init__(self,name,age):
        self.name=name
        self.age=age
    def get_name(self):
        print(self.name)
    def get_age(self):
        print(self.age)

class Employee(Person):
    eid=""
    sal=0
    def __init__(self,eid,name,age,sal):
        super().__init__(name,age)
        self.eid=eid
        self.sal=sal
    def get_id(self):
        print(self.eid)
    def get_sal(self):
        print(self.sal)

if __name__=='__main__':
    while(True):
        print("------------------------------")
        print("             Menu             ")
        print("------------------------------")
        print("1) Add an employee")
        print("2) View details of an employee")
        print("3) Remove an employee")
        print("4) Update info of an employee")
        print("5) Exit")
        ch=int(input("Enter your choice: "))
        if ch==1:
            id=input("Enter id: ")
            try:
                path1='C:\\Users\\kthadigoppula\\Documents\\Python\\Assessment\\{}.csv'.format(id)
                if os.path.isfile(path1):
                    print("File already exists!!!")
                else:
                    name=input("Enter name: ")
                    age=int(input("Enter age: "))
                    sal=int(input("Enter salary: "))
                    emp=Employee(id,name,age,sal)
                    fl=open("{}.csv".format(emp.eid),"w")
                    fl.write("id,name,age,salary\n")
                    fl.write('{},{},{},{}'.format(emp.eid,emp.name,emp.age,emp.sal))
                    fl.close()
                    print("File {}.csv created".format(emp.eid))
            except Exception as err:
                print(err)
        elif ch==2:
            id=input("Enter id of the employee: ")
            try:
                path1='C:\\Users\\kthadigoppula\\Documents\\Python\\Assessment\\{}.csv'.format(id)
                if os.path.isfile(path1):
                    with open("{}.csv".format(id)) as f:
                        li=csv.reader(f)
                        for l in li:
                            print(l)
                else:
                    print("File does not exist!!!")
            except FileNotFoundError:
                print("File does not exist!!!")
        elif ch==3:
            id=input("Enter id of the employee: ")
            try:
                path1='C:\\Users\\kthadigoppula\\Documents\\Python\\Assessment\\{}.csv'.format(id)
                if os.path.isfile(path1):
                    os.remove(path1)
                    print("File deleted")
                else:
                    print("File does not exist!!!")
            except FileNotFoundError:
                print("File does not exist!!!")
        elif ch==4:
            id=input("Enter id of the employee: ")
            try:
                path1='C:\\Users\\kthadigoppula\\Documents\\Python\\Assessment\\{}.csv'.format(id)
                if os.path.isfile(path1):
                    os.remove(path1)
                    with open(path1,'a') as f:
                        name=input("Enter name: ")
                        age=int(input("Enter age: "))
                        sal=int(input("Enter salary: "))
                        f.write("id,name,age,salary\n")
                        f.write('{},{},{},{}'.format(id,name,age,sal))
                        f.close()
                    print("File updated")
                else:
                    print("File does not exist!!!")
            except FileNotFoundError:
                print("File does not exist!!!")
        elif ch==5:
            break
        else:
            print("Enter a valid number")
