# Create Station and Car classes
# Station
# gas_amount
# refill(car) -> decreases the gasAmount by the capacity of the car and increases the cars gas_amount
# Car
# gas_amount
# capacity
# create constructor for Car where:
# initialize gas_amount -> 0
# initialize capacity -> 100

class Station():

    def __init__(self):
        self.gas_amount = 1000

    def refill(self, car, amount):
        self.gas_amount -= amount
        car.gas_amount += amount

class Car():

    def __init__(self):
        self.gas_amount = 0
        self.capacity = 120


station = Station()
car = Car()

print(car.gas_amount)
print(station.gas_amount)

station.refill(car, 100)

print(car.gas_amount)
print(station.gas_amount)
