class Garden(object):

    def __init__(self):
        self.flowers_trees = []


    def add_plant(self, plant):
        self.flowers_trees.append(plant)

    def watering(self, water):
        self.water_amount = water
        print("Watering with "+str(self.water_amount))
        self.needs_water = []
        for plant in self.flowers_trees:
            if plant.water == True:
                self.needs_water.append(plant)
        for watering in self.needs_water:
            watering.watering()
            if watering.type == "Flower":
                watering.current_water_amount += self.water_amount/len(self.needs_water) * 0.75
            elif watering.type == "Tree":
                watering.current_water_amount += self.water_amount/len(self.needs_water) * 0.4
                    # shuold be called the tree and flower watering function here

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
        if self.current_water_amount >= 5:
            self.water = False
        if self.water == False:
            self.txt = "doesnt need water"

class Tree(Garden):

    def __init__(self, color):
        self.current_water_amount = 0
        self.color = color
        self.type = "Tree"
        self.water = True
        self.txt = "needs water"

    def watering(self):
        if self.current_water_amount >= 10:
            self.water = False
        if self.water == False:
            self.txt = "doesnt need water"


garden = Garden()
flower1 = Flower("Blue")
flower2 = Flower("Yellow")
tree1 = Tree("Purple")
tree2 = Tree("Orange")
garden.add_plant(flower1)
garden.add_plant(flower2)
garden.add_plant(tree1)
garden.add_plant(tree2)
garden.watering(40)
print(garden)
garden.watering(70)
print(garden)
garden.watering(70)
print(garden)
