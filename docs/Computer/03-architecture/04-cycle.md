---
title: 4. Von-Neumann-Zyklus
---

# 4. Von-Neumann-Zyklus

Der Prozessor führt immer wieder den gleichen zyklischen Ablauf aus. Dieser Ablauf wird auch **Von-Neumann-Zyklus** genannt und besteht aus folgenden Schritten:

![](images/04-cycle.svg)

## 1. Befehl laden

Der nächste Befehl wird aus dem Speicher in das Befehlsregister geladen. Dazu wird die Adresse des nächsten Befehls vom Programmzähler an das Speicherwerk übertragen. Der Befehl wird aus dem Speicher über den Datenbus in das Befehlsregister übertragen. Anschliessend wird der Programmzähler um eins erhöht.

![](images/04-fetch.svg)

## 2. Befehl decodieren

Nun wird der Befehl, welcher in das Befehlsregister geladen worden ist, decodiert. Das bedeutet, dass das Dekodierwerk die Aktionen, welche für diesen Befehl ausgeführt werden müssen, in Steuersignale an die verschiedenen Komponenten übersetzt.

![](images/04-decode.svg)

## 3. Befehl ausführen

Schliesslich wird der eigentliche Befehl ausgeführt, indem das Dekodierwerk die Steuersignale an die Komponenten auslöst. Im nächsten Abschnitt werden einige typische Befehle erläutert.
