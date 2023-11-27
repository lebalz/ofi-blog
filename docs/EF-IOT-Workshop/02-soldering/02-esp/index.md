---
sidebar_custom_props:
  id: 31557a7c-5d12-40b3-83cc-0edeaa2fc882
---
# 2. ESP 8266

:::aufgabe[ESP 8266 Löten]
Wenn Sie Sie den Käfer gelötet (und getestet haben), können Sie sich an den ESP 8266 wagen.

Gehen Sie Schritt für Schritt wie auf den Abbildungen gezeigt vor und löten Sie den ESP 8266 zusammen. Überprüfen Sie immer alle Lötstellen, insbesondere, ob sie sich nicht berühren.
:::

:::cards
![Schritt 1](images/esp-step01.jpg)
:::
:::cards
![Schritt 2](images/esp-step02.jpg)
Lötstellen:
__RST__
: Reset Pin (nur, damit das Display hält)
__3V3__
: Strom Output mit 3.3 V
__5V__
: :mdi[circle]{.red} 5V Strom Output
__G__
: :mdi[circle]{.black} Ground (Erdung)
__D1__
: :mdi[circle]{.blue} SCL Pin für die $I^2C$ Schnittstelle
__D2__
: :mdi[circle]{.green} SDA Pin für die $I^2C$ Schnittstelle
__D5__
: Analoger Pin, bspw. für LED's
:::
:::cards
![Schritt 3](images/esp-step03.jpg)
Steckverbindung herunterschieben
:::
:::cards
![Schritt 4](images/esp-step04.jpg)
Löten der angegebenen Lötstellen:
- RST
- 3.3V
- G
- D1
- D2

### Testen

:mdi-power-plug--green: Stromversorgung anschliessen - auf dem Bildschirm sollte nun eine Meldung erscheinen...

:::
:::cards
- 4 Kabel-Stücke von 7-8cm Länge zuschneiden
- Abisolieren (mit gelbem Tool - :mdi-flash-triangle-outline--red: nicht mit den Zähnen!!! :mdi-tooth-outline--red:)
  - Vorne: ~0.3 cm abisolieren
  - Hinten: ~1 cm abisolieren

:::cards[--min-width=300px]
![Schritt 5](images/esp-step05.jpg)
***
![Schritt 6](images/esp-step06.jpg)
:::
:::
:::cards
![Schritt 7](images/esp-step07.jpg)
Rot :mdi[circle]{.red}
: Auf __VIN__
Schwarz :mdi[circle]{.black}
: Auf __GND__
Blau :mdi[circle]{.blue}
: Auf __SCL__
Grün :mdi[circle]{.green}
: Auf __SDA__

:::
:::cards
![Schritt 8](images/esp-step08.jpg)
Rot :mdi[circle]{.red}
: Auf __VIN__
Schwarz :mdi[circle]{.black}
: Auf __GND__
Blau :mdi[circle]{.blue}
: Auf __SCL__
Grün :mdi[circle]{.green}
: Auf __SDA__
:::
:::cards
![Schritt 9](images/esp-step09.jpg)
Zusammenstecken:
__5V__
: :mdi[circle]{.red} 5V Strom Output
__G__
: :mdi[circle]{.black} Ground (Erdung)
__D1__
: :mdi[circle]{.blue} SCL Pin für die $I^2C$ Schnittstelle
__D2__
: :mdi[circle]{.green} SDA Pin für die $I^2C$ Schnittstelle
:::


It's Coffee Time! :mdi-coffee-outline: 