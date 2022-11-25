import os

class Employee:

    def __init__(self, empId, empName = None, department = None, salary = None):
        self.empId = empId
        self.empName = empName
        self.department = department
        self.salary = salary

class EmployeeDoesNotExistException(Exception):

    def __init__(self):
        self.message = 'Employee Not Found!'
        super().__init__(self.message)

class EmployeeManagement(Employee):
    
    def __init__(self, empId, empName = None, department = None, salary = None):
        super().__init__(empId, empName, department, salary)
    
    def getEmployee(self):
        employeeFiles = os.listdir('C:/PythonPrograms/PythonTasks/Employees')
        reqdFile = str(self.empId) + '.txt'
        if reqdFile in employeeFiles:
            return True
        return False 
    
    def addNewEmployee(self):
        if self.getEmployee():
            raise Exception('Employee already exists! To update details, enter 4!')
        else:
            file = 'C:/PythonPrograms/PythonTasks/Employees/' + str(self.empId) + '.txt'
            with open(file, 'w') as emp:
                emp.write(f'EMPLOYEE ID : {self.empId}\n')
                emp.write(f'EMPLOYEE NAME : {self.empName}\n')
                emp.write(f'EMPLOYEE DEPARTMENT : {self.department}\n')
                emp.write(f'EMPLOYEE SALARY : {self.salary}')
    
    def viewEmployeeDetails(self):
        if not(self.getEmployee()):
            raise EmployeeDoesNotExistException
        else:
            file = 'C:/PythonPrograms/PythonTasks/Employees/' + str(self.empId) + '.txt'
            details = []
            with open(file, 'r') as emp:
                for line in emp:
                    line = line.split(':')[-1]
                    info = line.replace('\n', '')
                    details.append(info)
            details = tuple(details)
            emp = Employee(*details)
            return emp
    
    def removeEmployee(self):
        if not(self.getEmployee()):
            raise EmployeeDoesNotExistException
        else:
            file = str(self.empId) + '.txt'
            os.remove('C:/PythonPrograms/PythonTasks/Employees/' + file)
    
    def updateEmployee(self):
        if not(self.getEmployee()):
            raise EmployeeDoesNotExistException
        else:
            file = 'C:/PythonPrograms/PythonTasks/Employees/' + str(self.empId) + '.txt'
            with open(file, 'w') as emp:
                emp.write(f'EMPLOYEE ID : {self.empId}\n')
                emp.write(f'EMPLOYEE NAME : {self.empName}\n')
                emp.write(f'EMPLOYEE DEPARTMENT : {self.department}\n')
                emp.write(f'EMPLOYEE SALARY : {self.salary}')
    
class App:

    def displayMenu(self):
        print('*' * 30)
        print('**EMPLOYEE MANAGEMENT SYSTEM**')
        print('*' * 30)
        print()
        print('Click 1 : To Add a New Employee.')
        print('Click 2 : To See the Details of an Employee.')
        print('Click 3 : To Remove an Employee.')
        print('Click 4 : To Update Employee Details.')
        print('Click 5 : To Exit the EMS Portal.')
        print()
    
    def addEmployee(self):
        empId = input('Enter employee ID : ')
        emp = EmployeeManagement(empId)
        emp.empName = input('Enter employee name : ')
        emp.department = input('Enter the department : ')
        emp.salary = input('Enter the salary of the Employee : ')
        emp.addNewEmployee()
        print('Employee added successfully!')
    
    def viewEmployee(self):
        empId = input('Enter employee ID to view details of the corresponding employee :')
        emp = EmployeeManagement(empId)
        reqdEmployee = emp.viewEmployeeDetails()
        print('Employee ID : ', reqdEmployee.empId)
        print('Employee Name : ', reqdEmployee.empName)
        print('Employee Department : ', reqdEmployee.department)
        print('Employee salary : ', reqdEmployee.salary)
    
    def removeEmployee(self):
        empId = input('Enter employee ID to remove the corresponding employee : ')
        emp = EmployeeManagement(empId)
        emp.removeEmployee()
        print('Employee removed successfully!')
    
    def updateEmployee(self):
        empId = input('Enter the Employee ID to update details of the corresponding employee : ')
        emp = EmployeeManagement(empId)
        if emp.getEmployee():
            emp.empName = input('Enter the name of the employee : ')
            emp.department = input('Enter the department of the employee : ')
            emp.salary = input('Enter the salary of the employee : ')
            emp.updateEmployee()
            print('Employee details updated successfully!')
        else:
            raise EmployeeDoesNotExistException
    
    def callCorrespondingMthods(self, choice):
        if choice == 1:
            self.addEmployee()
        elif choice == 2:
            self.viewEmployee()
        elif choice == 3:
            self.removeEmployee()
        elif choice == 4:
            self.updateEmployee()
        else:
            raise Exception('Please enter a valid choice!')
        
    def control(self):
        try:
            while True:
                self.displayMenu()
                choice = int(input('Enter your choice : '))
                if choice == 5:
                    break
                else:
                    self.callCorrespondingMthods(choice)
        except Exception as ex:
            print(ex)
            self.start()
    
    def start(self):
        self.control()

if __name__ == '__main__':
    app = App()
    app.start()