import random
from tkinter import *

root = Tk()
canvas = Canvas(root, width=720, height=720)

class GameObject():
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
        self.draw_skeletons()
        self.draw_boss_and_key()



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

    def draw_skeletons(self):
        self.skeleton = PhotoImage(file = "skeleton.png")
        self.skeleton_position = [[4, 0], [0, 5], [7, 5]]#, [2, 0], [0, 9], [2, 3], [2, 5], [4, 3], [4, 5], [5, 5], [5, 8], [7, 9]]
        # for skeleton in range(random.randint(3, 5)):
        #     self.which = random.choice(self.skeleton_position)
        #     self.draw_skeleton = canvas.create_image(self.which[0]*72, self.which[1]*72, anchor=NW, image=self.skeleton)
        for skeleton in self.skeleton_position:
            self.draw_skeleton = canvas.create_image(skeleton[0]*72, skeleton[1]*72, anchor=NW, image=self.skeleton)

    def draw_boss_and_key(self):
        self.boss_img = PhotoImage(file = "boss.png")
        self.boss_position = [[6, 0], [9, 0], [6, 3], [9, 3], [9, 5]]
        self.key_position = [[2, 9], [4, 9], [7, 6], [7, 8], [9, 9]]
        self.where_the_boss = random.choice(self.boss_position)
        self.boss = canvas.create_image(self.where_the_boss[0]*72, self.where_the_boss[1]*72, anchor=NW, image=self.boss_img)
        self.where_the_key = random.choice(self.key_position)
        self.key_boss = canvas.create_image(self.where_the_key[0]*72, self.where_the_key[1]*72, anchor=NW, image=self.skeleton)


class MainLoop():


    def steps(self, x, y, pic):
        self.x = x
        self.y = y
        if 0 <= x <= 9 and 0 <= y <= 9:
            if game.map[y][x] == 1:
                canvas.delete(game.hero)
                game.testcharacterX = self.x
                game.testcharacterY = self.y
                game.hero = canvas.create_image(72*game.testcharacterX, 72*game.testcharacterY, anchor=NW, image=pic )


    def on_key_press(self, e):
        if e.keycode == 38:
            if game.testcharacterY > 0:
                self.steps(game.testcharacterX, game.testcharacterY-1, game.main_character_up_pic)
        elif e.keycode == 40:
            if game.testcharacterY < 648:
                self.steps(game.testcharacterX, game.testcharacterY+1, game.main_character_down_pic)
        elif e.keycode == 39:
            if game.testcharacterX < 645:
                self.steps(game.testcharacterX+1, game.testcharacterY, game.main_character_right_pic)
        elif e.keycode == 37:
            if game.testcharacterX > 0:
                self.steps(game.testcharacterX-1, game.testcharacterY, game.main_character_left_pic)
        elif e.keycode == 32:
            print(self.x,game.where_the_boss[0], self.y, game.where_the_boss[1])
            if self.x == game.where_the_boss[0] and self.y == game.where_the_boss[1]:
                canvas.delete(game.boss)

class GameLogic():
    def __init__(self):
        self.level = 1
        self.hero_hp = 10
        self.DP = 5
        self.SP = 5
        self.enemy_level = [self.level,self.level,self.level,self.level,self.level,self.level+1,self.level+1,self.level+1,self.level+1,self.level+2]
        self.create_display()
        print(game.where_the_boss[0],game.testcharacterX,game.testcharacterY,game.where_the_boss[1])
    # 
    # def battle(self):
    #     if game.testcharacterX == game.where_the_boss[0] and game.testcharacterY == game.where_the_boss[1]:
    #         canvas.delete(game.boss)

    def create_display(self):
        self.w = Label(root, text="Hero (Level: "+ str(self.level) + ") HP: " + str(self.hero_hp) + "/"+ str(self.hero_hp) +  " | DP: " + str(self.DP)+ " | SP: " + str(self.SP))
        self.w.pack()
        self.w.config(font=("Courier", 20))

    # def level_up(self):
    #     self.level += 1
    #     self.w['text']=


game = GameObject()
logic = GameLogic()
main = MainLoop()
canvas.bind("<KeyPress>", main.on_key_press)
canvas.pack()

canvas.focus_set()

game.character(canvas)

root.mainloop()
