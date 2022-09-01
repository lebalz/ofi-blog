---
sidebar_custom_props:
  id: 975c2237-7335-428d-96db-2e7f507c1d31
---

# 4. Fehler

Sie haben bereits festgestellt, dass Python sehr pingelig ist was Tippfehler und die präzise Verwendung von Klammern, Anführungszeichen, Doppelpunkten und Leerzeichen angeht. Jede Sprache hat seine eigenen Regeln, wie Wörter und Sätze strukturiert sein müssen. Diese Regeln sind allgemein bekannt als die **Syntax** einer Sprache. Bei Programmiersprachen wird mit der Syntax festgelegt, welche Wörter, in welcher Reihenfolge und in welchem Kontext erlaubt sind.

## Syntax Fehler (syntax errors)

Syntax Fehler sind kleine Fehler in einem Programm. Da das Programm nicht von einem Mensch, sondern von einem Computer "gelesen" und interpretiert wird, reicht ein Tippfehler, ein fehlendes Komma oder eine fehlende Klammer, dass das Programm nicht mehr verstanden werden kann.

Die Python Sprache setzt sich aus folgenden Elementen zusammen:
- **Schlüsselwörter** (*Statements*): Wörter oder Zeichen, die ohne Anführungszeichen und ohne Klammern geschrieben werden. z.B. `import`, `from` oder `for`, aber auch `:` oder `*`. Sie müssen in einer vordefinierten Reihenfolge vorliegen, damit diese von Python verstanden werden. *([↩ alle Schlüsselwörter](/python-keywords))*
- **Befehle** (Unterprogramme, *Funktionen*): vordefinierte Befehle, die mit einer runden Klammer aufgerufen werden. z.B. `print('hello')`
- **Variablen**: Namen, die einen Wert enthalten

:::caution Häufigste Ursachen
- Fehler bei **Schlüsselwörtern**
- vergessene oder falsch eingesetzte **Feldtrenner** (z.B. `:`)
- Falsche Anordnung von Schlüsselwörtern/Feldtrennern
:::

### Beispiele

:::flex --min=250px
```py live_py slim
frm turtle import *
forward(100)
```
***
```py live_py slim
from turtle import *
goto(100 50)
```
***
```py live_py slim
from turtle import *
for i in range(4)
    forward(25)
    right(90)
```
***empty
:::

:::aufgabe Fehler finden
<Answer type="state" webKey="02a77086-17d0-4045-90dd-b47286b7110d" />

Untersuchen Sie obenstehende Programmschnipsel. Was sagen Ihnen die Fehlermeldungen?

- Auf welcher Zeile steht die Art des Fehlers?
- Wo finden Sie Hinweise auf den Fehler? Flicken Sie sie...

:::flex --min=250px
```py live_py title=error1.py id=6cdb7162-bc67-4b3b-8879-93cef97a10a5
frm turtle import *
forward(100)
```
***
```py live_py title=error2.py id=d3d13806-be6e-4043-8375-8208989328fc
from turtle import *
goto(100 50)
```

:::finding Hinweis
Was macht der Befehl `goto`? Schauen Sie die Funktionsweise unter [Turtle Befehle#goto(x, y)](100-turtle-commands.md#gotox-y) nach
:::

***
```py live_py title=error3.py id=8f6d207b-397a-4c54-9812-f49956ccfef8
from turtle import *
for i in range(4)
    forward(25)
    right(90)
```
***empty
:::
<Solution webKey="d775eeeb-21a2-479c-aba3-24a3173b9fe1">

Die Fehlermeldung gibt den Hinweis, was falsch ist.

**error1.py**:
- Zeile 1: Tippfehler, `from`

**error2.py**:
- Zeile 2: Vergessenes Komma bei `goto(100, 50)`

**error3.py**:
- Zeile 2: Vergessenes `:` am Ende der Zeile

</Solution>

:::

## Namens Fehler (`NameError`)

Liegt ein Fehler vor, der nicht bei Schlüsselwörtern (oder deren Anordnung) vorliegt, so handelt es sich oft um einen Namens-Fehler (`NameError`). Es wird also versucht, ein Unterprogramm zu öffnen, das aber unter diesem Namen nicht gefunden werden kann.

:::caution Häufigste Ursachen
Die häufigste Ursachen von `NameError`s sind
- Vertipper im Namen des Befehls
- nicht `importierte` Befehle (z.B. `from turtle import *` fehlt)
:::

### Beispiele
```py live_py slim
from turtle import *
forwrd(100)
```

Der angegebene Befehl `forwrd` kann nicht gefunden werden, da er weder in einer importierten Bibliothek, noch im aktuellen Programm gefunden werden kann.

Der gleiche Fehler tritt auf, wenn der Befehl zwar richtig geschrieben wird, das Importieren aber vergessen geht:

```py live_py slim
forward(100)
```

:::aufgabe Fehler finden
<Answer type="state" webKey="4752b4a9-6a92-49fc-8641-40fa210f6113" />

Finden und lösen Sie die entstandenen Fehler

```py live_py title=error.py id=2ec619fd-b01e-431c-84d2-227c5da79f6e
from math import ceil, floor

print('15.3 gerundet =', round(15.3))
print('15.8 gerundet =', round(15.8))
print('15.3 aufgerundet =', ceyl(15.3))
print('15.8 abgerundet =', flor(15.8))

```

<Hint>

Suchen Sie die fehlerhaften Befehle in Kombination mit `Python` auf Google, bspw. `python ceyl`.
</Hint>
<Solution webKey="d775eeeb-21a2-479c-aba3-24a3173b9fe1">

Zwei Namensfehler, die Fehlermeldung sagt die Zeilennummer und schlägt den richtigen Befehl vor:
1. Zeile 5
    ```error
    File <string>, line 5, in <module>
    NameError: name 'ceyl' is not defined. Did you mean: 'ceil'?
    ```

2. Zeile 6
   ```error
    File <string>, line 6, in <module>
    NameError: name 'flor' is not defined. Did you mean: 'floor'?
    ```

</Solution>
:::


## Einrückungsfehler (`IndentationError`)

Python erwartet nach jedem Doppelpunkt `:`, dass ein **eingerückter** Codeblock kommt. Falls kein eingerückter Codeblock gefunden wird, entsteht ein `IndentationError`. Wird jedoch fälschlicherweise eine Zeile eingerückt, so wird ebenfalls dieser Fehler angezeigt.

:::caution Häufigste Ursachen
- Die nächste Zeile nach einem Doppelunkt `:` ist nicht eingerückt
- Eine Zeile ist fälschlicherweise eingerückt
- ein Leerschlag zu wenig eingerückt 
:::

### Beispiel

:::cards --min-width=250px
*** --backgroundColor=var(--ifm-color-danger-lightest)
**Nicht eingerückt**
```py live_py slim
for i in range(5):
print('Hallo')
```
*** --backgroundColor=var(--ifm-color-success-lightest)
**Korrektur**
```py live_py slim
for i in range(5):
    print('Hallo')
```
:::

:::cards --min-width=250px
*** --backgroundColor=var(--ifm-color-danger-lightest)
**Falsch eingerückt**
```py live_py slim
print('Hallo')
 print('wie')
print('gehts?')
```
*** --backgroundColor=var(--ifm-color-success-lightest)
**Korrektur**
```py live_py slim
print('Hallo')
print('wie')
print('gehts?')
```
:::

:::aufgabe Fehler finden
<Answer type="state" webKey="d5fc6d3b-9e28-4c82-af59-c5465efe87cb" />

Finden und lösen Sie die entstandenen Fehler, so dass die Ausgabe
```sh
Hallo zum 0
Hallo zum 1
Ende
```
lautet.

```py live_py title=errors.py id=0538f258-5b10-4dec-be08-644e1f1df6a8
for i in range(2):
print('Hallo zum', i)
 print('Ende')
```
<Solution webKey="d775eeeb-21a2-479c-aba3-24a3173b9fe1">

```py live_py slim
for i in range(2):
    print('Hallo zum', i)
print('Ende')
```
</Solution>
:::

## Logikfehler

Aus der Sicht von Python funktioniert alles, top! 👍

Sobald aber das Programm ausgeführt wird, macht es nicht das, was Sie sich gewünscht haben - Logik-Fehler 💩...

Diese Fehler sind im allgemeinen am schwierigsten zu finden. Ein häufiger Fehler ist aber, dass man bei einem Befehl die runden Klammern am Ende vergisst - für Python kein Problem, da es den Befehl kennt, jedoch nicht dazu aufgefordert wird, diesen auszuführen. 

:::caution Häufigste Ursachen
Checkliste für Logikfehler
- sind bei Befehlen die runden Klammern `()` am Ende angegeben?
:::

### Beispiel

```py live_py slim
from turtle import *
penup()
goto(-10, 10)
pendown
for i in range(4):
    forward(20)
    left(90)
```
Auf Zeile 4 fehlen die runden Klammern - `pendown` wird nicht ausgeführt! Fehler beheben: Den Befehl mit `pendown()` aufrufen.


---

:::aufgabe Fehler finden
<Answer type="state" webKey="9fbdda43-73ca-43a1-9e51-ee20414b819b" />

Finden und beheben Sie alle Fehler, so dass folgende Ausgabe entsteht:

![](images/swiss-flag.svg)

```py live_py title=errors.py id=b11d905a-08e3-4f43-810f-c4c227bb5d46
from turtle import *

fillcolor("Rot")
 penup()
goto(-125 125)
begin_fill()
for i in range(4)
    forward(250)
    left(90)
end_fill()
forward(150)
links(90)
forward(50)
fillcolor("white")
begin_fill()
for i in range(4):
    forward(50)
    right(90)
    forward(50)
    left(90)
    forward(50)
    left(90)
end_fill


```
<Solution webKey="d775eeeb-21a2-479c-aba3-24a3173b9fe1">

**Vorgehensweise**:
1. Programm ausführen
2. Fehlermeldung analysieren und **nur** diesen Fehler flicken
3. Zurück zu Punkt 1

```py live_py slim
from turtle import *

penup()
goto(-125, -125)
fillcolor("red")

begin_fill()
for i in range(4):
    forward(250)
    left(90)
end_fill()
forward(150)
left(90)
forward(50)
fillcolor("white")
begin_fill()
for i in range(4):
    forward(50)
    right(90)
    forward(50)
    left(90)
    forward(50)
    left(90)
end_fill()
```
</Solution>

:::
