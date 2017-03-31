from tkinter import *
root = Tk()

canvas = Canvas(root, width='600', height='600')
canvas.pack()

a = 3**0.5/2

def circles(size, x, y):
    if size > 10:
        canvas.create_oval(x-size, y-size, x+size, y+size)

        circles(size/2, x ,y-size/2)
        circles(size/2, x+size/2.5 , y+size*a/3 )
        circles(size/2, x-size/2.5 , y+size*a/3)


circles(300,300,300)


root.mainloop()
