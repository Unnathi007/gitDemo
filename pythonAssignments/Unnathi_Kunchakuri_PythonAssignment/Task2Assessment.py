# Task 2:
# --------------


# Write a objet oriented python program to implement Employee Management System. In which you have to include the given topics as per requirement of the program: Inheritance, Lambda Expressions, Exceptional Handling and file handling.

# create a menu for the user which consists of 5 different features.

# 1.To add an employee ( write the output to file with employee id)
# 2.To view details of an employee ( read from the file )
# 3.To remove an employee
# 4.To update info of an employee
# 5.To exit 

import fileinput
  
filename = "Task2Output.txt"
class EMS:
    def addEmployee(self,emp):
        try:
            with open(filename,'a') as file:
                 file.write(emp+'\n')
        except FileNotFoundError as err:
            print(err)
    def getEmployee(self,empId):
        try:
            with open(filename,'r') as file:
                for line in file:
                    if "Id : "+empId in line:
                        return line
                return "Not Found"
        except FileNotFoundError as err:
            print(err)
    def updateEmployee(self,empId,newEmp):
        try:
            with fileinput.FileInput(filename,inplace = True, backup ='.bak') as f:
                c=1
                for line in f:
                    if "Id : "+empId in line:
                        print(newEmp,end ='\n')
                    else:
                        print(line,end="\n")
                        c=-1
                if(c==-1):print("no Such Employee")
        except FileNotFoundError as err:
            print(err)
    def removeEmployee(self,empId):
        try:
            with open(filename,'r') as file:
                for line in file:
                    if "Id : "+empId in line:
                        rec= line
                        break
            with fileinput.FileInput(filename,inplace = True, backup ='.bak') as f:
                c=1
                for line in f:
                    if "Id : "+empId not in line:
                        print(line,end="\n")
                        # c=-1
                # if(c==-1):print("no Such Employee")
                else:return rec
        except FileNotFoundError as err:
            print(err)

if __name__=="__main__":           
    try:  

        frmt="Id : {} , Name : {} , Age : {} , Salary : {}"
        ems=EMS()
        while(True):
            print("*****************************************")
            print("*******EMPLOYEE  MANAGEMENT SYSTEM*******")
            print("*****************************************")
            print("PRESS 1 : To Add an Employee Details")
            print("PRESS 2 : To See an Employee Details")
            print("PRESS 3 : To Update an Employee Details")
            print("PRESS 4 : To Remove an Employee")
            print("PRESS 5 : To Exit the EMS Portal")
            choice=input("Please Enter your Choice :")
            if(choice=='1'):
                print("Enter the Details of Employee")
                id=input("Enter Id : ")
                name=input("Enter name : ")
                age=input("Enter age : ")
                sal=input("Enter Salary : ")
                emp=frmt.format(id,name,age,sal)
                ems.addEmployee(emp)
            elif(choice=='2'):
                id=input("Enter id of employee : ")
                print(ems.getEmployee(id))
            elif(choice=='3'):
                id=input("Enter id of employee to be updated : ")
                print("Enter new Details : ")
                name=input("Enter Name for updation : ")
                age=input("Enter age for updation :")
                sal=input("Enter salary for updation :")
                emp=frmt.format(id,name,age,sal)
                ems.updateEmployee(id,emp)
            elif(choice=='4'):
                id=input("Enter id of employee to be Removed : ")
                print("Removed Employee : ",ems.removeEmployee(id))
            elif(choice=='5'):
                # exit()
                break 
            else:
                print("Enter Correct option from above")

    except FileNotFoundError as err:
        print(err)
