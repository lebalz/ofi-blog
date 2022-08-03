---
sidebar_custom_props:
  id: 1ee490a5-1d87-4c3b-9a20-1dd3c9a47de0
---
# For Schleife

Programmiersprachen können Code-Teile mehrfach nacheinander ausführen. In Python gibt es dabei zwei Konzepte. Die `for` Schleife und die `while` Schleife.

Die `for` Schleife kann man sich wie ein Ticket-Schalter vorstellen. Der Verkäufer am Schalter bedient der Reihe nach jede Person in der Warteschlange und wiederholt jedesmal dieselbe Aufgabe: _den Kunden bedienen_

![Warteschlange](./images/queue.png)

In Python wird die Warteschleife als Liste in eckigen Klammern geschrieben:

```py live_py id=3f6dd4e0-f5bf-4d2f-ad8e-ee414e97cece
for person in ['Jack', 'Maria', 'Reto']:
    print(f'Guten Tag {person}, wie kann ich helfen?')
    print('...')
    print('Auf wiedersehen')
```

Die Personen _Jack_, _Maria_ und _Reto_ werden nacheinander begrüsst, bedient und verabschiedet:


```txt
Guten Tag Jack, wie kann ich helfen?
...
Auf wiedersehen.

Guten Tag Maria, wie kann ich helfen?
...
Auf wiedersehen.

Guten Tag Reto, wie kann ich helfen?
...
Auf wiedersehen.
```

Um einen beliebigen Code-Teil mehrfach nacheinander auszuführen, können wir nun auch Zahlen als Warteschleife verwenden:


```py live_py id=0c4d6d9b-158d-4558-8902-bf4d09254b1e
from turtle import *
for counter in [0, 1, 2, 3]:
    forward(100)
    left(90)
```

Für jede Zahl wird der Code-Teil wiederholt:


```py live_py id=c482f58c-66bb-4406-ad47-e42b4f6ee971
from turtle import *
# 0
forward(100)
left(90)
# 1
forward(100)
left(90)
# 2
forward(100)
left(90)
# 3
forward(100)
left(90)
```

Oder in Kurzschreibweise:


```py live_py id=46a4e93f-80c8-4e66-ab86-f187b810a8e8
from turtle import *
for counter in range(4):
    forward(100)
    left(90)
```

wobei `range(4)` eine Warteschleife mit `4` Elementen erzeugt.

## Was ist die Ausgabe des folgenden Programms?

```py live_py id=63756aea-ee47-4805-b077-8637a09ca08d
from turtle import *
penup()
goto(-30, 0)
pendown()

for counter in range(8):
    forward(60)
    left(45)

penup()
goto(-30, 100)
pendown()

setheading(180)     # Orientierung nach links: ◀️

for counter in range(8):
    forward(5)
    right(45)

penup()
goto(30, 100)
pendown()

setheading(0)       # Orientierung nach rechts: ▶️


for counter in range(8):
    forward(5)
    left(45)

penup()
goto(-48, 40)
pendown()

setheading(-45)     # Orientierung nach rechts unten: ↘️

for counter in range(3):
    forward(40)
    left(45)

```
