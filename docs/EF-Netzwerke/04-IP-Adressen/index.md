---
sidebar_custom_props:
  id: 766cde00-b4eb-4f05-8267-268f79769c3b
  source:
    name: sdg
    ref: https://gitlab.gbsl.website/gymbefin23/material/-/wikis/Netzwerke/IP-Adressen
---

# 4. IP-Adressen

## Adressaufbau
IP-Adressen der Version 4 bestehen aus vier Zahlen, welche jeweils ein **Byte** gross sind. D.h. eine IP-Adresse umfasst 32 Bit. Die vier Zahlen werden in dezimaler Schreibweise, durch Punkte getrennt, geschrieben.

Beispiel:

```
131.23.10.168
```
Somit kann jede der vier Zahlen in der IP-Adresse einen Wert zwischen `0` und `255` haben.

## Netzwerkteil und Hostteil der IP-Adresse
Eigentlich verstecken sich in einer IP-Adresse zwei Teile:

Nertwerkteil
: **Vorderer** Teil der IP-Adresse.
: Er ist für alle Geräte im selben Netzwerk gleich und entspricht der **Grundadresse** von allen Geräten, welche sich in diesem Netzwerk befinden.

Hostteil
: **Hinterer** Teil der IP-Adresse.
: Er ist für jedes Gerät (auf englisch **Host** genannt) unterschiedlich. Es dürfen keine zwei Geräte im selben Netz den selben Hostteil in ihrer IP-Adresse aufweisen.

## Netzmaske
Man sieht einer IP-Adresse nicht auf den ersten Blick an, wie weit der **Netzwerkteil** reicht und wo der **Hostteil** beginnt. Um das herauszufinden muss man die IP-Adresse zuerst in Ihrer **binären** Form (also 32 Bit) aufschreiben. Ausserdem braucht man eine weitere Information, die **Netzmaske**, auch **Subnetzmaske** genannt.

Diese Netzmaske sieht zunächst wie eine IP-Adresse aus, d.h. sie besteht auch aus vier Zahlen von je einem Byte Länge. Auch sie wird dezimal geschrieben. 

Beispiel:

```
255.255.255.0
```

Ihre Besonderheit zeigt sich erst, wenn man die Zahlen in **binärer** Form aufschreibt:

```
1111'1111.1111'1111.1111'1111.0000'0000
```

In der binären Darstellung sieht man, dass die Netzmaske immer mit auf 1 gesetzten Bits beginnt. An irgendeiner Stelle wechselt sie dann auf lauter 0.

Merksatz: **Links von dieser Stelle hat es in der Netzmaske ausschliesslich 1, rechts davon hat es nur 0.**

**Wichtig:** Die Stelle, wo der Wechsel von 1 zu 0 stattfindet kann mitten in einem Byte liegen. Er muss also nicht bei einem der Punkte in der dezimalen Schreibweise liegen.

Schreibt man nun eine Netzmaske in ihrer binären Form auf und direkt darunter eine beliebige IP-Adresse, ebenfalls in binären Form, so markieren die **1** in der Netzmaske diejenigen Bits der IP-Adresse, welche den **Netzwerteil** bilden. Die **0** in der Netzmaske markieren dann den **Hostteil**. 

Beispiel:

```powershell
Netzmaske:  255.255.254.0
IP-Adresse: 13.162.25.4

Binär:
Netzmaske:    1111 1111.1111 1111.1111 1110.0000 0000
IP-Adresse:   0000 1101.1010 0010.0001 1001.0000 0100
#             vvvv vvvv vvvv vvvv vvvv vvv
Netzwerkteil: 0000 1101.1010 0010.0001 100
#                                         v vvvv vvvv
Hostteil:                                 1.0000 0100
```

Ergänzt man den Netzwerkteil mit lauter **0** zu einer vollen 32 Bit langen IP-Adresse, so erhält man die **Netzwerkadresse**.

Beispiel:

```
Netzwerkteil:                  0000'1101.1010'0010.0001'100
ergänzte Nullen:                                           0.0000.0000
resultierende Netzwerkadresse: 0000'1101.1010'0010.0001'1000.0000.0000 = 13.162.24.0
```

Die Netzwerkadresse wird gebraucht, wenn mehrere Netzwerke miteinander über **Router** verbunden werden. Sie darf **nicht** als IP-Adresse für ein einzelnes Gerät verwendet werden!

### Suffixnotation für Netzmaske
Damit man eine IP-Adresse also richtig interpretieren kann, muss man auch die Netzmaske kennen. Dies ist aber umständlich. Weil die Netzmaske aber immer mit einem **Block** von lauter 1 beginnt, reicht es zu wissen, wieviele 1 dieser Block umfasst. Diese Anzahl kann man als **Suffix** bei einer IP-Adresse anhängen.

Beispiel:

```
IP-Adresse:           13.162.25.4
Netzmaske:            255.255.254.0
Netzmaske binär:      1111'1111.1111'1111.1111'1110.0000'0000
Anzahl 1:             23
IP-Adress mit Suffix: 13.162.25.4/23
```

## Broadcastadresse
Auch bei den IP-Adressen gibt es **Broadcastadressen** (wie bei den MAC-Adressen). Sie werden gebraucht, wenn ein IP-Paket an **alle** Geräte innerhalb eines Netzwerkes gesendet werden sollen. Im Unterschied zur MAC-Adresse kann man aber auch ein IP-Paket an alle Geräte in einem **anderen** Netzwerk, als dem eigenen senden.

Die Broadcastadresse findet man indem man in einer IP-Adresse **alle Host-Bits** auf **1** setzt.

Beispiel:

```
Binär:
Netzmaske:        1111'1111.1111'1111.1111'1110.0000'0000
IP-Adresse:       0000'1101.1010'0010.0001'1001.0000'0100
                                              v vvvv vvvv
Broadcastadresse: 0000'1101.1010'0010.0001'1001.1111'1111 = 13.162.25.255
```

Auch die Broadcastadresse darf **nicht** als Adresse für ein einzelnes Gerät verwendet werden!

Neben den oben beschriebenen Broadcastadressen gibt es auch noch die Adresse `255.255.255.255`. Diese kann als Broadcastadresse im **eigenen** lokalen Netzwerk gebraucht werden.

## Spezielle IP-Adressen
### Die Adresse 127.0.0.1
Diese Adresse wird auch als **Loopback-Adresse** bezeichnet und kann genutzt werden, wenn ein Gerät ein IP-Paket an **sich selber** senden will. Die Adresse ist Teil des Netzwerkes mit der Adresse `127.0.0.0/8`. Darin wären eigentlich 2<sup>24</sup> Hostadressen verfügbar. In der Regel wird aber nur `127.0.0.1` verwendet.

### Die Adresse 0.0.0.0
Diese IP-Adresse wird als **Platzhalter** verwendet. Je nach Gerät bedeutet sie "ich habe noch gar keine gültige IP-Adresse", oder sie steht für "eine beliebige IP-Adresse", oder sie steht für "das aktuelle Netzwerk".

### Multicast-Adressen
Der Adressebereich `224.0.0.0 bis 239.255.255.255` ist für das **IP-Multicasting** reserviert. Diese Adressen werden eingesetzt, um Pakete in einem LAN nicht nur an einen bestimmten Empfänger, sondern **gleichzeitig an mehrere** (aber nicht alle) Empfänger zu senden. Das wird beispielsweise für **Streaming**- und **Gaming**-Anwendungen gebraucht.

### Private Netzwerke
IP-Adresse im Internet müssen weltweit **eindeutig** sein. Das heisst, es darf nicht sein, dass zwei Geräte die gleiche IP-Adresse haben. Wenn das der Fall wäre könnten IP-Pakete nicht mehr richtig zugestellt werden.

Solange man sich aber in einem **privaten** Netzwerk, z.B. einem Heimnetzwerk oder einem Firmennetzwerk, bewegt, würde es reichen, wenn die verwendeten IP-Adresse einfach in diesem Netzwerk eindeutig sind. In einem anderen privaten Netzwerk könnten die selben IP-Adressen verwendet werden, solange die Netzwerke voneinander isoliert sind.

Zu diesem Zweck sind einige Adressbereiche für die Bildung von privaten Netzwerken **reserviert**:
- `10.0.0.0 bis 10.255.255.255`
- `172.16.0.0 bis 172.31.255.255`
- `192.168.0.0 bis 172.168.255.255`

Alle anderen IP-Adressen sind öffentliche Adressen.

#### Network Address Translation (NAT)
Wie kann man nun private Netzwerke, welche potentiell die gleichen IP-Adressen verwenden trotzdem mit dem Internet verbinden?

Dazu braucht man einen Router, der in der Lage ist die netzwerkinternen privaten IP-Adressen auf eine öffentliche IP-Adresse **abzubilden** und umgekehrt.

Man kann sich das so vorstellen, dass IP-Pakete, welche das private Netzwerk verlassen mit einer neuen öffentlichen IP-Adresse versehen und durch das Internet geleitet werden. Umgekehrt erhalten Pakete aus dem Internet für den Weitertransport im privaten Netzwerk eine private IP-Adresse.

Diese **Übersetzung** von IP-Adressen wird **Network Address Translation** genannt und ist in allen Routern für Heimnetzwerke eingebaut.
