# create a function that takes a number,
# divides ten with it,
# and prints the result.
# it should print "fail" if the parameter is 0

def divider():
    while True:
        try:
            user_number = int(input("Give me a number, please: "))
            basic_number = 10
            result = basic_number/user_number
            return result
        except ZeroDivisionError:
            print("fail")


print(divider())
