# ✍️ Python Material für die BYOD Prüfung

[⬇ Download BYOD Material](/files/material_byod.zip)

```py live_py title=hello__world.py
print("Hello World! It's a beautiful Day.")

```

```py live_py title=create__mesh.py
from turtle import *
from math import sqrt
import random

SQRT3 = sqrt(3)
COLORS = ['red', 'blue', 'orange', 'green', 'purple', 'brown']
speed(15)

for index_x in range(5):
    for index_y in range(5):
        x = index_x * 30
        if index_y % 2 == 1:
            x = x - 15
        y = index_y * 15 * SQRT3
        penup()
        goto(x, y)
        pendown()
        for i in range(3):
            color(random.sample(COLORS, 1)[0])
            forward(30)
            left(120)

```

```py live_py title=klammern.py


```
