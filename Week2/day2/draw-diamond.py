# Write a program that reads a number from the standard input, then draws a
# diamond like this:
#
#
#    *
#   ***
#  *****
# *******
#  *****
#   ***
#    *
#
# The diamond should have as many lines as the number was
number = int(input('Give me a number, please: '))
if number%2==0:
    number -=1
x = 1
space = number//2
for i in range (number):
    print(space * ' ' + x* '*')
    if number == x:
        break
    x += 2
    space -=1
for i in range(number):
    x -= 2
    space += 1
    print(space * ' ' + x* '*')
    if x == 1:
        break
