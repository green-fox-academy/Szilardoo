output = 'pear'

def create_palindrome(word):
    ns = "pear"
    for i in range(len(word),0,-1):
        ns += word[i-1]
    return ns
print(create_palindrome(output))
