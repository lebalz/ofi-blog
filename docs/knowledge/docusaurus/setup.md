---
sidebar_custom_props:
  id: e8d74888-0272-40dc-ba7c-1e3f7891f90b
---

# Docusuaurus

# Docusaurus
- [Docusaurus](https://docusaurus.io/)

## Voraussetzungen
- [VS Code](https://code.visualstudio.com/) Ein Texteditor für das Schreiben und Hinzufügen der Webseiteninhalte
- [git](https://git-scm.com/) Ein Versionsmanager (wird verwendet um die Seite zu veröffentlichen)
- [node](https://nodejs.org/de/) Eine Javascript-Laufzeitumgebung
- [yarn](https://classic.yarnpkg.com/lang/en/)  Ein Paketmanager für die Installation von Bibliotheken

## Webseite erstellen

Damit wir uns nicht zu stark um das Aussehen/Mobile Ansicht/Darkmode etc. kümmern müssen, verwenden wir [Docusaurus](https://docusaurus.io/). Die Schritte zum Erstellen einer neuen Seite sind auf der [Docusaurus-Seite](https://docusaurus.io/docs/installation) erklärt.

Der Befehl

```sh
npx create-docusaurus@latest my-website classic --typescript
```

erzeugt einen neuen Ordner `my-website`. Diesen öffnen wir nun in VS-Code.

Über `Terminal > New Terminal` wird ein neues Eingabefenster (direkt in VS Code) erzeugt. Mit dem Befehl `yarn run start` wird die Webseite gestartet und in einem Browser geöffnet. (Falls nicht, kann sie unter http://localhost:3000 abgerufen werden).

Das Grundgerüst ist vorhanden, aber noch nicht nach unserer Vorstellung. In der Datei `docusaurus.config.json` können viele Grundeinstellungen festgelegt werden:

## Einfacheres Handling

```sh
# fügt die Möglichkeit für SASS-Styled css hinzu
yarn add docusaurus-plugin-sass sass
# .css -> .scss
mv ./src/css/custom.css ./src/css/custom.scss
```

```js title=docusaurus.config.js
{
    /*...*/
    plugins: ['docusaurus-plugin-sass'],
    /*...*/
}
```

## Github Actions

Erstelle einen neues Dokument `.github/__workflows/documentation.yml`
