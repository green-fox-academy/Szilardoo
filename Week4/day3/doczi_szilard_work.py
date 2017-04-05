class Apple():

    def get_apple(self):
        return "apple"


class Numbers():

    def sum(self,elements):
    	if len(elements)==0:
        	return 0
    	else:
        	return elements[0] + self.sum(elements[1:])

class Anagram():

	def anagram_checker(self, string_one, string_two):
	    list_string_one = list(string_one)
	    list_string_one.sort()
	    list_string_two = list(string_two)
	    list_string_two.sort()
	    return (list_string_one == list_string_two)

class Letters():

	def count_letter(self, string):
		list_string = list(string)
		dictionary = {}
		for elements in list_string:
			if elements in dictionary:
				dictionary[elements] += 1
			else:
				dictionary[elements] = 1
		return dictionary

class Fibonacci_numbers():

	def fibonacci(self, number):
		if number == 1 or number == 0:
			return number
		else:
			return self.fibonacci(number-1) + self.fibonacci(number-2)
