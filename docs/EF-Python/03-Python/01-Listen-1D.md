---
sidebar_label: "Listen 1D"
sidebar_custom_props:
  id: ad4d9802-8e3b-4706-bf2f-b6cac09a6cbd
---
import Hint from '@site/src/components/Solution/Hint'

# Listen

Zum Speichern von **mehreren Werten** unter einem **einzigen Namen** verwendet man in Python Listen. Man kann sich __Listen__ als Tabellen mit einer Spalte vorstellen. Die Zellen in der Tabelle werden als **Elemente** bezeichnet und sind durchnummeriert. So kann man einzelne in der Liste gespeichert Werte unterscheiden. Die Nummer eines Elements wird als dessen **Index** bezeichnet. [^1]

:::important Wichtig:
- Das erste Element in der Liste trägte den Index 0.
- Der Index des letzten Elementes ist die Länge der Liste minus 1.
:::

Das folgende Bild illustriert dies für eine Liste mit 4 Noten. Die **Länge** der Liste ist **4**, das letzte Element trägt den **Index 3**.

<div className="slim-table center">

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
### Schleife über Listen-Indices
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

## Aufgaben
:::aufgabe Primzahlen

Schreiben Sie ein Programm welches eine Liste mit allen Primzahlen zwischen 1 und 100 erstellt und diese Liste am Schluss auf der Konsole ausgibt.

Klonen Sie dazu zuerst Ihr EF-Projekt auf Ihren Laptop. Erstellen Sie innerhalb des Projekts einen Ordner mit dem Namen __Übungen__ und darin eine neue Datei mit dem Namen __Primzahlen.py__.

Programmieren Sie anschliessend einen geeigneten Algorithmus zur Lösung des Problems.

<Hint>

Um den Rest bei einer Division zu berechnen, kann der Modulo-Operator verwendet werden.

:::def
### Modulo `%`
Um den ganzzahligen Rest bei der Division von zwei ganzen Zahlen zu bestimmen, wird der Modulo-Operator verwendet.
Biespiel: Was ist der ganzzahlige Rest von $7 / 5$? --> 2
```py live_py slim
print(7 % 5)
```
:::
</Hint>

Wenn Ihr Programm fertig ist und tut, was es soll:
- __Stagen__ Sie die Änderungen
- schreiben eine Commit-Nachricht und erstellen einen __commit__ 
- __Pushen__ Sie die Änderungen auf GitHub.

Die oben beschriebenen Schritte werden Ihnen im angehängten Screencast gezeigt.
:::

[^1]: Quelle [sdg](https://gitlab.gbsl.website/gymbefin23/material/-/snippets/11)
