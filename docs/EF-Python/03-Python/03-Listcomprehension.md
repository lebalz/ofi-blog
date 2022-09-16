---
sidebar_custom_props:
  id: de38c04c-c7b6-4565-8778-dffc4686b4c2
  ref: https://gitlab.gbsl.website/gymbefin23/material/-/snippets/11
---


# Listen Erzeugen

:::aufgabe
<Answer type="state" webKey="a4fb080a-8feb-443d-bf2d-5d7ddc92f685" />
Oft wünscht man Listen, welche schon mit bestimmten Werten abgefüllt sind, man sagt initialisiert sind.

Unten sehen Sie ein paar hilfreiche Beispiele. Führen Sie diese aus und bearbeiten Sie die Aufgabe.

Markieren Sie anschliessend diese Aufgabe als erledigt.
:::

Hier sehen Sie, wie man auf einfache Art und Weise eine Liste erzeugen und gleich mit bestimmten Werten füllen kann, man sagt __intialisieren__. Der Teil zwischen den `[]` wird als Listen-Abstraktion (englisch **list comprehension**) bezeichnet.

### Listen mit `range` erzeugen

:::def

Mit dem von Schleifen bekannten `range` Befehl können auch Listen erzeugt werden.

`range(max_zahl)`
: erzeugt einen Bereich von `0` bis (ohne mit!) `max_zahl`
: z.B. `range(5)` => `0, 1, 2, 3, 4`
`range(start, m)`
: erzeugt einen Bereich von `start` bis (ohne mit!) `m`
: z.B. `range(3, 7)` => `3, 4, 5, 6`
`range(s, m, schritt)`
: erzeugt einen Bereich von `s` bis (ohne mit!) `m` mit der gegebenen Schrittweite `schritt`
: z.B. `range(3, 13, 4)` => `3, 7, 11`

Um aus einem Bereich (sog. `Iterator`) eine Liste zu erzeugen, muss der Bereich mit dem Befehl `list()` in eine Liste umgewandelt werden:

```py live_py slim
one2ten = list(range(1, 11))
print('1 bis 10:', one2ten)

odd_numbers = list(range(1, 20, 2))
print('Ungerade Zahlen:', odd_numbers)

ten2zero = list(range(10, -1, -1))
print('Von Zehn rückwärts:', ten2zero)
```
:::

### Listen mit *List Comprehension* erzeugen

:::def
### Liste mit `1` initialisieren
Liste mit 10 Elementen. Alle enthalten den Wert 1.
```py live_py slim
# Wert 1 in Liste setzen
#     \    ...für alle Zahlen im Bereich 0 bis 10
#      \       /
ones = [1 for i in range(10)]
print(ones)
```
:::

:::def
### Zahlen von 0 bis 9
Liste mit den Zahlen 0 bis 9 initialisieren:
```py live_py slim
#  Aktuellen Wert des Schleifenzählers i setzen
#       \    ...für alle Zahlen im Bereich 0 bis 10
#        \       /
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

:::aufgabe
<Answer type="state" webKey="306506df-f70e-4325-a3fd-30430288c666" />

Initialisieren Sie mit *List Comprehension* eine Liste mit den
- ersten zehn Quadratzahlen
- ersten zehn Zweierpotenzen
- die Zweierpotenzen von $2^{100}$ bis $2^{110}$
- die natürlichen Zahlen rückwärts von 20 bis und mit 10

```py live_py id=ab9518d2-b113-41da-9d1f-cd48f475c1fc
squares = [] # initialisierung anpassen!
power2 = []
power2_100 = []
twenty2ten = []

print(squares)
print(power2)
print(power2_100)
print(twenty2ten)
```
<Solution webKey="b54e6cc1-6863-4bcc-86a7-bfeb328b2a7b">

```py live_py slim
squares = [x*x for x in range(10)]
power2 = [2**x for x in range(10)]
power2_100 = [2**(x+100) for x in range(10)]
twenty2ten = [20 - x for x in range(11)]

print(squares)
print(power2)
print(power2_100)
print(twenty2ten)
```
</Solution>
:::
:::def
### `5x10`-Matrix
`5x10`-Matrix von lauter `0` (5 Zeilen, 10 Spalten)
```py live_py slim
_print = print
def print(mat):
    if type(mat).__name__ != 'list' or len(mat) < 1 or type(mat[0]).__name__ != 'list':
        return _print(mat)
    max_val = max([max(z) for z in mat])
    pad_sz = len(str(max_val))
    _print('['); [_print(f'  [{", ".join(list(map(lambda v: str(v).rjust(pad_sz, " "), z)))}],') for z in mat]; _print(']')
### PRE
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
_print = print
def print(mat):
    if type(mat).__name__ != 'list' or len(mat) < 1 or type(mat[0]).__name__ != 'list':
        return _print(mat)
    max_val = max([max(z) for z in mat])
    pad_sz = len(str(max_val))
    _print('['); [_print(f'  [{", ".join(list(map(lambda v: str(v).rjust(pad_sz, " "), z)))}],') for z in mat]; _print(']')
### PRE
matrix = [
    [i * 10 + j for j in range(10)] for i in range(5)
]
print(matrix)
```
:::

