# write a function that takes a filename and returns the number of lines the
# file contains. It should return zero if the file does not exist.


def file_not_exist(file_name):
    try:
        myfile = open(file_name, 'r')
        text = myfile.readlines()
        counter = len(text)
        return counter
    except FileNotFoundError:
        return 0

print(file_not_exist('file_not_exists.txt'))
print(file_not_exist('file_not.txt'))
