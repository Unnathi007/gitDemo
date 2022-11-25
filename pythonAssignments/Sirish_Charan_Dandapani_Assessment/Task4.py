from openpyxl import Workbook
import socket

def normalExecution():
     with open("hosts.csv") as f:
          for i in f:
               host = i.split(",")[-1].strip()
               try:
                    wb = Workbook()
                    ws = wb.active
                    addr = socket.gethostbyname(host)
                    ws.append(host+","+addr)
               except:
                    pass
          wb.save("Task4Output.xlsx")

normalExecution()