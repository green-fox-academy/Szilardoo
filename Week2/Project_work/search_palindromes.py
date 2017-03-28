# output = search_palindromes('dog goat dad duck doodle never')
# print(output) ==== it prints: ['og go', ' dad ', 'd d', 'dood', 'eve']




output = 'dog goat dad duck doodle never'


# def paleindrom_maker():


def search_palindrome(word):
    ret = []
    end = (len(word)-3)
    for i in range(0, end):
        for j in range(0, end):
            if word[i+j] == word[i+(j+2)]:
                ret.append(word[i:i+j])
    return ret

print(search_palindrome(output))
