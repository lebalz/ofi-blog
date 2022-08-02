---
title: Verkettung von Blöcken
---

import Finding from "@site/src/components/Finding";
import XORBlockCipher from "@site/src/components/VisualizationTools/Crypto/XORBlockCipher";


# Verkettung von Blöcken[^1]

Im letzten Kapitel wurde der Geheimtext zur Ver- bzw. Entschlüsselung in Blöcke aufgeteilt, die exakt so lang sind wie der Schlüssel. Die Blöcke werden anschliessend einzeln durch die XOR-Funktion mit dem Schlüssel ver- bzw. entschlüsselt.

:::info Allgemeine Blockchiffre
Prinzipiell kann anstelle der XOR-Funktion jede beliebige mathematische Funktion (resp. Verkettung von Funktionen) zur Verschlüsselung verwendet werden (in den unten aufgeführten Grafiken daher mit dem allgemeinen Begriff *block cipher encryption* bezeichnet). Wir beschränken uns hier allerdings auf die einfache und gut verständliche XOR-Verschlüsselung.
:::

## Der Betriebsmodus «Electronic Code Book» (ECB)
Falls jeder Block mit dem immer gleichen Schlüssel verschlüsselt wird, spricht man vom «Electronic Code Book» (**ECB**) Betriebsmodus. Schematisch dargestellt sieht dieser wie folgt aus:

![Verschlüsselung im ECB-Modus](images/ECB_encryption.svg)

In der Abbildung wird deutlich, dass ECB kein eigenes Verschlüsselungsverfahren, sondern nur ein **Modus** ist. Er definiert, wie die einzelnen Blöcke verwendet werden. Die konkrete Verschlüsselungsfunktion ist in dieser Darstellung nicht genauer angegeben – wir verwenden der Einfachheit halber hier die XOR-Funktion.

Die Entschlüsselung funktioniert analog: Der Geheimtext wird wiederum in Blöcke aufgeteilt, welche separat mit dem Schlüssel entschlüsselt werden. Die dabei entstandenen Klartext-Blöcke ergeben aneinander gereiht den gesamten Klartext.

![Entschlüsselung im ECB-Modus](images/ECB_decryption.svg)

### Tool

<XORBlockCipher />


:::aufgabe Aufgabe ECB-Modus
1. Verschlüsseln Sie den Text `EINE SEHR KLEINE SENSATION` mit dem Schlüssel `ZUSE`.  
<Answer type="string" webKey="52638af8-d4af-4f19-ab55-8de24a8bac94" solution="@-. ZFVMHUXI@-. ZFVKITGLU," sanitizer={(val) => val.trim().toUpperCase()} />

2. Schauen Sie sich den Klartext und den Geheimtext genau an.
3. Überlegen Sie sich, welche Schwächen der ECB-Modus hat.

<Answer type="text" webKey="11762cec-7a10-48f4-ab40-648addaca855" />

<details><summary>Hinweis</summary>
Überlegen Sie sich, was passiert, wenn zwei Blöcke identisch sind (z.B. weil eine bestimmte Passage des Textes erneut vorkommt). Wie ist die Auswirkung auf den Geheimtext?
</details>
:::


## Der Betriebsmodus «Cipher Block Chaining» (CBC)
Im CBC-Modus werden die Blöcke nicht mehr getrennt voneinander verarbeitet. Wie in der folgenden Abbildung ersichtlich ist, dient jeder Geheimtext-Block (ausser der letzte) im nachfolgenden Schritt zusätzlich als Input. So werden gleiche Klartext-Blöcke trotz identischem Schlüssel zu unterschiedlichen Geheimtextblöcken verschlüsselt.

Das Plus-Zeichen ich Kreis steht hier ebenfalls für die XOR-Operation. Diese ist gegeben, während die Verschlüsselung im grossen Rechteck mit der Bezeichnung block cipher encryption aus aktuell als sicher geltenden Verfahren frei gewählt werden kann. Es wird also in unseren Beispielen sowohl für die Verrechnung des Klartextblocks mit dem vorherigen Geheimtextblock wie auch für eigentliche Verschlüsselung die XOR-Operation verwendet.

Da bei der Verarbeitung des ersten Blocks noch kein Geheimtext-Block zur Verfügung steht, wird ein sogenannter «Initialisierungsvektor» (**IV**) verwendet.


![Verschlüsselung im CBC-Modus](images/CBC_encryption.svg)

Ändert man 1 Bit im IV, führt dies zu Änderungen im gesamten Geheimtext. Ändert man 1 Bit im Klartext, so ändern sich auch sämtliche darauffolgenden Blöcke im Geheimtext.

Ein Nachteil des CBC-Modus ist allerdings, dass die **Verschlüsselung** der verschiedenen Blöcke nicht gleichzeitig (also parallel) berechnet werden können, da das Resultat des vorherigen Blocks für die Verschlüsselung des aktuellen Blocks benötigt wird. D.h. ein bestimmter Klartext-Block kann erst verschlüsselt werden, wenn sämtliche vorherigen Blöcke bereits verschlüsselt sind.

Bei der **Entschlüsselung** sieht es anders aus. Da sofort sämtliche Geheimtextblöcke vorliegen, kann die Entschlüsselung problemlos parallelisiert werden, wie du in der folgenden Abbildung nachvollziehen kannst:

![Entschlüsselung im CBC-Modus](images/CBC_decryption.svg)

:::info Bemerkenswert
Auf den ersten Blick erstaunlich ist die Tatsache, dass die Entschlüsselung mit falschem IV nur dazu führt, dass der erste Klartext-Block unleserlich ist, während die restlichen Blöcke korrekt entschlüsselt werden.
:::

:::aufgabe Aufgabe CBC-Modus
1. Verschlüsseln Sie nochmals denselben Text, diesmal allerdings im CBC-Modus:  
**Klartext**: `EINE SEHR KLEINE SENSATION`  
**Schlüssel**: `ZUSE`

2. Achten Sie wiederum auf die Blöcke, die im Klartext übereinstimmen. Was passiert jetzt?
3. Wähle verschiedene Initialisierungsvektoren. Wie unterscheiden sich die Resultate?

<Answer type="text" webKey="d98093d9-0718-4b04-9ac3-f2ea9617153b" monospace />

:::

:::aufgabe Aufgabe Initialisierungsvektor
Überlegen Sie sich zusammen mit Ihrer Pultnachbar:in, mit welcher einfachen Massnahme man darauf verzichten könnte, neben dem Schlüssel auch den Initialisierungsvektor mit der Kommunikationspartner:in abzusprechen.
<Answer type="text" webKey="f33e61bc-140f-4f48-a027-abccae18ec05" />

:::

:::aufgabe Aufgabe Angriff auf die XOR-Blockchiffre
Setzen Sie sich in Dreiergruppen zusammen und diskutieren Sie folgende Fragen:

1. Welche Faktoren beeinflussen die Sicherheit unserer XOR-Blockchiffre?
2. Stellen Sie zu jedem Faktor eine Aussage auf, die aufzeigt, wie eine möglichst hohe Sicherheit erreicht werden kann.
3. Wie sicher ist die Verwendung von XOR (im Kasten «block cipher encryption/decryption» in den Abbildungen oben) als Blockchiffren-Verfahren?

<Answer type="text" webKey="941b53f7-db87-43d1-99e9-a91012309cf1" />

:::

:::info XOR-Blockchiffre
Selbstverständlich ist XOR als Verschlüsselungsfunktion aus kryptologischer Sicht nicht ideal – dafür aber für uns gut verständlich, überschaubar und einfach anzuwenden.

In der Realität ist es besonders wichtig, dass die Verschlüsselungsfunktion sämtliche Bits des aktuellen Blocks stark «vermischt». Damit ist gemeint, dass eine winzige Änderung an einer bestimmten Stelle im Klartextblock nicht nur zu einer kleinen Änderung an derselben Stelle im Geheimtextblock führt (wie dies bei XOR wegen der bitweisen Verarbeitung der Fall), sondern dass durch die kleine Änderung viele Bits überall im Block verändert werden.

Aus diesem Grund arbeiten aktuelle Verschlüsselungsfunktionen von Blockchiffren in **mehreren Runden**.
:::

<Answer type="text" webKey="6777c273-f2c3-4387-bee1-609a6a0be2c0" placeholder="Notizen..." />

[^1]: Quelle: [rothe.io](https://rothe.io/?b=crypto&p=685616)
