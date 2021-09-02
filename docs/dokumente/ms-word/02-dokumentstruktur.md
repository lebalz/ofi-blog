import useBaseUrl from '@docusaurus/useBaseUrl';

# Textaufbau in Word

## Drei Strukturebenenen
Ein Word-Dokument kennt drei verschiedene Strukturebenenen:

- Abschnitt
  - Absatz
    - Zeichen

<div style={{maxHeight: '350px', overflow: 'auto'}}>

![](images/word-abschnitt-absatz.png)

</div>

Auf jeder Strukturebene lassen sich unterschiedliche Formatierungen vornehmen.

### Abschnitt
In einem Abschnitt wird das grundlegende Erscheinungsbild vorgegeben.
- Ausrichtung
- Format
- Spalten
- Seitenränder

Unter **Layout** lassen sich viele *Abschnitt-Einstellungen* vornehmen und auch *Abschnitt-Umbrüche* einfügen. Durch Klicken auf den rot eingefärbten Pfeil können zudem weitere Einstellungsmöglichkeiten angezeigt werden.

<div className="no-table-header top">

| -                                     |                                           |
| :------------------------------------ | :---------------------------------------- |
| ![](images/word-seite-einrichten.png) | ![](images/word-seite-einrichten-pro.png) |

</div>

#### Silbentrennung

Die Silbentrennung ermöglicht es, Wörter automatisch an geeigneter Stelle zu trennen, wenn dadurch der Verfügbare Platz auf einer Zeile besser genutzt werden kann. Das Layout wirkt dadurch aufgeräumter und das Lesen ist angenehmer. Diese Option muss jedoch von Hand unter `Layout > Silbentrennung` auf *Automatisch* gesetzt werden.

### Absatz
Ein Absatz entsteht, wenn eine neue Zeile mit der Enter-Taste eingefügt wird. EIn Absatz wird grundsätzlich gemäss der zugewiesenen **Formatvorlage** formatiert. Diese Einstellungen können aber auch in jedem Absatz angepasst werden.

#### Formatvorlagen

Mit einer Formatvorlage können Struktur- und Darstellungsinformationen zusammengefasst werden. **Strukturinformationen** beziehen sich auf die Art des Absatzes - ist es eine *Überschrift*, eine *Unterüberschrift*, ein *normaler Text* oder ...? Durch das Hinterlegen dieser Strukturinformationen kann Word bspw. automatisch die Überschriften nummerieren oder automatisch ein Inhaltsverzeichnis generieren. Da auch Darstellungsinformationen hinterlegt werden können, wird ein Dokument *einheitlich* und ohne viel Aufwand formatierbar. Für die Änderung der Schriftgrösse von allen Überschriften muss dann nur die Formatvorlage angepasst werden und nicht jede einzelne Überschrift.

Es gibt vordefinierte Formatvorlagen, die einem Absatz zugewiesen werden können:

![](images/word-formatvorlage.png)

Die Formatvorlagen können auch nach den eigenen Wünschen **angepasst** werden:

<div className="no-table-header top">

|                                             |                                         |
| :------------------------------------------ | :-------------------------------------- |
| ![](images/word-formatvorlage-edit-pre.png) | ![](images/word-formatvorlage-edit.png) |

</div>

:::tip
Erstellen Sie keine neuen Formatvorlagen für Überschriften sonder passen Sie die vorhandenen Vorlagen an. So funktioniert die Nummerierung und das automatische Inhaltsverzeichnis ohne weitere Konfiguration.
:::

#### Formatierungen

- Tabstopps `┗` `┻` `┛`
  - der Cursor springt beim Drücken der Tabulator-Taste `⭾` bis zu diesem Tabstopp.
  - Die Ausrichtung bestimmt, wie der Tabulator-Text ausgerichtet wird.
  - Die Ausrichtung kann durch Doppelklicken auf den Tabstopp geändert werden.
- Linker Einzug `⧋`
  - Der gesamte Absatz wird eingerückt.
- Erstzeileneinzug `▽`
  - Die erste Zeile eines Absatzes kann eigens kontrolliert werden.

![](images/word-tabstopps.png)

:::tip
Unter **Ansicht > Anzeige** kann das Lineal eingeblendet werden.
:::

- Textausrichtung (Links, Zentriert, Rechts, Blocksatz)
- Auflistungen
- Rahmen
- Zeilenabstand (der Zeilenabstand innerhalb eines Absatzes)
- Absatzabstand (der Abstand zum vorherigen/nächsten Absatz)

| `Start`                     | `Layout`                     |
| :-------------------------- | :--------------------------- |
| ![](images/word-absatz.png) | ![](images/word-absatz2.png) |


:::tip
Ein Zeilenumbruch im selben Absatz kann mit `Shift+Enter` erzeugt werden.
:::

### Zeichenformat

Einzelne Wörter und Buchstaben/Zeichen lassen sich individuell formatieren. So kann etwa festgelegt werden, ob ein Zeichen kursiv, fett oder unterstrichen dargestellt werden kann.

![](images/word-zeichenformatierung.png)

#### Einfügen

Beim Einfügen von kopiertem Text, bspw. von einer Website, werden auch die Zeichenformate mitkopiert (z.B. Links werden dann farbig angezeigt...). Dies ist nicht immer erwünscht und teilweise soll nur der Text übernommen werden. Dann kann über die Einfüge-Optionen *Nur den Text übernehmen* ausgewählt werden:

![](images/word-paste-options.png)

## Übung

:::aufgabe

Laden Sie das Word-Dokument [ex01-what-is-programming.docx](files/ex01-what-is-programming.docx) herunter.

1. Verschieben Sie die Datei auf OneDrive in den Ordner `OneDrive - Edubern/Informatik/Word/ex01-what-is-programming.docx`
2. Formatieren Sie Ihr Word-Dokument so, dass es am Ende wie in der Vorlage unten aussieht:

<div style={{maxHeight: '350px', overflow: 'auto'}}>

![](images/word-exercise.png)

</div>

:::