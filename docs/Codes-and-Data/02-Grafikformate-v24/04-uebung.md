---
label: 4. Übung
sidebar_custom_props:
  id: bb1ec326-d699-4eb2-b275-27ce24172ca7
---

import OsTabs from '@site/src/components/OsTabs'


# Rastergrafik praktisch

:::aufgabe 1. Signal/Telegram/Threema/WhatsApp
1. Machen Sie ein Porträt-Foto (mit der Kamera-App!)
2. Untersuchen Sie das Foto:
   - Erkennen Sie einzelne Wimpern auf dem Foto?
   - Wie viel Speicherplatz braucht das Foto?
   - In welchem Format ist es abgespeichert?
3. Schicken Sie das Foto der Pultnachbar:in und beantworten Sie die Frage (2) mit dem empfangenen Bild erneut. Welche Unterschiede stellen Sie fest?
4. Versuchen Sie unterschiedliche Messenger-Apps (Signal, Threema, Telegram, WhatsApp) aus: gibt es Unterschiede bei den Bildgrössen?

<Answer type="text" webKey="952e52df-458b-493b-95fd-e4a636af4ae8" />
:::

:::aufgabe 2. JPEG-Format [^1]

Das folgende Foto hat im Original eine Auflösung von `6016×4016` Pixel mit einer Farbtiefe von 3 Byte.



1. Berechnen Sie die theoretische Speichergrösse in Megabyte.
2. Laden Sie das Originalbild unter dem folgenden Link herunter:

   [Originalbild @download](assets/iceland.jpg)

3. Finden Sie heraus, wie gross der tatsächliche Speicherbedarf des Bildes in Megabyte ist. Notieren Sie diese Zahl.
4. Öffnen Sie das Bild in einer Foto-App (unter **Mac**: in der Vorschau).
5. Exportieren Sie das Bild mehrmals nacheinander als JPEG-Datei mit den Qualitäten 90%, 80%, 50% und 10%. Vergleichen Sie die Bilder und die Dateigrössen. Was stellen Sie fest?


<OsTabs>
  <TabItem value="win">

Im Foto App öffnen und als Kopie exportieren:

![](images/04-uebung/jpeg-quality-windows.gif)
  </TabItem>
  <TabItem value="mac">

Mac: `Ablage > Exportieren`, als Dateiformat `JPEG` wählen, die Qualität muss auf dem Slider abgeschätzt werden.

![](images/04-uebung/jpeg-quality-1-osx.png)

![](images/04-uebung/jpeg-quality-2-osx.png)
  </TabItem>
</OsTabs>

6. Kann die Qualität wiederhergestellt werden? Öffnen Sie das zuvor mit der Qualität von 10% exportierte Bild und exportieren Sie es erneut mit einer Qualität von 100%. Was stellen Sie fest? Wie widerspiegelt sich dies in der Dateigrösse und der Bildqualität beim Betrachten?

![Island](images/04-uebung/iceland.jpg)

<Answer type="text" webKey="2e1c4773-da2e-42da-b506-f158fa968916" />
::: 

[^1]: Quelle: [S. Rothe, T. Jampen, R. Meyer](https://informatik.mygymer.ch/base/?b=code&p=922802)
