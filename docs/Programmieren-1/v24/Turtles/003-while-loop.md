---
sidebar_custom_props:
  id: b2fd3905-c0e8-4fc9-97e4-89d8cf357d4b
---
# While Schleife

Programmiersprachen können Code-Teile mehrfach nacheinander ausführen. In Python gibt es dabei zwei Konzepte. Die `for` Schleife und die `while` Schleife.

Die `while` Schleife kann man sich wie ein kleines Kind auf einer Wanderung vorstellen, das nach jedem Schritt wieder dieselbe Frage stellt: _Sind wir schon da?_. Solange das Ziel noch nicht erreicht ist, muss das Kind aber den nächsten Schritt machen.

Die `while` Schleife stellt ebenfalls immerzu dieselbe Frage, die jeweils mit Ja (`True`) oder Nein (`False`) beantwortet wird. Solange die Frage mit _Ja_ beantwortet wird, wird der Code-Teil erneut wiederholt.

```py live_py id=f53cdb80-f26f-463c-b399-a2104cecf834
from turtle import *
counter = 0

while counter < 4:
    forward(100)
    left(90)
    counter = counter + 1
```

```py
from turtle import *
counter = 0               # counter = 0

# Bedingung: ✅ (counter ist kleiner als 4)
forward(100)
left(90)
counter = counter + 1     # counter = 1

# Bedingung: ✅ (counter ist kleiner als 4)
forward(100)
left(90)
counter = counter + 1     # counter = 2

# Bedingung: ✅ (counter ist kleiner als 4)
forward(100)
left(90)
counter = counter + 1     # counter = 3

# Bedingung: ✅ (counter ist kleiner als 4)
forward(100)
left(90)
counter = counter + 1     # counter = 4

# Bedingung: ❌ (counter ist nicht mehr kleiner als 4)
# --> wiederholung abbrechen
```

## Was ist die Ausgabe des folgenden Programms?

```py live_py id=f78c086e-30d9-4805-b3b8-fb4269ddd712
from turtle import *

penup()
goto(-30, 0)
pendown()

counter = 0
while counter < 8:
    forward(60)
    left(45)
    counter = counter + 1

penup()
goto(-30, 100)
pendown()
setheading(180)     # Orientierung nach links: ◀️

counter = 0
while counter < 8:
    forward(5)
    right(45)
    counter = counter + 1

penup()
goto(30, 100)
pendown()
setheading(0)       # Orientierung nach rechts: ▶️


counter = 0
while counter < 8:
    forward(5)
    left(45)
    counter = counter + 1

penup()
goto(-48, 40)
pendown()
setheading(-45)     # Orientierung nach rechts unten: ↘️

counter = 0
while counter < 3:
    forward(40)
    left(45)
    counter = counter + 1
```
