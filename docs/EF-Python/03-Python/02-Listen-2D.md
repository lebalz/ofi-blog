---
sidebar_label: "Listen 2D"
sidebar_custom_props: 
  id: 4f55c963-d60b-4e97-bab7-cfaa8f8b0cf1
---

# Zweidimensionale Listen

![Zweidimensionale Liste](images/2d-listen.jpeg)

Eine Liste, welche einfach eine Reihe von Zahlen oder Texten enthält, ist eine **eindimensionale** Liste. Aus der Mathematik kennen wir auch Matrizen, oder Tabellen. Diese bestehen aus **Zeilen** und **Spalten**, haben also **zwei Dimensionen**.

Das kann man in Python auch machen. Man muss dazu einfach für jede Zeile eine Liste erzeugen und dann diese Listen als Elemente in einer weiteren Liste speichern. So entsteht eine Liste von Listen.

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

Dies kann man beliebig oft wiederholen und kommt so zu 3-, 4- bis n-dimensionalen Listen.

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
