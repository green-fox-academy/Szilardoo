# Reuse your Animal class
# Create a Farm class
# it has list of Animals
# it has slots which defines the number of free places for animals
# breed() -> creates a new animal if there's place for it
# slaughter() -> removes the least hungry animal


class Animal():

    def __init__(self):
        self.hunger = 50
        self.thirst = 50

    def eat(self):
        self.hunger -= 1

    def drink(self):
        self.thirst -= 1

    def play(self):
        self.hunger += 1
        self.thirst += 1

class Farm():

    def __init__(self):
        self.animals = []
        self.slots = 10

    def breed(self, animal):
        if self.slots != 0:
            self.animals.append(animal)
        self.slots -= 1

    def slaughter(self):
        biggest = 1000
        for i in self.animals:
            if i.hunger < biggest:
                biggest = i.hunger
        for animal in self.animals:
            if animal.hunger == biggest:
                self.animals.remove(animal)
                self.slots += 1
        return self.animals

    def __str__(self):
        result = ""
        for i in range(0, len(self.animals)):
            result += str(i+1) + ". " + str(self.animals[i].hunger) + ", " + str(self.animals[i].thirst) + "\n"
        return result


cat = Animal()
dog = Animal()
pig = Animal()

farm = Farm()

farm.breed(cat)
farm.breed(dog)
farm.breed(pig)

cat.eat()
print(farm)


farm.slaughter()
print(farm)
