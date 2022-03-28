---
title: Schlüsselanhänger
---

import Tabs from '@theme/Tabs';
import OsTabs from '@site/src/components/OsTabs'
import TabItem from '@theme/TabItem';

# QR-Code 3D-Drucken

Mit einem 3D-Drucker lassen sich dreidimensionale Objekte erzeugen. Dabei arbeiten alle gängigen Druckverfahren schichtweise - das Objekt wird aus mehreren Schichten zusammengesetzt, wobei eine einzelne Schicht zweidimensional auf die darunterliegende Schicht aufgetragen wird.

:::cards --columns=2 --text-align=center --width=200px
***--text-align=center
![--width=100%](images/prusa-timelapse-01.gif)
***--text-align=center
![](images/prusa-timelapse-02.gif)
***
![](images/prusa-timelapse-03.gif)
***
![](images/prusa-timelapse-04.gif)
:::

Um ein Objekt zu drucken, muss in einem ersten Schritt ein **3D-Modell** erstellt werden und in einem zweiten Schritt muss dieses Modell in einen konkreten **Druck-Ablaufplan** erstellt werden, welcher Schicht-für-Schicht vorgibt, wo sich der Druck-Kopf durchbewegen soll. Dazu werden zwei Tools gebraucht:

- 3D Modell erstellen und bearbeiten mit [tinkercad.com](https://www.tinkercad.com/)
- Druck-Ablaufplan Plan für das Modell berechnen und die Farben auswählen mit dem [Slicer](https://www.prusa3d.com/de/page/prusaslicer_424/)

## QR Code 3D-Modell

Das Grundgerüst für den QR-Code kann direkt über die Webapplikation von https://printer.tools/qrcode2stl/ erzeugt werden.


<Tabs
  defaultValue="step-1"
  values={[
    {label: 'QR Code', value: 'step-1'},
    {label: '3D Model', value: 'step-2'},
    {label: 'Speichern', value: 'step-3'},
  ]}>
  <TabItem value="step-1">

![QR Code Options --max-width=500px](images/qr01.png)

</TabItem>
<TabItem value="step-2">

![3D Model Options --max-width=500px](images/qr02.png)

und das Modell generieren:

![--max-width=150px](images/qr03.png)

</TabItem>
<TabItem value="step-3">

Die einzelnen Teile des Modells können als `.zip`-Ordner heruntergeladen werden. Dazu muss die Option **Separate Parts** aktiviert sein.

![STL Herunterladen --max-width=500px](images/qr04.png)

</TabItem>
</Tabs>

Der heruntergeladene `.zip`-Ordner enthält die einzelnen Teile des 3D-Modells, so auch den QR-Code selbst: `qrcode-1645205191753.stl`:

![Das Modell des QR-Codes --max-width=400px](images/qr05.png)


## Slicer installieren

Der [Prusa Slicer](https://www.prusa3d.com/de/page/prusaslicer_424/) wird für den 3D-Druck an der Schule verwendet. Laden Sie ihn herunter und installieren Sie ihn: https://www.prusa3d.com/de/page/prusaslicer_424/


<Tabs
  defaultValue="step-1"
  values={[
    {label: '1.', value: 'step-1'},
    {label: '2.', value: 'step-2'},
    {label: '⚠️ 3.', value: 'step-3'},
    {label: '4.', value: 'step-4'},
    {label: '5.', value: 'step-5'},
    {label: '6.', value: 'step-6'},
    {label: '7.', value: 'step-7'},
    {label: '8.', value: 'step-8'},
    {label: '9.', value: 'step-9'},
    {label: '10.', value: 'step-10'},
    {label: '11.', value: 'step-11'}
  ]}>
  <TabItem value="step-1">

![Installieren](images/slicer-install-01.png)

</TabItem>
<TabItem value="step-2">

Überspringen...
![](images/slicer-install-03.png)
</TabItem>
<TabItem value="step-3">

Original Prusa i3 MK3S & MK3S MMU2S mit der Düse `0.4mm` auswählen. Alle anderen Drucker können abgewählt werden.
![Original Prusa i3 MK3S & MK3S MMU2S](images/slicer-install-04.png)
</TabItem>
<TabItem value="step-4">

Überspringen...
![](images/slicer-install-05.png)
</TabItem>
<TabItem value="step-5">

Überspringen...
![](images/slicer-install-06.png)
</TabItem>
<TabItem value="step-6">

Überspringen...
![](images/slicer-install-07.png)
</TabItem>
<TabItem value="step-7">

Überspringen...
![Standard-Einstellungen passen](images/slicer-install-08.png)
</TabItem>
<TabItem value="step-8">

![](images/slicer-install-09.png)
</TabItem>
<TabItem value="step-9">

![](images/slicer-install-10.png)
</TabItem>
<TabItem value="step-10">

Experten-Modus auswählen, damit für jede Farbe ein anderes Filament gewählt werden kann. 
![Experten-Modus](images/slicer-install-11.png)
</TabItem>
<TabItem value="step-11">

Den richtigen Drucker auswählen und die Option des Mehrfarbendrucks auswählen. Zudem soll immer im "Draft"-Modus gedruckt werden.
![](images/slicer-install-12.png)
</TabItem>
</Tabs>



:::danger Offene Kanten
Leider gibt es unterschiedliche Konventionen für die Erzeugung von 3D-Objektmodellen. Obwohl unser erzeugter QR-Code auf den ersten Blick gut aussieht, wurden bei der Erzeugung nicht alle Kanten miteinander verbunden, so dass einige Flächen im Modell nicht abgeschlossen sind. Dies kann automatisch behoben werden:


<OsTabs>
<TabItem value="win">

Die heruntergeladene Datei im [slicer](https://www.prusa3d.com/de/page/prusaslicer_424/) öffnen.

Es wird ein Warn-Symbol angezeigt - durch **Doppelklicken** auf das Symbol können die Fehler korrigiert werden. 
![Doppelklicken auf das Symbol](images/qr-fix-win.png)

</TabItem>
<TabItem value="mac">

Mac OSX bietet aktuell keine Möglichkeit, unvollständige 3D-Objekte zu flicken. Deshalb muss ein Web-Dienst verwendet werden:

https://tools3d.azurewebsites.net/

!! Es muss ein privates Microsoft-Konto verwendet werden, die geschäftliche Schul-Email Adresse funktioniert leider nicht.

Dort kann die `.stl` Datei hochgeladen, repariert und wieder heruntergeladen werden.

</TabItem>
</OsTabs>

Das Dateiformat ändert sich durch die Reparatur zu `.3mf`. Um im nächsten Schritt das 3D-Modell selber anzupassen, muss das Dateiformat aber wieder auf `.stl` geändert werden. Dies gelingt mit dem [slicer](https://www.prusa3d.com/de/page/prusaslicer_424/), welcher  `.3mf` in `.stl` Dateien konvertieren kann:

![](images/3mf-to-stl.png)

:::

## 3D-Modell erstellen: Tinkercad

Das geflickte Modell kann nun in Tinkercad weiter bearbeitet werden. Melden Sie sich bei Ihrer Klasse mit ihrem "Nickname" bestehend aus `vorname.nachname` an.

<Tabs
  defaultValue="k24f"
  values={[
    {label: '24f', value: 'k24f'},
    {label: '25h', value: 'k25h'},
  ]}>
<TabItem value="k24f">

https://www.tinkercad.com/joinclass/1W8JWGIB7DWG
</TabItem>
<TabItem value="k25h">

https://www.tinkercad.com/joinclass/A6REDIBCKQFB
</TabItem>
</Tabs>



<Tabs
  defaultValue="step-1"
  values={[
    {label: '1.', value: 'step-1'},
    {label: '2.', value: 'step-2'},
    {label: '3.', value: 'step-3'},
    {label: '4.', value: 'step-4'},
    {label: '5.', value: 'step-5'},
    {label: '6.', value: 'step-6'},
    {label: '7.', value: 'step-7'},
    {label: '8.', value: 'step-8'},
    {label: '9.', value: 'step-9'},
  ]}>
  <TabItem value="step-1">

Das im Slicer geflickte und zu `.stl` exportierte Modell kann nun in Tinkercad weiter bearbeitet werden. Dazu muss es **importiert** werden. Die Standardeinstellungen beim Importieren passen.

![Import](images/tinker-01.png)
</TabItem>
<TabItem value="step-2">

Durch Klicken auf einen weissen Ecken können die Dimensionen eingegeben werden. `21x21 mm` sind eine gute Referenz.

![21x21 mm](images/tinker-02.png)
</TabItem>
<TabItem value="step-3">

Auch die Höhe kann eingegeben werden. Der QR-Code soll minim höher sein als der umliegende Teil. Deshalb wird die Höhe auf `2.02` mm festgelegt.

![2.02 mm Höhe](images/tinker-02b.png)
</TabItem>
<TabItem value="step-4">

Nun muss eine umgebende Form hinzugefügt werden. Dazu kann unter "Shape Generators" eine `Softbox` in die Arbeitsfläche gezogen werden.

`25x30 mm` sind eine angemessene grösse.

![25x30 mm](images/tinker-03.png)
</TabItem>
<TabItem value="step-5">

Die Höhe wird nun auf `2 mm` festgelegt, also `0.02 mm` weniger hoch als der QR-Code. Dadurch sollte der QR-Code von beiden Seiten her lesbar sein.

![2mm dicke](images/tinker-03b.png)
</TabItem>
<TabItem value="step-6">

Nun wird noch der leere Teil grossflächig ausgefüllt mit einer soliden Box von `2 mm` Höhe ausgefüllt.

![](images/tinker-04.png)
</TabItem>
<TabItem value="step-7">

Die Box positionieren...
![](images/tinker-04b.png)
</TabItem>
<TabItem value="step-8">

Der Schlüsselanhänger braucht ein Loch - das Einfügen eines "negativen" Zylinders im oberen Teil ist genau das, was wir suchen. Im Beispiel werden `3.3x5 mm` verwendet.

![](images/tinker-05.png)
</TabItem>
<TabItem value="step-9">

Alles exportieren. **Wichtig!!**: die Option `Include Eveything in the design` muss ausgewählt sein.

:::danger QR-Code prüfen
Überprüfen Sie mit einem QR-Codescanner, ob der QR-Code funktioniert. Evtl. müssen Sie Farben mit einem hohen Kontrast wählen.
:::

![](images/tinker-06-export.png)
</TabItem>
</Tabs>

## Druck vorbereiten im Slicer

Im letzten Schritt wird nun der Druck vorbereitet. Das exportierte `.stl` Modell wird mit dem Prusa Slicer geöffnet. Nun können die unterschiedlichen Flächen mit dem gewünschten Filament belegt werden:

![](images/slicer-01.png)


Schliesslich kann das Modell "geslicet" werden und als **G-Code** für den Drucker heruntergeladen werden.

[@button G-Code hochladen --type=success](https://erzbe-my.sharepoint.com/:f:/g/personal/balthasar_hofer_gbsl_ch/El4N9CTUXFBEhkP_Zau_1n8BuzP1AbyqC_PRQ3Qc_WhLXg)