from Employee import Employee


def addEmployee():
    print("Enter Employee Details:")
    while (True):
        try:
            print("Enter Employee ID:", end="")
            id = input()
            id = int(id)
            break
        except:
            print("Please enter a Valid ID")
    print("Enter Employee Name:", end="")
    name = input()
    while (True):
        try:
            print("Enter Employee Age:", end="")
            age = input()
            age = int(age)
            break
        except:
            print("Please enter a Valid Age")
    while (True):
        try:
            print("Enter Employee Salary:", end="")
            salary = input()
            salary = float(salary)
            break
        except:
            print("Please enter a Valid Salary")
    emp = Employee(id, name, age, salary)
    emp.add_to_file()


def readAllEmployees():
    with open("Employees.txt", 'r') as emps:
        print("Details of all the employees in the file")
        print("\n"*3)
        for i in emps:  
            print(" ".join(i.split(",")))
        print("\n"*3)
        input()


def updateEmployee():
    print("Enter Employee Details:")
    while (True):
        try:
            print("Enter Employee ID:", end="")
            id = input()
            id = int(id)
            break
        except:
            print("Please enter a Valid ID")
    print("Enter Employee Name:", end="")
    name = input()
    while (True):
        try:
            print("Enter Employee Age:", end="")
            age = input()
            age = int(age)
            break
        except:
            print("Please enter a Valid Age")
    while (True):
        try:
            print("Enter Employee Salary:", end="")
            salary = input()
            salary = float(salary)
            break
        except:
            print("Please enter a Valid Salary")
    s = ""
    with open("Employees.txt", "r") as emps:
        for i in emps:
            x = i.split(",")
            if x[0] == str(id):
                s += "{},{},{},{}\n".format(id, name, age, salary)
            else:
                s += i
    with open("Employees.txt","w") as emps:
        emps.write(s)
    print("Employee Details updated")


def deleteEmployee():
    print("Enter Employee Details:")
    while (True):
        try:
            print("Enter Employee ID:", end="")
            id = input()
            id = int(id)
            break
        except:
            print("Please enter a Valid ID")
    s = ""
    with open("Employees.txt", "r") as emps:
        for i in emps:
            x = i.split(",")
            if i[0] != str(id):
                s += i
    with open("Employees.txt", "w") as emps:
        emps.write(s)

    print("Employee of ID {} Deleted Successfully".format(id))


def menu():
    while (True):
        print("*"*20)
        print("Employee Management System".center(20))
        print("*"*20)
        print("\n"*3)
        print("Press 1: To Add an Employee")
        print("Press 2: To See All Employees Details")
        print("Press 3: To Update Employee Details")
        print("Press 4: To Remove Employee")
        print("Press 5: Exit EMS")
        while (True):
            try:
                print("Enter an Option:", end="")
                option = int(input())
                break
            except:
                print("Please enter a Valid option")
        if (option == 1):
            addEmployee()
        elif (option == 2):
            readAllEmployees()
        elif (option == 3):
            updateEmployee()
        elif (option == 4):
            deleteEmployee()
        else:
            print("Thanks for using EMS ,Have a great Day")
            return


if __name__ == "__main__":
    menu()
