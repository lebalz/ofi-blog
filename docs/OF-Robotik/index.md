---
sidebar_custom_props:
  id: fab73c35-51dd-4e9f-b830-a4998a0b919f
---
# Robotik

Micro\:Bit Editor
: 👉 [https://python.microbit.org/v/3](https://python.microbit.org/v/3)
Maqueen Bibliothek
: 👉 [https://gbsl-informatik.github.io/maqueen-plus-v2-mpy/](https://gbsl-informatik.github.io/maqueen-plus-v2-mpy/)

:::cards{columns=2}
![Maqueen Plus V2](./images/maqueen-plus-v2.jpg)
::br
![Verfügbare Sensoren](./images/maqueen-specs.jpg)
:::

:::info[Wettbewerb]
Ziel
: Bewältigung eines Parcours mit Hindernissen
Gruppengrösse
: 2 Personen
Note
: Zählt 0.5
Abgabe
: Code und Kurzbeschreibung
: Fr. 15.5.24 bis 22:00 Uhr
:::

:::note[:mdi[apple] iPad und Micro\:Bit]
Mit dem iPad kann der Micro\:Bit nicht direkt programmiert werden. Es ist jedoch möglich, den Code auf dem iPad zu schreiben und dann wie folgt auf den Micro\:Bit zu übertragen:

Anleitung
: [👉 support.microbit.org](https://support.microbit.org/support/solutions/articles/19000139629-python-editor-using-the-micro-bit-ios-app-to-flash-the-micro-bit-with-an-ipad)
iOS App
: [👉 App Store](https://apps.apple.com/gb/app/micro-bit/id1092687276)
:::

:::info[Beurteilungskriterien]
Die Note setzt sich zusammen aus dem praktischen Teil und dem Bericht. Die Note zählt 0.5.

Praktischer Teil
: Für die Note zählen die umgesetzten Funktionalitäten des Roboters
: Gewichtung: 70 %

Bericht
: Tagebucheinträge (mind. 3) - was haben Sie gemacht, was hat funktioniert, was nicht? Welche Überlegungen stecken hinter den umgesetzten Funktionalitäten? (Welche Idee steht bspw. hinter dem "Blinken-Feature"?) Pro Eintrag ca. 1/4-1/2 Seite.
: Code: Der Code ist kommentiert und nachvollziehbar
: Gewichtung: 30 %

Wettbewerb
: Wer bewältigt den Parcours am schnellsten?
:::

### Punkteskala

```py live_py slim
punkte = 6 # erreichte Punkte
note = min(6, (punkte / 10) * 5 + 1)
print('Note:', note)
```

Mögliche Punkte
- Parcours bewältigt, ohne manuellen Eingriff (6 Punkte)
- Parcours bewältigt, mit manuellem Eingriff (4 Punkte)
- Der Roboter blinkt während der Fahrt in verschiedenen Farben (1 Punkt)
- Der Roboter bleibt stehen, wenn er auf ein Hindernis trifft und fährt dann weiter, wenn es wieder weg ist (1 Punkt)
- Der Roboter dreht sich um 360 ° wenn geklatscht wird (1 Punkt)
- Der Roboter zeigt auf dem Display mit einem Pfeil an, ob er aktuell links, rechts oder gerade steuert. (1 Punkt)
- Der Roboter macht spielt 
- ⭐ Der Roboter findet den Weg zum Ziel, auch wenn Einbahnstrassen vorhanden sind (1 Punkte)
- ⭐ Der Roboter kann einem Hindernis ausweichen und findet die Fahrtstrecke wieder (2 Punkte)


### Trouble Shooting

::::warning[Roboter dreht sich in die falsche Richtung]

#### Ausgangslage

```py
zustand = 'vorwärts'
while True:
    if zustand == 'vorwärts':
        # motoren vorwärts
        if line_sensor(LineSensor.M) == 1:
            zustand = 'vorwärts'
        elif line_sensor(LineSensor.L1) == 0:
            zustand = 'rechts'
        elif line_sensor(LineSensor.R1) == 0:
            zustand = 'links'
    elif zustand == 'rechts':
      ...
```

Ist `M=0` und **sowohl `L1` wie auch `R1`** sehen weiss (kann passieren, wenn die Linie in einer Kurve zu schmal ist), dann wird der Roboter **immer nach rechts** fahren, auch wenn er eigentlich nach links müsste.

Die Lösung besteht darin zu überprüfen, ob `L1` oder `R1` eine hellere Farbe misst und dann entsprechend eine andere Entscheidung zu treffen. Dies kann mit den über die Funktion `line_sensor_data` abfragbaren Rohdaten der Sensoren gemacht werden. Dabei gilt (!entgegen der `0=Weiss, 1=Schwarz`):

Wert `0`
: Sensor sieht komplett Schwarz
Wert `255`
: Sensor sieht komplett Weiss

👉 [Referenz: Maqueen Dokumentation](https://gbsl-informatik.github.io/maqueen-plus-v2-mpy/docs/api/line-tracking#line_sensor_datasensor)

:::details[Lösung]

```py {7-13}
zustand = 'vorwärts'
while True:
    if zustand == 'vorwärts':
        # motoren vorwärts
        if line_sensor(LineSensor.M) == 1:
            zustand = 'vorwärts'
        elif line_sensor(LineSensor.L1) == 0 and line_sensor(LineSensor.R1) == 0:
            # wenn L1 heller ist als R1 (also L1 > R1): dann fahre nach rechts
            if line_sensor_data(LineSensor.L1) > line_sensor_data(LineSensor.R1):
                zustand = 'rechts'
            # sonst nach links
            else:
                zustand = 'links'
        elif line_sensor(LineSensor.L1) == 0:
            zustand = 'rechts'
        elif line_sensor(LineSensor.R1) == 0:
            zustand = 'links'
    elif zustand == 'rechts':
        ...
```
:::
::::