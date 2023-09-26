# Datenbanken
## ER Diagramme



### 1. Weiterbildungs-Organsiation

Eine Weiterbildungs-Organisation besitzt Dozenten und Vorlesungen
- Dozenten halten Vorlesungen
- In jeder Vorlesung ist genau eine Dozent:in anwesend
- Dozenten haben Name und Telefonnummer
- Vorlesungen haben eine Nummer (z.B. `20727`) und einen Titel.

1. Zeichnen Sie das ER-Diagramm
2. Bestimmen Sie die Kardinalität


### 1. Weiterbildungs-Organsiation

![](images/01-dozenten-vorlesungen.png)



### 2 Schüler:innen und Aufgaben

Ausgangslage: SchülerInnen lösen mehrere Aufgaben. Jede Aufgabe hat eine Nummer und eine maximal mögliche Punktezahl. Jede gelöste Aufgabe wird korrigiert und mit Punkten bewertet (von wem spielt hier keine Rolle).
- Erstellen Sie das ER-Diagramm
- Bestimmen Sie die Kardinalität
- Fügen Sie jeweils 3 sinnvolle Attribute pro Entitäts-Typ hinzu


### 2 Schüler:innen und Aufgaben

![](images/02-schueler-aufgabe.png)



### 3. Klinik
Gegeben sei das folgende ER-Diagramm, welches einen Ausschnitt eines Krankenhauses modellieren soll:

![](images/03-klinik.png)

Eine Klinik besteht aus Stationen, eine Station hat mehrere Zimmer. Patienten werden ambulant oder stationär behandelt. Die Zimmer sind entweder Ein- oder Drei-Bett-Zimmer. Stationsmitarbeiter:innen arbeiten in ein- bis zwei Stationen. In einem Zimmer dürfen entweder nur Frauen oder nur Männer untergebracht werden.

Note:
- Überlegen Sie sich zu jedem Entity-Typ sinnvolle Attribute.
- Bestimmen Sie für jeden Entity-Typ den Primärschlüssel.
- Bestimme Sie die Kardinalität für alle Relationen.


### 3. Klinik

![](images/03-klinik.png)



### 4. Person-AHV Nummer

1. Bestimmen Sie die Kardinalität und fügen Sie der Person zwei weitere Attribute hinzu.
2. Überführen Sie das ERD in ein relationales Schema (=Tabellenform).
3. Fügen Sie der Tabelle zwei Personen mit ihren AHV Nummern hinzu (erfundene Daten sind erlaubt).

![](images/04-person-ahv.png)


### 4. Person-AHV Nummer

![](images/04-person-ahv-lsg.png)

<div style="display: flex; flex-wrap: wrap; gap: 1.5em;">

<div>

__Personen__

| Name     | Vorname | Geburtsdatum | AHV_ID |
|:---------|:--------|:-------------|:-------|
| Meier    | Alfred  | 2006-01-11   | 1      |
| Mosimann | Maria   | 2000-05-13   | 2      |

</div>
<div>

__AHV Nummern__

| id | AHV Nr | Zufallszahl | Prüfziffer |
|:---|:-------|:------------|:-----------|
| 1  | 756    | 12345678    | 90         |
| 2  | 756    | 12345669    | 31         |

</div>
</div>



### 5. Schülerprojekte

1. Bestimmen Sie die Kardinalität.
2. Überführen Sie das ERD in ein relationales Schema (=Tabellenform).
3. Fügen Sie der Tabelle zwei Schüler:innen hinzu, welche an einem gemeinsamen und jeweils an einem eigenen Projekt arbeiten.

![](images/06-schueler-projekte.png)


### 5. Schülerprojekte

![](images/06-schueler-projekte-lsg.png)

<div style="display: flex; gap: 1em;margin-left:-2em">

<div>

__Schüler:innen__

| id | Name     | Vorname |
|:---|:---------|:--------|
| 1  | Meier    | Alfred  |
| 2  | Mosimann | Maria   |
</div>
<div>

__Schüler_Projekte__

| schüler_id | projekt_id |
|:-----------|:-----------|
| 1          | 1          |
| 1          | 2          |
| 2          | 1          |
| 2          | 3          |
</div>
<div>

__Projekte__

| id | Fach       | Zeitraum              | Thema             |
|:---|:-----------|:----------------------|:------------------|
| 1  | Informatik | Sep. 2023        | Datenbanken       |
| 2  | Deutsch    | Aug.-Sep. 2023 | Lektüre           |
| 3  | Physik     | Sep. 2023        | Praktikumsbericht |
</div>
</div>