# Given a non-negative int n, return the sum of its digits recursively (no loops).
# Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while
# divide (/) by 10 removes the rightmost digit (126 / 10 is 12).

def sum_digits(number):
    if number < 10:
        return number
    else:
        return sum_digits(number//10) + (number%10)

print(sum_digits(1666))
