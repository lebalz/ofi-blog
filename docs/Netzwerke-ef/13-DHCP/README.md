---
label: 13. DHCP
sidebar_custom_props:
  id: 587b8f0e-153c-4741-8914-b3b4e5aa4888
---


# 13. DHCP - Dynamic Host Configuration Protocol

Die am häufigsten verwendete Art der Zuordnung von IP-Adressen an Geräte ist dynamisch, d.h. Geräte erhalten beim Start eine IP-Adresse von einem speziellen Gerät, dem DHCP-Server. Diese Funktionalität ist oft in WLAN-Router integriert. Am Endgerät muss i.d.R. nichts eingestellt werden, weil DHCP voreingestellt ist. DHCP weist zudem auch weitere Netzwerk-Einstellungen zu: Default Gateway und Nameserver.

In Netzwerken, die sich relativ selten ändern (Firmen, Banken...) kann mit statischen IP-Adressen gearbeitet werden. Das erhöht zwar den Konﬁgurationsaufwand, ermöglicht aber eine einfachere Zuordnung Datenverkehr-Gerät (z.B. für Filterung von Internetverkehr). In einem häufig ändernden Netzwerk hingegen ist es einfacher, mit dynamischen IP-Adressen zu arbeiten. Hier sollte jedoch darauf geachtet werden, dass die Server immer über eine feste IP-Adresse verfügen, damit sichergestellt ist, dass sie immer erreichbar sind. Außerdem kann ein DHCP Server sich selbst keine dynamische IP-Adresse geben.


Dienstprogramme zur Kontrolle der Netzwerkeinstellungen sind ipconfig /all (Windows) und ifconfig (Mac/Linux). Mit ping kann man einfach testen, ob eine Adresse erreicht werden kann.
