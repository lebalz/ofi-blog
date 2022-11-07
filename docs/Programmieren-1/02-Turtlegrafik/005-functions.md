---
sidebar_custom_props:
  id: 28f1e765-b19f-4f82-8819-5dd4eec8cad5
  source:
    name: rothe.io
    ref: https://rothe.io/?b=prog1&p=416425
---

import Strukto from '@site/src/components/struktogramm/Strukto';

# 5. Unterprogramme 🏷

## Einführung
In einer Bildkomposition kommen Figuren wie Dreiecke und Quadrate mehrmals vor. Die Turtle weiss aber nicht, was ein Dreieck oder ein Quadrat ist. Da in der Bildkomposition die Dreiecke und Quadrate nicht systematisch angeordnet sind, ist die Verwendung von Wiederholungen hier nicht naheliegend.


:::cards --min-width=250px
*** --code
```py live_py slim
from turtle import *

fillcolor('red')
begin_fill()
for i in range(3):
    forward(50)
    left(120)
end_fill()

left(120)

fillcolor('green')
begin_fill()
for i in range(3):
    forward(50)
    left(120)
end_fill()

left(120)

fillcolor('blue')
begin_fill()
for i in range(3):
    forward(50)
    left(120)
end_fill()
```
*** --alignSelf=center
![](images/triangles.svg)
:::

**26 Zeilen Code?? Geht das nicht auch einfacher?**

**Es geht einfacher!** Es lassen sich nämlich neue Befehle festlegen, die z.B. ein Dreieck oder ein Quadrat zeichnen. 

:::flex --min-width=200px gap=50px
```py live_py slim
from turtle import *

def dreieck():
    begin_fill()
    for i in range(3):
        forward(50)
        left(120)
    end_fill()

fillcolor('red')
dreieck()

left(120)

fillcolor('green')
dreieck()

left(120)

fillcolor('blue')
dreieck()
```
*** --align-self=end
<Strukto program={[
    {
        type: 'def', 
        code: <span>dreieck</span>,
        block: [
            {type: 'step', code: <span>Starte Auffüllen</span>},
            {
                type: 'repeat',
                code: <span><u>3</u> mal wiederholen</span>,
                block: [
                    {type: 'step', code: <span><u>50</u> Schritte vorwärts</span>},
                    {type: 'step', code: <span><u>120</u>° nach links</span>}
                ]
            },
            {type: 'step', code: <span>Ende Auffüllen</span>}
        ]
    },
    {type: 'step', code: <span><u>rote</u> Füllfarbe</span>},
    {type: 'call', code: 'dreieck zeichnen'},
    {type: 'step', code: <span><u>120</u>° nach links</span>},
    {type: 'step', code: <span><u>grüne</u> Füllfarbe</span>},
    {type: 'call', code: 'dreieck zeichnen'},
    {type: 'step', code: <span><u>120</u>° nach links</span>},
    {type: 'step', code: <span><u>blaue</u> Füllfarbe</span>},
    {type: 'call', code: 'dreieck zeichnen'}
]} />
:::


:::aufgabe Aufgabe 1
<Answer type="state" webKey="4d9d75a8-8539-4541-aec8-5306c671b1d9" />

Im folgenden ist zweimal derselbe Algorithmus programmiert - links ohne Unterprogramme, rechts mit Unterprogrammen.

Ändern Sie beide Programme so ab, dass die Dreiecke doppelt so gross gezeichnet werden!

:::cards --basis=200px
*** --code
```py live_py title=sequentiell.py id=d60d5547-82d4-4a44-8413-c161b5627bc2 maxLines=55
from turtle import *

fillcolor('yellow')
begin_fill()
for i in range(3):
    forward(50)
    left(120)
end_fill()

left(60)

fillcolor('orange')
begin_fill()
for i in range(3):
    forward(50)
    left(120)
end_fill()

left(60)

fillcolor('red')
begin_fill()
for i in range(3):
    forward(50)
    left(120)
end_fill()

left(60)

fillcolor('purple')
begin_fill()
for i in range(3):
    forward(50)
    left(120)
end_fill()


left(60)

fillcolor('blue')
begin_fill()
for i in range(3):
    forward(50)
    left(120)
end_fill()


left(60)

fillcolor('green')
begin_fill()
for i in range(3):
    forward(50)
    left(120)
end_fill()
```
*** --code
```py live_py title=functions.py id=d42798ab-26d4-4eeb-bdcd-88c12952b5c4  maxLines=32
from turtle import *

def dreieck():
    begin_fill()
    for i in range(3):
        forward(50)
        left(120)
    end_fill()

fillcolor('yellow')
dreieck()
left(60)

fillcolor('orange')
dreieck()
left(60)

fillcolor('red')
dreieck()
left(60)

fillcolor('purple')
dreieck()
left(60)

fillcolor('blue')
dreieck()
left(60)

fillcolor('green')
dreieck()
left(60)
```
:::

Wie viele Zeilen mussten Sie im linken bzw. im rechten Programm ändern? Welche Vorteile sehen Sie bei der Verwendung von Unterprogrammen?
<Answer type="text" webKey="4cb362d4-2a3e-4144-93e4-038c17a8d880" />

<Solution webKey="66fd6dae-e03e-4751-b0f7-f2fb56ca7773">

**Vorteile** von Unterprogrammen
Verständlichkeit
: Sequenzen können beschriftet werden. Durch gut gewählte Namen kann das Programm verständlicher strukturiert werden.

Codequalität
: Änderungen und Korrekturen müssen nur an einem Ort gemacht werden. Vergessene Änderungen sind dadurch weniger wahrscheinlich - die Codequalität steigt!

</Solution>
:::

## Eigene Befehle definieren

Bei Python werden Befehle auch **Funktionen** genannt.

:::def
### `def name():`
Mit `def name():` wird ein neues Unterprogramm (ein neuer Befehl) definiert. Als Name sollte immer etwas gewählt werden, das die **Tätigkeit** dieser Sequenz widerspiegelt. Alle Anweisungen, die zum neuen Befehl gehören, müssen eingerückt sein!

**Beispiel:**

```py live_py slim
def zick_zack():  # <-- Doppelpunkt nicht vergessen!
    left(45)
    forward(50)
    right(90)
    forward(50)
    left(45)
```

:::caution Befehlsaufruf
Die Definition alleine führt das Programm noch nicht aus. Dazu muss der Befehl erst noch **aufgerufen** werden:



```py live_py slim
from turtle import *
def zick_zack():  # <-- Doppelpunkt nicht vergessen!
    left(45)
    forward(50)
    right(90)
    forward(50)
    left(45)
### PRE
zick_zack()
```
:::
:::

---

:::aufgabe Aufgabe 2: Struktogramm → Python
<Answer type="state" webKey="202aff44-4ffd-4368-b74c-ab6682d0c805" />

1. Erzeugen Sie ein Programm gemäss folgendem Struktogramm:

:::cards --min-width=200px

<Strukto program={[
    {
        type: 'def', 
        code: <span>stufe</span>,
        block: [
            {type: 'step', code: <span><u>95</u>° links</span>},
            {type: 'step', code: <span><u>20</u> Schritte vorwärts</span>},
            {type: 'step', code: <span><u>95</u>° rechts</span>},
            {type: 'step', code: <span><u>30</u> Schritte vorwärts</span>}
        ]
    },
    {type: 'step', code: <span><u>100</u> Schritte vorwärts</span>},
    {type: 'call', code: 'stufe zeichnen'},
    {type: 'call', code: 'stufe zeichnen'},
    {type: 'call', code: 'stufe zeichnen'}
]} />
*** --code
```py live_py title=befehl1.py id=e8dc1f0a-d2b6-4a2a-9461-e8cc96811530
from turtle import *
```
:::

2. Ändern Sie obiges Programm so, dass der Winkel einer Stufe neu `110°` beträgt.

   ![](images/05-stairs.svg)

3. Zeichnen Sie eine Treppe mit 30 Stufen. Denken Sie dabei auch an das letzte Kapitel (Stichwort: Wiederholungen!)

<Solution webKey="d32f5ea1-be5c-4928-87d6-f9d4e5bc5480">

**Bemerke**: Die Definition des Unterprogramms `stufe` führt den Code noch nicht aus, erst auf Zeile 10 wird das Unterprogramm **aufgerufen** und ausgeführt.

```py live_py slim
from turtle import *

def stufe():
    left(95)
    forward(20)
    right(95)
    forward(30)

forward(100)
stufe()
stufe()
stufe()
```
</Solution>

:::

:::aufgabe Aufgabe 3 – Sechsecke
<Answer type="state" webKey="b1940f0b-2d69-4d40-84fc-676bddc1b45a" />

:::cards --min-width=200px
*** --code --flex-grow=2
```py live_py title=sechseck.py id=6d4c82e3-ecaa-486e-a756-3a1a1a8a70fc
from turtle import *

```
*** --flex-grow=1 --max-height=500px --overflow-y=auto
1. Zeichnen Sie ein Sechseck

![](images/sechseck.svg)


2. Verschieben Sie die Sequenz, die das Sechseck zeichnet, in einen neuen Befehl namens `sechseck()`. Denken Sie daran, der neue Befehl muss aufgerufen werden, damit er ausgeführt wird.
3. Verwenden Sie den neuen Befehl, um die folgende Figur zu zeichnen, welche aus 10 Sechsecken besteht: 
![](images/sechsecke.svg)

<details><summary>Tipp</summary>

Nach jedem Sechseck muss `36°` gedreht werden.

</details>
:::

<Solution webKey="d32f5ea1-be5c-4928-87d6-f9d4e5bc5480">

```py live_py slim
from turtle import *

def sechseck():
    for i in range(6):
        forward(50)
        left(60)

for i in range(10):
    sechseck()
    left(36)
```
</Solution>

:::

:::aufgabe Aufgabe 4 – Häuser
<Answer type="state" webKey="1bc32c1a-0345-494d-85b3-883ea40151cd" />

Für diese Aufgabe können Sie als Ausgangslage Ihr Programm aus Kapitel 1, Aufgabe 6 "Haus von Nikolaus" verwenden.

:::cards --min-width=200px
*** --code --flex-grow=2
```py live_py title=stadt.py id=b5c82672-65db-4725-8ec9-7a80ac835b3d
from turtle import *

```
*** --flex-grow=1 --max-height=500px --overflow-y=auto
1. Definieren Sie einen Befehl `haus()`, der ein Haus des Nikolaus zeichnet:  
    **Achten** Sie darauf, dass die Turtle am Ende eines Häuschens jeweils unten rechts ist und nach rechts schaut.

![](images/haus_nikolaus.svg)



2. Zeichnen Sie nun 4 Häuser nacheinander in unterschiedlichen Farben.

![](images/stadt.svg)
:::

<Solution webKey="d32f5ea1-be5c-4928-87d6-f9d4e5bc5480">

```py live_py slim
from turtle import *

def haus():
    # Viereck
    for i in range(4):
        forward(50)
        left(90)
    # Diagonale 1
    left(45)
    forward(71)
    # Dach
    for i in range(2):
        left(90)
        forward(36)
    # Diagonale 2
    left(90)
    forward(71)
    # Drehen damit Turtle nach rechts schaut
    left(45)

color('red')
haus()
color('blue')
haus()
color('green')
haus()
color('orange')
haus()
```
</Solution>

:::

:::aufgabe Aufgabe 5 – Blume
<Answer type="state" webKey="5f71b333-fd7d-446e-998b-d65c69bec060" />

Sie werden in dieser Aufgabe unter der Verwendung mehrerer Unterprogramme eine komplexe Aufgabe schrittweise lösen.

:::cards --min-width=200px
*** --code --flex-grow=2
```py live_py title=blume.py id=b47c6d09-11ca-4bff-b676-09cb0d7399bf
from turtle import *

```
*** --overflow-y=auto --max-height=550px --flex-grow=1
1. Definieren Sie Unterprogramm `bogen()`, mit dem die Turtle einen Bogen zeichnet und sich dabei insgesamt um `90°` nach rechts dreht.

    ![](images/blume_01.svg)
2. Fügen Sie einen weiteren Befehl `blumenblatt()` hinzu, welches zwei Bögen zeichnet. Die Turtle sollte am Ende aber wieder in Startrichtung stehen.

    ![](images/blume_02.svg)
3. Ergänzen Sie `blumenblatt()` so, dass ein rot gefülltes Blatt gezeichnet wird. Setzen Sie mit [`pencolor`](100-turtle-commands.md#pencolorcolor) die Stiftfarbe ebenfalls auf rot, damit die Umrandungslinie die gleiche Farbe hat.

    ![](images/blume_03.svg)
4. Erweitern Sie das Programm mit dem Befehl `blume()`, so dass eine fünfblättrige Blume gezeichnet wird.

    ![](images/blume_04.svg)

5. ⭐️ Zusatz: Blume mit Stiel. Ergänzen Sie die Blume mit einem Stiel.

    ![](images/blume_05.svg)
:::

<Solution webKey="d32f5ea1-be5c-4928-87d6-f9d4e5bc5480">

```py live_py slim
from turtle import *

def bogen():
    for i in range(10):
        forward(10)
        left(9)

def blumenblatt():
    fillcolor('red')
    pencolor('red')
    begin_fill()
    for i in range(2):
        bogen()
        left(90)
    end_fill()

def blume():
    for i in range(5):
        blumenblatt()
        left(72)

blume()

# Zusatz
pencolor('black')
pensize(2)
right(45)
for i in range(10):
    forward(20)
    right(4)
```
</Solution>

:::



