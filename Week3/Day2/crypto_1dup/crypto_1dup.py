# Create a method that decrypts the texts/duplicated_chars.txt



myfile = open('duplicated-chars.txt', 'r')

#solution 1:
# def half(file):
#     chars = words = lines = 0
#     for line in file:
#         lines += 1
#         words += len(line.split())
#         chars += len(line)
#     lenght=round(chars/2)
#     print(lenght)
#     return chars
#
# number = half(myfile)
#
# text = myfile.read()
# def decrypt(file_name):
#     index= ""
#     for i in range(number):
#         index += text[2*i]
#     return index
#
# print(decrypt(myfile))


def decrypt(file_name):
    txt = myfile.read()
    print_it = ""
    for i in range(len(txt)):
        if i % 2 == 0:
            print_it += txt[i]
    return print_it

print(decrypt(myfile))
