
import fileinput

class InvalidChoice(Exception):
    pass
class EmployeeMS():
    def addEmployee(self,empId,empName,dept):
        new_emp = str(empId)+","+empName+","+dept+"\n"
        with open("employee.csv",'a') as fw:
            fw.write(new_emp)
    def viewEmp(self,empId):
        with open("employee.csv",'r') as fr:
            for line in fr:
                if line[0]==empId:
                    return line

        return "No employee with ID " + empId

    def removeEmp(self,empId):
        with open("employee.csv", 'r') as fr:
            empdets=fr.readlines()
        #print(empdets)
        ind=None
        for i  in range(len(empdets)):
            if empdets[i][0]== empId:
                ind=i
                break
        if i!=None:
            empdets.pop(i)
            with open("employee.csv", 'w') as fw:
                for i in range(len(empdets)):
                    fw.write(empdets[i])
            print("Employee with id "+ empId+" has been removed")
        else:
            print("No employee with id "+ empId)
    
    def updateEmp(self,empId,dept):
        update_flag=False
        with fileinput.FileInput("employee.csv",inplace=True) as f:
            for line in f:
                if line[0]==empId:
                    orgdept=line.split(",")[-1]
                    update_flag=True
                    print(line.replace(orgdept,dept))
                else:
                    print(line)
        if update_flag:
            print("Employee details have been updated successfully")    
        else:
            print("No employee with id " + empId)

    def exitEmpMS(self):
        exit()

try:
    if __name__=="__main__":
        empMS= EmployeeMS()
        while True:
            print('\n'+"*"*50)
            print("EMPLOYEE MANAGEMENT CENTER\n".center(50))
            print("*"*50+'\n')
            print("Press 1 : To Add an Employee Details")
            print("Press 2 : To See an Employee Details")
            print("Press 3 : To Remove an Employee Details")
            print("Press 4 : To Update an Employee Details")
            print("Press 5 : To Exit the EMS Portal")
            choice= int(input("\nPlease Enter Choice:"))
            if choice == 1:
                empId = input("\nEnter employee ID: ")
                empName = input("\nEnter employee Name: ")
                dept = input("Enter employee department: ")
                try:
                    empMS.addEmployee(empId,empName,dept)
                except FileNotFoundError:
                    print("Employee.csv not found")
            elif choice == 2:
                empId = input("\nEnter employee ID to view employee details ")
                print(empMS.viewEmp(empId))

            elif choice == 3:
                empId = input("\nEnter employee ID to remove employee details from file ")
                print(empMS.removeEmp(empId))

            elif choice == 4:
                empId = input(
                    "\nEnter employee ID to update employee details from file ")
                newDept=input("\nEnter new department of employee with id " + empId)
                empMS.updateEmp(empId,newDept)

            elif choice == 5:
                print("\nExiting EMS")
                empMS.exitEmpMS()

            else:
                raise InvalidChoice("Please enter a valid choice")

except ImportError as ie:
    print("There has been a problem in importing mentioned modules")
except Exception :
    print("An exception has occured")