---
sidebar_custom_props:
  id: 25e588d9-33ef-44fa-b084-e7126849956c
---

import Strukto from '@site/src/components/struktogramm/Strukto';

# Sprachelemente

## Import-Befehl
Um vordefinierte Python-Befehle aus einer Bibliothek (ein sog. Python Modul) zu verwenden, müssen diese importiert werden. Dies geschieht mit dem Import-Befehl:

```py
from turtle import *
```

> In software, a wildcard character is a kind of placeholder represented by a single character, such as an asterisk (\*), which can be interpreted as a number of literal characters or an empty string. [^1]

Es ist aber auch möglich, nur einzelne Befehle (Unterprogramme) aus einem Python Modul zu importieren.

```py live_py slim
from math import floor, ceil

print('Zahl:', 13.1)
print('Abgerundet:', floor(13.1))
print('Aufgerundet:', ceil(13.1)) 
```

Dies hat mehrere Vorteile:
Code Lesbarkeit
: Eine andere Person erhält direkt eine Übersicht, welche Befehle von welcher Bibliothek stammen.
Verhindern von Namenskonflikten
: Man verwendet nicht zufällig einen Funktionsnamen, der bereits importiert wurde.
Vereinfachtes Debuggen
: Beim Debuggen werden keine zusätzlichen, nicht verwendeten Variablen und Funktionen angezeigt.


### Modulname importieren

In Python ist es ebenfalls möglich, ein Modulname zu importieren:

```py live_py slim
import math

print('Zahl:', 13.1)
print('Abgerundet:', math.floor(13.1))
print('Aufgerundet:', math.ceil(13.1)) 
```

Um nun die Funktion `ceil` aus dem Modul `math` aufzurufen, muss `math.ceil()` geschrieben werden. Da dies oft zu viel zu schreiben gibt, kann beim Importieren auch ein selbst gewählter Name verwendet werden, bspw. `m`:


```py live_py slim
import math as m # das Math-Modul ist nun über den Namen "m" aufrufbar

print('Zahl:', 13.1)
print('Abgerundet:', m.floor(13.1))
print('Aufgerundet:', m.ceil(13.1)) 
```


## Unterprogramm aufrufen

Alle Funktionen in Python sind nach demselben Schema aufgebaut:

- einen Befehlsnamen
- runde Klammern
- _optional_ in den runden Klammern eine Auflistung\* von Parametern, die auch leer sein darf.

```py live_py slim
from turtle import *
forward(30)
penup()
goto(20, 30)
pendwon()
forward(30)
```

## Wiederholungen: `for`-Schleife
Mit einer Schleife können Befehle eine bestimmte Anzahl Mal wiederholt werden.

:::flex{min=300px gap=50px}
```py live_py slim
from turtle import *

for i in range(4):
    forward(100)
    left(90)
```
::br --alignSelf=end --flex-grow=0.3
<Strukto program={[
    {
        type: 'repeat', 
        code: <span><u>4</u> mal wiederholen:</span>,
        block: [
            {type: 'step', code: <span><u>100</u> Schritte vorwärts</span>},
            {type: 'step', code: <span><u>90</u>° nach links</span>},
        ]
    }
]} />
:::

## Grundrechenoperationen
Die Grundrechenoperationen werden in Python wie folgt geschrieben:

<div className="slim-table">

| Operation      | mathematisch | Python   |
| :------------- | :----------- | :------- |
| Addition       | $a + b$      | `a + b`  |
| Subtraktion    | $a - b$      | `a - b`  |
| Multiplikation | $a \cdot b$  | `a * b`  |
| Division       | $a ÷ b$      | `a / b`  |
| Potenz         | $a^b$        | `a ** b` |

</div>


#### Beispiele
:::flex{min=300px}
```py live_py slim
print('2 + 13 =', 2 + 13) 
```
::br
```py live_py slim
print('17 - 9 =', 7 - 9) 
```
::br
```py live_py slim
print('312 ⋅ 7 =', 312 * 7) 
```
::br
```py live_py slim
print('231 ÷ 3 =', 231 / 3) 
```
::br
```py live_py slim
print('2^8 =', 2 ** 8) 
```
::br --empty
:::

[^1]: Quelle: [Wikipedia](https://en.wikipedia.org/wiki/Wildcard_character)