import csv,socket
filePath = "C:\\Users\\sbatraju\\WebDev\\python\\Test\\fourthQuestion\\csv files\\hosts.csv"
newFilePath = "C:\\Users\\sbatraju\\WebDev\\python\\Test\\fourthQuestion\\csv files\\new_hosts.csv"
def validateHostName(filePath,newFilePath):
    with open(filePath,"r") as fileReader:
        rows = csv.reader(fileReader)
        with open(newFilePath,"w") as fileWriter:
            writer = csv.writer(fileWriter)
            new_hosts=[]
            for row in rows:
                if str(row[1]).endswith(".com"):
                    new_hosts.append([row[1]])
            writer.writerows(new_hosts)
def getHostByName(newFilePath):
    with open(newFilePath,"r") as fileReader:
        rows = csv.reader(fileReader)
        for row in rows:
            if len(row)==0:
                continue
            else:
                try:
                    print(socket.gethostbyname(row[0]))
                except Exception as e:
                    print(row[0],"error")
                                
getHostByName(newFilePath)
# validateHostName(filePath,newFilePath)