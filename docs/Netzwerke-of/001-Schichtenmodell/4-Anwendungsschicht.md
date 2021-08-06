---
sidebar_label: 4. Anwendungsschicht
sidebar_position: 2
---

# Schicht 4: Anwendungsschicht [^1]

Auf der Anwendungsschicht geht es um Dinge, die den Benutzer des Systems interessieren.

## Beispiel «Schule»
Im Beispiel «Schule» sind dies Pulte, welche von einem Schulhaus ins andere transportiert werden sollen. Wie genau Verpackung und Transport organisiert sind, wird auf dieser Ebene ausgeblendet. Hier geht es nur um den eigentlich Inhalt – also darum, welche und wie viele Pulte verschickt werden sollen.

![@](img/4-school-example.svg)

## Internet
Typische Anwendungen im Internet sind Webseiten, Web-Apps oder E-Mail.

**HTTP**: Das Hypertext Transfer Protocol ist für die Übertragung von Webseiten zuständig. Genauer gesagt werden mit HTTP die Daten übertragen, aus welchen Webseiten zusammengesetzt sind, also HTML-Dateien, Bilder, usw.

**SMTP**: Das Simple Mail Transfer Protocol wird eingesetzt, um E-Mails zu versenden. Das Protokoll regelt den Transport der E-Mail von dem/r Absender*in bis zum E-Mail-Server auf Empfängerseite.

**IMAP**: Das Internet Message Access Protocol wird zum Abrufen und Organisieren des eigenen Postfachs verwendet – sprich, um mit dem E-Mail-Server zu kommunizieren, der die eigene E-Mail-Box gespeichert hat.

:::info ⠀
Sie sehen, dass zum Senden und Empfangen von E-Mails zwei verschiedene Protokolle zum Einsatz kommen, was auf den ersten Blick erstaunen mag. Natürlich kommen die E-Mails beim Versenden über SMTP auch ohne IMAP an – aber nicht bei dem/der Empfänger:in, sondern nur in dessen/deren Postfach. Um dieses abzurufen ist das zweite Protokoll (IMAP) nötig.
:::

### ⭐ Weitere Informationen

<iframe width="100%" height="315" src="https://www.youtube.com/embed/kBXQZMmiA4s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[^1]: Quelle: [rothe.io](https://rothe.io/?b=network&p=80064)