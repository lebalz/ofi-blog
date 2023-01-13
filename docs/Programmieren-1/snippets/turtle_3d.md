---
sidebar_custom_props:
  id: 194c1e32-af2c-41fd-98fd-5c709094ad25
---

# 3D Turtle

### Star
```py live_py slim

from turtle3d import *

speed(0)
for i in range(20):
    for i in range(5):
        forward(20)
        left(2 * 360 / 5)
    level_up()

print(gcode())
```

### Surface
```py live_py slim

from turtle3d import *

speed(0)
for i in range(3):
    for i in range(4):
        forward(20)
        left(90)
    i = 0.3
    while i < 20 - 0.6:
        forward(0.3)
        left(90)
        if i == 0.3:
            forward(0.3)
        forward(19.4)
        right(90)
        forward(0.3)
        right(90)
        forward(19.4)
        left(90)
        i += 0.6
    if i < 19.7:
        forward(0.3)
        left(90)
        forward(19.4)
        right(90)
    penup()
    goto(0,0)

    level_up()

print(gcode())
```

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

SIZE = 50

speed(0)
def neck(size, n):
    for i in range(n):
        forward(size)
        left(360 / n)

offset = sqrt(2) * 0.3
for j in range(0, 150):
    dt = SIZE / 150
    size = SIZE - j * dt
    reps = 3
    if size < 0.3:
        break
    for i in range(0, reps):
        sz = size - 0.6 * i
        if sz < 0.3:
            i -= 1
            break
        neck(sz, 4)
        left(45)
        forward(offset)
        right(45)
    penup()
    left(45)
    level_up()
    forward(size / sqrt(2) - (i + 1) * offset)
    left(0.5)
    backward(size / sqrt(2) -  dt * sqrt(2) / 2)
    right(45)
    pendown()

print(gcode())
```
