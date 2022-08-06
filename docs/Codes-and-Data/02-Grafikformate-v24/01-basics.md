---
label: 1. Grundlagen
sidebar_custom_props:
  id: 72a98fbf-13fc-4bce-a4ba-93e98d933ac2
---

# 1. Grundlagen

import ColorDepth from "@site/src/components/VisualizationTools/ColorEncoding/ColorDepth";


# 1. Grundlagen [^1]

## Raster- und Vektorgrafik

Bei der Speicherung von Grafiken und Bildern im Computer wird zwischen zwei grundlegenden Darstellungsarten unterschieden: der Raster- und der Vektorgrafik.

:::flex
![Smiley als Rastergrafik](images/01-smiley-raster.svg)
***
![Smiley als Vektorgrafik](images/01-smiley-vektor.svg)
:::

## Rastergrafik

Bei einer Rastergrafik wird das Bild in viele kleine Quadrate unterteilt. Jedes Quadrat wird mit genau einer Farbe eingefärbt. Diese Quadrate werden **Pixel** genannt.

Die Anzahl Pixel, welche für eine Rastergrafik verwendet werden, wird als **Auflösung** des Bildes bezeichnet. Sie berechnet sich aus der Breite $b$ und Höhe $h$ der Grafik in Pixel.

Eine Rastergrafik mit hoher Auflösung hat eine bessere Qualität, benötigt allerdings auch mehr Speicherplatz. Den theoretischen Speicherbedarf einer Rastergrafik hängt von der Anzahl Pixel und dem verwendeten Farbmodell ab.

Rastergrafiken werden in erster Linie zur Speicherung von Fotos verwendet.

## Vektorgrafik

Bei einer Vektorgrafik wird das darzustellende Bild aus geometrischen Objekten wie Linien, Kreise oder Rechtecken zusammengesetzt. Das Prinzip ist dasselbe wie bei der Turtle-Grafik - jeder Pfad wird in einem Koordinatensystem beschrieben. Durch Hinein- oder Herauszoomen kann das Bild beliebig vergrössert oder verkleinert werden, ohne dass mehr Speicherplatz benötigt wird. 

Vektorgrafiken haben also zwei grosse Vorteile gegenüber Pixelgrafiken. Erstens benötigen sie normalerweise **deutlich weniger Speicherplatz** als eine entsprechende Pixelgrafik, da mit einem Objekt die Farbe von vielen Pixeln festgelegt wird.

Zweitens können Vektorgrafiken ohne Qualitätseinbusse **beliebig vergrössert und verkleinert** werden.

Die einzelnen Objekte können einfarbig sein oder einen Farbverlauf haben, sowie teilweise transparent sein.

Vektorgrafiken werden deshalb insbesondere für folgende Anwendungen eingesetzt:

- Logos
- Illustrationen
- Symbole, Icons
- Schriftarten
- Strassen- und Landkarten

[^1]: Inspiration: [S. Rothe, T. Jampen, R. Meyer](https://informatik.mygymer.ch/base/?b=code&p=943166)
