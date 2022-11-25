import psycopg2
class DataBase:
    def __init__(self):
        self.conn = psycopg2.connect(
            database="python", user="postgres", password="1234", host="127.0.0.1", port="5432")
        self.cur = self.conn.cursor()
        self.conn.autocommit = True
    def addRecord(self,student):
        self.cur.execute("""
                        INSERT INTO public.student(
                        id, name, roll_no, class, marks)
                        VALUES ('{}', '{}', '{}', '{}', ARRAY{});""".format(student.id,student.name,student.roll_no,student.Class,student.marks))
        print("Added successfully")
    
    def displayRecords(self):
        self.cur.execute("""
                        SELECT * public.student""")
        records = self.cur.fetchall()
        for record in records:
            print(record)
    def deleteRecord(self,id):
        self.cur.execute("""
                        DELETE FROM public.sales
	                    WHERE id={};""".format(id))
        print("Deleted Recorded successfuly")
    def updateRecord(self,id,student):
        self.cur.execute("""
                        UPDATE public.student
	                    SET id={}, name={}, roll_no={}, class={}, marks={}
	                    WHERE id={};""".format(student.id,student.name,student.roll_no,student.Class,student.marks,id))
        print("Updated record successfully")
    def searchRecord(self,name):
        self.cur.execute("""
                        SELECT id, name, roll_no, class, marks
	                    FROM public.student where name={};""".format(name))
        record = self.cur.fetchall()
        print(record)
        
    