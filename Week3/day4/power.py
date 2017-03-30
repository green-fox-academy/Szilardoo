# Given base and n that are both 1 or more, compute recursively (no loops)
# the value of base to the n power, so powerN(3, 2) is 9 (3 squared).

def power_n(base, n):
    if n == 1:
        return base
    else:
        return power_n(base, n-1) * base

print(power_n(3, 3))
