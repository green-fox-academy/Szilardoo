# - Write a function called `sum` that sum all the numbers
#   until the given parameter
def sum(*args):
    total = 0
    for a in args:
        total += a
    print(total)

sum(10, 5, 20, 40, 50)
