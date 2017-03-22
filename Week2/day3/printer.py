# - Create a function called `printer`
#   which prints the input parameters
#   (can have multiple number of arguments)

def printer(*args):
    for i in args:
        print(i)

printer(1, 'Two', 3)
printer('Four')
printer(5)
