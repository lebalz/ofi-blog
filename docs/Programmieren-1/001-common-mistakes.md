---
title: Häufige Fehler
---

# Häufige Fehler [^1]


Hier werden die zehn häufigsten Fehler in Python zusammengefasst.

## 1. Rechtschreibung von Namen

Namen müssen korrekt geschrieben werden. Ein sehr häufige Fehlerursache ist, dass Namen falsch geschrieben werden:
- Die Gross- und Kleinschreibung von Namen ist relevant. Die Namen `WERT`, `Wert` und `wert` beziehen sich auf unterschiedliche Variablen.
- Vordefinierte Namen verwenden meist die amerikanische Schreibweise. So lautet ein Turtlebfehl `setcolor`, nicht `setcolour`.

## 2. Gleichheit und Zuweisung

Eine **Zuweisung** «speichert» einen Wert in einer Variable:

```py
alter = 14
```

Ein **Vergleich** überprüft, ob zwei Werte exakt gleich sind:

```py
alter == 14
```

:::note
Ein Vergleich wird normalerweise in einer Kontrollstruktur verwendet. Dabei ist wichtig zu beachten, dass auch der Datentyp gleich sein muss - `"14"` ist nicht dasselbe wie `14`!

```py live_py slim
alter = input('Wie alt bist du?') # das Resultat ist ein Text
alter = int(alter)  # alter zu einer Ganzzahl umwandeln
if alter == 14:
    print('Yay, du bist 14 jährig 🥳') 
```
:::

## 3. Zählen beginnt bei Null

Das Zählen beginne immer bei Null. Beispiele:

- Das folgende Programm gibt die Zahlen `0` bis `9` aus:
    ```py live_py slim
    for i in range(10):
        print(i) 
    ```
- Das erste Zeichen einer Zeichenkette erhält man durch Abfrage mittels eckiger Klammern und dem Index `0`:
    ```py live_py slim
    text = 'Hallo GBSL'
    print(text[0]) 
    ```
- Das erste Element einer Liste erhält man durch Abfrage mittels eckiger Klammern und dem Index `0`:
    ```py live_py slim
    liste = ['Äpfel', 'Birnen', 'Bananen']
    print(liste[0]) 
    ```

## 4. Code-Blocks und Einrücken

In Python werden Code-Zeilen, die im gleichen Schritt abgearbeitet werden sollen, als **Codeblock** zusammengefasst und gleich weit eingerückt.

Beispiele:
- Alle Codezeilen, die gemeinsam wiederholt werden sollen, sind gleich weit eingerückt:
    ```py live_py slim
    print('--- Start ---')
    for i in range(2):
        print('🥳')     # \ 
        print('🥳🥳')   #  |- diese 3 Zeilen werden gleich oft
        print('🥳🥳🥳') # /   wiederholt
    print('--- Ende ---') 
    ```
    

[^1]: [Stefan Rothe](https://rothe.io/?b=python-ref&p=968398)
