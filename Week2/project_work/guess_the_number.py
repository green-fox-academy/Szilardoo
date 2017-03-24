import random

first=int(input("Give me the first number: "))
last = int(input("give me the last number: "))
print("Ok. I've the number between "+str(first)+"-"+str(last)+". You have 5 lives.")

lives = 5
secret_number = random.randrange(first, last)
correct = False

while lives > 0 and (not correct):
    print("Guess my number.")
    guess = int(input())
    print("Your guess is: " + str(guess))
    correct = guess == secret_number
    if correct:
        print("The secret number was: " + str(secret_number))
        print("Congratulations. You won!")
    else:
        if guess > secret_number:
                print("Too high.")
                print( "You have " + str(lives) + " lives")
        else:
            print('Too low.')
            print( "You have " + str(lives) + " lives")
    lives -= 1

if (not correct) and lives == 0:
    print("You runed out ot of lifes")
    print("The secret number was: " + str(secret_number))
