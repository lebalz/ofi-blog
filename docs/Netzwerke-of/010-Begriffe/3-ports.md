---
sidebar_custom_props:
  id: ebeeda54-71e2-4de6-b4bc-ec987e8f8396
---

# Ports

# Ports [^1]

## Wozu benötigt man Ports?

Ein Computer, der sich in einem Netzwerk befindet, hat meist etliche Verbindungen gleichzeitig zu vielen anderen Computern geöffnet. Sogar zwei Computer untereinander verwenden häufig mehrere Verbindungen gleichzeitig:

So könnte ein Benutzer auf seinem Computer im Browser eine Webseite besuchen, während das Betriebssystem gerade den Update-Server kontaktiert – beides benötigt eine DNS-Abfrage, d.h. Verbindungen zum DNS-Server.

Auf der Vermittlungsschicht kontaktiert derselbe Client mit seiner IP-Adresse für beide Verbindungen die IP-Adresse desselben (DNS-)Servers. Eine Stufe höher – auf der Transportschicht – müssen die Verbindungen unterschieden werden können. Schliesslich sollen die beiden Antworten ja nicht vertauscht werden. Daher verwendet man Ports – eine 16-bit Zahl (sprich: Werte von 0 - 65'535).

## Well-known Ports

Auf der Serverseite werden in der Regel stets dieselben Ports eingesetzt – schliesslich muss ein Client wissen, auf welchem Port er den gewünschten Dienst erreichen kann.

Einige bekannte Ports sind:

| Portnummer | Dienst                                              |
| ---------: | :-------------------------------------------------- |
| `25`       | Simple Mail Transfer Protocol (SMTP)                |
| `53`       | Domain Name System (DNS)                            |
| `80`       | HyperText Transfer Protocol (HTTP)                  |
| `143`      | Internet Message Access Protocol (IMAP)             |
| `465`      | Simple Mail Transfer Protocol **Secure** (SMTPS)    |
| `443`      | HyperText Transfer Protocol **Secure** (HTTPS)      |
| `993`      | Internet Message Access Protocol **Secure** (IMAPS) |

[^1]: Quelle: [rothe.io Ports](https://rothe.io/?b=network&p=240119)
