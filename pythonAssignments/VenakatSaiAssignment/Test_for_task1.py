import pytest
import Task1 as t1
@pytest.mark.parametrize("p,b", [("AB34@1",False), ("ABa1234@1",True)])
def test_for_password(p,b):
    r=t1.PasswordValidator(p)
    assert r==b