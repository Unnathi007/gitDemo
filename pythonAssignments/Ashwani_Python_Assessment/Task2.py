class Person:
    def __init__(self, name, age) -> None:
        self.name = name
        self.age = age


class Employee(Person):
    def __init__(self, name='', age=0, id=0, salary=0) -> None:
        super().__init__(name, age)
        self.id = id
        self.salary = salary

    def add_emp(self):
        try:
            with open(r"C:\Users\amuppa\Documents\Python\Ashwani_Python_Assessment\Employee_Details.txt", 'a') as fw:
                fw.write(str(self.id)+" "+self.name +
                         " "+str(self.age)+" "+str(self.salary))
            print("Employee Details Added")
        except FileNotFoundError as er:
            print(er)

    def display_emp(self):
        try:
            with open(r"C:\Users\amuppa\Documents\Python\Ashwani_Python_Assessment\Employee_Details.txt", 'r') as fr:
                print("ID   Name   Age   Salary")
                print("-------------------------")
                print(fr.read())
        except FileNotFoundError as er:
            print(er)

    def remove_emp(self, emp):
        try:
            with open(r"C:\Users\amuppa\Documents\Python\Ashwani_Python_Assessment\Employee_Details.txt", 'r') as fr:
                s = ""
                for i in fr:
                    j = i.split(" ")
                    if j[0] != str(emp):
                        s += i
            with open(r"C:\Users\amuppa\Documents\Python\Ashwani_Python_Assessment\Employee_Details.txt", 'w') as fr:
                fr.write(s)
            print("Employee Removed")

        except FileNotFoundError as er:
            print(er)

    def update_emp(self, id):
        try:
            ename = input("Enter New Employee Name: ")
            eage = int(input("Enter Age of new Employee: "))
            esal = int(input("Enter Salary of New Employee: "))
            with open(r"C:\Users\amuppa\Documents\Python\Ashwani_Python_Assessment\Employee_Details.txt", 'r') as fr:
                s = ""
                for i in fr:
                    j = i.split(" ")
                    if j[0] != str(id):
                        s += i
                    else:
                        s += (str(id)+" "+ename +
                              " "+str(eage)+" "+str(esal))
            with open(r"C:\Users\amuppa\Documents\Python\Ashwani_Python_Assessment\Employee_Details.txt", 'w') as fr:
                fr.write(s)
            print("Employee Details Updated")

        except FileNotFoundError as er:
            print(er)


print("*******************************************")
print("****** EMPLOYEE MANAGEMENT SYSTEM *********")
print("*******************************************")
print()
print("1. To Add an Employee Details")
print("2. To See Employees Details")
print("3. To Remove an Employee Details")
print("4. To Update Employee Details")
print("5. EXIT")
o = int(input("Enter your Choice: "))
while o != 5:
    if o == 1:
        id = int(input("Enter Employee ID: "))
        name = input("Enter Employee Name: ")
        age = int(input("Enter Employee Age: "))
        sal = int(input("Enter Employee Salary: "))
        obj = Employee(name, age, id, sal)
        obj.add_emp()
    elif o == 2:
        obj = Employee()
        obj.display_emp()
    elif o == 3:
        id = int(input("Enter Employee ID to Remove: "))
        obj = Employee()
        obj.remove_emp(id)
    elif o == 4:
        id = int(input("Enter Employee ID: "))
        obj = Employee()
        obj.update_emp(id)
    print()
    print("1. To Add an Employee Details")
    print("2. To See an Employee Details")
    print("3. To Remove an Employee Details")
    print("4. To Update Employee Details")
    print("5. EXIT")
    o = int(input("Enter your Choice: "))
