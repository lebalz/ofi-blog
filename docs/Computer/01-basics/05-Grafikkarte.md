---
sidebar_custom_props:
  id: d612c58d-1ae6-4d62-b94a-d834c7d2b195
---

# 5. Grafikkarte

Die Grafikkarte ist neben dem Prozessor die zweite wichtige Komponente, welche im Computer für die **Verarbeitung** von Daten zuständig ist. Grafikkarten haben folgende Aufgaben:

- Erzeugen einer Pixelgrafik aus einer anderen Darstellungsform,
- Speichern dieser Pixelgrafik, des **Bildschirminhalts**,
- Steuerung des Bildschirms, damit er den Bildschirminhalt anzeigt.


## Kenngrössen

Für Grafikkarten gibt es drei wichtige Kenngrössen:

- Die maximale **Auflösung**, also die Anzahl der Bildpunkte (z.B. __7680×4320__).
- Die **Taktfrequenz** gibt an, wie schnell der Grafikkarten-Prozessor Berechnungen durchführen kann. Sie wird in der Einheit **Hertz** angegeben, was «pro Sekunde» bedeutet. Die Grafikkarte hat also auch einen eigenen leistungsfähigen Prozessor.
- Die **Speicherkapazität** ist die Datenmenge, welcher der Speicher maximal aufnehmen kann. Sie wird in Byte angegeben. Die Grafikkarte besitzt also auch einen eigenen Arbeitsspeicher.

Im Gegensatz zu den CPU Prozessoren, welche in der Regel wenige (< 32) Kerne aufweisen, ist eine Grafikkarte hochgradig auf parallelisierte Berechnungen ausgelegt und besitzt entsprechend viele Kerne.

:::aufgabe[Sequentiell vs. Parallel]
<Answer type="state" webKey="6b6cdbde-323a-43a5-b869-ce39c570af88" />

Schauen Sie sich das folgenden Video an und versuchen Sie zu verstehen, was die Unterschiede zwischen sequentieller und paralleler Verarbeitung sind. Halten Sie Ihre Erkenntnisse fest.

[@youtube](https://www.youtube-nocookie.com/embed/ZrJeYFxpUyQ?start=159)

<Answer type="text" webKey="b60306a9-b13d-445d-a422-51ea087717bc" />

:::

:::cards[--columns=2]
![Hercules-Grafikkarte](images/05-hercules.png)

#### Hercules Graphics Card
Hochauflösende monochrome Grafikkarte (720×348 Pixel, 1 Bit Farbe) mit 64 KB Video-RAM aus dem Jahr **1982**.

***
![NVIDIA RTX 3080 Ti Trinity-Grafikkarte](images/05-nvidia-rtx-3080-trinity.jpg)
#### NVIDIA RTX 3080 Ti Trinity

Aktuelle Grafikkarte aus dem Jahr **2022** mit einer maximalen Auflösung von `7680×4320` Pixel pro Bildschirm, `12` GB Video-RAM und Unterstützung von Echtzeit-Raytracing.
:::

Frühe Grafikkarten konnten nur aus Text selbständig eine Pixelgrafik erzeugen. Um etwas anderes auf dem Bildschirm darzustellen, mussten Programme oder das Betriebssystem die Grafik selbst berechnen und pixelweise an die Grafikkarte übermitteln.

Mit der Zeit konnten neuere Grafikkarten immer mehr Funktionen der Bilderzeugung übernehmen:

- **2D-Rasterung:** Zeichnen von Linien, Rechtecken und Kreisen,
- **3D-Rasterung:** Verdeckungsberechnung und Lichtsimulation,
- **3D-Raytracing:** fotorealistische Berechnung basierend auf der Simulation von Lichtstrahlen.

Ausserdem werden heute Grafikkarten auch für aufwändige Berechnungen in anderen Bereichen eingesetzt, z.B. für **neuronale Netze** oder für das Mining von **Kryptowährungen**.


:::info[⭐️ Raytracing]

Was ist Raytracing und was bringt es mir?

[@youtube](https://www.youtube-nocookie.com/embed/vy8kHdw9gCI?start=66)
:::

### Steuerung des Bildschirms

Für die Steuerung des Bildschirms gibt es vier aktuelle Technologien.

:::cards[--columns=2]
![Display Port (DP)](images/05-dp.png)

***
![Digital Visual Interface (DVI)](images/05-dvi.png)

***
![High-Definition Multimedia Interface (HDMI)](images/05-hdmi.png)

***
![Video Graphics Array (VGA)](images/05-vga.png)

:::

:::note[USB-C]
Heutige Laptops haben oft keine separaten Ausgänge für Bildschirme - dank USB-C. Die verwendete Technologie sowie die Protokolle bleiben aber dieselben, weshalb ohne weiteres Adapter für entsprechende Technologien (DP, DVI, HDMI, VGA) angeschlossen werden können.

![USB-C Displayadapter --width=300px](images/05-usbc-adapter.jpg)
:::

:::aufgabe[Aufgabe Grafikkarte: Rendering]
<Answer type="state" webKey="ff40f1f1-5667-4978-a848-e4da4532b658" />

Recherchieren Sie den Begriff "Rendering".

<Answer type="text" webKey="30ee181c-fe31-4362-8274-68fd87478824" />

Welche Aufgaben erfordern eine hohe Rendering-Leistung? Für welche Zielgruppen nebst Gamern sind gute Grafikkarten essenziell?

<Answer type="text" webKey="bdf478bd-68f0-4980-b98e-74fd2be9065b" />
:::
