import unittest
from doczi_szilard_work import *

class TestApple(unittest.TestCase):

    def test_get_apple(self):
        apple = Apple()
        self.assertEqual(apple.get_apple(), "apple")


class TestSum(unittest.TestCase):

    def test_sum(self):
    	num = Numbers()
    	alist = [1, 2, 3]
    	self.assertEqual(num.sum(alist), 6)

    def test_sum(self):
    	num = Numbers()
    	alist = []
    	self.assertEqual(num.sum(alist), 0)

    def test_sum(self):
    	num = Numbers()
    	alist = [1]
    	self.assertEqual(num.sum(alist), 1)

    def test_sum(self):
    	num = Numbers()
    	alist = [0]
    	self.assertEqual(num.sum(alist), 0)



if __name__ == '__main__':
    unittest.main()
