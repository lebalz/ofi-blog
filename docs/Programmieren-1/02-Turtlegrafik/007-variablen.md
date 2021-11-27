---
title: 7. Variablen 🚧
---

import PyOps from '@site/docs/Programmieren-1/03-Python/_def-python-operatoren.md';

# 7. Variablen 🚧

## Einführung
Im vorhergehenden Kapitel haben Sie Quadrate gezeichnet, deren Seitenlänge im Programm fest eingebaut waren. Manchmal möchten Sie aber die Seitenlänge mit einem Eingabedialog einlesen. Dazu muss das Programm die eingegebene Zahl als Variable speichern.
Variablen kann man sich wie eine Zügelbox vorstellen, welche mit einem Namen angeschrieben ist. Der Name beschreibt, was sich in der Box befindet, damit man den Inhalt später auch wieder findet.

![Variable Zuweisen --width=300px](images/variable-init.svg)

Mit der Schreibweise `anzahl = 12` wird eine solche Box erstellt. In Zukunft sagen wir, dass damit die Variable `anzahl` **definiert** und ihr einen **Wert zugewiesen** wird. Um den Inhalt der Box zu erhalten, kann der Name (ohne Anführungszeichen) geschrieben werden:

:::cards --width=250px
**Definieren und  Zuweisen**
```py live_py slim
anzahl = 12
print(anzahl)
```
***
**Mit Variablen rechnen**
```py live_py slim
anzahl = 12
print(anzahl + 13)
```
***--min-width=400px
**Mehrere Variablen**
```py live_py slim
anzahl = 12
gewicht = 100
print(anzahl, 'Tafeln Schokolade sind', anzahl * gewicht, 'g schwer')
```
:::

## Variablen neu Zuweisen 
In einer Box kann immer nur ein einziges Objekt abgelegt werden. Wenn später also ein neuer Wert in bereits beschriftete Zügelbox gelegt wird, so wird der aktuelle Wert verdrängt. Künftig wird diese erneute Zuweisung **Überschreiben einer Variable** genannt.

![Variablen überschreiben --width=350px](images/variable-set.svg)

```py live_py slim
anzahl = 12
print('Anzahl =', anzahl)
anzahl = 7
print('Anzahl =', anzahl)
```

Im obigen Beispiel wird der initiale Wert der Variable `anzahl` (12) mit dem neuen Wert `7` überschrieben.

:::finding Merke: Gültigkeitsbereich
Die Variable wird nicht rückwirkend verändert. Solange eine Variable nicht überschrieben wird, besitzt sie den aktuell zugewiesenen Wert.
:::

:::aufgabe
Was geschieht im untenstehenden Programm? Fügen Sie bei jeder Zeile mit einem `print` einen Kommentar fest, was ausgegeben wird und welcher Wert in der Variable `anzahl` gespeichert ist.

```py live_py id=d22582be-acf8-4a7d-b370-449a92b44b2b title=variable.py
anzahl = 2
print(anzahl)       # => 2, anzahl=2
print(anzahl + 2)

anzahl = 7
print(anzahl)
print(anzahl + 2)

anzahl = anzahl + 3
print(anzahl)

anzahl = anzahl + 3
print(anzahl + 1)

anzahl = anzahl + 3
print(anzahl)
```
:::

:::finding Gleichheitszeichen
Das Gleichheitszeichen hat also in Computerprogrammen nicht dieselbe Bedeutung wie in der Mathematik. Es ist keine Gleichung, sondern eine Variablendefinition oder eine Zuweisung.
:::

# Variablenwert einlesen und verändern

Im Programm kann mit Hilfe einer Eingabebox ein Wert eingelesen und einer Variable zugewiesen werden.

```py live_py slim
from turtle import *
speed(12)

anzahl = input("Wie viele Strecken soll die Spirale haben?")
anzahl = int(anzahl)

seite = 10
for i in range(anzahl):
    forward(seite)
    left(90)
    seite = seite + 10
```

:::tip Eingabe
In Python ist das Resultat einer Eingabe **immer ein Text**. Ein Text kann aber in eine Zahl umgewandelt werden, so dass dann auch damit gerechnet werden kann.
- Der Befehl `int` wandelt eine Eingabe in eine **ganze Zahl** um.
- Der Befehl `float` wandelt eine Eingabe in eine **Dezimalzahl** um.

:::flex --width=450px
```py live_py slim
# Centimeter zu Meter
grösse = input('Wie gross bist du [cm]?')
grösse = int(grösse)
print('Ich bin', grösse / 100, 'm gross')
```
***
```py live_py slim
# Meter zu Centimeter
grösse = input('Wie gross bist du [m]?')
grösse = float(grösse)
print('Ich bin', grösse * 100, 'cm gross')
```
:::


:::aufgabe Aufgabe 1 – `n-Eck`
Nach Eingabe der Anzahl Ecken in einer Eingabebox soll die Turtle ein regelmässiges n-Eck zeichnen. Beispielsweise wird nach der Eingabe `8` ein 8-Eck gezeichnet. Den passenden Drehwinkel soll das Programm berechnen. 

```py live_py title=n-eck.py id=5e60a1fd-0c9c-4f6c-9e28-5455e7500d0c
from turtle import *

```
:::

:::aufgabe Aufgabe 2
Nach der Eingabe eines Winkels in einer Eingabebox zeichnet die Turtle `30` Strecken der Länge `100`, wobei sie nach jeder Strecke um den gegebenen Winkel nach links dreht. Experimentieren Sie mit verschiedenen Winkeln und zeichnen Sie schöne Figuren.

Mit `speed(10)` können Sie das Zeichnen beschleunigen.

```py live_py title=star.py id=d6f4d7f5-1deb-4031-82bc-c9482369477e
from turtle import *
```
:::