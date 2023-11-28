---
sidebar_custom_props:
  id: 0b4e3ced-74a8-4416-93ed-3934c34c320c
  source:
    name: rothe.io
    ref: https://rothe.io/?b=crypto&p=151207
---

import FrequencyAnalysis from "@site/src/components/VisualizationTools/Crypto/FrequencyTextAnalysis";

# Häufigkeitsanalyse

## Buchstabenhäufigkeit in der deutschen Sprache [^1]

Nicht alle Buchstaben kommen in der deutschen Sprache gleich häufig vor. Nachfolgend findest du eine Auflistung der 10. häufigsten Buchstaben der deutschen Sprache:

<div className="slim-table">

|            |   1.    |   2.   |   3.   |   4.   |   5.   |   6.   |   7.   |   8.   |   9.   |  10.   |
| :--------- | :-----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: |
| Buchstabe  |    E    |   N    |   I    |   S    |   R    |   A    |   T    |   D    |   H    |   U    |
| Häufigkeit | 17,40 % | 9,78 % | 7,55 % | 7,27 % | 7,00 % | 6,51 % | 6,15 % | 5,08 % | 4,76 % | 4,35 % |

</div>

## al-Kindi [^2]

:::flex{justify=space-between}
Im neunten Jahrhundert hat der arabische Gelehrte Abū Ya'qūb ibn Ishāq al-Kindī (oder kurz al-Kindi) durch eine Analyse des Korans entdeckt, dass die einzelnen Zeichen der arabischen Schrift in bestimmten Häufigkeiten auftreten. In seiner Abhandlung über die Entzifferung kryptographischer Botschaften schrieb er Folgendes:
::br{no-flex=true}
![--no-margins](images/al-kindi.jpg)
:::

> Eine Möglichkeit, eine verschlüsselte Botschaft zu entziffern, vorausgesetzt, wir kennen ihre Sprache, besteht darin, einen anderen Klartext in derselben Sprache zu finden, der lang genug ist, um ein oder zwei Blätter zu füllen, und dann zu zählen, wie oft jeder Buchstabe vorkommt. Wir nennen den häufigsten Buchstaben den «ersten», den zweithäufigsten den «zweiten», den folgenden den «dritten» und so weiter, bis wir alle Buchstaben in der Klartextprobe durchgezählt haben. Dann betrachten wir den Geheimtext, den wir entschlüsseln wollen, und ordnen auch seine Symbole. Wir finden das häufigste Symbol und geben ihm die Gestalt des «ersten» Buchstabens der Klartextprobe, das zweithäufigste Symbol wird zum «zweiten» Buchstaben, das dritthäufigste zum «dritten» Buchstaben und so weiter, bis wir alle Symbole des Kryptogramms, das wir entschlüsseln wollen, auf diese Weise zugeordnet haben.

## Entschlüsselung durch Häufigkeitsanalyse
Durch die Häufigkeitsanalyse werden Geheimtexte, die durch eine monoalphabetische Substitution verschlüsselt worden sind, grundsätzlich entzifferbar. Das heisst, sie können ohne Kenntnis des Schlüssels decodiert werden, indem eine Häufigkeitsanalyse vorgenommen wird. Für die Entzifferung einer Caesar-Chiffre genügt es, den häufigsten Buchstaben zu suchen und anschliessend denjenigen Schlüssel zu wählen, der E auf diesen häufigsten Buchstaben abbildet.

## Häufigkeitsanalyse durchführen

<FrequencyAnalysis />

:::aufgabe
Entschlüsseln Sie mithilfe der Häufigkeitsanalyse folgende geheime Nachricht:

```
CJQHLGDGYAW AKL VAW DWZJW VWK NWJTGJYWFWF. VAW CJQHLGDGYAW MEXSKKL VAW XGDYWFVWF ROWA LWADYWTAWLW: CJQHLGYJSHZAW MFV CJQHLGSFSDQKW. CJQHLGYJSHZAW TWRWAUZFWL VAW CMFKL VWK NWJKUZDMWKKWDFK, OSWZJWFV KAUZ VAW CJQHLGSFSDQKW VSEAL TWKUZSWXLAYL, SMK NWJKUZDMWKKWDLWF TGLKUZSXLWF AFXGJESLAGFWF RM YWOAFFWF, KHJAUZ, KAW RM CFSUCWF.
```

Halten Sie Ihr Vorgehen genau fest.

<Answer type="text" webKey="1c1320de-991f-4b0f-9a4c-3a9c71073b66" />
:::

[^1]: Quelle [Wikipedia](https://de.wikipedia.org/wiki/Buchstabenh%C3%A4ufigkeit)
[^2]: Quelle [Qikipedia](https://de.wikipedia.org/wiki/Al-Kind%C4%AB)
