# Write a program that reads a number from the standard input, then draws a
# square like this:
#
#
# %%%%%
# %%  %
# % % %
# %  %%
# %   %
# %%%%%
#
# The square should have as many lines as the number was
number = int(input('Give me a number, please: '))
if number == 1:
    print('%'*number)
elif number == 2:
    print('%'*number)
    print('%'*number)
elif number != 2 and number != 3:
    print('%'*number)
    for x in range(1, number-1):
        y = x;
        y -=1
        print('%'+' '*(y)+'%'+' '*((number)-y-3)+'%')
    print('%'*number)
elif number == 3:
    print('%'*number)
    print('%%%')
    print('%'*number)
