# Praktikum Informatik

- Arbeitsweise einer Maschine
- Verständigung mit einer Maschine
  - Einblick in eine Programmiersprache
  - Python
- Alle zwei Wochen


# Heute

- Was ist ein Algorithmus?
- Darstellungsformen von Algorithmen
- RoboZZle



# Schatzsuche

### 5' Verstecken
- in 2er Gruppen ein Schoggi-Schatz verstecken
- Eine Schatzkarte\* anfertigen


# Schatzsuche

### 5' Verstecken
- in 2er Gruppen einen Schoggi-Schatz verstecken
- Eine Schatzkarte\* anfertigen

### 3' Suchen
- Schatzkarte mit einer anderen Gruppe tauschen
- 🍫🍫 Suchen


# \*Schatzkarte

- Die Schatzkarte beginnt bei der Markierung ⬆️
- Für die Beschreibung dürfen **ausschliesslich** folgende Symbole verwendet werden:
  - ↑ (=1 Schritt vorwärts)
  - ↰ (=90° nach links)
  - ✅ (=gefunden)


# \*Schatzkarte

- Die Schatzkarte beginnt bei der Markierung ⬆️
- Für die Beschreibung dürfen **ausschliesslich** folgende Symbole verwendet werden:
  - ↑ (=1 Schritt vorwärts)
  - ↰ (=90° nach links)
  - ✅ (=gefunden)

In dieser Sprache:
- gibt es "`↱`" nicht ⚠️
- kann z.B. "`3x ↑`" nicht interpretiert werden ⚠️



# Algorithmus

> «Ein Algorithmus beschreibt die Methode, mit der eine Aufgabe gelöst wird. Ein Algorithmus besteht aus einer Folge von Schritten, deren korrekte Abarbeitung die gestellte Aufgabe löst. Die Abarbeitung oder den Vorgang selbst bezeichnet man als Prozeß.»
>
> *Les Goldschlager/Andrew Lister: Informatik, 1984*

Note:
| Prozess            | Algorithmus   | Typischer Schritt                 |
| :----------------- | :------------ | :-------------------------------- |
| Kranich falten     | Faltanleitung | Papier entlang einer Linie falten |
| Zimtsterne backen  | Rezept        | Eier schaumig schlagen            |
| Musikstück spielen | Notenblatt    | Ein c' spielen                    |


## Spezielle Sprachen

- Fachsprache oder symbolische Sprache


## Spezielle Sprachen

- Fachsprache oder symbolische Sprache
- kürzere und klarere Beschreibung der einzelnen Schritte


## Spezielle Sprachen

- Fachsprache oder symbolische Sprache
- kürzere und klarere Beschreibung der einzelnen Schritte
- Einheitliche Verwendung = universell einsetzbar



# Struktur

- Definiert die Reihenfolge der Einzelschritte 
- Die Struktur eines Algorithmus ist universell


# Strukturen
- Sequenz 👣
- Wiederholung 🔁
- Bedingte Ausführung ⑂
- Unterprogramm: 🏷 Beschriftung einer Sequenz
- Parameter ⊕ ⊖

Note:
Sequenz: Es wird ein Schritt nach dem anderen abgearbeitet.
Wiederholung: Einer oder mehrere Schritte werden eine bestimmte Anzahl mal wiederholt.
Bedingte Ausführung: bspw. Backen: Grundmasse gleich, für Schokokuchen oder Fruchtkuchen unterschiedlich...
Unterprogramm: Mehrere Schritte können zusammengefasst und mit einem Namen versehen werden. Anstatt immer wieder alle Schritte aufzuführen, wird nur der Name angegeben.
Parameter: Das Ergebnis eines Algorithmus kann variiert werden durch Werte, welche bei jeder Ausführung neu festgelegt werden.



# Endlichkeit

⚠️ Ein Algorithmus muss nach endlich vielen Einzelschritten enden


# Al-Chwarizmi

Wer hats erfunden?

«Algorismus»

![](images/al-chwarizmi.png)

Note:
Abu Dschaʿfar Muhammad ibn Musa al-Chwārizmī war ein **Mathematiker** und **Universalgelehrter**. Er stammte zwar aus dem **iranischen** Choresmien, verbrachte jedoch den größten Teil seines Lebens in Bagdad und war dort im «Haus der Weisheit», einer Art Akademie, tätig.

In der **lateinischen Übersetzung** eines Werkes von Al-Chwarizmi wurde sein Name als **«algorismus»** geschrieben. Davon leitet sich der heutige Begriff «Algorithmus» ab.



# Falten

<div style="background: white">

![](images/origami-box.svg)
</div>

Note:
3 Arten von Schritten
- **Falten**: Durch eine gestrichelte Linie wird angedeutet, wo gefaltet werden soll. Der Pfeil gibt an, in welche Richtung gefaltet wird.
- **Falz machen**: Durch Hin- und Zurückfalten wird ein Falz erzeugt. Dies wird durch einen Pfeil angedeutet, der hin und zurück zeigt.
- **Drehen**: Durch einen Pfeil zwischen zwei Abbildungen wird angezeigt, dass das Papier entsprechend umgedreht werden soll.


# Bauanleitung

<div style="background: white">

![](images/ikea-norden.svg)
</div>

Note:
- Schritt
- Wiederholung
- Bedingte Ausführung (ein Stück fehlt)


# Noten

<div class="full" style="background: white">

![](images/music-step.svg)
</div>

Note:
Schritt


# Noten

<div class="full" style="background: white">

![](images/music-repeat.svg)
</div>

Note:
Wiederholung


# Noten

<div class="full" style="background: white">

![](images/music-conditional.svg)
</div>

<audio controls>
    <source src="/sounds/music-conditional-1.mp3" type="audio/mpeg"/>
</audio>
<audio controls>
    <source src="/sounds/music-conditional-2.mp3" type="audio/mpeg"/>
</audio>

Note:
Bedingte Ausführung


# Noten

<div class="full" style="background: white">

![](images/music-parameter.svg)
</div>

Note:
Parameter


# Flussdiagramm

<div style="background: white">

![Flussdiagramm](images/flowchart-spaghetti.svg)
</div>

Note:
**Programmablaufplan** ist eine grafische Darstellungsform eines Algorithmus. Es besteht aus Elementen, welche einzelne Schritte des Algorithmus darstellen.
- Pfeile geben die Reihenfolge an
- Napoletana ruft Spaghetti-Programm auf
- Parameter: n Portionen




# RoboZZle

<div class="small">

![](images/RoboZZle_a1.png)
</div>

- **Ziel**: Algorithmus finden, welcher alle Sterne auf dem Spielfeld erwischt
- **Symbole**: ↑, ↰, ↱
- **Unterprogramme**: `F1`, `F2`
- **Bedingte Ausführung**: Farben