a = 3
a += 10
print(a)
b = 100
b -= 7
print(b)
c = 44
c *=2
print(c)
d = 125
d /=5
print(d)
e = 8
e **= 3
print(e)
f1 = 123
f2 = 345
# tell if f1 is bigger than f2 (pras a boolean)
if f1 > f2 :
    print(True)
else:
    print(False)
g1 = 350
g2 = 200
# tell if the double of g2 is bigger than g1 (pras a boolean)
if g2*2 > f2 :
    print(True)
else:
    print(False)
h = 1357988018575474
# tell if it has 11 as a divisor (pras a boolean)
if h%11 == 0:
    print(True)
else:
    print(False)
i1 = 10
i2 = 3
# tell if i1 is higher than i2 squared and smaller than i2 cubed (pras a boolean)
if i1 > i1**2:
    if i1 < i2**3:
        print(True)
else:
    print(False)
j = 1521
# tell if j is dividable by 3 or 5 (pras a boolean)
if j%3 == 0:
    if j%5 == 0:
        print(True)
else:
    print(False)
k = "Apple"
#fill the k variable with its cotnent 4 times
k *= 4
print(k)
