import time
import json

class Employee:
    def __init__(self):
        self.file = open(r'EmployeeData.json',encoding="UTF-8")
        self.empData = json.load(self.file) 
    
    def deployFile(self):
        newEmployeeData = json.dumps(self.empData, indent=4)
        with open("EmployeeData.json", "w") as outfile:
            outfile.write(newEmployeeData)
    
class FileOperations(Employee):
    def addEmployee(self,employee):
        newEmp={}
        newEmp["empId"] = employee[0]
        newEmp["empName"] = employee[1]
        newEmp["salary"] = employee[2]
        self.empData["data"].append(newEmp)
    
    def getEmployee(self,empId):
        for emp in self.empData["data"]:
            if empId == emp["empId"]:
                return emp
        return None
    
    def updateEmployee(self,empId,empName,salary):
        for emp in self.empData["data"]:
            if empId == emp["empId"]:
                emp["empName"] = empName
                emp["salary"] = salary
                return True
        return False

    def removeEmployee(self,empId):
        for emp in self.empData["data"]:
            if empId == emp["empId"]:
                self.empData["data"].remove(emp)
                return True
        return False

if __name__ == '__main__':

    fileOperations = FileOperations()

    while(True):
        print("***********************************************")
        print("\tEMPLOYEE MANAGEMENT SYSTEM")
        print("***********************************************\n\n")
        print("Press 1 : To Add an Employee Details")
        print("Press 2 : To See an Employee Details")
        print("Press 3 : To Remove an Employee Details")
        print("Press 4 : To Update an Employee Details")
        print("Press 5 : To Exit an Employee Details")
        
        ch = int(input('Please Enter Choice : '))
        if ch == 1:
            emp = []
            print("***********************************************")
            print("\tENTER EMPLOYEE DETAILS")
            print("***********************************************\n")
            emp.append(int(input('Enter Employee Id :')))
            emp.append(input("Enter Employee Name :"))
            emp.append(int(input("Enter Salary :"))) 
            fileOperations.addEmployee(emp)
            print("\nEmployee Added Successfully!")

        elif ch == 2:
            empId = int(input('Enter Employee Id :'))
            print("***********************************************")
            print("\tDetails Of Employee")
            print("***********************************************\n")
            emp = fileOperations.getEmployee(empId)
            if(emp == None):
                print("Employee Not Found!")
            else:
                print("Employee Id\t:",emp["empId"])
                print("Employee Name\t:",emp["empName"])
                print("Salary\t\t:",emp["salary"])
        elif ch ==3:
            empId = int(input('Enter Employee Id :'))
            if(fileOperations.removeEmployee(empId)):
                print("Employee Deleted Successfully!")
            else:
                print("Employee Not Found!")
        elif ch==4:
            empId = int(input('Enter Employee Id :'))
            print("***********************************************")
            print("\tUpdating Employee Datails")
            print("***********************************************\n")
            empName = input('Enter Employee Name :')
            salary = int(input('Enter Salary :'))
            if(fileOperations.updateEmployee(empId,empName,salary)):
                print("Employee Details Updated Successfully!")
            else:
                print("Employee Not Found!")

        elif ch == 5:
            fileOperations.deployFile()
            break

        time.sleep(2)
        



