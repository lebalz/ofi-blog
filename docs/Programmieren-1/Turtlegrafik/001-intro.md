# Einführung

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

  Damit Python die Befehle zum zeichnen verwenden kann, müssen diese zuerst aus einer anderen Datei **importiert** werden. Diese Datei - in Python spricht man von einem *Modul* - heisst `turtle`.

:::
:::note Befehle: `forward`, `left`

Alle Befehle in Python sind nach demselben Schema aufgebaut:
- einen Befehlsnamen
- Eine Liste\* von Parametern (die kann auch leer sein)

```
    forward(90)
    \...../  \
Befehlsname  Parameter: 90 Schritte vorwärts
```

\* die Parameterliste wird immer in runden Klammern an den Befehl übergeben.

:::

:::info Aufgabe
Ändern Sie das Programm "Quadrat" so ab, dass es:
- doppelt so gross gezeichnet wird
- um 45° nach links gedreht gezeichnet wird 
:::

```py live_py title=Stift-und-Punkte
from turtle import *

forward(80)
dot(5)
left(90)
forward(80)
dot(5)
left(90)
forward(80)
dot(5)
left(90)
forward(80)
dot(5)

penup()
left(90)
forward(40)
left(90)
forward(40)
dot(5)
```
