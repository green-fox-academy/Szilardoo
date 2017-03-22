# - Create a variable named `ai`
#   with the following content: `[3, 4, 5, 6, 7]`
# - Print the sum of the elements in `ai`

ai = [3, 4, 5, 6, 7]

def sum(list):
    num = 0
    for element in list:
        num += element
    return num

print(sum(ai))
