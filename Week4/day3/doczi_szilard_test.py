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


class TestLetters(unittest.TestCase):

    def test_count_letters(self):
    	test = {'B' : 1, 'l' : 1, 'i' : 1, 'z' : 2, 'a' : 1, 'r' : 1, 'd' : 1}
    	letter = Letters()
    	self.assertEqual(letter.count_letter("Blizzard"), test)

    def test_count_letters_empty_dic(self):
    	test = {}
    	letter = Letters()
    	self.assertEqual(letter.count_letter(""), test)

class TestFibonacci(unittest.TestCase):

	def test_count_letters_five(self):
		fibonacci_number = Fibonacci_numbers()
		self.assertEqual(fibonacci_number.fibonacci(5), 5)

	def test_count_letters_zero(self):
		fibonacci_number = Fibonacci_numbers()
		self.assertEqual(fibonacci_number.fibonacci(0), 0)

	def test_count_letters_one(self):
		fibonacci_number = Fibonacci_numbers()
		self.assertEqual(fibonacci_number.fibonacci(1), 1)

	def test_count_letters_ten(self):
		fibonacci_number = Fibonacci_numbers()
		self.assertEqual(fibonacci_number.fibonacci(10), 55)



if __name__ == '__main__':
    unittest.main()
