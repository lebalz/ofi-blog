---
sidebar_custom_props:
  id: 4cb1b1b1-4fcd-41ba-b93a-864849e26e8f
---

# Einstieg SQL

:::info db-sql.ch

Erstellen Sie unter https://db-sql.ch mit Ihrer Schul-E-Mail-Adresse einen Account. Sie erhalten anschliessend eine E-Mail mit einem Link, um Ihr Konto zu aktivieren.

Sobald Sie dies erledigt haben, können Sie auf die für Sie freigegebenen Datenbankverbindungen zugreifen.
:::


### SQL

Eine SQL-Abfrage ist vom Aufbau her immer gleich:

```sql
SELECT
  [DISTINCT]
  Auswahlliste
  FROM Quelle [Alias-Name]
  [WHERE Where-Klausel]
  [ [GROUP BY {Group-by-Attribut}] +
    [HAVING Having-Klausel]]
  [ORDER BY {Sortierungsattribut [ASC|DESC]}
  [LIMIT {Datensatz-Anzahl}];
```

wobei alles, was in eckigen Klammern steht, optional ist.


`DISTINCT`
: Jeder Datensatz wird nur einmal ausgegeben, auch wenn er mehrfach in der Tabelle vorkommt.
`Auswahlliste`
: Bestimmt, welche Attribute (Spalten) der Quelle angezeigt werden sollen (`*` für alle) und ob Aggregationsfunktionen angewendet werden sollen. Aufgezählte Elemente sind mit einem *Komma* voneinander getrennt.
`Quelle [Alias-Name]`
: Spezifiziert, wo die Daten herkommen. Es können Relationen angegeben werden und miteinander als kartesisches Produkt oder als Verbund (`JOIN`) verknüpft werden. Durch die Angabe eines *Alias-Namen* können die Relationen für die Abfrage umbenannt werden.
`Where-Klausel` 
: Bestimmt die Bedingungen, unter denen die Daten ausgegeben werden sollen. Einzelne Bedingungen können mit `OR` oder `AND` verknüpft werden. 
`Group-by-Attribut`
: Legt fest, ob unterschiedliche Werte als einzelne Zeilen ausgegeben werden sollen oder ob alle Attributwerte aggregiert (bspw. aufsummiert (`SUM`), gemittelt (`AVG`), kleinster Wert (`MIN`), grösster Wert (`MAX`),...) zu einem einzelnen Ergebniswert zusammengefasst werden. 
`Having-by-Attribut`
: Ist wie die `WHERE`-Klausel, nur dass sich die angegebenen Bedingungen auf das Ergebnis einer Aggregationsfunktion beziehen. 
`Sortierungsattribut`
: Nach dem `ORDER BY` Statement werden Attribute angegeben, nach denen sortiert werden soll. Für eine aufsteigende Reihenfolge (1, 2, 3, ...) wird `ASC` spezifiziert, für eine absteigende Reihenfolge `DESC` (99, 80, 13, ...). 
`LIMIT`
: Gibt an wie viele Datensätze angezeigt werden sollen. Besonders hilfreich bei grossen Datensätzen, oder wenn nur eine gewisse Anzahl der *grössten*/*kleinsten* Attributwerte gesucht werden.

Einige Beispiele:

<GTabs groupId="video-editor" getLabel={(idx) => ['Alle auswählen', 'Projektion', 'Nach Name Sortiert', 'Die ersten 5', 'Selektion'][idx]} >

```sql
SELECT * 
    FROM legodudes;
```

```sql
--- Projektion: nur bestimmte Attribute anzeigen
SELECT name, beschreibung, bild
    FROM legodudes;
```

```sql
SELECT *
    FROM legodudes
    ORDER BY name;

--- oder explizite Richtung

SELECT *
    FROM legodudes
    ORDER BY name ASC;

--- oder absteigend

SELECT *
    FROM legodudes
    ORDER BY name DESC;
```

```sql
SELECT *
    FROM legodudes
    LIMIT 5;

--- oder kombiniert

SELECT *
    FROM legodudes
    ORDER BY name
    LIMIT 5;
```

```sql
--- nur mit der id 4
SELECT *
    FROM legodudes
    WHERE id=4;

--- nur aus den USA
SELECT *
    FROM legodudes
    WHERE land='USA';
```

</GTabs>

:::aufgabe 1. Haustiere
<Answer type="state" webKey="6e010a67-1961-45cd-9ead-94e910f5a439" />

Datenbank
: 👉 https://db-sql.ch/connections/9e5bd382-6110-4f04-adf7-2b46fcdadfd5/legomania

Fragen Sie alle Haustiere ab, wobei nur die Tierart, der Name und das Bild (in dieser Reihenfolge) ausgegeben werden sollen. Die Resultate sollen zudem alphabetisch absteigend nach der Tierart sortiert sein.

<Answer type="text" webKey="b413db16-1e52-49ba-b1e8-8fbdd32d7042" monospace />
<Solution webKey="9bb5ae4d-6c10-4aa2-aa36-0c94ca8279d2">

```sql
SELECT tierart, name, bild
    FROM haustiere
    ORDER BY tierart ASC
```
</Solution>
:::

:::aufgabe 2. Nur Hunde
<Answer type="state" webKey="b6a32f4e-3465-4a88-9f53-73769be2e5cc" />

Datenbank
: 👉 https://db-sql.ch/connections/9e5bd382-6110-4f04-adf7-2b46fcdadfd5/legomania

Fragen Sie bei den Haustieren alle Hunde ab, wobei alle Attribute ausgegeben werden sollen.

<Answer type="text" webKey="119abd04-a372-4b1a-95c7-e7808d4f48b0" monospace />

<Solution webKey="9bb5ae4d-6c10-4aa2-aa36-0c94ca8279d2" >

```sql
SELECT *
    FROM haustiere
    WHERE tierart = 'Hund'
```
</Solution>
:::

### Logische Operatoren

Mit den logischen Operatoren `AND`, `OR` und `NOT` können mehrere Bedingungen miteinander verknüpft werden.

:::cards --min-width=500px
Zwei Bedingungen, beide müssen erfüllt sein

```sql
SELECT * FROM haustiere
    WHERE lieblingsfutter='Körner' AND tierart='Hamster';
```
***
Zwei Bedingungen, die Eine oder die Andere muss erfüllt sein
```sql
SELECT * FROM haustiere
    WHERE lieblingsfutter='Körner' 
        OR lieblingsfutter='Fisch';
```
***
Kombinierte Bedingung - die Klammerung gibt an, was zusammengehört.
```sql
SELECT * FROM haustiere
    WHERE 
        NOT lieblingsfutter='Körner' AND (tierart='Hund' OR tierart='Katze');
```
:::warning Beachte
- Das `NOT` bezieht sich jeweils nur auf den direkt folgenden Ausdruck.
- Tabellen-Namen müssen für jeden Vergleich angegeben werden.
:::
:::

:::aufgabe 3. Klammerung
<Answer type="state" webKey="db511385-8b83-4e9f-bfcf-92c427ef15a5" />

Datenbank
: 👉 https://db-sql.ch/connections/9e5bd382-6110-4f04-adf7-2b46fcdadfd5/legomania

Wo liegt der Unterschied?

1. Probieren Sie die Abfragen aus
2. vergleichen Sie die Resultate
3. Erklären Sie das Verhalten

```sql
SELECT * FROM haustiere
    WHERE (NOT lieblingsfutter='Körner' AND tierart='Hund') OR tierart='Hamster';
```
```sql
SELECT * FROM haustiere
    WHERE NOT lieblingsfutter='Körner' AND (tierart='Hund' OR tierart='Hamster');
```

<Answer type="text" webKey="7a4c2b2c-3a43-42e4-bc96-8b0a15655362" />

:::

### Distinct

Mit dem Schlüsselwort `DISTINCT` kann angegeben werden, dass jeder Datensatz nur einmal ausgegeben werden soll, auch wenn er mehrfach in der Tabelle vorkommt.

Beispiel: Es sollen alle Tierarten ausgegeben werden, die in der Tabelle `haustiere` vorkommen.

```sql
SELECT DISTINCT tierart FROM haustiere;
```

:::aufgabe 4. Distinct
<Answer type="state" webKey="7614f3bd-be23-4e3b-9daf-7356cfdcdbbc" />

Datenbank
: 👉 https://db-sql.ch/connections/9e5bd382-6110-4f04-adf7-2b46fcdadfd5/legomania

Geben Sie alle Länder in welchen Legodudes wohnen in alphabetisch absteigender Reihenfolge aus.

<Answer type="text" webKey="d9f1ce1a-020e-4a24-b7e7-38a198df6572" monospace />
<Solution webKey="9bb5ae4d-6c10-4aa2-aa36-0c94ca8279d2">

```sql
SELECT DISTINCT land FROM legodudes ORDER BY land ASC;
```
</Solution>

:::

:::aufgabe 5. Aarentemperatur
<Answer type="state" webKey="87187a2b-d4ca-4796-a0d2-2b3196da9b31" />

Datenbank
: 👉 https://db-sql.ch/connections/9e5bd382-6110-4f04-adf7-2b46fcdadfd5/waters

1. Finden Sie heraus, an welchen Standorten die Aarentemperatur gemssen wird.
   
   <Answer type="text" webKey="04516e20-52e8-4b50-8f92-f52b7e54f3fd" monospace />

2. Erzeugen Sie eine Tabelle, in welcher nur die Aarentemperatur kurz vor dem Bielersee angezeigt wird. Ordnen Sie die Ausfabe nach dem Erstelldatum des Datensatzes.

   <Answer type="text" webKey="efc77872-8c93-40bb-86ab-62ded075040e" monospace />

3. Erstellen Sie ein Liniendiagramm mit db-sql und fügen Sie das Bild als Antwort unten ein.

    <Answer type="text" webKey="ffab11be-b58c-4861-8243-b43358d6b0b8" />

<Solution webKey="9bb5ae4d-6c10-4aa2-aa36-0c94ca8279d2">

1. Aufgabe

```sql
SELECT DISTINCT location
    FROM rivers
    WHERE name='Aare';
```

2. Aufgabe
 
```sql
SELECT *
    FROM rivers
    WHERE name='Aare' and location='Hagneck'
    ORDER BY created_at ASC;
```

</Solution>

:::
