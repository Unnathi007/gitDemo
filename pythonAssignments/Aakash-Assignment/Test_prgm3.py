
import pytest
import prgm3
import os
import datetime

def test_1():
    date = datetime.datetime.now().strftime("%d_%b_%Y")
    if(os.path.isfile(date+'.xls')):
        os.remove(date+'.xls')
    else:
        prgm3.program()
    if(os.path.exists(date+'.xls')):
        assert True
    else:
        assert False

def test_2():
    date = datetime.datetime.now().strftime("%d_%b_%Y")
    f=0
    if(os.path.isfile(date+'.xls')):
        stat = os.stat(date+'.xls')
        if(stat.st_size>0):
            f=1
    if(f==1):
        assert True
    else:
        assert False