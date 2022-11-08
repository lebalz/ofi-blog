---
sidebar_custom_props:
  id: 6ebe4267-65ee-4376-affa-910edd23b5df
  source:
    name: rothe.io
    ref: https://rothe.io/?b=crypto&p=894637
---

# Blockchiffre

Im vorherigen Beispiel war der Schlüssel gleich lang wie der Klartext. Da dies in der Realität schwierig zu bewerkstelligen ist, wurden **Blockchiffren** erfunden. Sie heissen so, weil der Text nicht mehr als ganzes, sondern in **Blöcken** verschlüsselt wird.

:::info Aktuelle Verschlüsselungsverfahren
Aktuelle Verschlüsselungsverfahren sind so komplex, dass wir sie unmöglich verstehen können. Daher werden wir viele der nachfolgend erwähnten Verfahren nur anhand von Analogien und nicht auf mathematischer Ebene kennenlernen.

Beim Thema Blockchiffren wollen wir aber kurz eintauchen und uns anhand einer einfachen Verschlüsselung (XOR) anschauen, wie moderne Verschlüsselung funktioniert.
:::

## Blocklänge
Da der Klartext dreimal so lange ist wie der Schlüssel, muss der Text in drei Teile aufgeteilt werden, welche wir separat verschlüsseln. Die Blocklänge entspricht also der Schlüssellänge:

:::flex
*** --class=slim-table --flex-basis=13em

| Klartext   |                                                                                                                              |
| :--------- | :--------------------------------------------------------------------------------------------------------------------------- |
| Buchstaben | `GEHEIMESTREFFEN`                                                                                                            |
| Pentacode  | <span className="monospace">00111 00101 01000 00101 01001 01101 00101 10011 10100 10010 00101 00110 00110 00101 01110</span> |

*** --class=slim-table --flex-basis=13em
| Schlüssel  |                                                                  |
| :--------- | :--------------------------------------------------------------- |
| Buchstaben | `PENTA`                                                          |
| Pentacode  | <span className="monospace">10000 00101 01110 10100 00001</span> |
:::


## Verschlüsselung in Blöcken
Im folgenden Beispiel wird der oben bereits erwähnte Klartext mit dem Schlüssel bitweise mit XOR verschlüsselt:

<div className="slim-table">

| Verschlüsselung    | Text    | Pentacode                       |
| :----------------- | :------ | :------------------------------ |
| Klartext Block 1   | `GEHEI` | `00111 00101 01000 00101 01001` |
| Schlüssel          | `PENTA` | `10000 00101 01110 10100 00001` |
| Geheimtext Block 1 | `W FQH` | `10111 00000 00110 10001 01000` |

| Verschlüsselung    | Text    | Pentacode                       |
| :----------------- | :------ | :------------------------------ |
| Klartext Block 2   | `MESTR` | `01101 00101 10011 10100 10010` |
| Schlüssel          | `PENTA` | `10000 00101 01110 10100 00001` |
| Geheimtext Block 2 | `. . S` | `11101 00000 11101 00000 10011` |

| Verschlüsselung    | Text    | Pentacode                       |
| :----------------- | :------ | :------------------------------ |
| Klartext Block 3   | `EFFEN` | `00101 00110 00110 00101 01110` |
| Schlüssel          | `PENTA` | `10000 00101 01110 10100 00001` |
| Geheimtext Block 3 | `UCHQO` | `10101 00011 01000 10001 01111` |

</div>


:::aufgabe Aufgabe XOR-Blockchiffre

Verschlüsseln Sie den folgenden Text mit der XOR-Blockchiffre:

**Text**: `PAKET ZUGESTELLT`

**Schlüssel**: `BETA`

1. Codieren Sie zuerst den Text mit Pentacode (verwenden Sie das [interaktiven Tool](02-codierung.md#pentacode)).
2. Codierenn Sie anschliessend den Schlüssel mit Pentacode.
3. Verschlüsseln Sie den binär dargestellten Text anschliessend mit dem binär dargestellten Schlüssel mittels XOR-Blockchiffre.
4. Decodieren Sie diesen wiederum mit Pentacode und überprüfen Sie die Lösung.

### Vorgehenseweise

<Answer type="text" webKey="3bce79ec-5813-4d29-a7c5-3fec156bd472" monospace />

### Lösung

<Answer type="string" webKey="773c8965-eecf-43fa-801f-d079fb81ad20" solution="RD@DVENTE GUGIXU" sanitizer={(val) => val.trim().toUpperCase()} />


:::