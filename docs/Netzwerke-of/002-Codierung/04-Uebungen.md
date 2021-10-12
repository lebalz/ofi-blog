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

<Answer type="string" webKey="e2835c91-5519-4aaa-b28f-08d83e37c5e6" id="q1" solution="5"/>

:::

:::aufgabe 2. UTF-8 Decodieren

Folgende bit-Sequenzen sind UTF-8 Codiert. Welche Dezimalzahlen sind codiert?

```
1100'0010 1001'1001
```
<Answer type="string" webKey="4ced8d67-dfd8-4d8b-98c8-691303bc8b34" id="q2" solution="153"/>

---

```
1110'0001 1000'0000 1000'1111
```

<Answer type="string" webKey="a5def7c0-be31-442a-ad2b-b48acc9fce13" id="q3" solution="4111"/>

:::


:::aufgabe 3. UTF-8 Codieren

Codieren Sie folgende bit-Sequenz zu UTF-8:

```
1100'1001'0101'1001'0110
```

<Answer type="string" id="q4" webKey="5d40fc8e-0755-4e83-b76d-dc8c975c6b18" solution="11110011 10001001 10010110 10010110" sanitizer={(val) => val.replaceAll(/[^\d]/g, '')}/>

---

Codieren Sie die Zahl `260` zu UTF-8:

<Answer type="string" id="q5" webKey="c324c22e-e5bc-4da4-b474-f7d78b49fa75" solution="11000100 10000100" sanitizer={(val) => val.replaceAll(/[^\d]/g, '')}/>

:::
