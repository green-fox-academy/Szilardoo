# Adds a and b, returns as result
def add(a, b):
    return a + b

# Returns the highest value from the three given params
def max_of_three(a, b, c):
    if a > b and a > c:
        return a
    if c > b and c > a:
        return c
    if b > a and b > c:
        return b

# Returns the median value of a list given as param
def median(pool):
    pool.sort()
    middle = ((len(pool) + 1) // 2)
    if len(pool) % 2 == 1:
        return pool[middle]
    else:
        return (pool[middle]+pool[middle+1])/2.0


# Returns true if the param is a vovel
def is_vovel(char):
    return char.lower() in 'aeiouúéáőűöüóí'

# Create a method that translates hungarian into the teve language
def translate(hungarian):
    teve = hungarian
    for char in teve:
        if is_vovel(char) and char != char:
            teve = (char+'v'+char).join(teve.split(char))
        if is_vovel(char) and char == char:
            teve = ('v'+char).join(teve.split(char))
    return teve