# Einführung

Programmieren heisst, einer Maschine Befehle zu erteilen und sie damit zu steuern. Die erste solche Maschine, die Sie steuern, ist eine kleine Schildkröte auf dem Bildschirm: Die Turtle. Was kann diese Turtle und was musst du wissen, um sie zu steuern?

Turtlebefehle werden grundsätzlich Englisch geschrieben und enden immer mit einem Klammerpaar. Dieses enthält weitere Angaben zum Befehl. Selbst wenn keine weiteren Angaben nötig sind, muss ein leeres Klammerpaar vorhanden sein. Die Klein-/Grossschreibung muss exakt eingehalten werden.

Die Turtle kann sich innerhalb ihres Fensters bewegen und dabei eine Spur zeichnen. Um die Turtle zu bewegen, verwenden wir die drei Befehle `forward(distanz)`, `left(winkel)` und `right(winkel)`.

*Programmierkonzepte*: Quellprogramm editieren, Programm ausführen, Programmsequenz

# Dein erstes Programm

Das erste Python-Programm zeichnet ein Quadrat. Damit die Befehle zum zeichnen verwendet werden können, muss zuerst eine Datei mit den entsprechenden Befehlen (ein sogenanntes Modul) `turtle` geladen werden.

```py live_py title=Quadrat
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
- *optional* in den runden Klammern eine Liste\* von Parametern (darf auch leer sein)

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

:::

:::aufgabe Aufgabe 1
Ändern Sie das Programm "Quadrat" so ab, dass:
- das Quadrat doppelt so gross gezeichnet wird
- das Quadrat um 45° nach links gedreht gezeichnet wird 
:::

## Ein weiteres Programm

```py live_py title=Stift-und-Punkte
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

![Würfel 5](./img/wuerfel-5.svg)

Tipp: mit `hideturtle()` kann die Turtle unsichtbar gemacht werden.
:::