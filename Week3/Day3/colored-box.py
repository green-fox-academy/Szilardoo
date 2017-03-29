from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# draw a box that has different colored lines on each edge.

edge_left = canvas.create_line(75, 75, 75, 225, fill='yellow')
edge_bottom = canvas.create_line(75, 75, 225, 75, fill="red")
edge_right = canvas.create_line(225, 225, 225, 75, fill="blue")
edge_left = canvas.create_line(225, 225, 75, 225, fill="green")
root.mainloop()
