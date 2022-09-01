---
sidebar_custom_props:
  id: 4ac09d00-bd4c-4920-bc98-21343e21549b
---

# 1. Einführung Python

Programmieren heisst, einer Maschine Befehle zu erteilen und sie damit zu steuern. Die erste solche Maschine, die Sie steuern, ist eine kleine Schildkröte (bzw. ein kleines Dreieck) auf dem Bildschirm: Die Turtle. Was kann diese Turtle und was musst du wissen, um sie zu steuern?

Turtlebefehle werden grundsätzlich Englisch geschrieben und enden immer mit einem Klammerpaar. Dieses enthält weitere Angaben zum Befehl. Selbst wenn keine weiteren Angaben nötig sind, muss ein leeres Klammerpaar vorhanden sein. Die Klein-/Grossschreibung muss exakt eingehalten werden.

Die Turtle kann sich innerhalb ihres Fensters bewegen und dabei eine Spur zeichnen. Um die Turtle zu bewegen, verwenden wir die drei Befehle `forward(distanz)`, `left(winkel)` und `right(winkel)`.

_Programmierkonzepte_: Quellprogramm editieren, Programm ausführen, Programmsequenz

## Das erste Programm

Das erste Python-Programm zeichnet ein Quadrat. Damit die Befehle zum zeichnen verwendet werden können, muss zuerst eine Datei mit den entsprechenden Befehlen (ein sogenanntes Modul) `turtle` geladen werden.

```py live_py slim title=Quadrat
from turtle import *

left(90)
forward(80)
left(90)
forward(80)
left(90)
forward(80)
left(90)
forward(80)
```

:::note `from turtle import *`

Damit Python die Befehle zum zeichnen verwenden kann, müssen diese zuerst aus einer Bibliothek **importiert** werden. Damit beim Importieren nicht jeder einzelne Befehl angegeben werden muss, wird das Zeichen `*` verwendet welches alle verfügbaren Befehle importiert.
:::

:::note Befehle: `forward`, `left`

Alle Befehle in Python sind nach demselben Schema aufgebaut:

- einen Befehlsnamen
- runde Klammern
- _optional_ in den runden Klammern eine Auflistung\* von Parametern, die auch leer sein darf.

```
       forward(90)
       \_____/  \
         /    Parameter (Bedeutung hier: 90 Schritte vorwärts)
Befehlsname

       penup()
       \___/ \
         /   kein Parameter
Befehlsname
```

\* werden mehrere Parameter übergeben, dann werden diese mit Kommas abgetrennt, z.B. `goto(20, 30)`

:::

:::aufgabe Aufgabe 1
<Answer type="state" webKey="240bbc14-fba9-4863-a522-efca0b1aa99e" />

Markieren Sie im untenstehenden Programm folgende Strukturmerkmale eines Algorithmus mit den vorgegebenen Farben:
Unterprogramme
: Aufrufe eines Unterprogramms mit <span className="badge badge--warning">orange</span>
Parameter
: Verwendete Parameter mit <span className="badge badge--success">grün</span>

<Answer type="text" webKey="4f612600-e1b1-4aa3-a3ca-30eded2c7652" theme="bubble" toolbar={{background: true}} style={{background: 'white', color: 'black'}}>

goto(20, 40)

write('Hello!')

forward(50)

left(135)

forward(50)

home()

dot()


</Answer>

<Solution webKey="57e04e8c-cc85-4bb3-aae1-cb68fcf758ed">
<div
  className="ql-editor"
  style={{fontSize: '13px', margin: '2em', padding: '1em', borderRadius: '4px', border: '1px solid black', background: 'white'}}
>
  <p>
    <span style={{ backgroundColor: "rgb(255, 194, 102)" }}>goto</span>(
    <span style={{ backgroundColor: "rgb(102, 185, 102)" }}>20</span>,{" "}
    <span style={{ backgroundColor: "rgb(102, 185, 102)" }}>40</span>)
  </p>
  <p>
    <span style={{ backgroundColor: "rgb(255, 194, 102)" }}>write</span>(
    <span style={{ backgroundColor: "rgb(102, 185, 102)" }}>'Hello!'</span>){" "}
    <em style={{ color: "rgb(136, 136, 136)" }}>
      # inklusive der Anführungszeichen!
    </em>
  </p>
  <p>
    <span style={{ backgroundColor: "rgb(255, 194, 102)" }}>forward</span>(
    <span style={{ backgroundColor: "rgb(102, 185, 102)" }}>50</span>)
  </p>
  <p>
    <span style={{ backgroundColor: "rgb(255, 194, 102)" }}>left</span>(
    <span style={{ backgroundColor: "rgb(102, 185, 102)" }}>135</span>)
  </p>
  <p>
    <span style={{ backgroundColor: "rgb(255, 194, 102)" }}>forward</span>(
    <span style={{ backgroundColor: "rgb(102, 185, 102)" }}>50</span>)
  </p>
  <p>
    <span style={{ backgroundColor: "rgb(255, 194, 102)" }}>home</span>()
  </p>
  <p>
    <span style={{ backgroundColor: "rgb(255, 194, 102)" }}>dot</span>()
  </p>
</div>
</Solution>
:::

:::aufgabe Aufgabe 2
<Answer type="state" webKey="80263b54-c75e-41d1-8ddd-3f8d39ccb056" />

Ändern Sie die Parameter im Programm __QUADRAT.PY__ so ab, dass:

- das Quadrat doppelt so gross gezeichnet wird
- das Quadrat um 45° nach links gedreht gezeichnet wird

```py live_py title=quatrat.py id=7d72f0f0-1928-4f06-8783-09000e8f2f4a
from turtle import *

left(90)
forward(80)
left(90)
forward(80)
left(90)
forward(80)
left(90)
forward(80)
```

#### ⭐️ Zusatz:

Die Form der Turtle kann mit dem Befehl `shape` verändert werden. Ändern Sie auf Zeile `3` die Turtleform auf eine Schildkröte durch **Aufrufen des Befehls** `shape` mit dem **Parameter** `'turtle'`.

<Hint title={<span>Mögliche Parameter für den Befehl <code>shape</code></span>}>

- `'arrow'`
- `'turtle'`
- `'circle'`
- `'square'`
- `'triangle'`
- `'classic'` (standard)

</Hint>

<Solution webKey="18c86fcd-6e82-4df7-931c-86d5bf528a55">

```py live_py slim
from turtle import *

shape('turtle')
left(45)
forward(160)
left(90)
forward(160)
left(90)
forward(160)
left(90)
forward(160)
```
</Solution>

:::


### Farben

Die Stiftfarbe kann mit dem Befehl `pencolor('red')` auf rot gewechselt werden. Es gibt eine vordefinierte Farbpalette für die Stiftfarben.

```py live_py title=farben slim
from turtle import *

forward(30)
right(90)

pencolor('red')
forward(30)
right(90)

pencolor('blue')
forward(30)
right(90)

pencolor('green')
forward(30)
```

<details><summary>Farbpalette <span className="color-badge red">red</span> <span className="color-badge green">green</span> <span className="color-badge blue">blue</span></summary>

<div className="small-table no-table-header">

|             |                                                                            |
| :---------- | :------------------------------------------------------------------------- |
| `yellow`    | <div style={{width: '8em', height: '1em', background: 'yellow'}}></div>    |
| `gold`      | <div style={{width: '8em', height: '1em', background: 'gold'}}></div>      |
| `orange`    | <div style={{width: '8em', height: '1em', background: 'orange'}}></div>    |
| `red`       | <div style={{width: '8em', height: '1em', background: 'red'}}></div>       |
| `maroon`    | <div style={{width: '8em', height: '1em', background: 'maroon'}}></div>    |
| `violet`    | <div style={{width: '8em', height: '1em', background: 'violet'}}></div>    |
| `magenta`   | <div style={{width: '8em', height: '1em', background: 'magenta'}}></div>   |
| `purple`    | <div style={{width: '8em', height: '1em', background: 'purple'}}></div>    |
| `navy`      | <div style={{width: '8em', height: '1em', background: 'navy'}}></div>      |
| `blue`      | <div style={{width: '8em', height: '1em', background: 'blue'}}></div>      |
| `skyblue`   | <div style={{width: '8em', height: '1em', background: 'skyblue'}}></div>   |
| `cyan`      | <div style={{width: '8em', height: '1em', background: 'cyan'}}></div>      |
| `turquoise` | <div style={{width: '8em', height: '1em', background: 'turquoise'}}></div> |
| `lawngreen` | <div style={{width: '8em', height: '1em', background: 'lawngreen'}}></div> |
| `green`     | <div style={{width: '8em', height: '1em', background: 'green'}}></div>     |
| `darkgreen` | <div style={{width: '8em', height: '1em', background: 'darkgreen'}}></div> |
| `chocolate` | <div style={{width: '8em', height: '1em', background: 'chocolate'}}></div> |
| `brown`     | <div style={{width: '8em', height: '1em', background: 'brown'}}></div>     |
| `black`     | <div style={{width: '8em', height: '1em', background: 'black'}}></div>     |
| `gray`      | <div style={{width: '8em', height: '1em', background: 'gray'}}></div>      |
| `white`     | <div style={{width: '8em', height: '1em', background: 'white'}}></div>     |

</div>
</details>

:::warning `'string'`
Beachten Sie die Anführungszeichen rund um die Farb-Namen. Damit Python die Farben als Text (eng. `string`) erkennt und nicht plötzlich nach einem gleichnamigen Befehl sucht, werden rund um Texte immer Anführungszeichen verwendet.
:::

### Stiftbreite

Die Stiftbreite kann mit dem Befehl `pensize(2)` verändert werden. Standardmässig ist die Stiftbreite `1`

```py live_py slim
from turtle import *
forward(20)

pensize(5)
forward(20)

pensize(10)
forward(20)

pensize(15)
forward(20)

pensize(20)
forward(20) 
```


:::warning Zahlen
Beachten Sie, dass bei Zahlen keine Anführungszeichen verwendet werden. *Eine Verwechslungsgefahr mit anderen Befehlen besteht nicht, da in Python keine Befehle mit einer Zahl beginnen.*
:::

:::aufgabe Aufgabe 3: Zickzack
<Answer type="state" webKey="e89c6ae9-ae02-43a1-a606-fc3eab08be7e" />

Versuchen Sie, folgendes Zickzack-Muster mit einer Stiftdicke von `5` zu zeichnen. Die Streckenlänge und die Winkel dürfen Sie schätzen.

![](images/zickzack_py.svg)

```py live_py title=zickzack.py id=ab8648f3-80f0-4f24-8470-c7bfeefa9ee6
from turtle import *

```

#### ⭐️ Zusatz:
Machen Sie bei jedem Richtungswechsel einen Punkt:

![](images/zickzack_py_dots.svg)

<Solution webKey="18c86fcd-6e82-4df7-931c-86d5bf528a55">

```py live_py slim
from turtle import *

pensize(5)

color('red')
left(60)
forward(40)
dot()       # punkt zeichnen
right(120)
forward(40)
dot()       # punkt zeichnen
left(120)

color('orange')
forward(40)
dot()       # punkt zeichnen
right(120)
forward(40)
dot()       # punkt zeichnen
left(120)

color('lime')
forward(40)
dot()       # punkt zeichnen
right(120)
forward(40)
left(120)

hideturtle()
```
</Solution>
:::

## Kommentare

In Python können Kommentare eingefügt werden, die aber auf die Ausführung des Programms **keinen Einfluss** haben.
Kommentare sind eine wichtige Hilfe, um Programme (Algorithmen) besser zu verstehen, oder aber um zusätzliche Informationen, wie den Autor des Programms, festzuhalten.

```py live_py slim
# Autor: B. Hofer
# Datum: 5.09.2021

from turtle import *      # importiere alle Befehle der Bibliothek "turtle"

speed(1)        # verlangsame die Turtle auf die langsamste Geschwindigkeit
forward(100)    # 100 Schritte vorwärts
left(120)       # drehe um 120 ° nach links
speed(3)        # zurück auf Normalgeschwindigkeit
forward(100)
left(120)
speed(10)       # Schneller...
forward(100)
left(120)
hideturtle()    # verstecke die Turtle
```


:::aufgabe Aufgabe 4: Programm untersuchen
<Answer type="state" webKey="77e09573-8d92-443e-892d-c182c405a812" />

1. Versuchen Sie nachzuvollziehen, welche Zeile was macht.
2. Fügen Sie auf den ersten Zeilen den **Autor** und das **Datum** hinzu.
3. Fügen Sie immer dann, wenn ein Unterprogramm zum ersten Mal verwendet wird, einen **Kommentar** hinzu, welcher beschreibt, was dieses Unterprogramm macht und, falls vorhanden, welchen Einfluss die Parameter haben.

```py live_py title=Stift-und-Punkte id=764c988c-2a3d-409c-9e03-4dee147d12ba
from turtle import *

forward(40)
left(90)

penup()
forward(40)
dot(10)
right(180)
forward(40)
left(90)
pendown()

forward(40)
left(90)
forward(80)
left(90)
forward(80)
left(90)
forward(80) 
```
:::

:::aufgabe Aufgabe 5: Würfel
<Answer type="state" webKey="41c270a6-4046-415e-8eee-96c84b7b700c" />

Ändern Sie das Programm so ab, dass die gewürfelte Zahl `5` gezeichnet wird:

![Würfel 5](./images/wuerfel-5.svg)

Verstecken Sie auch die Turtle am Ende!

```py live_py title=Würfel__5.py id=035454e4-9b17-4d93-bd4e-5b1466c2abc6
from turtle import *

forward(40)
left(90)

penup()
forward(40)
dot(5)
right(180)
forward(40)
left(90)
pendown()

forward(40)
left(90)
forward(80)
left(90)
forward(80)
left(90)
forward(80) 
```

<Solution webKey="18c86fcd-6e82-4df7-931c-86d5bf528a55">

```py live_py slim
from turtle import *

penup()
dot(10)
forward(40)
left(90)

forward(40)
dot(10)
right(180)
forward(40)
left(90)
forward(40)
dot(10)
left(90)
forward(80)
dot(10)
left(90)
forward(80)
dot(10)
left(90)
hideturtle()
```
</Solution>
:::

## Aufgaben

:::aufgabe Aufgabe 6: Haus von Nikolaus
<Answer type="state" webKey="98de0fb1-5032-43a2-b2b3-5d612f0aa49f" />

Das "Haus vom Nikolaus" ist ein Zeichenspiel für Kinder. Ziel ist es, das besagte Haus in einem Linienzug aus genau acht Strecken zu zeichnen, ohne dabei eine Strecke zweimal zu durchlaufen. Zeichnen Sie das Haus vom Nikolaus.

![](images/haus_nikolaus.svg)

```py live_py title=haus__nikolaus.py id=d5730220-3200-4211-bf67-cce925c3a6be
from turtle import *
```

<Hint title="Hinweis: Diagonale">

Die Länge der Diagonale können Sie mithilfe von Pythagoras und einem Taschenrechner berechnen.

Oder Sie verwenden den Trick, dass die Diagonale im Quadrat gerade $\sqrt 2$ mal länger ist als eine Seitenlänge - bei einer Seitenlänge von $100$ wären das also ca. $141$.

</Hint>
<br />

#### ⭐️ Zusatz:

Verwenden Sie für die Zeichnung Ihre Lieblingsfarbe und eine grössere Stiftdicke.

<Solution webKey="18c86fcd-6e82-4df7-931c-86d5bf528a55">

```py live_py slim
from turtle import *

pensize(5)
color('teal')

forward(100)
left(90)
forward(100)
left(90)
forward(100)
left(90)
forward(100)

left(90 + 45)
forward(141)
left(90)
forward(71)
left(90)
forward(71)
left(90)
forward(141)
hideturtle()
```
</Solution>
:::


:::aufgabe Aufgabe 7: Treppe
<Answer type="state" webKey="a9da2219-390c-4d3c-8af0-46b92cba6892" />

Zeichnen Sie eine Treppe mit fünf Stufen, die eine Breite von `29` Pixeln und eine Höhe von `17` Pixeln haben.

![](images/stairs.svg)

```py live_py title=treppe.py id=83700b30-a08c-4578-bf5e-292a504fb661
from turtle import *
```

<Solution webKey="18c86fcd-6e82-4df7-931c-86d5bf528a55">

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
</Solution>
:::
