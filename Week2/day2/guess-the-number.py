# // Write a program that stores a number, and the user has to figure it out.
# // The user can input guesses, after each guess the program would tell one
# // of the following:
# //
# // The stored number is higher
# // The stried number is lower
# // You found the number: 8

number = 7

guess = int(input('Guess the number: '))
while number != guess:
    if number < guess:
        print('The stored number is lower')
        guess = int(input('Guess the number: '))
    elif guess < number:
        print('The stored number is higher')
        guess = int(input('Guess the number: '))
else:
    print('You found the number: 7')
