from turtle import *

def move_to(x, y):
    penup()
    goto(x, y)
    pendown()

def kreis_left_3_4():
    for i in range(270):
        forward(1)
        left(1)

def kreis_right_3_4():
    for i in range(270):
        forward(1)
        right(1)

speed(0)
move_to(200, -200)

for i in range(3):
    kreis_left_3_4()
    kreis_right_3_4()
