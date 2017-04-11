from tkinter import *

root = Tk()
canvas = Canvas(root, width=750, height=825)

class GameObject(object):
    def __init__(self):
        self.testcharacterX = 65
        self.testcharacterY = 0
        self.map = [
            [1, 1, 1, 0, 1, 0, 1, 1, 1, 1],
            [1, 1, 1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 0, 1, 0, 1, 0, 0, 1],
            [1, 1, 1, 1, 1, 0, 1, 1, 1, 1],
            [0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
            [1, 0, 1, 0, 1, 1, 1, 1, 0, 1],
            [1, 1, 1, 1, 1, 1, 0, 0, 0, 1],
            [1, 0, 0, 0, 1, 1, 1, 1, 0, 1],
            [1, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 1, 1, 1]
            ]
        self.draw_background()

    def character(self, canvas):
         self.main_character_down_pic = PhotoImage(file = "a.png")
         self.main_character_left_pic = PhotoImage(file = "b.png")
         self.main_character_up_pic = PhotoImage(file = "h.png")
         self.main_character_right_pic = PhotoImage(file = "j.png")
         self.hero = canvas.create_image(self.testcharacterX, self.testcharacterY, anchor=NE, image=self.main_character_down_pic)

    def draw_background(self):
        self.background_pic = PhotoImage(file = "floor.png")
        w = 75
        h= 75
        for i in range(11):
            for j in range(10):
                    canvas.create_image(w*i, h*j, anchor=NE, image = self.background_pic)




game = GameObject()
class MainLoop():

    def on_key_press(self, e):
        if e.keycode == 38:
            canvas.itemconfig( game.hero, image=game.main_character_up_pic )
            canvas.update()
            if game.testcharacterY > 0:
                game.testcharacterY = game.testcharacterY - 75
        elif e.keycode == 40:
            if game.testcharacterY < 750:
                game.testcharacterY = game.testcharacterY + 75
        elif e.keycode == 39:
            canvas.itemconfig( game.hero, image=game.main_character_right_pic )
            canvas.update()
            if game.testcharacterX < 675:
                game.testcharacterX = game.testcharacterX + 75
        elif e.keycode == 37:
            canvas.itemconfig( game.hero, image=game.main_character_left_pic )
            canvas.update()
            if game.testcharacterX > 0:
                game.testcharacterX = game.testcharacterX - 75
        game.character(canvas)


main = MainLoop()
canvas.bind("<KeyPress>", main.on_key_press)
canvas.pack()

canvas.focus_set()

game.character(canvas)

root.mainloop()
