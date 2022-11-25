import unittest,Ass3,os

class TestAss3(unittest.TestCase):
    def test_file_present(self):
        val=False
        path= r"C:\Users\vpvsa\Documents\Python Training\25_Nov_2022.xlsx"
        if os.path.isfile(path):
            val=True
        self.assertEqual(val,True)
    def test_size(self):
        val=False
        path=r"C:\Users\vpvsa\Documents\Python Training\25_Nov_2022.xlsx"
        size= os.path.getsize(path)
        assert size>0
    
            





