---
sidebar_custom_props:
  id: ad4d9802-8e3b-4706-bf2f-b6cac09a6cbd
---
# Listen

## Erklärung
Zum Speichern von **mehreren Werten** unter einem **einzigen Namen** verwendet man in Python Listen. Man kann sich __Listen__ als Tabellen mit einer Spalte vorstellen. Die Zellen in der Tabelle werden als **Elemente** bezeichnet und sind durchnummeriert. So kann man einzelne in der Liste gespeichert Werte unterscheiden. Die Nummer eines Elements wird als dessen **Index** bezeichnet.

:::important Wichtig:
- Das erste Element in der Liste trägte den Index 0.
- Der Index des letzten Elementes ist die Länge der Liste minus 1.
:::

Das folgende Bild illustriert dies für eine Liste mit 4 Noten. Die **Länge** der Liste ist **4**, das letzte Element trägt den **Index 3**.

<div className="slim-table" style={{width: 'min-content'}}>

| Index | Wert  |
| ----: | :---- |
|   `0` | `4.5` |
|   `1` | `5`   |
|   `2` | `3.5` |
|   `3` | `5.5` |
</div>

In Python kann man diese Liste wie folgt erzeugen:

```py live_py slim
noten = [4.5, 5, 3.5, 5.5]
print('Die vierte Note war eine', noten[3])
```

Im Beispiel wird die vierte Note mit dem Index `3` ausgegeben.

## Eindimensionale Listen

Hier sehen Sie, wie man mit Listen in Python arbeitet.


:::def
### Liste erzeugen `[]`
```py live_py slim
# Liste erzeugen und Variablen zuweisen
noten = [3.5, 6, 5, 4.5]

# Ganze Liste anzeigen 
print(noten)
# Element mit Index 2 aus der Liste anzeigen
print(noten[2])
```
:::

:::def
### Schleife über alle Elemente der Liste
```py live_py slim
noten = [3.5, 6, 5, 4.5]

for note in noten:
    print(note)
```
:::

:::def
### Schleife über Listen-Indexes
```py live_py slim
noten = [3.5, 6, 5, 4.5]

# (beginnt bei 0 und endet mit 1 weniger als Länge der Liste)
for index in range(0, len(noten)):
    print(index, ":", noten[index])
```
:::

:::def
### Listenelemente ändern
```py live_py slim
noten = [3.5, 6, 5, 4.5]

# Element mit Index 3 neuen Wert zuweisen
noten[3] = 5.5
print(noten)
```
:::

:::def
### Fehler: IndexError
```py live_py slim
noten = [3.5, 6, 5, 4.5]

# die Liste ist nicht so lang
noten[7] = 6
```
:::

:::def
### Element hinzufügen `append()`
```py live_py slim
noten = [3.5, 6, 5, 4.5]

# Element am Ende der Liste anhängen
noten.append(5)
print(noten)
```
:::

:::def
### Element an bestimmter Stelle hinzufügen `insert()`
```py live_py slim
noten = [3.5, 6, 5, 4.5, 5]
# vor dem Element mit Index 3 eine "4" einfügen
noten.insert(3, 4)
print(noten)
```
:::

:::def
### Aufsteigend sortieren `sort()`
```py live_py slim
noten = [3.5, 6, 5, 4, 4.5, 5]

noten.sort()
print(noten)
```
:::

:::def
### Letztes Element entfernen `pop()`
Letztes Element entfernen und zurückgeben.
```py live_py slim
noten = [3.5, 4, 4.5, 5, 5, 6]

last = noten.pop()
print(last)
print(noten)
```
:::

:::def
### Element bei Index entfernen `pop(0)`

```py live_py slim
vorderstes = noten.pop(0)
print(vorderstes)
print(noten)
```
:::
:::def
### Element aus der Liste entfernen `remove()`

```py live_py slim
noten = [3.5, 5, 4.5, 4, 5, 6]

# 11) Erstes Element mit dem Wert 5 aus der Liste entfernen
noten.remove(5)
print(noten)
```
:::

:::def
### Mittelwert `statistics.mean()`

```py live_py slim
import statistics

noten =[3.5, 5, 4.5, 4, 5, 6]

mittelwert = statistics.mean(noten)
print(mittelwert)
```

Weitere Funktionen

👉 https://docs.python.org/3/library/statistics.html
:::

:::def
### Leere Liste `[]`
```py live_py slim
# Leere Liste erstellen
noten = []
print(noten)
```
:::
:::def
### Liste mit Text
```py live_py slim
# Liste mit Strings
noten =['gut', 'erfüllt', 'mangelhaft', 'erfüllt']
print(noten)
```
:::

## Zweidimensionale Listen

Man kann in Python auch zwei- oder gar *n*-dimensionale Listen haben. Für Python ist das nichts anderes, als eine Liste, deren Elemente wiederum Listen sind.
Für jede zusätzlich Dimension wird eine weitere Verschachtelungsstufe hizugefügt.
Bei zwei Dimensionen kann man auf diese Wiese in Python Matrizen, bzw. Tabellen mit mehreren Zeilen und Spalten darstellen.

:::def
### 3 x 3 Matrix
Eine Matrix ist eine Liste von Listen
```py live_py slim
matrix_3x3 = [
    [1, 2, 3], 
    [4, 5, 6], 
    [7, 8, 9]
]
print(matrix_3x3)
```
:::

:::def
### Zugriff `[][]`
Auf einzelne Element in der Matrix zugreifen

```py live_py slim
# kann auch auf einer Zeile geschrieben werden:
matrix_3x3 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

# 3. Wert in 1. Zeile verändern
matrix_3x3[0][2] = 0
# Werte ausgeben
print(matrix_3x3[0][2])
print(matrix_3x3[2][0])
```
:::

:::def 
### Schleife über Zeilen

Schleife über einzelne Zeilen -> Zeilen sind wieder Listen
```py live_py slim
matrix_3x3 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
for zeile in matrix_3x3:
    print(zeile)
```
:::

:::def
### Durch alle Elemente Iterieren
Dazu wird eine **verschachtelte Schleife** über Zeilen und Spalten verwendet.
```py live_py slim
matrix_3x3 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
for zeile in matrix_3x3:
    for zahl in zeile:
        print(zahl)
```

Oder man greift über Zeilen- (`i`) und Spaltenindices (`j`) auf die Elemente zu:
```py live_py slim
matrix_3x3 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
for i in range(len(matrix_3x3)):
    for j in range(len(matrix_3x3[i])):
        print(f'(i: {i}, j: {j}) =', matrix_3x3[i][j])
```
:::

:::warning Häufige Fehlerquellen

Exotisches (und oft Grund für Fehler):
- Innere Listen sind unterschiedlich lang durch
    - Anhängen eines weiteren Elementes
    - Anhängen einer weiteren Zeile mit unterschiedlicher Länge
    - ...
- Einfügen eines String (oder irgend etwas anderes) in die äussere oder innere Liste

```py live_py slim
matrix_3x3 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

matrix_3x3[1].append(13)
matrix_3x3.append([31])
matrix_3x3.insert(2, 'blabla')

for zeile in matrix_3x3:
    print(zeile)
```
:::

## List Comprehension

Hier sehen Sie, wie man auf einfache Art und Weise eine Liste erzeugen und gleich mit bestimmten Werten füllen kann, man sagt __intialisieren__. Der Teil zwischen den `[]` wird als Listen-Abstraktion (englisch **list comprehension**) bezeichnet.

:::def
### Liste mit `1` initialisieren
Liste mit 10 Elementen. Alle enthalten den Wert 1.
```py live_py slim
ones = [1 for i in range(10)]
print(ones)
```
:::

:::def
### Zahlen von 0 bis 9
Liste mit den Zahlen 0 bis 9 initialisieren:
```py live_py slim
zahlen = [i for i in range(10)]
print(zahlen)
```
:::

:::def
### Gerade Zahlen
Liste mit 10 geraden Zahlen, beginnend bei 0.
```py live_py slim
gerade_zahlen = [2*i for i in range(10)]
print(gerade_zahlen)
```
:::

:::def
### `5x10`-Matrix
`5x10`-Matrix von lauter `0` (5 Zeilen, 10 Spalten)
```py live_py slim
zeros_5x10 = [
    [0 for j in range(10)] for i in range(5)
]
print(zeros_5x10)
```
:::

:::def
### `5x10`-Matrix, Durchnummeriert
Elemente haben aufsteigende Werte, beginnend bei `0`.
Der
```py live_py slim
matrix = [
    [i*10 + j for j in range(10)] for i in range(5)
]
print(matrix)
```
:::