from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# create a line drawing function that takes 2 parameters:
# the x and y coordinates of the line's starting point
# and draws a 50 long horizontal line from that point.
# draw 3 lines with that function.

def line_drawer(x_coordinate, y_coordinate):
    line = canvas.create_line(x_coordinate, y_coordinate, x_coordinate + 50, y_coordinate)
    return

line_drawer(20, 20)
line_drawer(50, 50)
line_drawer(70, 70)


root.mainloop()
