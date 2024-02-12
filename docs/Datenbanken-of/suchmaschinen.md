---
sidebar_custom_props:
  id: ddf937cd-2b82-4145-8853-8fd1977fcf5f
---
# Suchmaschinen

:::aufgabe[Wie funktioniert eine Suchmaschine?]
<Answer type="state" webKey="1272c3e2-b728-4088-ab7b-16d07e195cfb" />

Quelle
: https://kopfundstift.de/wie-funktioniert-eine-suchmaschine/

- Index
    - Was ist ein Index?
    - Weshalb ist ein Index bei Suchmaschinen so zentral?
- Bots & Crawler
    - Was ist ein Googlebot?
    - Welche Aufgabe hat ein Googlebot?
    - Welche Informationen betrachtet der Googlebot auf einer Website?
    - Von wo weiss der Googlebot welche Websites es überhaupt gibt?

<Answer type="text" webKey="d5be9697-04cb-4d49-a62c-1f65d78a5e28" />
:::


Die erweiterten Suchoperatoren von Google sind spezielle Befehle und Zeichen, die die Suchergebnisse filtern. Sie tun dies, indem sie Ihre Suchanfragen präziser und fokussierter machen.[^1]

<div className="slim">

| Operator      | Was es macht                                                              | Beispiel                                                                                                    |
|---------------|---------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------|
| `" "`         | Sucht nach Ergebnissen, die ein Wort oder eine Phrase enthält.            | [👉 "Charles Babbage"](https://www.google.com/search?q=%22Charles+Babbage%22)                               |
| `OR`          | Sucht nach Ergebnissen, die mit X **oder** Y verwandt sind.               | [👉 jobs OR gates](https://www.google.com/search?&q=jobs+OR+gates)                                          |
| \|            | Das Gleiche wie `OR`:                                                     | [👉 jobs \| gates](https://www.google.com/search?q=jobs%7Cgates)                                            |
| `AND`         | Sucht nach Ergebnissen, die mit X **und** Y verwandt sind.                | [👉 jobs AND gates](https://www.google.com/search?&q=jobs+AND+gates)                                        |
| `-`           | Sucht nach Ergebnissen, die ein Wort oder eine Phrase **nicht** erwähnen. | [👉 jobs -apple](https://www.google.com/search?q=jobs+-apple)                                               |
| `*`           | Platzhalter für jedes Wort oder jede Phrase. Wie `%` in SQL.              | [👉 steve * apple](https://www.google.com/search?q=%22steve+*+apple%22)                                     |
| `( )`         | Gruppiert mehrere Suchen.                                                 | [👉 (ipad OR iphone) apple](https://www.google.com/search?q=%28ipad+OR+iphone%29+apple)                     |
| `define:`     | Sucht nach der Definition eines Wortes oder einer Phrase.                 | [👉 define:entrepreneur](https://www.google.com/search?q=define%3Aentrepreneur)                             |
| `cache:`      | Findet die aktuellste zwischengespeicherte Version einer Webseite.        | [👉 cache:ofi.gbsl.website](http://webcache.googleusercontent.com/search?q=cache%3Aofi.gbsl.website)        |
| `filetype:`   | Sucht nach bestimmten Dateitypen (z.B. PDF).                              | [👉 schiefer wurf filetype:pdf](https://www.google.com/search?q=schiefer+wurf+filetype%3Apdf)               |
| `ext:`        | Das Gleiche wie filetype:                                                 | [👉 schiefer wurf ext:pdf](https://www.google.com/search?q=schiefer+wurf+ext%3Apdf)                         |
| `site:`       | Sucht nach Ergebnissen von einer bestimmten Website.                      | [👉 site:gbsl.ch](https://www.google.com/search?q=site%3Agbsl.ch)                                           |
| `related:`    | Sucht nach ähnlichen Websiten.                                            | [👉 related:digitec.ch](https://www.google.com/search?q=related%3Adigitec.ch)                               |
| `intitle:`    | Sucht nach Seiten mit einem bestimmten Wort im Titel-Tag.                 | [👉 intitle:apple](https://www.google.com/search?q=intitle%3Aapple)                                         |
| `allintitle:` | Sucht nach Seiten mit mehreren Wörtern im Titel-Tag.                      | [👉 allintitle:apple iphone](https://www.google.com/search?q=allintitle%3Aapple+iphone)                     |
| `inurl:`      | Sucht nach Seiten mit einem bestimmten Wort in der URL.                   | [👉 inurl:apple](https://www.google.com/search?q=inurl%3Aapple)                                             |
| `allinurl:`   | Sucht nach Seiten mit mehreren Wörtern in der URL.                        | [👉 allinurl:apple iphone](https://www.google.com/search?q=allinurl%3Aapple+iphone)                         |
| `intext:`     | Sucht nach Seiten mit einem bestimmten Wort im Inhalt.                    | [👉 intext:fragaria](https://www.google.com/search?q=intext%3Afragaria)                                     |
| `allintext:`  | Sucht nach Seiten mit mehreren Wörtern im Inhalt.                         | [👉 allintext:capsella bursa pastoris](https://www.google.com/search?q=allintext%3Acapsella+bursa+pastoris) |
| `weather:`    | Sucht nach dem Wetter an einem Ort.                                       | [👉 weather:san francisco](https://www.google.com/search?q=weather%3Asan+francisco)                         |
| `stocks:`     | Sucht nach Aktieninformationen für ein Kürzel.                            | [👉 stocks:"stadler rail"](https://www.google.com/search?q=stocks%3A%22stadler+rail%22)                     |
| `map:`        | Zwingt Google, Karten-Ergebnisse anzuzeigen.                              | [👉 map:Le Landeron](https://www.google.com/search?q=map%3ALe+Landeron)                                     |
| `movie:`      | Sucht nach Informationen zu einem Film.                                   | [👉 movie:money ball](https://www.google.com/search?q=movie%3Amoney+ball)                                   |
| `in`          | Wandelt eine Einheit in eine andere um.                                   | [👉 $329 in CHF](https://www.google.com/search?q=%24329+in+CHF)                                             |
| `source:`     | Sucht nach Ergebnissen von einer bestimmten Quelle.                       | [👉 apple source:srf](https://www.google.com/search?q=apple+source%3Asrf)                                   |
| `before:`     | Sucht nach Ergebnissen von vor einem bestimmten Datum.                    | [👉 apple before:2007-06-29](https://www.google.com/search?q=apple+before%3A2007-06-29)                     |
| `after:`      | Sucht nach Ergebnissen von nach einem bestimmten Datum.                   | [👉 apple after:2007-06-29](https://www.google.com/search?q=apple+after%3A2007-06-29)                       |

</div>

## Unzuverlässige Suchoperatoren

<div className="slim">

| Search Operator | Was es macht                                                                           | Beispiel                                                                                                  |
|-----------------|----------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------|
| `..`            | Suche innerhalb eines Zahlenbereichs.                                                  | [👉 iPhone hülle CHF10..CHF20](https://www.google.com/search?q=iphone+h%C3%BClle+CHF10..CHF20)            |
| `inanchor:`     | Suche nach Seiten mit Rückverweisen, die bestimmten Anker-Text enthalten.              | [👉 inanchor:apple](https://www.google.com/search?q=inanchor%3Aapple)                                     |
| `allinanchor:`  | Suche nach Seiten mit Rückverweisen, die mehrere Wörter in ihrem Anker-Text enthalten. | [👉 allinanchor:apple iPhone](https://www.google.com/search?q=allinanchor%3Aapple+iphone)                 |
| `AROUND(X)`     | Suche nach Seiten, auf denen zwei Wörter innerhalb von X Wörtern vorkommen.            | [👉 apple AROUND(4) iPhone](https://www.google.com/search?q=apple+AROUND(4))                              |
| `loc:`          | Findet Ergebnisse aus einem bestimmten Gebiet.                                         | [👉 loc:"San Francisco" apple](https://www.google.com/search?q=location%3A%22San+Francisco%22+apple)      |
| `location:`     | Findet Nachrichten aus einem bestimmten Ort.                                           | [👉 location:"San Francisco" apple](https://www.google.com/search?q=loc:%22san+francisco%22+apple)        |
| `daterange:`    | Sucht nach Ergebnissen aus einem bestimmten Datumsbereich. (US-Format: YYDDM)          | [👉 steve jobs daterange:11278-13278](https://www.google.com/search?q=steve+jobs+daterange%3A11278-13278) |

</div>

[^1]: Quelle: [https://ahrefs.com](https://ahrefs.com/blog/google-advanced-search-operators/)
