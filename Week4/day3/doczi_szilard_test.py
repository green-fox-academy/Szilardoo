import unittest
from doczi_szilard_work import *

class TestApple(unittest.TestCase):

    def test_get_apple(self):
        apple = Apple()
        self.assertEqual(apple.get_apple(), "apple")


class TestSum(unittest.TestCase):

    def test_sum_multiple_elements(self):
    	num = Numbers()
    	alist = [1, 2, 3]
    	self.assertEqual(num.sum(alist), 6)

    def test_sum_empty_list(self):
    	num = Numbers()
    	alist = []
    	self.assertEqual(num.sum(alist), 0)

    def test_sum_one_element(self):
    	num = Numbers()
    	alist = [1]
    	self.assertEqual(num.sum(alist), 1)

    def test_sum_zero(self):
    	num = Numbers()
    	alist = [0]
    	self.assertEqual(num.sum(alist), 0)

class TestAnagram(unittest.TestCase):

    def test_anagram_true(self):
        anagram = Anagram()
        self.assertEqual(anagram.anagram_checker("parrot","raptor"), True)

    def test_anagram_false(self):
        anagram = Anagram()
        self.assertEqual(anagram.anagram_checker("aaa","bbb"), False)

if __name__ == '__main__':
    unittest.main()
