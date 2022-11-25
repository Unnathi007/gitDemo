import csv
import socket
try:
    with open(r"C:\Users\amuppa\Documents\Python\Ashwani_Python_Assessment\hosts.csv", "r") as fr:
        with open(r"C:\Users\amuppa\Documents\Python\Ashwani_Python_Assessment\hostswithIp.xlsx", 'w') as fw:
            for i in csv.reader(fr):
                if i[1].endswith(".com"):
                    ip = socket.gethostbyname(i[1])
                    fw.write("{}, {}\n".format(i[1], ip))

except socket.gaierror as e:
    pass
except socket.error as e:
    pass
