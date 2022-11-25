import pytest
from passwordValidation import PasswordValidation
@pytest.mark.parametrize("expectedResult,password",[(False,""),(True,"b")])
def test_checkLowerAlphabet(expectedResult,password):
    passwordValidation = PasswordValidation([])
    actualresult = passwordValidation.checkLowerAlphabet(password)
    assert actualresult == expectedResult 

@pytest.mark.parametrize("expectedResult,password",[(False,""),(True,"A")])
def test_checkUpperAlphabet(expectedResult,password):
    passwordValidation = PasswordValidation([])
    actualresult = passwordValidation.checkUpperAlphabet(password)
    assert actualresult == expectedResult
    
@pytest.mark.parametrize("expectedResult,password",[(False,""),(True,"1fe4")])
def test_checkNumber(expectedResult,password):
    passwordValidation = PasswordValidation([])
    actualresult = passwordValidation.checkNumber(password)
    assert actualresult == expectedResult
    
@pytest.mark.parametrize("expectedResult,password",[(False,".</"),(True,"$43")])
def test_checkSpecialCharacters(expectedResult,password):
    passwordValidation = PasswordValidation([])
    actualresult = passwordValidation.checkSpecialCharacters(password)
    assert actualresult == expectedResult   
    
@pytest.mark.parametrize("expectedResult,password",[(False,"eqjcewWDADS)yu"),(True,"1fea$43"),(False,""),(False,"addwq")])
def test_checkLength(expectedResult,password):
    passwordValidation = PasswordValidation([])
    actualresult = passwordValidation.checkLength(password)
    assert actualresult == expectedResult  