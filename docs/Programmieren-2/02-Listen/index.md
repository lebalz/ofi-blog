---
sidebar_label: Listen
sidebar_custom_props:
  id: 545304e4-4ba4-44d0-ba91-cabe6ae086ad
---
import Strukto from '@site/src/components/struktogramm/Strukto';

# Listen

Zum Speichern von **mehreren Werten** unter einem **einzigen Namen** verwendet man in Python Listen. Man kann sich __Listen__ als Tabellen mit einer Spalte vorstellen. Die Zellen in der Tabelle werden als **Elemente** bezeichnet und sind durchnummeriert. So kann man einzelne in der Liste gespeichert Werte unterscheiden. Die Nummer eines Elements wird als dessen **Index** bezeichnet.

:::important Wichtig
- Das erste Element in der Liste trägt den Index 0.
- Der Index des letzten Elementes ist die Länge der Liste minus 1.
:::

Das folgende Bild illustriert dies für eine Liste mit 4 Noten. Die **Länge** der Liste ist **4**, das letzte Element trägt den **Index 3**.

Index
: 　**Wert**
`0`
: :mdi-arrow-right-thin: `4.5`
`1`
: :mdi-arrow-right-thin: `5`
`2`
: :mdi-arrow-right-thin: `3.5`
`3`
: :mdi-arrow-right-thin: `5.5`

In Python kann man diese Liste mit eckigen Klammern `[` `]` wie folgt erzeugen:

```py live_py slim
noten = [4.5, 5, 3.5, 5.5]
print('Die vierte Note war eine', noten[3])
```

Im Beispiel wird die vierte Note mit dem Index `3` ausgegeben.

## Python Listen: Befehle

:::def
### Liste erzeugen
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

## Listen Untersuchen
:::def
### Länge einer Liste: `len(<liste>)`

```py live_py slim
noten = [4.5, 5, 3.5, 5.5]

print(len(noten))
```
:::

:::def
### Maximum: `max(<liste>)`
Gibt das maximale Element einer numerischen Liste zurück

```py live_py slim
noten = [4.5, 5, 3.5, 5.5]
print('Beste Noten', max(noten))
```
:::

:::def
### Minimum: `min(<liste>)`
Gibt das minimale Element einer numerischen Liste zurück

```py live_py slim
noten = [4.5, 5, 3.5, 5.5]
print('Schlechteste Noten', min(noten))
```
:::

:::def
### Wert in einer Liste? `<wert> in <liste>`
Überprüft, ob sich ein Wert in einer Liste befindet

```py live_py slim
noten = [4.5, 5, 3.5, 5.5]
if 6 in noten:
    print('Glückwunsch, du hast min. einmal eine 6 geschrieben')
else:
    print('Du hast noch keine 6 geschrieben')
```
:::

:::def
### Anzahl Elemente mit einem Wert? `<liste>.count(<wert>)`
Zählt, wie oft sich ein Wert in einer Liste befindet. 

```py live_py slim
noten = [4.5, 5, 3.5, 5.5, 5]
for i in [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6]:
    if noten.count(i) > 0:
        print(f'Anzahl {i}: {noten.count(i)}')
```
:::

## Elemente abfragen


:::def
### Erstes Element: `<liste>[0]`

```py live_py slim
noten = [4.5, 5, 3.5, 5.5]
if len(noten) > 0:
    print(noten[0])
```

Bemerken Sie: es wird zuerst überprüft, ob die Liste überhaupt ein Element enthält. Nur dann wird dieses Element abgerufen und ausgegeben.
:::


:::def
### Letztes Element `<liste>[-1]`

```py live_py slim
noten = [4.5, 5, 3.5, 5.5]
if len(noten) > 0:
    print(noten[-1])
    # oder gleichbedeutend
    print(noten[len(noten) - 1])
```
:::

:::def
### Fehler: IndexError
Fragt man einen Index ab, den es nicht gibt (weil es zu wenige Elemente in der Liste hat), so entsteht ein `IndexError`.

Beispiel: 
```py live_py slim
noten = [3.5, 6, 5, 4.5]

# Eine Liste mit 4 Elementen: Grösster Index ist 3
noten[4] = 6
```
:::

## Elemente Verändern

:::def
### Zuordnung: `<liste>[index] = <wert>`

Ein Element in der Liste kann durch eine Zuordnung verändert werden. Im untenstehenden Beispiel werden alle ungenügenden Noten auf eine `5` gesetzt.
```py live_py slim
noten = [4.5, 5, 3.5, 5.5]
for i in range(len(noten)):
    if noten[i] < 4:
        noten[i] = 5
print(noten)
```
:::

## Elemente Hinzufügen/Entfernen

:::def
### hinzufügen: `<liste>.append(<wert>)`

`append` fügt ein neues Element am **Ende** der Liste hinzu.

```py live_py slim
noten = [4.5, 5, 3.5, 5.5]
print('Ursprünglich', noten)
noten.append(6)
print('Neu', noten)
```
:::details An beliebiger Stelle einfügen: `<liste>.insert(<index>, <wert>)`

```py live_py slim
noten = [4.5, 5, 3.5, 5.5]
print('Ursprünglich', noten)
noten.insert(1, 6) # Bei Index 1 (2. Stelle) wird eine 6 eingefügt
print('Neu', noten)
```
:::
:::

:::def
### entfernen: `<liste>.pop(<index>)`
Entfernt das Element an der Stelle `index` und gibt dieses zurück:

```py live_py slim
noten = [4.5, 5, 3.5, 5.5]
entfernt = noten.pop(2)
print('Entfernt', entfernt)
print('Noten', noten)
```
:::

:::def
### Aufsteigend sortieren `<liste>.sort()`
```py live_py slim
noten = [3.5, 6, 5, 4, 4.5, 5]

noten.sort()
print(noten)
```
:::