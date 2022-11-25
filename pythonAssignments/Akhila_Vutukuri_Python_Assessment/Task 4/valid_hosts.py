import csv,socket
with open('Hostswithip.xlsx','w') as csvwrite:
    # csvWriter = csv.writer(csvwrite)
    with open('hosts.csv','r') as csvread:
        csvreader = csv.reader(csvread)
        for record in csvreader:
            if record[1].endswith('.com'):
                csvwrite.write(socket.gethostbyname(record[1])+"\n")
        
