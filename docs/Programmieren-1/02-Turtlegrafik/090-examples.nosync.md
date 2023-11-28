---
sidebar_custom_props:
  id: e8c03446-aabe-48c1-8dd9-be2786d932cd
---

# Nosync - Unterprogramme

Weitere Beispiele...

import Strukto from '@site/src/components/struktogramm/Strukto';

:::cards{min-width=250px}
::br --code
```py live_py slim
from turtle import *
speed(5)
penup()
goto(50, -30)
pendown()

fillcolor('red')
begin_fill()
for i in range(3):
    forward(50)
    left(120)
end_fill()

penup()
goto(-100, 30)
pendown()

fillcolor('green')
begin_fill()
for i in range(3):
    forward(50)
    left(120)
end_fill()

penup()
goto(-25, 150)
pendown()

fillcolor('blue')
begin_fill()
for i in range(3):
    forward(50)
    left(120)
end_fill()


penup()
goto(-150, -120)
pendown()

fillcolor('black')
begin_fill()
for i in range(4):
    forward(30)
    left(90)
end_fill()

penup()
goto(-15, -120)
pendown()

begin_fill()
for i in range(4):
    forward(30)
    left(90)
end_fill()

penup()
goto(135, -120)
pendown()

begin_fill()
for i in range(4):
    forward(30)
    left(90)
end_fill() 
```
::br --alignSelf=center
![](images/triangles-and-squares.svg)
:::

#### Ratespiel

```py
from random import randint
from browser import alert

geheim = randint(0, 100)

for i in range(10):
    zahl = int(input(f'{i + 1}/10 Versuchen: Gib eine ganze Zahl zwischen 0 und 100 ein.'))
    if zahl == geheim:
        alert(f'Gewonnen!!! Die gesuchte Zahl {geheim} wurde in {i + 1} Versuchen gefunden :)')
        break
    elif zahl < geheim:
        alert(f'{zahl} ist zu klein')
    else:
        alert(f'{zahl} ist zu gross')

if zahl != geheim:
    alert(f'verloren :(, die gesuchte Zahl war {geheim}')
```
