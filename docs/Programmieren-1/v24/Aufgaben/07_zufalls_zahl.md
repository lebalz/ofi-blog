---
sidebar_custom_props:
  id: 98562b28-7c5d-49f1-b467-76085f068544
---
# Zufallszahl

[07_zufallszahl.zip](skeletons/07_zufallszahl.zip)

[Tutorial](https://web.microsoftstream.com/video/a4c24aa1-7a96-4025-944c-a0eb482ec35b)

## Voraussetzung

Sie haben auf [jupyter.gbsl.website](https://jupyter.gbsl.website/user-redirect/lab/tree/shared/02T_Schleifen.ipynb) das `Kapitel 2.1` gelesen und bearbeitet.

## Aufgabe

Auf einer langen Autfahrt spielen Maria und Bob das Zufallsspiel:

Maria denkt sich eine Zahl zwischen `0` und `9` aus. Errät Bob die Zahl in den ersten `5` versuchen, so hat er gewonnen, sonst Maria.

Aufgabe: Schreiben Sie ein Skript welches den Part von Maria übernimmt und das Zufallsspiel mit Ihnen spielt.

Um mit Python eine Zufallszahl zu erzeugen, brauchen wir die Funktion `randint()` aus der Bibliothek `random`.

```py
from random import randint

zufallszahl = randint(0, 9)
```

**Merke** mit `0` wird die untere Grenze, mit `9` die obere Grenze festgelegt. Für eine Zufallszahl zwischen `10` und `100` würde der Aufruf also `randint(10, 100)` lauten.

## Vorgehen\*

Wir brauchen eine Zufallszahl, müssen immer wissen wie viele Versuche bereits gemacht wurden und welche Zahl aktuell geraten wurde. Für diese drei Informationen braucht es Variablen.

1. Weisen Sie der Variable `zufallszahl` eine zufällige Zahl zwischen `0` und `9` zu.
2. Fragen Sie den Bentzer nach einer Zahl und speichern Sie das Resultat in einer Variable, z.B. `geraten`
3. Achtung, die Variable `geraten` muss noch in eine Zahl umgewandelt werden!
4. Das war der erste Versuch! Weisen Sie der Variable `versuche` den Wert `1` zu.
5. Solange die geratene Zahl nicht der Zufallszahl entspricht und die Anzahl Versuche noch kleiner als `5` sind, wird erneut nach einer Zufallszahl gefragt und dabei immer die Variable `versuch` um `1` erhöht.
6. Überprüfen Sie nach der Schleife, ob Sie gewonnen haben, indem mit `if` überprüft wird, ob die geratene Zahl der Zufallszahl entspricht. In diesem Fall soll `Du gewinnst!!` ausgegeben werden
7. Überprüfen Sie weiter, ob die Maschine gewonnen hat, indem mit `if` überprüft wird, ob die geratene Zahl **nicht** der Zufallszahl entspricht. In diesem Fall soll `Die Maschine gewinnt` ausgegeben werden.

## Zusatz

1.  Schreiben Sie das Skript so um, dass es nach einem Durchlauf wieder neu gestartet wird.

    **Tipp** Erzeugen Sie rund um das ganze Skript (aussert die `import` Zeilen) eine immer wahre `while` Schleife:

    ```py
    while True:
        print("Ich bin immer wahr...")
    ```

2.  Binden Sie die Bibliothek `smartphone_connector` ein und schicken Sie die Fragen und die Sieger-Nachrichten ans Smartphone. Beachten Sie, dass der Verbindungs-Aufbau (`phone = Connector...`) nur genau ein Mal gemacht werden sollte.

    Da Sie bereits wissen, dass der Benutzer eine Zahl eingeben soll, kann dies auch mitgegeben werden, so dass auf dem Smartphone eine Zahlen-Tastatur angezeigt wird. **Achtung** der Rückgabewert ist dennoch ein Text.

    ```py
    from smartphone_connector import Connector

    phone = Connector("https://io.gbsl.website", "FooBar")
    geraten = phone.input("Zufallszhal? ", input_type="number")
    ```

    Zudem soll die Gewinner-Benachrichtigung vom Benutzer bestätigt werden müssen. Dazu rufen Sie `alert()` statt `print()` auf.

    ```py
    phone.alert("Du gewinnst!")
    ```

---

\* Falls Ihnen die erste Aufgabe nicht gelingt: hier eine Video Anleitung dazu. Achtung, versuchen Sie es zuerst mit der Anleitung.

[Video Anleitung](https://web.microsoftstream.com/video/a4c24aa1-7a96-4025-944c-a0eb482ec35b)
