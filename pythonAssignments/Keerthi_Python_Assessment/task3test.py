import os
def test_task3():
    res = False
    dir_list = os.listdir()
    for i in dir_list:
        if i.endswith(".xls"):
            res = True
    assert res