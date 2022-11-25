import csv
class Employee:
    def __init__(self):
        pass

    def addEmployee(self,empId,empName):
        data = []

        with open("employees.csv","r") as file:
            csvReader = csv.reader(file)
            for i in csvReader:
                data.append(i)
            # data.append(d)
        with open("employees.csv","w",newline="") as file:
            csvWriter = csv.writer(file)
            data.append([empId,empName])
            csvWriter.writerows((data))

            
    def removeEmployee(self,empId):
        data = []
        with open("employees.csv","r") as file:
            csvReader = csv.reader(file)
            for i in csvReader:
                if empId not in i:
                    data.append(i)
        with open("employees.csv","w",newline="") as file:
            csvWriter = csv.writer(file)
            csvWriter.writerows(data)
            print("Employee deleted")


    def updateEmployee(self,empId,empName):
        data = []
        with open("employees.csv","r") as file:
            csvReader = csv.reader(file)
            for i in csvReader:
                if(i[0]==empId):
                    i[1]=empName
                data.append(i)
        with open("employees.csv","w",newline="") as file:
            csvWriter = csv.writer(file)
            csvWriter.writerows(data)
            print("Employee Updated")

    def viewEmployee(self,empId):
        with open("employees.csv","r") as file:
            csvReader = csv.reader(file)
            for i in csvReader:
                if(i[0]==empId):
                    print("Empployee ID: {} , Empployee Name:{} ".format(i[0],i[1]))
                    break


if __name__ == '__main__':
    while(True):
        print()
        print("-----------MENU---------")
        print("")
        print("1: Add an Employee")
        print("2. To see an Employee Details")
        print("3. To remove an Employee")
        print("4 .To update an Employee")
        print("5. To Exit")
        print()
        print("Please Enter choice:")
        ch = int(input())
        obj = Employee()

        if(ch==1):
            print("Enter empId")
            empId = input()
            print("Enter empname")
            empName = input()
            obj.addEmployee(empId,empName)
        elif(ch==3):
            print("Enter empid")
            id = input()
            obj.removeEmployee(id)
        elif(ch==4):
            print("Enter id to update")
            id = input()
            print("Enter name to change")
            name = input()
            obj.updateEmployee(id,name)
        elif(ch==2):
            print("Enter id to view employee")
            id = input()
            obj.viewEmployee(id)
        else:
            break

