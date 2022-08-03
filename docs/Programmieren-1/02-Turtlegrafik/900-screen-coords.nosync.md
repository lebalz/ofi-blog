---
sidebar_custom_props:
  id: e9302c1a-b6a7-426e-a84c-67fc29f848c9
---

# Screencoord

Draw the screen coordinates.

```py live_py title=Screen--coordinates.py id=71b84778-74e3-48be-a072-c5ca98f6b0a7
from turtle import *

X = (-20, 120)
Y = (-10, 40)
TICK = 10
SCALE = 3
DRAW_COORD = False

turtle.set_defaults(
    canvwidth = 2 * SCALE * (X[1] - X[0]),
    canvheight = 2 * SCALE * (Y[1] - Y[0])
)
speed(100)
def move(x, y):
    penup()
    goto(x, y)
    pendown()
    
def write_tick(tick: int | float, is_int: bool = True):
    if is_int:
        write(int(tick), font=("Arial", 8, "normal"), align='right')
    else:
        write(tick, font=("Arial", 8, "normal"), align='right')

def grid(xmin: int, xmax: int, ymin: int, ymax: int, tick: int, scale: int = 1):
    old_pos = getturtle().pos()
    old_pensize = getturtle().pensize()
    pensize(1)
    old_color = getturtle().color()
    pencolor('lightgray')
    offset_x = len(str(max(xmax, xmin))) * 2
    offset_y = len(str(max(ymax, ymin))) * 2
    for xtick in range(scale * xmin, scale * xmax + 1, scale * tick):
        move(xtick + offset_x, scale * ymin - 15)
        pencolor('black')
        write_tick(xtick / scale, int(tick) == tick)
        # pencolor('lightgray')
        move(xtick, scale * ymin)
        goto(xtick, scale * ymax)

    for ytick in range(scale * ymin, scale *  ymax + 1, scale * tick):
        move(scale * xmin - 5, ytick - offset_y + 3)
        pencolor('black')
        write_tick(ytick / scale, int(tick) == tick)
        # pencolor('lightgray')
        move(scale * xmin, ytick)
        goto(scale * xmax, ytick)
    
    move(*old_pos)
    pensize(old_pensize)
    color(*old_color)

grid(*X, *Y, TICK, SCALE)

if DRAW_COORD:
    dim = 250
    # draw x axis
    backward(250)
    forward(500)
    left(150)
    forward(20)
    backward(20)
    right(300)
    forward(20)
    penup()
    goto(240, -20)
    write('x', font=("Arial", 24, "normal"))
    
    
    # draw y axis
    home()
    left(90)
    pendown()
    backward(250)
    forward(500)
    left(150)
    forward(20)
    backward(20)
    right(300)
    forward(20)
    penup()
    goto(-30, 240)
    write('y', font=("Arial", 24, "normal"),)
    home()

```
