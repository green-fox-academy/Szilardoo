from tkinter import *
root = Tk()

canvas = Canvas(root, width='600', height='600')
canvas.pack()

def hexagon(size, x, y):
    if size > 5:
        canvas.create_polygon(x+size/2, y-size*3**0.5/2, x-size/2, y-size*3**0.5/2, x-size, y, x-size/2, y+size*3**0.5/2, x+size/2, y+size*3**0.5/2, x+size, y,  fill="", outline='black')

        hexagon(size/2, x+size/2, y)
        hexagon(size/2, x-size/4, y-size*3**0.5/4 )
        hexagon(size/2, x-size/4 , y+size*3**0.5/4)


hexagon(300,300,300)


root.mainloop()
