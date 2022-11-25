import pytest
from passwordValidation import PasswordValidation
@pytest.mark.parametrize("expectedResult,password",[(False,"ABSDC"),(True,"bcwdj")])
def test_checkLowerAlphabet(expectedResult,password):
    passwordValidation = PasswordValidation([])
    actualresult = passwordValidation.checkLowerAlphabet(password)
    assert actualresult == expectedResult 

@pytest.mark.parametrize("expectedResult,password",[(False,"asbjdc"),(True,"AKDBH")])
def test_checkUpperAlphabet(expectedResult,password):
    passwordValidation = PasswordValidation([])
    actualresult = passwordValidation.checkUpperAlphabet(password)
    assert actualresult == expectedResult
    
@pytest.mark.parametrize("expectedResult,password",[(False,"eqjcknasewWDADS"),(True,"1fea43")])
def test_checkNumber(expectedResult,password):
    passwordValidation = PasswordValidation([])
    actualresult = passwordValidation.checkNumber(password)
    assert actualresult == expectedResult
    
@pytest.mark.parametrize("expectedResult,password",[(False,"eqjcknasewWDADS"),(True,"1fea$43")])
def test_checkSpecialCharacters(expectedResult,password):
    passwordValidation = PasswordValidation([])
    actualresult = passwordValidation.checkSpecialCharacters(password)
    assert actualresult == expectedResult   
    
@pytest.mark.parametrize("expectedResult,password",[(False,"eqjcknasewWDADS"),(True,"1fea$43"),(False,""),(False,"addwq")])
def test_checkLength(expectedResult,password):
    passwordValidation = PasswordValidation([])
    actualresult = passwordValidation.checkLength(password)
    assert actualresult == expectedResult  