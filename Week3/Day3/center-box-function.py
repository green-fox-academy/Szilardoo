from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# create a square drawing function that takes 1 parameter:
# the square size
# and draws a square of that size to the center of the canvas.
# draw 3 squares with that function.

def square_drawer(size):
    yellow_box = canvas.create_rectangle(150-size/2,150-size/2,150+size/2,150+size/2)

square_drawer(30)
square_drawer(250)
square_drawer(70)

root.mainloop()
