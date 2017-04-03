# Reuse your Sharpie class
# Create SharpieSet class
# it contains a list of Sharpie
# count_usable() -> sharpie is usable if it has ink in it
# remove_trash() -> removes all unusable sharpies


class Sharpie():

    def __init__(self, color, width):
        self.color = color
        self.width = width
        self.ink_amount = 100.0

    def use(self, x):
        self.ink_amount -= x



class SharpieSet():

    def __init__(self):
        self.sharpies = []

    def add(self, sharpies):
        self.sharpies.append(sharpies)

    def count_usable(self):
        usable = 0
        for sharpie in self.sharpies:
            if sharpie.ink_amount > 0:
                usable += 1
        return usable

    def remove_trash(self):
        for sharpie in self.sharpies:
            if sharpie.ink_amount == 0:
                self.sharpies.remove(sharpie)
        return self.sharpies

    def __str__(self):
        result = ""
        for i in range(0, len(self.sharpies)):
            result += str(i+1) + ". " + self.sharpies[i].color + ", " + str(self.sharpies[i].width) + ", " + str(self.sharpies[i].ink_amount) + "\n"
        return result

sharpie1 = Sharpie("Yellow", 5.0)
sharpie2 = Sharpie("Red", 2.0)
sharpie3 = Sharpie("Black", 1.0)
sharpie4 = Sharpie("Green", 0.5)
sharpie5 = Sharpie("Black", 3.0)

sharpieset = SharpieSet()
sharpieset.add(sharpie1)
sharpieset.add(sharpie2)
sharpieset.add(sharpie3)
sharpieset.add(sharpie4)
sharpieset.add(sharpie5)



print(sharpieset.count_usable())
print(sharpieset)

sharpie1.use(100)
sharpieset.remove_trash()

print(sharpieset)
