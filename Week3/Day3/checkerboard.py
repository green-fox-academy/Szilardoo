from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()


w = 300/8
h=300/8
for i in range(8):
    for j in range(8):
        if (i+j)%2==1:
            canvas.create_rectangle(j*w,i*h,(j+1)*w,(i+1)*h,fill='black')


root.mainloop()
