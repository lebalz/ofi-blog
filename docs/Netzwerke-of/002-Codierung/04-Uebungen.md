---
title: Übungen
---

import Answer from "@site/src/components/Answer";

# Übungen UTF-8

:::aufgabe 1. Wie viele Zeichen?

Wie viele Zeichen sind in folgender bit-Squenz codiert?

```
1110'0010 1001'1101 1000'0000 0100'0110 1101'0011 1011'1111 1111'0110 1001'1010 1010'1010 1000'1111 0001'0010
```

<Answer type="string" id="q1" solution="5"/>

:::

:::aufgabe 2. UTF-8 Decodieren

Folgende bit-Sequenzen sind UTF-8 Codiert. Welche Dezimalzahlen sind codiert?

```
1100'0010 1001'1001
```
<Answer type="string" id="q2" solution="153"/>

---

```
1110'0001 1000'0000 1000'1111
```

<Answer type="string" id="q3" solution="4111"/>

:::


:::aufgabe 3. UTF-8 Codieren

Codieren Sie folgende bit-Sequenz zu UTF-8:

```
1100'1001'0101'1001'0110
```

<Answer type="string" id="q4" solution="11110011 10001001 10010110 10010110" sanitizer={(val) => val.replaceAll(/[^\d]/g, '')}/>

---

Codieren Sie die Zahl `260` zu UTF-8:

<Answer type="string" id="q5" solution="11000100 10000100" sanitizer={(val) => val.replaceAll(/[^\d]/g, '')}/>

:::
