---
sidebar_custom_props:
  id: 48574afc-f9c3-4780-bee3-3de212180467
  source:
    name: Gym-Kirchenfeld
    ref: https://gitlab.gymkirchenfeld.ch/teach/ref/-/tree/main/pgzero
---

import window from './window.raw.py';
import CodeBlock from '@theme/CodeBlock';

# Fenster

## Fenster definieren

```py
TITLE
```
legt den Fenstertitel fest.

```py
WIDTH
```
legt die Breite des Fensters in Pixel fest.

```py
HEIGHT
```
legt die Höhe des Fensters in Pixel fest.

<CodeBlock language='python'>
{window}
</CodeBlock>

## Fenster verwenden

Diese Anweisungen dürfen **nur** in einem Unterprogramm verwendet werden.

```py
screen.width
```
liefert die Breite des aktuellen Fensters in Pixel zurück.

```py
screen.height
```
liefert die Höhe des aktuellen Fensters in Pixel zurück.

```py
screen.clear()
```
füllt das Fenster mit der Farbe Schwarz.

```py
screen.fill(farbe)
```
füllt das Fenster mit der angegebenen Farbe. `farbe` muss ein RGB-Tupel sein.

## Fenster schliessen

```py
quit()
```
schliesst das Fenster.
