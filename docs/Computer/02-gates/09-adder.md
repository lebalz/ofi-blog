---
title: 9. Addierer
---

# 9. Addierer

## Binäre Addition

<v-video source="youtube" id="x7ka0QwKciA"/>

:::aufgabe Binäre Addition
Führe eine schriftliche Addition für die folgenden binären Zahlen durch:

- $1001_2 + 110_2$
- $111_2 + 1_2$
- $101_2 + 101_2$

:::

## Halbaddierer

Wie könnte man die Addition zweier einstelliger Zahlen im Binärsystem als Schaltung konstruieren?

$$\begin{aligned}
0 + 0 &= 00_2\\
0 + 1 &= 01_2\\
1 + 0 &= 01_2\\
1 + 1 &= 10_2
\end{aligned}$$

Die entsprechende Schaltung benötigt zwei Eingänge und zwei Ausgänge. Die beiden Eingänge werden für die zwei Summanden verwendet. Die Ausgänge für die Einer- und Zweierstelle des Resultats. Die gesuchte Schaltung muss also folgende Wertetabelle haben:

| A    | B    | Zweier | Einer |
| :--- | :--- | -----: | ----: |
| 0    | 0    |      0 |     0 |
| 0    | 1    |      0 |     1 |
| 1    | 0    |      0 |     1 |
| 1    | 1    |      1 |     0 |

Der Wert der Einerstelle kann durch ein XOR-Gatter berechnet werden, der Wert der Zweierstelle durch ein AND-Gatter. Die Schaltung sieht somit so aus:

<v-circuit id="rothe-half-adder-vertical"/>

:::aufgabe Aufgabe Halbaddierer
1. Erstelle ein neues Projekt in CircuitVerse und nenne es Addierer.
2. Baue den Halbaddierer in CircuitVerse nach und probiere aus, ob die Addition von zwei Bits (inklusive Übertrag) korrekt funktioniert.
3. Benenne die Eingänge mit «A» und «B», sowie die Ausgänge korrekt mit «S» (für «Summe») und «Ü» (für «Übertrag»).
4. Benenne die Schaltung (sprich die Registerkarte) «HA» (für Halbaddierer).
:::

## Volladdierer

Ein Halbaddierer addiert also 2 separate Bit und sorgt dafür, dass neben dem Resultat auch der Übertrag für die nächste Stelle mittels zweitem Ausgang bereitsteht.

Allerdings berücksichtigt ein Halbaddierer nur die beiden zu addierenden Bits am Eingang, ein allfällig zu berücksichtigender Übertrag bleibt unbeachtet.

Wenn zwei mehrstellige binäre Zahlen addiert werden sollen, muss der **Übertrag** berücksichtigt werden. Ab der zweithintersten Stelle muss folgendermassen vorgegangen werden:

1. Die Zifferen an der aktuellen Stelle werden addiert.
2. Zum Resultat wird der Übertrag der vorherigen Stelle addiert.
3. Die höhere Stelle des Resultat wird als Übertrag an die nächste Stelle weitergegeben.

Dies kann mit der folgenden Schaltung realisiert werden. Sie besteht aus zwei Halbaddierern sowie einem OR-Gatter. Mit dem OR-Gatter werden die beiden möglichen Überträge zusammengefasst.

<v-circuit id="rothe-full-adder-vertical"/>

:::aufgabe Aufgabe Volladdierer
Baue basierend auf deiner Halbaddierer-Schaltung einen Volladdierer:

1. Erstelle dazu zuerst die Wahrheitstabelle für den Volladdierer. Der Volladdierer hat drei Eingänge:
    - A (erste Zahl)
    - B (zweite Zahl)
    - Ü (Übertrag)

    und zwei Ausgänge:

    - S (Summe)
    - V (Übertrag)

2. Baue in CircuitVerse eine neue Schaltung (in einer neuen Registerkarte) im Addierer-Projekt und nenne sie «VA» (für Volladdierer).
3. Verwende zum Erstellen des Volladdierers als Baustein die Schaltung «HA», die du bereits hast als Baustein, indem du im Menü _Circuit_ auf _Insert SubCircuit_ klickst und den Halbaddierer einfügst. So wird die Schaltung übersichtlicher.

***
| A    | B    | Ü    |    V |    S |
| :--- | :--- | :--- | ---: | ---: |
| 0    | 0    | 0    |    0 |    0 |
| 0    | 0    | 1    |    0 |    1 |
| 0    | 1    | 0    |    0 |    1 |
| 0    | 1    | 1    |    1 |    0 |
| 1    | 0    | 0    |    0 |    1 |
| 1    | 0    | 1    |    1 |    0 |
| 1    | 1    | 0    |    1 |    0 |
| 1    | 1    | 1    |    1 |    1 |

![](images/09-cv-va.png)
:::

## 4-Bit-Addierer
Wir haben mit dem Volladdierer einen Baustein, der zwei 1-Bit-Zahlen addieren kann – inklusive korrekte Behandlung des Übertrags. Nun wollen wir aus mehreren solchen Bausteinen einen kompletten Addierer bauen, der mehrere Stellen gleichzeitig addieren kann.

:::aufgabe
#### ⭐️ Zusatzaufgabe 4-Bit-Addierer
Versuche, die Halbaddierer-Schaltung so auszubauen, dass drei Eingänge zur Verfügung stehen, damit auch ein vorhandener Übertrag bei der Addition berücksichtigt wird:

1. Baue in CircuitVerse eine neue Schaltung (d.h. eine neue Registerkarte) im Addierer-Projekt und nenne sie «4-Bit-Addierer».
2. Verwende zum Zeichnen der Schaltung einen Halbaddierer-Baustein «HA» sowie drei Volladdierer-Bausteine «VA».
***
**Hinweis**: Zum Addieren der Einer-Stelle braucht es nur einen Halbaddierer, da dort noch kein Übertrag vorhanden sein kann.
***
![](images/09-cv-4-bit-adder.png)
:::
