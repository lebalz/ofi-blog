---
title: 9. While 🚧
---

import Strukto from '@site/src/components/struktogramm/Strukto';


## Wiederholen, solange die Frage mit "Ja"  beantwortet wird
Eine Wiederholung mit einer Frage führt einen Codeblock so lange aus, bis die Frage nicht mehr mit "Ja" beantwortet wird.
Im folgenden Beispiel wird solange eine Spirale gezeichnet, bis die Distanz der Turtle vom Zentrum mehr als `200px` beträgt.

:::flex --width=250px

<Strukto program={[
    {type: 'step', code: <span><span className="var">winkel</span> = 20 setzen</span>},
    {
        type: 'repeat', 
        code: <span>Ist der Abstand zum Zentrum kleiner als 200px?</span>,
        block: [
            {type: 'step', code: <span><u>5</u> Schritte vorwärts</span>},
            {type: 'step', code: <span><span className="var">winkel</span>° nach links</span>},
            {type: 'step', code: <span><span className="var">winkel</span> auf 99% des aktuellen Werts setzen</span>},
        ]
    }
]} />
***

```py live_py slim
from turtle import *

winkel = 20
while distance(0, 0) < 200:
    forward(5)
    left(winkel)
    winkel = winkel * 0.99
```
:::



Oft könnte man dies auch mit einer for-Schleife erreichen. Jedoch müsste man dann zuerst berechnen, wie viele Schritte nötig sind, bis dies der Fall ist. Im obigen Beispiel kann etwa der Schrumpf-Faktor (`0.99`) verändern, ohne die Frage (weniger als `200px` Abstand zum Zentrum?) zu ändern.

:::aufgabe
Probieren Sie es aus und spielen Sie mit dem Schrumpf-Faktor im obigen Bispiel.
:::
