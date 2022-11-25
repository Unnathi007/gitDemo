from task1 import PasswordValidation

def test_case1():
    valid=PasswordValidation('acv0')
    result=valid.validations()
    assert result==False
def test_case2():
    valid=PasswordValidation('Ab^bah956')
    result=valid.validations()
    assert result==False
def test_case3():
    valid=PasswordValidation('abjhbjhi')
    result=valid.validations()
    assert result==False
def test_case4():
    valid=PasswordValidation('6513630')
    result=valid.validations()
    assert result==False
def test_case5():
    valid=PasswordValidation('AKJHJBJG')
    result=valid.validations()
    assert result==False
def test_case6():
    valid=PasswordValidation('Ab 13630')
    result=valid.validations()
    assert result==False
def test_case7():
    valid=PasswordValidation('Ab@13630jhAGSYA')
    result=valid.validations()
    assert result==False
def test_case8():
    valid=PasswordValidation('Ab@13630')
    result=valid.validations()
    assert result==True


