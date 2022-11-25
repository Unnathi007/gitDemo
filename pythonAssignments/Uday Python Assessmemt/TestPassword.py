import unittest 

from Passwordvaldation_Oops import Password
Password=Password()
class Testcontainscharacter(unittest.TestCase):
    def test_empty_password(self):
        self.assertFalse(Testcontainscharacter())
    def test_4_char_password(self):
        self.assertFalse(Testcontainscharacter())

if __name__=='__main':
    unittest.main()


