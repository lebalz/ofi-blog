---
title: 4. Speicher
---

# 4. Speicher

Datenspeicher speichern Daten üblicherweise in binärer Form. Ein Datenspeicher besteht aus einem Speichermedium, auf welchem die Bits physikalisch repräsentiert werden.

## Kenngrössen

Für Speicher gibt es drei wichtige Kenngrössen:

- Die **Speicherkapazität** ist die Datenmenge, welcher der Speicher maximal aufnehmen kann. Sie wird in Byte angegeben.
- Die **Zugriffszeit** ist die Zeit, die benötigt wird, um eine Dateneinheit (z.B. ein Byte) aus dem Speicher auszulesen. Die Zugriffszeit für das Speichern von Daten ist oft grösser als die Zugriffszeit für das Laden.
- Aus der Zugriffszeit kann die **Datenübertragungsrate** berechnet werden, also die Datenmenge, die innerhalb einer bestimmten Zeit geladen oder gespeichert werden kann. Die Datenübertragungsrate wird in Byte pro Sekunde angegeben.


## Arbeitsspeicher (RAM)

Der Arbeitsspeicher oder das RAM (engl. *random access memory*) enthält die Befehle und Daten der aktuell geöffneten Programme oder Apps. Der Prozessor muss möglichst schnell auf diese Daten zugreifen können. Der Arbeitsspeicher muss also eine möglichst kleine Zugriffszeit haben.

Dafür werden Nachteile in Kauf genommen. So ist die Speicherkapazität von Arbeitsspeicher eher klein. Ausserdem ist Arbeitsspeicher **flüchtig**. Die bedeutet, dass die Daten verloren gehen, sobald der Speicher nicht mehr mit Strom versorgt wird.

Heute wird in Computern normalerweise sogenanntes DDR-SDRAM[^1] eingesetzt. Es zeichnet sich dadurch aus, dass die Daten alle paar Millisekunden wieder neu geschrieben werden müssen (*Refresh*).

![DDR SDRAM](images/04-ddr-sdram.jpg)


## Festplatten

Der Festplatten- oder **Massenspeicher** erfüllt ganz andere Anforderungen als der Arbeitsspeicher. Wichtig ist hier, dass Daten in grossen Mengen permanent gespeichert können, ohne dass eine permanente Stromzufuhr nötig ist. Dieser Speicher ist daher deutlich langsamer als der Arbeitsspeicher. Er wird – im Gegensatz zum Arbeitsspeicher – nicht direkt auf das Mainboard gesteckt, sondern mittels Strom- und Datenkabel angeschlossen.

Heute gibt des den Festplattenspeicher in zwei Ausführungen:
- herkömmliche Harddisks oder HDD (engl. *hard disk drive*)
- SSDs (engl. *solid state disk*)


### Harddisk (HDD)

Der Aufbau einer **herkömmlichen Harddisk** gleicht einem Plattenspieler. Im Innern der Harddisk drehen sich mehrere Platten, auf denen durch Magnetisierung einzelner Bereiche Daten gespeichert werden. Auf dem nachfolgenden Bild (rechts) sieht man den Arm zum Auslesen resp. Schreiben der Daten (er befindet sich momentan in der Parkposition neben den Scheiben). Dieser Speicher wird heute noch eingesetzt, um grosse Datenmengen günstig zu speichern. Er ist relativ langsam und anfällig auf Transportschäden, da es sich um einen mechanischen Speicher mit beweglichen Teilen handelt. Die Drehgeschwindigkeit der Platten ist beschränkt, sie bestimmt Lese-/Schreibgeschwindigkeit. Zudem muss stets noch gewartet werden, bis sich der Arm an der richtigen Position befindet.

::: columns 2
![Harddisk](images/04-harddisk.jpg)
***
![geöfffnete Harddisk](images/04-harddisk-open.jpg)
:::


### Solid State Disk (SSD)

Der Aufbau einer **SSD** gleicht in keiner Weise demjenigen einer HDD. Wie der Name schon sagt, enthält sie keine beweglichen Teile und ist daher robuster, schneller, leichter und verbraucht weniger Strom. Allerdings gibt es zwei gewichtige Nachteile:

- SSDs kosten ein Mehrfaches im Vergleich zu herkömmlichen HDDs.
- Auf dem Markt sind nicht so grosse (in Bezug auf die Speicherkapazität) SSDs erhältlich wie HDDs.

:::cards --columns=2
![SSD](images/04-ssd.jpg)
***
![geöfffnete SSD](images/04-ssd-open.jpg)
:::


### Anschlusskabel

Festplatten werden mit sogenannten SATA-Kabeln angeschlossen. Die Abkürzung SATA steht für *serial at attachment*. Das schmalere Kabel dient zur Datenübertragung, das breitere für die Stromzufuhr.

:::cards --columns=2
![SATA-Kabel ](images/04-sata.jpg)
***
![SATA-Stromanschluss ](images/04-sata-power.jpg)
:::


## Speicherhierarchie

Aus technischen Gründen sind schnelle Speicher viel teurer als langsame Speicher. Ausserdem sind schnelle Speicher **flüchtig**, sie benötigen eine Stromzufuhr, um den Speicherinhalt bewahren zu können.

Das führt dazu, dass schneller Speicher in viel kleineren Mengen und nur wo unbedingt nötig eingesetzt wird. Es ergibt sich in Computersystemen eine Hierarchie von verschiedenen Speichern. Je näher der Speicher beim Prozessor ist, desto schneller muss er sein.

![](images/04-storage-hierarchy.svg)

:::aufgabe Speicher
1. Wieso enthält ein Computer so viele verschiedene Speicherarten?
2. Überlege dir und notiere, welche Daten auf den einzelnen Ebenen der oben abgebildeten Speicherhierarchie gespeichert werden.
3. Wieso kann eine Datei auf einer Festplatte viel schneller gelöscht als gespeichert werden?
:::

[^1]: DDR-SDRAM: engl. *Double Data Rate Synchronous Dynamic Random Access Memory*
