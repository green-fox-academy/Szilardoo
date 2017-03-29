from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# draw four different size and color rectangles.
green_box = canvas.create_rectangle(145, 145, 155,155, fill="green")
red_box = canvas.create_rectangle(20, 30, 100,100, fill="red")
blue_box = canvas.create_rectangle(155, 155, 200, 200, fill="blue")
yellow_box = canvas.create_rectangle(145, 145, 100,100, fill="yellow")

root.mainloop()
