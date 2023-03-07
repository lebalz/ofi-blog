---
sidebar_custom_props:
  id: 10a4d276-234c-4f46-a055-d13236ffeea3
---

# 6. Netzwerkkarte

Ein Computer ohne Möglichkeiten zur Kommunikation ist nicht mehr vorstellbar. Damit ein Computer sich in ein LAN einbinden kann, benötigt er eine Netzwerkkarte – sei es eine mit Kabelanschluss oder eine drahtlose für die Teilnahme in einem WLAN.


## Kenngrössen

Für die Netzwerkkarte gibt es folgende wichtige Kenngrösse:

- Die maximale **Übertragungsrate** gibt an, wie viele Daten pro Sekunde (im Idealfall) übertragen werden können. Sie wird in der Einheit **Mbps** oder **Gbps** angegeben, was «Mega- resp. Gigabit pro Sekunde» bedeutet. Gemessen wird hier also nicht in Byte sondern in Bit, was etwas ungewöhnlich ist.

8 bit
: 1 Byte
1 Mbit/s
: 1 Megabit/s = 1 Million Bit/s
: = 125'000 Byte/s
: = 125 KByte/s (Kilobytes / s)
: = 0.125 MByte/s (Megabytes / s)



## Netzwerkkarte

Heute ist die Netzwerkkarte meist direkt auf dem Mainboard integriert und muss nicht als Steckkarte hinzugefügt werden. Allerdings kann ein Computer (insbesondere Server) so immer noch aufgerüstet und mit mehreren Netzwerkkarten ausgerüstet werden.

:::cards --columns=2
![Netzwerkkarte mit RJ45-Buchse](images/06-nic.jpg)
***
![Netzwerkkabel mit RJ45-Stecker](images/06-network-cable.jpg)
:::


## Drahtlose Netzwerkkarte

Netzwerkkarten zur Verbindung mit einem drahtlosen Netzwerk (WLAN) gibt es in etlichen Ausführungen. Einerseits kann sie in PCs und Server wie andere Steckkarten eingebaut werden, andererseits gibt es sie in kleineren Ausführungen für Notebooks oder sogar als USB-Stecker im Miniformat.

:::cards --columns=3
![Drahtlose Netzwerkkarte mit Antenne für PCs](images/06-wlan-pc.png)
***
![Drahtlose Netzwerkkarte für Notebooks](images/06-wlan-notebook.jpg)
***
![Drahtlose Netzwerkkarte für USB-Anschluss](images/06-wlan-usb.jpg)
:::

:::aufgabe Netzwerkkarte
<Answer type="state" webKey="a5301bd3-8c1e-4456-8ba9-21f420d58249" />

Sie wollen für die Ferien einige Filme von Netflix offline verfügbar machen und müssen insgesamt `10 GB` (also "Giga Bytes") Daten herunterladen. Ihr WLAN kann in ihr Zimmer maximal `150 Mbps` übertragen. Wie viel Zeit gewinnen Sie, wenn Sie aufstehen um das Gerät per Ethernet an Ihren Glasfaser-Router mit `1 Gbps` anschliessen?\*

Berechnen Sie:
- die Download Dauer per WLAN
- die Download Dauer per Ethernet
- den Zeitgewinn

<Answer type="text" webKey="f1c25b7d-6186-4cbf-9b8d-ca2728017b0c" />


*\* Die Voraussetzung für diesen Vergleich wäre natürlich, dass die Netflix-Server die Filme auch effektiv mit 1Gbps bereitstellen würden.*
:::
