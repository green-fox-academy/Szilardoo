import random
from tkinter import *

root = Tk()
canvas = Canvas(root, width=720, height=720)

class GameObject():
    def __init__(self):
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


class Hero():

    def __init__(self, canvas):
        self.testcharacterX = 0
        self.testcharacterY = 0
        self.main_character_down_pic = PhotoImage(file = "a.png")
        self.main_character_left_pic = PhotoImage(file = "b.png")
        self.main_character_up_pic = PhotoImage(file = "h.png")
        self.main_character_right_pic = PhotoImage(file = "j.png")
        self.hero = canvas.create_image(72*self.testcharacterX, 72*self.testcharacterY, anchor=NW, image=self.main_character_down_pic )

    def steps(self, x, y, pic):
        self.x = x
        self.y = y
        if 0 <= x <= 9 and 0 <= y <= 9:
            if game.map[y][x] == 1:
                canvas.delete(self.hero)
                self.testcharacterX = self.x
                self.testcharacterY = self.y
                self.hero = canvas.create_image(72*self.testcharacterX, 72*self.testcharacterY, anchor=NW, image=pic )


class Skeleton():

    def __init__(self):
        self.skeleton_counter = 0
        self.skeleton_pic = PhotoImage(file = "skeleton.png")
        self.how_many = random.randint(3,6)
        while self.skeleton_counter != 1:
            self.draw_skeleton()

    def draw_skeleton(self):
        self.skel_x = random.randint(0,9)
        self.skel_y = random.randint(0,9)
        if game.map[self.skel_y][self.skel_x] == 1:
            self.skeleton = canvas.create_image(72*self.skel_x, 72*self.skel_y, anchor=NW, image=self.skeleton_pic )
            self.skeleton_counter += 1


    def move(self):
        self.move_to_x = random.randint(-1, 1)
        self.move_to_y = random.randint(-1, 1)
        # while 0 > (self.skel_y + self.move_to_y) > 9 and 0 > (self.skel_x + self.move_to_x) > 9:
        #     self.move_to_x = random.randint(-1, 1)
        #     self.move_to_y = random.randint(-1, 1)
        while game.map[self.skel_y + self.move_to_y][self.skel_x + self.move_to_x] != 1 and 0 > (self.skel_y + self.move_to_y) > 9 and 0 > (self.skel_x + self.move_to_x) > 9:
            self.move_to_x = random.randint(-1, 1)
            self.move_to_y = random.randint(-1, 1)

        self.skel_x = self.skel_x + self.move_to_x
        self.skel_y = self.skel_y + self.move_to_y
        canvas.delete(self.skeleton)
        self.skeleton = canvas.create_image(72*(self.skel_x), 72*(self.skel_y), anchor=NW, image=self.skeleton_pic )


class Boss():

    def __init__(self):
        self.counter = 0
        self.boss_pic = PhotoImage(file = "boss.png")
        while self.counter != 1:
            self.draw_boss()

    def draw_boss(self):
        self.boss_x = random.randint(0,9)
        self.boss_y = random.randint(0,9)
        if game.map[self.boss_y][self.boss_x] == 1:
            self.boss = canvas.create_image(72*self.boss_x, 72*self.boss_y, anchor=NW, image=self.boss_pic )
            self.counter += 1

    def move(self):
        self.move_to_x = random.randint(-1, 1)
        self.move_to_y = random.randint(-1, 1)
        while 0 > (self.boss_y + self.move_to_y) > 9 and 0 > (self.boss_x + self.move_to_x) > 9:
            self.move_to_x = random.randint(-1, 1)
            self.move_to_y = random.randint(-1, 1)
        while game.map[self.boss_y + self.move_to_y][self.boss_x + self.move_to_x] != 1:
            self.move_to_x = random.randint(-1, 1)
            self.move_to_y = random.randint(-1, 1)

        self.boss_x = self.boss_x + self.move_to_x
        self.boss_y = self.boss_y + self.move_to_y
        canvas.delete(self.boss)
        self.boss = canvas.create_image(72*(self.boss_x), 72*(self.boss_y), anchor=NW, image=self.boss_pic )

class MainLoop():

    def __init__(self):
        self.level = 1
        self.hero_hp = 10
        self.DP = 5
        self.SP = 5
        self.create_display()
        self.hero = Hero(canvas)
        self.skeleton = Skeleton()
        self.boss = Boss()
        self.only_two = 0
        #self.move_skeleton()
        # self.d6 = random.randint(1,6)
        # self.hero_datas = {maxHP:10, maxDP:10, maxSP:10, currentHP:10, currentDP:10, currentSP:10}


    def on_key_press(self, e):
        if e.keycode == 38:
            self.hero.steps(self.hero.testcharacterX, self.hero.testcharacterY-1, self.hero.main_character_up_pic)
            self.only_two += 1
            if self.only_two % 2 == 0:
                self.skeleton.move()
                self.boss.move()
        elif e.keycode == 40:
            self.hero.steps(self.hero.testcharacterX, self.hero.testcharacterY+1, self.hero.main_character_down_pic)
            self.only_two += 1
            if self.only_two % 2 == 0:
                self.skeleton.move()
                self.boss.move()
        elif e.keycode == 39:
            self.hero.steps(self.hero.testcharacterX+1, self.hero.testcharacterY, self.hero.main_character_right_pic)
            self.only_two += 1
            if self.only_two % 2 == 0:
                self.skeleton.move()
                self.boss.move()
        elif e.keycode == 37:
            self.hero.steps(self.hero.testcharacterX-1, self.hero.testcharacterY, self.hero.main_character_left_pic)
            self.only_two += 1
            if self.only_two % 2 == 0:
                self.skeleton.move()
                self.boss.move()
        elif e.keycode == 32:
            pass

    # def move_skeleton(self):
    #     if self.hero.testcharacterX-1 or self.hero.testcharacterX+1 or self.hero.testcharacterY-1 or self.hero.testcharacterY+1:
    #         if self.hero.testcharacterX -1 or self.hero.testcharacterX +1 or self.hero.testcharacterY-1 or self.hero.testcharacterY+1:
    #            self.skeleton.move(self.skeleton.skel_x, self.skeleton.skel_y)

    def fight(self):
        pass


    def create_display(self):
        self.w = Label(root, text="Hero (Level: "+ str(self.level) + ") HP: " + str(self.hero_hp) + "/"+ str(self.hero_hp) +  " | DP: " + str(self.DP)+ " | SP: " + str(self.SP))
        self.w.pack()
        self.w.config(font=("Courier", 20))

    # def level_up(self):
    #     self.level += 1
    #     self.w['text']=


game = GameObject()
main = MainLoop()
canvas.bind("<KeyPress>", main.on_key_press)
canvas.pack()

canvas.focus_set()

root.mainloop()
