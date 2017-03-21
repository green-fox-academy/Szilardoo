# Write a program that reads a number form the standard input,
# Than prints "Odd" if the number is odd, or "Even" it it is even.
x = int(input("Give me a number, please: "))
if x!=0:
    if x%2 == 0:
        print("This is an even number.")
elif x%2 == 1:
    print("This is an odd number.")
