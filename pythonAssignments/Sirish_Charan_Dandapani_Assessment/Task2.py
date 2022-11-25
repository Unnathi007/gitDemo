empDetails = {}
menu = '''
*****************************************************************
                    Employee Database
*****************************************************************
     1.To add an employee ( write the output to file with employee id)
     2.To view details of an employee ( read from the file )
     3.To remove an employee
     4.To update info of an employee
     5.To exit 
'''

class InvaildChoice(Exception):
     pass


class Employee:
     def __init__(self, empid, empname, empdep) -> None:
          self.EmpId = empid
          self.EmpName = empname
          self.EmpDep = empdep
     
     def addAndUpdateEmp(self):
          empDetails[self.EmpId] = (self)

     def removeEmp(self):
          del empDetails[self.EmpId]

class Menu:
     def displayMenu(self):
          print(menu)
          try:
               ch = int(input("Enter your choice\n"))
               choice = [
                    self.addEmpToFile,
                    self.readEmpFromFile,
                    self.removeEmpFromFile,
                    self.updateEmpFromFile,
                    self.exitApp
               ]
               if (((ch)) >= len(choice) and (ch)  < 0):
                    raise InvaildChoice("Enter a vaild option")
               else:
                    choice[ch-1]()
          except TypeError:
               print("Enter a valid option")
     
     def addEmpToFile(self):
          with open("EmployeeDetails.txt", 'a') as f:
               empid = input("Enter empid")
               if empDetails.get(empid) != None:
                    raise InvaildChoice("Employee Id already exists")
               empname = input("Enter name")
               empdep = input("Enter department")
               emp = Employee(empid, empname, empdep)
               emp.addAndUpdateEmp()
               f.write(str(empid) +","+str(empDetails[empid].EmpName)+","+str(empDetails[empid].EmpDep)+'\n')
     
     def readEmpFromFile(self):
          with open("EmployeeDetails.txt", 'r') as f:
               id = input("Enter Employee id")
               for i in f:
                    if i.split(',')[0] == id:
                         print(i)
     def removeEmpFromFile(self):
          empid = input("Enter empid")
          if empDetails.get(empid) == None:
               raise InvaildChoice("Employee Id dosent exists")
          else:
               empDetails.get(empid).removeEmp()
          with open("EmployeeDetails.txt", 'w') as f:
               for i in empDetails.keys():
                    f.write(str(i) +","+str(empDetails[i].EmpName)+","+str(empDetails[i].EmpDep)+'\n')
          
     def updateEmpFromFile(self):
          with open("EmployeeDetails.txt", 'w') as f:
               empid = input("Enter empid")
               if empDetails.get(empid) == None:
                    raise InvaildChoice("Employee Id dosent exists")
               empname = input("Enter name")
               empdep = input("Enter department")
               emp = Employee(empid, empname, empdep)
               emp.addAndUpdateEmp()
               for i in empDetails.keys():
                    f.write(str(i) +","+str(empDetails[i].EmpName)+","+str(empDetails[i].EmpDep)+'\n')
     def exitApp(self):
          exit()


try: 
     with open("EmployeeDetails.txt", 'r') as f:
          for i in f:
               l = i.split(',')
               empid = l[0]
               empname = l[1]
               empdep = l[2]
               emp = Employee(empid, empname, empdep)
               emp.addAndUpdateEmp()
except:
     pass

while True:
     try:
          Menu().displayMenu()
     except Exception as err:
          print(err)
