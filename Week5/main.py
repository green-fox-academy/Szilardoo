from tkinter import *

class GameObject(object):
     def __init__(self):
         self.testcharacterX = 65
         self.testcharacterY = 0

     def character(self, canvas):
         canvas.create_rectangle(0, 0, 600, 600, fill='white')
         self.filename = PhotoImage(file = "a.png")
         canvas.create_image(self.testcharacterX, self.testcharacterY, anchor=NE, image=self.filename)

# Create the tk environment as usual
root = Tk()
canvas = Canvas(root, width=600, height=600)

# Creating a character that can draw itself in a certain position
game = GameObject()

def on_key_press(e):

    if e.keycode == 38:
        game.testcharacterY = game.testcharacterY - 75
    elif e.keycode == 40:
        game.testcharacterY = game.testcharacterY + 75
    elif e.keycode == 39:
        game.testcharacterX = game.testcharacterX + 75
    elif e.keycode == 37:
        game.testcharacterX = game.testcharacterX - 75

    game.character(canvas)

canvas.bind("<KeyPress>", on_key_press)
canvas.pack()

canvas.focus_set()

game.character(canvas)

root.mainloop()
