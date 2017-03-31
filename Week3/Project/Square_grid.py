from tkinter import *

root = Tk()
canvas = Canvas(root, width='600', height='600')
canvas.pack()


def squares(x, y, size, n):
    if size > 20:
        canvas.create_rectangle(x-size/2, y-size/2, x+size/2, y+size/2 , width=n)

        squares(x+size/2, y+size/2, size/2 ,n-6)
        squares(x+size/2, y-size/2, size/2 ,n-6)
        squares(x-size/2, y+size/2, size/2 ,n-6)
        squares(x-size/2, y-size/2, size/2 ,n-6)

squares(300, 300, 300, 20)

root.mainloop()
