from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# create a square drawing function that takes 2 parameters:
# the x and y coordinates of the square's top left corner
# and draws a 50x50 square from that point.
# draw 3 squares with that function.
def square_drawer(x_coordinate, y_coordinate):
    yellow_box = canvas.create_rectangle(x_coordinate, y_coordinate, x_coordinate+50, y_coordinate+50, fill="yellow")

square_drawer(20,20)
square_drawer(120,100)
square_drawer(250,20)

root.mainloop()
