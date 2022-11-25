import pytest
from task1 import Password

# test case for min one lowercase letter:
def test_checkPassword1():
    pwd = Password(['A4SDHGF@4']).checkPasword()
    assert pwd == []

# test case for min one uppercase letter:
def test_checkPassword2():
    pwd = Password(['tejasree@4']).checkPasword()
    assert pwd == []

# test case for min one integer:
def test_checkPassword3():
    pwd = Password(['tejaSree@a']).checkPasword()
    assert pwd == []

# test case for min one  special character:
def test_checkPassword4():
    pwd = Password(['teja2AB4']).checkPasword()
    assert pwd == []

# test case for min length of pwd is 6:
def test_checkPassword5():
    pwd = Password(['abc@1']).checkPasword()
    assert pwd == []

# test case for max pwd length is 12:
def test_checkPassword6():
    pwd = Password(['DesaniTejasree@2000']).checkPasword()
    assert pwd == []

# text case combining all the test cases
def test_checkPassword():
    pwd = Password(['Ammu@123','tejA44','desanI#87']).checkPasword()
    assert pwd == ['Ammu@123','desanI#87']

