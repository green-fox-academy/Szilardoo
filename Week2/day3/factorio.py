# - Create a function called `factorio`
#   that returns it's input's factorial
def factorio(number: int):
    factorial = 1
    for i in range(1, number + 1):
        factorial*=i
    return factorial

number = int(input('Give me a number, please: '))
print(factorio(number))
