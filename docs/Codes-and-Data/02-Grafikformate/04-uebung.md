---
sidebar_label: 4. Übung
sidebar_custom_props:
  id: 30043ba8-dd09-4c10-aeee-d4c119daadfe
  source:
    name: S. Rothe, T. Jampen, R. Meyer
    ref: https://informatik.mygymer.ch/base/?b=code&p=922802
---

# Rastergrafik praktisch

:::aufgabe 1. JPEG-Format
<Answer type="state" webKey="105c3ff0-820f-4870-b6b5-73d50e7ead4c" />

Das folgende Foto hat im Original eine Auflösung von `6016×4016` Pixel mit einer Farbtiefe von 3 Byte.

1. Berechnen Sie die theoretische Speichergrösse in Megabyte.
2. Laden Sie das Originalbild unter dem folgenden Link herunter:
   - [👉 Originalbild](assets/iceland.jpg)
3. Finden Sie heraus, wie gross der tatsächliche Speicherplatz des Bildes in Megabyte ist. Notieren Sie diese Zahl.
4. Öffnen Sie das Bild in der Foto-App.
5. Ändern Sie die Qualität des Bildes auf 20 %.
6. Exportieren Sie das Bild mehrmals nacheinander als JPEG-Datei mit den Qualitäten 100%, 75%, 50% und 10%. Vergleichen Sie die Bilder und die Dateigrössen. Was stellen Sie fest?

![Island](images/04-uebung/iceland.jpg)

<Answer type="text" webKey="2e1c4773-da2e-42da-b506-f158fa968916" />

<Solution webKey="adf65f6c-0892-4249-8786-1719c06d9275">

1. Farbtiefe von 3 Bytes (8 bit pro Farbkanal / 256 Abstufungen pro Farbkanal) `6016 * 4016 * 3 Byte = 72'480'768 Bytes = 72'481 KB = 72.5 MB`
3. `7.01 MB`
5. neu: ~`1 MB` gross
6. Durch das Verändern des Bildes aus Schritt (5) ändern sich zwar die Bildgrössen, **nicht** jedoch deren Qualität! Ein einmal schlechtes Bild wird also durch das neuerliche hochsetzen der Qualität nur ineffizienter gespeichert (braucht also mehr Platz), jedoch wird die Qualität nicht mehr besser.

Zusätzliche Infos: Lesen Sie folgenden Artikel zum JPEG-Format auf digitec.ch: 👉 https://www.digitec.ch/de/page/warum-jpeg-kompression-nicht-des-teufels-ist-6567

Ergänzen Sie Ihre Antwort.

</Solution>
:::

