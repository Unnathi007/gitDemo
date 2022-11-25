import Task1 as t
import pytest
@pytest.fixture()
def create_object():
    ob=t.Password("hello")
    return ob
def test_checkLength(create_object):
    assert create_object.checkLength()
def test_islower(create_object):
    assert create_object.checkLower()
def test_isupper(create_object):
    assert create_object.checkUpper()
def test_checknum(create_object):
    assert create_object.checkNum()
def test_special(create_object):
    assert create_object.specialChar()
