---
title: 1. Schaltung
sidebar_custom_props:
  id: e12ef768-c95a-4d1b-824c-36a4caf0573d
---


# 1. Schaltung

Im folgenden betrachten wir digitale **Schaltungen**. Eine digitale Schaltung hat mindestens einen Eingang sowie einen oder mehrere Ausgänge. Da die Schaltung digital ist, sind bei jedem Eingang und Ausgang immer nur zwei Werte möglich: Null oder Eins.

![](images/01-circuit.svg)

Die obenstehende Schaltung hat zwei Eingänge (A und B) sowie zwei Ausgänge (X und Y).

## Wahrheitstabelle

Jede digitale Schaltung kann durch eine **Wahrheitstabelle** beschrieben werden. In der Wahrheitstabelle werden für alle möglichen Eingabekombinationen die entsprechenden Ausgabewerte festgehalten.

Für eine Schaltung mit zwei Eingängen gibt es insgesamt vier Möglichkeiten. Sowohl Eingang A als auch Eingang B können die Werte 0️⃣ oder 1️⃣ annehmen.

Die obenstehende Schaltung kann beispielsweise mit folgender Tabelle beschrieben werden:

<div className="slim-table">

|   A   |   B   |   X   |   Y   |
| :---: | :---: | :---: | :---: |
|   0   |   0   |   0   |   0   |
|   0   |   1   |   1   |   0   |
|   1   |   0   |   0   |   1   |
|   1   |   1   |   1   |   1   |

</div>

:::aufgabe Aufgabe 1
Wie könnte eine Schaltung mit dieser Wahrheitstabelle wohl aussehen?

<Answer type="text" webKey="35235050-2d40-4cfb-9e3d-cc2c371ab482" />

:::


## Eingabe

Um einfache Schaltungen erstellen zu können, benötigen wir ein paar einfachen Ein- und Ausgabemöglichkeiten.  Wir haben folgende Eingabemöglichkeiten für unsere Schaltungen:

<div className="slim-table no-header">

|                                       |                                                                      |
| ------------------------------------: | :------------------------------------------------------------------- |
|      ![](images/01-sensor-button.svg) | Druckknopf, liefert Eingabe 1️⃣, wenn er gedrückt wird.                |
|      ![](images/01-sensor-switch.svg) | Schalter, kann ein- oder ausgeschaltet werden.                       |
| ![](images/01-sensor-temperature.svg) | Temperatursensor, liefert als Eingabe 1️⃣, wenn es warm ist.           |
|       ![](images/01-sensor-light.svg) | Lichtsensor, liefert als Eingabe 1️⃣, wenn es hell ist.                |
|    ![](images/01-sensor-humidity.svg) | Feuchtigkeitssensor, liefert als Eingabe 1️⃣, wenn es feucht ist.      |
|    ![](images/01-sensor-movement.svg) | Bewegungssensor, liefert als Eingabe 1️⃣, wenn Bewegung entdeckt wird. |
|  ![](images/01-sensor-microphone.svg) | Mikrofon, liefert als Eingabe 1️⃣, wenn ein Geräusch entdeckt wird.    |

</div>

Für die Ausgabe stehen folgende Geräte zu Verfügung:

<div className="slim-table no-header">

|                                  |                                  |
| -------------------------------: | :------------------------------- |
|   ![](images/01-actor-light.svg) | Licht, brennt bei Ausgabe 1️⃣      |
|   ![](images/01-actor-sound.svg) | Lautsprecher, tönt bei Ausgabe 1️⃣ |
| ![](images/01-actor-heating.svg) | Heizung, heizt bei Ausgabe 1️⃣     |
|   ![](images/01-actor-motor.svg) | Motor, läuft bei Ausgabe 1️⃣       |
</div>

## Direkte Verbindung

Die einfachste Schaltung ist die direkte Verbindung zwischen Ein- und Ausgabe.

:::info
#### Beispiel: Türklingel

Es klingelt, wenn die Taste gedrückt wird.

![](images/01-door-bell.svg)
:::

## Verzweigung

Eine Leitung kann auf verzweigt werden. Die Verzweigung wird durch einen kleinen ausgefüllten Kreis markiert.

:::info
#### Beispiel: Feueralarm

Wenn es brennt (zu hohe Temperatur), so soll ein Warnlicht angeschaltet werden und ein akustisches Signal ertönen.

![](images/01-fire-alarm.svg)
:::
