import pytest
from Veenadhari_PVSA_Python_Assessments.Ass1 import PasswordValidation
class TestClassForPasswordValidation():
    @pytest.mark.parametrize("password",[("ABd1234#1"),("%^&awq"),("9")])
    def test_check_password(self,password):
        obj = PasswordValidation(password)
        result = obj.check_password(password=password)
        
        assert result == password
        # assert result == -1
