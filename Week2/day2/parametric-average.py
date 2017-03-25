# // Write a program that asks for a number.
# // It would ask this many times to enter an integer,
# // if all the integers are entered, it should print the sum and average of these
# // integers like:
# //
# // Sum: 22, Average: 4.4

how_many=int(input("How many numbers do you want to sum? "))
number = []
for i in range(1, (how_many+1)):
    number += [int(input("Give me "+str(how_many)+" number please: "))]

def sum(list):
    total=0
    for a in list:
        total += a
    return total

def avarage(list):
    total_avarage=sum(list)/how_many
    return total_avarage


print("Sum: " + str(sum(number))+" Avarage: "+ str(avarage(number)))
