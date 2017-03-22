output = 'pear'

def create_palondrome(word):
    ns = word
    for i in range(len(word),0,-1):
        ns += word[i-1]
    return ns
print(create_palondrome(output))
