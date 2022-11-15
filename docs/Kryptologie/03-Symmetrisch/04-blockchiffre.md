---
sidebar_custom_props:
  id: 6ebe4267-65ee-4376-affa-910edd23b5df
  source:
    name: rothe.io
    ref: https://rothe.io/?b=crypto&p=894637
---

import {TextEditor} from "@site/src/components/VisualizationTools/Pentacode";

# Blockchiffre

Im vorherigen Beispiel war der Schlüssel gleich lang wie der Klartext. Da dies in der Realität schwierig zu bewerkstelligen ist, wurden **Blockchiffren** erfunden. Sie heissen so, weil der Text nicht mehr als ganzes, sondern in **Blöcken** verschlüsselt wird.

:::info Aktuelle Verschlüsselungsverfahren
Aktuelle Verschlüsselungsverfahren sind so komplex, dass wir sie unmöglich in dieser kurzen Zeit verstehen können. Daher werden wir viele der nachfolgend erwähnten Verfahren nur anhand von Analogien und nicht auf mathematischer Ebene kennenlernen.

Beim Thema Blockchiffren wollen wir aber ins technische eintauchen und uns anhand einer einfachen Verschlüsselung (XOR) anschauen, wie moderne Verschlüsselung funktioniert.
:::

## Blocklänge
Klartext
: `GEHEIMNACHRICHT` 
Key
: `PENTA`

Da der Klartext dreimal so lange ist wie der Schlüssel, muss der Text in drei Teile aufgeteilt werden, welche wir separat verschlüsseln. Die Blocklänge entspricht also der Schlüssellänge.

## Verschlüsselung in Blöcken
Im folgenden Beispiel wird der oben bereits erwähnte Klartext mit dem Schlüssel bitweise mit XOR verschlüsselt:

:::cards --min-width=445px --class=slim-table,center
#### Block 1
| ⠀    | Text    | Pentacode Block 1               | Geheimtext |
| :--- | :------ | :------------------------------ | :--------- |
| *p*    | `GEHEI` | `00111 00101 01000 00101 01001` |            |
| *k*    | `PENTA` | `10000 00101 01110 10100 00001` |            |
| *c*    |         | `10111 00000 00110 10001 01000` | `W FQH`    |

***
#### Block 2

| ⠀    | Text    | Pentacode Block 2               | Geheimtext |
| :--- | :------ | :------------------------------ | :--------- |
| *p*    | `MNACH` | `01101 00101 10011 10100 10010` |            |
| *k*    | `PENTA` | `10000 00101 01110 10100 00001` |            |
| *c*    |         | `11101 00000 11101 00000 10011` | `. . S`    |

***
#### Block 3

| ⠀    | Text    | Pentacode Block 3               | Geheimtext |
| :--- | :------ | :------------------------------ | :--------- |
| *p*    | `RICHT` | `00101 00110 00110 00101 01110` |            |
| *k*    | `PENTA` | `10000 00101 01110 10100 00001` |            |
| *c*    |         | `10101 00011 01000 10001 01111` | `UCHQO`    |

:::

:::aufgabe Aufgabe XOR-Blockchiffre
<Answer type="state" webKey="71021726-0ecd-4e23-a12c-f56d8102460d" />

<TextEditor />

Verschlüsseln Sie den folgenden Text mit der XOR-Blockchiffre:


Text
: `PAKET ZUGESTELLT`

Schlüssel
: `BETA`

1. Codieren Sie zuerst den Text mit Pentacode
2. Codieren Sie anschliessend den Schlüssel mit Pentacode.
3. Verschlüsseln Sie den binär dargestellten Text anschliessend mit dem binär dargestellten Schlüssel mittels XOR-Blockchiffre.
4. Decodieren Sie diesen wiederum mit Pentacode und überprüfen Sie die Lösung.

Halten Sie Ihren Lösungsweg unten fest:

<Answer type="text" webKey="3bce79ec-5813-4d29-a7c5-3fec156bd472" monospace />

### Lösung

<Answer type="string" webKey="773c8965-eecf-43fa-801f-d079fb81ad20" solution="RD@DVENTE GUGIXU" sanitizer={(val) => val.trim().toUpperCase()} />


:::