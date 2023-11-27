---
sidebar_custom_props:
  id: 1df76494-f468-457a-98e0-bc527bf48697
---

import Strukto from '@site/src/components/struktogramm/Strukto';

# Sprachelemente

## Import-Befehl
Um vordefinierte Python-Befehle aus einer Bibliothek (ein sog. Python Modul) zu verwenden, müssen diese importiert werden. Dies geschieht mit dem Import-Befehl:

```py
from turtle import *
```

<details>
<summary>⭐️ Einzelne Befehle importieren</summary>
Es ist auch möglich, nur einzelne Befehle (Unterprogramme) aus einer Bibliothek zu importieren.

```py live_py slim
from math import floor, ceil

print('Zahl:', 13.1)
print('Abgerundet:', floor(13.1))
print('Aufgerundet:', ceil(13.1)) 
```

Dies hat den Vorteil, dass eine andere Betrachter:in eine bessere Übersicht erhält, von wo welcher Befehl importiert wurde. Bei uns ist dies allerdings vernachlässigbar.
</details>

## Unterprogramm aufrufen

Alle Befehle (=Unterprogramme) in Python sind nach demselben Schema aufgebaut:

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

:::flex[--min=300px --gap=50px]
```py live_py slim
from turtle import *

for i in range(4):
    forward(100)
    left(90)
```
*** --alignSelf=end --flex-grow=0.3
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
:::flex[--min=300px]
```py live_py slim
print('2 + 13 =', 2 + 13) 
```
***
```py live_py slim
print('17 - 9 =', 7 - 9) 
```
***
```py live_py slim
print('312 ⋅ 7 =', 312 * 7) 
```
***
```py live_py slim
print('231 ÷ 3 =', 231 / 3) 
```
***
```py live_py slim
print('2^8 =', 2 ** 8) 
```
*** --empty
:::
