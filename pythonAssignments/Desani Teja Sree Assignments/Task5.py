import psycopg2
import logging

class ConnectDB:
    conn=None
    
    def __init__(self, hostname, port, user, password, database):
        self.hostname = hostname
        self.port = port
        self.user = user
        self.password=password
        self.database = database
    
        self.conn = psycopg2.connect(host = self.hostname, port = self.port, user = self.user, password= self.password, database=self.database)
        
        print("Connection established")



class Methods(ConnectDB):

    def __init__(self, hostname, port, user, password, database):
        super().__init__(hostname, port, user, password, database)
    

    def createTable(self):
        cur = self.conn.cursor()
        cur.execute('''CREATE TABLE Student(STUDENTID Integer PRIMARY KEY,NAME TEXT, ROLLNO INTEGER, CLASS INTEGER,M1 INTEGER,M2 INTEGER, M3 INTEGER, M4 INTEGER, M5 INTEGER, ADDRESS TEXT)''')


    def selectMethod(self):
        cur= self.conn.cursor()
        cur.execute('''select * from Student''')
        rows = cur.fetchall()
        for value in rows:
            print(value)
        
    def insertMethod(self,id, name,roll,cls, m1,m2,m3,m4,m5,add):
        cur= self.conn.cursor()
        cur.execute('''insert into Student values(%d,'%s',%d,%d, %d, %d, %d, %d, %d, '%s')'''%(id, name,roll,cls, m1,m2,m3,m4,m5,add))
        self.conn.commit()

    def updateMethod(self,name,roll,cls, m1,m2,m3,m4,m5,add,id):
        cur= self.conn.cursor()
        cur.execute('''update Student set name='{0}', rollno='{1}', class='{2}',  m1='{3}', m2='{4}', m3='{5}', m4='{6}', m5='{7}', address='{8}' where studentid={9} '''.format(name,roll,cls, m1,m2,m3,m4,m5,add,id))
        self.conn.commit()
    
    def deleteMethod(self,id):
        cur =self.conn.cursor()
        cur.execute('''delete from student where studentid={}'''.format(id))
        self.conn.commit()        

    def searchMethod(self,id):
        cur =self.conn.cursor()
        cur.execute('''select * from student where studentid={}'''.format(id))
        rows = cur.fetchall()
        print(rows)
    
    def close(self):
        self.conn.commit()
        self.conn.close()


if __name__=='__main__':

    obj = Methods("127.0.0.1", "5432", "postgres", "@D*teja123db","cyberark")
    # obj.createTable()

    while(True):
        print("*"*20)
        print("        MENU")
        print("*"*20)
        print("1. Display Database")
        print("2. Insert records")
        print("3. Update Records")
        print("4. Delete Records")
        print("5. Search Records")
        print("6. Exit")
        c = int(input("Enter the choice: "))

        if c==1:
            print("Table records: ")
            obj.selectMethod()
            
        elif c==2:
            print("Enter The records to insert: ")
            id  = int(input("Enter Student ID: "))
            name = input("Enter Student Name: " )
            roll = int(input("Enter Roll No: "))
            cls = int(input("Enter Class: "))
            m1=int(input("Enter M1 Marks: "))
            m2=int(input("Enter M2 Marks: "))
            m3=int(input("Enter M3 Marks: "))
            m4=int(input("Enter M4 Marks: "))
            m5=int(input("Enter M5 Marks: "))
            add = input("Enter Address")
            obj.insertMethod(id, name,roll,cls, m1,m2,m3,m4,m5,add)

        
        elif c==3:
            id = input("Enter id of records to update: ")
            name = input("Enter Student Name: " )
            roll = int(input("Enter Roll No: "))
            cls = int(input("Enter Class: "))
            m1=int(input("Enter M1 Marks: "))
            m2=int(input("Enter M2 Marks: "))
            m3=int(input("Enter M3 Marks: "))
            m4=int(input("Enter M4 Marks: "))
            m5=int(input("Enter M5 Marks: "))
            add = input("Enter Address: ")
            obj.updateMethod(name,roll,cls, m1,m2,m3,m4,m5,add,id)
            print("Updated the record!...")

        elif c==4:
            id = int(input("Enter id of record to delete: "))
            obj.deleteMethod(id)

        elif c==5:
            id = int(input("Enter id of record to search: "))
            obj.searchMethod(id)

        else:
            obj.close()
            exit()
