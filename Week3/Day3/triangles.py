from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# reproduce this:
# [https://github.com/greenfox-academy/teaching-materials/blob/master/exercises/drawing/triangles/r5.png]


for i in range(0, 260, 10):
    canvas.create_line(150-i/3**0.5, 40+i, 300-i*1.15, 300)
    canvas.create_line(150+i/3**0.5, 40+i, 0+i*1.15, 300)
    canvas.create_line(150+i/3**0.5, 40+i, 150-i/3**0.5, 40+i)



root.mainloop()
