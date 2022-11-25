import excel2json
import pyexcel as pe
import datetime

# filename = time.strftime("%d_%B_%Y.csv")

# with open("{}.xls".format(filename), "w") as fw:
#     fw.write("File is Created on the date as it's Name")


try:
    x = datetime.datetime.now().date().strftime("%d_%b_%Y")
    sheet = pe.get_sheet(file_name="realestate.csv")
    sheet.save_as(x+".xls")
except FileNotFoundError as f:
    print(f)
excel2json.convert_from_file(x+".xls")
