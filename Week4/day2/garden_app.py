class Garden(object):

    def __init__(self):
        self.flowers_trees = []

    def add_plant(self, plant):
        self.flowers_trees.append(plant)

    def watering(slef, water):
        self.water = water
        self.needs_water = []
        for i in self.flowers_trees:
            if self.water == True:
                self.needs_water.append(i)
            else:
                print("The "+ self.color + self.type + " doesn't need water")
        for j in self.needs_water:
            if self.type == "Flower":
                self.current_water_amount += water/j * 0.75
            elif self.type == "Tree":
                self.current_water_amount += water/j * 0.4

    def __str__(self):
        result = ""
        for i in range(0, len(self.flowers_trees)):
            result +="The " + self.flowers_trees[i].color + " " + self.flowers_trees[i].type + "\n"
        return result



class Flower(Garden):

    def __init__(self, color):
        self.current_water_amount = 0
        self.color = color
        self.type = "Flower"
        self.water = True

    def watering(self):
        if self.current_water_amount > 5:
            self.water = False

class Tree(Garden):

    def __init__(self, color):
        self.current_water_amount = 0
        self.color = color
        self.type = "Tree"
        self.water = True



garden = Garden()
flower1 = Flower("Blue")
garden.add_plant(flower1)
print(garden)
