import datetime
filename = datetime.datetime.now().strftime("%d_%b_%Y")

import csv
file = open('realestate.csv')
csvreader = csv.reader(file)

with open(filename+".csv", 'w') as f:
    fields = ['First Name','Last Name','Gender','Age','Mobile']
    # using csv.writer method from CSV package
    write = csv.writer(f)
    write.writerow(fields)
    write.writerow(fields)
    write.writerows()