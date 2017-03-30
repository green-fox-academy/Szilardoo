from tkinter import *


root = Tk()

canvas = Canvas(root, width='600', height='600')
canvas.pack()


canvas.create_rectangle(0,0,600,600, fill="Yellow")



def squares(height, width):
    if height < 5 and width < 5:
        return None
    else:
        canvas.create_line(height/3,0,height/3,width)
        canvas.create_line((height/3)*2,0,(height/3)*2,width)
        canvas.create_line(0,width/3,height,width/3)
        canvas.create_line(0,(width/3)*2,height,(width/3)*2)
        return squares((height/3), (width/3))

squares(600, 600)
# def squares(x, y):
#     if :
#         return None



root.mainloop()
