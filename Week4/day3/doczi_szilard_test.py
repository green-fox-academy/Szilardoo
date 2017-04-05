import unittest
from doczi_szilard_work import *

class TestApple(unittest.TestCase):

    def test_get_apple(self):
        apple = Apple()
        self.assertEqual(apple.get_apple(), "apple")


if __name__ == '__main__':
    unittest.main()
