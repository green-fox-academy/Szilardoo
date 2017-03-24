# Create a function named is anagram following your current language's style guide. It should take two strings and return a boolean value depending on whether its an anagram or not.



def anagram(string_one, string_two):
    list_string_one = list(string_one)
    list_string_one.sort()
    list_string_two = list(string_two)
    list_string_two.sort()

    return (list_string_one == list_string_two)


print(anagram('parrot', 'raptor'))
print(anagram('anagram','nagaram'))
print(anagram('cat','rat'))
print(anagram('card','cart'))
