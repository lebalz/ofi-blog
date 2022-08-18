---
sidebar_label: 10. Repetitionsfragen 
sidebar_custom_props:
  id: b4d081fd-943b-42de-a587-a91321b06fa3
---

# 10. Repetition

import Strukto from '@site/src/components/struktogramm/Strukto';

# 10. Repetitionsfragen

## Algorithmus

1. Was ist ein Algorithmus?
2. Welche 5. Strukturelemente enthält ein Algorithmus?
3. Erstellen Sie einen Algorithmus für das Zusammenfalten eines T-Shirts.
<Answer type="text" webKey="fc3fa312-7e89-421d-96eb-a799f502d1e1" />

## Code Lesen

1. In welchem Code-Teil wird das Viereck mit der Stiftdicke `5` gezeichnet.
2. Welche Seitenlänge hat das Dreieck mit Stiftdicke `7`?
3. Bei welchen Koordinaten wird das Fünfeck mit Stiftdicke `3` gezeichnet?
4. Fügen Sie ein Quadrat mit der Seitenlänge `20` bei der Koordinate `(20, 10)` und der Stiftdicke `3` hinzu.
5. Unterstreichen Sie in den Zeilen `1-12` alle **Parameter**
6. Markieren Sie in den Zeilen `1-12` alle **Befehlsnamen**


![Turtle Ausgabe](images/09-code-output.svg)

```py
from turtle import *

def move(x, y):
    penup()
    goto(x, y)
    pendown()

pensize(2)
for i in range(3):
    forward(18)
    left(120)
move(-20, 30)

pensize(5)
for i in range(4):
    forward(27)
    left(90)

move(30, 10)
for i in range(5):
    forward(13)
    left(72)

move(80, 80)
pensize(3)
for i in range(4):
    forward(77)
    left(90)

move(-40, -20)
for i in range(5):
    forward(23)
    left(72)

move(-80, 80)
pensize(7)
for i in range(3):
    forward(44)
    left(120)
```

<Answer type="text" webKey="9a817631-40e8-4f41-8dc7-2285b9c1e8f1" toolbar={{code: 1, color: 1, background: 1, bold: 1, italic: 1, underline: 1}} />

<Solution webKey="9dd6cc59-3264-4243-b654-d1ddcda0912d">

1. Zeilen `15-17`
2. `44`
3. `(-40, -20)`
4.  
    ```py
    move(20, 10)
    pensize(3)
    for i in range(4):
        forward(20)
        left(90)
    ```

</Solution>


## Code Ausführen
Zeichnen Sie die Ausgabe des folgenden Programms

```py
from turtle import *

def square():
    for i in range(4):
        forward(10)
        right(90)

forward(30)
left(90)
forward(10)
right(90)

for i in range(3):
    forward(10)
    right(90)
    forward(10)
    left(90)
    forward(10)
    left(90)
    forward(10)
    right(90)

left(90)
square()
```

![](images/09-coord.svg)

<Solution webKey="9dd6cc59-3264-4243-b654-d1ddcda0912d">

```py live_py slim
from turtle import *

def square():
    for i in range(4):
        forward(10)
        right(90)

forward(30)
left(90)
forward(10)
right(90)
for i in range(3):
    forward(10)
    right(90)
    forward(10)
    left(90)
    forward(10)
    left(90)
    forward(10)
    right(90)
left(90)
square()
```

</Solution>

## Struktogramm

Zeichnen Sie für folgende Ausgangslage ein Struktogramm:

> Die Benutzer:in wird nach ihrer Lieblingszahl gefragt. Die eingegebene Zahl wird verdoppelt und mit 3 addiert. So oft zeichnet man nun 55 Schritte vorwärts mit einer Drehung um 113° am Ende.

Zusatz:
Anstatt `113°` soll soviel gedreht werden, dass eine geschlossene Figur entsteht. 

<Solution webKey="9dd6cc59-3264-4243-b654-d1ddcda0912d">

<Strukto program={[
    {type: 'input', code: <span><span className="var">zahl</span> = Geben Sie Ihre Lieblingszahl ein</span>},
    {type: 'step', code: <span><span className="var">zahl</span> mal 2 und plus 3 rechnen</span>},
    {
        type: 'repeat', 
        code: <span><u><span className="var">zahl</span></u> mal wiederholen:</span>,
        block: [
            {type: 'step', code: <span><u>55</u> Schritte vorwärts gehen</span>},
            {type: 'step', code: <span><u>113</u>° nach rechts drehen</span>}
        ]}
]} />

```py live_py slim
from turtle import *

zahl = input('Geben Sie Ihre Lieblingszahl ein')
zahl = int(zahl)
zahl = zahl * 2 + 3

for i in range(zahl):
    forward(15)
    right(113)
    # right(360 / zahl)

```

</Solution>

---

## Programmieren (am PC)

:::def
### Text vervielfachen
In Python kann Text verfielfältigt werden, indem er mit der gewünschten Anzahl wiederholungen multipliziert wird:

```py live_py slim
print('Hallo' * 3)
print('🌲 ' * 24)
```
:::

Schreiben Sie einen Befehl `dreieck`, der ein Dreieck in Textform ausgibt. Die Grösse des Dreiecks soll als Parameter übergeben werden können.

```py live_py title=dreieck.py versioned id=7fa89fa8-b8ae-4939-94de-df8e00ae57d4

```

Prüfen Sie ihr Programm mit folgendem Code:
```py
dreieck(1)
dreieck(3)
dreieck(5)
```

sollte die folgende Ausgabe erzeugen:
```
*
* 
* *
* * *
* 
* *
* * *
* * * *
* * * * *
```

<Solution webKey="9dd6cc59-3264-4243-b654-d1ddcda0912d">

```py live_py slim

def dreieck(grösse):
    # grösse mal wiederholen
    for i in range(grösse):
        # i beginnt bei 0, deswegen +1 rechnen
        print('*' * (i + 1))

dreieck(1)
dreieck(3)
dreieck(5)
```

</Solution>
