---
sidebar_label: "Listen 2D"
sidebar_custom_props: 
  id: 4f55c963-d60b-4e97-bab7-cfaa8f8b0cf1
  source:
    name: sdg
    ref: https://gitlab.gbsl.website/gymbefin23/material/-/snippets/11
---

# Zweidimensionale Listen

![Zweidimensionale Liste](images/2d-listen.jpeg)

Eine Liste, welche einfach eine Reihe von Zahlen oder Texten enthält, ist eine **eindimensionale** Liste. Aus der Mathematik kennen wir auch Matrizen, oder Tabellen. Diese bestehen aus **Zeilen** und **Spalten**, haben also **zwei Dimensionen**.

Das kann man in Python auch machen. Man muss dazu für jede Zeile eine Liste erzeugen und dann diese Listen als Elemente in einer weiteren Liste speichern. So entsteht eine Liste von Listen.

```py
# Eine Liste
[
    [1, 2, 3], # Zeile
    [4, 5, 6], # Zeile
    [7, 8, 9], # Zeile
]

# oder äquivalent in einer Zeile dargestellt
[[1, 2, 3], [4, 5, 6], [7, 8, 9]]
```

Man kann in Python auch zwei- oder gar *n*-dimensionale Listen haben. Für Python ist das nichts anderes, als eine Liste, deren Elemente wiederum Listen sind.

Für jede zusätzlich Dimension wird eine weitere Verschachtelungsstufe hinzugefügt.
Bei zwei Dimensionen kann man auf diese Weise in Python Matrizen, bzw. Tabellen mit mehreren Zeilen und Spalten darstellen.

:::def[3 x 3 Matrix]
Eine Matrix ist eine Liste von Listen
```py live_py slim
matrix = [
    [1, 2, 3], 
    [4, 5, 6], 
    [7, 8, 9]
]
print(matrix)
```
:::

:::def[Zugriff `[][]`]
Auf einzelne Element in der Matrix zugreifen

```py live_py slim
# kann auch auf einer Zeile geschrieben werden:
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

# 1. Zeile ändern - zugewiesener Wert muss eine Liste sein
matrix[0] = [11, 12, 13]
# 3. Wert in 2. Zeile verändern
matrix[1][2] = 0
# Werte ausgeben
print('Matrix:', matrix)
print('Erste Zeile:', matrix[0])
print('Zeile 2, Spalte 3:', matrix[1][2])
print('Zeile 3, Spalte 1:', matrix[2][0])
```
:::

:::def[ Schleife über Zeilen]

Schleife über einzelne Zeilen :mdi[arrow-right] Zeilen sind wieder Listen
```py live_py slim
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

for zeile in matrix:
    print(zeile)
```
:::

:::aufgabe[`pprint()`]
<Answer type="state" webKey="32b77e06-fa29-4ed2-950c-e28b0259eb3c" />

Schreiben Sie eine Funktion `pprint` (Abkürzung für `Pretty Print`), welche eine 2D-Liste übersichtlich ausgibt:

```py
pprint([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
# Ausgabe bspw.
# [
#    [1, 2, 3],
#    [4, 5, 6],
#    [7, 8, 9],
# ]
```

```py live_py id=df2cf353-14ac-4676-b560-5024a4946db5 title=pprint.py
def pprint(mat2d):
    print(mat2d)

pprint([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
pprint([[1, 2, 3, 4], [5, 6, 7, 8], [9, 8, 7, 6]])
```

<Hint title="Über Funktionen...">

Funktionen werden in Python mit dem Schlüsselwort `def` definiert.

```py
def pretty_print(matrix2d):
#   \__________/ \_______/
#    Fkt. Name      Parameter
#   die Parameter können im Funktionskörper (der eingerückte Teil) verwendet werden
    print(matrix2d)

```

</Hint>

<Solution webKey="4f1b3847-4bd3-49ab-83dd-3b9982b33cd6">

```py live_py slim
def pprint(mat2d):
    print('[')
    for row in mat2d:
        print(' ', row, end=',\n')
    print(']')

pprint([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
```

</Solution>

:::

:::def[Durch alle Elemente Iterieren]

Dazu wird eine **verschachtelte Schleife** über Zeilen und Spalten verwendet.
```py live_py slim
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
for zeile in matrix:
    for zahl in zeile:
        print(zahl)
```

Oder man greift über die Zeilen- (`i`) und Spaltenindices (`j`) auf die Elemente zu:
```py live_py slim
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
for i in range(3):
    for j in range(3):
        print(f'[i: {i}, j: {j}] =', matrix[i][j])
```
:::

:::aufgabe
<Answer type="state" webKey="c7a2e1a2-1476-4fcc-b4f9-fdcbdcc2a7b6" />

Obiges Beispiel funktioniert nur für eine `3x3` Matrix. Ändern Sie das Programm so ab, dass es für beliebige zweidimensionale Listen funktioniert. Probieren Sie Ihre Lösung, indem Sie die unterschiedlichen `matrix` Variablen einkommentieren...

```py live_py id=1b0f78c9-57f7-47ee-9597-53b178aeb52d
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [9, 9, 9], [1, 8, 7]]
# matrix = [[1, 2, 3, 4, 5],[4, 5, 6, 5, 4], [7, 8, 9, 9, 9], [9, 9, 9, 8, 7]]
# matrix = [[1, 2], [4, 5], [6, 7], [8, 9], [10, 11]]

for i in range(3):
    for j in range(3):
        print(f'[i: {i}, j: {j}] =', matrix[i][j])
```

<Hint>

Die Länge einer Liste kann mit `len` abgefragt werden:

```py live_py slim
print(len([2, 3, 5]))
```
</Hint>

<Solution webKey="c5091336-dac5-440a-9b95-9b9f2d482b48">

```py live_py slim
matrix = [[1, 2], [4, 5], [6, 7], [8, 9], [10, 11]]

for i in range(len(matrix)):
    for j in range(len(matrix[i])):
        print(f'[i: {i}, j: {j}] =', matrix[i][j])
```

</Solution>
:::

:::aufgabe[2D-Liste erstellen]
<Answer type="state" webKey="302c5fcd-76d3-4fa7-aef0-c52b9d03422d" />

#### `create_from.py`

Ändern Sie den untenstehenden Code so ab, dass die Variabe `matrix` eine Matrix mit der gegebenen Anzahl Zeilen- und Spalten sowie überall den Zellenwerten `ZAHL` enthält. Schreiben Sie das Programm so, dass es auch bei geänderten `ZEILEN`. `SPALTEN` und `ZAHL`en Werten funktioniert.

```py live_py id=01a6ec22-0819-4b61-9b8d-7a1a62224ef8 title=create_from.py
ZEILEN = 3
SPALTEN = 4
ZAHL = 1

matrix = []

print(matrix) # => [[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]]
```

<Hint>

- Es braucht eine doppelte Schleife, wobei in der ersten Schleife eine leere Zeilen-Liste erzeugt wird, welche dann in der zweiten (verschachtelten) Schleife mit den Zahlen gefüllt wird.
- [👉 Elemente zu einer Liste hinzufügen](./01-Listen-1D.md#element-hinzufügen-append)

</Hint>

<Solution webKey="e8b99d8b-7838-4179-b4bb-8c7b8ceadedd">

```py live_py slim
ZEILEN = 3
SPALTEN = 4
ZAHL = 1

matrix = []

for i in range(ZEILEN):
    zeile = []
    for j in range(SPALTEN):
        zeile.append(ZAHL)
    matrix.append(zeile)

print(matrix)
```
</Solution>
<Solution webKey="e8b99d8b-7838-4179-b4bb-8c7b8ceadedd" title="⭐️ Lösung: Mit List-Comprehension">

```py live_py slim
ZEILEN = 3
SPALTEN = 4
ZAHL = 1
matrix = [
    [ZAHL] * SPALTEN for i in range(ZEILEN)
]

print(matrix)
```
</Solution>

#### `diag.py`
Erstellen Sie ein Programm, welches eine `SIZE x SIZE`-Matrix, die in der Diagonalen von Oben-Links nach Unten-Rechts `1`en enthält und sonst mit `0`en gefüllt ist. Probieren Sie Ihr Programm auch mit anderen Werten für `SIZE` aus.
```py
SIZE = 4
matrix = []
# => [
#        [1, 0, 0, 0],
#        [0, 1, 0, 0],
#        [0, 0, 1, 0],
#        [0, 0, 0, 1],
#    ]
```

```py live_py id=716d8f4a-7dc2-4948-a1ae-e5c7e93324fb title=diag.py
SIZE = 4
matrix = []

print(matrix)
```

<Solution webKey="3571eae1-ce0a-4a86-9373-dca332470f95">

```py live_py slim
SIZE = 4
matrix = []
for i in range(SIZE):
    row = []
    for j in range(SIZE):
        if i == j:
            row.append(1)
        else:
            row.append(0)
    matrix.append(row)

print(matrix)
```
</Solution>


:::

:::aufgabe[Was ist denn hier los?]
<Answer type="state" webKey="c134f37d-8e4b-49e0-964e-355d202560bf" />

Dateiname
: __EF-Informatik/docs/python/referenzen.md__

```py live_py slim
a = [1, 2, 3]
b = a
b[1] = 5

print('Liste a: ', a)
print('Liste b: ', b)
```

Wie erklären Sie sich dieses Verhalten?

<Answer type="text" webKey="7ffc70a8-50a8-40a1-97d0-f30be4e54910" />

Lesen Sie den Abschnitt [👉 Assignment (=) in Python](https://www.codingem.com/python-copy-list/#assignment-in-python) (*The Copy Module in Python* brauchen Sie nicht zu lesen). 

Können Sie damit auch folgendes Phänomen erklären?

```py live_py slim
matrix = []

zeile = [0, 1, 0]
for i in range(3):
    matrix.append(zeile)

print(matrix)

matrix[1][1] = 0 # nur den Wert in Zeile 1 in der Mitte auf 0 Setzen

print(matrix)
```

:mdi[arrow-right] Fassen Sie obiges Verhalten nun in eigene Worte im Dokument __EF-Informatik/docs/python/referenzen.md__.

:::

:::warning[Häufige Fehlerquellen]

Exotisches (und oft Grund für Fehler):
- Innere Listen sind unterschiedlich lang durch
    - Anhängen eines weiteren Elementes
    - Anhängen einer weiteren Zeile mit unterschiedlicher Länge
    - ...
- Einfügen eines String (oder irgend etwas anderes) in die äussere oder innere Liste

```py live_py slim
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

matrix[1].append(13)
matrix.append([31])
matrix.insert(2, 'blabla')

for zeile in matrix:
    print(zeile)
```
:::


## ⭐️ Bilder als Listen darstellen

Bilder können im wesentlichen auch als 2- bzw 3-Dimensionale Listen betrachtet werden. Mit dem Paket [👉 pypng](https://pypi.org/project/pypng/) lassen sich einfach Bilder erzeugen.

Paket installieren:
1. In VS Code __Terminal > New Terminal__
2. Eintippen `pip3 install pypng`
3. Fertig 🥳

Folgender Code erzeugt nun ein kleines Smiley:

```py
import png # Paket png importieren
smiley = [
    [000, 000, 000, 000, 000, 000],
    [000, 255, 000, 000, 255, 000],
    [000, 000, 000, 000, 000, 000],
    [000, 255, 000, 000, 255, 000],
    [000, 000, 255, 255, 000, 000],
    [000, 000, 000, 000, 000, 000]
]
# Erzeuge ein Graustufen-Bild (0=Schwarz, 255=Weiss)
png.from_array(simley, 'L').save('small_smiley.png')
```

Probieren Sie es aus!

:::aufgabe[Graustufen-Bilder]
<Answer type="state" webKey="8131c3da-101f-44dd-8a32-3c8ff541186c" />

Dateiname
: __EF-Informatik/exercises/mat-to-png.py__

Wie Sie bemerken, ist das entstandene Bild nur `6x6` Pixel gross - es muss entsprechend stark gezoomt werden, um das Smiley zu identifizieren.

Erweitern Sie das Programm so, dass Sie mit einem Zoom-Faktor angeben können, auf wie viele Pixel ein Wert verteilt werden soll.

```txt
               ______ ______
      Zoom    |      |      |
▢▢  --------> |      |      |
              |      |      |
               ‾‾‾‾‾‾ ‾‾‾‾‾‾
```
:::