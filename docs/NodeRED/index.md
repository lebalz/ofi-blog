---
sidebar_custom_props:
  id: ad9f828b-208c-4831-ab48-03cc9302d721
---
# Node-RED

Node-RED ist eine frei zugängliche Open Source Software (👉 [Sourcecode](https://github.com/node-red/node-red)) mit dem Fokus, **Daten (u.a. von Sensoren) und Services miteinander zu verbinden**. Das Projekt wurde 2013 von IBM gestartet und seit 2016 wird es von der OpenJS Foundation weiterentwickelt.

Node-RED bietet dabei ein übersichtliches, grafisches Benutzerinterface, mit welchem sich Datenströme auf einfache Art und Weise miteinander verknüpfen lassen.

![--width=500px](images/node-red-intro.gif)

Node
: Ein Kästchen Kästchen
Verbindung
: Verbindet zwei Nodes miteinander
Flow
: Alle Nodes die (auch indirekt) miteinander verbunden sind

Jede Node kann ein, zwei oder drei Funktionalitäten zur Verfügung stellen:

Input
: Sobald eine Nachricht über die Verbindung eintrifft, wird die Node ausgeführt
Verarbeitung
: Der Inhalt der empfangenen Nachricht verarbeiten, anzeigen, speichern, ... 
Output
: Eine neue Nachricht kann an alle verbundenen Nodes weitergegeben werden.

Im Zeitalter des Internet of Things (IoT), wo jedes "Thing" mit Sensoren ausgestattet und mit dem Internet verbunden ist,  kann, sind so 
