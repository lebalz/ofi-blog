---
title: WIFI Sniffing
---

import Finding from "@site/src/components/Finding";
import Answer from "@site/src/components/Answer";

# WIFI Sniffing

Eine gängige Attacke um an Login-Daten zu gelangen, ist das sogenannte WIFI-Sniffing. Hier werden zwei Dinge ausgenutzt:
1. Die SSID (Service Set IDentifier, also der Name eines WLAN's) eines Netzwerks kann frei gewählt werden. Es ist auch möglich, dass mehrere WLAN-Netzwerke denselben Namen haben. Für einen Endbenutzer ist es **praktisch nicht möglich** die unterschiedlichen Netzwerke voneinander zu unterscheiden.
2. Die verschickten Datenpakete werden über die Luft übertragen - die verschickten Pakete können nicht nur vom WLAN-Accesspoint empfangen werden, sondern auch von anderen, speziell konfigurierte WLAN-Antennen.

![](images/wifi-monitor-mode.png)

## HTTP Protokoll [^1]

Das *Hypertext Transfer Protocol* (**HTTP**, englisch für *Hypertext-Übertragungsprotokoll*) ist ein Protokoll zur Übertragung von Daten auf der Anwendungsschicht über ein Rechnernetz. Es wird hauptsächlich eingesetzt, um Webseiten aus dem World Wide Web (WWW) in einen Webbrowser zu laden.

Die Kommunikationseinheiten in HTTP zwischen *Client* und *Server* werden als Nachrichten bezeichnet, von denen es zwei unterschiedliche Arten gibt: die **Anfrage** (englisch Request) vom *Client an den Server* und die **Antwort** (englisch Response) als Reaktion darauf vom *Server zum Client*.

Jede Nachricht besteht dabei aus **zwei Teilen**, dem **Nachrichtenkopf** (englisch Message Header, kurz: Header oder auch HTTP-Header genannt) und dem **Nachrichtenrumpf** (englisch Message Body, kurz: Body). Der Nachrichtenkopf enthält Informationen über den Nachrichtenrumpf wie etwa verwendete Codierungen oder den Inhaltstyp, damit dieser vom Empfänger korrekt interpretiert werden kann. Der Nachrichtenrumpf enthält schliesslich die Nutzdaten.

Wenn in einem Web Browser der Link zur URL http://www.example.net/infotext.html angeklickt wird, so wird an den Server mit dem Hostnamen www.example.net die Anfrage gerichtet, die Ressource /infotext.html zurückzusenden.

Der Name www.example.net wird dabei natürlich zuerst über das DNS-Protokoll in eine IP-Adresse übersetzt. Zur Übertragung wird über *TCP* eine **HTTP-GET-Anforderung** an den Server gesendet.

:::tip Anfragemethoden

Es gibt verschiedene HTTP Anfragemethoden, die bekannteste ist die `GET` Anfrage, welche eine Ressource anfordert. Sobald zusätzliche Daten an den Server übertragen werden müssen, z.B. um sich anzumelden, wird eine `POST` Anfrage verschickt, in welcher Formulardaten wie z.B. Benutzername und Passwort enthalten sind.  
:::

### HTTPS [^2]

Ohne Verschlüsselung sind Daten, die über das Internet übertragen werden, für jeden, der Zugang zum entsprechenden Netz hat, als Klartext lesbar. Das *Hypertext Transfer Protocol Secure* (**HTTPS**, englisch für „sicheres Hypertext-Übertragungsprotokoll“) ist ein Syntaktisch identisches Protokoll wie HTTP, nur dass die Daten zusätzlich Verschlüsselt werden. Mit der zunehmenden Verbreitung von offenen (d. h. unverschlüsselten) WLANs nimmt die Bedeutung von HTTPS zu, weil damit die Inhalte unabhängig vom Netz verschlüsselt werden können.

## WIFI-Sniffing: Angriff

Ein Angreifer erzeugt ein öffentliches WLAN-Netzwerk mit derselben SSID wie ein anderes bekanntes Netzwerk, oder setzt sich in ein Restaurant mit einem offenen WLAN. Verbindet sich jemand mit diesem Netzwerk, kann der Angreifer den Netzwerkverkehr überwachen, indem alle verschickten Pakete decodiert werden (**WIFI Sniffing**). Das Decodieren funktioniert allerdings nur dann, wenn es sich um ein **öffentliches WLAN** ohne Passwort handelt. Viele Computer und Smartphones sind so konfiguriert, dass sie automatisch eine Verbindung mit offenen WLANs aufbauen, um der Benutzerschaft maximalen Komfort zu bieten. Besucht ein Benutzer:innen dieses WLANs nun eine Website, kann der Angreifer die Anfrage mitlesen und so bspw. Benutzerstatistiken erheben. Gefährlicher wird es, wenn auf einer Website, die mit dem *HTTP* Protokoll aufgerufen wird, Passwörter eingegeben werden. Dann können die übermittelten Passwörter nämlich mitgelesen werden.

<Finding title="Wieso funktioniert die Decodierung der Pakete bei Passwortgeschützte WIFIs nicht?">

Passwortgeschützte WIFIs **verschlüsseln** den Inhalt der übertragenen Datenpakete zwischen Ihrem Gerät und dem Accesspoint. Die Decodierung kann nur vom Accesspoint vorgenommen werden.

</Finding>

:::aufgabe Schutz

Wie können Sie sich vor WIFI Sniffing schützen?

<Answer type="text" id="q1"/>
:::

[^1]: Quelle: [Wikipedia: HTTP](https://de.wikipedia.org/wiki/Hypertext_Transfer_Protocol)
[^2]: Quelle: [Wikipedia: HTTPS](https://de.wikipedia.org/wiki/Hypertext_Transfer_Protocol_Secure)