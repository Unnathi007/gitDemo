import csv
with open('C:\\Users\\avutukuri\\Desktop\\python\\Assessment\\Task 2\\employee.csv','w') as fw:
    csvwrite = csv.writer(fw)
    list=["ID","Name","Age","City"]
    csvwrite.writerow(list)