---
title: 6. Übungen
---

import BinDecoder from '@site/src/components/VisualizationTools/BinDecoder'

# Übungen UTF-8

:::aufgabe 1. Wie viele Zeichen?

Wie viele Zeichen sind in folgender bit-Squenz codiert?

```
11100010 10011101 10000000 01000110 11010011 10111111 11110110 10011010 10101010 10001111 00010010
```

<Answer type="string" webKey="e2835c91-5519-4aaa-b28f-08d83e37c5e6" solution="5"/>

:::

:::aufgabe 2. UTF-8 Decodieren

Folgende bit-Sequenzen sind UTF-8 Codiert. Welche Dezimalzahlen sind codiert?

```
11000010 10011001
```
<Answer type="string" webKey="4ced8d67-dfd8-4d8b-98c8-691303bc8b34" solution="153"/>

---

```
11100001 10000000 10001111
```

<Answer type="string" webKey="a5def7c0-be31-442a-ad2b-b48acc9fce13" solution="4111"/>

:::


:::aufgabe 3. UTF-8 Codieren

Codieren Sie folgende bit-Sequenz zu UTF-8:

```
1100 10010101 10010110
```

<Answer type="string" webKey="5d40fc8e-0755-4e83-b76d-dc8c975c6b18" solution="11110011 10001001 10010110 10010110" sanitizer={(val) => val.replaceAll(/[^\d]/g, '')}/>

---

Codieren Sie die Zahl `260` zu UTF-8:

<Answer type="string" webKey="c324c22e-e5bc-4da4-b474-f7d78b49fa75" solution="11000100 10000100" sanitizer={(val) => val.replaceAll(/[^\d]/g, '')}/>

:::


:::aufgabe 4. UTF-8 Emojis

Codieren Sie drei Weihnachts-Emojis zu UTF-8:
1. Verwenden Sie Python, um die Ordnungszahl der Emojis herauszufinden.
2. Wandeln Sie die Ordnungszahlen ins Binäre um (auch hier darf Python verwendet werden)
3. Codieren Sie die Binärzeichen-Kette zu UTF-8 und halten Sie das Resultat fest.
4. Probieren Sie Ihre Lösung im UTF-8 Decodier-Modus

```py live_py id=fdc14c44-1f31-4860-a5aa-45d6f388e74b
```

<Answer type="text" webKey="96fc016d-d9d2-4956-919b-ecbc2c31d1f2" default="🌲" />

<BinDecoder />

:::
