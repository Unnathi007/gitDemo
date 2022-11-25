import task03
import pytest
import os
class TestClassToCheckIfFileSize():
    @pytest.mark.parametrize("path",[(r"C:\Users\rkantha\Desktop\Trainig\Python\python_test\25_Nov_2022.xlsx")])
    def test_check_if_file_size_is_not_zero(self,path):
        
        assert os.path.getsize(path) > 0
        