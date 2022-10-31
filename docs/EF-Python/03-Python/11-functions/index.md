---
sidebar_custom_props:
  id: de0fda33-050b-4e7e-8391-540eb8860e03
  source:
    name: sdg
    ref: https://gitlab.gbsl.website/gymbefin23/material/-/snippets/13
---

# Funktionen

## Kurz zusammengefasst

### Funktionsaufruf
```py live_py slim
def dreieck():
    print('*')
    print('* *')
    print('* * *')

dreieck()
```

### ... mit Parameter

```py live_py slim
def dreieck(size):
    for i in range(size + 1):
        print('* ' * i)

dreieck(3)
dreieck(5)
```

### ... mit zwei Parameter

```py live_py slim
def dreieck(size, zeichen):
    for i in range(size + 1):
        print(zeichen * i)

dreieck(3, '* ')
dreieck(5, '👍')
```

### ... mit Standardwert

```py live_py slim
def dreieck(size, zeichen = '* '):
    for i in range(size + 1):
        print(zeichen * i)

dreieck(3)
dreieck(5, '👍')
```

### Rückgabewerte
```py live_py slim
def pythagoras(a, b):
    radikand = a**2 + b**2
    sqrt = radikand ** 0.5
    return sqrt

c = pythagoras(3, 4)
print(c)
```

## Einleitung
Sie haben in Ihren Programmen schon lange **Funktionen** gebraucht, vielleicht ohne es zu merken. Zum Beispiel wenn Sie `print(...)` geschrieben haben. Aber auch `math.sqrt(...)` (Wurzel ziehen) und `math.ceil(...)` (Abrunden), welche Sie im Primzahlen-Programm gebraucht haben, sind Funktionen. Allerdings stammen diese zwei aus einem **Modul**, welches Sie mit `import math` zuerst in Ihr Programm importieren mussten.

Das hinschreiben eines **Funktionsnamen** in einem Programm  bezweckt bei der **Ausführung** des Programms, dass an dieser Stelle die betreffende Funktion ausgeführt wird. Man spricht von einem Funktions-**Aufruf**.

Sobald ein Programm länger, als nur ein paar Zeilen ist, spielen Funktionen eine wichtige Rolle. Man kann nämlich auch selber Funktionen schreiben, die man dann an verschiedenen Stellen aufrufen kann. Das hat folgende Vorteile:

Übersichtlicher
: Das Programm wird **übersichtlicher** und besser verständlich, vor allem, wenn Sie für Ihre Funktionen gute Namen wählen.
: Die Lesbarkeit ist eine wichtige Qualität von Programmen, weil diese meistens nicht nur von der Autorin bearbeitet werden.

Kein doppelter Code
: Man kann die Wiederholung von gleichlautenden Programmteilen **vermeiden**. 
: Wenn dann später eine Änderung am Programm nötig wird, oder ein Fehler zu korrigieren ist, so muss man nur die betreffende Funktion ändern.

Doch was sind Funktionen eigentlich?

> Eine Funktion ist eine **Sequenz** (Abfolge) von (Python-)Anweisungen, welche unter einem eigenen **Namen**, gefolgt von `()`, zusammengefasst werden. Die Funktion kann als neuer **Befehl** verstanden werden, welche dann an anderen Stellen im Programm **aufgerufen** werden kann, indem man den Namen und `()` hinschreibt.

:::cards
*** --max-width=47% --min-width=300px
```py reference title="1-sequence.py"
https://github.com/lebalz/ofi-blog/blob/main/docs/EF-Python/03-Python/11-functions/assets/1-sequence.py
```
*** --max-width=47% --min-width=300px
```py reference title="2-function.py"
https://github.com/lebalz/ofi-blog/blob/main/docs/EF-Python/03-Python/11-functions/assets/2-function.py
```
:::

Die Beispiele `1-sequence.py` und `2-function.py` zeigen zweimal dasselbe Programm, einmal ohne Funktion, einmal mit Funktion. Im zweiten Beispiel sieht man, wie die Funktion `count_down()` definiert wird (Zeile 3 bis 14). In Zeile 3 steht der Name der Funktion, während die Zeilen 4 bis 14 die Anweisungen enthalten, welche zur Funktion gehören.

Zeile 17 zeigt, wie die Funktion `count_down()` aufgerufen wird.

# Funktionen mit Parameter
Damit Funktionen noch flexibler eingesetzt werden können, kann man ihnen beim Aufruf bestimmte Werte in Form von **Parametern** mitgeben. Dazu muss man bei der **Definition** der Funktion zwischen den `()` die Namen der Parameter angeben. Diese können dann innerhalb der Funktion wie Variablen verwendet werden.

Beim **Aufruf** der Funktion gibt man in den `()` die **aktuellen Werte** an, mit denen die Funktion anschliessend arbeiten soll. Man nennt diese Werte beim Aufruf die **Argumente**. Das können Zahlen, Texte, aber auch die Namen von anderen Variablen sein.

:::important **Wichtig**
Parameter können nur innerhalb der Funktion verwendet werden, zu welcher Sie gehören. Ausserhalb der Funktion sind sie unbekannt. Weist man einem Parameter innerhalb einer Funktion einen neuen Wert zu, so geht dieser beim Verlassen der Funktion verloren.
:::


Das nächste Beispiel `3-function-with-parameter.py` zeigt, wie die Funktion `count_down()` mit einem Parameter `zahl` flexibler gemacht werden kann. Jetzt kann beim Aufruf der Funktion angegeben werden, wie lange der Count-down dauern soll. Das hat zur Folge, dass die Anweisungen für die Eingabe der gewünschten Count-down-Zeit durch die Benutzer:in zurück ins Hauptprogramm verlagert werden müssen. Dies ist aber sowieso besser, da die Funktion so viel flexibler einsetzbar ist. Die Count-down-Zeit kann ja aus einer beliebigen Quelle stammen, nicht nur von der Konsole.

```py reference title="3-function-with-parameter.py"
https://github.com/lebalz/ofi-blog/blob/main/docs/EF-Python/03-Python/11-functions/assets/3-function-with-parameter.py
```


# Funktionen mit Rückgabewert
Viele Funktionen erzeugen bei ihrer Ausführung ein Resultat, welches dann ausserhalb der Funktion weiterverwendet werden kann. Dazu gibt es die Möglichkeit mit `return ...` einen Wert als Resultat zurückzugeben. Die Funktion wird dann verlassen und der Wert steht an der Stelle des Aufrufs zur Verfügung und kann dort zum Beispiel einer weiteren Variablen zugewiesen werden.

Im foglenden Beispiel `4-function-with-return.py` ist dieses Prinzip bei der Funktion `lies_zahl()` zu sehen, welche als Resultat die eingegebene Zahl zurückgibt.

```py reference title="4-function-with-return.py"
https://github.com/lebalz/ofi-blog/blob/main/docs/EF-Python/03-Python/11-functions/assets/4-function-with-return.py
```

:::aufgabe 1. Debuggen
<Answer type="state" webKey="032b1b16-de7c-44e0-a4be-3318120dae00" />

Dateinamen
: __EF-Informatik/exercises/fkt/1-sequence.py__
: __EF-Informatik/exercises/fkt/2-function.py__
: __EF-Informatik/exercises/fkt/3-function-with-parameter.py__
: __EF-Informatik/exercises/fkt/4-function-with-return.py__

Laden Sie obige Code-Beispiele in Ihr Repository herunter, und **debuggen** Sie die Beispiele Schritt für Schritt.

Markieren Sie die Aufgabe als erledigt.
:::


:::aufgabe 2. Sternchen-Rechteck

<Answer type="state" webKey="5ab1b7f2-04d6-42bc-a5bc-da615117c83f" />

Dateiname
:  __EF-Informatik/exercises/fkt/sternchen.py__

```
******
*    *
*    *
*    *
*    *
******
```

Gesucht ist ein Programm, welches obige Figur auf der Konsole ausgibt.

- Schreiben Sie **zwei Funktionen** für die Ausgabe der beiden unterschiedlichen Zeilen. Verwenden Sie diese Funktionen dann im Hauptprogramm um die Figur als ganzes auszugeben.
- **Parametrisieren** Sie in einem zweiten Schritt die Funktionen so, dass die Breite der Figur (in Anzahl Zeichen) beim Aufruf der Funktionen angegeben werden kann.
- Machen Sie in einem dritten Schritt aus dem Hauptprogramm auch eine Funktion, bei welcher über je einen Parameter die die Breite der Figur (in Anzahl Zeichen) und Höhe der Figur (in Anzahl Zeilen) angegeben werden kann.
- Schreiben Sie ein neues Hauptprogramm, welches diese letzte Funktion mit einigen Werten für die Breite und Höhe der Figur aufruft.

Was passiert, wenn man Ihre Funktionen mit negativen Werten aufruft? Wie könnte man das Lösen?

<Answer type="text" webKey="2d03dc75-1c56-435d-aa5d-972ec40719cb" />

Comitten und pushen Sie Ihre Lösung und markieren Sie diese Aufgabe als erledigt.

<Solution webKey="c215f042-1869-489d-9ecb-8f0843470632">

```py reference title="sternchen.py"
https://github.com/lebalz/ofi-blog/blob/main/docs/EF-Python/03-Python/11-functions/assets/sternchen-lsg.py
```
</Solution>
:::