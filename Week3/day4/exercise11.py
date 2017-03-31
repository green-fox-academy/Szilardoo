from tkinter import *


root = Tk()

canvas = Canvas(root, width='600', height='600')
canvas.pack()


canvas.create_rectangle(0,0,600,600, fill="Yellow")

def squares(size, x, y,):
    if size > 5:
        canvas.create_line(x + size/3, y, x + size/3, y + size)
        canvas.create_line(x + size/3*2, y, x + size/3*2, y + size)
        canvas.create_line(x, y + size/3, x + size, y + size/3)
        canvas.create_line(x, y + size/3*2, x + size, y + size/3*2)

        squares(size/3, x, y + size/3)
        squares(size/3, x + size/3, y)
        squares(size/3, x + size/3, y + size/3*2)
        squares(size/3, x + size/3*2, y + size/3)

squares(600,0,0)


root.mainloop()
