# Write a program that reads a number from the standard input, then draws a
# square like this:
#
#
# %%%%%
# %   %
# %   %
# %   %
# %   %
# %%%%%
#
# The square should have as many lines as the number was

number = int(input('Give me a number, please: '))
side = "%%%%%"
if number == 1:
    print(side)
elif number == 2:
    print(side)
    print(side)
elif number != 2 and number != 3:
    print(side)
    for x in range(1, number-1):
        print('%   %')
    print(side)
elif number == 3:
    print(side)
    print('%   %')
    print(side)
