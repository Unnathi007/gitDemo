# Task 4
# -----------

# Write a program to read hosts.csv file containing all 
# the hostnames of the topmost servers and check whether 
# the hostname is the valid or not (ending with .com) 
# and also find the IP Address of each hostname and write 
# the output the ip addresses to Hostwithip.xlsx

# Also implement the same solution with multithreading module

# Also implement the same solution with multiprocessing module
from csv import reader
import xlwt
from xlwt import Workbook
import pandas as pd
import socket



def validate_and_write_to_excel():
    
# open file in read mode
    with open('hosts.csv', 'r') as read_obj:
        # pass the file object to reader() to get the reader object
        csv_reader = reader(read_obj)
        # Iterate over each row in the csv using reader object
        
        dict1 ={}
        for row in csv_reader:            
            if(row[1].endswith(".com")):
                # print(row)
                try:
                    ip = socket.gethostbyname(row[1])
                    
                    dict1[ip] = row[1]
                except :

                      pass

                
               
        data = pd.DataFrame(dict1)

        print(dict1)
        # storing into the excel file
        data.to_excel("output.xls")
        # print("File created.")
        

validate_and_write_to_excel()
