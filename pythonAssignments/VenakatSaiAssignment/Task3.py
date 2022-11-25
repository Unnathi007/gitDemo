import datetime
import pyexcel as pe
import excel2json


def fun():
    try:
        x = datetime.datetime.now().date().strftime("%d_%b_%Y")
        sheet = pe.get_sheet(file_name="realestate.csv")
        sheet.save_as(x+".xls")
    except FileNotFoundError as f:
        print(f)
    excel2json.convert_from_file(x+".xls")
