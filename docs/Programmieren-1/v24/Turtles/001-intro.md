# Ein Python Algorithmus

- Was ist die Ausgabe des folgenden Algorithmus? Versuchen Sie die Ausgabe zu zeichnen.
- Halten Sie Abschnitte fest, die sich wiederholen


```py live_py title=Ein-Turtle-Programm id=35e3d550-a77d-4f92-8f65-3a31a60cf3d2
from turtle import *

setheading(0)

forward(120)
left(90)
forward(120)
left(90)
forward(120)
left(90)
forward(120)
left(90)

penup()
goto(20, 90)
pendown()

forward(20)
left(90)
forward(20)
left(90)
forward(20)
left(90)
forward(20)
left(90)

penup()
goto(80, 90)
pendown()

forward(20)
left(90)
forward(20)
left(90)
forward(20)
left(90)
forward(20)
left(90)


penup()
goto(10, 50)
pendown()

right(90)
forward(10)
left(90)
forward(10)
right(90)
forward(10)
left(90)
forward(10)
right(90)
forward(10)
left(90)
forward(10)
right(90)
forward(10)
left(90)
forward(10)

forward(20)

forward(10)
left(90)
forward(10)
right(90)
forward(10)
left(90)
forward(10)
right(90)
forward(10)
left(90)
forward(10)
right(90)
forward(10)
left(90)
forward(10)
right(90)
```