---
title: IP-Adresse
---

import Answer from "@site/src/components/Answer";
import TabItem from '@theme/TabItem';
import OsTabs from '@site/src/components/OsTabs';

# IP-Adresse [^1]

Wie Pakete eine Postadresse haben, brauchen auch Datenpakete eine Adresse, damit sie korrekt zugestellt werden können. Diese Adressen nennt man **IP-Adressen**, wobei IP für *Internet Protocol* steht.

# Aufbau
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


# meine IP
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

# IP-Adresse
Normalerweise erhält jedes Gerät beim Beitritt zu einem Rechnernetz eine IP-Adresse zugewiesen. Die Adresse gehört zum entsprechenden Netz und erlaubt die Kommunikation mit allen Geräten die sich ebenfalls im selben Netz befinden. Deshalb erhält Ihr Gerät hier am GBSL eine andere Adresse als bei Ihnen zu Hause.

:::info

Ihre Persönlichkeit ändern Sie bei einem Umzug nicht, Ihre Wohnadresse aber schon. Gleiches gilt für die MAC-Adresse und IP-Adresse eines Geräts: Die MAC-Adresse bleibt gleich, die im Netzwerk sichtbare IP-Adresse ändert jedoch.
:::

## Standardgateway
Für die Kommunikation mit Geräten ausserhalb des eigenen Netzwerks müssen die Internetpakete zum nächsten Verteilzentrum geschickt werden. Dies ist vergleichbar mit dem Verlassen des eigenen Hauses: Nehmen Sie die richtige Abzweigung und gelangen dadurch auf die Hauptstrasse, so sind Sie mit dem ganzen Strassen-Netz Ihrer Gemeinde verbunden. Dieser Weg wird bei Netzwerken **Standardgateway** genannt.


<OsTabs>
<TabItem value="win">

```.sh title="In der Kommandozeile (cmd) eingeben"
ipconfig
```
</TabItem>
<TabItem value="mac">

```.sh title="In der Koommandozeile (terminal) eingeben"
netstat -nr
```

![](images/netstat.png)

</TabItem>
</OsTabs>

:::info
Zu Hause haben Sie als Standardgateway die IP-Adresse Ihres Routers/Modems eingetragen – also dem Gerät, dass Sie von Ihrem Internet-Anbieter erhalten, um Zugang zum Internet zu erhalten.
:::

:::aufgabe
Gehen Sie auf die Webseite https://whatsmyip.org/. Was wird angezeigt?

<Answer type="text" id="q3"/>

<details><summary>Lösung</summary>

Bei der angezeigten Adresse handelt es sich um die IP-Adresse, welche im Internet sichtbar ist. Ihr Gerät befindet sich meist nicht direkt im Internet, sondern ist über den Router damit verbunden. Sie sehen hier also die externe IP-Adresse Ihres Routers/Modems.

(Router oder Hotspots haben immer mindestens zwei IP-Adressen, weil sie zwei Netze miteinander verbinden und deshalb in beiden Netzen eine IP-Adresse brauchen.)

</details>
:::


## Ping
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


[^1]: Quelle [informatik.mygymer.ch](https://informatik.mygymer.ch/g23c/008.rechnernetze-kommunikation/03.ip-adresse.html)