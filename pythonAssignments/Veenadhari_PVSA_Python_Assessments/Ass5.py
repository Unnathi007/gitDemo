# Implement a Object oriented program for maintaining a database of student records using Files.

# Student has Student_id, name, Roll_no, Class, marks(M1 , M2 , M3 , M4 , M5, M6 ) and address.

# Display the data for few students. –

# 1) Create Database

# 2) Display Database

# 3) Delete Records

# 4) Update Record

# 5) Search Record

import psycopg2,time

class Student:
    def __init__(self):
       self.conn=psycopg2.connect(database='cyberark_python_training',port=5432,user='postgres',password='root')
       self.cur=self.conn.cursor()
       self.conn.autocommit=True

    def createTable(self):
        self.cur.execute("CREATE TABLE STUDENT (STUDENT_ID TEXT , STUDENT_NAME TEXT , STUDENT_ROLL TEXT , STUDENT_CLASS TEXT, STUDENT_MARKS int[5],STUDENT_ADDRESS TEXT) ")
    
    def insertTable(self,student_id,student_name, student_roll, student_class,student_marks,student_address):
        self.cur.execute("INSERT INTO STUDENT VALUES('{}','{}','{}','{}',ARRAY{},'{}')".format(student_id,student_name, student_roll, student_class,student_marks,student_address))

    def displayTable(self):
        self.cur.execute("SELECT * FROM STUDENT")
        rows=self.cur.fetchall()
        for row in rows:
            print(*row,sep=" ")

    def deleteTableRow(self,stuid):
        self.cur.execute("DELETE FROM STUDENT WHERE STUDENT_ID = '{}'".format(stuid))
    
    def updateTable(self,stuid,colname,val):
        self.cur.execute("UPDATE STUDENT SET {}= '{}' WHERE STUDENT_ID = '{}'".format(colname,val,stuid))
    
    def searchTable(self,stuid):
        self.cur.execute("SELECT * FROM STUDENT WHERE student_id = '{}'".format(stuid) )
        row=self.cur.fetchall()
        if len(row) != 0:
            return True,row
        return False



def display_menu():

    print("*"*50)
    print("Student MANAGEMENT SYSTEM".center(50))
    print("*"*50)
    print("Press 1 : To Add an Student Details")
    print("Press 2 : To See an Student Details")
    print("Press 3 : To remove an Student")
    print("Press 4 : To update an Student Details")
    print("Press 5 : To Exit the Student portal")


if __name__ == "__main__":
    stu=Student()
    # stu.createTable()
    while(True):
        display_menu()
        choice = int(input("Please Enter Choice: "))
        if(choice  == 1):
            id = input("Enter Id :\n")
            name = input("Enter Name :\n")
            roll_no = input("Enter Roll No. :\n")
            Class = input("Enter Class :\n")
            print("Enter all subjects marks seperated by comma(,)\n")
            marks=list(map(int,input().split(',')))
            add=input("Enter Address :\n")
            stu.insertTable(id,name,roll_no,Class,marks,add)
        elif(choice  == 2):
            stu.displayTable()
        elif(choice  == 3):
            id = input("Enter Id :\n")
            stu.deleteTableRow(id)
        elif(choice  == 4):
            id = input("Enter Id :\n")
            col=input("Enter colname: \n")
            val=input("Enter value: ")
            stu.updateTable(id,col,val)
        else:
            print("Thank you....!")
            time.sleep(2)
            exit()