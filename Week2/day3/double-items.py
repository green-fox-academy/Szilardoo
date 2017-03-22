# - Create an array variable named `ag`
#   with the following content: `[3, 4, 5, 6, 7]`
# - Double all the values in the array
ag = [3, 4, 5, 6, 7]
ag = [ int(i) for i in ag ]
for i in range(0, 5):
    ag[i]*=2
print(ag)
