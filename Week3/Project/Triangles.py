from tkinter import *
root = Tk()

canvas = Canvas(root, width='600', height='600')
canvas.pack()

a = 3**0.5/2

def hexagon(size, x, y):
    if size > 2:
        canvas.create_polygon(x, y+size, x+size, y-size*a, x-size, y-size*a,  fill="", outline='black')

        hexagon(size/2, x, y+size/2)
        hexagon(size/2, x-size/2, y-size*a/2 )
        hexagon(size/2, x+size/2 , y-size*a/2)


hexagon(300,300,300)


root.mainloop()
