
# Screencoord

Draw the screen coordinates.

```py live_py title=Screen--coordinates.py id=71b84778-74e3-48be-a072-c5ca98f6b0a7
from turtle import *
turtle.set_defaults(
    canvwidth = 280 * 2,
    canvheight = 280 * 2
)
speed(100)
def grid(xmin: int, xmax: int, ymin: int, ymax: int, tick: int, scale: int = 1):
    old_pos = getturtle().pos()
    old_pensize = getturtle().pensize()
    pensize(1)
    old_color = getturtle().color()
    pencolor('lightgray')
    offset_x = len(str(max(xmax, xmin))) * 2
    offset_y = len(str(max(ymax, ymin))) * 2
    for xtick in range(scale * xmin, scale * xmax + 1, tick):
        penup()
        goto(xtick + offset_x, scale * ymin - 15)
        pencolor('black')
        write(xtick, font=("Arial", 8, "normal"), align='right')
        pencolor('lightgray')

        goto(xtick, scale * ymin)
        pendown()
        goto(xtick, scale * ymax)

    for ytick in range(scale * ymin, scale * ymax + 1, tick):
        penup()
        goto(scale * xmin - 5, ytick - offset_y + 3)
        pencolor('black')
        write(ytick, align='right')
        pencolor('lightgray')
        goto(scale * xmin, ytick)
        pendown()
        goto(scale * xmax, ytick)
    penup()
    goto(*old_pos)
    pendown()
    pensize(old_pensize)
    color(*old_color)

dim = 250
grid(-dim, dim, -dim, dim, 25)

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