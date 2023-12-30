---
sidebar_custom_props:
  id: f20b6803-3b70-40cd-8ba8-3f9be83b2a7d
---
# ⭐ Daten speichern & laden

Das NumTrip Spiel startet derzeit jedesmal wenn wir es starten von neuem. Das heisst, der Spielstand des letzten Spiels wurde nicht gespeichert. Die spielende Person muss also entweder jedes Spiel in einem Zug durchspielen, oder verliert Ihren Fortschritt. 

Moderne Programme und Spiele haben meistens die Möglichkeit, Daten und Informationen permanent zu speichern. Das bedeutet, die Daten sind auch nach dem stoppen und Neustarten des Programms noch vorhanden. 

## Wie funktioniert speichern?

Wenn wir in Python eine Variable generieren wird diese im Arbeitsspeicher (RAM) des Rechners gespeichert. Wie Ihr bestimmt wisst, ist der Arbeitsspeicher _flüchtig_. Das heisst, wenn der Computer ausgeschalten wird oder das Programm beendet wird gehen die Informationen verloren. Der einzige Speicher, der auch nach einem Neustart noch vorhanden ist, ist die _Festplatte_ (z.B. SSD). Wir brauchen also eine Möglichkeit, die wichtigsten Informationen auf die Festplatte zu speichern. 

Typischerweise funktioniert dies durch Dateien auf dem Computer. Ihr kennt das schon von anderen Programmen. Wenn Ihr z.B. im Word eine Textdatei bearbeitet, werdet Ihr beim speichern gefragt wo die Datei gespeichert werden sollte und wie sie heissen soll. 

![Referenzen](https://support.content.office.net/de-de/media/c587dc7a-7860-48d5-af26-6e275de6f57a.png)

Nachdem dieser Dialog ausgeführt wird ist die Datei permanent auf der Festplatte gespeichert und kann auch wieder aufgerufen werden.

## In Python :mdi[language-python]

Programmiersprachen verwenden oft sogenannte _standardisierte Dateiformate_ um Daten zu Speichern. Diese sind nichts anderes, als eine Abmachung darüber, in welchem Format die Datei gespeichert ist. Wenn Ihr an das Beispiel der Word Datei zurückdenkt fällt euch bestimmt auf, das diese Dateien z.B. die Endung _.docx_ haben. Dies dient dem Zweck, dass andere Programme wissen, in welchem Format die Informationen in dieser Datei gespeichert sind, und wie sie beim öffnen interpretiert werden sollten.

Ein solches Dateiformat ist **JSON**. Dieses kommt ursprünglich von der Programmiersprache _JavaScript_, wurde mittlerweile aber in vielen anderen Sprachen aufgenommen, unter anderem von Python. 

Wenn wir mit JSON arbeiten wollen, importieren wir das Modul dazu ganz einfach:
```py
import json
```

Wir können aber nicht jegliche Variablen direkt in JSON speichern! Dazu benötigen wir eine _Datensammlung_:
```py
daten = {}
```

In diese Datensammlung können wir nun unsere Variablen hineinschreiben. Im folgenden Beispiel wird der Inhalt der Variable `spielfeld` in die Datensammlung `daten` unter dem Namen `spielfeld` geschrieben:
```py
daten['spielfeld'] = spielfeld
```

Wir können beliebig viele Variablen in die selbe Datensammlung packen:
```py
# selbe Datensammlung 'daten' wie oben
daten['hoehe'] = hoehe
```

### Speichern

Wenn die Datensammlung alle Informationen enthält, die wir speichern wollen, können wir diese nun sehr einfach in eine Datei schreiben:
```py
dateiname = 'numtrip.json'
daten = {}
with open(dateiname, 'w') as f:
        json.dump(daten, f)
```

Der `dateiname` ist das selbe, was wir bei Word beim speichern angeben - Der Name der Datei auf dem Computer. Die Option `'w'` steht für _write_ (schreiben) und bedeutet, dass wir die Datei bearbeiten wollen. Das `as datei` bedeutet, dass wir im Programm unter dem Namen `f` (für `file`) auf die geöffnete Datei zugreifen können. 

Sie sehen, dass nach der Zeile, welche die Datei öffnet, ein Doppelpunkt und ein eingerückter Block folgt. Wir können in diesem eingerückten Block mit der Datei arbeiten. Sobald wir den eingerückten Block verlassen, wird die Datei gespeichert und wir haben keinen Zugriff mehr darauf, bis wir sie erneut öffnen.

Letztendlich gibt es nur noch die Zeile `json.dump(daten, datei)`. Diese sagt dem JSON Modul, dass es die Datensammlung `daten` in die geöffnete Datei `f` speichern soll.

### Laden

Wenn wir Informationen in eine Datei gespeichert haben, möchten wir diese natürlich auch wider ins Programm laden. Dies funktioniert ebenfalls sehr ähnlich:
```py
with open(dateiname) as f:
        daten = json.load(f)
        spielfeld = daten['spielfeld']
```
Achtet darauf, dass wir hier auch die `open` funktion von Python benutzen um die Datei zu öffnen, dieses mal fehlt aber die option `w`. Da wir die Daten nur lesen und laden wollen, benötigen wir nicht die Schreibrechte. Die Datei ist jetzt also im _schreibgeschützten_ Modus geöffnet. Mit der offenen datei können wir die Informationen ganz einfach mit Hilfe des JSON moduls wieder in eine Datensammlung laden (`daten`). 
Nun müssen wir nur noch die Informationen aus der Datensammlung in unsere Variablen kriegen. Auf die Einträge in einer Datensammlung wird mit der Notation `meine_datensammlung['mein_eintrag']` zugegriffen.

## Ausprobieren

:::aufgabe
<Answer type="state" webKey="6436d3e7-6f0a-4600-af53-4e0a8c8cf8c7" />

Dateiname
: __EF-Informatik/exercises/io/1-daten-speichern.py__
: __EF-Informatik/exercises/io/2-daten-laden.py__

- Verwenden Sie untenstehende Code-Snippets `daten_speichern.py` und `daten_laden.py` und führen Sie diese auf Ihrem Computer aus. Achten Sie darauf, dass beide im selben Ordner auf Ihrem Computer sind.
- Führen Sie das Snippet `daten_speichern.py` aus. Finden sie die entstandene Datei auf ihrem Computer und schauen Sie sich deren Inhalt in einem Text-Editor an (z.B. VSCode, Notepad, etc.).
- Führen Sie das Snippet `daten_laden.py` aus und schauen Sie sich den Output auf der Kommandozeile an.
- Bonus: Öffnen Sie die Datei erneut im Text Editor und verändern Sie die Teilnehmerliste: Verändern Sie einen Namen, löschen sie einen, oder fügen Sie einen hinzu. Führen Sie danach erneut das Snippet `daten_laden.py` aus. Was fällt Ihnen auf?


```py
import json

def laden(dateiname):
    with open(dateiname) as f:
        datensammlung = json.load(f)
        return datensammlung['teilnehmer:innen']

teilnehmer = laden('daten.json')
print(teilnehmer)
```


```py
import json


def speichern(teilnehmer, dateiname):

    datensammlung = {}
    datensammlung['teilnehmer:innen'] = teilnehmer

    with open(dateiname, 'w') as f:
        json.dump(datensammlung, f)


teilnehmer = ['Anna', 'Bob', 'Theo', 'Karim', 'Robert']

speichern(teilnehmer, 'daten.json')

```
:::