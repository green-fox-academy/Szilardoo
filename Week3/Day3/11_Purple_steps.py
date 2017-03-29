from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# reproduce this:
# [https://github.com/greenfox-academy/teaching-materials/blob/master/exercises/drawing/purple-steps/r3.png]


for i in range(10, 200, 10):
    yellow_box = canvas.create_rectangle(5+i, 5+i, 15+i, 15+i, fill="purple")

root.mainloop()
