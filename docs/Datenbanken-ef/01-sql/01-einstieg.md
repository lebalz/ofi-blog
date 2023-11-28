---
sidebar_custom_props:
  id: 4cb1b1b1-4fcd-41ba-b93a-864849e26e8f
---

# Einstieg SQL

:::info[db-sql.ch]

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

:::aufgabe[1. Haustiere]
<Answer type="state" webKey="6e010a67-1961-45cd-9ead-94e910f5a439" />

Datenbank
: __legomania__
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

:::aufgabe[2. Nur Hunde]
<Answer type="state" webKey="b6a32f4e-3465-4a88-9f53-73769be2e5cc" />

Datenbank
: __legomania__
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

:::cards{min-width=500px}
Zwei Bedingungen, beide müssen erfüllt sein

```sql
SELECT * FROM haustiere
    WHERE lieblingsfutter='Körner' AND tierart='Hamster';
```
::br
Zwei Bedingungen, die Eine oder die Andere muss erfüllt sein
```sql
SELECT * FROM haustiere
    WHERE lieblingsfutter='Körner' 
        OR lieblingsfutter='Fisch';
```
::br
Kombinierte Bedingung - die Klammerung gibt an, was zusammengehört.
```sql
SELECT * FROM haustiere
    WHERE 
        NOT lieblingsfutter='Körner' AND (tierart='Hund' OR tierart='Katze');
```
:::warning[Beachte]
- Das `NOT` bezieht sich jeweils nur auf den direkt folgenden Ausdruck.
- Tabellen-Namen müssen für jeden Vergleich angegeben werden.
:::
:::

:::aufgabe[3. Klammerung]
<Answer type="state" webKey="db511385-8b83-4e9f-bfcf-92c427ef15a5" />

Datenbank
: __legomania__
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

:::aufgabe[4. Distinct]
<Answer type="state" webKey="7614f3bd-be23-4e3b-9daf-7356cfdcdbbc" />

Datenbank
: __legomania__
: 👉 https://db-sql.ch/connections/9e5bd382-6110-4f04-adf7-2b46fcdadfd5/legomania

Geben Sie alle Länder in welchen Legodudes wohnen in alphabetisch absteigender Reihenfolge aus.

<Answer type="text" webKey="d9f1ce1a-020e-4a24-b7e7-38a198df6572" monospace />
<Solution webKey="9bb5ae4d-6c10-4aa2-aa36-0c94ca8279d2">

```sql
SELECT DISTINCT land FROM legodudes ORDER BY land ASC;
```
</Solution>

:::

:::aufgabe[5. Aarentemperatur]
<Answer type="state" webKey="87187a2b-d4ca-4796-a0d2-2b3196da9b31" />

Datenbank
: __waters__
: 👉 https://db-sql.ch/connections/9e5bd382-6110-4f04-adf7-2b46fcdadfd5/waters

1. Finden Sie heraus, an welchen Standorten die Aarentemperatur gemessen wird.
   
   <Answer type="text" webKey="04516e20-52e8-4b50-8f92-f52b7e54f3fd" monospace />

2. Erzeugen Sie eine Tabelle, in welcher nur die Aarentemperatur kurz vor dem Bielersee angezeigt wird. Ordnen Sie die Ausgabe nach dem Erstelldatum des Datensatzes.

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


### Nach Namen Suchen

Mit dem Schlüsselwort `LIKE` kann nach einem bestimmten Muster gesucht werden. `%` steht dabei für beliebige Zeichen.

Beispiel: Es sollen alle Personen ausgegeben werden, deren Name mit `Georg` beginnt.

```sql
SELECT * FROM persons WHERE name LIKE 'Georg%';
```

... oder alle Personen, deren Name ein grosses `Z` enthält.

```sql
SELECT * FROM persons WHERE name LIKE '%Z%';
```

::::danger[Gross- und Kleinschreibung]
Der `LIKE` Befehl beachtet die Gross- und Kleinschreibung! Damit man nicht (wie in Python) zuerst den zu durchsuchenden Text in kleine Buchstaben transformieren muss, gibt es das __insensitive Like__: `ILIKE`. Damit wird die Gross- und Kleinschreibung ignoriert.

```sql
SELECT * FROM persons WHERE name ILIKE '%z%';
```
gibt alle Personen mit einem grossen- oder kleinen `z` im Namen zurück.

:::details[Ohne `ILIKE`]
Ohne den Befehl `ILIKE` könnte die Abfrage so aussehen:

```sql
SELECT * FROM persons WHERE name LIKE '%z%' OR name LIKE '%Z%';
```

oder

```sql
SELECT * FROM persons WHERE LOWER(name) LIKE '%z%' OR name LIKE '%Z%';
```

:::

::::

:::aufgabe[6. Nach Namen Suchen]
<Answer type="state" webKey="7d4154a4-55f6-4ea4-8f9f-086a8bf5d9a9" />

Datenbank
: __IMDB__
: 👉 https://db-sql.ch/connections/9e5bd382-6110-4f04-adf7-2b46fcdadfd5/imdb

Listen Sie alle Personen auf, die 
- mit Ihren Namen beginnen? (Achtung: Beim Namen `John` soll der Name `Johnny` nicht ausgegeben werden)
- mit Ihrem Namen enden?
- ihren Namen enthalten?

<Answer type="text" webKey="059a4e20-ddac-489a-a6f8-a746b63331d9" monospace/>

<Solution webKey="cd8fc8b4-8b19-4ecf-a768-42c1782d9661">

```sql
SELECT * from humans WHERE name ILIKE 'Reto %'; -- Leerschlag wichtig!
SELECT * from humans WHERE name ILIKE '% Reto'; -- Leerschlag wichtig!
SELECT * from humans WHERE name ILIKE '%Reto%';
```
</Solution>
:::

### Spalten benennen

Die Spaltennamen lassen sich bei der Abfrage verändern oder neu definieren:

```sql
SELECT name as Spitzname, tierart as Tier, lieblingsfutter as Frisst
FROM haustiere
```

:::aufgabe[7. Unterschied finden]
<Answer type="state" webKey="8ea69594-d575-4858-bbfb-49eb454cc304" />


Datenbank
: __legomania__
: 👉 https://db-sql.ch/connections/9e5bd382-6110-4f04-adf7-2b46fcdadfd5/legomania

1. Wo liegt der Unterschied zwischen den beiden Queries? Führen Sie beide Queries aus und halten Sie den Unterschied fest.
2. Funktioniert es auch mit einfachen Anführungszeichen `'`?
```sql
SELECT name as Spitzname, tierart as Tier, lieblingsfutter as Frisst
FROM haustiere;
```

```sql
SELECT name as "Spitzname", tierart as "Tier", lieblingsfutter as "Frisst"
FROM haustiere;
```

<Answer type="text" webKey="26034b8a-62d6-4c4d-b262-6536a69d1282" monospace />

:::

### Texte verändern


:::def[]
### `CONCAT(text1, text2, ...)` oder `text1 || text 2`
Mit dem Schlüsselwort `CONCAT` können Texte zusammengefügt werden:

```sql
SELECT CONCAT('Hallo ', name) FROM persons;
-- oder äquivaltent
SELECT 'Hallo ' || name FROM persons;
```
:::

:::def
### `SUBSTRING(text, start, [length])`

Mit dem Schlüsselwort `SUBSTRING` können Textausschnitte ausgegeben werden, wobei der `start` Index angibt, welches der erste Buchstaben ist. **Achtung** - hier hat der erste Buchstabe im Gegensatz zu Python den Index __1__! Optional kann mit dem Parameter `length` die Länge des Ausschnitts angegeben werden.

```sql
SELECT SUBSTRING('Hallo', 2); -- > 'allo'
SELECT SUBSTRING('Hallo', 2, 3); -- > 'all'
SELECT SUBSTRING('Hallo', 1, 3); -- > 'Hal'
-- oder mit Spalteninhalten
SELECT SUBSTRING(name, 1, 5) FROM persons;
```
:::

:::def
### `REPLACE(text, old, new)`

Mit dem Schlüsselwort `REPLACE` können Textteile ersetzt werden

```sql
-- "Reto Holz" wird zu "Reto_Holz"
SELECT REPLACE(name, ' ', '_') FROM persons;
```
:::

:::def

### `POSITION(token in text)`

Mit `POSITION` lässt sich das erste Auftreten eines Textausschnitts (token) in einem Text herausfinden.

Beispiel: Wo kommt das erste Leerzeichen vor?

```sql
SELECT POSITION(' ' in 'Hallo Welt');
--                      123456
--                            \--> an Position 6... 
```

Damit lässt sich nun auch der Vorname aus einer Namensliste herauslesen:

```sql
SELECT SUBSTRING(name, 1, POSITION(' ' in name)) FROM persons;
```
:::

Weitere Operatoren und Funktionen
- `UPPER(text)` schreibt alle Buchstaben gross
- `LOWER(text)` schreibt alle Buchstaben klein
- `MD5(text)` berechnet den MD5-Hash eines Textes
- ... 👉 https://www.postgresql.org/docs/current/functions-string.html


:::aufgabe[8. IMDB-URLS]
<Answer type="state" webKey="798acf10-38bd-4f4e-9e15-b07d9d18f239" />

Datenbank
: __IMDB__
: 👉 https://db-sql.ch/connections/9e5bd382-6110-4f04-adf7-2b46fcdadfd5/imdb

1. Welche unterschiedlichen Filmtypen gibt es? Listen Sie alle auf.
2. Zeigen Sie alle Attribute der ersten `100` Kurzfilme aus dem Jahr 2023 an.
3. Die angezeigte ID (bspw. `tt8773344`) findet man auch in der URL der IMDB-Seite. Erstellen Sie eine Abfrage, welche nebst allen Attributen noch zusätzlich die `URL` für die ersten 100 Kurzfilme ausgibt, die im Jahr 2023 erschienen sind.  
Die URL hat folgendes Format: `https://www.imdb.com/title/<ID>/`

<Answer type="text" webKey="3594e603-c6b1-434b-856d-536b95d6f03c" monospace />

<Solution webKey="2f6a4fc9-df9d-432b-abf5-9a58ac953925">

```sql
SELECT DISTINCT type FROM movies;

SELECT * FROM movies WHERE type='short' AND start_year=2023 LIMIT 100;

SELECT 'https://www.imdb.com/title/' || id || '/' as url, * 
FROM movies 
WHERE type='short' AND start_year=2023 
LIMIT 100;
```
</Solution>
:::
