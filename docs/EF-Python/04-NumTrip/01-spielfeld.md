---
sidebar_custom_props:
  id: e749e82c-0b7b-42f0-9596-27d86c257c6d
  source: intern
  author: sdg
---

# Spielfeld

Eine der ersten Aufgaben, wenn man ein neues Programm schreiben soll, ist sich zu überlegen, welche Informationen das Programm verarbeiten muss und wie diese im Programm codiert werden sollen. Man spricht von **Datenstrukturen**.

Für alleinstehende Informationen, wie eine einzelne Zahl oder einen Text können wir auf **Variablen** zurückgreifen.

Beispiele:

```py
breite = 10
spieler_name = 'Globi'
```

Oft hat man aber Daten, welche in irgend einer Form zusammengesetzt sind, zum Beispiel eine Adresse. Sie besteht aus mehreren Teilinformationen, wie *Strasse*, *Hausnummer*, *PLZ* und *Ort*. Hier wäre es mühsam, wenn man für die einzelnen Teile im Programm separate Variablen verwenden müsste.

Alle Programmiersprachen bieten deshalb Möglichkeiten an, solche zusammengesetzten oder strukturierten Daten auf einfache Weise in einem Programm zu repräsentieren.

Eine davon kennen Sie. Es ist die **Liste**. Sie kommt immer dann zum Einsatz, wenn wir mehrere Informationen vom selben Datentyp zusammen speichern wollen.

Genau einen solchen Fall von vielen gleichartigen Informationen stellt das Spielfeld unseres NumTrip Games dar. Hier haben wir eine Matrix von einzelnen Zellen.

Jede Zelle widerspiegelt dabei den aktuellen, aufsummierten Zahlenwert.

:::aufgabe
<Answer type="state" webKey="1f8639f0-8bb6-42b1-9f44-849e8ce14775" />

1. Überlegen Sie sich zu zweit oder zu dritt, wie Sie die oben beschriebenen Informationen zum Spielfeld in einer geeigneten Datenstruktur in einem Python-Programm darstellen können.  
Stellen Sie sich dazu folgenden Fragen:
   - Welcher Datentyp wird in einer Zelle gespeichert (Text oder Zahl)?
   - Braucht es eine Liste? Welche Dimension hat diese?
   - Brauchen wir mehrere Listen?
2. Fertigen Sie auf Papier eine kleine Illustration Ihrer Datenstruktur an und schreiben Sie einen kurzen Dokumentationsbeitrag (bspw. unter `docs/numtrip/datenstruktur.md`) zu Ihren Überlegungen (jede Person für sich). (Fotografieren Sie Ihre Skizze und binden diese in Ihr Markdown ein).
3. Commiten und Pushen Sie die Dokumente.
4. Kopieren Sie den Link zur entsprechenden Github-Dokumentationsseite in die Antwort zu dieser Aufgabe.

<Answer type="text" webKey="f9e9ab95-2035-4d72-a047-4b0f30d58163" />
:::
