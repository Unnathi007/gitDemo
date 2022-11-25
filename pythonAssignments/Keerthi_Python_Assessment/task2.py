class employee:
    def __init__(self,name,id,address):
        self.name=name
        self.id=id
        self.address=address
class ManageEmp(employee):
    def __init__(self,name="",id=0,address=""):
        super().__init__(name,id,address)
    def addEmp(self):
        try:
            with open("c://Users//knagamalla//Documents//pythonTraining/emp.txt","a") as fw:
                l=[self.name,str(self.id),self.address+"\n"]
                fw.writelines(",".join(l))
                   
        except Exception:
            print(" file not found error occured")
    def viewEmp(self,id):
        try:
            with open("c://Users//knagamalla//Documents//pythonTraining/emp.txt","r") as fw:
                for i in fw.readlines():
                    l=i.split(",")
                    if(l[1]==str(id)):
                        print(f"Name of the employee: {l[0]}\t ID: {l[1]}\t Address: {l[2]}")
                    else:print("No such employee exists")
        except FileNotFoundError as err:
            print(err)
    def updateEmp(self,name,id,address):
        try:
            s=""
            with open("c://Users//knagamalla//Documents//pythonTraining/emp.txt","r") as fw:
                for i in fw:
                    l=i.split(",")
                    if(l[1]==str(id)):
                        s += "{},{},{}\n".format(name, id, address)
                    else: s+=i
            with open("c://Users//knagamalla//Documents//pythonTraining/emp.txt","w") as emps:
                emps.write(s)
            

        except FileNotFoundError as err:
            print(err)

    def deleteEmp(self,id):
        try:
            with open("c://Users//knagamalla//Documents//pythonTraining/emp.txt", "r") as emps:
                s=""
                for i in emps:
                    x = i.split(",")
                    if x[1] != str(id):s += i
            with open("c://Users//knagamalla//Documents//pythonTraining/emp.txt", "w") as emps:
                emps.write(s)
        except FileNotFoundError as err:
            print(err)


if __name__=="__main__":
    obm3=ManageEmp()
    obm3.deleteEmp(1)
    while True:
        print("================================")
        print("==========EMP MANAGEMENT========")
        print("================================")
        print("1.Add EMployee")
        print("2.view EMployee")
        print("3.update EMployee")
        print("4.delete EMployee")
        print("5.exit")
        n=int(input("Enter your choice:"))
        if(n==1):
            emp=ManageEmp(input("enter name:"),int(input("input id: ")),input("Address: "))
            emp.addEmp()
        elif(n==2):
            emp=ManageEmp()
            emp.viewEmp(int(input("Enter emp id you want to view:")))
        elif(n==3):
            emp=ManageEmp()
            emp.updateEmp(input("Name: "),input("id: "),input("Address: "))
        elif(n==4):
            emp=ManageEmp()
            emp.deleteEmp(int(input("enter Id you want to delete: ")))
        elif n==5:
            break


        





