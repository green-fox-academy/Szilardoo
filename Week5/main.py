from tkinter import *

root = Tk()
canvas = Canvas(root, width=720, height=792)

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
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 1, 1, 1, 1, 0, 0, 1, 0, 1],
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
         self.hero = canvas.create_image(self.testcharacterX, self.testcharacterY, anchor=NE, image=self.main_character_down_pic )

    def draw_background(self):
        self.background_pic_floor = PhotoImage(file = "floor.png")
        self.background_pic_wall = PhotoImage(file = "wall.png")
        w = 72
        h= 72
        for i in range(len(self.map)):
            for j in range(len(self.map[i])):
                if self.map[i][j] == 1:
                    canvas.create_image(w*j, h*i, anchor=NW, image = self.background_pic_floor)
                else:
                    canvas.create_image(w*j, h*i, anchor=NW, image = self.background_pic_wall)




class MainLoop():

    def on_key_press(self, e):
        if e.keycode == 38:
            if game.testcharacterY > 0:
                game.testcharacterY = game.testcharacterY - 72
        elif e.keycode == 40:
            if game.testcharacterY < 720:
                game.testcharacterY = game.testcharacterY + 72
        elif e.keycode == 39:
            if game.testcharacterX < 648:
                game.testcharacterX = game.testcharacterX + 72
        elif e.keycode == 37:
            if game.testcharacterX > 72:
                game.testcharacterX = game.testcharacterX - 72
        game.character(canvas)
        if e.keycode == 37:
            canvas.itemconfig( game.hero, image=game.main_character_left_pic )
            canvas.update()
        if e.keycode == 39:
            canvas.itemconfig( game.hero, image=game.main_character_right_pic )
            canvas.update()
        if e.keycode == 38:
            canvas.itemconfig( game.hero, image=game.main_character_up_pic )
            canvas.update()


game = GameObject()
main = MainLoop()
canvas.bind("<KeyPress>", main.on_key_press)
canvas.pack()

canvas.focus_set()

game.character(canvas)

root.mainloop()
