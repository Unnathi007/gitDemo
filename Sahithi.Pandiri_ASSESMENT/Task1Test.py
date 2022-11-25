import unittest
from ASSESMENT.Task1 import ValidPassWord
class PassordTest(unittest.TestCase):
    def small_alphabet():
        result=True
        ans=ValidPassWord.password_check("Sahithi@09")
        assert result==ans
    def capital_alphabet():
        result=True
        ans=ValidPassWord.password_check("Sahithi@09")
        assert result==ans
    def digit_check():
        result=True
        ans=ValidPassWord.password_check("Sahithi@09")
        assert result==ans
    def special_character():
        result=True
        ans=ValidPassWord.password_check("Sahithi@09")
        assert result==ans
    def min_length():
        result=True
        ans=ValidPassWord.password_check("Sahithi@09")
        assert result==ans
    def max_length():
        result=True
        ans=ValidPassWord.password_check("Sahithi@09")
        assert result==ans





