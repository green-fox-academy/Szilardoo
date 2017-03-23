# Check if the list contains "7" if it contains print "Hoorray" otherwise print "Noooooo"

numbers = [1,2,3,4,5,6,8]
true_or_false= False


for i in range(len(numbers)):
    if i == 7:
        true_or_false = True
    else:
        true_or_false = False

if  true_or_false == True:
    print("Hooooray")
else:
    print("Noooooo")
