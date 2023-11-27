---
sidebar_custom_props:
  id: c7de479a-a1cd-4a29-a6cd-4b31ea899283
---

# ⭐ Rekursion

Ein Unterprogramm kann sich selber aufrufen. Das ergibt im Normalfall eine unendliche Wiederholung, so dass das Programm abstürzt. Wird das Unterprogramm jedoch jedesmal mit einem veränderten Parameter aufgerufen, so kann eine **Abbruchbedingung** erstellt werden, welche angibt, ob das Unterprogramm erneut aufgerufen werden soll oder nicht.

## Beispiel

Im folgenden Programm wird ein einfacher binärer Baum gezeichnet:

![](images/52-tree-n1.svg)

```py live_py slim
from turtle import *

left(90)
def baum(grösse):
    forward(grösse)
    left(45)
    forward(grösse / 2)
    backward(grösse / 2)
    right(90)
    forward(grösse / 2)
    backward(grösse / 2)
    left(45)
baum(40)
```

Diesen Baum können wir nun so umbauen, dass jeder Ast auch wieder ein binärer Baum ist:

![](images/52-tree-n2.svg)


```py live_py slim
from turtle import *

left(90)
def baum(grösse):
    if grösse < 5:
        forward(grösse)
    else:
        forward(grösse)
        left(45)
        baum(grösse / 2)
        backward(grösse / 2)
        right(90)
        baum(grösse / 2)
        backward(grösse / 2)
        left(45)
baum(100) 
```

Bemerken Sie, dass eine Abbruchbedingung eingefügt wurde - falls die grösse kleiner als 5 ist, wird nur eine Strecke gezeichnet, andernfalls ein ganzer Baum.

## Koch Kurve

:::aufgabe
<Answer type="state" webKey="ed83c1e8-9552-4c00-8119-2170df88cacd" />

Eine Koch-Kurve ist wie folgt aufgebaut:

![](images/52-koch.svg)

wobei ein einzelnes Element wie folgt aussieht:

![](images/52-koch-angles.jpg)

```py live_py title=koch.py id=16486559-3037-48b9-958f-96dc44c50173
from turtle import *


```

⭐️ Zusatz: Zeichnen Sie ein Sechseck bestehend aus 6 Koch-Kurven.

:::


## ⭐️ Pythagorasbaum

Versuchen Sie, einen rekursiven Pythagoras-Baum zu zeichnen.

![Ein Pythagorasbaum](images/010-pythagoras-tree.png)

:::aufgabe[Pythagorasbaum]
<Answer type="state" webKey="cf0b2b26-f5d9-493c-81d1-0d00bfa7dcb7" />

```py live_py title="pythagoras.py" id="90d2c2c3-004c-433d-9445-8c225b51b5ae"
from turtle import *

```
:::

Weitere Inspirationen für Fraktale
👉 https://natureofcode.com/book/chapter-8-fractals/

