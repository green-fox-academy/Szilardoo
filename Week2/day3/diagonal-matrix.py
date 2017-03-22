# - Create (dynamically) a two dimensional list
#   with the following matrix. Use a loop!
#
#   1 0 0 0
#   0 1 0 0
#   0 0 1 0
#   0 0 0 1
#
# - Print this two dimensional list to the output

list = [0, 0, 0, 0]
for i in range(0, 4):
    list[i] += 1
    list[i-1] = 0
    print(" ".join(str(x) for x in list))
