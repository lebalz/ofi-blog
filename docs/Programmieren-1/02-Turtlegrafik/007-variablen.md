---
sidebar_custom_props:
  id: 3aca4fb7-1b4c-4eea-8dc4-150b29d6ac2b
---

import Strukto from '@site/src/components/struktogramm/Strukto';

# 7. Variablen

## Einführung
Im vorhergehenden Kapitel haben Sie Quadrate gezeichnet, deren Seitenlänge im Programm fest eingebaut waren. Manchmal möchten Sie aber die Seitenlänge mit einem Eingabedialog einlesen. Dazu muss das Programm die eingegebene Zahl als Variable speichern.
Variablen kann man sich wie eine Zügelbox vorstellen, welche mit einem Namen angeschrieben ist. Der Name beschreibt, was sich in der Box befindet, damit man den Inhalt später auch wieder findet.

![Variable Zuweisen --width=300px](images/07-variable-init.svg)

Mit der Schreibweise `anzahl = 12` wird eine solche Box erstellt. In Zukunft sagen wir, dass damit die Variable `anzahl` **definiert** und ihr einen **Wert zugewiesen** wird. Um den Inhalt der Box zu erhalten, kann der Name (ohne Anführungszeichen) geschrieben werden. Im Struktogramm werden alle Variablen **umrahmt**.

:::flex{width=250px}
<Strukto program={[
    {type: 'step', code: <span><span className="var">anzahl</span> = 12</span>},
    {type: 'step', code: <span>Ausgabe: <span className="var">anzahl</span></span>}
]} />
::br

```py live_py slim
anzahl = 12

print(anzahl)
```
:::

**Mit Variablen rechnen**
```py live_py slim
anzahl = 12
print(anzahl + 13)
```
**Mehrere Variablen**
```py live_py slim
anzahl = 12
gewicht = 100
print(f'{anzahl} Tafeln Schokolade sind {anzahl * gewicht} g schwer')
```

<details>
<summary>Formatierter Text: <code>f'{'{'}anzahl{'}'} Tafeln'</code></summary>

### Formatierter Text

:::def
### formatierter Text `f''`
Variablenwerte lassen sich mit geschweiften Klammern `{}` in einen Text einfügen. Dazu muss zu Beginn des Textes ein kleines `f` (für "fromatierten Text") hinzugefügt werden.

```py live_py slim
name = 'Alfred'
print(f'Hallo {name}')
```
:::


</details>

## Überschreiben: Variablen neu Zuweisen 
In einer Box kann immer nur ein einziges Objekt abgelegt werden. Wenn später also ein neuer Wert in bereits beschriftete Zügelbox gelegt wird, so wird der aktuelle Wert verdrängt. Künftig wird diese erneute Zuweisung **Überschreiben einer Variable** genannt.

![Variablen überschreiben --width=350px](images/07-variable-set.svg)

```py live_py slim
anzahl = 12
print(f'Anzahl = {anzahl}')
anzahl = 7
print(f'Anzahl = {anzahl}')
```

Im obigen Beispiel wird der initiale Wert der Variable `anzahl` (12) mit dem neuen Wert `7` überschrieben.

:::finding[Merke: Gültigkeitsbereich]
Die Variable wird nicht rückwirkend verändert. Solange eine Variable nicht überschrieben wird, besitzt sie den aktuell zugewiesenen Wert.
:::

:::aufgabe
<Answer type="state" webKey="62c07ab2-e5a8-4217-8f69-b877055cfd43" />

Was geschieht im untenstehenden Programm? Fügen Sie bei jeder Zeile mit einem `print` einen Kommentar hinzu mit:
- ausgegebene Zahl
- aktuell gespeicherter Wert in der Variable `anzahl`

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

<Solution webKey="e6f8fdb3-1edc-4d98-8b4b-65857dc454b8">

```py live_py slim
anzahl = 2              # setzt anzahl=2
print(anzahl)       # => 2, anzahl=2
print(anzahl + 2)   # => 4, anzahl=2

anzahl = 7              # setzt anzahl=7
print(anzahl)       # => 7, anzahl=7
print(anzahl + 2)   # => 9, anzahl=7

anzahl = anzahl + 3     # setzt anzahl=7 + 3
print(anzahl)       # => 10, anzahl=10

anzahl = anzahl + 3     # setzt anzahl=10 + 3
print(anzahl + 1)   # => 14, anzahl=13

anzahl = anzahl + 3     # setzt anzahl=13 + 3
print(anzahl)       # => 16, anzahl=16
```

</Solution>
:::

:::finding[Gleichheitszeichen]
Das Gleichheitszeichen hat also in Computerprogrammen nicht dieselbe Bedeutung wie in der Mathematik. Es ist keine Gleichung, sondern eine Variablendefinition oder eine Zuweisung.
:::

# Variablenwert einlesen, verändern und ausgeben

Im Programm kann mit Hilfe einer **Eingabeboxen** Werte eingelesen und einer Variable zugewiesen werden.

```py live_py slim
from turtle import *
speed(12)

anzahl = input('Wie viele Strecken soll die Spirale haben?')
anzahl = int(anzahl)

seite = 10
for i in range(anzahl):
    forward(seite)
    left(90)
    seite = seite + 10
```

:::tip[Eingabe]
In Python ist das Resultat einer Eingabe **immer ein Text**. Ein Text kann aber in eine Zahl umgewandelt werden, so dass dann auch damit gerechnet werden kann.
- Der Befehl `int` wandelt eine Eingabe in eine **ganze Zahl** um.
- Der Befehl `float` wandelt eine Eingabe in eine **Dezimalzahl** um.
:::

:::flex{width=450px}
```py live_py slim
# Centimeter zu Meter
grösse = input('Wie gross bist du [cm]?')
grösse = int(grösse)
print(f'Ich bin {grösse / 100} m gross')
```
::br
```py live_py slim
# Meter zu Centimeter
grösse = input('Wie gross bist du [m]?')
grösse = float(grösse)
print(f'Ich bin {grösse * 100} cm gross')
```
:::

### Eingabe - Struktogramm

Wird ein Wert über eine Eingabeaufforderung eingelesen, so wird dies im Struktogramm mit einem **Parallelogramm** angezeigt, wobei auch die Variable, welcher das Resultat zugewiesen wird, festgehalten wird:

:::flex{width=250px}
<Strukto program={[
    {type: 'input', code: <span><span className="var">grösse</span> = Wie gross bist du [cm]?</span>},
    {type: 'step', code: <span>Ausgabe: Ich bin <span className="var">grösse</span> cm gross.</span>}
]} />
::br

```py live_py slim
grösse = input('Wie gross bist du [cm]?')
print(f'Ich bin {grösse} cm gross')
```
:::

::::aufgabe[Aufgabe 1 - BMI]
<Answer type="state" webKey="cc20a8bd-6fd0-4d5a-bd18-970cf0d54d53" />

Übersetzen Sie das folgende Struktogramm in Python Code:

:::flex{width=250px}

<Strukto program={[
    {type: 'input', code: <span><span className="var">grösse</span> = Wie gross bist du [m]?</span>},
    {type: 'input', code: <span><span className="var">gewicht</span> = Wie schwer bist du [kg]?</span>},
    {type: 'step', code: <span><span className="var">bmi</span> = <span className="var">gewicht</span> geteilt durch <span className="var">grösse</span> mal <span className="var">grösse</span> </span>},
    {type: 'step', code: <span>Ausgabe: BMI: <span className="var">bmi</span></span>}
]} />
::br

```py live_py title=bmi.py id=a2442706-c582-4d76-a347-f91e50f5d3b6
```
:::

:::note[Hinweis]
Was ist die Bedeutung des folgenden Fehlers?
```error
TypeError: Can't multiply sequence by non-int of type 'str'
```
→ Der eingegebene Text kann nicht multipliziert werden - zuerst müssen `gewicht` und `grösse` in Dezimalzahlen (`float`) umgewandelt werden: `gewicht = float(gewicht)`.
:::


<Solution webKey="e6f8fdb3-1edc-4d98-8b4b-65857dc454b8">

```py live_py slim
grösse = input('Wie gross bist du [cm]?')
gewicht = input('Wie schwer bist du [kg]?')

# umwandeln zu Zahlen
grösse = float(grösse)
gewicht = float(gewicht)

bmi = gewicht / (grösse * grösse) # Klammern sind entscheidend!
print(f'BMI: {bmi}')
```
</Solution>
::::

:::aufgabe[Aufgabe 2 – `n-Eck`]
<Answer type="state" webKey="f84f8da0-180b-4089-8545-584ec4414230" />

Nach Eingabe der Anzahl Ecken in einer Eingabebox soll die Turtle ein regelmässiges n-Eck zeichnen. Beispielsweise wird nach der Eingabe `8` ein 8-Eck gezeichnet. Den passenden Drehwinkel soll das Programm berechnen. 

```py live_py title=n-eck.py id=5e60a1fd-0c9c-4f6c-9e28-5455e7500d0c
from turtle import *

```

<Solution webKey="e6f8fdb3-1edc-4d98-8b4b-65857dc454b8">

```py live_py slim
from turtle import *
n = int(input('Wie viele Ecken soll das n-Eck haben?'))

for i in range(n):
    forward(40)
    left(360 / n)
hideturtle()
```
</Solution>
:::

:::aufgabe[Aufgabe 3]
<Answer type="state" webKey="bf7f6694-f471-455b-8f35-30350e54bd5f" />

Nach der Eingabe eines Winkels in einer Eingabebox zeichnet die Turtle `30` Strecken der Länge `100`, wobei sie nach jeder Strecke um den gegebenen Winkel nach links dreht. Experimentieren Sie mit verschiedenen Winkeln und zeichnen Sie schöne Figuren.

Mit `speed(10)` können Sie das Zeichnen beschleunigen.

```py live_py title=star.py id=d6f4d7f5-1deb-4031-82bc-c9482369477e
from turtle import *
```

<Solution webKey="e6f8fdb3-1edc-4d98-8b4b-65857dc454b8">

```py live_py slim
from turtle import * 

winkel = input('Winkel?')
winkel = int(winkel)

speed(10)

for i in range(30):
    forward(100)
    left(winkel)
```
</Solution>
:::
