import psycopg2
class DatabaseDetails:
    def __init__(self,database,port,user,password):
        self.database=database
        self.port=port
        self.user=user
        self.password=password
        try:
            self.conn= psycopg2.connect(database=self.database,port=self.port,user=self.user,password=self.password)
        except Exception as err:
            print(err)
        self.cur=self.conn.cursor()

class CRUDOperations(DatabaseDetails):
    def __init__(self,database,port,user,password):
        super().__init__(database,port,user,password)

    def display_records(self,table_name):
        self.cur.execute("SELECT * FROM {}".format(table_name))
        records=self.cur.fetchall()
        for row in records:
            print(*row,sep=",")
    
    def update_record(self,table_name,old_name,new_name):
        self.cur.execute("UPDATE {0} SET NAME ='{1}' WHERE NAME='{2}'".format(table_name,new_name,old_name))
        print("updated name of student")
        

    def insert_record(self,*args):
        self.cur.execute(f"INSERT INTO {args[0]} VALUES('{args[1]}','{args[2]}','{args[3]}','{args[4]}',Array[{args[5]},{args[6]},{args[7]}])")
        print("inserted a student record")
    
    def delete_record(self,*args):
        self.cur.execute(f"DELETE FROM {args[0]} WHERE ID='{args[1]}'")
        print("record deleted")
           

database = input("enter the database:")
port=int(input("enter the port number:"))
username=input("enter the username:")
password=input("enter password:")
crud= CRUDOperations(database,port,username,password)

#menu
while(1):
    print("*"*10+"MENU"+"*"*10)
    print("1. insert a record in table")
    print("2. update a record")
    print("3. delete a record")
    print("4. display all records")
    print("5. Exit")
    option=int(input())
    if(option==1):
        table=input("enter table name:")
        name=input("enter student name:")
        id=input("enter student id:")
        Class=input("enter student class:")
        roll_no=input("enter student roll no:")
        marks1,marks2,marks3=input("enter marks seperated by commas: ").split(" ")
        crud.insert_record(table,id,name,Class,roll_no,marks1,marks2,marks3)
    elif(option==2):
        table=input("enter table name:")
        old_name=input("enter the student name that is to be replaced:")
        new_name=input("enter the new name:")
        crud.update_record(table,old_name,new_name)
    elif(option==3):
        table_name=input("enter table name:")
        id = input("enter student id:")
        crud.delete_record(table_name,id)
    elif(option==4):
       table_name=input("enter table name:")
       crud.display_records(table_name) 
    else:
        crud.conn.commit()
        crud.conn.close()
        exit()





            
    




