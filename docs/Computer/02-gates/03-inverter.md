---
title: 3. Inverter
---


# 3. Inverter

Ein Inverter ist eine Schaltung, bei welcher der Ausgang Y den Wert 1 (hohe Spannung) hat, wenn der Eingang den Wert 0 (tiefe Spannung) hat und umgekehrt.

<div className="slim-table">

|   A   |   Y   |
| :---: | :---: |
|   0   |   1   |
|   1   |   0   |
</div>

In Schaltungen wird das folgende Symbol für einen Inverter verwendet:

![Symbol für einen Inverter](images/03-inverter.svg)

## Interaktive Schaltung

[@circuitverse](https://circuitverse.org/simulator/embed/rothe-inverter)

## Beispiele

### Kühlschrankbeleuchtung

Das Licht im Kühlschrank geht an, sobald die Türe **nicht** mehr auf den Knopf drückt.

![](images/03-fridge.svg)

### Heizung

Die Heizung soll einschalten, wenn es **nicht** warm ist.

![](images/03-heating.svg)

:::aufgabe
Überlegen Sie sich, ob bei folgenden Schaltungen ein Inverter eingesetzt werden muss oder nicht:

1. **Einbruchalarm:** Ein akustischer Alarm soll ertönen, wenn eine Bewegung entdeckt wird.

![](images/03-ex-intruder-alarm.svg)

<Answer type="text" webKey="b465efac-a164-41d7-bc27-6b78a98ad94a" />

2. **Bewässerungsanlage:** Wenn die Erde in der Blumenkiste trocken ist, soll eine Wasserpumpe (Motor) eingeschaltet werden. Wenn die Erde feucht ist, soll der Motor ausgeschaltet werden.

![](images/03-ex-irrigation.svg)

<Answer type="text" webKey="2d562c57-6356-4dfd-a716-97ec2350abce" />

:::

:::aufgabe Aufgabe CircuitVerse
1. Erstellen Sie in CircuitVerse die Schaltung für die Kühlschrankbeleuchtung mit einem _Button_ als Eingabe und einem _DigitalLed_ als Ausgabe.
2. Erstellen Sie in CircuitVerse die Schaltung für ein Restaurant in Sizilien, das noch keine Klimaanlage besitzt: Sobald genügend Sonnenlicht (Eingabe _Input_, `1` oder `0`) vorhanden ist, soll das Deckenlicht (Ausgabe _DigitalLed_) ausgeschaltet und ein Ventilator (Ausgabe _Output_, `1` oder `0`) eingeschaltet werden. Beschriften Sie alle Elemente.
3. Bauen Sie eine Lichterkette mit 6 _DigitalLed_. Jede zweite LED der Lichterkette soll leuchten. Sobald ein Druckknopf (_Button_) gedrückt wird, soll die andere Hälfte der LEDs leuchten. Da es sich um eine Lichterkette handelt, darf nur eine Leitung vom Druckknopf wegführen.
:::
