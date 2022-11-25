# Write a program to read hosts.csv file containing all the hostnames of the topmost servers and 
# check whether the hostname is the valid or not (ending with .com ) and 
# also find the IP Address of each hostname and write the output the ip addresses to Hostwithip.xlsx

# Also implement the same solution with multithreading module

# Also implement the same solution with multiprocessing module

import csv,socket,openpyxl,threading

def Host():  
    l=[]

    with open("hosts.csv",'r') as fr:
        reader =csv.reader(fr)
        for read in reader:
            try:
                if read[1].endswith(".com"):
                    print(read[1])
                    ip_add=socket.gethostbyname("www."+str(read[1]).strip())
                    read.append(ip_add)
                l.append(read)
            except socket.gaierror as err:
                pass
    wb=openpyxl.Workbook()
    ws=wb.active
    for row in l:
        ws.append(row)
    wb.save("Hostwithip.xlsx")

t1=threading.Thread(target=Host)
t1.start()



