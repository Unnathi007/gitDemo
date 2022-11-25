import criteria_validations as cv
import pytest


# 1. At least 1 letter between [a-z]
# 2. At least 1 number between [0-9]
# 3. At least 1 letter between [A-Z]
# 4. At least 1 character from $ or # or @ or !
# 5. Minimum length of password: 6
# 6. Maximum length of password: 12

# - create a test suite with all the test cases and create the final html report

def test_check_small_letters():
    assert cv.check_small_letters("a1234Z") == True
    

def test_check_numerics():
    assert cv.check_numerics("asweQ3ert") == True
    

def test_check_cap_letters():
    assert cv.check_cap_letters("asdertg34") == False
    

def test_check_spl_chars():
    assert cv.check_spl_chars("qwe$") == True
    

def test_check_min_length():
    assert cv.check_min_length("qwerrtyuiop") == True
    

def test_check_max_length():
    assert cv.check_max_length("123") == True
