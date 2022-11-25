from task1 import PasswordValidation
import unittest
class TestsValidations(unittest.TestCase):
    def test_case1(self):
        result=PasswordValidation('aA$0ljsdj').validations()
        self.assertEqual(result,True)
    def test_case2(self):
        result=PasswordValidation('abck').validations()
        self.assertEqual(result,False)
    def test_case3(self):
        result=PasswordValidation('Ab^bah956').validations()
        self.assertEqual(result,False)
    def test_case4(self):
        result=PasswordValidation('Ab ba6').validations()
        self.assertEqual(result,False)
    def test_case5(self):
        result=PasswordValidation('Ab@ba6').validations()
        self.assertEqual(result,True)
    def test_case6(self):
        result=PasswordValidation('Ab@65956595959ba6').validations()
        self.assertEqual(result,False)
    def test_case7(self):
        result=PasswordValidation('abckjk').validations()
        self.assertEqual(result,False)
    def test_case8(self):
        result=PasswordValidation('ABJAGJKJ').validations()
        self.assertEqual(result,False)
    def test_case9(self):
        result=PasswordValidation('5954646').validations()
        self.assertEqual(result,False)
    