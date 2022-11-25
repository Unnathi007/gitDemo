# Task 2:
# --------------


# Write a objet oriented python program to implement Employee Management System. In which you have to include the given topics as per requirement of the program: 
# Inheritance, Lambda Expressions, Exceptional Handling and file handling.

# create a menu for the user which consists of 5 different features.

# 1.To add an employee ( write the output to file with employee id)
# 2.To view details of an employee ( read from the file )
# 3.To remove an employee
# 4.To update info of an employee
# 5.To exit 

import json

class Person:
    def __init__(self,name,age) :
        self.name=name
        self.age=age
    
    def display(self):
        print("Name : ",self.name)
        print("Age : ",self.age)

class Employee(Person):
    
    def __init__(self):
        self.list_emp=[]

    def addEmployee(self,empid,empname,empage,empadd):
        emp_dict={}
        emp_dict["empid"]=empid
        emp_dict["empname"]=empname
        emp_dict["empage"]=empage
        emp_dict["empadd"]=empadd
        self.list_emp.append(emp_dict)

        with open("Employees_File.json",'r') as fr:
            data=json.load(fr)
            if type(data)==dict:
                data=[data]
            data.append(emp_dict)
        with open('Employees_File.json', 'w') as fw:
            json.dump(data, fw)
            
    def viewDetails(self,empid):
        try:
            with open("Employees_File.json",'r') as fr:
                reader=json.load(fr)
                for read in reader:
                    if read["empid"]==empid:
                        for k,v in read.items():
                            print(k,' ',v)

        except Exception as err:
            print(err)
    
    def removeEmployee(self,empid):
        try:
            l=[]
            with open("Employees_File.json",'r') as fr:
                reader=json.load(fr)
                for read in reader:
                    l.append(read)
                    if read["empid"]==empid:
                        l.remove(read)
                    
            with open("Employees_File.json",'w') as fw:
                json.dump(l,fw)
                            
        except Exception as err:
            print(err)
    
    def updateEmployee(self,upd_emp_key,org_val,upd_emp_val):
        l=[]
        with open("Employees_File.json",'r') as fr:
            reader=json.load(fr)
            for read in reader:
                if read[upd_emp_key]==org_val:
                    read[upd_emp_key]=upd_emp_val
                l.append(read)
        with open("Employees_File.json",'w') as fw:
            json.dump(l,fw)

                
class MenuDrivenPrg:

    def menuDriven(self):
        
        emp=Employee()

        while(True):
            print('MENU')
            print('------------------------')
            print('Press 1: To Add Employee Details')
            print('Press 2: To View Employee Details')
            print('Press 3: To Remove Employee Details')
            print('Press 4: To Update Employee Details')
            print('Press 5: To Exit')
            ch=int(input("Please Enter Choice: "))

            if ch==1:
                empid=input('Enter the empid: ')
                empname=input('Enter the employee name: ')
                empage=input('Enter the age: ')
                empadd=input('Enter the employee address: ')
                emp.addEmployee(empid,empname,empage,empadd)
                print("Inserted successfully!")
            
            if ch==2:
                empid=input('Enter the empid: ')
                emp.viewDetails(empid)
            
            if ch==3:
                empid=input('Enter the empid: ')
                emp.removeEmployee(empid)
                print("Removed successfully!")
            
            if ch==4:
                print('Select empid,empname,empage,empadd')
                upd_emp_key=input('Enter the key to be updated: ')
                org_val=input('Enter the original value : ')
                upd_emp_val=input('Enter the val to be updated: ')
                emp.updateEmployee(upd_emp_key,org_val,upd_emp_val)

            if ch==5:
                exit()

if __name__=='__main__':
    menu=MenuDrivenPrg()
    menu.menuDriven()



            
                



        
        



