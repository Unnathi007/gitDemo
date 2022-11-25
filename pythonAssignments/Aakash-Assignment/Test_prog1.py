
import pytest
import prgm1
from prgm1 import Password

# class TestsCalculator():
    
@pytest.mark.parametrize("a,b", [("ABd1234@1", True), ("aF1#", False), ("2We3345", False)])
def test_eval(a,b):
    if(a==b):
        pass
    obj = Password(a)
    result = obj.validate()
    assert result == b
    