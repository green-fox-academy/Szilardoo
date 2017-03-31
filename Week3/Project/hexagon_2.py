from tkinter import *
root = Tk()

canvas = Canvas(root, width='600', height='600')
canvas.pack()

def hexagon(size, x, y):
    if size > 2:
        canvas.create_polygon(x+size/2, y-size*3**0.5/2, x-size/2, y-size*3**0.5/2, x-size, y, x-size/2, y+size*3**0.5/2, x+size/2, y+size*3**0.5/2, x+size, y,  fill="", outline='black')

        hexagon(size/3, x+size/1.5, y)
        hexagon(size/3, x-size/1.5, y)
        hexagon(size/3, x-size/3, y-size*3**0.5/3 )
        hexagon(size/3, x-size/3 , y+size*3**0.5/3)
        hexagon(size/3, x+size/3 , y-size*3**0.5/3)
        hexagon(size/3, x+size/3 , y+size*3**0.5/3)

hexagon(300,300,300)


root.mainloop()
