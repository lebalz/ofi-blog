---
title: XOR-Verschlüsselung
---

import Answer from "@site/src/components/Answer";

# XOR-Verschlüsselung [^1]

Da wir nun mit Bits arbeiten und nicht mehr mit Buchstaben, müssen wir nach anderen Möglichkeiten zur Verschlüsselung suchen. Alphabetverschiebungen wie bei Caesar und Substitutionen sind nicht mehr geeignete Mittel, wenn nur die Zahlen `0` und `1` zur Verfügung stehen.

Nebst den bekannten Operationen,  *Addition, SUbtraktion, Multiplikation und Division*, kann ein Computer auch noch weitere Operationen auf zwei Binärzahlen anwenden. Eine solche Operation ist das **XOR**:

> Exclusive or or exclusive disjunction is a logical operation that is 1 if and only if its arguments differ (one is 1, the other is 0).[^2]

XOR kann auch zur Verschlüsselung verwendet werden. Dabei wird jeweils 1 Bit des Klartextes mit einem Bit des Schlüssels verrechnet. Das Ergebnis ist 1 Bit des Geheimtextes.

Die Wahrheitstabelle sieht folgendermassen aus:

:::cards
***--flex-basis=13em

### Verschlüsselung

<div className="slim-table normal-header">

|  *p*  |  *k*  | *c* = *p* **XOR** *k* |
| :---: | :---: | :-------------------: |
|   0   |   0   |           0           |
|   0   |   1   |           1           |
|   1   |   0   |           1           |
|   1   |   1   |           0           |

</div>

*p*: *plain text* (Klartext) <br/>
*k*: *key* (Schlüssel) <br/>
*c*: *cipher* (Verschlüsselt)

***--flex-basis=13em

### Entschlüsselung

<div className="slim-table normal-header">

|  *c*  |  *k*  | *p* = *c* **XOR** *k* |
| :---: | :---: | :-------------------: |
|   0   |   0   |           0           |
|   1   |   1   |           0           |
|   1   |   0   |           1           |
|   0   |   1   |           1           |

</div>
:::

Analog zu ROT13 gilt auch hier: Die Verschlüsselung ist identisch mit der Entschlüsselung, da Folgendes gilt:

$$\
c \text{ XOR } k = (p \text{ XOR } k) \text{ XOR } k = p$$

Dies können Sie mit den Tabellen oben leicht überprüfen.

:::aufgabe Aufgabe XOR-Verschlüsselung

Verschlüsseln Sie die Bitfolge mit dem angegebenen Schlüssel

- `10100 11101 10110` (Bitfolge des Klartexts)
- `00101 01010 11100` (Bitfolge des Schlüssels)

### Bitfolge des Geheimtexts
<Answer type="string" webKey="79c55c56-7d5f-4c7f-95d3-38aed13e16ad" solution="100011011101010" sanitizer={(val) => val.replace(/\s/g, '')} />

:::


:::aufgabe Aufgabe Textverschlüsselung mit XOR

Sie erhalten von einer Kollegin folgende verschlüsselte Nachricht:
```
01010 00100 01010 11011 00000
```

Als Schlüssel haben Sie das Wort `MACHT` abgemacht.

1. Mit Pentacode codierter Schlüssel  
<Answer type="string" webKey="4159b846-71e5-4205-9907-975e3092c00c" solution="01101 00001 00011 01000 10100" sanitizer={(val) => val.replace(/\s/g, '')} />

2. Binär entschlüsselte Nachricht
<Answer type="string" webKey="c4e4f353-6f68-454a-b0ee-ac23695e61c5" solution="00111 00101 01001 10011 10100" sanitizer={(val) => val.replace(/\s/g, '')} />

3. Klartext (binär entschlüsselte Bitfolge mit Pentacode zurückverwandeln)
<Answer type="string" webKey="bd96e44e-96a7-404e-8d55-ed7007e1309a" solution="GEIST" sanitizer={(val) => val.trim().toUpperCase()} />

:::



:::aufgabe Aufgabe Bildverschlüsselung mit XOR

1. Zeichnen Sie ein 5x5-Pixel-Bild (mit Hilfe des interaktiven Tools auf der vorherigen Seite: Kopieren Sie das Bild und fügen es unten ein. Halten Sie auch die Bitfolge fest)
2. Verschlüsseln Sie die Bitfolge mit dem Schlüssel `ABCDE`.
3. Wandeln Sie die resultierende Bitfolge wieder in ein Bild um (halten Sie das Bild fest).
4. Was geschieht, wenn Sie daraus mit Pentacode einen Text erstellen?

<Answer type="text" webKey="87a642b5-0a0b-4da3-a808-a4629294f359" />

:::


[^1]: Quelle: [rothe.io](https://rothe.io/?b=crypto&p=353789)
[^2]: Quelle: [Germundsson, Roger; Weisstein, Eric](http://mathworld.wolfram.com/XOR.html)