# While Schleife

Programmiersprachen können Code-Teile mehrfach nacheinander ausführen. In Python gibt es dabei zwei Konzepte. Die `for` Schleife und die `while` Schleife.

Die `while` Schleife kann man sich wie ein kleines Kind auf einer Wanderung vorstellen, das nach jedem Schritt wieder dieselbe Frage stellt: _Sind wir schon da?_. Solange das Ziel noch nicht erreicht ist, muss das Kind aber den nächsten Schritt machen.

Die `while` Schleife stellt ebenfalls immerzu dieselbe Frage, die jeweils mit Ja (`True`) oder Nein (`False`) beantwortet wird. Solange die Frage mit _Ja_ beantwortet wird, wird der Code-Teil erneut wiederholt.

```py
counter = 0

while counter < 4:
    forward(100)
    left()
    counter = counter + 1

done()
```

```py
counter = 0               # counter = 0

# Bedingung: ✅ (counter ist kleiner als 4)
forward(100)
left()
counter = counter + 1     # counter = 1

# Bedingung: ✅ (counter ist kleiner als 4)
forward(100)
left()
counter = counter + 1     # counter = 2

# Bedingung: ✅ (counter ist kleiner als 4)
forward(100)
left()
counter = counter + 1     # counter = 3

# Bedingung: ✅ (counter ist kleiner als 4)
forward(100)
left()
counter = counter + 1     # counter = 4

# Bedingung: ❌ (counter ist nicht mehr kleiner als 4)
# --> wiederholung abbrechen

done()
```

# Was ist die Ausgabe des folgenden Programms?

```py
from gbsl_turtle import *

goto(-30, 0, draw=False)

counter = 0
while counter < 8:
    forward(60)
    left(45)
    counter = counter + 1

goto(-30, 100, draw=False)
setheading(180)     # Orientierung nach links: ◀️

counter = 0
while counter < 8:
    forward(5)
    right(45)
    counter = counter + 1


goto(30, 100, draw=False)
setheading(0)       # Orientierung nach rechts: ▶️


counter = 0
while counter < 8:
    forward(5)
    left(45)
    counter = counter + 1


goto(-48, 40, draw=False)
setheading(-45)     # Orientierung nach rechts unten: ↘️

counter = 0
while counter < 3:
    forward(40)
    left(45)
    counter = counter + 1

done()
```