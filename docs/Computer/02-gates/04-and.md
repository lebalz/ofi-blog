---
title: 4. AND-Gatter
---

# 4. AND-Gatter

Ein AND-Gatter ist eine digitale Schaltung, welche zwei Eingänge und einen Ausgang hat. Der Ausgang Y hat nur dann den Wert 1️⃣, wenn Eingange A **und** Eingang B den Wert 1️⃣ haben.

## Wahrheitstabelle

|   A   |   B   |   Y   |
| :---: | :---: | :---: |
|   0   |   0   |   0   |
|   0   |   1   |   0   |
|   1   |   0   |   0   |
|   1   |   1   |   1   |

In Schaltplänen wird ein AND-Gatter mit folgendem Symbol dargestellt:

![](images/04-and-gate.svg)

## Interaktive Schaltung

<v-circuit id="rothe-and-gate"/>

## Beispiele

### Kaffeemühle

Aus Sicherheitsgründen mahlt die Kaffeemühle nur, wenn gleichzeitig der Deckel geschlossen ist und der Stromschalter eingeschaltet ist.

![](images/04-coffee-mill.svg)

### Heizung mit Hauptschalter

Natürlich können auch mehrere Gatter zu einer Schaltung kombiniert werden. Im folgenden Beispiel soll eine Heizung nur eingeschaltet werden, wenn es kalt ist und der Hauptschalter eingeschaltet ist:

![](images/04-heating-2.svg)

:::aufgabe Aufgaben
Entwirf je eine Schaltung für die folgenden Szenarien. Du kannst **Inverter** und **AND-Gatter** verwenden. Gehe für jedes Szenario so vor:

- Erstelle eine Wahrheitstabelle für das Szenario.
- Entwirf die Schaltung in CircuitVerse inklusive Beschriftung.
- Überprüfe, ob die Schaltung mit der Wahrheitstabelle übereinstimmt.

1. **Heizung:** Eine Heizung soll nur tagsüber eingeschaltet werden, wenn es kalt ist.

    ![](images/04-ex-heating.svg)

2. **Automatische Tür:** Die Tür wird durch einen Motor betrieben. Sie soll nur aufgehen, wenn eine Bewegung entdeckt wird und der Hauptschalter eingeschaltet ist.

    ![](images/04-ex-automatic-door.svg)

3. **Dachfenster:** Ein Dachfenster soll durch einen Motor automatisch geschlossen werden, sobald es regenet. Wenn das Fenster zu ist, drückt es einen Knopf, der bewirkt, dass der Motor ausschaltet wird.

    ![](images/04-ex-roof-window.svg)

***

**Heizung**

![](images/04-ex-heating-solution.svg)

**Automatische Tür**

![](images/04-ex-automatic-door-solution.svg)

**Dachfenster**

![](images/04-ex-roof-window-solution.svg)

:::


:::aufgabe

Analysiere die folgende Schaltung, indem du eine Wahrheitstabelle erstellst. Was macht die Schaltung eigentlich?

![](images/04-cv-3-and.png)
:::


:::aufgabe
#### ⭐️ Zusatzaufgabe

Wie viele unterschiedliche digitale Schaltungen mit zwei Eingängen und einem Ausgang sind möglich?
:::
