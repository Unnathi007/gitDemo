from Task1 import CheckPassword
import os


def test_task1():
    li = 'ABd1234@1,a F1#,2w3E*,2We3345'
    cp = CheckPassword(li.split(","))
    p = cp.check_validity()
    assert p == 'ABd1234@1'


def test_task3():
    res = False
    path = "C:/Users/amuppa/Documents/Python"
    dir_list = os.listdir(path)
    for i in dir_list:
        if i.endswith(".xls"):
            res = True
    assert res

# py -m pytest Test_tasks.py
