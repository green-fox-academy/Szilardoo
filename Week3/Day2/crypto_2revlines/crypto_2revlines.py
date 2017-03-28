# Create a method that decrypts texts/reversed_zen_lines.txt
myfile = open('reversed-lines.txt', 'r')


def decrypt(file_name):
    text = myfile.read()
    ns = ""
    for i in range(len(text)-1, 0 ,-1):
        ns += text[i]
    return ns

print(decrypt(myfile))

#solution 2 :
# myfile = open('reversed-lines.txt', 'r')
#
#
# def decrypt(file_name):
#     text = myfile.read()
#     ns = ""
#     for i in range(len(text)):
#         ns += text[i*-1]
#     return ns
#
# print(decrypt(myfile))
