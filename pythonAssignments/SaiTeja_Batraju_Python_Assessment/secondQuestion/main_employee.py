from employee import EmployeeDetails
import time
class CustomException(Exception):
    pass
def addEmployee(allEmployees):
    empId = input("Enter the Employee Id\n")
    empName = input("Enter the Employee Name\n")
    empSalary = input("Enter the Employee Salary\n")
    empDesignation = input("Enter the Employee Designation\n")
    empManager = input("Enter the Reporting Manager\n")
    empPhoneNumber = input("Enter the Employee's Phone Number\n")
    employeeDetails = EmployeeDetails(
        empId, empName, empSalary, empDesignation, empManager, empPhoneNumber)
    allEmployees.append(employeeDetails)


def viewEmployees(allEmployees):
    for employee in allEmployees:
        print("*"*70)
        print("Employee Id :", employee.empId)
        print("Employee Name :", employee.empName)
        print("Employee Salary :", employee.empSalary)
        print("Employee Designation :", employee.empDesignation)
        print("Employee's Manager :", employee.empManager)
        print("Employee's Phone Number :", employee.empPhoneNumber)
        print("*"*70)

def checkEmployee(empId,allEmployees):
    isPresent = False 
    for employee in allEmployees:
        if employee.empId == empId:
            isPresent = True
    return isPresent  
def removeEmployee(empId, allEmployees):
    if checkEmployee(empId,allEmployees):
        for employee in allEmployees:
            if employee.empId == empId:
                allEmployees.remove(employee)
    else:
        raise CustomException("Employee Not Found")


def updateEmployee(empId, allEmployees):
    empName = input("Enter the Employee Name To be Updated\n")
    empSalary = input("Enter the Employee Salary To be Updated\n")
    empDesignation = input("Enter the Employee Designation To be Updated\n")
    empManager = input("Enter the Reporting Manager To be Updated\n")
    empPhoneNumber = input("Enter the Employee's Phone Number To be Updated\n")
    if checkEmployee(empId,allEmployees):
        for employee in allEmployees:
            if employee.empId == empId:
                employee.empName = empName
                employee.empSalary = empSalary
                employee.empDesignation = empDesignation
                employee.empManager = empManager
                employee.empPhoneNumber = empPhoneNumber
    else:
        raise CustomException("Employee Not Found")

def addToFile(allEmployees):
    with open("employeeDetails.txt", "w") as fileWriter:
        for employee in allEmployees:
            fileWriter.write(str(employee.empId)+" "+str(employee.empName)+" "+str(employee.empSalary)+" "+str(employee.empDesignation)+" "+str(employee.empManager)+" "+str(employee.empPhoneNumber))
            fileWriter.write("\n")
        
if __name__ == "__main__":
    allEmployees = []
    while True:
        time.sleep(1)
        print("*"*70)
        print("EMPLOYEE MANAGEMENT SYSTEM".rjust(45))
        print("*"*70)
        print("Press 1 : To Add an Employee")
        print("Press 2 : To View all Employees")
        print("Press 3 : To Remove an Employee")
        print("Press 4 : To Update Employee")
        print("Press 5 : To Exit the EMS Portal")
        choice = int(input("Enter your choice\n"))
        if choice == 1:
            addEmployee(allEmployees)
            print("Successfully Added Employee")
        elif choice == 2:
            viewEmployees(allEmployees)
        elif choice == 3:
            empId = input("Enter Employee Id to be removed")
            removeEmployee(empId, allEmployees)
            print("Successfully Removed")
        elif choice == 4:
            empId = input("Enter employee Id to be Updated")
            updateEmployee(empId, allEmployees)
            print("Successfully Updated")
        else:
            addToFile(allEmployees)
            print("Exiting the menu....")
            break
