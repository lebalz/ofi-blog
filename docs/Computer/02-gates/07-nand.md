---
title: 7. NAND-Gatter
---

# 7. NAND-Gatter

Ein NAND-Gatter (engl. *not and*) hat der Ausgang Y dann den Wert 0️⃣, wenn Eingange A **und** Eingang B den Wert 1️⃣ haben.

|   A   |   B   |   Y   |
| :---: | :---: | :---: |
|   0   |   0   |   1   |
|   0   |   1   |   1   |
|   1   |   0   |   1   |
|   1   |   1   |   0   |

In Schaltplänen wird ein NAND-Gatter mit folgendem Symbol dargestellt:

![Symbol für ein NAND-Gatter](images/07-nand-gate.svg)

## Interaktive Schaltung

<v-circuit id="rothe-nand-gate"/>

Ein NAND-Gatter kann aus einem AND-Gatter, gefolgt von einem Inverter zusammengesetzt werden:

![](images/07-nand-circuit.svg)


## Universalgatter

Das NAND-Gatter hat eine besondere Bedeutung. Dank dem Mathematiker George Boole kann bewiesen werden, dass **jede** logische Schaltung ausschliesslich aus NAND-Gatter aufgebaut werden kann. Ausserdem sind NAND-Gatter physikalisch relativ einfach aufzubauen. Deshalb bilden NAND-Gatter den Grundbaustein für heutige Mikrochips.

:::aufgabe

1. Baue eine Inverter-Schaltung ausschliesslich aus NAND-Gattern auf.

2. ⭐️ Baue eine AND-Schaltung ausschliesslich aus NAND-Gattern auf.

3. ⭐️ Baue eine OR-Schaltung  ausschliesslich aus NAND-Gattern auf.

4. ⭐️ Baue eine XOR-Schaltung ausschliesslich aus NAND-Gattern auf.

***

**Inverter aus NAND-Gattern**

![](images/07-inverter-nand-circuit.svg)

**AND-Schaltung aus NAND-Gattern**

![](images/07-and-nand-circuit.svg)

**OR-Schaltung aus NAND-Gattern**

![](images/07-or-nand-circuit.svg)

**XOR-Schaltung aus NAND-Gattern**

![](images/07-xor-nand-circuit.svg)

:::
