# Write a program that reads a number from the standard input, then draws a
# pyramid like this:
#
#
#    *
#   ***
#  *****
# *******
#
# The pyramid should have as many lines as the number was

number = int(input('Give me a number, please: '))
for i in range(1,number+1):
   print (" "*(number-i)+"*"*i+"*"*(i-1))
