---
sidebar_custom_props:
  id: 80be419e-835c-48e6-9aef-33cc91af5d3d
---

# 9. ⭐️ While

import Strukto from '@site/src/components/struktogramm/Strukto';

## Wiederholen, solange die Frage mit "Ja"  beantwortet wird
Eine Wiederholung mit einer Frage führt einen Codeblock so lange aus, bis die Frage nicht mehr mit "Ja" beantwortet wird.
Im folgenden Beispiel wird solange eine Spirale gezeichnet, bis die Distanz der Turtle vom Zentrum mehr als `200px` beträgt.

:::danger Unendliche Schleife
Diese Art von Wiederholung kann dazu führen, dass eine Frage immer mit "Ja" beantwortet wird und das Programm also nie endet.

Oft ist dies nicht gewollt, doch einmal gestartet, ist es dann in der Browser-Version von Python schwierig, das Programm zu stoppen und die ganze Seite reagiert nicht mehr. Um das Programm zu Dies gelingt:
Oft ist dies nicht gewollt, doch einmal gestartet, ist es dann in der Browser-Version von Python schwierig, das Programm zu stoppen und die ganze Seite reagiert nicht mehr. Um das laufende Programm zu stoppen, muss:
- der ganze Tab geschlossen und die Seite in einem neuen Tab geöffnet werden. (*Tipp*: Die URL zuerst kopieren...)
- (den ganzen Browser über den Taskmanager schliessen)
:::

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
<Answer type="state" webKey="8ca0706a-e5a3-4437-b23a-4537e550f774" />

Probieren Sie es aus und spielen Sie mit dem Schrumpf-Faktor `0.99` im obigen Bispiel.

```py live_py title=Spirale.py id=a9d06428-a918-450e-accc-99c81b5d07c7
from turtle import *

winkel = 20
while distance(0, 0) < 200:
    forward(5)
    left(winkel)
    winkel = winkel * 0.99
```

1. Wann gibt es mehr/weniger Windungen?
2. Wann entsteht eine unendliche Schleife?

<Answer type="text" webKey="e1247ee5-d13f-495b-b340-7a425b71d08d" toolbarAdd={{code: 1}}/>
:::

## Wiederholungen mit der `while`-Schleife

Mit der `while`-Schleife können alle Wiederholungen, die mit der `for i in range(...):` Syntax erzeugt wurden, ebenfalls erzeugt werden. Dabei muss aber jeweils eine Variable, z.B. `i`, verwendet werden, welche sich die Anzahl Wiederholungen merkt. Natürlich muss diese Variable dann bei jeder Wiederholung um eins hochgezählt werden. Eine solche Variable, die bei jeder Wiederholung erhöht wird, wird **Schleifenzähler** oder **Laufvariable** genannt.

```py live_py slim
from turtle import *

i = 0
while i < 4:
    forward(100)
    left(90)
    i = i + 1
```

::::aufgabe `for` zu `while`
<Answer type="state" webKey="5c7d2980-3842-4b79-b1af-69ddad459b21" />

Schreiben Sie das untenstehende Programm so um, dass nur noch `while` Schleifen verwendet werden.

:::flex --columns=2 --min-width=200px
```py live_py slim
from turtle import *

forward(30)
left(60)

for i in range(5):
    forward(100)
    left(72)
    backward(20) 
```
***

```py live_py title=to-while.py id=2f288418-a751-4955-91e6-44ef58a2844b
from turtle import *
```
:::

<Solution webKey="1a34bc16-5fb1-4e2e-bf0e-9a08455e7579">

```py live_py slim
from turtle import *

forward(30)
left(60)
i = 0
while i < 5:
    forward(100)
    left(72)
    backward(20)
    i = i + 1
```

</Solution>

::::

::::aufgabe `while` zu `for`
<Answer type="state" webKey="2c3ce7d3-264f-4607-b789-20e8ab1985d8" />

Schreiben Sie das untenstehende Programm so um, dass nur noch `for` Schleifen verwendet werden.

:::flex --columns=2 --min-width=200px
```py live_py slim
from turtle import *

speed(10)

def move(x, y):
    penup()
    goto(x, y)
    pendown()

def quadrat():
    i = 0
    while i < 4:
        forward(20)
        left(90)
        i = i + 1

zeile = 0
while zeile < 5:
    spalte = 0
    while spalte < 3:
        move(zeile * 20, spalte * 20)
        quadrat()
        spalte = spalte + 1
    zeile = zeile + 1
```
***

```py live_py title=to-while.py id=729af77c-0c3b-46f9-b95a-35d86be96cde
from turtle import *
```
:::

<Solution webKey="1a34bc16-5fb1-4e2e-bf0e-9a08455e7579">

```py live_py slim
from turtle import *

speed(10)

def move(x, y):
    penup()
    goto(x, y)
    pendown()

def quadrat():
    for i in range(4):
        forward(20)
        left(90)

for zeile in range(5):
    for spalte in range(3):
        move(zeile * 20, spalte * 20)
        quadrat()
```
</Solution>
::::

## Anwendung

Die `while`-Schleife kommt oft bei Benutzerinteraktionen, Simulationen oder bei sich dynamisch ändernden Daten vor. Sonstige Wiederholungen lassen sich normalerweise einfacher mit einer `for`-Schleife umsetzen.

:::aufgabe Ratespiel
<Answer type="state" webKey="f5a8546d-ad02-47c9-a35a-9f680cffe497" />

Ändern Sie das Ratespiel aus dem Kapitel [Verzweigungen](008-verzweigung.md#ratespiel) so ab, dass die Spieler:in unendlich viele Versuche hat um die Zahl zu finden.

Wurde die gesuchte Zahl gefunden, soll die Anzahl Versuche zurückgemeldet werden.

<Solution webKey="1a34bc16-5fb1-4e2e-bf0e-9a08455e7579">

```py live_py slim
from browser import alert
from random import randint 

zahl = randint(0, 100)
geraten = -1
i = 0
while geraten != zahl:
    i = i + 1
    geraten = input(f'{i} Versuch: Gib eine ganze Zahl zwischen 0 und 100 ein.')
    geraten = int(geraten)
    
    if geraten == zahl:
        break
    elif geraten > zahl:
        alert(f'Die eingegebene Zahl {geraten} ist zu gross')
    else:
        alert(f'Die eingegebene Zahl {geraten} ist zu klein')

alert(f'Du hast insgesamt {i} Versuche gebraucht um die Zahl {zahl} zu finden.')
```

</Solution>
:::
