import psycopg2
class StudentDBOps():
    def __init__(self):
        self.con_dets = {
            "host": "127.0.0.1",
            "port": "5432",
            "user": "postgres",
            "password": "senpai",
            "database": "python",
        }

    def create_table(self):
        conn=psycopg2.connect(**self.con_dets)
        cur=conn.cursor()
        query_st='''CREATE TABLE STUDENTS (
            student_id integer,
            name text,
            roll_no text,
            marks integer[],
            address text
        ) '''
        cur.execute(query_st)
        conn.commit()
        conn.close()
    def insert_into_table(self,*row):
        conn = psycopg2.connect(**self.con_dets)
        cur=conn.cursor()
        id=2
        query_st='''INSERT INTO STUDENTS ({},'{}','{}','ARRAY{}','{}')'''.format(id,'st','abc',[1,2,3],'ac')
        cur.execute(query_st)
        conn.commit()
        conn.close()


studentDBOps = StudentDBOps()
studentDBOps.insert_into_table()