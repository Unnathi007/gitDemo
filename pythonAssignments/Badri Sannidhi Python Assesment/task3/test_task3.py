import task3
import os
import datetime
import pyexcel as pe
def test_createrealestatexslx_if_file_created():
    filename = datetime.datetime.now().date().strftime("%d_%b_%Y")
    if filename+".xlsx" in os.listdir():
        os.remove(filename+".xlsx")
    task3.create_realestatexslx()
    assert filename+".xlsx" in os.listdir()


def test_createrealestatexslx_check_file_size():
    filename = datetime.datetime.now().date().strftime("%d_%b_%Y")
    if filename+".xlsx" in os.listdir():
        os.remove(filename+".xlsx")
    task3.create_realestatexslx()
    assert os.stat(filename+".xlsx").st_size>0


def test_csvtoJson_if_file_created():
    if "realestate.json" in os.listdir():
        os.remove("realestate.json")
    task3.csvToJson()
    assert "realestate.json" in os.listdir()


def test_csvtoJson_check_file_size():
    if "realestate.json" in os.listdir():
        os.remove("realestate.json")
    task3.csvToJson()
    assert os.stat("realestate.json").st_size > 0


def test_compare_no_of_rows():
    x = datetime.datetime.now().date().strftime("%d_%b_%Y")
    assert len(list(open("realestate.csv", "r").readlines())
               ) == len(pe.get_sheet(file_name=x+".xlsx"))


def test_compare_no_of_coloumns():
    x = datetime.datetime.now().date().strftime("%d_%b_%Y")
    assert len(open("realestate.csv", "r").readlines()[0].split(
        ",")) == len(pe.get_sheet(file_name=x+".xlsx")[0])
