---
sidebar_custom_props:
  id: c4d0ceba-1b63-4a67-9539-5afc7848bc65
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
<Answer type="state" webKey="9d5358d9-dc2e-4377-8475-8bbcd736965d" />

Überlegen Sie sich, ob bei folgenden Schaltungen ein Inverter eingesetzt werden muss oder nicht:

1. **Einbruchalarm:** Ein akustischer Alarm soll ertönen, wenn eine Bewegung entdeckt wird.

  ![](images/03-ex-intruder-alarm.svg)

  <Answer type="text" webKey="b465efac-a164-41d7-bc27-6b78a98ad94a" />

2. **Bewässerungsanlage:** Wenn die Erde in der Blumenkiste trocken ist, soll eine Wasserpumpe (Motor) eingeschaltet werden. Wenn die Erde feucht ist, soll der Motor ausgeschaltet werden.

  ![](images/03-ex-irrigation.svg)

  <Answer type="text" webKey="2d562c57-6356-4dfd-a716-97ec2350abce" />

:::

:::aufgabe Aufgabe CircuitVerse
<Answer type="state" webKey="fa24c02b-9390-488c-853b-73ca8882173d" />

1. Erstellen Sie in CircuitVerse die Schaltung für die Kühlschrankbeleuchtung mit einem __Button__ als Eingabe und einem __DigitalLed__ als Ausgabe.
2. Erstellen Sie in CircuitVerse die Schaltung für ein Restaurant in Sizilien, das noch keine Klimaanlage besitzt: Sobald genügend Sonnenlicht (Eingabe __Input__, `1` oder `0`) vorhanden ist, soll das Deckenlicht (Ausgabe __DigitalLed__) ausgeschaltet und ein Ventilator (Ausgabe __Output__, `1` oder `0`) eingeschaltet werden. Beschriften Sie alle Elemente.
3. Bauen Sie eine Lichterkette mit 6 __DigitalLed__. Jede zweite LED der Lichterkette soll leuchten. Sobald ein Druckknopf (__Button__) gedrückt wird, soll die andere Hälfte der LEDs leuchten. Da es sich um eine Lichterkette handelt, darf nur eine Leitung vom Druckknopf wegführen.

Halten Sie untenstehend Ihre Lösung fest - am besten mit einem Screenshot des Schaltbildes und allenfalls auch der Links zu den Schaltungen in CircuitVerse.

<Answer type="text" webKey="becb4981-e295-403c-9189-c5708205e209" />
:::
