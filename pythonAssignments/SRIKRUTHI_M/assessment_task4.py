'''
Implement a Object oriented program for maintaining a database of student records using Files.
Student has Student_id, name, Roll_no, Class, marks(M1 , M2 , M3 , M4 , M5, M6 ) and address.
Display the data for few students. –
1) Create Table
2) Display Table
3) Delete Records
4) Update Record
5) Search Record
'''

import psycopg2

conn = psycopg2.connect(database="mydatabase", user="postgres",password="BeM0reSecure1@", host="127.0.0.1",port="5432")
cur = conn.cursor()
class Maintain_Database:
    def create_table(self, name):
        try:
            cur.execute(f"""CREATE TABLE {name}(Student_id text, name text, Roll_no text, Class text, marks text)""")
            conn.commit()
        except Exception as err:
            print(err)
    def display_table(self,name):
        try:
            cur.execute(f"""SELECT * FROM {name}""")
        except Exception as err:
            print(err)
    def delete_row(self,name,id):
        try:
            cur.execute(f"""DELETE FROM {name} WHERE Student_id=={id}""")
            conn.commit()
        except Exception as err:
            print(err)
    def update_row(self,name,id,marks):
        try:
            cur.execute(f"""UPDATE {name} SET marks={marks} WHERE Student_id={id}""")
            conn.commit()
        except Exception as err:
            print(err)
stud = Maintain_Database()
option = int(input('Enter option: '))
while(True):
    if(option==1):
        stud.create_table('student')
    elif(option==2):
        stud.display_table('student')
    elif(option==3):
        stud.delete_row('student',input('Enter student id: '))
    elif(option==4):
        stud.update_row('student',input('Enter student id: '),input('Enter updated marks'))
    elif(option==5):
        break
conn.close()   

