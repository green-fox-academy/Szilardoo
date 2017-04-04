class Garden(object):

    def __init__(self):
        self.flowers_trees = []

    def add_plant(self, plant):
        self.flowers_trees.append(plant)

    def watering(self, water):
        self.water_amount = water
        print("Watering with "+str(self.water_amount))
        self.needs_water = []
        for i in self.flowers_trees:
            if self.water == True:
                self.needs_water.append(i)
            else:
                print("The "+ self.color + self.type + " doesn't need water")
        for j in self.needs_water:
            if self.type == "Flower":
                self.current_water_amount += self.water_amount/j * 0.75
            elif self.type == "Tree":
                self.current_water_amount += self.water_amount/j * 0.4

    def __str__(self):
        result = ""
        for i in range(0, len(self.flowers_trees)):
            result +="The " + self.flowers_trees[i].color + " " + self.flowers_trees[i].type + " " + self.flowers_trees[i].txt +"\n"
        return result



class Flower(Garden):

    def __init__(self, color):
        self.current_water_amount = 0
        self.color = color
        self.type = "Flower"
        self.water = True
        self.txt = "needs water."

    def watering(self):
        if self.current_water_amount > 5:
            self.water = False
        # if self.water == True:
        #     self.txt = "doesnt need water"

class Tree(Garden):

    def __init__(self, color):
        self.current_water_amount = 0
        self.color = color
        self.type = "Tree"
        self.water = True
        self.txt = "needs water"

    def watering(self):
        if self.current_water_amount > 5:
            self.water = False
        # if self.water == True:
        #     self.txt = "doesnt need water"


garden = Garden()
flower1 = Flower("Blue")
garden.add_plant(flower1)
garden.watering(40)
print(garden)
