# Write a objet oriented python program to implement Employee Management System. In which you have to include the given topics as per requirement of the program: Inheritance, Lambda Expressions, Exceptional Handling and file handling.

# create a menu for the user which consists of 5 different features.

# 1.To add an employee ( write the output to file with employee id)
# 2.To view details of an employee ( read from the file )
# 3.To remove an employee
# 4.To update info of an employee
# 5.To exit 
import json
class Implementations:

    def add_Employee(self,):
        
        # json_object = json.dumps(self.__dict__, indent=4)
        # with open(str(self.emp_detail[0])+".json", "w") as outfile:
        #     outfile.write(json_object)
        #     json_object = json.dumps(self.__dict__, indent=4)
        # print("employee added")
        def display_Employee(id):
        try:
            with open("employees.txt", "r+") as file1:
                file1 = open('employees.txt', 'r')
                Lines = file1.readlines()
                flag=False
                for line in Lines:
                    if id==line[0]:
                        flag=True
                        print(line)
                if(flag==False):
                    print("Employee not found")
        except Exception as err:
            print("No Employee found with {}".format(id))

    def delete_employee(id):
        try:
            for emp in Implementations.emp_list:
                if id==emp[0]:
                    print("Employee Deleted!")
                    Implementations.emp_list.pop(emp)
        except Exception as err:
            print(err)
    def update_employee(emp_detail,id):
        try:
            for emp in Implementations.emp_list:
                if id==emp[0]:
                    emp[1]=emp_detail[1]
                    emp[2]=emp_detail[2]
        except Exception as err:
            print("Cannot be updated")

class Menu(Implementations):
    while True:  
        print("*"*30)
        print("EMPLOYEE MANAGEMENT SYSTEM")
        print("*"*30)
        print("1. Add Employee")  
        print("2. View Details of an Employee")  
        print("3. Delete Employee") 
        print("4. Update information of an employee") 
        print("5. Exit")
        choice1 = int(input("Enter the Choice:")) 
        employee_list=[] 
        if choice1 == 1:
            print("Enter Employee details:")
            id=input("Enter id:")
            name=input("Enter name of an employee: ")
            dept=input("Enter Department: ")

            Implementations.add_Employee(id,name,dept)
        elif choice1== 2:
            id=input("Enter Id of an employee: ")
            Implementations.display_Employee(id)
        elif choice1 == 3:
            id=input("Enter id to be deleted: ")
            Implementations.delete_employee(id)
        elif choice1 == 4:
            emp_det=input("Enter Employee details").split(",")
            Implementations.update_employee(emp_det,emp_det[0])
        elif choice1 == 5:
            print("Thank You! See you again.")
            break
        else:
            print("Please Enter correct choice...")