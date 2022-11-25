'''
Write  a program to read hosts.csv file containing all the hostnames of the topmost servers and check whether the hostname is the 
valid or not (ending with .com )  and also find the IP Address of each hostname and write the output the ip addresses to Hostwithip.xlsx
Also implement the same solution with multithreading module

Also implement the same solution with multiprocessing module
'''
import csv
import socket
import sys

try:
    data_host=[]
    filename=r"C:\Users\vavalur\Desktop\Python\hosts.csv"
    with open(filename,"r") as fr:
        lines=csv.reader(fr)
        for col in lines: #col is a list
            if col[1].split(".")[-1]=='com':
                print(socket.gethostbyname(col[1]))
                data_host.append(socket.gethostbyname(col[1]))
except socket.gaierror as e: 
        #print ("Address-related error connecting to server: %s" % e) 
        pass

try:
    with open("Hostwithip.xlsx","w",newline="") as emps:
        wr = csv.writer(emps)
        wr.writerows(data_host)
except Exception as er:
    print("Exception 2")
    print(er)