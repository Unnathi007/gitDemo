from passwordvalidation import Password as cv
import pytest


# 1. At least 1 letter between [a-z]
# 2. At least 1 number between [0-9]
# 3. At least 1 letter between [A-Z]
# 4. At least 1 character from $ or # or @ or !
# 5. Minimum length of password: 6
# 6. Maximum length of password: 12

# - create a test suite with all the test cases and create the final html report
x = cv()

def test_check_small_letters():
    s="a1234Z"
    assert x.check_small_letters(s) == 1
    

def test_check_numerics():
    assert x.check_numerics("asweQ3ert") == 1
    

def test_check_cap_letters():
    assert x.check_cap_letters("asdertg34") == 1
    

def test_check_spl_chars():
    assert x.check_spl_chars("qwe$") == 1
    

def test_check_min_length():
    assert x.check_min_length("qwerrtyuiop") == 1
    

def test_check_max_length():
    assert x.check_max_length("123") ==1
