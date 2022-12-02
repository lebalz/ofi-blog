---
sidebar_custom_props:
  id: 61458f7e-3f61-4ba0-8017-55f246edd942
---

# Nachbarzellen kombinieren

Wenn die Spieler:in ein Feld auswählt, müssen alle Nachbarszellen überprüft werden, ob Sie dieselbe Zahl enthalten und dann allenfalls kombiniert werden. Falls eine Nachbarszelle dieselbe Zahl enthält, so müssen auch dessen Nachbarszellen überprüft werden, ob diese diese Zahl enthalten, usw.

Das Aufdecken der Nachbarschaft endet dort, wo ein Feld aufgedeckt wird, das in seiner Nachbarschaft keine gleiche Zahl enthält.


```
    1   2   3   4   5                           1   2   3   4   5  
  ---------------------                       ---------------------
1 | 2 | 4 | 1 | 8 | 8 |                     1 | 2 | 4 | 1 | 8 | 8 |
  ---------------------                       ---------------------
2 | 4 | 2 | 8 | 4 | 1 |        S2, Z5       2 |   | 2 | 8 |   | 1 |
  ---------------------       -------->       ---------------------
3 | 4 | 4 | 4 | 4 | 2 |                     3 |   |   |   |   | 2 |
  ---------------------                       ---------------------
4 | 2 | 8 | 1 | 4 | 1 |                     4 | 2 | 8 | 1 |   | 1 |
  ---------------------                       ---------------------
5 | 2 | 4 | 4 | 4 | 4 |                     5 | 2 |   |   |   |   |
  ---------------------                       ---------------------
```



## Flächen füllen
Dieses Problem ist ein bekanntes Problem aus der Computergrafik. Es tritt zum Beispiel auf, wenn in einer Rastergrafik eine begrenzte Fläche mit einer bestimmten Farbe gefüllt werden soll.

Gesucht ist also ein Algorithmus, welcher diese Problem löst.
Wir lernen dabei eine neue Form von Algorithmen kennen, die **Rekursion**.

![](images/Recursive_Flood_Fill_4.gif)

Die Grundidee ist folgende:

Das grosse Problem "ganze Fläche mit beliebigen Grenzen einfärben" wird zunächst reduziert auf das kleinstmögliche Problem, einen "einzelnen Pixel einfärben". Dafür programmieren wir eine Funktion.

Diese Funktion wird nun wie folgt ergänzt:
Im Anschluss an das Einfärben des einen Pixels ruft sich die Funktion für die Nachbarpixel selber wieder auf, so dass auch diese eingefärbt werden. Das geht immer so weiter, bis alle Pixel eingefärbt sind.

Diese sich selber Aufrufen wird als **Rekursion** bezeichnet.

Ganz wichtig dabei ist, zu verstehen, dass der erste Aufruf der Funktion erst dann beendet ist, wenn alle weiteren Aufrufe von sich selber beendet sind. Es entsteht bei der Rekursion also so etwas wie eine Kette von hängigen Funktionsaufrufen, welche sich erst dann auflöst, wenn am Ende die Funktion sich nicht weiter selber aufruft.

Es braucht in der Funktion also eine Entscheidung, ob weitere Aufrufe der Funktion nötig sind. Beim Einfärben der Pixel, ist dies der Fall, wenn wir auf einen Pixel stossen, der die Farbe des Randes trägt und somit nicht eingefärbt werden muss.

Fehlt diese Abbruchbedingung, oder ist sie falsch formuliert, läuft die Rekursion immer weiter. Die Kette der hängigen Funktionsaufrufe wird immer länger, bis irgendwann der Speicher des Computers aufgebraucht ist. Das ist die grosse Gefahr der Rekursion.

Der hier skizziert Algorithmus heisst Floodfill-Algorithmus. Eine schöne Beschreibung, inkl. Python-Implementierung finden Sie hier: 👉 https://de.wikipedia.org/wiki/Floodfill.

:::aufgabe Aufgabe
<Answer type="state" webKey="a712a5eb-ec5a-4f9c-80f4-0fa444a3dc91" />

Studieren Sie den Abschnitt "Rekursive Implementierung" im Artikel und entscheiden Sie, welche der beiden Varianten für das NumTrip Spiel benötigt wird. Passen Sie dann die vorgeschlagene Python-Implementierung auf Ihre Situation im NumTrip-Spiel an.

**Wichtig**: Vorerst "löschen" wir nur den Zelleninhalt aller Zellen Nachbarszellen (und deren Nachbarszellen), die denselben Zahlenwert enthalten wie die ausgewählte Zelle.
:::