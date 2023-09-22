# Datenbanken
## Normalformen


## NF 0
Nullte Normalform
- Keine Anforderungen an die Struktur der Daten


## NF 1
Erste Normalform
- Jede Spalte enthält nur atomare Werte


## NF 2
Zweite Normalform
- *Erfüllt NF 1*
- Jede Spalte ist voll funktional abhängig vom Primärschlüssel
- *also*: jede Spalte von der Tabelle ist vom **ganzen Primärschlüssel** abhängig, nicht nur von einem Teil davon.


## NF 3
Dritte Normalform
- *Erfüllt NF 2 (und somit auch NF 1)*
- Keine funktionalen Abhängigkeiten zwischen Nichtschlüsselattributen
- *also*: es darf keine Spalte von einer anderen Spalte abhängen, die nicht Teil des Primärschlüssels ist.



## Aufgabe 2

Eine Carsharing-Firma speichert ihre Fahrzeuge und Kunden in einer Tabelle mit dem 
Schema: 

**Carsharing** (<u>Kunden Nr</u>, Name, Tel, <u>Ausleihdatum</u>, <u>Kennzeichen</u>, Hersteller, km-Stand, Baujahr)


1. 3 Datensätze

| <u>Kunden Nr</u> | Name          | Tel         | <u>Ausleihdatum</u> | <u>Kennzeichen</u> | Hersteller | km-Stand | Baujahr |
|:-----------------|:--------------|:------------|:--------------------|:-------------------|:-----------|:---------|:--------|
| 001              | Maria Schmidt | 01234-56789 | 2023-09-14          | AB-12345           | Volkswagen | 25000    | 2018    |
| 002              | Thomas Müller | 09876-54321 | 2023-09-15          | CD-67890           | BMW        | 32000    | 2019    |
| 001              | Maria Schmidt | 01234-56789 | 2023-09-16          | CD-67890           | BMW        | 32100    | 2019    |


2. Anomalien
   1. Wird eine Fahrt gelöscht (bspw. die erste), so wird gleichzeitig auch das Fahrzeug und der Kunde gelöscht.
   2. Nur wenn ein Kunde ein Fahrzeug ausleiht, kann er in der Tabelle gespeichert werden.


3. Funktionale Abhängigkeiten:
   1. (KundenNr) → Name, Tel
   2. (Ausleihdatum, Kennzeichen) → Hersteller, km-Stand, Baujahr 


4. Aktuell: NF 0, Ziel: NF 2


#### NF 1

| <u>Kunden Nr</u> | Vorname | Name    | Tel         | <u>Ausleihdatum</u> | <u>Kennzeichen</u> | Hersteller | km-Stand | Baujahr |
|:-----------------|:--------|:--------|:------------|:--------------------|:-------------------|:-----------|:---------|:--------|
| 001              | Maria   | Schmidt | 01234-56789 | 2023-09-14          | AB-12345           | Volkswagen | 25000    | 2018    |
| 002              | Thomas  | Müller  | 09876-54321 | 2023-09-15          | CD-67890           | BMW        | 32000    | 2019    |
| 001              | Maria   | Schmidt | 01234-56789 | 2023-09-16          | CD-67890           | BMW        | 32100    | 2019    |


#### NF 2

__Kunden__

| <u>Kunden Nr</u> | Vorname | Name    | Tel         | AusleihNr |
|:-----------------|:--------|:--------|:------------|:----------|
| 001              | Maria   | Schmidt | 01234-56789 | 1         |
| 002              | Thomas  | Müller  | 09876-54321 | 2         |
| 001              | Maria   | Schmidt | 01234-56789 | 3         |

__Ausleihen__

| <u>Nr</u> | Ausleihdatum | km-Stand | Kennzeichen | Hersteller | Baujahr |
|:----------|:-------------|:---------|:------------|:-----------|:--------|
| 1         | 2023-09-14   | 25000    | AB-12345    | Volkswagen | 2018    |
| 2         | 2023-09-15   | 32000    | CD-67890    | BMW        | 2019    |
| 3         | 2023-09-16   | 32100    | CD-67890    | BMW        | 2019    |



## Aufgabe 3

1. Erläutern Sie anhand der Tabelle «Universität» unten, welche Daten redundant gespeichert werden. 
2. Geben Sie alle transitiven Abhängigkeiten an. 
3. Überführen Sie die Tabelle «Universität» in die dritte Normalform. 

| <u>Mitarbeiter ID</u> | Name       | Fachgebiet                         | Institut     |
|:----------------------|:-----------|:-----------------------------------|:-------------|
| 123                   | Engels     | Datenbank- und Informationssysteme | Informatik   |
| 128                   | Blömer     | Codes und Kryptographie            | Informatik   |
| 115                   | Dietz      | Stochastik                         | Mathematik   |
| 234                   | Engels     | Angewandte Mechanik                | Maschinenbau |
| 332                   | Sauer      | Datenbank- und Informationssysteme | Informatik   |
| 443                   | Soltenborn | Datenbank- und Informationssysteme | Informatik   |


1. Redundante Daten:
   - Fachgebiet
   - Institut


2. Transitiven Abhängigkeiten (Abhängigkeiten zwischen Nichtschlüsselattributen):
   - (Fachgebiet) → Institut

| <u>Mitarbeiter ID</u> | Name       | Fachgebiet                         | Institut     |
|:----------------------|:-----------|:-----------------------------------|:-------------|
| 123                   | Engels     | Datenbank- und Informationssysteme | Informatik   |
| 128                   | Blömer     | Codes und Kryptographie            | Informatik   |
| 115                   | Dietz      | Stochastik                         | Mathematik   |
| 234                   | Engels     | Angewandte Mechanik                | Maschinenbau |
| 332                   | Sauer      | Datenbank- und Informationssysteme | Informatik   |
| 443                   | Soltenborn | Datenbank- und Informationssysteme | Informatik   |


#### 3. NF

__Mitarbeitende__

| <u>Mitarbeiter ID</u> | Name       | Fachgebiet ID |
|:----------------------|:-----------|:--------------|
| 123                   | Engels     | 1             |
| 128                   | Blömer     | 2             |
| 115                   | Dietz      | 2             |
| 234                   | Engels     | 3             |
| 332                   | Sauer      | 1             |
| 443                   | Soltenborn | 1             |

__Fachgebiete__

| <u>Id</u> | Fachgebiet                         | Institut     |
|:----------|:-----------------------------------|:-------------|
| 1         | Datenbank- und Informationssysteme | Informatik   |
| 2         | Codes und Kryptographie            | Informatik   |
| 3         | Stochastik                         | Mathematik   |
| 4         | Angewandte Mechanik                | Maschinenbau |



## Aufgabe 4 Onlineshop

Überführen Sie die Tabelle «Onlineshop» unten schrittweise in die dritte Normalform, d.h. 
zunächst in die 1 NF, 2NF und dann in die 3NF. Erläutern Sie bei jedem Schritt welche Bedingungen für die einzelnen Normalformen verletzt werden.

| <u>Benutzername</u> | Adresse            | <u>WarenkorbId</u> | Datum    | ArtikelNr                   | Bezeichnung                  | Menge           | Preis                      |
|:--------------------|:-------------------|:--------------------|:---------|:----------------------------|:-----------------------------|:----------------|:---------------------------|
| pink18              | Rotweg 2, Köln     | 456                 | 06.02.19 | 10078<br />22900            | Rock<br />Top                | 1<br />2        | 19.95<br />14.95           |
| blue28              | Lichtstr. 44, Bonn | 776                 | 22.03.19 | 10088<br />10098<br />10099 | Uhr<br />Armband<br />Socken | 1<br />1<br />5 | 89.90<br />12.95<br />4.45 |


### NF 0

| <u>Benutzername</u> | Adresse            | <u>WarenkorbId</u> | Datum    | ArtikelNr                   | Bezeichnung                  | Menge           | Preis                      |
|:--------------------|:-------------------|:--------------------|:---------|:----------------------------|:-----------------------------|:----------------|:---------------------------|
| pink18              | Rotweg 2, Köln     | 456                 | 06.02.19 | 10078<br />22900            | Rock<br />Top                | 1<br />2        | 19.95<br />14.95           |
| blue28              | Lichtstr. 44, Bonn | 776                 | 22.03.19 | 10088<br />10098<br />10099 | Uhr<br />Armband<br />Socken | 1<br />1<br />5 | 89.90<br />12.95<br />4.45 |

- Nicht nach Ort sortierbar
- Nicht nach ArtikelNr, Bezeichnung, Menge und Preis sortierbar
- Nicht nach Menge oder Preis einzelner Artikel filterbar


### NF 1

| <u>Benutzername</u> | Strasse   | Nr | Stadt | <u>WarenkorbId</u> | Datum    | <u>ArtikelNr</u> | Bezeichnung | Menge | Preis |
|:--------------------|:----------|:---|:------|:--------------------|:---------|:-----------------|:------------|:------|:------|
| pink18              | Rotweg    | 2  | Köln  | 456                 | 06.02.19 | 10078            | Rock        | 1     | 19.95 |
| pink18              | Rotweg    | 2  | Köln  | 456                 | 06.02.19 | 22900            | Top         | 2     | 14.95 |
| blue28              | Lichtstr. | 44 | Bonn  | 776                 | 22.03.19 | 10088            | Uhr         | 1     | 89.90 |
| blue28              | Lichtstr. | 44 | Bonn  | 776                 | 22.03.19 | 10098            | Armband     | 1     | 12.95 |
| blue28              | Lichtstr. | 44 | Bonn  | 776                 | 22.03.19 | 10099            | Socken      | 5     | 4.45  |

!! **Der Primärschlüssel muss weiterhin eindeutig jeden Datensatz identifizieren können. Deshalb wird zusätzlich die ArtikelNr zum Primärschlüssel hinzugefügt.**


- Redundante Daten: Strasse, Nr, Stadt, Datum, (Preis)
- Funktionale Abhängigkeiten (von Primärschlüssel Attributen): 
  - (Benutzername) → Strasse, Nr, Stadt
  - (WarenkorbId, ArtikelNr) → Menge
  - (WarenkorbId) → Datum, Benuztername\*
  - (ArtikelNr) → Bezeichnung, Preis

| <u>Benutzername</u> | Strasse   | Nr | Stadt | <u>WarenkorbId</u> | Datum    | <u>ArtikelNr</u> | Bezeichnung | Menge | Preis |
|:--------------------|:----------|:---|:------|:--------------------|:---------|:-----------------|:------------|:------|:------|
| pink18              | Rotweg    | 2  | Köln  | 456                 | 06.02.19 | 10078            | Rock        | 1     | 19.95 |
| pink18              | Rotweg    | 2  | Köln  | 456                 | 06.02.19 | 22900            | Top         | 2     | 14.95 |
| blue28              | Lichtstr. | 44 | Bonn  | 776                 | 22.03.19 | 10088            | Uhr         | 1     | 89.90 |
| blue28              | Lichtstr. | 44 | Bonn  | 776                 | 22.03.19 | 10098            | Armband     | 1     | 12.95 |
| blue28              | Lichtstr. | 44 | Bonn  | 776                 | 22.03.19 | 10099            | Socken      | 5     | 4.45  |

Note:
Der Benutzername ist abhängig von der WarenkorbId, da ein Warenkorb nur einer Benutzer:in zugeordnet werden kann. Umgekehrt ist die WarenkorbId aber nicht vom Benutzername abhängig (abzulesen), da eine Benutzer:in mehrere Warenkörbe haben kann. Dies sieht man leicht, wenn man einen weiteren Einkauf für `pink18` hinzufügt - die WarenkorbId ändert sich, der Benutzername nicht.

### NF 2
<div style="display: flex; flex-wrap: wrap; gap: 1.5em;">

<div>

__User__

| <u>Benutzername</u> | Strasse   | Nr | Stadt |
|:--------------------|:----------|:---|:------|
| pink18              | Rotweg    | 2  | Köln  |
| blue28              | Lichtstr. | 44 | Bonn  |

</div>
<div>

__Warenkörbe__

| <u>WarenkorbId</u> | Benutzername | Datum    |
|:-------------------|:-------------|:---------|
| 456                | pink18       | 06.02.19 |
| 776                | blue28       | 22.03.19 |

</div>
<div>

__Einkäufe__

| <u>WarenkorbId</u> | <u>ArtikelNr</u> | Menge |
|:-------------------|:-----------------|:------|
| 456                | 10078            | 1     |
| 456                | 22900            | 2     |
| 776                | 10088            | 1     |
| 776                | 10098            | 1     |
| 776                | 10099            | 5     |

</div>
<div>

__Artikel__

| <u>ArtikelNr</u> | Bezeichnung | Preis |
|:-----------------|:------------|:------|
| 10078            | Rock        | 19.95 |
| 22900            | Top         | 14.95 |
| 10088            | Uhr         | 89.90 |
| 10098            | Armband     | 12.95 |
| 10099            | Socken      | 4.45  |

</div>
</div>


### NF 3

Innerhalb der Nichtschlüsselattribute gibt es keine funktionalen Abhängigkeiten mehr. Die Tabellen sind also bereits in der dritten Normalform.