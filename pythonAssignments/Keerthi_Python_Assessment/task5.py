import psycopg2
class Db_Connect:
    def __init__(self):
        self.con_dets={
        "host" : "127.0.0.1",
        "port" : "5432",
        "user" : "postgres",
        "password":"Thinksmartke#1",
        "database":"cyberark",
        }

class Db_Ops(Db_Connect):
    def create_table(self):
        conn=psycopg2.connect(**self.con_dets)
        cur=conn.cursor()
        cur.execute("create table student(student_id int, name text, roll_no int, class text, marks int)")
        conn.commit()
        conn.close()
    def show_db_table(self):
        conn=psycopg2.connect(**self.con_dets)
        cur=conn.cursor()
        cur.execute('''SELECT * FROM STUDENT''')
        rows=cur.fetchall()
        for row in rows:
            print(row)
        conn.commit()
        conn.close()
    def insert_db(self,row2insert):
        conn = psycopg2.connect(**self.con_dets)
        cur=conn.cursor()
        st = "INSERT INTO STUDENT VALUES ({0},'{1}',{2},'{3}',{4}) ".format(*row2insert)
        cur.execute(st)
        conn.commit()
        conn.close()

    def update_db(self,name,rollno,Class,marks,s_id):
        conn = psycopg2.connect(**self.con_dets)

        cur = conn.cursor()
        st="UPDATE STUDENT SET name='{}', roll_no={}, class='{}', marks={} where student_id={}".format(name,rollno,Class,marks,s_id)

        cur.execute(st)
        conn.commit()
        conn.close()
    def delete_record(self,s_id):
        conn = psycopg2.connect(**self.con_dets)
        cur = conn.cursor()
        str="delete from student where student_id={}".format(s_id)
        cur.execute(str)
        conn.commit()
        conn.close()

if __name__=="__main__":
    while True:
        print("*"*20)
        print("MENU".center(20))
        print("*"*20)
        print("1. create student table")
        print("2. insert into table")
        print("3. display database")
        print("4. delete records")
        print("5. update record")
        # print("6. search record")
        print("6.exit")
        db_ops = Db_Ops()
        ch=input("Select a option: ")
        if ch=="1":
            db_ops.create_table()
        elif ch=="2":
            inp = input(
                "Enter the input data strictly as shown in the next-line\n Student_id, name, Roll_no, Class, marks: ")
            inp=inp.split(",")
            inp=tuple(inp)
            db_ops.insert_db(inp)
        elif ch=="3":
            db_ops.show_db_table()
        elif ch=="4":
            db_ops.delete_record(int(input("enter id to delete: ")))
        elif ch=="5":
            db_ops.update_db(input("enter name to update:"),int(input("enter rollno to update:")),input("enter class to update:"),int(input("enter marks to update:")),int(input("enter id to update:")))
        elif ch=="6":
            break
