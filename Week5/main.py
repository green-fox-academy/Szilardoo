from tkinter import *

root = Tk()
canvas = Canvas(root, width=720, height=720)

class GameObject(object):
    def __init__(self):
        self.testcharacterX = 0
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
            [1, 1, 1, 0, 1, 0, 0, 1, 1, 1],
            ]
        self.draw_background()
        self.Skeletons()

    def character(self, canvas):
         self.main_character_down_pic = PhotoImage(file = "a.png")
         self.main_character_left_pic = PhotoImage(file = "b.png")
         self.main_character_up_pic = PhotoImage(file = "h.png")
         self.main_character_right_pic = PhotoImage(file = "j.png")
         self.hero = canvas.create_image(72*self.testcharacterX, 72*self.testcharacterY, anchor=NW, image=self.main_character_down_pic )


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

    def steps(self, x, y, pic):
        if 0 <= x <= 9 and 0 <= y <= 9:
            if self.map[y][x] == 1:
                canvas.delete(self.hero)
                self.testcharacterX = x
                self.testcharacterY = y
                self.hero = canvas.create_image(72*self.testcharacterX, 72*self.testcharacterY, anchor=NW, image=pic )

    def Skeletons(self):
        self.skeleton = PhotoImage(file = "skeleton.png")
        self.skeleton_position = [[4, 0], [0, 5], [7, 5]]
        for skeleton in self.skeleton_position:
            self.draw_skeleton = canvas.create_image(skeleton[0]*72, skeleton[1]*72, anchor=NW, image=self.skeleton)

class MainLoop():

#    def __init__(self):


    def on_key_press(self, e):
        if e.keycode == 38:
            if game.testcharacterY > 0:
                game.steps(game.testcharacterX, game.testcharacterY-1, game.main_character_up_pic)
        elif e.keycode == 40:
            if game.testcharacterY < 640:
                game.steps(game.testcharacterX, game.testcharacterY+1, game.main_character_down_pic)
        elif e.keycode == 39:
            if game.testcharacterX < 645:
                game.steps(game.testcharacterX+1, game.testcharacterY, game.main_character_right_pic)
        elif e.keycode == 37:
            if game.testcharacterX > 0:
                game.steps(game.testcharacterX-1, game.testcharacterY, game.main_character_left_pic)



game = GameObject()
main = MainLoop()
canvas.bind("<KeyPress>", main.on_key_press)
canvas.pack()

canvas.focus_set()

game.character(canvas)

root.mainloop()
