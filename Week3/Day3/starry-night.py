from tkinter import *
import random


root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# draw the night sky:
# - The background should be black
# - The stars should be small squares
# - The stars should have random positions on the canvas
# - The stars should have random color (some shade of grey)

grey =["#696969", "#808080", "#A9A9A9", "#C0C0C0", "#D3D3D3", "#DCDCDC"]

arange=list(range(10, 290))
canvas.create_rectangle(0, 0, 300, 300, fill="black")
for i in range(random.randint(200, 900)):
    y = random.randint(10,290)
    x = random.randint(10,290)
    color = random.choice(grey)
    canvas.create_rectangle(x,y,x+4,y+4, fill=color)

root.mainloop()
