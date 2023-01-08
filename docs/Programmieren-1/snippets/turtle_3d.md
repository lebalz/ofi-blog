---
sidebar_custom_props:
  id: 194c1e32-af2c-41fd-98fd-5c709094ad25
---

# 3D Turtle

```py live_py slim
from turtle3d import *

speed(0)
for i in range(20):
    for j in range(4):
        forward(8)
        left(90)
    penup()
    goto(0, -20)
    pendown()
    setheading(0)
    for j in range(6):
        forward(8)
        left(360 / 5)
    level_up()
    penup()
    goto(0,0)
    pendown()
    setheading(0)

print(gcode())
```

## Rotierende Pyramide

```py live_py slim
from turtle3d import *
from turtle import *
from math import sqrt

speed(0)
def neck(size, n):
    for i in range(n):
        forward(size)
        left(360 / n)

offset = sqrt(2) * 0.05
for j in range(150):
    dt = 20 / 150
    size = 20 - j * dt
    for i in range(0, 3):
        neck(size - 0.1 * i, 4)
        left(45)
        forward(offset)
        right(45)
    penup()
    left(45)
    level_up()
    forward(size / sqrt(2) - 3 * offset)
    left(0.5)
    backward(size / sqrt(2) -  dt * sqrt(2) / 2)
    right(45)
    pendown()

print(gcode())
```