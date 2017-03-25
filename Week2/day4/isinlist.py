# Check if list contains all of the following elements: 4,8,12,16
# Create a function that accepts listOfNumbers as an input
# it should return "true" if it contains all, otherwise print "false"

listOfNumbers = [2, 4, 6, 8, 10, 12, 14, 16]

element=[4, 8, 12, 16]

def finder(list, numbers):
    elems = 0
    lenght=len(numbers)
    condition= False
    for i in list:
        for j in numbers:
            if i == j :
                elems += 1
            if elems == lenght:
                condition= True
    return condition

print(finder(listOfNumbers, element))
