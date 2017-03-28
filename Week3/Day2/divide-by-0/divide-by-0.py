# create a function that takes a number,
# divides ten with it,
# and prints the result.
# it should print "fail" if the parameter is 0

while True:
    try:
        number = int(input("Give me a number, please: "))
        basic_number = 10
        result = basic_number/number
        print(result)
        break
    except ZeroDivisionError:
        print("fail")
