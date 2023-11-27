---
sidebar_custom_props:
  id: 80c94c9b-5528-4ba5-9230-ef077c0af607
---
# 2. Sensoren

:::aufgabe[AHT21]
Suchen Sie Informationen zum Sensor AHT21 und halten Sie diese für sich im EF-Repository fest.
- Was macht der Sensor?
- Wie präzise/genau misst er?
- Unter welchen Bedingungen sind die Messwerte zuverlässig?
- In welchem Bereich ist er einsetzbar?
- ...
:::

:::aufgabe[ENS160]
Suchen Sie Informationen zum Sensor ENS160 und halten Sie diese für sich im EF-Repository fest.
- Was macht der Sensor?
- Wie präzise/genau misst er?
- Unter welchen Bedingungen sind die Messwerte zuverlässig?
- In welchem Bereich ist er einsetzbar?
- **Was ist der Unterschied zu einem CO2-Sensor?**
- ...
:::

## ENS160

Um die Daten vom ENS160 auszulesen, müssen wir zuerst die I2C-Schnittstelle aktivieren. Dies geschieht mit dem folgenden Code:

```python
from ens import ENS160 # import the device driver
import machine # diese Bibliothek wird für die I2C-Schnittstelle benötigt 
# - sie existiert nur auf der NodeMCU

i2c = machine.I2C(scl=machine.Pin(5), sda=machine.Pin(4), freq=100000)
ens160 = ENS160(i2c, temperature=22, humidity=35)
ens160.aqi
ens160.tvoc
ens160.eco2
```

### Permanentes Abfragen der Sensoren

Ein permanentes Abfragen der Sensorwerte könnte also wie folgt aufgebaut werden:

```python title="main.py"
import machine
import time
from ens import ENS160
i2c = machine.I2C(scl=machine.Pin(5), sda=machine.Pin(4), freq=100000)
ens160 = ENS160(i2c, temperature=22, humidity=35)

while True:
    # Read from the sensor
    aqi = ens160.aqi
    tvoc = ens160.tvoc
    eco2 = ens160.eco2
    print(aqi, tvoc, eco2)
    time.sleep(1)
```

:::aufgabe[Sensoren ansteuern]

Material
: [👉 Sensor-Projekt](assets/sensor-assets.zip)
Laden Sie das Beispiel-Projekt herunter und untersuchen Sie dieses genauer.

Die Messwerte werden aktuell zwar ausgelesen, aber noch nicht angezeigt.
1. Geben Sie die Messwerte auf der Konsole aus
2. Zeigen Sie die Messwerte auf dem Display an
::: 