# - Create a function called `factorio`
#   that returns it's input's factorial
def factorio(number: int):
    factorial = 1
    for i in range(1, number + 1):
        factorial*=i
    print(factorial)

factorio(5)
factorio(8)
