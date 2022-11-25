'''
Write a objet oriented python program to implement Employee Management System. In which you have to include the given topics as per requirement of the program: Inheritance, Lambda Expressions, Exceptional Handling and file handling.

create a menu for the user which consists of 5 different features.

1.To add an employee ( write the output to file with employee id)
2.To view details of an employee ( read from the file )
3.To remove an employee
4.To update info of an employee
5.To exit 
'''
# Function To Check if Employee with
# given Id Exist or Not
import datetime
import os
import csv

fr=open("Employees.csv",'r',newline='')
fr.close()

def menu():
    ob=Employee()
    while(True):
        print("------------")
        print("1: Add an Employee ")
        print("2. Display an Employee Details")
        print("3. Remove an Employee")
        print("4. Update an Employee")
        print("5. Exit the EMS Portal")
        n = int(input("Enter your choice"))
        if(n==1):
            ob.Add_Employee()
        elif(n==2):
            ob.Display_Employee()
        elif(n==3):
            ob.Remove_Employ()
        elif(n==4):
            ob.Update_Employee()
        elif(n==5):
            print("Exiting the menu function")
            break;

class Employee():
    # Function to mAdd_Employee
    def Add_Employee(self):
        Id = input("Enter Employee Id : ")
        Name = input("Enter Employee Name : ")
        designation = input("Enter Employee Designation : ")
        Salary = input("Enter Employee Salary : ")
        data=[Id,Name,designation,Salary]
        try:
            with open('Employees.csv', 'a', newline='') as emps:
                lines=csv.writer(emps)
                lines.writerow(data)
        except Exception:
            print("Exception encountered")
        else:
            print("Employee Added")

    def Display_Employee(self):
        try:
            with open('Employees.csv', 'r') as emps:
                lines=csv.reader(emps)
                for i in lines:
                    print(i)
        except Exception:
            print("Exception encountered")
        else:
            print("Employees Displayed")

    # Function to Remove Employee with given Id
    def Remove_Employ(self):
        data = []
        Id = input("Enter Employee Id : ")
        try:
            with open("Employees.csv","r") as emps:
                cr = csv.reader(emps)
                for i in cr:
                    if Id not in i:
                        data.append(i)
            with open("employees.csv","w",newline="") as emps:
                wr = csv.writer(emps)
                wr.writerows(data)
        except Exception:
            print("Exception encountered")
        else:
            print("Employee deleted")
    
    # Function to Promote Empl1oyee
    def Update_Employee(self):
        Id = input("Enter Employ's Id")
        print("Select a choice: 1-> Salary 2->Designation")
        choice=int(input())
        if(choice==1):
            print("Enter Salary to be updated")
            Salary = input("Enter Employee Salary : ")
            data = []
            try:
                with open("Employees.csv","r") as emps:
                    cr = csv.reader(emps)
                    for i in cr:
                        if(i[0]==Id):
                            i[2]=Salary
                        data.append(i)
                with open("employees.csv","w",newline="") as emps:
                    wr = csv.writer(emps)
                    wr.writerows(data)
            except Exception:
                print("Exception encountered")

        else:
            print("Designation to be changed")
            designation = input("Enter Employee Designation : ")
            data = []
            try:
                with open("Employees.csv","r") as emps:
                    cr = csv.reader(emps)
                    for i in cr:
                        if(i[0]==Id):
                            i[2]=designation
                        data.append(i)
                with open("employees.csv","w",newline="") as emps:
                    wr = csv.writer(emps)
                    wr.writerows(data)
            except Exception:
                print("Exception encountered")
        print("Updated Employees")

if __name__ == '__main__':
    menu()

# FileNotFoundError:
#ValueError:
#AttributeError:
#UnboundLocalError: