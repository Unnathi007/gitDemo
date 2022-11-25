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
import csv
class Employee:
    def __init__(self):
        pass
    def addEmp(self,empId,empName,empSal):
        try:
           with open("employeeDetails.csv","a") as fobj:
                writer = csv.writer(fobj)
                l=[empId,empName,empSal]
                writer.writerow(l)
        except Exception():
            print(Exception)

    def viewEmp(self,eid):
        try:
            with open("employeeDetails.csv") as fobj:
                reader = csv.reader(fobj)
                for line in reader:
                    if(eid in line):
                        print("Employee Name : ",line[1])
                        print("Employee Salary : ",line[2])
            pass
        except Exception :
            print(Exception)

    def updateEmp(self,eId,empName,empSal):
        with fileinput.FileInput("employeeDetails.csv",inplace = True, backup ='.bak') as f:
            for line in f:
                if eId in  line[0]:
                    print(eId,empName,empSal,end ='\n',sep=",")
                else:
                    print(line, end ='')

        
    def removeEmp(self,eId):
        with fileinput.FileInput("employeeDetails.csv",inplace = True, backup ='.bak') as f:
            for line in f:
                if eId in  line[0]:
                    print(end ='\n')
                else:
                    print(line, end ='')

if __name__ == '__main__':
    empObj = Employee()
    with open("employeeDetails.csv","w+") as fobj:
        writer = csv.writer(fobj)
        l=["employeeId","employeeName","employeeSalary"]
        writer.writerow(l)
    print("==========================")
    print("Employee Management System")
    print("==========================")
    print("1.Add Employee")
    print("2.View Employee")
    print("3.Remove Employee")
    print("4.Update Employee")
    print("5.Exit")
    ch=-1
    while(ch!=5):
        ch = int(input("enter an option"))
        if(ch == 1):
            print("enter a new employee details:")
            empId = input("enter employee id ")
            empName = input("enter employee name")
            empSalary = input("enter employee salary")
            empObj.addEmp(empId,empName,empSalary)
            print("employee details added!")
        elif(ch == 2):
            print("enter an employee id to get details :")
            eid = input()
            empObj.viewEmp(eid)

        elif(ch == 3):
            print("enter an employee id to remove:")
            eid=input()
            print("are you sure to remove press Y to continue")
            str=input()
            if(str=="Y"):
                empObj.removeEmp(eid)
                print("employee with id ",eid," got deleted")
            else:
                print("removal of employee with id ",eid," failed!")

        elif(ch == 4):
            print("enter an employee id to update:")
            eid = input()
            print("enter the name ")
            ename = input()
            print("enter the salary")
            esal = input()
            empObj.updateEmp(eid,ename,esal)
            print("employee details updated")

    