---
sidebar_custom_props:
  id: da6756be-0507-4125-be9d-0066337f69e6
---
# Game Loop
Wir sind fast fertig mit der Implementation des NumTrip-Spiels. Was bleibt ist, dass die Spieler:in nicht nur einen Zug machen kann, sondern so viele, wie nötig sind, bis das Spiel fertig ist.

In der Spielentwicklung spricht man vom **Game-Loop**. Wie der Name sagt ist dies eine Schleife, welche in der Regel folgende Form hat:

```
wiederhole bis Spielende erreicht:
    Eingabe von Benutzer:in
    Eingabe verarbeiten
    Neuen Spielstand anzeigen
```

:::aufgabe
<Answer type="state" webKey="69c57cbf-4ea6-4b8e-8623-d379c4d38839" />

- Ergänzen Sie die Hauptfunktion Ihres Spiels mit einer Game-Loop, wobei vorerst unendlich viele Runden gespielt werden können. :mdi-arrow-right: **commit**
- Fügen Sie eine Überprüfung hinzu, ob das Spiel gewonnen oder verloren wurde:
  - **Gewonnen**: Eine von Ihnen festgelegte Zahl (bspw. *1024*) wurde erreicht
  - **Verloren**: Es gibt keine weitere Möglichkeit, einen Zug zu machen. (Wenn es min. ein Feld mit einem gleichwertigen Nachbarsfeld gibt, so gibt es noch eine Möglichkeit...)
- Im Anschluss soll dann die Spieler:in mitgeteilt werden, ob das Spiel gewonnen oder verloren wurde.

:::

:::aufgabe[⭐ Zusatz: Score]
<Answer type="state" webKey="1c1e526c-45bb-47c1-b9b6-2b5418785203" />

Fügen Sie einen Score hinzu, der angibt, wie viele Züge man gebraucht hat, um das Endziel (*1024*) zu erreichen.
:::