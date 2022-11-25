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

emp = Employee("akhila",22,"hyd",2)
# emp.add_employee()
# emp.update_employee_details(3,"akhi")
# emp.get_employee_details(3)
emp.remove_employee(3)