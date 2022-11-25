import csv
import fileinput

filename = "employeeDetails.csv"
class Employee:
    
    def __init__(self):
        pass
    
    def addEmployee(self,empId, name, salary):
        with open(filename,'a') as f:
            writer = csv.writer(f)
            l = [empId,name,salary]
            writer.writerow(l)
    
    def viewEmployee(self,id):
        with open(filename,'r') as f:
            reader = csv.reader(f)
            for x in reader:
                if id in x:
                    print("EmpId: {}, Name: {}, Salary: {}".format(x[0],x[1],x[2]))
        
    def removeEmployee(self,id):
        with fileinput.FileInput(filename, inplace=True) as f:
            for line in f:
                if id in line:
                    data = line
                    print("")
                else:
                    print(line)
    
    def updateEmployee(self, id):
        name = input("Enter the name: ")
        sal = input("Enter the Salary: ")
        with fileinput.FileInput(filename, inplace=True) as f:
            for line in f:
                if id in line:
                    print(id, name, sal)
                else:
                    print(line)



    
if __name__=='__main__':

    emp = Employee()

    # with open("employeeDetails.csv",'a') as f:
    #     writer = csv.writer(f)
    #     l=['empId','Name','Salary']
    #     writer.writerow(l)

    while(True):
        print("*"*30)
        print("  EMPLOYEE MANAGEMENT SYSTEM")
        print("*"*30)
        print("1. Add an Employee")
        print("2. View an Employee")
        print("3. Remove an Employee")
        print("4. Update an Employee")
        print("5. Exit")
        print()

        ch = int(input("Enter your choice: "))

        if ch==1:
            empId = input("Enter the EmpId: ")
            name = input("Enter The Name: ")
            salary = input("Enter the Salary: ")
            emp.addEmployee(empId,name,salary)
        
        elif ch==2:
            id = input("Enter the id to view: ")
            emp.viewEmployee(id)
        
        elif ch==3:
            id = input("Enter the id to remove: ")
            emp.removeEmployee(id)
        
        elif ch==4:
            id = input("Enter the id to update: ")
            emp.updateEmployee(id)
        
        if ch==5:
            exit()
        