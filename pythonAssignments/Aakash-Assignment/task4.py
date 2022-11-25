import csv
import socket
ips = []
with open("hosts.csv","r") as hosts:
    csvReader = csv.reader(hosts)
   
    for i in csvReader:
        try:
            if(i[1][-4:]==".com"):
                ips.append(socket.gethostbyname(i[1]))    
        except socket.gaierror:
            pass

with open("ips.xlsx","w") as ip:
    csvWriter = csv.writer(ip)
    csvWriter.writerows(ips)
