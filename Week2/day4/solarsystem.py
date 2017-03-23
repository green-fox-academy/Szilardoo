# Saturn is missing from the planetList
# Insert it into the correct position

planetList = ["Mercury","Venus","Earth","Mars","Jupiter","Uranus","Neptune"]
planetList.append("Saturn")
planetList[7], planetList[5] = planetList[5], planetList[7]
planetList[7], planetList[6] = planetList[6], planetList[7]
print(planetList)
