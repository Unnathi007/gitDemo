'''
Following are the criteria for checking the password:
1. At least 1 letter between [a-z]
2. At least 1 number between [0-9]
3. At least 1 letter between [A-Z]
4. At least 1 character from $ or # or @ or !
5. Minimum length of password: 6
6. Maximum length of password: 12
'''
import assignment1
import pytest

@pytest.mark.parametrize("a,b", [("ABd1234@1", True), ("aF1#", False), ("2We3345", False)])
def test_eval(a,b):
    if(a==b):
        pass
    obj = assignment1.Isvalid(a)
    result=obj.checkvalue()
    assert result == b