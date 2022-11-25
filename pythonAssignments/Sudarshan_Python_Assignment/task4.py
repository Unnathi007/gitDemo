import socket
import threading as t
ip=[]
add=[]
fr= open(r"C:\Personal\train\python\assignment\hosts\hosts.csv",'r')
for i in fr:
   ip.append(i.split(',')[-1].strip())
fr.close()

def getIP(i):
    #print(f"{i},")
    start=50*i
    end=(50*i)+49
    for j in range(start,end):
        try:
            #print(f"{j}:{socket.gethostbyname(ip[j])}\n")
            add.append(socket.gethostbyname(ip[j]))
            
        except:
            pass

for i in range(40):
    t1 = t.Thread(target=getIP, args=[i])
    t1.start()
    t1.join()
    



