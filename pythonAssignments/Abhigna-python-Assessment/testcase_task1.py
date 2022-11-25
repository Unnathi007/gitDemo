import pytest
from task1 import PasswordCheck
# test case for min one lowercase letter:
def test_checkPassword1():
    pwd = PasswordCheck(['A4SDHGF@4']).validate()
    assert pwd == []
# test case for min one uppercase letter:
def test_checkPassword2():
    pwd = PasswordCheck(['abhigna@5']).validate()
    assert pwd == []
# test case for min one integer:
def test_checkPassword3():
    pwd = PasswordCheck(['abhigna@a']).validate()
    assert pwd == []
# test case for min one  special character:
def test_checkPassword4():
    pwd = PasswordCheck(['abhigna2AB4']).validate()
    assert pwd == []
# test case for min length of pwd is 6:
def test_checkPassword5():
    pwd = PasswordCheck(['abhigna@1']).validate()
    assert pwd == []
# test case for max pwd length is 12:
def test_checkPassword6():
    pwd = PasswordCheck(['AbhignaVuppala@2000']).validate()
    assert pwd == []
# text case combining all the test cases
def test_checkPassword():
    pwd = PasswordCheck(['Abhi@123','abhiA44','abhiI#87']).validate()
    assert pwd == ['Abhi@123','abhiI#87']