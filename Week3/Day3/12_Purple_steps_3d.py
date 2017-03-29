from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# reproduce this:
# [https://github.com/greenfox-academy/teaching-materials/blob/master/exercises/drawing/purple-steps/r3.png]

x_coordinate = 5
y_coordinate = 15

for i in range(6):
    box = canvas.create_rectangle(x_coordinate, x_coordinate, y_coordinate, y_coordinate, fill="purple")
    x_coordinate = y_coordinate
    y_coordinate += x_coordinate*0.7

root.mainloop()
