class ID_Not_Found_Error(Exception):
    pass
class Person:
    def __init__(self,name,age,city):
        self.name=name
        self.age=age
        self.city=city
class Employee(Person):
    def __init__(self,name,age,city,id):
        super().__init__(name,age,city)
        self.id=id
    
    def add_employee(self):
        try:
            with open('C:\\Users\\avutukuri\\Desktop\\python\\Assessment\\Task 2\\employee.txt','a') as fw:
                fw.write(f"{self.id},{self.name},{self.age},{self.city}")  
                fw.write("\n")   
        except Exception:
            print("Record cannot be added to the file")
    
    def get_employee_details(self,id):
        self.id=id
        try:
            with open('C:\\Users\\avutukuri\\Desktop\\python\\Assessment\\Task 2\\employee.txt','r') as fr:
                lines=fr.readlines()
                count=0
                for line in lines:
                    emp_list=[x for x in line.split(",")]
                    if(emp_list[0]==f'{self.id}'):
                        print(line)
                        count=1
                if count==0:
                    raise ID_Not_Found_Error 
        except ID_Not_Found_Error:
            print("employee with id:{0} not found".format(self.id))
    
    def update_employee_details(self,id,name):
        self.id=id
        self.name=name
        try:
            with open('C:\\Users\\avutukuri\\Desktop\\python\\Assessment\\Task 2\\employee.txt','r') as file_read:
                lines=file_read.readlines()
            count=0
            with open('C:\\Users\\avutukuri\\Desktop\\python\\Assessment\\Task 2\\employee.txt','w') as file_write:
                for line in lines:
                    emp_list=[x for x in line.split(",")]
                    if(len(emp_list)==1):
                        continue
                    elif(emp_list[0]==f'{self.id}'):
                        file_write.write(f'{self.id},{self.name},{emp_list[2]},{emp_list[3]}')
                        count=1
                        print("record of employee with id {0} updated".format(self.id))
                    else:
                        file_write.write(f'{emp_list[0]},{emp_list[1]},{emp_list[2]},{emp_list[3]}')
                        
            if(count==0):
                raise ID_Not_Found_Error 
        except ID_Not_Found_Error:
            print("employee with id:{0} not found".format(self.id))
    
    def remove_employee(self,id):
        self.id=id
        try:
            with open('C:\\Users\\avutukuri\\Desktop\\python\\Assessment\\Task 2\\employee.txt','r') as file_read:
                lines=file_read.readlines()
            count=0
            with open('C:\\Users\\avutukuri\\Desktop\\python\\Assessment\\Task 2\\employee.txt','w') as file_write:
                for line in lines:
                    emp_list=[x for x in line.split(",")]
                    if(len(emp_list)==1):
                        continue
                    elif(emp_list[0]==f'{self.id}'):
                        print("record deleted")
                        count=1
                    else:
                        file_write.write(f'{emp_list[0]},{emp_list[1]},{emp_list[2]},{emp_list[3]}')
                        
            if(count==0):
                raise ID_Not_Found_Error 
        except ID_Not_Found_Error:
            print("employee with id:{0} not found".format(self.id))


#menu
emp=Employee("Akhila",22,"Hyderabd",1)
while(1):
    print("*"*10+"MENU"+"*"*10)
    print("1. Add an Employee")
    print("2. Get details of an employee")
    print("3. Remove an employee")
    print("4. Update details of an employee")
    print("5. exit")
    print("enter a number:")
    choice=int(input())
    if(choice==1):
        name=input("enter name:")
        age=int(input("enter age:"))
        city=input("enter city:")
        id=int(input("enter id:"))
        emp1 = Employee(name,age,city,id)
        emp1.add_employee()
    elif(choice==2):
        id=int(input("enter employee id:"))
        emp.get_employee_details(id)
    elif(choice==3):
        id=int(input("enter employee id:"))
        emp.remove_employee(id)
        
    elif(choice==4):
        id=int(input("enter employee id:"))
        name=input("enter new name:")
        emp.update_employee_details(id,name)
    elif(choice==5):
        exit()
