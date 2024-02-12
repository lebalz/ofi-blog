---
sidebar_custom_props:
  id: 00ddb460-744a-4894-b4ae-da205bd3cf21
  source:
    name: S. Rothe, T. Jampen, R. Meyer
    ref: https://informatik.mygymer.ch/base/?b=code&p=206603
---

# 6. Dateiformate erkennen

Eine Datei ist eine Ansammlung binärer Daten, also eine Aneinanderreihung von Bits. Die binäre Darstellung der Datei, in welcher dieser Text gespeichert ist, beginnt so:

`00100011 00100000 01000100 01100001 01110100 01100101 01101001 01100101 01101110 00001010 00101101 00101101 00101101 00001010 00001010 01000101 01101001 01101110 01100101 00100000 01000100 01100001 01110100 01100101 …`

## Dateiformat

Die für eine Datei verwendete Codierung wird auch **Dateiformat** genannt. Anhand der binären Daten alleine ist nicht erkennbar, was für eine Codierung für eine Datei verwendet wurde.

Ohne diese zusätzliche Information können die Daten aber nicht decodiert werden. Bei jeder Datei muss also zusätzlich angegeben werden, welche Codierung für diese Datei verwendet wurde.

Es gibt drei Ansätze, das Dateiformat (also die Codierung) einer Datei zu erkennen:
- Dateiendung
- Magische Bytes
- *Internet Media Type*

## Dateiendung

Eine Dateiendung wie _.docx_ oder _.jpg_ wird an den Dateinamen angehängt. Eine Dateiendung beginnt immer mit einem Punkt. So wird sie vom Dateinamen abgetrennt. Ein Betriebssystem wie Windows oder macOS verwendet die Dateiendung, um zu ermitteln, mit welcher Anwendung eine Datei geöffnet werden soll.

## Magische Bytes

Viele Dateiformate verwenden magische Bytes am Dateianfang zur Kennzeichnung, wie die enthaltenen Informationen codiert sind.

Beispielsweise beginnt jede _.jpg_-Datei mit der Bitfolge `11111111 11011000 11111111`. Diese Darstellung ist etwas lang und umständlich, daher wird häufig das Hexadezimalsystem (16-er System) verwendet.

## *Internet Media Type*

Der *Internet Media Type* oder *MIME-Type* ist ein Standard, mit welchem Codierungen für die Übermittlung von Daten im Internet angegeben werden. So teilt ein Webserver einem Browser per *Internet Media Type* mit, ob er einen Text, ein Bild oder ein Video übermittelt. Auch bei der Übermittlung von E-Mails wird dieses System verwendet.

Ein *Internet Media Type* besteht immer aus einem Haupt- und einem Untertype. Es gibt folgende Haupttypen:

<div className="slim-table">

| Typ           | Bedeutung                         |
| :------------ | :-------------------------------- |
| `application` | anwendungsspezifische Codierungen |
| `audio`       | Audiodaten                        |
| `image`       | Grafiken                          |
| `text`        | für Text                          |
| `video`       | für Videomaterial                 |

</div>

## Wichtige Dateiformate

<div className="slim-table">

| Bezeichnung               | Dateiendung      | Internet Media Type               | Magische Bytes                                    |
| :------------------------ | :--------------- | :-------------------------------- | :------------------------------------------------ |
| JPEG-Bild                 | _.jpg_ / _.jpeg_ | `image/jpeg`                      | `FF D8 FF`                                        |
| Portable Network Graphics | _.png_           | `image/png`                       | `89 50 4E 47 0D 0A 1A 0A`                         |
| ZIP-Datei                 | _.zip_           | `application/zip`                 | `50 4B 03 04`                                     |
| Word-Datei                | _.docx_          | `application/vnd.openxmlformats…` | `50 4B 03 04`<br/>(ist eigentlich eine ZIP-Datei) |
| Excel-Datei               | _.xlsx_          | `application/vnd.openxmlformats…` | `50 4B 03 04`<br/>(ist eigentlich eine ZIP-Datei) |
| Portable Document Format  | _.pdf_           | `application/pdf`                 | `25 50 44 46 2D`                                  |
| Textdatei                 | _.txt_           | `text/plain`                      | reine Textdatei<br/>(ohne magische Bytes)         |
| Webseite                  | _.html_          | `text/html`                       | reine Textdatei<br/>(ohne magische Bytes)         |
| Python-Programm           | _.py_            | `text/python`                     | reine Textdatei<br/>(ohne magische Bytes)         |

</div>

:::aufgabe[Verlorene Dateiendungen]
<Answer type="state" webKey="204e8e91-a578-43c2-a516-e655dd1423b0" />

Bei den folgenden Dateien ging die Dateiendung verloren. Finden Sie mit https://hexed.it/ heraus, welche Dateiendung die jeweilige Datei hat, fügen Sie die Dateiendung hinzu und öffnen Sie diese.

[download](./assets/files.zip)


<Answer type="text" webKey="56a24e71-16af-409b-9e36-9049e30413b3">

- file1: 
- file2: 
- file3:

</Answer>

:::


