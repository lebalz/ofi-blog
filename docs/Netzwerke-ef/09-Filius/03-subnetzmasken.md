---
sidebar_custom_props:
  id: 52352366-5172-4255-8af0-84d5d53f84ad
---
# IP-Adressen/Subnetzmasken

::::aufgabe[1: Adressierbare Geräte]
<Answer type="state" webKey="6b555899-4208-4bd5-ab2f-6351a4267e99" />

Als Netzwerk-Admin wollen Sie intern 11 Subnetze definieren, wobei Sie einen zugewiesenen IP-Adressbereich von `192.168.0.0/ 24` haben.

1. Wie lautet die Subnetzmaske?

:::cards{flex-basis=300px}
#### Binäre Notation
<Answer type="string" webKey="5a72e855-ac8a-4c66-8192-f30db8bf9df8" solution="11111111 11111111 11111111 11110000" sanitizer={(val) => val.replaceAll(/[^\d]/g, '')} placeholder="11111111 11111111 11111111 00000000" width="20em"/>
::br
#### Dezimale Notation
<Answer type="string" webKey="42d5e43d-7efe-49e8-a1c0-429145670f03" solution="255.255.255.240" sanitizer={(val) => val.replaceAll(/[^\d]/g, '')} placeholder="255.255.255.0" />
:::

2. Wie viele Geräte können maximal pro Subnetz angeschlossen werden?

<Answer type="text" webKey="0116a5d7-5a2b-416b-a36c-520d8ab06962" />

<Solution webKey="fcb4469c-7e4c-45d9-a8ad-37b345a178dc">

1. 11 Geräte, und somit ist die nächsthöhere Zweierpotenz $16=2^4$, es braucht also 4 bit. (3 wären zu wenig, da $2^3=8<11\leq 2^4=16$)

2. 4 bit für Geräte :mdi[arrow-right] $2^4$ Geräte abzüglich der reservierten Adressen (Netzwerkadresse und Broadcastadresse)

</Solution>

::::

::::aufgabe[2: Mögliche Subnetze]
<Answer type="state" webKey="be2aecbf-1c0a-4617-a4df-a75f9b83647e" />

Als Netzwerk-Admin wollen Sie möglichst viele Subnetze mit jeweils **15 Geräten** 
definieren, wobei Sie einen zugewiesenen IP-Adressbereich von `192.168.0.0/ 24` haben

1. Was für eine Subnetzmaske verwenden Sie?

<Answer type="text" webKey="1062ff47-9436-437e-9af3-019041677c34" />

:::cards{flex-basis=300px}
#### Binäre Notation

<Answer type="string" webKey="af3f3479-e03e-4cbf-80c7-0692c2a6fac5" solution="11111111 11111111 11111111 11100000" sanitizer={(val) => val.replaceAll(/[^\d]/g, '')} placeholder="11111111 11111111 11111111 00000000" width="20em"/>
::br

#### Dezimale Notation

<Answer type="string" webKey="7e94c98b-c945-4dce-9c3a-4a3517a79635" solution="255.255.255.224" sanitizer={(val) => val.replaceAll(/[^\d]/g, '')} placeholder="255.255.255.0" />
:::

2. Wie viele Subnetze sind maximal möglich?

<Answer type="text" webKey="ea1a5d70-3cf4-4b89-91d3-0868331629c8" />

<Solution webKey="fcb4469c-7e4c-45d9-a8ad-37b345a178dc">

1. 15 Geräte + 2 fixe Adressen = 17 Adressen im Hostteil und somit ist die nächsthöhere Zweierpotenz $32=2^5$, es braucht also 5 bit. (4 wären zu wenig, da $2^4=16<17\leq 2^5=32$)

2. 4 bit für Geräte :mdi[arrow-right] $2^4$ Geräte abzüglich der reservierten Adressen (Netzwerkadresse und Broadcastadresse)

</Solution>

::::

## Filius

:::aufgabe[Subnetze]
<Answer type="state" webKey="f5d2b03e-ebaa-44de-85af-12165a788dd6" />

Material
: Download [👉 SubnetzeNWAusgangslage.fls](assets/02-SubnetzeNWAusgangslage.fls)

Gesucht sind die Netzwerkkonfiguration für folgende Architektur, wobei Sie einen zugewiesenen IP-Adressbereich von `192.168.0.0/ 24` haben.

![](images/02-subnetze.png)

- Netzwerkmaske (bei allen Rechnern und Router-Interfaces dieselbe)
- Die Netzwerkadressen (die tiefstmögliche IP, die jedoch für das Netzwerk reserviert ist)
- Die IP-Adressen für die Router-Interfaces (erstmögliche Adresse, die an ein Gerät vergeben werden kann)
- Standardgateway

Halten Sie Ihre Überlegungen und Zuordnungen unten fest.

<Answer type="text" webKey="7cc5e5c5-8d5c-49c9-a479-fdd7010e0c4c" />
:::



