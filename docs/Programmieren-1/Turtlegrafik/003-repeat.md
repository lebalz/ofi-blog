---
title: Wiederholung 🔁
---

import Strukto from '@site/src/components/struktogramm/Strukto';
import Flex from '@site/src/components/Flex';
import Finding from "@site/src/components/Finding";
import Answer from "@site/src/components/Answer";


# Wiederholung 🔁

In der [Aufgabe 8](001-intro.md#aufgaben) haben Sie eine Treppe gezeichnet. Ihr Programm sieht vermutlich etwa wie folgt aus:

:::flex --min=250px --justify=space-between --align=center
***
```py live_py slim
from turtle import *

left(90)
forward(17)
right(90)
forward(29)
left(90)
forward(17)
right(90)
forward(29)
left(90)
forward(17)
right(90)
forward(29)
left(90)
forward(17)
right(90)
forward(29)
left(90)
forward(17)
right(90)
forward(29)
```
***--empty --grow=0.5 --min=50px
***
![](images/stairs.svg)
:::

<Finding title="Was stellen Sie beim Treppen-Programm fest?">

- Das Programm ist lang
- man sieht nicht auf einen Blick,
  - wie viele Stufen die Treppe hat
  - ob alle Stufen gleich breit und hoch sind
- Um die Stufenbreite oder die Stufenhöhe anzupassen, müssen viele Zeilen verändert werden
- Es kommt immer wieder dieselbe Sequenz vor:
    ```py
    left(90)
    forward(17)
    right(90)
    forward(29)
    ```
- **wir sind zu faul, um immer wieder dieselbe Sequenz aufzuschreiben (oder zu Copy&Pasten)**

</Finding>

## Wiederholen von Sequenzen

Ein Algorithmus kann Sequenzen wiederholt ausführen. In Python wird die zu wiederholende Sequenz **Codeblock** genannt.

:::flex --min=300px
```py live_py slim
from turtle import *

for i in range(5):
    left(90)
    forward(17)
    right(90)
    forward(29)
```
***--empty --grow=0.5 --min=50px
***
<Strukto program={[
    {
        type: 'repeat', 
        code: <span><u>5</u> mal wiederholen:</span>,
        block: [
            {type: 'step', code: <span><u>90</u>° nach links</span>},
            {type: 'step', code: <span><u>17</u> Schritte vorwärts</span>},
            {type: 'step', code: <span><u>90</u>° nach rechts</span>},
            {type: 'step', code: <span><u>29</u> Schritte vorwärts</span>}
        ]
    }
]} />
:::

:::def `for i in range(n):`
Mit `for i in range(n):` wird eine wiederholte Ausführung vorbereitet. Der nachfolgende **Codeblock** wird `n` Mal wiederholt, bevor weitere Anweisungen ausgeführt werden.
**Alles, was wiederholt werden soll, muss eingerückt sein.**

#### Beispiel
```py live_py slim
from turtle import *
for i in range(4):
    forward(50)
    left(90) 
```
:::

:::aufgabe Struktogramm → Python

Übersetzen Sie das Struktogramm in ein Python Programm. Was entsteht?

<Flex>
<div style={{flexGrow: 1, minWidth: '300px'}}>

```py live_py title=wiederholung.py
from turtle import *


```

</div>
<div style={{flexGrow: 1, flexShrink: 100}}></div>
<div style={{flexGrow: 1, flexShrink: 0}}>
<Strukto program={[
    {
        type: 'repeat', 
        code: <span><u>9</u> mal wiederholen:</span>,
        block: [
            {type: 'step', code: <span><u>100</u> Schritte vorwärts</span>},
            {type: 'step', code: <span><u>160</u>° nach links</span>}
        ]
    },
    {type: 'step', code: 'Turtle verstecken'}
]} />
</div>
</Flex>
:::


:::aufgabe 1. Python → Struktogramm
Zeichnen Sie für folgendes Programm ein Struktogramm (auf ein Blatt Papier).

```py live_py slim
from turtle import *

forward(30)
left(60)

for i in range(5):
    forward(100)
    left(72)
    backward(20) 
```
:::

:::aufgabe 2. Python → Struktogramm
Zeichnen Sie auch für folgendes Programm ein Struktogramm.

```py live_py slim
from turtle import *

for i in range(5):
    left(72)
    for i in range(4):
        forward(20)
        left(90)
    forward(100) 
```
:::


:::aufgabe 3. Treppe vol. 2
Zeichnen Sie eine Treppe 20 Stufen. Die Treppe soll bei den Koordinaten `(-200, -200)` starten. Wählen Sie die Stufen-Breiten so, dass der verfügbare Platz möglichst gut ausgenutzt wird.

![](images/treppe2_py.svg)

```py live_py title=treppe2.py
from turtle import *

```

> Trick: Verwenden Sie den Befehl [`goto(x, y)`](100-turtle-commands.md#goto) um die Turtle bei `-200, -200` zu positionieren.

:::

:::aufgabe 4. Schneestern
Zeichnen Sie einen Stern. Verwenden Sie dabei den Befehl `backward()`.

![](images/schneestern_py.svg)

```py live_py title=schneestern.py
from turtle import *

```
:::


:::aufgabe 5. Weihnachtsstern
1. Zeichnen Sie einen Weihnachtsstern mit den Drehwinkeln `140°` und `80°`.
2. Füllen Sie den Stern mit Ihrer Lieblingsfarbe. Schauen Sie sich dazu den Abschnitt "Füllen" unter [Turtle Befehle](./100-turtle-commands.md#füllen) an.

![](images/weihnachtsstern_py.svg)

```py live_py title=weihnachtsstern.py
from turtle import *

```
:::

:::aufgabe 6. Quadrate
1. Zeichnen Sie folgende Leiter.
2. Können Sie das Programm mit noch weniger Zeilen Code schreiben?
3. Schaffen Sie es, nur 6 Zeilen Code zu verwenden?

![](images/leiter_py.svg)

```py live_py title=leiter.py
from turtle import *

```
:::

:::aufgabe 7. Perlenkette
Zeichnen Sie eine Perlenkette in Ihrer Lieblingsfarbe, die aus `18` Perlen (dots) besteht.

```py live_py title=perlenkette.py
from turtle import *

```
<Finding title="Hinweise">

- Die Turtle muss nach 18 Drehungen wieder nach rechts schauen - pro Drehung also `xxx` Grad
- Python kann auch rechnen 😋 - lassen Sie die Drehung von Python berechnen. Beispiel: `left(360 / 4)` ist dasselbe wie `left(90)`

</Finding>
:::

:::aufgabe 8. Vogel
Zeichnen Sie einen Vogel, indem Sie mehrmals nacheinander folgende Befehle wiederholen:

```py
forward(2)
right(3)
```

![](images/vogel_py.svg)

```py live_py title=vogel.py
from turtle import *

```

:::
