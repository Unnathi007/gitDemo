'''
# TODO: Import Magic Class
import prototest as program

# TODO: Write a test for the method "get_a_number"
def test_get_a_number():
    result = program.get_a_number()
    assert result == 25

# TODO: Write a test for the method "get_double"
def test_get_double():
    result = program.get_double(50)
    assert result ==100.00

# TODO: Write a test for the method "get_a_list"
def test_get_a_list():
    result = program.get_a_list("a","b","c","d")
    assert result ==["a","b","c","d"]
'''

'''
from employee import Employee
def test_base_annual_salary():
    employee=Employee("Peter", "Parker")
    employee.base_annual_salary=1000000.00
    base_salary=employee.base_annual_salary
    assert base_salary==1000000.00

def test_base_annual_salary_lessthan_45k():
    employee=Employee("Peter", "Parker")
    employee.base_annual_salary=30000.00
    base_salary=employee.base_annual_salary
    assert base_salary==0

def test_base_annual_salary_greaterthan_120k():
    employee=Employee("Peter", "Parker")
    employee.base_annual_salary=130000.00
    base_salary=employee.base_annual_salary
    assert base_salary==0
'''

'''
import pytest
from calculator_v2 import Calculator

def test_division_2():
    calci = Calculator(10,0)
    with pytest.raises(ZeroDivisionError) as exp_info:
        result = calci.calc_div()
    assert 'zero' in str(exp_info.value)
'''

'''
#Test identification

def test_my_test_1():
    result = "test_my_test_1"
    assert result=="test_my_test_1"

def my_test_2():       # the function should start with "test" ; only then it gets identified
    result = "test_my_test_1"
    assert result=="test_my_test_1"

def test_my_test_3():
    result = "test_my_test_3"
    assert result=="test_my_test_3"
'''

'''
import sys
import pytest
from employee import Employee
# skip, xfail, 
'''

'''
import pytest
from calculator_v2 import Calculator

@pytest.mark.parametrize("num1,num2,exp_result",[(50,20,30),(30,20,10),(-50,20,-70)])
def test_difference(num1, num2, exp_result):
    calci = Calculator(num1,num2)
    result = calci.calc_diff()
    assert result == exp_result
'''

'''
import pytest
from calculator_v2 import Calculator
@pytest.fixture()
def create_test_env():
    calci = Calculator()
    return calci
def test_addition(create_test_env):
    create_test_env.num1 = 10
    create_test_env.number2 = 50
    result = create_test_env.calc_add()
    assert result == 60
def test_difference(create_test_env):
    create_test_env.number1 = 10
    create_test_env.number2 = 50
    result = create_test_env.calc_diff()
    assert result == -40
def test_multiply(create_test_env):
    create_test_env.number1 = 10
    create_test_env.number2 = 50
    result = create_test_env.calc_diff()
    assert result == 500
'''

'''
import pytest
from assessment_task1 import Validate_Passwords 
def test_difference1():
    output = Validate_Passwords("ABd1234@1,a F1#,2w3E*,2We3345")
    result = output.validate()
    assert result == ['ABd1234@1','a F1#']
def test_difference2():
    output = Validate_Passwords("ABd12341,aF#,2w3Ee@,2We3@345")
    result = output.validate()
    assert result == ['2w3Ee@','2We3@345']
'''

from datetime import date
print(type(date.today().strftime("%d-%b-%y")))