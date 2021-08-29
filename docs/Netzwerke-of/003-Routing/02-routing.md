---
title: Routing im Internet
---

import Answer from "@site/src/components/Answer";
import Finding from "@site/src/components/Finding";
import TabItem from '@theme/TabItem';
import OsTabs from '@site/src/components/OsTabs';

# Routing im Internet [^1]

Wie Pakete eine Postadresse haben, brauchen auch Datenpakete eine Adresse, damit sie korrekt zugestellt werden können. Diese Adressen nennt man **IP-Adressen**, wobei IP für *Internet Protocol* steht.
## Adressierung

Normalerweise erhält jedes Gerät beim Beitritt zu einem Rechnernetz eine IP-Adresse zugewiesen. Die Adresse gehört zum entsprechenden Netz und erlaubt die Kommunikation mit allen Geräten die sich ebenfalls im selben Netz befinden. Deshalb erhält Ihr Gerät hier am GBSL eine andere Adresse als bei Ihnen zu Hause.

:::info

Ihre Persönlichkeit ändern Sie bei einem Umzug nicht, Ihre Wohnadresse aber schon. Gleiches gilt für die MAC-Adresse und IP-Adresse eines Geräts: Die MAC-Adresse bleibt gleich, die im Netzwerk sichtbare IP-Adresse ändert jedoch.
:::

### Aufbau
Eine IP-Adresse setzt sich aus 4 Zahlen zu je 8 Bit zusammen. Diese 4 Zahlen werden im Dezimalsystem notiert und mit Punkten verbunden.

```
194.124.132.216
```
    
Mit 8 Bits können Zahlen von $0-255$ dargestellt werden:

$$
\begin{aligned}
1111\,1111_2 &= 2^7 + 2^6 + 2^5 + 2^4 + 2^3 + 2^2 + 2^1 + 2^0 \\
            &= 128 + 64 + 32 + 16 + 8 + 4 + 2 + 1 \\
            &= 255
\end{aligned}
$$


### meine IP

Jedes Gerät das mit dem Internet verbunden ist, braucht eine IP-Adresse.

:::aufgabe IP-Adresse finden

Finden und notieren Sie die IP-Adresse

- Ihres Computers
- Ihres Smartphones

Vergleichen Sie die beiden IP-Adressen. Was stellen Sie fest?

<Answer type="text" id="q1" placeholder="IP-Adressen"/>

<details><summary>Wie finde ich die IP-Adresse?</summary>

Sie wissen nicht, wie man die IP-Adresse des eigenen Geräts findet?

Es gibt zahlreiche Anleitungen: Googeln Sie z.B.

```
IP-Adresse finden Android
```

oder

```
IP-Adresse finden Windows 10
```
oder etwas Ähnliches, das auf Ihr Gerät resp. Ihr  Betriebssystem abgestimmt ist.
</details>
:::

:::aufgabe 🏠 IP-Adresse finden

Finden und notieren Sie die IP-Adresse

- Ihres Computers
- Ihres Smartphones

bei Ihnen zu Hause!

<Answer type="text" id="q2" placeholder="IP-Adressen"/>

:::

## Standardgateway

Für die Kommunikation mit Geräten ausserhalb des eigenen Netzwerks müssen die Internetpakete zum nächsten Verteilzentrum geschickt werden. In der Analogie zum Öffentlichen Verkehr ist dies die nächstgelegene Haltestelle, die Sie zum Hauptbahnhof bringt: wollen Sie an einen Ort ausserhalb ihrer Stadt, so gehen Sie zum Hauptbahnhof, wo Sie in die richtige Richtung weitergeleitet werden. Dieser Weg zum Hauptbahnhof wird bei Netzwerken **Standardgateway** genannt.

### Standardgateway ihres Laptops

<OsTabs>
<TabItem value="win">

```.sh title="In der Kommandozeile (cmd) eingeben"
ipconfig
```

![](images/ipconfig.png)

</TabItem>
<TabItem value="mac">

```.sh title="In der Koommandozeile (terminal) eingeben"
netstat -nr
```

![](images/netstat.png)

</TabItem>
</OsTabs>

:::info
Zu Hause haben Sie als Standardgateway die IP-Adresse Ihres Routers/Modems eingetragen – also dem Gerät, das Sie von Ihrem Internet-Anbieter erhalten, um Zugang zum Internet zu erhalten.
:::

:::aufgabe
Gehen Sie auf die Webseite https://whatsmyip.org/. Was wird angezeigt?

<Answer type="text" id="q3"/>

<details><summary>Lösung</summary>

Bei der angezeigten Adresse handelt es sich um die IP-Adresse, welche im Internet sichtbar ist. Ihr Gerät befindet sich meist nicht direkt im Internet, sondern ist über den Router damit verbunden. Sie sehen hier also die externe IP-Adresse Ihres Routers/Modems.

(Router oder Hotspots haben immer mindestens zwei IP-Adressen, weil sie zwei Netze miteinander verbinden und deshalb in beiden Netzen eine IP-Adresse brauchen.)

</details>
:::


### Ping
Beim Ping-Befehl handelt es sich um ein Netzwerkdiagnose-Tool, womit man die Datenübertragung zu einem anderen Gerät überprüfen kann. Dabei sendet man ein Signal an ein entferntes Gerät. Dieses Gerät sollte dann ein Signal zurücksenden.

```sh title="In der Kommandozeile"
ping 194.124.132.216
```
    
:::aufgabe Ping ausführen

Führen Sie einen Ping mit folgenden IP-Adressen aus:

```sh
194.124.132.216
8.8.8.8
185.237.144.226
194.150.245.142
```

- Was bedeutet die Ausgabe?
- Wieso gibt es Unterschiede?

<Answer type="text" id="q4"/>

:::

## Routing für Datenpakete

Routing-Algorithmen sorgen dafür, dass Datenpakete ihren Weg durch das Internet finden. Dabei kann es sein, dass mehrere Pakete mit dem selben Ziel unterschiedliche Routen nehmen.

![Netzwerkrouting](images/routing.svg)

### Router

Ein Router ist ein Gerät, welches zwei Netzwerke miteinander verbindet. Er besitzt also **zwei Netzwerkkarten** und somit auch **zwei IP-Adressen** (und auch zwei MAC-Adressen).

> Ein IP-Paket weist folgende Informationen auf:
> - IP-Adresse Quelle (Verfasser der Nachricht)
> - IP-Adresse Sender
> - IP-Adresse Empfänger

## Router im Schichtenmodell
Router stellen die Verbindung zwischen unterschiedlichen Netzwerken her. Sie müssen die **IP-Pakete auspacken**, damit diese gemäss der IP-Adresse **weitergeleitet** werden können. Dabei bedienen sich Router spezieller Tabellen, welche angeben, wohin ein Paket mit einer bestimmten IP-Adresse hingeleitet werden soll.

![](images/routing-ip-packages.svg)


## Routen verfolgen
Der Befehl `traceroute` (macOS) resp. `tracert` (Windows) kann diese Route nachverfolgt werden. Dabei werden die Zwischenstationen – also dort wo das Paket entpackt und gemäss Ziel-IP-Adresse weitergeleitet wird – angezeigt.

:::aufgabe `traceroute`



<OsTabs>
<TabItem value="win">

Öffnen Sie eine Eingabeaufforderung (cmd) und geben Sie nacheinander die folgenden drei Befehl ein:

```.sh title="In der Kommandozeile (cmd)"
tracert office.com
tracert www.google.ch
tracert www.gbsl.ch
```

</TabItem>
<TabItem value="mac">

Öffnen Sie eine Eingabeaufforderung (terminal) und geben Sie nacheinander die folgenden drei Befehl ein:

```.sh title="In der Kommandozeile (terminal)"
traceroute office.com
traceroute www.google.ch
traceroute www.gbsl.ch
```

</TabItem>
</OsTabs>

Beobachten Sie den Output. Erkennen Sie Gemeinsamkeiten oder irgendeine spezielle Zwischenstation?
:::


## «Highspeed-Routen»
### Schweiz
Auf der untenstehenden Karte erkennt man die schnellsten Leitungen von Switch. Diese Organisation verbindet die Universitäten und Forschungsinstitute miteinander und mit dem Ausland.

![SWITCH-LAN](images/switch-lan.jpg)

Andere Provider besitzen ebenfalls schnelle Leitungen zwischen den Städten und ins Ausland. z.B. wurden bestehenden Gas-Leitungen mit schnellen Glasfaser-Kabeln versehen.

![GASCOM](images/gascom-lan.png)

### Interkontinental

Bei der Verbindung von Kontinenten hatte man schon vor dem Internet-Zeitalter Unterseekabel verlegt.

![](images/international-lan.png)

Heute laufen zahlreiche «Highspeed-Routen» über den Grund der Meere.

<iframe width="100%" height="315" src="https://www.youtube-nocookie.com/embed/0TZwiUwZwIE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>


:::aufgabe Unterseekabel

Wie kommt ein Datenpaket von Biel
- in die USA?
- nach Madagaskar?

https://www.submarinecablemap.com/

<Answer type="text" id="q5"/>

:::

[^1]: Quelle: [informatik.mygymer.ch](https://informatik.mygymer.ch/g23c/008.rechnernetze-kommunikation/05.routing.html)