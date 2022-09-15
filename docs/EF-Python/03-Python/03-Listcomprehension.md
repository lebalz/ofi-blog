---
sidebar_label: "List Comprehension"
sidebar_custom_props:
  id: de38c04c-c7b6-4565-8778-dffc4686b4c2
  ref: https://gitlab.gbsl.website/gymbefin23/material/-/snippets/11
---


# List Comprehension

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
_print = print
def print(mat):
    _print('['); [_print(f'  {z},') for z in mat]; _print(']')
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
    _print('['); [_print(f'  {z},') for z in mat]; _print(']')
### PRE
matrix = [
    [i * 10 + j for j in range(10)] for i in range(5)
]
print(matrix)
```
:::

