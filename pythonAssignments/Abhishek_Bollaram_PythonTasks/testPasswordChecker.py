import pytest as pt
from Task1 import PasswordChecker

@pt.mark.parametrize('passwd, expectedResult', [('Ab1@', False), ('Ab1@cd', True), ('12Zz#@a3!', True), ('00!!yZ@!#$Ab', True), ('1234@#Azar1234', False), ('12Xg!mn%', False)])
def testRequiredLength(passwd, expectedResult):
    password = PasswordChecker(passwd)
    result = password.checkPassword()
    assert result == expectedResult

@pt.mark.parametrize('passwd, expectedResult', [('123456!Aa', True), ('!abcd123', False), ('Ab12@yy', True), ('b12@yyA', True)])
def testContainUppercaseAlphabet(passwd, expectedResult):
    password = PasswordChecker(passwd)
    result = password.checkPassword()
    assert result == expectedResult

@pt.mark.parametrize('passwd, expectedResult', [('123456!Aa', True), ('!ABCD123', False), ('aB12@YY', True), ('b12@yyA', True)])
def testContainLowercaseAlphabet(passwd, expectedResult):
    password = PasswordChecker(passwd)
    result = password.checkPassword()
    assert result == expectedResult

@pt.mark.parametrize('passwd, expectedResult', [('123456!Aa', True), ('!abcdefg', False), ('AboO@yy', False), ('bcd@yyA0', True)])
def testContainDigit(passwd, expectedResult):
    password = PasswordChecker(passwd)
    result = password.checkPassword()
    assert result == expectedResult

@pt.mark.parametrize('passwd, expectedResult', [('123456!Aa', True), ('Aabcd123', False), ('Ab12@$#', True), ('b12&yyA', False), ('12Ab#*Q', False)])
def testContainRelevantSymbol(passwd, expectedResult):
    password = PasswordChecker(passwd)
    result = password.checkPassword()
    assert result == expectedResult
