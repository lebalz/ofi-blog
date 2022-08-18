---
sidebar_label: 6. Parameter
sidebar_custom_props:
  id: 9b50ed64-97d3-44d9-bd4c-25fa495af9ae
---

import Strukto from '@site/src/components/struktogramm/Strukto';

# 6. Parameter

Ein weiteres Strukturelement eines Algorithmus sind [**Parameter**](../01-Algorithmen/01-Algorithmus.md#struktur). Die Verwendung von Parametern haben wir bereits in Aktion gesehen -  im Struktogramm sind alle Parameter <u>unterstrichen</u>, in Python werden alle Parameter als Liste, abgetrennt mit Kommas, in den <u>runden Klammern</u> geschrieben.

:::info [Zur Erinnerung](../01-Algorithmen/01-Algorithmus.md#struktur)
**Parameter ⊕ ⊖**: Das Ergebnis eines Algorithmus kann variiert werden durch Werte, welche bei jeder Ausführung neu festgelegt werden.

**Beispiel**: Bei einem Online-Rezept kann der Parameter *Anzahl Personen*  mit den Knöpfen `⊕` und `⊖` variiert werden - die Mengenangaben werden dann aktualisiert. 
:::

:::aufgabe
Markieren Sie im folgenden Programm (links) wie folgt:
- Parameter <u>unterstreichen</u>
- Befehlsnamen <span style={{background: 'yellow'}}>gelb</span> markieren

:::flex --min=300px

<Answer type="text" webKey="3995f76b-464e-40b8-8b48-7dbc53763d18" monospace toolbar={{background:1, underline:1}}>

from turtle import *<br/>
<br/>
goto(20, 30)<br/>
for i in range(5):<br/>
&nbsp;&nbsp;&nbsp;left(90)<br/>
&nbsp;&nbsp;&nbsp;forward(17)<br/>
&nbsp;&nbsp;&nbsp;right(90)<br/>
&nbsp;&nbsp;&nbsp;forward(29)<br/>

</Answer>

*** --empty --grow=0.5 --min=50px
***
```py live_py slim
from turtle import *

goto(20, 30)
for i in range(5):
    left(90)
    forward(17)
    right(90)
    forward(29)
```

:::

<Solution webKey="9ade393f-3a94-4b7f-87f5-114ffc4f1e60">

![7 Parameter, 6 Befehlsnamen --width=200px](images/06-aufgabe1-lsg.png)
</Solution>
:::


Wie können Unterprogramme geschrieben werden, die Parameter akzeptieren?

Untersuchen Sie die folgenden Unterprogramme (führen Sie diese aus!) und notieren Sie sich, was Sie feststellen.


:::aufgabe Unterprogramme mit Parametern

`hello.py`
```py live_py slim
def hallo(name):
    print('Hallo', name)

hallo('Maria')
hallo('Reto')
hallo('Hans')
```
`rechnen.py`
```py live_py slim
def quotient(zahl1, zahl2):
    print(zahl1, ':', zahl2, '=', zahl1 / zahl2)

quotient(2, 3)
quotient(5, 9)
quotient(12, 20 + 4)
```

⭐️ Was sind die Parameter bei `quotient(12, 20 + 4)`? In welcher Reihenfolge werden diese verrechnet? 

<Answer type="text" webKey="bdc8ef98-1690-49c0-bc81-8b3e50d758fc" />
<Solution webKey="9ade393f-3a94-4b7f-87f5-114ffc4f1e60">

- Die beiden übergebenen Parameter sind `12` und `24`.
- Bevor die Parameter übergeben werden, werden diese jeweils ausgewertet, daher zuerst wird `20 + 4` berechnet und das Resultat `24` als Parameter übergeben.

</Solution>

:::


## Unterprogramme mit Parametern

Parameter sind also Werte, die an ein Unterprogramm **übergeben** werden können. Damit der übergebene Wert im Unterprogramm **wiederverwendet** werden kann, braucht jeder Parameter einen Namen. Der Wert ist dann über diesen Namen abrufbar. Der Parametername ist frei wählbar, sollte aber seine Bedeutung wiederspiegeln.

Beispiel:

```py live_py slim
from turtle import *

def quadrat(size):
    for i in range(4):
        forward(size)
        left(90)

color('red')
quadrat(50) # ein Quadrat mit der Grösse 50 zeichnen

color('blue')
quadrat(100) # ein Quadrat mit der Grösse 100 zeichnen
```

## Mehrere Parameter

Manchmal ist es praktisch (oder auch nötig), mehrere Parameter an ein Unterprogramm zu übergeben. Das haben wir etwa beim Befehl `goto(x, y)` bereits gesehen. Beim obigen Programm könnte etwa auch die Farbe direkt im Unterprogramm `square` gesetzt werden:

```py live_py slim
from turtle import *

def quadrat(size, farbe):
    color(farbe)
    for i in range(4):
        forward(size)
        left(90)

quadrat(50, 'red')  # ein rotes Quadrat mit der Grösse 50 zeichnen
quadrat(100, 'blue') # ein blaues Quadrat mit der Grösse 100 zeichnen
```

Es ist prinzipiell möglich, beliebig viele Parameter nacheinander zu übergeben.

:::danger Häufige Fehler
Ein häufiger Fehler sind vergessene Kommas zwischen zwei Parameternamen. Dann entsteht ein **SyntaxError**. 
:::


:::aufgabe Parameternamen


:::cards --min-width=200px
*** --code --flex-grow=2
```py live_py title=sechseck.py id=fcd69fed-4ed9-4706-954e-c49cf1c8b764
from turtle import *

```
*** --overflow-y=auto --max-height=550px --flex-grow=1
1. Definieren Sie das Unterprogramm `sechseck(size)` welches ein Sechseck mit der Grösse `size` zeichnet. Rufen Sie das Programm mit `sechseck(20)` auf. 

    ![](images/06_sechseck_1.svg)
2. Erzeugen Sie nun `10` Sechsecke. Das kleinste Sechseck hat die Seitenlänge `10`, das grösste die Seitenläng `100`.

    ![](images/06_sechseck_2.svg)

3. Fügen Sie der Funktion `sechseck(size)` den Parameter `farbe` hinzu und erzeugen Sie mit folgendes Bild:

    ![](images/06_sechseck_3.svg)

    Farben: `violet, indigo, blue, green, lime, lightgreen, yellow, orange, orangered, red`

    ❓ In welcher Reihenfolge müssen die Sechsecke gezeichnet werden, damit genau das obige Bild entsteht?

    **Tipp**: Die Stiftdicke können Sie mit `pensize(10)` auf `10` setzen.
 
:::
<Solution webKey="9ade393f-3a94-4b7f-87f5-114ffc4f1e60">

```py live_py slim
from turtle import *

speed(10)

def sechseck(size, farbe):
    color(farbe)
    for i in range(6):
        forward(size)
        left(60)

pensize(10)

sechseck(100, 'violet')
sechseck(90, 'indigo')
sechseck(80, 'blue')
sechseck(70, 'green')
sechseck(60, 'lime')
sechseck(50, 'lightgreen')
sechseck(40, 'yellow')
sechseck(30, 'orange')
sechseck(20, 'orangered')
sechseck(10, 'red')
```
</Solution>

:::

## Wiederholungen

:::finding Wiederholung: 🔁 Wiederholte Ausführung
Mit `for i in range(n):` wird eine wiederholte Ausführung vorbereitet. Der nachfolgende **Codeblock** wird `n` Mal wiederholt.
```py live_py slim
from turtle import *
for i in range(4):
    forward(50)
    left(90) 
```
:::

Wozu steht eigentlich das `i` im `for i in range(4)`? Das ist fast wie ein Parameter: `i` enthält die Anzahl bereits ausgeführter Wiederholungen.

:::cards --min-width=220px
Während Wiederholung 1: `i=0`, keine Wiederholung abgeschlossen ist.
![](images/06-repeat-0.svg)
***
Während Wiederholung 2: `i=1`, eine Wiederholung ist bereits abgeschlossen.
![](images/06-repeat-1.svg)
***
Während Wiederholung 3: `i=2`, zwei Wiederholungen sind bereits abgeschlossen.
![](images/06-repeat-2.svg)
***
Während Wiederholung 4: `i=3`, drei Wiederholungen sind bereits abgeschlossen.
![](images/06-repeat-3.svg)
:::

Der Wert, welcher in `i` steht, kann auch verwendet werden:

```py live_py slim
from turtle import *

def quadrat(size):
    for i in range(4):
        forward(size)
        left(90)

for i in range(10):
    quadrat(i * 10 + 10)
```

<details>
<summary>⭐️ Zusatzparameter von <code>range()</code></summary>

:::def
### `range(start, ende, schritt)`
Der Befehl `range` kann mit bis zu drei Parametern arbeiten, wobei `start` der erste verwendete Wert, `ende` das obere ganzzahlige Limit angibt, welches aber selber nie erreicht wird! und `schritt` den Abstand zwischen zwei Zahlen angibt.
```py live_py slim
for i in range(2, 11, 3):
    print(i)
```

Im obigen Beispiel startet `i` bei `2` und wird solange um `3` erhöht, bis die Zahl `11` erreicht oder überschiesst. 

**! 11 wird nicht angenommen**.

:::

</details>


:::aufgabe

1. Kopieren Sie die Definition eines Hauses aus der letzten Übung in dieses Programm. Modifizieren Sie das Unterprogramm `haus(size)` so ab, dass nun die Grösse des Hauses spezifiziert werden kann. Die Wurzel einer Zahl kann mit `sqrt(zahl)` berechnet werden.
2. Schreiben Sie ein Unterprogramm `move(x, y)`, welches die Schritte
   1. Stift heben
   2. zur Position `x`, `y` gehen
   3. Stift senken  
   
   zusammenfasst. 
3. Mit dem Befehl `randint(min, max)` aus der Bibliothek `random` kann eine zufällige ganze Zahl erzeugt werden. Dabei muss der kleinst und der grösstmögliche Wert angegeben werden. Mit `move(randint(-20, 20), randint(-20, 20))` kann also die Turtle an eine beliebige Position verschoben werden. Zeichnen Sie 20 Häuser an zufälligen Positionen mit der Grösse `30`.

![Stadt --width=300px](images/06_house_city.png)

4. Wählen Sie nun auch die Grösse zufällig: `haus(randint(10, 100))`
5. Nun soll auch noch die Farbe zufällig gewählt werden. Der Befehl `choice` aus der Bibliothek `random` gibt jeweils ein zufälliges Element einer Liste zurück: `choice([1, 3, 5, 7, 9])` etwa wählt zufällig eine ungerade Zahl zwischen 1 und 10 aus. Die Liste der Farben:
```py
['violet', 'indigo', 'blue', 'green', 'lime', 'lightgreen', 'yellow', 'orange', 'orangered', 'red']
```

```py live_py title=stadt.py id=125d0c61-4e44-4e13-90bf-e1c99e4bb581
from turtle import *
from math import sqrt
from random import randint, choice

```
<Solution webKey="9ade393f-3a94-4b7f-87f5-114ffc4f1e60">

```py live_py slim
from turtle import *
from math import sqrt
from random import randint, choice 

def move(x, y):
    penup()
    goto(x, y)
    pendown()

def haus(size):
    # Viereck zeichnen
    for i in range(4):
        forward(size)
        left(90)
    # Diagonale 1
    left(45)
    forward(sqrt(2) * size)
    # Hausdach
    left(90)
    forward(sqrt(2) * size / 2)
    left(90)
    forward(sqrt(2) * size / 2)
    # Diagonale 2
    left(90)
    forward(size * sqrt(2))
    # wieder nach rechts schauen
    left(45)

# Die Programmausführung beginnt hier
speed(20)
pensize(3)

for i in range(30):
    pencolor(choice(['violet', 'indigo', 'blue', 'green', 'lime', 'lightgreen', 'yellow', 'orange', 'orangered', 'red']))
    move(randint(-250, 250), randint(-250, 250))
    haus(randint(10, 100))
```
</Solution>

:::


:::aufgabe ⭐️ Zusatz
Zeichnen Sie folgende Quadrate. Auf wie viele Zeilen können Sie Ihr Programm kürzen?

![](images/06_squares.svg)

```py live_py title=quadrate.py id=a64133e9-5b2e-415a-a884-2671bdb3027e
from turtle import *
```
<Solution webKey="9ade393f-3a94-4b7f-87f5-114ffc4f1e60">

```py live_py slim
from turtle import * 

def move(x, y):
    penup()
    goto(x, y)
    pendown()

for i in range(1, 11):
    move(i * 10, -i * 10)
    for n in range(4):
        left(90)
        forward(i * 20)
```
</Solution>

:::
