myfile = open('encoded-lines.txt', 'r')

def decrypt(file_name):
    text = myfile.read()
    ns = ""
    for char in range(len(text)):
        if text[char] != " " and text[char] != "\n":
            ns += chr(ord(text[char])-1)
        else:
            ns += chr(ord(text[char]))
    return ns

print(decrypt(myfile))
