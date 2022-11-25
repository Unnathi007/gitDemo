import task03
import pytest
import os
class TestClassToCheckIfFileExistOrNot():
    @pytest.mark.parametrize("path",[(r"C:\Users\rkantha\Desktop\Trainig\Python\python_test\25_Nov_2022.xlsx")])
    def test_check_if_file_exist_or_not(self,path):
        
        assert os.path.isfile(path=path) == True
        # assert result == -1