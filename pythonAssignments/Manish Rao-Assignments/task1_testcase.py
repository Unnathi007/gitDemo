from task1 import Check
import pytest
def test_vadidation1():
    result=Check.validation1("2w3E*")
    assert result==True
def test_vadidation2():
    result=Check.validation2("2w3E*")
    assert result==True
def test_vadidation3():
    result=Check.validation3("2w3E*")
    assert result==True
def test_vadidation4():
    result=Check.validation4("2w3E*")
    assert result==True
def test_vadidation5():
    result=Check.validation5("2w3E*")
    assert result==True
def test_vadidation6():
    result=Check.validation6("2w3E*")
    assert result==True