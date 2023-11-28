---
sidebar_custom_props:
  id: 2d367a2f-7784-4cf9-b4c2-365f8979f649
---

import {TextEditor, PixelEditor} from "@site/src/components/VisualizationTools/Pentacode";

# Pentacode

Der Pentacode ist keine offizielle Codierung. Sie wurde von [Stefan Rothe und Tom Jampen](https://rothe.io/?b=crypto&p=1349) für den Unterricht entwickelt, um erstens ein kurzes Alphabet ohne unnötige Zeichen zu verwenden und zweitens einen möglichst kurzen Binärcode zu erhalten.

## Albhabet

Mit 5 Bits (*[Penta bedeutet 5]*) können $2^5 = 32$ Zeichen codiert werden. Neben dem Leerschlag hat es Platz für die Sonderzeichen __?__, __.__, __,__, __-__ und __@__.

:::details[Penta-Tabelle]

:::flex{columns=2 gap=2em}
::br{.slim-table,no-comments}
| Buchstabe    | Zahl |   Binär |
| :----------- | ---: | ------: |
| *Leerschlag* |    0 | `00000` |
| `A`          |    1 | `00001` |
| `B`          |    2 | `00010` |
| `C`          |    3 | `00011` |
| `D`          |    4 | `00100` |
| `E`          |    5 | `00101` |
| `F`          |    6 | `00110` |
| `G`          |    7 | `00111` |
| `H`          |    8 | `01000` |
| `I`          |    9 | `01001` |
| `J`          |   10 | `01010` |
| `K`          |   11 | `01011` |
| `L`          |   12 | `01100` |
| `M`          |   13 | `01101` |
| `N`          |   14 | `01110` |
| `O`          |   15 | `01111` |
::br{.slim-table,no-comments}

| Buchstabe | Zahl |   Binär |
| :-------- | ---: | ------: |
| `P`       |   16 | `10000` |
| `Q`       |   17 | `10001` |
| `R`       |   18 | `10010` |
| `S`       |   19 | `10011` |
| `T`       |   20 | `10100` |
| `U`       |   21 | `10101` |
| `V`       |   22 | `10110` |
| `W`       |   23 | `10111` |
| `X`       |   24 | `11000` |
| `Y`       |   25 | `11001` |
| `Z`       |   26 | `11010` |
| `,`       |   27 | `11011` |
| `-`       |   28 | `11100` |
| `.`       |   29 | `11101` |
| `?`       |   30 | `11110` |
| `@`       |   31 | `11111` |
:::
:::
## Editor

<TextEditor />

## Schwarzweiss-Bild

<PixelEditor />
