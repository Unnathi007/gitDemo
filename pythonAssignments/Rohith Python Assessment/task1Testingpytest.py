import pytest
from task1 import TestPassword
@pytest.fixture()
def createObj():
    testPassword = TestPassword("AB1234@1")
    return testPassword
def test_isBetweenaz(createObj):
    result = createObj.isBetweenaz()
    assert result == True
def test_isNumberBetween09(createObj):
    result = createObj.isNumberBetween09()
    assert result == True
def test_isBetweenAZ(createObj):
    result = createObj.isBetweenAZ()
    assert result == True
def test_isCharater(createObj):
    result = createObj.isCharater()
    assert result == True
def test_isMinLength(createObj):
    result = createObj.isMinLength()
    assert result == True
def test_isMaxLength(createObj):
    result = createObj.isMaxLength()
    assert result == True



