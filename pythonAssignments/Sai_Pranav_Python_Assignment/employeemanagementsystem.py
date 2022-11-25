# 1.To add an employee ( write the output to file with employee id)
# 2.To view details of an employee ( read from the file )
# 3.To remove an employee
# 4.To update info of an employee
# 5.To exit 
import time

import json
from json import dump
diction=[]
new =[{1:2,3:4}]



class Employee:

   
    empCount = 0
    

    def __init__(self,id, name, salary, age):
        self.id =id
        self.name = name
        self.salary = salary
        self.age=age
        Employee.empCount += 1
        

    def createjson(self):
        
        
        #today= time.strftime('%d-%b-%y-%H_%M_%S')
        
        dict={
            "id":self.id,
            "name":self.name,
            "age":self.age,
            "salary":self.salary
            
        }
        diction.append(dict)
        print(diction)

        return dict

  

class Operations(Employee):

    def __init__(self, id, name, salary, age):


        super().__init__(id, name, salary, age)
    
    def writejson(self):
        with open('new_employee.json', 'a') as outfile:
           # print(Employee.createjson(self))
            
            json.dump(Employee.createjson(self), outfile)

    

class FileOperations:
    def viewDetails(self,x ):
        with open('new_employee.json', 'r' ) as view:
            data= json.load(view)
            for i in data:
                for k,v in i.items():
                    print(k,v)
                    
    def updateDetails(self,id,name,salary,age ):
        
            print(diction)
                

                    

    

    

    
    
while True:  
    print("\nMENU")  
    print("1. Add an employee")  
    print("2. View details of an employee with employee id:")  
    print("3. Remove an employee with employee id")  
    print("4. Update info of employee")  
   
    print("5. Exit")  
    choice = int(input("\nEnter the Choice: "))  

    if choice == 1:
        id=input("Insert id")
        name = input("Insert name")
        sal = input("Insert salary")
        age = input("Insert age") 
        emp = Operations(id,name,sal,age)
        emp.writejson()
        
  
    elif choice == 2:  
       user =input("Insert id")
       x= FileOperations()
       x.viewDetails(user)
       
    elif choice == 3:  
       print("In progress")
  
    elif choice == 4:
        id=input("give id")
        name = input("Insert new name")
        sal = input("Insert new salary")
        age = input("Insert new age") 
        x= FileOperations()
        x.updateDetails(id,name,sal,age)  

        

    elif choice==5:
        break

   






        

# perations  = Operations(1,"lol",123,34)
# perations.openjson()
# x = FileOperations()
# x=FileOperations.viewDetails("1")


# x= FileOperations()
# x.updateDetails(1,"pop",4,5) 