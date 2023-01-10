---
sidebar_custom_props:
  id: c43504ce-3a3b-4da0-b1f6-d030bc5c1c57
---
# Wiedereinstieg

:::aufgabe 1. Aufgabe
<Answer type="state" webKey="9c0ebdca-a13a-425c-89a9-11d93b495c88" />


Das Programm zeichnet eine Sonne mit 13 Strahlen.
1. Ändern Sie das Programm so ab, dass es nun eine Sonne mit `19` Strahlen zeichnet.
2. Setzen Sie die Stiftdicke auf `5` und die Stiftfarbe auf **Rot**.
3. Füllen Sie die Sonne mit Ihrer Lieblingsfarbe (aber nicht mit Rot) aus.

```py live_py title=aufgabe1.py id=59d3c260-6572-42a4-acec-c90accccdff2 
from turtle import *

speed(0)

def bogen(distanz, drehung):
    for i in range(20):
        backward(distanz)
        right(drehung)

def strahl():
    bogen(3, 5)
    left(90)
    bogen(4, -10)
    right(190)

for i in range(13):
    strahl()
    right(360 / 13)
```
:::


:::aufgabe 2. Aufgabe
<Answer type="state" webKey="a0bdfec4-b9c5-4174-9c86-4b11c89c95f4" />

```py live_py id=2a8a9b26-6632-4836-a10e-24738483d028
def aufsummieren(zahl):
    summe = 0
    for i in range(zahl):
        summe = summe + i
    return summe

print('Summe der ersten 10 Zahlen', aufsummieren(3))
print('Summe der ersten 10 Zahlen', aufsummieren(10))
```

1. Untersuchen Sie den obigen Code, und flicken Sie ihn. Die korrekten Ausgaben für die Summen von `3` bzw. `10` lauten:

`aufsummieren(3)`
: $1 + 2 + 3 = 6$
`aufsummieren(10)`
: $1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55$

1. Schreiben Sie eine Funktion `aufmultiplizieren(zahl)`, welche alle natürlichen Zahlen bis und mit der angegebenen Zahl miteinander multiplizieren. Überprüfen Sie Ihre Funktion mit verschiedenen Zahlen:

`aufmultiplizieren(3)`
: $1 \cdot 2 \cdot 3 = 6$
`aufmultiplizieren(10)`
: $1 \cdot 2 \cdot 3 \cdot 4 \cdot 5 \cdot 6 \cdot 7 \cdot 8 \cdot 9 \cdot 10 = 3628800$

:::