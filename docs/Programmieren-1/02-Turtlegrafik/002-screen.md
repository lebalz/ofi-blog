---
sidebar_custom_props:
  id: 9cc3cd1b-5a5c-46e4-843c-6e1039328ccc
---

# 2. Zeichnungsfläche

# 2. Zeichnungsfläche - Screen

Die Zeichenfläche kann konfiguriert werden, z.B. mit einer Hintergrundfarbe, oder aber auch die Dimensionen des Hintergrunds.

Standarmässig ist keine Hintergrundfarbe gesetzt (=durchsichtig) und die Dimensionen die Koordinaten des Bildschirms sind `500x500` Pixel. Das zugrundeliegende Koordinatensystem hat den Ursprung immer in der Mitte des Bildschirms.

![](images/Screen__coordinates_py.svg)


```py live_py slim
from turtle import *

# wenn die Bildschirm-Dimensionen verändert werden sollen, muss dies
# zwingend als erster Befehl gemacht werden.
# Die Grösse kann anschliessend nicht mehr verändert werden.
turtle.set_defaults(canvwidth=200, canvheight=100)

# Die Hintergrundfarbe kann auch geändert werden.
Screen().bgcolor('orange')

forward(100)

```

:::note
Wird mit `Screen().bgcolor('yellow')` eine Hintergrundfarbe festgelegt, kann das umgebende Rechteck der Figur (englisch `Bounding Box`) nicht mehr bestimmt werden und es wird immer die ganze Bildfläche heruntergeladen. 
:::
