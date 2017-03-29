from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# create a line drawing function that takes 2 parameters:
# the x and y coordinates of the line's starting point
# and draws a line from that point to the center of the canvas.
# draw 3 lines with that function.

def line_drawer(x_coordinate, y_coordinate):
    line = canvas.create_line(x_coordinate, y_coordinate, 150, 150)
    return

line_drawer(0,0)
line_drawer(300, 0)
line_drawer(150, 300)

root.mainloop()
