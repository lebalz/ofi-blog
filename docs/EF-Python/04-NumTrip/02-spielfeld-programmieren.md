---
sidebar_label: Spielfeld Programmieren
sidebar_custom_props:
  id: 81a2ca02-d6a4-42c0-8b24-833cabe500d6
  source:
    name: sdg
---

# Jetzt gehts los!

Erstellen Sie in Ihrem Projekt die Datei `scripts/numtrip.py`.

:::aufgabe `numtrip.py`
<Answer type="state" webKey="b160c683-c0de-405c-a847-cb3f3ab1aaf2" />

Programmieren Sie die Datenstruktur für das Spielfeld, so wie Sie diese in der vorhergehenden Aufgabe entworfen haben.

Initialisieren Sie das Spielfeld für den Moment so, dass es einen fortgeschrittenen Spielstand eines Spiels repräsentiert (daher mind. eine zweistellige Zahl vorweist - welche Zahlen kommen in Frage??).

Damit man auch etwas sieht, wenn Sie das Programm ausführen, programmieren Sie noch die nötigen Anweisungen, welche das Spielfeld auf der Konsole anzeigt.

Überlegen Sie sich dazu, wie Sie das Spielfeld nur mit Zeichen dargestellt werden kann und dass alle Zellen immer gleich gross sind.

:::caution Hinweis
Normalerweise fügt die `print`-Funktion am Ende einer Ausgabe immer das Zeichen `\n` an, was von der Konsole als Steuerzeichen für eine neue Zeile interpretiert wird. Das können Sie aber auch ändern, indem Sie explizit vorgeben, welche Zeichen am Ende hinzugefügt werden:

:::flex --basis=380px
```py live_py slim
# Mit Lücke zwischen einzelnen prints
for i in range(3):
    print(f'Lücke {i}', end=' ')
```
***
```py live_py slim
# Ohne Zeichen zwischen einzelnen prints
for i in range(3):
    print(f'Ohne {i}', end='')
```
***
```py live_py slim
# Fancy: mit Rakete und neuer Zeile zwischen einzelnen prints
for i in range(3):
    print(f'Hello {¡}', end=' 🚀\n')
```
:::
Damit wird eine einzelne 3 auf die Konsole geschrieben. Das nächste print() wird gleich hinter der 3 weiterfahren.
:::

Wenn alles zu Ihrer Zufriedenheit funktioniert, machen Sie einen Commit, pushen die Änderungen und markieren diese Aufgabe als erledigt.

:::
