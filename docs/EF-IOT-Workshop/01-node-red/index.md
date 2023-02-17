---
sidebar_custom_props:
  id: 31488af6-ecce-4d38-9bf6-3584c02058e0
---
# Node-RED

Node-RED ist eine frei zugängliche Open Source Software (👉 [Sourcecode](https://github.com/node-red/node-red)) mit dem Fokus, **Daten (u.a. von Sensoren) und Services miteinander zu verbinden**. Das Projekt wurde 2013 von IBM gestartet und seit 2016 wird es von der OpenJS Foundation weiterentwickelt.

Node-RED bietet dabei ein übersichtliches, grafisches Benutzerinterface, mit welchem sich Datenströme auf einfache Art und Weise miteinander verknüpfen lassen.

![--width=500px](images/node-red-intro.gif)

Node
: Ein Kästchen mit einer Funktion
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

Im Zeitalter des Internet of Things (IoT), wo jedes "Thing" mit Sensoren ausgestattet und mit dem Internet verbunden ist,  lassen sich so auf eine einfache Art und Weise komplexe Datenströme verarbeiten und visualisieren.

Node-RED kann auch auf einem Computer, Laptop oder einem Raspberry Pi installiert werden, um so eine lokale Umgebung zu schaffen, in der Daten von Sensoren verarbeitet und visualisiert werden können. Sobald die erhobenen Sensordaten jedoch auch ausserhalb des eigenen Netzwerkes verfügbar sein sollen, muss eine Verbindung zum Internet hergestellt werden. Dies kann zwar über Umwege erreicht werden, jedoch mit einem bestehenden Risiko, dass ungewollte Personen Zugriff auf das Heimnetzwerk erhalten. Deshalb erstellen wir direkt in der Cloud eine Node-RED Umgebung, welche dann auch direkt übers Internet zugänglich ist.