import socket
fw=open("Hostwithip.csv","w")
with open("hosts.csv","r") as fr:
    for line in fr:
        l=line.split(",")
        s = l[1].rstrip("\n")
        if s.endswith(".com"):
            fw.write(socket.gethostbyname(s))
fw.close()



