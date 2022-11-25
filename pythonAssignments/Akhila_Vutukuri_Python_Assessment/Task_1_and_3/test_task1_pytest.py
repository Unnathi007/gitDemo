from password_validation_task1 import Validate
import pytest

@pytest.mark.parametrize('pwd,result',[("ABd1234@1",True),("a F1#",True),("2w3E*",True),("2We3345",True)])
def test_digit_in_password(pwd,result):
        password = Validate(pwd)
        res = password.check_digit()
        assert res == result

@pytest.mark.parametrize('pwd,result',[("ABd1234@1",True),("a F1#",True),("2w3E*",True),("2We3345",True)])
def test_lower_alphabet_in_password(pwd,result):
        password = Validate(pwd)
        res = password.check_lower_alphabet()
        assert res == result

@pytest.mark.parametrize('pwd,result',[("ABd1234@1",True),("a F1#",True),("2w3E*",True),("2We3345",True)])
def test_upper_alphabet_in_password(pwd,result):
        password = Validate(pwd)
        res = password.check_upper_alphabet()
        assert res == result

@pytest.mark.parametrize('pwd,result',[("ABd1234@1",True),("a F1#",True),("2w3E*",False),("2We3345",False)])
def test_special_character(pwd,result):
    password = Validate(pwd)
    res = password.check_special_character()
    assert res == result

@pytest.mark.parametrize('pwd,result',[("ABd1234@1",True),("a F1#",False),("2w3E*",False),("2We3345",True)])
def test_password_length(pwd,result):
    password = Validate(pwd)
    res = password.check_length()
    assert res == result
