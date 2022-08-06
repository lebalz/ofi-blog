---
label: 2. Farbdarstellung
sidebar_custom_props:
  id: 5b942488-99ea-414b-91e7-13585f3fc031
---

# 2. Farbdarstellung


import RGB from "@site/src/components/VisualizationTools/ColorEncoding/RGB";
import RGBA from "@site/src/components/VisualizationTools/ColorEncoding/RGBA";
import CMYK from "@site/src/components/VisualizationTools/ColorEncoding/CMYK";
import ColorDepth from "@site/src/components/VisualizationTools/ColorEncoding/ColorDepth";

## Farbkanäle [^1]

Für die digitale Verarbeitung müssen Farben in Zahlen umgewandelt werden. Das geschieht, indem die Farben in verschiedene Komponenten, sogenannte **Farbkanäle** aufgeteilt werden. Pro Pixel kann so die Intensität je Farbkanal als Zahl bestimmt werden.

Die zwei wichtigsten Ansätze, wie diese Aufteilung in verschiedene Kanäle erfolgt, werden im folgenden vorgestellt.

## RGB-Farbmodell

Das **RGB-Farbmodell** basiert auf der Funktionsweise des menschlichen Auges. Dieses nimmt Farben mit Hilfe von drei Arten von sogenannten **Zäpfchen** wahr, die für Licht unterschiedlicher Wellenlängen empfindlich sind. So werden vom Menschen die Grundfarben Rot, Grün und Blau wahrgenommen.

![Farbwahrnehmung des menschlichen Auges](images/02-colour-vision.svg)

Diese Eigenschaft des Auges wird bei der **additiven Farbdarstellung** ausgenutzt, indem sich überlagernde Lichtquellen in den drei Grundfarben Rot, Grün und Blau verwendet werden. Durch die Regulierung der Helligkeit der einzelnen Lichtquellen können sämtliche Farben erzeugt werden.

Dieses Farbmodell kommt überall dort zum Einsatz, wo Licht verwendet wird, um ein Bild zu erzeugen, insbesondere bei **Bildschirmen** und **Videoprojektoren** («Beamer»). Die Farben auf einem Bildschirm werden erzeugt, indem drei nahe beieinanderliegende Leuchtdioden in den Farben Rot, Grün und Blau in unterschiedlicher Helligkeit leuchten. Ein solches Trio von Leuchtdioden wird **Pixel** genannt.

:::cards
![Additives Farbmodell --width=100%](images/02-colour-rgb.svg)
***
![Pixel auf einem Bildschirm --width=100%](images/02-pixels.jpg)
:::

Umgekehrt kann man bei einem Bild die Rot-, Grün- und Blauanteile jedes Bildpunkts bestimmen. Man sagt, dass man das Bild in Rot-, Grün- und Blaukanal aufteilt:

![Aufteilung in Rot-, Grün- und Blaukanal](images/02-colour-rgb-channels.png)

Im entsprechenden **RGB-Farbsystem** wird eine Farbe definiert, indem die Helligkeit der Rot-, Grün- und Blauanteils durch eine Zahl zwischen 0 und 255 ausgedrückt wird.

Um eine Farbe binär darzustellen, werden die binären Darstellungen der Zahlen für Rot, Grün und Blau nacheinander aufgeschrieben. So hat beispielsweise die Farbe mit den RGB-Werten `255, 220, 150` die binäre Darstellung `11111111 11011100 10010110`.

<RGB />


## RGBA-Farbmodell

Für das **RGBA-Farbmodell** wird das RBG-Farbmodell um einen Kanal erweitert. Dieser heisst **Alphakanal** und drückt aus, wie stark die **Deckkraft** der Farbe ist. Ein Wert von `0` bedeutet gar keine Deckkraft und somit volle Transparenz. Ein maximaler Wert bedeutet maximale Deckkraft und somit keine Transparenz.

<RGBA />

## CMYK-Farbmodell

Das **CMYK-Farbmodell** basiert auf der Weise, wie Gegenstände farbig erscheinen. Ein Gegenstand wird üblicherweise mit weissem Licht, also Licht verschiedener Wellenlängen (Rot, Grün und Blau) angestrahlt. Beispielsweise erscheint ein gelber Gegenstand deshalb in dieser Farbe, weil er blaues Licht **absorbiert** und rotes und grünes Licht **reflektiert**.

![subtraktives Farbmodell](images/02-colour-cmy.svg)

Bei der **subtraktiven Farbdarstellung** werden auf weissem Material die drei Grundfarben *Cyan*, *Magenta* (Fuchsia) und *Yellow* (Gelb) verwendet, welche rotes, grünes bzw. blaues Licht absorbieren. Zusätzlich wird *schwarze Farbe* (Key-Kanal) verwendet, welche alles Licht absorbiert.

![Aufteilung in Cyan-, Magenta-, Yellow- und Key-Kanal](images/02-colour-cmyk-channels.png)

Dieses Farbmodell kommt beim Drucken zum Einsatz.

<CMYK />

<details><summary> ⭐️ Umrechnung CMYK – RGB </summary>

Für die Umrechnung einer `CMYK`-Farbangabe nach `RGB` wird folgender Formelsatz verwendet:

$$
\begin{aligned}
  r &= (1 - c) \cdot (1 - k) \\
  g &= (1 - m) \cdot (1 - k) \\
  b &= (1 - y) \cdot (1 - k) \\
\end{aligned}
$$

Dabei wird vorausgesetzt, dass sämtliche Werte im Bereich 0 bis 1 liegen. Wenn beispielsweise die CMYK-Werte in Prozent angegeben werden und die RGB-Werte mit einem Byte codiert werden, ergeben sich folgende Formeln:

$$
\begin{aligned}
  r &= 255 \cdot (1 - c \cdot 0.01) \cdot (1 - k \cdot 0.01) \\
  g &= 255 \cdot (1 - m \cdot 0.01) \cdot (1 - k \cdot 0.01) \\
  b &= 255 \cdot (1 - y \cdot 0.01) \cdot (1 - k \cdot 0.01) \\
\end{aligned}
$$

```py live_py slim

def sanitize(wert):
    # Wandelt Prozent-Werte zu Zahlen zwischen 0 und 1 um
    if wert > 1:
        return wert / 100
    return wert

def cmyk2rgb(c, m, y, k):
    faktor = 1 - sanitize(k)
    r = (1 - sanitize(c)) * faktor
    g = (1 - sanitize(m)) * faktor
    b = (1 - sanitize(y)) * faktor
    return [r, g, b]

print('rgb: ', cmyk2rgb(80, 60, 40, 20))
```

</details>

## Farbtiefe

Die Farbtiefe gibt an, in wie vielen Abstufungen jeder Farbkanal vorliegt. Im interaktiven Tool lässt sich die Farbtiefe untersuchen. Dabei werden alle Farbabstufungen der drei Farbkanäle Grün, Rot und Blau wie folgt kombiniert.

![--width=100%](images/01-color-depth-permutation.png)

<ColorDepth />

:::aufgabe 1. Aufgabe: Farbtiefe
Erkennen Sie das System, wie die Farbtiefe mit der Anzahl möglicher Farben zusammenhängt?
- Wie viele Farben sind bei einer Farbabstufung von 4, 8, 16, 128 oder 256 Stufen möglich?
- Wie viel bits sind für die Darstellung eines Farbkanals bei 4, 8, 16, 128 oder 256 Abstufungen nötig?

<Answer type="text" webKey="b12401c0-677d-4f31-be14-1a4ca2141ca8" />
<Solution webKey="afafbe0a-8c67-43cc-9281-db6048bcaaca">

- 4 Abstufungen: `2 bit`, $4 \cdot 4 \cdot 4=64$ Farben
- 8 Abstufungen: `3 bit`, $8^3=512$ Farben
- 16 Abstufungen: `4 bit`, $16^3=4'096$ Farben
- 128 Abstufungen: `7 bit`, $128^3=2'097'152$ Farben
- 256 Abstufungen: `8 bit` = `1 Byte`, $256^3=16'777'216$ Farben

</Solution>
:::


Die Anzahl Bits oder Bytes, welche **insgesamt** für die Speicherung einer Farbe verwendet werden, wird **Farbtiefe** genannt. Damit wird festgelegt, wie viele unterschiedliche Abstufungen pro Farbkanal dargestellt werden können. Beim RGB-Farbmodell wird üblicherweise eine Farbtiefe von 3 Byte (entspricht 24 Bit) verwendet. Dies ergibt pro Farbkanal acht Bit, womit 256 Farbabstufungen beschrieben werden können. Somit können 256×256×256 = 16.7 Millionen unterschiedliche Farben dargestellt werden.

<div className="slim-table">

| Farbmodell            | Farbtiefe |           Platzbedarf in Byte |
| :-------------------- | --------: | ----------------------------: |
| Farbe                 |    3 Byte |           $b \cdot h \cdot 3$ |
| Farbe mit Transparenz |    4 Byte |           $b \cdot h \cdot 4$ |
| Graustufen            |    1 Byte |                   $b \cdot h$ |
| Schwarzweiss          |     1 Bit | $b \cdot h \cdot \frac{1}{8}$ |

</div>



[^1]: Quelle: [S. Rothe, T. Jampen, R. Meyer](https://informatik.mygymer.ch/base/?b=code&p=96474)
