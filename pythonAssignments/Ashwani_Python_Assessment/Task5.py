import psycopg2 as pg
try:
    conn = pg.connect(
        host="localhost",
        user="postgres",
        password="Ashwani9",
        database="Ashwani_DB")
    cur = conn.cursor()
    # cur.execute('''CREATE TABLE student(rollno int,Name text,class int,marks int);''')
    # cur.execute("insert into student values(103,'Subha',9,90);")
    cur.execute("select * from student;")
    rows = cur.fetchall()
    print("RollNo   Name   Class   Marks")
    print("------------------------------")
    for row in rows:
        print(row[0], " ", row[1], " ", row[2], " ", row[3])
    conn.commit()
    conn.close()

except Exception as err:
    print(err)
