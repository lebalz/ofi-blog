---
label: 3. Rastergrafik
sidebar_custom_props:
  id: eff27b62-3577-43d1-a41d-56876eee40c7
---

# 3. Rastergrafik

# 3. Rastergrafik [^1]

## Theoretische Speichergrösse

Die theoretische Speichergrösse einer Rastergrafik wird berechnet, indem die Anzahl Pixel $a$ mit der Farbtiefe $f$ multipliziert wird. Die Farbtiefe gibt an, welche Datenmenge für die Darstellung einer Farbe benötigt wird.

Die Anzahl Pixel wird aus der **Auflösung**, also der Breite $b$ und Höhe $h$ des Bildes in Pixel berechnet.

Für die Speichergrösse rechnen wird also wie folgt:

$$
b\cdot h\cdot f$$

:::info Beispiel
Ein Bild mit einer Auflösung von `1920×1080` Pixel und der Farbtiefe `3 Byte` benötigt einen Speicherplatz von:

$$
1920\cdot 1080\cdot 3 = 6220800 \,\text{B} = 6.2 \,\text{MB}$$
:::

## JPEG-Grafikformat

Das Grafikformat der _Joint Photographic Experts Group_ ist ein beliebtes Format zu Speicherung von Fotos. Es kann den benötigten Speicherplatz gegenüber der theoretischen Grösse von Rastergrafiken sehr stark reduzieren.

Dazu wird ein komplexer mathematischer Algorithmus verwendet, welcher bewirkt, dass das ursprüngliche Bild nicht mehr genau Pixel für Pixel rekonstruiert werden kann. Deshalb spricht man hier von einer **verlustbehafteten Kompression**.

Der Algorithmus kann durch die Angabe der **Qualität** in Prozent beeinflusst werden. Die folgenden Bildausschnitte illustrieren, wie die Qualität und die Speichergrösse zusammenhängen:

:::cards --columns=4
![höchste Qualität (162 kB)](images/03-raster/zeichnung-640-hoechst-detail.png)
***
![hohe Qualität (42 kB)](images/03-raster/zeichnung-640-hoch-detail.png)
***
![mittlere Qualität (18 kB)](images/03-raster/zeichnung-640-mittel-detail.png)
***
![niedrige Qualität (9 kB)](images/03-raster/zeichnung-640-niedrig-detail.png)
:::

An den Bildern wird sichtbar, dass die JPEG-Kompression besonders entlang von Rändern Störungen («Artefakte») verursacht. Bei Fotos fällt dies weniger auf. Die folgenden zwei Bilder sind beide mit mittlerer JPEG-Qualität gespeichert worden:

:::cards --columns=2
![JPEG-Grafik 640×360 Pixel in mittlerer Qualität](images/03-raster/foto-640-mittel.jpg)
***
![JPEG-Grafik 640×360 Pixel in mittlerer Qualität](images/03-raster/zeichnung-640-mittel.jpg)
:::

Das JPEG-Datei eignet sich also besonders, um Fotografien platzsparend zu speichern.

## PNG-Grafikformat

Das _Portable Network Graphics_-Format wird für **verlustfreie** Speicherung von Rastergrafiken mit **Transparenz** verwendet. Es eignet sich beispielsweise für Bildschirmfotos und Grafiken für Webseiten oder Computerspiele.

Das folgende Beispiel zeigt links einen Baum als PNG-Grafik mit Transparenz gespeichert. Rechts ist das gleiche Bild als JPG-Grafik mit hoher Qualität gespeichert.

:::flex --align-items=center
![PNG-Grafik (32 kB)](images/03-raster/baum.png)
***
![JPEG-Grafik (13 kB)](images/03-raster/baum.jpg)
:::

Durch die Speicherung als JPG-Grafik geht die Transparenz verloren, das Bild kann z.B. nicht mehr auf farbigen Folien verwendet werden. Ausserdem sind JPEG-Artefakte sichtbar.

## Grössenvergleich der Dateiformate

Die folgende Tabelle zeigt die Dateigrössen des gleichen Bildes (640×360) mit verschiedenen Dateiformaten:

<div className="slim-table">

| Format                | Dateigrösse | relativ |
| :-------------------- | ----------: | ------: |
| theoretische Grösse   |      691 kB |    100% |
| PNG                   |      146 kB |     21% |
| JPG höchste Qualität  |      162 kB |     23% |
| JPG hohe Qualität     |       42 kB |      6% |
| JPG mittlere Qualität |       18 kB |      3% |
| JPG tiefe Qualität    |        9 kB |      1% |

</div>

:::aufgabe Jupyterhub ⭐

Loggen Sie sich auf https://jupyter.gbsl.website ein und kopieren Sie den Ordner `shared/Rastergrafik` in ihr Home-Verzeichnis (per Drag-and-Drop auf den kleinen Ordner oben links ziehen - es erscheint eine Fehlermeldung, die jedoch ignoriert werden kann). Öffnen Sie danach den kopierten Ordner `Rastergrafik/`. In diesem Ordner finden Sie eine Datei `Bild.csv` - es enthält eine `5x5` Pixel grosse Rastergrafik. Mit `Rechtsklick > Öffnen mit > editor` kann das Bild bearbeitet werden.

Ändern Sie die Farben so ab, dass ein Schweizerkreuz entsteht.

Um das Bild zu betrachten, muss das Programm `csv_to_png.ipynb` gestartet werden (mit `shift+enter`).

Tipp: verwenden Sie für jeden Farbkanal genau 3 Ziffern, damit die Zeilen nicht verrücken. Beispiel:

```
255:255:000, 200:000:030, 255:255:255
```
:::

[^1]: Quelle: [S. Rothe, T. Jampen, R. Meyer](https://informatik.mygymer.ch/base/?b=code&p=943166)
