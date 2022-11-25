import pytest
from Task1 import PasswordCheck
# import unittest

def test_Pwd():
    passwords=["ABd1234@1","a F1#","2w3E*","2We3345"]
    pwdCheck=PasswordCheck(passwords)
    res=pwdCheck.isValid()
    assert res==["ABd1234@1"]

def test_PwdNum():
    passwords=["ABd1234@1","a F1#","2w3E*","2We3345"]
    pwdCheck=PasswordCheck(passwords)
    res=pwdCheck.checkNum()
    assert res==["ABd1234@1","a F1#","2w3E*","2We3345"]

def test_PwdCap():
    passwords=["ABd1234@1","a F1#","2w3E*","2We3345"]
    pwdCheck=PasswordCheck(passwords)
    res=pwdCheck.checkCap()
    assert res==["ABd1234@1","a F1#","2w3E*","2We3345"]

def test_PwdSmall():
    passwords=["ABd1234@1","a F1#","2w3E*","2We3345"]
    pwdCheck=PasswordCheck(passwords)
    res=pwdCheck.checkSmall()
    assert res==["ABd1234@1","a F1#","2w3E*","2We3345"]

def test_PwdLength():
    passwords=["ABd1234@1","a F1#","2w3E*","2We3345"]
    pwdCheck=PasswordCheck(passwords)
    res=pwdCheck.checkLength()
    assert res==["ABd1234@1","2We3345"]

def test_PwdSpecChar():
    passwords=["ABd1234@1","a F1#","2w3E*","2We3345"]
    pwdCheck=PasswordCheck(passwords)
    res=pwdCheck.checkSpecialChar()
    assert res==["ABd1234@1","a F1#"]


# class PasswordTest(unittest.TestCase):
#     def setUp(self):
#         self.pwdList = ["ABd1234@1","a F1#","2w3E*","2We3345"]
#         self.pwdCheck=PasswordCheck(self.pwdList))
#     def test_check_num(self):
#         res=self.pwdCheck.checkNum()
#         assert.Equals