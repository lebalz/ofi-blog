---
sidebar_custom_props:
  id: 9f8b397a-500e-4a62-b884-b6441df17902
---
# Tabellen Erstellen

## Datenbank erstellen

:::def
### `CREATE DATABASE`
Mit dem Befehl `CREATE DATABASE` kann eine neue Datenbank erstellt werden.

```sql
CREATE DATABASE ef_reto;
```
:::

::::def
### `DROP DATABASE`
Die Datenbank kann mit dem Befehl `DROP DATABASE` auch wieder gelöscht werden:

```sql
DROP DATABASE ef_reto;
```

:::danger Wichtig
Bitte löschen Sie nur Datenbanken, die Sie selber erstellt haben!  
Der Einfachheit halber haben Sie auf der Kursdatenbank __EDU-DBs EF__ alle Rechte...
:::

::::

:::aufgabe 1. Datenbank erstellen
<Answer type="state" webKey="6b4f812b-2ccf-4beb-b551-71e774fa9c6c" />

Datenbank
: 👉 https://db-sql.ch/connections/d68ea3c2-eb9f-4454-aa19-9c00764757b5

Erstellen Sie eine eigene Datenbank mit nach folgendem Schema `ef_name`, wobei Sie natürlich Ihren eigenen Namen verwenden. Wenn der Befehl erfolgreich ausgeführt wurde, sollte Ihre Datenbank nach dem Aktualisieren der Verbindungen :mdi-sync--l: angezeigt werden.

<Answer type="text" webKey="b1b0b2a9-5b0a-4b0a-9b0a-5b0a4b0a9b0a" monospace />
:::

## Tabellen erstellen

:::def
### `CREATE TABLE`
Tabellen werden mit dem Befehl `CREATE TABLE` erstellt. Die Spalten werden mit dem Namen und dem Datentyp definiert.

```sql
CREATE TABLE persons (
    id INT,
    name TEXT,
    alter INT,
    beschreibung TEXT
)
```

**Konvention** Der Name der Tabelle wird immer im Plural geschrieben.
:::

### Datensätze einfügen

:::def 
### `INSERT INTO`
Mit dem Befehl `INSERT INTO` können Datensätze in die Tabelle eingefügt werden.

```sql
INSERT INTO persons 
    (id, name, alter, beschreibung)
VALUES 
    (1, 'Maria Muster', 42, 'Ein ganz normaler Mensch'),
    (2, 'Hans Monster', 55, 'Ein ganz monströser Mensch');
```
:::

:::aufgabe 2. Datensätze einfügen
<Answer type="state" webKey="e1fec5d5-ad04-4552-a4bc-476aa1d2147d" />


Datenbank
: :mdi-alert--orange: mit der eigenen Datenbank verbinden!
: 👉 https://db-sql.ch/connections/d68ea3c2-eb9f-4454-aa19-9c00764757b5

Erstellen Sie eine Personen-Tabelle mit einigen selbst gewählten Attributen und fügen Sie einige Datensätze ein. Halten Sie das Query unten fest.

<Answer type="text" webKey="79edb637-4944-469f-b2b7-b35e2dba8ff6" />

Was passiert, wenn Sie nun nochmals die gleichen Datensätze einfügen?

<Answer type="text" webKey="86f5d5b3-3266-4f3f-a1b5-60bbe11239bf" />
:::


### Tabellen löschen

:::def
### `DROP TABLE`
Um eine Tabelle zu löschen, wird der Befehl `DROP TABLE` verwendet.

```sql
DROP TABLE persons;
```
:::

### Constraints

Constraints sind Regeln, die auf die Daten angewendet werden. Sie können auf die Spalten oder auf die ganze Tabelle angewendet werden. So wird sichergestellt, dass die Daten in der Tabelle immer korrekt sind.

Damit kann bspw. auch verhindert werden, dass wie oben geschehen, die gleichen Datensätze mehrmals eingefügt werden.

`PRIMARY KEY`
: Primärschlüssel - Die Datenbank stellt sicher, dass der verwendete Schlüssel eindeutig ist und nicht `NULL` ist.
`NOT NULL`
: Die Spalte darf nicht `NULL` sein.
`UNIQUE`
: Der Wert in der Spalte muss eindeutig sein.
`DEFAULT`
: Der Standardwert, der verwendet wird, wenn kein Wert angegeben wird.
`SERIAL`
: Automatisch generierter Wert, der bei jedem neuen Datensatz um 1 erhöht wird. Beim Primärschlüssel muss dadurch beim Erstellen eines Datensatzes kein Wert angegeben werden.
`DEFAULT CURRENT_TIMESTAMP`
: Der aktuelle Zeitstempel wird als Standardwert verwendet.


Obige Tabelle könnte also auch wie folgt definiert werden:

```sql
CREATE TABLE persons (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    alter INT,
    beschreibung TEXT DEFAULT 'Keine Beschreibung vorhanden',
    erstellt_am TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
```

Die Eingabe wird wegen der automatischen ID's etwas einfacher. Bemerken Sie zudem, dass automatisch von der Datenbank ein Zeitstempel gesetzt wird.

```sql
INSERT INTO persons 
    (name, alter, beschreibung)
VALUES 
    ('Maria Muster', 42, 'Ein ganz normaler Mensch'),
    ('Hans Monster', 55, 'Ein ganz monströser Mensch');
```


:::aufgabe 3. Tabelle mit Constraints
<Answer type="state" webKey="805b507b-93bc-40bd-a78d-9ce3fc531cad" />

Datenbank
: :mdi-alert--orange: mit der eigenen Datenbank verbinden!
: 👉 https://db-sql.ch/connections/d68ea3c2-eb9f-4454-aa19-9c00764757b5

Erstellen Sie Ihre Personen-Tabelle erneut (zuerst Löschen...) 
- verwenden Sie einen seriellen Primärschlüssel
- stellen Sie sicher, dass benötigte Felder gesetzt werden müssen
- Fügen Sie für mindestens ein Attribut einen Standardwert
- Fügen Sie ein `erstellt_am` (oder `created_at`) Feld hinzu, welches automatisch mit dem aktuellen Zeitstempel gefüllt wird.
- Fügen Sie einige Datensätze ein - passen Sie am besten das Query von oben an.

<Answer type="text" webKey="8c0bda3b-ba1a-45b2-8fa4-24fab7b5c8b5" />

Was passiert nun, wenn Sie die Restriktionen verletzen? Probieren Sie es aus und halten Sie einige Fehlermeldungen fest.

<Answer type="text" webKey="7bf34055-06f2-4bf0-8b2d-54e6e1795539" />
:::
