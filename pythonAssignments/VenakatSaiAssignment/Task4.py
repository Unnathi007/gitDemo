import socket
l1=[]

with open("hosts.csv", 'r') as fr:

    for line in fr:
        
        l = line.split(",")

        # if (l[1].startswith('w')):

        #     pass

        # else:

        #     l[1]="www."+l[1]
        try:

            ip_add_host = socket.gethostbyname(l[1].strip())

            
            l1.append((l[1],ip_add_host))
        except Exception as e:
            
            
            l1.append((l[1], str(e)))
        print(l[0])

