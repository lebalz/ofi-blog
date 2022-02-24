---
title: 1. Huffman-Codierung
---

import Solution from '@site/src/components/Solution';
import Answer from '@site/src/components/Answer';

# 1. Huffman-Codierung [^1]

David Huffman hat 1952 ein Verfahren entwickelt, mit welchem Zeichen platzsparender codiert werden können. Seine Idee ist, dass Zeichen, welche häufig im Text vorkommen, einen kürzeren Code erhalten, als Zeichen, welche selten im Text vorkommen.

:::info Alltagsbezug
Die Huffman-Codierung und ähnliche Verfahren werden für das Komprimieren von Dateiformaten wie **DOCX**, **JPG** oder **MP3** eingesetzt. [^2]
:::

## Codebaum

Ein Codebaum ist eine Struktur mit einem Startknoten. Von diesem aus geht es entweder nach links oder rechts unten weiter. Eine `0` im Code bedeutet nach links gehen, eine `1` nach rechts gehen. Wenn ein Knoten mit einem Buchstaben erreicht wird, hat man ein Zeichen decodiert, man beginnt wieder von vorne.

![](images/01-huffman/huffman-anna.svg)

## Erstellen eines Huffman-Baumes

Am Beispiel der Codierung des Texts «EINTRITT FREI» soll der Huffman-Algorithmus erläutert werden.

Zuerst zählt man, wie oft jedes Zeichen im Text vorkommt und erstellt eine Häufigkeitstabelle.

<div className="slim-table">

| Zeichen | Häufigkeit |
| :------ | ---------: |
| E       |          2 |
| I       |          3 |
| N       |          1 |
| T       |          3 |
| R       |          2 |
| ␣       |          1 |
| F       |          1 |
</div>

Nun geht es darum, einen Codierungsbaum zu erstellen. Die Häufigkeiten der Buchstaben bilden je einen Knoten. Die Häufigkeit steht im Knoten, der Buchstaben darunter. **Die Knoten werden nach Häufigkeit sortiert**:

![](images/01-huffman/huffman-eintrittfrei-1.svg)

Nun werden die **zwei Knoten mit den kleinsten Häufigkeiten** an einen neuen Knoten angehängt. Der neue Knoten enthält die **Summe der Häufigkeiten** der ursprünglichen Knoten:

![](images/01-huffman/huffman-eintrittfrei-2.svg)

<span className="badge badge--success">Dies wird wiederholt</span> bis alle Knoten miteinander verbunden sind. <b>Wenn zwei Knoten die gleiche Häufigkeit haben, spielt es keine Rolle, welcher gewählt wird</b>. Im nächsten Schritt wird der kleinste Knoten «N» mit «R» zusammengefasst. Man könnte aber «N» auch mit «E» zusammenfassen.

![](images/01-huffman/huffman-eintrittfrei-3.svg)

Wichtig ist, dass **immer die kleinsten Knoten zusammengefasst** werden. Hier werden die zwei Knoten mit Häufigkeit 2 zusammengefasst:

![](images/01-huffman/huffman-eintrittfrei-4.svg)

![](images/01-huffman/huffman-eintrittfrei-5.svg)

![](images/01-huffman/huffman-eintrittfrei-6.svg)

![](images/01-huffman/huffman-eintrittfrei-7.svg)

Wenn der Baum fertig ist, werden alle Äste, welche nach links zeigen, mit einer «0» markiert, alle die nach rechts zeigen mit einer «1».

![](images/01-huffman/huffman-eintrittfrei-8.svg)

Nun kann eine Codierungstabelle erstellt werden, indem der Code für jedes Zeichen vom Baum abgelesen wird:

<div className="slim-table">

| Zeichen | Code |
| :------ | ---: |
| I       |   00 |
| T       |   01 |
| R       |  100 |
| N       |  101 |
| E       |  111 |
| ⎵       | 1100 |
| F       | 1101 |

</div>

## Zusammenfassung

[@youtube](https://www.youtube-nocookie.com/embed/eSlpTPXbhYw)

## Übungen


:::aufgabe 1. Decodieren

![](images/01-huffman/huffman-anna.svg)

Decodieren Sie diese Bitfolge mit dem obenstehenden Codebaum. Das Symbol `⎵` steht für das Leerzeichen.

`0111101011000110110101`


<Answer type="string" webKey="c7b6af35-fd40-4c50-8298-c3692277d3e4" solution="ANNAS ANANAS" sanitizer={(val) => val.trim().toUpperCase()} />

:::

:::aufgabe 2. Huffman-Codierung 1

1. Erstellen Sie zum Wort «MISSISSIPPI» eine Häufigkeitstabelle.
2. Erstellen Sie einen Huffman-Baum
3. Codieren Sie das Wort.

<Answer type="text" webKey="04c0acd5-329d-4ef9-a114-7e46294d5cb6" />
<Solution webKey="990f599b-58ac-4c72-a2a4-d08482a0ca1c">

| Zeichen        | M    | P    | I    | S    |
| :------------- | :--- | :--- | :--- | :--- |
| **Häufigkeit** | 1    | 2    | 4    | 4    |

![](images/01-huffman/huffman-mississippi-5.svg)

Codierung: `100110011001110110111`, Total 21 Bit
</Solution>

:::

:::aufgabe 3. Huffman-Codierung 2

1. Erstelle zum Wort «EXTERNER EFFEKT» eine Häufigkeitstabelle.
2. Erstelle einen Huffman-Baum
3. Codiere das Wort.

<Solution webKey="990f599b-58ac-4c72-a2a4-d08482a0ca1c">

| Zeichen        | X    | N    | K    | T    | R   | F   | E   |
| :------------- | :--- | :--- | :--- | :--- | --- | --- | --- |
| **Häufigkeit** | 1    | 1    | 1    | 2    | 2   | 2   | 5   |


Codierung: ``, Total Bit

</Solution>

:::


[^1]: Quelle: [S. Rothe, T. Jampen, R. Meyer](https://informatik.mygymer.ch/base/?b=code&p=597080)
[^2]: Quelle: [Wikipedia: Huffman coding](https://en.wikipedia.org/wiki/Huffman_coding#Applications)
