from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# create a function that takes 1 parameter:
# a list of [x, y] points
# and connects them with green lines.
# connect these to get a box: [[10, 10], [290,  10], [290, 290], [10, 290]]
# connect these: [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70],
# [120, 100], [85, 130], [50, 100]]
list_box = [[10, 10], [290,  10], [290, 290], [10, 290], [10, 10]]
list_fox = [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70], [120, 100], [85, 130], [50, 100]]


def connector(alist):
    length = len(alist)
    for i in range(length-1):
        canvas.create_line(alist[i][0]+3,alist[i][1],alist[i+1][0]+3,alist[i+1][1], fill="green")

connector(list_box)
connector(list_fox)

root.mainloop()
