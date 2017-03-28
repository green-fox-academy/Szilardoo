# Create a method that decrypts texts/reversed_zen_order.txt
myfile = open('reversed-order.txt', 'r')


def decrypt(file_name):
    text = myfile.readlines()
    ns = ""
    for i in range(len(text), 0 ,-1):
        ns += text[i-1]
    return ns

print(decrypt(myfile))
