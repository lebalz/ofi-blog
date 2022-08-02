---
title: 4. Übung
label: 4. Übung
---


# Rastergrafik praktisch [^1]

:::aufgabe 1. JPEG-Format

Das folgende Foto hat im Original eine Auflösung von `6016×4016` Pixel mit einer Farbtiefe von 3 Byte.

1. Berechnen Sie die theoretische Speichergrösse in Megabyte.
2. Laden Sie das Originalbild unter dem folgenden Link herunter:
   - [Originalbild](assets/iceland.jpg)
3. Finden Sie heraus, wie gross der tatsächliche Speicherplatz des Bildes in Megabyte ist. Notieren Sie diese Zahl.
4. Öffnen Sie das Bild in der Foto-App.
5. Ändern Sie die Grösse des Bildes auf 20%.
6. Exportieren Sie das Bild mehrmals nacheinander als JPEG-Datei mit den Qualitäten 100%, 75%, 50% und 0%. Vergleichen Sie die Bilder und die Dateigrössen. Was stellen Sie fest?

![Island](images/04-uebung/iceland.jpg)

<Answer type="text" webKey="2e1c4773-da2e-42da-b506-f158fa968916" />
:::

## TGA-Grafikformat

Das _Targa Image File_ ist ein veraltetes Dateiformat, welches Pixeldaten unkomprimiert speichert. Deshalb können TGA-Dateien mit dem [HexEd.it](https://hexed.it) betrachtet und bearbeitet werden.

Der Dateikopf einer TGA-Datei enthält Informationen dazu, wie die Datei aufgebaut ist.

<div className="slim-table">

| Byte(s) | Bedeutung              | Beispiel |
| :------ | :--------------------- | :------- |
| 1       | Länge der Bild-ID      | `0`      |
| 2       | Farbpalette vorhanden? | `0`      |
| 3       | Bildtyp                | `2`      |
| 4 - 8   | Farbpalette            | `0 0 0 ` |
| 9 - 12  | Koordinaten            | `0 0 0 ` |
| 13 - 14 | Breite                 | `10 00`  |
| 15 - 16 | Höhe                   | `10 00`  |
| 17      | Farbauflösung          | `18`     |
| 18      | Alphakanal             | `20`     |

</div>

Am wichtigsten sind die Felder «Breite» und «Höhe», welche die Dimension des Bildes angeben. Dabei sind die beiden Bytes vertauscht. Um die korrekte Zahl zu erhalten, müssen sie vertauscht und dann als Binärzahl interpretiert werden.

:::aufgabe TGA-Datei

1. Laden Sie die folgende TGA-Datei herunter:
   - [Vorlage](images/04-uebung/vorlage.tga)
2. Öffnen Sie die Datei in _HexEd.it_:
   - [HexEd.it](https://hexed.it)
3. Erstellen Sie ein Bild, indem Sie die Farben für die einzelnen Pixel ändern.
   ![](images/04-uebung/vorlage-tga-hexedit.svg)
4. Laden Sie die geänderte Datei auf den Computer und öffnen Sie es.
:::

[^1]: Quelle: [S. Rothe, T. Jampen, R. Meyer](https://informatik.mygymer.ch/base/?b=code&p=922802)