'''
Write a objet oriented python program to implement Employee Management System. 
In which you have to include the given topics as per requirement of the program: 
Inheritance, Lambda Expressions, Exceptional Handling and file handling.

create a menu for the user which consists of 5 different features.

1.To add an employee ( write the output to file with employee id)

2.To view details of an employee ( read from the file )

3.To remove an employee

4.To update info of an employee

5.To exit
'''

class Employee:
    def __init__(self,filename):
        self.emp_details = filename
        fw = open(self.emp_details,'a')
        fw.close()
class Employee_Management(Employee):
    def __init__(self,filename):
        super().__init__(filename)
    def add_employee(self,emp_id):
        try:
            with open(self.emp_details,'a') as fobj:
                fobj.writelines(emp_id+'\n')
        except Exception as err:
            print('File not found')
            print(err)
    def view_employee(self,emp_id):
        flag = False
        with open(self.emp_details,'r') as fobj:
            l= fobj.readlines()
            for emp in l:
                if(emp==emp_id+'\n'):
                    flag = True
                    print(emp)
        if(flag==False):
            print(f'Emp_Id {emp_id} not found')
    def remove_employee(self, emp_id):
        with open(self.emp_details, 'r') as fobj:
            lines = fobj.readlines()
            with open(self.emp_details, 'w') as fw:
                for line in lines:
                    if(line!=emp_id+'\n'):
                        fw.write(line)
                    else:
                        print(f'Emp_Id {emp_id} deleted')
    def update_empinfo(self, emp_id,new_emp_id):
        with open(self.emp_details, 'r') as fobj:
            lines = list(fobj.readlines())
            with open(self.emp_details, 'w') as fw:
                for line in lines:
                    if(line!=emp_id+'\n'):
                        fw.write(line)
                    else:
                        fw.write(new_emp_id+'\n')
                        print(f'Emp_Id {emp_id} updated to {new_emp_id}')
ems_obj = Employee_Management('emp_details.txt')
while(True):
    opt = input("Please Enter Choice [1,2,3,4,5]: ")
    if(ord(opt)<49 or ord(opt)>53):
        print('Enter valid option')
        continue
    option = int(opt)
    if(option<1 or option>5):
        print('Enter valid option')
    if(option==1):
        emp = input('Enter employee id to be added: ')
        ems_obj.add_employee(emp)
    elif(option==2):
        emp = input('Enter employee id to be viewed: ')
        ems_obj.view_employee(emp)
    elif(option==3):
        emp = input('Enter employee id to be removed: ')
        ems_obj.remove_employee(emp)
    elif(option==4):
        emp = input('Enter employee id to be updated: ')
        emp_update = input('Enter updated employee id: ')
        ems_obj.update_empinfo(emp, emp_update)
    elif(option==5):
        break