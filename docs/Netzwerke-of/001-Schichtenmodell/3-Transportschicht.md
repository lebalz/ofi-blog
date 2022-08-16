---
sidebar_label: 3. Transportschicht
sidebar_position: 3
sidebar_custom_props:
  id: 8e76c74f-7333-4dea-bfc3-f58f5dabf811
---

#  Schicht 3: Transportschicht [^1]

<Answer type="state" webKey="bfb4ed5e-ed95-4353-bb27-f1c1e2f4b0fe">
Gelesen?
</Answer>

Die Transportschicht stellt sicher, dass der Transport korrekt abläuft. Die zu transportierenden Dinge oder Daten müssen zerlegt werden, damit sie in Pakete passen. Die Pakete müssen nummeriert werden, damit die Dinge/Daten am Zielort wieder richtig zusammengesetzt werden können.

## Beispiel «Schule»
Im Beispiel «Schule» zerlegt der Hauswart die einzelnen Pulte. Er muss die Einzelteile der Pulte beschriften, damit sie in der Madretsch-Schule wieder richtig zusammengebaut werden können. Er verpackt die Einzelteile in Pakete und beschriftet diese mit der Post-Adresse. Schliesslich schickt er dem Hauswart der Madretsch-Schule einen Brief (Lieferschein), in welchem auflistet, wie viele Pakete und Pulte verschickt werden.

Der Hauswart der Madretsch-Schule kontrolliert anhand des Lieferscheins, ob alle Pakete angekommen sind. Dann setzt er die Pulte aus den Einzelteilen gemäss Beschriftung wieder zusammen.

Möglicherweise fehlt eine Schraube. In dem Fall schickt er dem GBSL-Hauswart einen Brief und bittet ihn, diese Schraube nachzuschicken.

![](img/3-school-example.svg)

## Internet

Die zwei wichtigsten Protokolle der Transportschicht sind TCP und UDP. Hier werden die Daten der Anwendungsschicht in TCP- oder UDP-Pakete verpackt. Dabei muss natürlich notiert werden, worum es sich bei den Daten der Anwendungsschicht handelt (HTTP, SMTP, ...). Das Protokoll der Anwendungsschicht wird in Form einer Nummer, Port genannt, im TCP- oder UDP-Paket gespeichert (siehe Begriff Ports).

TCP
: Das *Transmission Control Protocol* garantiert die vollständige Übermittlung von Daten. Damit dies klappt, müssen sich die beiden Kommunikationsparteien zuerst verbinden, so dass die Absender:in einen allfälligen Datenverlust mitbekommt und das Paket nochmals schicken kann. Deswegen wird dieses Protokoll auch **verbindungsorientiert** genannt. In den allermeisten Fällen verwenden wir bei unserer täglichen Arbeit im Internet das TCP-Protokoll. Es garantiert, dass keine Pakete verlorengehen oder fehlerhaft ankommen – resp. falls Pakete nicht ankommen, dass diese nochmals angefordert werden. Dies ist in der Regel (z.B. beim Übertragen von Webseiten oder E-Mails) sinnvoll und erwünscht – schliesslich möchten wir nicht, dass einige Passagen auf Webseiten oder in E-Mails fehlen.

UDP
: Das *User Datagram Protocol* hingegen braucht keine anfängliche Verbindung der Kommunikationsparteien, da es eher einer Einweg-Kommunikation gleicht. Es wird deshalb auch **verbindungslose** Kommunikation genannt. Bei UDP findet keine Kontrolle statt, ob sämtliche Pakete (fehlerfrei) ankommen. Da die Empfänger:in keine Empfangsbestätigung schicken muss, werden bei diesem Protokoll weniger Daten übertragen, was zu einer höheren Übertragungsgeschwindigkeit bei gleichzeitig tieferer Latenz führt. Dies ist insbesondere dann hilfreich, wenn wir Audio- oder Videostreams konsumieren. Wir möchten nicht lange auf ein verlorenes Paket warten, sondern nehmen eher ein kurzes Stocken in Kauf und sind froh, dass das Abspielen anschliessend direkt weitergeht.

### Weitere Informationen

<Answer type="state" webKey="b7117a47-5027-4cd7-a975-76110ce38c30">Gesehen?</Answer>

[@youtube](https://www.youtube-nocookie.com/embed/AYdF7b3nMto)

[^1]: Quelle: [rothe.io](https://rothe.io/?b=network&p=463589)
