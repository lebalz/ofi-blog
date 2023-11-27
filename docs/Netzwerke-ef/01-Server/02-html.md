---
sidebar_custom_props:
  id: 5c096b05-2605-408d-b423-19ca6e72bdd6
---
# 2. HTML

![HTML Logo --width=200](./images/HTML5_LOGO.svg)

Webseiten sind Textdateien, deren Inhalt in der Markup Sprache __HTML__ geschrieben ist. Sie haben im Snippet ein Beispiel in der Datei `hello.html`.

HTML
: Hypertext Markup Language


HTML ist **keine Programmiersprache** - sie definiert lediglich in einem für den Computer eindeutigen Art und Weise die **Struktur** eines Dokuments. Ähnlich wie Markdown werden hier Textstellen mit sog. Tags markiert. Dadurch kann man festlegen, ob eine bestimmter Text als Überschrift, als eigener Absatz, in einer Tabelle, etc. dargestellt werden soll. Einige Tags sind Paare aus einem öffnenden und einem schliessenden Tag, andere stehen für sich alleine.

<div className="slim-table">

| Tag                          | Markdown           | Beschreibung           |
| :--------------------------- | :----------------- | :--------------------- |
| `<h1>Ü 1</h1>`               | `# Ü 1`            | Überschrift 1. Ordnung |
| `<h2>Ü 2<(h2>`               | `## Ü 2`           | Überschrift 2. Ordnung |
| `<h3>Ü 3<(h3>`               | `### Ü 3`          | Überschrift 3. Ordnung |
| `<p />`                      | Leerzeile          | Absatz                 |
| `<br />`                     | Doppelte Leerzeile | Zeilenumbruch          |
| `<b>fett</b>`                | `**fett**`         | Fettschrift            |
| `<i>kursiv</i>`              | `*kursiv*`         | Kursivschrift          |
| `<a href="URL">Linktext</a>` | `[Linktext](URL)`  | Link                   |
| `<img src="URL" />`          | `![](URL)`         | Bild                   |

</div>

Eine gute Einführung und Referenz in HTML finden Sie unter 👉 https://www.w3schools.com/html/default.asp.


:::info[Playground]
Hier können Sie einzelne Tags ausprobieren (achtung, wird nicht gespeichert):

```jsx live_jsx
<body>
    <h1>Hello</h1>
    <p>Wenn Sie dies sehen, so haben Sie eine erfolgreiche Abfrage auf den <b>SimlpeWebServer</b>
    getätigt.</p>
    <h2>Todos vor den Ferien</h2>
    <ul>
        <li>EF Informatik</li>
        <li>Nach Hause</li>
        <li>Fertig...</li>
    </ul>
    <img src="https://www.gbsl.ch/wp-content/uploads/2020/07/Header-GBSL-1170x450.jpg" width="400"/>
</body>
```
:::

:::aufgabe
<Answer type="state" webKey="fa16f75c-8013-44c4-94b2-910fe1029cdb" />

- Erstellen Sie eine zweite Webseite in Ihrem Server, mit einem kleinen Steckbrief von Ihnen. (Hilfestellung: 👉 https://www.w3schools.com/html/default.asp).
- Verlinken Sie Ihre eigene Seite in der schon bestehenden Seite `hello.html`, indem Sie dort einen Link auf Ihre eigene Seite einfügen. Wie man das macht sehen Sie hier 👉 https://www.w3schools.com/html/html_links.asp.
- Testen Sie Ihre Webseite im Browser.
- Machen Sie einen Screenshot von Ihrer Seite und laden Sie diese als Antwort hoch.

<Answer type="state" webKey="9682cd41-7336-4ea4-900f-5a882b93ad91" />
:::