from password_validation_task1 import Validate
import unittest


class TestValidate(unittest.TestCase):
    def test_digit_in_password(self):
        password = Validate("Akhila#123")
        res = password.check_digit()
        self.assertEqual(res,True)
        
        
    def test_lower_alphabet_in_password(self):
        password = Validate("Akhila#123")
        res = password.check_lower_alphabet()
        self.assertEqual(res,True)
        
        
    def test_upper_alphabet_in_password(self):
        password = Validate("Akhila#123")
        res = password.check_upper_alphabet()
        self.assertEqual(res,True)


    def test_special_character(self):
        password = Validate("Akhila#123")
        res = password.check_special_character()
        self.assertEqual(res,True)


    def test_password_length(self):
        password = Validate("Akhila#123")
        res = password.check_length()
        self.assertEqual(res,True)
