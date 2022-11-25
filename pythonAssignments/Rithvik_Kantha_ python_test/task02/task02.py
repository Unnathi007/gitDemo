import time
import json
class Person:
    def __init__(self,name,age,phone_number):
        self.name = name
        self.age = age
        self.phone_number = phone_number
    
class Employee(Person):
    def __init__(self,name = '',age = None,phone_number = None):
        super().__init__(name,age,phone_number)
        pass

    def read_employee(self,employee):
        print(employee)
        print("-------------- Employee Details -----------")
        print("Emp_id: " + str(employee["emp_id"]))
        print("Name: " + employee["emp_name"])
        print("Age: " + str(employee["emp_age"]))
        print("Phone Number: " + str(employee["emp_phone_number"]))
        print("Department: " + str(employee["emp_salary"]))
        

    def add_employee(self,emp_id,name,age,phone_number, emp_dept, emp_salary):
        super().__init__(name,age,phone_number)
        self.emp_id = emp_id 
        self.emp_dept = emp_dept
        self.emp_salary = emp_salary
        try:
            with open(r"C:\Users\rkantha\Desktop\Trainig\Python\python_test\task02\employee_details.json","r") as fr:
                file_data = json.load(fr)
            
                new_data = {"emp_id":self.emp_id,"emp_name":name,"emp_age":self.age,"emp_phone_number":self.phone_number, "emp_dept":self.emp_dept, "emp_salary":self.emp_salary}
                file_data["employee_details"].append(new_data)
            with open(r"C:\Users\rkantha\Desktop\Trainig\Python\python_test\task02\employee_details.json","w") as fw:
                json.dump(file_data, fw, indent = 4)
            return ("Emp details inserted..! ")
        except Exception as error:
            print(error)
        
    def remove_employee(self,emp_id):
        try:
            with open(r"C:\Users\rkantha\Desktop\Trainig\Python\python_test\task02\employee_details.json","r") as fr:
                file_data = json.load(fr)
                
                for employee in file_data["employee_details"]:
                    if employee["emp_id"] == emp_id:
                        
                        employee["emp_id"],employee["name"], employee["age"], employee["emp_phone_number"], employee["emp_dept"], employee["emp_salary"] = read_the_emp_details_from_user()
                        file_data["employee_details"].remove(employee)
                        break
            with open(r"C:\Users\rkantha\Desktop\Trainig\Python\python_test\task02\employee_details.json","w") as fw:
                json.dump(file_data, fw, indent = 4)
            return ("Updated..!")
        except Exception as error:
            print("error:",error)
        pass
    def update_employee(self,emp_id):
        try:
            with open(r"C:\Users\rkantha\Desktop\Trainig\Python\python_test\task02\employee_details.json","r") as fr:
                file_data = json.load(fr)
                
                for employee in file_data["employee_details"]:
                    if employee["emp_id"] == emp_id:
                        
                        employee["emp_id"],employee["name"], employee["age"], employee["emp_phone_number"], employee["emp_dept"], employee["emp_salary"] = read_the_emp_details_from_user()
                        file_data["employee_details"].remove(employee)
                        
                        file_data["employee_details"].append(employee)
                        break
            with open(r"C:\Users\rkantha\Desktop\Trainig\Python\python_test\task02\employee_details.json","w") as fw:
                json.dump(file_data, fw, indent = 4)
            return ("Updated..!")
        except Exception as error:
            print("error:",error)            
    def display_employee_details(self,emp_id):
        try:
            with open(r"C:\Users\rkantha\Desktop\Trainig\Python\python_test\task02\employee_details.json","r") as fr:
                file_data = json.load(fr)
                for employee in file_data["employee_details"]:
                    if employee["emp_id"] == emp_id:
                        self.read_employee(employee)
                        break
        except Exception as error:
            print("error:",error)
# ----------------------------------------------------
def read_the_emp_details_from_user():
    emp_id = int(input("Enter the emp_id: "))
    name = input("Enter the name: ")
    age = int(input("Enter the age: "))
    phone_number = int(input("Enter the Phone Number: "))
    emp_dept = input("Enter employee Department: ")
    emp_salary = int(input("Enter the salary: "))
    return emp_id,name,age,phone_number, emp_dept, emp_salary
# ----------------------------------------------------
def add_employee_detsils():
    try:
        emp_id,name,age,phone_number, emp_dept, emp_salary = read_the_emp_details_from_user()
        employee = Employee()
        print(employee.add_employee(emp_id,name,age,phone_number, emp_dept, emp_salary))

    except Exception as error:
        print(error)
# ----------------------------------------------------
def update_employee_details():
    try:
        emp_id = int(input("Enter the emp_id to update: "))
        employee = Employee()
        print(employee.update_employee(emp_id))

    except Exception as error:
        print(error)
# ----------------------------------------------------
def remove_employee_details():
    try:
        emp_id = int(input("Enter the emp_id to update: "))
        employee = Employee()
        print(employee.remove_employee(emp_id))

    except Exception as error:
        print(error)

# --------------------------------------------------
def display():
    try:
        emp_id = int(input("Enter the emp_id to display: "))
        employee = Employee()
        print(employee.display_employee_details(emp_id))

    except Exception as error:
        print(error)
# ----------------------------------------------------
def display_menu():
    print("*"*50)
    print("EMPLOYEE MANAGEMENT SYSTEM".center(50))
    print("*"*50)
    print("Press 1 : To Add an Employee Details")
    print("Press 2 : To See an Employee Details")
    print("Press 3 : To remove an Employee")
    print("Press 4 : To update an Employee Details")
    print("Press 5 : To Exit the EMS portal")



if __name__ == "__main__":
    while(True):
        display_menu()
        choice = int(input("Please Enter Choice: "))
        if(choice  == 1):
            add_employee_detsils()
        elif(choice  == 2):
            display()
        elif(choice  == 3):
            remove_employee_details()
        elif(choice  == 4):
            update_employee_details()
        else:
            print("Thank you....!")
            time.sleep(2)
            exit()