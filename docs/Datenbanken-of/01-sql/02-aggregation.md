---
sidebar_custom_props:
  id: e50cdb95-82e3-4287-9726-ab9e63aeb557
---

# Aggregierte Abfragen

Oft sollen ergebnisse in einer zusammengefassten Form ausgegeben werden. So interessiert einem bspw. oft, wie viele Datensätze in einer Tabelle vorhanden sind, oder wie hoch der Durchschnittswert einer Spalte ist. Hierfür gibt es die sogenannten __Aggregatfunktionen__.

:::def
### `COUNT(*)`

Zählt die Anzahl der Datensätze in einer Tabelle.

```sql
SELECT COUNT(*) FROM legodudes;
/* count 
  -------
      7   */
```
:::


:::def
### `SUM()`

Addiert die Werte einer Spalte.

```sql
SELECT SUM(lieblingszahl) FROM legodudes;
/*  sum 
   -----
    651 */
```
:::

:::def
### `AVG()`

Berechnet den Mittelwert der Werte einer Spalte.

```sql
SELECT AVG(lieblingszahl) FROM legodudes;
/*  avg 
   ------
    93.0  */
```
:::

:::def
### `MAX()`

Gibt den maximalen Wert einer Spalte zurück.

```sql
SELECT MAX(lieblingszahl) FROM legodudes;
/*  max 
   ------
    420  */
```
:::

:::def
### `MIN()`

Gibt den minimalen Wert einer Spalte zurück.

```sql
SELECT MIN(lieblingszahl) FROM legodudes;
/*  min 
   -----
     1  */
```
:::

Damit lassen sich nun auch bspw. alle Legodudes ausgeben, die die höchste Lieblingszahl haben, wobei die `MAX()`-Funktion in einer verschachtelten Unterabfrage verwendet wird.

```sql
SELECT * FROM legodudes 
WHERE lieblingszahl = (SELECT MAX(lieblingszahl) FROM legodudes);
```


:::def
### `STRING_AGG(column, delimiter [ORDER BY column [ASC|DESC]])`

Mit `STRING_AGG` lassen sich Texte aus mehreren Zeilen zu einem Text zusammenfügen. Der `delimiter` ist das Trennzeichen, das zwischen den einzelnen Texten eingefügt wird.

```sql
SELECT string_agg(name, ', ') FROM legodudes;
/*                                        string_agg                                                 
--------------------------------------------------------------------------------------------------
 Litty Feuerwehr, Crazy Lego Dude, Elon Marsk, Larry der Stürmer, A$AP Geerky, Wigwam Tipi, Botot  */
```

oder mit Reihenfolge

```sql
SELECT string_agg(name, ', ' ORDER BY name) FROM legodudes;
/*                                        string_agg                                                 
--------------------------------------------------------------------------------------------------
 A$AP Geerky, Botot, Crazy Lego Dude, Elon Marsk, Larry der Stürmer, Litty Feuerwehr, Wigwam Tipi  */
```
:::

:::aufgabe[1. Ältester Legodude]
<Answer type="state" webKey="5c502b3e-547a-4aab-929e-bedc944e8a1f" />

Datenbank
: __legomania__
: 👉 https://db-sql.ch/connections/6750d31f-6978-4e24-b044-e2dd9763bd4f/legomania

Geben Sie den jüngsten Legodude aus, indem Sie eine verschachtelte Unterabfrage verwenden.

<Answer type="text" webKey="55a6f5b1-4ce1-4c8a-82f9-3e0247272352" monospace />
<Solution webKey="44077255-cf6b-4d5f-a152-de6c3cf6e37e">

```sql
SELECT * FROM legodudes 
WHERE alter = (SELECT MIN(alter) FROM legodudes);
```
</Solution>
:::

## Group By
Oft interessiert aber nicht nur die Anzahl der Datensätze, sondern die Anzahl der Datensätze pro Kategorie. Hierfür gibt es den `GROUP BY`-Befehl.

::::def
### `GROUP BY`

Mit `GROUP BY` lassen sich Datensätze nach einer oder mehrerer Spalten gruppieren. Die Aggregatfunktionen werden dann auf die einzelnen Gruppen angewendet.

```sql
SELECT land, COUNT(*) 
FROM legodudes 
GROUP BY land;
/*  land      | count 
  ------------+-------
   Irland     |     1 
   Österreich |     1 
   Schweden   |     1 
   USA        |     3 
   Schweiz    |     1  */
```

:::warning[Wichtig]
Für jede Spalte, die nicht in der `GROUP BY`-Klausel steht, muss eine Aggregatfunktion verwendet werden!
:::
::::

:::aufgabe[2. Namen nach Ländern gruppiert]
<Answer type="state" webKey="fbbb07f6-cd07-4efe-90db-6138295f49ac" />


Datenbank
: __legomania__
: 👉 https://db-sql.ch/connections/6750d31f-6978-4e24-b044-e2dd9763bd4f/legomania

Erstellen Sie die folgende Tabelle (beachten Sie die Reihenfolge der Länder):

```  
  Land      |              Namen                   
------------+--------------------------------------
 Irland     | Larry der Stürmer                    
 Österreich | Crazy Lego Dude                      
 Schweden   | Litty Feuerwehr                      
 Schweiz    | Botot                                
 USA        | Elon Marsk, A$AP Geerky, Wigwam Tipi 
 ```

<Answer type="text" webKey="77d74a75-a953-460d-bf21-09b81af0c8e5" />

<Solution webKey="cec19b30-2764-41f8-aaf5-58082370ed20">

```sql
SELECT land as "Land", string_agg(name, ', ') as "Namen"
FROM legodudes
GROUP BY land
ORDER BY land
```
</Solution>
:::
