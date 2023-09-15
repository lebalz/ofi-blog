---
sidebar_custom_props:
  id: 7cc352e6-6d8f-4ba5-b38a-da10d42cb805
---
# Normalformen


NF 0
: Nullte Normalform
: Keine Anforderungen an die Struktur der Daten

NF 1
: Erste Normalform
: Jede Spalte enthält nur atomare Werte

NF 2
: Zweite Normalform
: *Erfüllt NF 1*
: Jede Spalte ist voll funktional abhängig vom Primärschlüssel

NF 3
: Dritte Normalform
: *Erfüllt NF 2 (und somit auch NF 1)*
: Jede Spalte ist nicht transitiv abhängig vom Primärschlüssel

Theorie
: [👉 Buch S. 258-261](https://erzbe.sharepoint.com/:b:/s/24EFInformatik/EWseDuaUYBtOu0I9XIjEzCkBHvd1eNeknJg9kCY8FAe2xQ?e=4yEofE)

:::aufgabe Zweite Normalform 
<Answer type="state" webKey="494746b2-aa20-4114-86bb-cff0419a9876" />

Eine Carsharing-Firma speichert ihre Fahrzeuge und Kunden in einer Tabelle mit dem 
Schema: 

**Carsharing** (<u>Kunden Nr</u>, Name, Tel, <u>Ausleihdatum</u>, <u>Kennzeichen</u>, Hersteller, km-Stand, Baujahr)

1. Geben Sie drei Beispieldatensätze für die Tabelle Carsharing an.
2. Erläutern Sie anhand von Beispielen, welche Anomalien bei dieser Art der Speicherung auftreten können. 
3. Geben Sie alle funktionalen sowie vollen funktionalen Abhängigkeiten an. 
4. Überführen Sie das Schema in die zweite Normalform

<Answer type="text" webKey="77a707d6-61d4-4464-8501-3f0782e106e5" />

<Solution webKey="79f42759-ebba-47dd-a200-609c8386c988" className="slim compact left">


| <u>Kunden Nr</u> | Name          | Tel         | <u>Ausleihdatum</u> | <u>Kennzeichen</u> | Hersteller | km-Stand | Baujahr |
|:-----------------|:--------------|:------------|:--------------------|:-------------------|:-----------|:---------|:--------|
| 001              | Maria Schmidt | 01234-56789 | 2023-09-14          | AB-12345           | Volkswagen | 25000    | 2018    |
| 002              | Thomas Müller | 09876-54321 | 2023-09-15          | CD-67890           | BMW        | 32000    | 2019    |
| 001              | Maria Schmidt | 01234-56789 | 2023-09-16          | CD-67890           | BMW        | 32100    | 2019    |

1. Anomalien:
   1. Wird eine Fahrt gelöscht (bspw. die erste), so wird gleichzeitig auch das Fahrzeug und der Kunde gelöscht.
   2. Nur wenn ein Kunde ein Fahrzeug ausleiht, kann er in der Tabelle gespeichert werden.
2. Funktionale Abhängigkeiten:
   1. (Kunden Nr, Ausleihdatum, Kennzeichen) → Name, Tel, Hersteller, km-Stand, Baujahr
   2. (Ausleihdatum, Kennzeichnung) → Hersteller, km-Stand, Baujahr (voll funktional abhängig)
   3. (Kunden Nr) → Name, Tel
3. NF 2


| <u>Kunden Nr</u> | Vorname | Name    | Tel         | <u>Ausleihdatum</u> | km-Stand | Kennzeichen | Auto Nr |
|:-----------------|:--------|:--------|:------------|:--------------------|:---------|:------------|:--------|
| 001              | Maria   | Schmidt | 01234-56789 | 2023-09-14          | 35000    | AB-12345    | 1       |
| 002              | Thomas  | Müller  | 09876-54321 | 2023-09-15          | 32000    | CD-67890    | 2       |
| 001              | Maria   | Schmidt | 01234-56789 | 2023-09-16          | 32100    | CD-67890    | 2       |


| <u>Auto Nr</u> | Hersteller | Baujahr |
|:--------|:-----------|:--------|
| 1       | Volkswagen | 2018    |
| 2       | BMW        | 2019    |

</Solution>
:::


:::aufgabe Dritte Normalform
<Answer type="state" webKey="87b00e59-6085-4d1e-b74d-ff96192bd55a" />

1. Erläutern Sie anhand der Tabelle «Universität» unten, welche Daten redundant gespeichert werden. 
2. Geben Sie alle transitiven Abhängigkeiten an. 
3. Überführen Sie die Tabelle «Universität» in die dritte Normalform. 

<div className="slim compact">

| <u>Mitarbeiter ID</u> | Name       | Fachgebiet                         | Institut     |
|:----------------------|:-----------|:-----------------------------------|:-------------|
| 123                   | Engels     | Datenbank- und Informationssysteme | Informatik   |
| 128                   | Blömer     | Codes und Kryptographie            | Informatik   |
| 115                   | Dietz      | Stochastik                         | Mathematik   |
| 234                   | Engels     | Angewandte Mechanik                | Maschinenbau |
| 332                   | Sauer      | Datenbank- und Informationssysteme | Informatik   |
| 443                   | Soltenborn | Datenbank- und Informationssysteme | Informatik   |

</div>
<Answer type="text" webKey="3cad3bf5-2f19-47d3-b449-3290f95290b6" />

<Solution webKey="92923d23-b208-4bf6-b798-bf4051d82927" className="slim compact left">

| <u>Mitarbeiter ID</u> | Name       | Fachgebiet ID |
|:----------------------|:-----------|:--------------|
| 123                   | Engels     | 1             |
| 128                   | Blömer     | 2             |
| 115                   | Dietz      | 2             |
| 234                   | Engels     | 3             |
| 332                   | Sauer      | 1             |
| 443                   | Soltenborn | 1             |


| <u>Id</u> | Fachgebiet                         | Institut     |
|:----------|:-----------------------------------|:-------------|
| 1         | Datenbank- und Informationssysteme | Informatik   |
| 2         | Codes und Kryptographie            | Informatik   |
| 3         | Stochastik                         | Mathematik   |
| 4         | Angewandte Mechanik                | Maschinenbau |

</Solution>
:::


:::aufgabe Onlineshop
<Answer type="state" webKey="2451a205-e8e4-41ca-b99c-f19a7ff3d66c" />

Überführen Sie die Tabelle «Onlineshop» unten schrittweise in die dritte Normalform, d. h. 
zunächst in die 1 NF, dann in die 2NF. Erläutern Sie bei jedem Schritt. welche Bedingungen für die einzelnen Normalformen verletzt werden. 

<div className="slim compact">

| Benutzername | Adresse            | Warenkorb ID | Datum    | ArtikelNr                   | Bezeichnung                  | Menge           | Preis                      |
|:-------------|:-------------------|:-------------|:---------|:----------------------------|:-----------------------------|:----------------|:---------------------------|
| pink18       | Rotweg 2, Köln     | 456          | 06.02.19 | 10078<br />22900            | Rock<br />Top                | 1<br />2        | 19.95<br />14.95           |
| blue28       | Lichtstr. 44, Bonn | 776          | 22.03.19 | 10088<br />10098<br />10099 | Uhr<br />Armband<br />Socken | 1<br />1<br />5 | 89.90<br />12.95<br />4.45 |

</div>

<Answer type="text" webKey="40421b01-867d-4da2-b283-6a7d18032d05" />

<Solution webKey="1e125672-bd7e-40a9-9a9a-8c6a1c5eecf0" className="slim compact left">

### NF 0

| Benutzername | Adresse            | Warenkorb ID | Datum    | ArtikelNr                   | Bezeichnung                  | Menge           | Preis                      |
|:-------------|:-------------------|:-------------|:---------|:----------------------------|:-----------------------------|:----------------|:---------------------------|
| pink18       | Rotweg 2, Köln     | 456          | 06.02.19 | 10078<br />22900            | Rock<br />Top                | 1<br />2        | 19.95<br />14.95           |
| blue28       | Lichtstr. 44, Bonn | 776          | 22.03.19 | 10088<br />10098<br />10099 | Uhr<br />Armband<br />Socken | 1<br />1<br />5 | 89.90<br />12.95<br />4.45 |

### NF 1

| <u>Benutzername</u> | Strasse   | Nr | Stadt | <u>Warenkorb ID</u> | Datum    | <u>ArtikelNr</u> | Bezeichnung | Menge | Preis |
|:--------------------|:----------|:---|:------|:--------------------|:---------|:-----------------|:------------|:------|:------|
| pink18              | Rotweg    | 2  | Köln  | 456                 | 06.02.19 | 10078            | Rock        | 1     | 19.95 |
| pink18              | Rotweg    | 2  | Köln  | 456                 | 06.02.19 | 22900            | Top         | 2     | 14.95 |
| blue28              | Lichtstr. | 44 | Bonn  | 776                 | 22.03.19 | 10088            | Uhr         | 1     | 89.90 |
| blue28              | Lichtstr. | 44 | Bonn  | 776                 | 22.03.19 | 10098            | Armband     | 1     | 12.95 |
| blue28              | Lichtstr. | 44 | Bonn  | 776                 | 22.03.19 | 10099            | Socken      | 5     | 4.45  |

### NF 2
__User__

| <u>Benutzername</u> | Strasse   | Nr | Stadt |
|:--------------------|:----------|:---|:------|
| pink18              | Rotweg    | 2  | Köln  |
| blue28              | Lichtstr. | 44 | Bonn  |

__User Einkäufe__

| <u>Benutzername</u> | <u>Warenkorb ID</u> | Datum    |
|:--------------------|:--------------------|:---------|
| pink18              | 456                 | 06.02.19 |
| blue28              | 776                 | 22.03.19 |

__Einkäufe__

| <u>Warenkorb ID</u> | <u>ArtikelNr</u> | Bezeichnung | Menge | Preis |
|:--------------------|:-----------------|:------------|:------|:------|
| 456                 | 10078            | Rock        | 1     | 19.95 |
| 456                 | 22900            | Top         | 2     | 14.95 |
| 776                 | 10088            | Uhr         | 1     | 89.90 |
| 776                 | 10098            | Armband     | 1     | 12.95 |
| 776                 | 10099            | Socken      | 5     | 4.45  |

### NF 3

__User__

| <u>Benutzername</u> | Strasse   | Nr | Stadt |
|:--------------------|:----------|:---|:------|
| pink18              | Rotweg    | 2  | Köln  |
| blue28              | Lichtstr. | 44 | Bonn  |

__User Einkäufe__

| <u>Benutzername</u> | <u>Warenkorb ID</u> | Datum    |
|:--------------------|:--------------------|:---------|
| pink18              | 456                 | 06.02.19 |
| blue28              | 776                 | 22.03.19 |

__Einkäufe__

| <u>Warenkorb ID</u> | <u>ArtikelNr</u> | Menge |
|:--------------------|:-----------------|:------|
| 456                 | 10078            | 1     |
| 456                 | 22900            | 2     |
| 776                 | 10088            | 1     |
| 776                 | 10098            | 1     |
| 776                 | 10099            | 5     |

__Artikel__

| <u>ArtikelNr</u> | Bezeichnung | Preis |
|:----------|:------------|:------|
| 10078     | Rock        | 19.95 |
| 22900     | Top         | 14.95 |
| 10088     | Uhr         | 89.90 |
| 10098     | Armband     | 12.95 |
| 10099     | Socken      | 4.45  |

</Solution>
:::
