import pytest
from task1 import PwdValidator

@pytest.fixture
def pwd():
    pwd_Validator= PwdValidator()
    return pwd_Validator
def test_checkatoz(pwd):
    pwd.pwd="ABd1234@1"
    assert pwd.checkatoz()==True


def test_checkAtoZTrue(pwd):
    pwd.pwd="d1234@1"
    assert pwd.checkAtoZ()==True

def test_check0to9(pwd):
    pwd.pwd="abCD12@"
    assert pwd.check0to9() == False


def test_checkSplChr(pwd):
    pwd.pwd = "abCD12@"
    assert pwd.checkSplChr() == True


def test_checkLen(pwd):
    pwd.pwd = "123"
    assert pwd.checkLen() == False

