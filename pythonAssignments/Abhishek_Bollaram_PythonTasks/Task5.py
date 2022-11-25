import psycopg2 as psy

class Student:

    def __init__(self,id, name, rollno, stuClass, m1, m2, m3, m4, m5, m6, address):
        self.studentId = id
        self.studentName = name
        self.studentRollNo = rollno
        self.studentClass = stuClass
        self.m1 = m1
        self.m2 = m2
        self.m3 = m3
        self.m4 = m4
        self.m5 = m5
        self.m6 = m6
        self.studentAddress = address
    
    def passAsTuple(self):
        return (self.studentId, self.studentName, self.studentRollNo, self.studentClass, self.m1, self.m2, self.m3, self.m4, self.m5, self.m6, self.studentAddress)

class StudentDB:

    def connectToDB(self):
        con = psy.connect(host = '127.0.0.1', port = '5432', user = 'postgres', password = 'admin', database = 'pythonexample')
        return con
    
    def closeDB(self, con):
        con.commit()
        con.close()
    
    def createTable(self):
        con = self.connectToDB()
        curs = con.cursor()
        curs.execute("create table students(studentid varchar, studentName varchar,studentRollNo varchar,studentClass varchar,m1 integer,m2 integer,m3 integer,m4 integer,m5 integer,m6 integer,studentAddress varchar)")
        self.closeDB(con)
    
    def insert(self, student):
        con = self.connectToDB()
        curs = con.cursor()
        curs.execute("insert into students values('{}', '{}', '{}', '{}', {}, {}, {}, {}, {}, {}, '{}');".format(student.passAsTuple()))
        self.closeDB(con)
    
    def display(self):
        con = self.connectToDB()
        curs = con.cursor()
        curs.execute("select * from students;")
        rows = curs.fetchall()
        for i in rows:
            print(i)
        self.closeDB(con)
    
    def search(self, studentId):
        con = self.connectToDB()
        curs = con.cursor()
        curs.execute("select * from students where studentId = '{}';".format(studentId))
        rows = curs.fetchall()
        for i in rows:
            print(i)
        self.closeDB(con)
    
    def delete(self, studentId):
        con = self.connectToDB()
        curs = con.cursor()
        curs.execute("delete from students where studentId = '{}';".format(studentId))
        self.closeDB(con)
    
    def update(self, student):
        con = self.connectToDB()
        curs = con.cursor()
        curs.execute("update students set studentId = '{}', studentName = '{}', studentRollNo = '{}', studentClass = '{}', m1 = {}, m2 = {}, m3 = {}, m4 = {}, m5 = {}, m6 = {}, studentAddress = '{}';".format(student.passAsTuple()))
        self.closeDB(con)

class App:

    db = StudentDB()

    def displayMenu(self):
        print('*' * 30)
        print('**Student database handling**')
        print('*' * 30)
        print()
        print('Click 1 : To display records.')
        print('Click 2 : To search fro a record.')
        print('Click 3 : To delete a record.')
        print('Click 4 : To Update student Details.')
        print('Click 5 : To Exit the EMS Portal.')
        print()
    
    def display(self):
        self
    
    def callCorrespondingMethods(choice):
        if choice == 1:
            self.display()
        elif choice == 2:
            self.search()
        elif choice == 3:
            self.delete()
        elif choice == 4:
            self.update()
        else:
            raise Exception('invalid choice!')
    
    def control(self):
        try:
            while True:
                self.displayMenu()
                choice = int(input('Enter your choice : '))
                if choice == 5:
                    break
                self.callCorrespondingMethods(choice)
        except Exception as ex:
            print(ex)
            self.start()
    
    def start(self):
        self.control()

if __name__ == '__main__':

