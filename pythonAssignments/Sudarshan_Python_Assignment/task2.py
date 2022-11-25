
class Employee:
    directory=[]
    def __init__(self,id=None,name=None,age=None,phno=None):
        self.id=id
        self.name=name
        self.age=age
        self.phno=phno
    
       # self.directory.append(self)

class Operations(Employee):
    
    def empAdd(self):
        id=int(input("Enter the Employee's ID: "))                  # can add validation
        name=input("Enter the Employee's Name:")                    # can add validation
        age=int(input("Enter the Employee's Age: "))                # can add validation
        phno=int(input("Enter the Employee's Phone Number: "))      # can add validation
        super().directory.append(Employee(id,name,age,phno))
        
        with open("Emprecords.csv", 'a+') as fw:
            fw.write(f"{id},{name},{age},{phno}\n")

        return 1

    def empView(self,id):
        for i in Employee.directory:
            if i.id == id :
                print(f"Employee id {i.id}\n Employee Name: {i.name}\n Employee Age: {i.age} \n Employee Phone Number: {i.phno}")
                return 1
        return 0

    def empRemove(self,id):
       for i in Employee.directory:
            if i.id == id:
                print(f"Employee id {i.id}\n Employee Name: {i.name}\n Employee Age: {i.age} \n Employee Phone Number: {i.phno}")
                if (int(input("Confirm with 1 to delete the record"))==1):
                    Employee.directory.remove(i)
                    with open("Emprecords.csv", 'w') as fw:
                        fw.write(f"ID,Name,Age,Phno\n")
                        for data in Employee.directory:
                            fw.write(f"{data.id},{data.name},{data.age},{data.phno}\n")

                    return 1
                else:
                    return 0
            else:
                return 0

    def empUpdate(self,id):
       for i in Employee.directory:
            if i.id == id:
                id=int(input("Enter the new Employee's ID: "))                  # can add validation
                name=input("Enter the new Employee's Name:")                    # can add validation
                age=int(input("Enter the new Employee's Age: "))                # can add validation
                phno=int(input("Enter the new Employee's Phone Number: "))      # can add validation
                print(f" ---NEW---\n Employee id {id}\n Employee Name: {name}\n Employee Age: {age} \n Employee Phone Number: {phno}")
                if (int(input("Confirm with 1 to update the record"))==1):
                    i.id=id
                    i.name=name
                    i.age=age
                    i.phno=phno
                    print(f" ---NEW---\n Employee id {i.id}\n Employee Name: {i.name}\n Employee Age: {i.age} \n Employee Phone Number: {i.phno}")
                    try:
                        with open("Emprecords.csv", 'w') as fw:
                            print(fw.write("ID,Name,Age,Phno:\n"))
                            print(fw.name)
                            for data in Employee.directory:
                                fw.write(f"{data.id},{data.name},{data.age},{data.phno}\n")
                    except:
                        print("file cant open")

                    return 1
                else:
                    return 0
            else:
                return 0


                


   



#### MAIN MENU FUNTION
def menu():
    op=Operations()
    print("".center(50,"*"))
    print("EMPLOYEE MANGEMENT SYSTEM".center(50," "))
    print("".center(50,"*"))
    print("\n\n\n\n\n")
   # print("Select an option from the below menu\n")
    print("Press 1 : To add an Employee")    
    print("Press 2 : To view an Employee ")
    print("Press 3 : To remove an Employee ")
    print("Press 4 : To update an Employee")
    print("Press 5 : To exit\n")
    choice=int(input("Please Enter choice : "))                     # should add validation
    print("-"*50)
    if choice == 1:
        if empAdd(op):
            return 1     
    elif choice == 2:
        if empView(op):
            return 1
    elif choice == 3:
        if empRemove(op):
            return 1
    elif choice == 4:
        if empUpdate(op):
            return 1
    elif choice == 5:
        return 0
    

#### CALLED IN MENU FUNCTION
def empAdd(op):
    if op.empAdd() :
        print("Employee ADDED")
        return 1
    else:
        print("Could not add Employee")
        return 1
def empView(op):
    id=int(input("Enter Emp id to view:"))
    if op.empView(id):
        return 1
    else:
        print (f"Employee with id {id} not found")
        return 1
def empRemove(op):
    id=int(input("Enter Emp id to Delete:"))
    if op.empRemove(id):
        print(f"Employee with id:{id} removed")
        return 1
    else:
        print(f"Didnot remove id:{id}")
        return 1
def empUpdate(op):
    id=int(input("Enter Emp id to Update:"))
    if op.empUpdate(id):
        print(f"Employee with id:{id} updated")
        return 1
    else:
        print(f"Didnot update id:{id}")
        return 1    


while menu():
    print("-"*50)
    print()
    pass