# Task 2:
# --------------


# Write a objet oriented python program to implement Employee Management System. 
# In which you have to include the given topics 
# as per requirement of the program: 
# Inheritance, 
# Lambda Expressions, 
# Exceptional Handling and 
# file handling.

# create a menu for the user which consists of 5 different features.

# 1.To add an employee(write the output to file with employee id)

import json
import os
class Employee():
    def __init__(self,name,empid,dept):
        self.name = name
        self.empid = empid
        self.dept = dept
    
#Inheritance    
class Employee_Operations(Employee):
    def __init__(self,name,empid,dept):
            super().__init__(name,empid,dept)
    # 1.To add an employee(write the output to file with employee id)
    def create_employee(self):        
        
        json_object = json.dumps(self.__dict__, indent=4)
       
        with open(str(self.empid)+".json", "w") as outfile:
            outfile.write(json_object)
  


def switch(option):
    try:
        match option:
            case 1:
                name = input("Enter the Employee name:")
                empid = int(input("Enter the Employee ID:"))
                dept = input("Enter the name of the Department:")
                emp = Employee_Operations(name,empid,dept)
                emp.create_employee()
                print("Employee's File Added Successfully !")
                
                quit()
            case 2:
                empid = input("Enter the Employee ID to see his details:")

                with open(str(empid)+".json", "r") as file:
                    jsonData = json.load(file)
                print("Employee Details:")
                for i in jsonData:
                    print(i.capitalize(),":", jsonData[i])
                quit()
            case 3:
                empid = input("Enter the Employee ID to DELETE his details:")
                file_name = str(empid)+".json"
                os.remove(file_name)
                print("Employee File Deleted !")
            # 4.To update info of an employee
            case 4:
                empid = int(input("Enter the Employee ID to edit his Name and Department:"))
                name = input("Enter the Employee name:")
                
                dept = input("Enter the name of the Department:")
                file_name = str(empid)+".json"
                os.remove(file_name)
                dictionary = {
                    "name": name,
                    "empid": empid,
                    "dept": dept,
                    
                }


            
                json_object = json.dumps(dictionary, indent=4)

                
                with open(str(empid)+".json", "w") as outfile:
                    outfile.write(json_object)

                            

                quit()
            case 5:
                
                quit()
    except FileNotFoundError:
        print("Particular Employee File is not Found !")



if __name__ == "__main__":
    print("*********************************************************************")
    print("                  EMPLOYEE MANAGEMENT SYSTEM                         ")
    print("*********************************************************************")
    print("1.To add an Employee(write the output to file with employee id)")
    print("2.To view details of an Employee(read from the file)")
    print("3.To remove an Employee")
    print("4.To update info of an Employee")
    print("5.To Exit")
    option = int(input("Enter your choice: "))
    if option not in range(1, 5):
        print("Please entrer a right choice !")
        quit()

    switch(option)
