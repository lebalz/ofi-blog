---
sidebar_custom_props:
  id: 194c1e32-af2c-41fd-98fd-5c709094ad25
---

# 3D Turtle

```py live_py slim
from turtle3d import *
from turtle import *

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
