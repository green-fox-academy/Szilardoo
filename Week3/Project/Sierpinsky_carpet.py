from tkinter import *
root = Tk()

canvas = Canvas(root, width='600', height='600')
canvas.pack()

a = 3**0.5/2

def square(size, x, y):
    if size > 2:
        canvas.create_rectangle(x-size/3, y-size/3, x+size/3, y+size/3, fill="black")

        square(size/3, x, y+size/1.5)
        square(size/3, x, y-size/1.5)
        square(size/3, x-size/1.5, y)
        square(size/3, x+size/1.5, y)
        square(size/3, x-size/1.5, y-size*a/1.3 )
        square(size/3, x+size/1.5, y-size*a/1.3 )
        square(size/3, x+size/1.5, y+size*a/1.3 )
        square(size/3, x-size/1.5, y+size*a/1.3 )


square(300,300,300)


root.mainloop()
