# SQL


## Abfragen

```sql
SELECT nachname, vorname
FROM persons
```


## Abfragen

```sql
SELECT nachname, vorname
FROM persons
WHERE nachname = 'Müller'
```


## Abfragen

```sql
SELECT nachname, vorname
FROM persons
WHERE nachname = 'Müller'
ORDER BY vorname
```


## Abfragen

```sql
SELECT nachname, vorname
FROM persons
WHERE nachname = 'Müller'
ORDER BY vorname DESC
```


## Abfragen

```sql
SELECT nachname, vorname
FROM persons
WHERE nachname = 'Müller'
ORDER BY vorname DESC
LIMIT 10
```



## Mehrere Tabellen

```sql
SELECT 
    persons.nachname, 
    persons.vorname, 
    addresses.strasse, 
    addresses.hausnummer
FROM persons
    JOIN addresses 
        ON persons.id = addresses.person_id
```


## Mehrere Tabellen

```sql
SELECT 
    persons.nachname, 
    persons.vorname, 
    addresses.strasse, 
    addresses.hausnummer
FROM persons
    JOIN addresses 
        ON persons.id = addresses.person_id
WHERE persons.nachname = 'Müller'
```


## Mehrere Tabellen

```sql
SELECT p.nachname, p.vorname, a.strasse, a.hausnummer
FROM persons p
    JOIN addresses a ON p.id = a.person_id
WHERE p.nachname = 'Müller'
```



## Einfügen

```sql
INSERT INTO persons (nachname, vorname)
VALUES ('Müller', 'Hans')
```


## Einfügen

```sql
INSERT INTO persons (vorname, nachname)
VALUES ('Hans', 'Müller')
```



## Löschen

```sql
DELETE FROM persons
WHERE nachname = 'Müller'
```


## Löschen

```sql
DELETE FROM persons
WHERE nachname = 'Müller' OR nachname = 'Meier'
```



## Aktualisieren

```sql
UPDATE persons
SET nachname = 'Müller'
WHERE id = 12;
```


## Aktualisieren

```sql
UPDATE persons
SET email = LOWER(email)
```



## Constraints

Einschränkungen, die bei der Datenmodifizierung vom DBMS überprüft werden.

```sql
CREATE TABLE persons (
    id SERIAL PRIMARY KEY,
    nachname TEXT NOT NULL,
    vorname TEXT NOT NULL,
    email TEXT UNIQUE
);
-- ok
INSERT INTO persons (nachname, vorname, email)
VALUES ('Müller', 'Hans', 'hans.mu@gbsl.ch');
-- Fehler
INSERT INTO persons (nachname, email)
VALUES ('Müller', 'hans.mu@gbsl.ch');
```


## Constraints

```sql
CREATE TABLE persons (
    id SERIAL PRIMARY KEY,
    nachname TEXT NOT NULL DEFAULT '',
    vorname TEXT NOT NULL DEFAULT '',
    email TEXT UNIQUE
);
-- ok
INSERT INTO persons (nachname, email)
VALUES ('Müller', 'hans.mu@gbsl.ch');
-- fehler
INSERT INTO persons (nachname, email)
VALUES ('Müller 2', 'hans.mu@gbsl.ch');
```

