---
sidebar_custom_props:
  id: db6a09c4-c708-477b-8121-fdba7b01e7f5
---
# ✍️ Python Material für die BYOD Prüfung

<a href="https://ofi.25.gbsl.website/files/material_byod.zip">⬇ Download BYOD Material</a>

Alle Python-Bezogenen Aufgabe sollen direkt auf dieser Seite gemacht werden.

```py live_py title=hello__world.py id=4ceda0c5-4c49-457d-9839-80eeed8c100a
print("Hello World! It's a beautiful Day.")

```

```py live_py title=create__mesh.py id=fbcb116a-7d0c-4643-a160-728823d19262
from turtle import *
from math import sqrt
import random

SQRT3 = sqrt(3)
COLORS = ['red', 'blue', 'orange', 'green', 'purple', 'brown']
speed(7)

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

```py live_py title=klammern.py id=4f38b217-cd53-40a4-92ff-645bf19f44b4


```
