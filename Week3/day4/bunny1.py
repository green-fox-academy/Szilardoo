# We have a number of bunnies and each bunny has two big floppy ears.
# We want to compute the total number of ears across all the bunnies recursively (without loops or multiplication).

def ear_counter(bunnies):
    if bunnies == 0:
        return 0
    else:
        return ear_counter(bunnies-1)+2

print(ear_counter(600))
