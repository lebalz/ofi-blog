# Einführung

Programmieren heisst, einer Maschine Befehle zu erteilen und sie damit zu steuern. Die erste solche Maschine, die Sie steuern, ist eine kleine Schildkröte (bzw. ein kleines Dreieck) auf dem Bildschirm: Die Turtle. Was kann diese Turtle und was musst du wissen, um sie zu steuern?

Turtlebefehle werden grundsätzlich Englisch geschrieben und enden immer mit einem Klammerpaar. Dieses enthält weitere Angaben zum Befehl. Selbst wenn keine weiteren Angaben nötig sind, muss ein leeres Klammerpaar vorhanden sein. Die Klein-/Grossschreibung muss exakt eingehalten werden.

Die Turtle kann sich innerhalb ihres Fensters bewegen und dabei eine Spur zeichnen. Um die Turtle zu bewegen, verwenden wir die drei Befehle `forward(distanz)`, `left(winkel)` und `right(winkel)`.

_Programmierkonzepte_: Quellprogramm editieren, Programm ausführen, Programmsequenz

## Das erste Programm

Das erste Python-Programm zeichnet ein Quadrat. Damit die Befehle zum zeichnen verwendet werden können, muss zuerst eine Datei mit den entsprechenden Befehlen (ein sogenanntes Modul) `turtle` geladen werden.

```py live_py slim title=Quadrat
from turtle import *

forward(80)
left(90)
forward(80)
left(90)
forward(80)
left(90)
forward(80)
left(90)
```

:::note `from turtle import *`
Damit Python die Befehle zum zeichnen verwenden kann, müssen diese zuerst aus einem Modul **importiert** werden. Damit beim Importieren nicht jeder einzelne Befehl angegeben werden muss, wird das Zeichen `*` verwendet welches alle verfügbaren Befehle importiert.
:::

:::note Befehle: `forward`, `left`

Alle Befehle in Python sind nach demselben Schema aufgebaut:

- einen Befehlsnamen
- runde Klammern
- _optional_ in den runden Klammern eine Liste\* von Parametern, die auch leer sein darf.

```
       forward(90)
       \...../  \
         /    Parameter (Bedeutung hier: 90 Schritte vorwärts)
Befehlsname

       penup()
       \.../ \
         /   kein Parameter
Befehlsname
```

\* werden mehrere Parameter übergeben, dann werden diese mit Kommas abgetrennt, z.B. `goto(20, 30)`

:::

:::aufgabe Aufgabe 1
Ändern Sie das Programm "Quadrat" so ab, dass:

- das Quadrat doppelt so gross gezeichnet wird
- das Quadrat um 45° nach links gedreht gezeichnet wird

```py live_py title=quatrat.py
from turtle import *

forward(80)
left(90)
forward(80)
left(90)
forward(80)
left(90)
forward(80)
left(90)
```

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

|        |                                                                                 |
| :---------- | :------------------------------------------------------------------------------ |
| `yellow`    | <div style={{width: '8em', height: '1em', backgroundColor: 'yellow'}}></div>    |
| `gold`      | <div style={{width: '8em', height: '1em', backgroundColor: 'gold'}}></div>      |
| `orange`    | <div style={{width: '8em', height: '1em', backgroundColor: 'orange'}}></div>    |
| `red`       | <div style={{width: '8em', height: '1em', backgroundColor: 'red'}}></div>       |
| `maroon`    | <div style={{width: '8em', height: '1em', backgroundColor: 'maroon'}}></div>    |
| `violet`    | <div style={{width: '8em', height: '1em', backgroundColor: 'violet'}}></div>    |
| `magenta`   | <div style={{width: '8em', height: '1em', backgroundColor: 'magenta'}}></div>   |
| `purple`    | <div style={{width: '8em', height: '1em', backgroundColor: 'purple'}}></div>    |
| `navy`      | <div style={{width: '8em', height: '1em', backgroundColor: 'navy'}}></div>      |
| `blue`      | <div style={{width: '8em', height: '1em', backgroundColor: 'blue'}}></div>      |
| `skyblue`   | <div style={{width: '8em', height: '1em', backgroundColor: 'skyblue'}}></div>   |
| `cyan`      | <div style={{width: '8em', height: '1em', backgroundColor: 'cyan'}}></div>      |
| `turquoise` | <div style={{width: '8em', height: '1em', backgroundColor: 'turquoise'}}></div> |
| `lawngreen` | <div style={{width: '8em', height: '1em', backgroundColor: 'lawngreen'}}></div> |
| `green`     | <div style={{width: '8em', height: '1em', backgroundColor: 'green'}}></div>     |
| `darkgreen` | <div style={{width: '8em', height: '1em', backgroundColor: 'darkgreen'}}></div> |
| `chocolate` | <div style={{width: '8em', height: '1em', backgroundColor: 'chocolate'}}></div> |
| `brown`     | <div style={{width: '8em', height: '1em', backgroundColor: 'brown'}}></div>     |
| `black`     | <div style={{width: '8em', height: '1em', backgroundColor: 'black'}}></div>     |
| `gray`      | <div style={{width: '8em', height: '1em', backgroundColor: 'gray'}}></div>      |
| `white`     | <div style={{width: '8em', height: '1em', backgroundColor: 'white'}}></div>     |

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

:::aufgabe Aufgabe 2: Zickzack

Versuchen Sie, folgendes Zickzack-Muster mit einer Stiftdicke von `5` zu zeichnen. Die Streckenlänge und die Winkel dürfen Sie schätzen.

![](images/zickzack_py.svg)

```py live_py title=zickzack.py
from turtle import *

```
:::

## Ein weiteres Programm

```py live_py slim title=Stift-und-Punkte
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


:::aufgabe Aufgabe 2
Versuchen Sie nachzuvollziehen, welche Zeile was macht.

Erweitern Sie dann das Programm so, dass die gewürfelte Zahl `5` gezeichnet wird:

![Würfel 5](./images/wuerfel-5.svg)

Tipp: mit `hideturtle()` kann die Turtle unsichtbar gemacht werden.
:::
