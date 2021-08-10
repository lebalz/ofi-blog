# Regenbogen Display

[02_smartphone_rainbow.zip](skeletons/02_smartphone_rainbow.zip)

Mit der Python-Bibliothek [smartphone-connector](https://pypi.org/project/smartphone-connector/) kann eine Verbindung mit dem Smartphone aufgebaut werden.

Öffnen Sie dazu mit dem Smartphone die Website [https://io.gbsl.website](https://io.gbsl.website) und geben Sie bei der **DeviceID** Ihren Namen (oder einen Alias-Namen) ein. Diese DeviceID brauchen wir anschliessend, um die Befehle ans richtige Smartphone zu schicken.

Es gibt aktuell drei verschiedene Interaktionsmöglichkeiten: `Steuertasten`, `Farbdisplay` und `Farbraster`. Heute verwenden wir nur das `Farbdisplay`.

## Verbindung herstellen

Mit dem Smartphone auf die [Farbdisplay](https://io.gbsl.website/color_panel)-Seite gehen. Das folgende Skript stellt den Bildschirm zuerst auf auf rot und nach 0.5 Sekunden dann auf orange.

```py
# Die Bibliothek laden - sie nimmt uns viel Arbeit ab
from smartphone_connector import Connector


#                      Hier die DeviceID ihres Smartphones eingeben
#                                                    ↓
connector = Connector('https://io.gbsl.website', 'DeviceID')

# die Anzeigefarbe auf dem Smartphone auf rot setzen
connector.set_color('red')

# 0.5 Sekunden warten
connector.sleep(0.5)

# die Anzeigefarbe auf dem Smartphone auf cyan setzen
connector.set_color('orange')
```

# Aufgabe

[Skripts Herunterladen](skeletons/02_smartphone_rainbow.zip)


1. Schreiben Sie ein Skript, das jede Regenbogenfarbe eine Sekunde lang auf Ihrem Smartphone anzeigt.

   ```py
   # Regenbogenfarben:
   rainbow_colors = [
      'red',
      'orangered',
      'orange',
      'yellow',
      'lightgreen',
      'lime',
      'green',
      'blue',
      'indigo',
      'violet'
   ]
   ```

2. Lesen Sie den Abschnitt über die [While-Schleife](../Turtles/003-while-loop.md). Versuchen Sie dieses Konzept hier zu verwenden, um die Farbreihenfolge unendlich lange auf dem Smartphone abzuspielen. Sie müssen dazu eine Bedingung finden, die immer Wahr bleibt.

3. Lesen Sie den Abschnitt über die [For-Schleife](../Turtles/002-for-loop.md). Passen Sie ihren Code so an, dass eine `for` Schleife für die verschiedenen Farben verwendet wird.

   **Tipp**: folgender zeigt nacheinander die Farben _schwarz_, _weiss_ und _grau_ an:

   ```py
   for color in ['black', 'white', 'gray']:
      connector.set_color(color)
      connector.sleep(0.5)
   ```

4. Spielen Sie mit der Anzeigedauer der Farben. Können Sie ein Stroboskop erzeugen? (**!!Achtung**, bei Eptileptikern können solche Strobo-Effekte zu einem Anfall führen. Sie dürfen das Strobo-Gerät daher niemandem ungefragt vorhalten.)
