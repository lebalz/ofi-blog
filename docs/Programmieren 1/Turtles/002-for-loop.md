# For Schleife

Programmiersprachen können Code-Teile mehrfach nacheinander ausführen. In Python gibt es dabei zwei Konzepte. Die `for` Schleife und die `while` Schleife.

Die `for` Schleife kann man sich wie ein Ticket-Schalter vorstellen. Der Verkäufer am Schalter bedient der Reihe nach jede Person in der Warteschlange und wiederholt jedesmal dieselbe Aufgabe: _den Kunden bedienen_

![Warteschlange](./images/queue.png)

In Python wird die Warteschleife als Liste in eckigen Klammern geschrieben:

```py
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


```py
for counter in [0, 1, 2, 3]:
    forward(100)
    left()
```

Für jede Zahl wird der Code-Teil wiederholt:


```py
# 0
forward(100)
left()
# 1
forward(100)
left()
# 2
forward(100)
left()
# 3
forward(100)
left()
```

Oder in Kurzschreibweise:


```py
for counter in range(4):
    forward(100)
    left()
```

wobei `range(4)` eine Warteschleife mit `4` Elementen erzeugt.

## Was ist die Ausgabe des folgenden Programms?

```py
from gbsl_turtle import *

goto(-30, 0, draw=False)

for counter in range(8):
    forward(60)
    left(45)

goto(-30, 100, draw=False)
setheading(180)     # Orientierung nach links: ◀️

for counter in range(8):
    forward(5)
    right(45)


goto(30, 100, draw=False)
setheading(0)       # Orientierung nach rechts: ▶️


for counter in range(8):
    forward(5)
    left(45)


goto(-48, 40, draw=False)
setheading(-45)     # Orientierung nach rechts unten: ↘️

for counter in range(3):
    forward(40)
    left(45)

done()
```
