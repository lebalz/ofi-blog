---
sidebar_label: 8. Verzweigungen ⑂
sidebar_custom_props:
  id: 3170b4a4-73fd-4460-9518-9bc9cab7c5a9
---

import Strukto from '@site/src/components/struktogramm/Strukto';
import Ratespiel from '@site/src/components/Ratespiel'

# 8. Bedingte Ausführung ⑂

> Einer oder mehrere Schritte werden nur ausgeführt, wenn eine bestimmte Bedingung erfüllt ist.

In Programmen möchten wir während der Ausführung des Programms entscheiden können, ob Befehle ausgeführt werden oder nicht. Auch möchten wir entscheiden können, ob eine Wiederholung abgebrochen werden soll. 

## Vergleichen
Um zu entscheiden, ob Befehle ausgeführt werden sollen, wird immer eine eine Frage gestellt, die eindeutig mit "Ja" oder "Nein" beantwortet werden kann. Wird die Frage mit "Ja" beantwortet, so ist diese Aussage **Wahr** und die Bedingung ist **erfüllt**. Andernfalls ist die Aussage **Falsch** und die Bedingung ist **nicht erfüllt**.

Ein Frage kann als **Vergleich** geschrieben werden. Beispielsweise wird die Frage "Ist 4 kleiner als 2?" als `4 < 2` aufgeschrieben. Die offensichtliche Antwort ist "Nein" und entspricht in Python dem Wert `False`.
Spannender sind vergleiche, wenn diese mit Variablen durchgeführt werden, da man nicht schon im Voraus weiss, welcher Wert in einer Variable enthalten ist.
Die Frage von "Ist x kleiner als 2" (`x < 2`) hängt also davon ab, welcher Wert **zur Zeit** in der Variable `x` gespeichert ist.

:::flex

<Strukto program={[
    {type: 'input', code: <span><span className="var">alter</span> = Wie alt bist du?</span>},
    {
        type: 'if', 
        code: <span>Ist das <span className="var">alter</span> kleiner als 14?</span>,
        block: [
            {type: 'step', code: <span>Ausgabe: Du darfst Velo fahren</span>},
            {type: 'elif', code: <span>Sonst, ist das <span className="var">alter</span> kleiner als 16?</span>},
            {type: 'step', code: <span>Ausgabe: Du darfst Töffli fahren</span>},
            {type: 'elif', code: <span>Sonst, ist das <span className="var">alter</span> kleiner als 18?</span>},
            {type: 'step', code: <span>Ausgabe: Du darfst Roller fahren</span>},
            {type: 'else'},
            {type: 'step', code: <span>Ausgabe: Du darfst Auto fahren</span>}
        ]
    }
]} />
***

```py live_py slim
alter = int(input('Wie alt bist du?'))

if alter < 14:
    print('Du darfst Velo fahren')
elif alter < 16:
    print('Du darfst Töffli fahren')
elif alter < 18:
    print('Du darfst Roller fahren')
else:
    print('Du darfst Auto fahren')

```

:::

In Python können alle üblichen Fragen als Vergleiche von zwei Werten geschrieben werden.

<div className="slim-table">

| Name     | Mathematisch | Python |
| :------- | :----------- | :----- |
| grösser  | $\lt$        | `<`    |
| kleiner  | $\gt$        | `>`    |
| grösser  | $\leq$       | `<=`   |
| kleiner  | $\geq$       | `>=`   |
| gleich   | $==$         | `==`   |
| ungleich | $\neq$       | `!=`   |

</div>

:::danger[Achtung]
Bei der Überprüfung auf Gleichheit werden zwei Gleichheitszeichen `==` geschrieben.
:::

## Ausgabefenster

In Python lassen sich Ausgaben nicht nur mit `print` sondern auch mit dem Befehl `alert()` (aus der Bibliothek `browser`) in einer Ausgabebox anzeigen. *Die Ausgabe mit `alert` wird hier verwendet, weil die Online-Version von Python die Ausgaben mit `print` erst am Ende des Programms anzeigt wird*.

:::def
### `alert`
Mit dem Befehl `alert` aus der Bibliothek `browser` können **Ausgabeboxen** erzeugt werden.

```py live_py slim
from browser import alert
alert('Hello!')
```
:::

## Zufallszahlen erraten

::::aufgabe[Ratespiel]
<Answer type="state" webKey="9bdbe552-f197-41dd-8709-b7f034597405" />

Probieren Sie das Ratespiel aus:

<Ratespiel />

1. Beschreiben Sie in eigenen Worten, wie das Ratespiel funktioniert.

<Answer type="text" webKey="44979bbe-f85a-45ff-badf-76e910710000" />

2. Zeichnen Sie mit ihrer Pultnachbar:in ein Struktogramm für das Programm.
3. Schreiben Sie gemäss dem Struktogramm das Ratespiel in Python. 

```py live_py title=ratespiel.py id=fd00137d-92d8-4572-ba48-60c20aeca5f0
from browser import alert
from random import randint

```
<Hint>

Wenn die Zahl gefunden wurde, soll die Spieler:in nicht mehr nach einer Eingabe gefragt werden. Mit dem Befehl `break` kann die Wiederholung abgebrochen werden.
</Hint>
<Hint title={<span><code>break</code></span>}>


:::def
### `break`
Mit `break` kann eine Wiederholter Codeblock beendet werden. Die Ausführung geht mit der nächsten Zeile nach dem Codeblock weiter.

**Beispiel**

```py live_py slim
for i in range(10):
    print('Zahl', i)
    if i == 4:
        break
print('Ende')
```

**Bemerke**: Bei `i == 4` wird `break` aufgerufen und das Programm führt als nächstes die Zeile 5 aus.
:::

</Hint>
<Solution webKey="fcf61032-e9fd-460a-a5d2-cf19c5a782e8">

#### Struktogramm

<Strukto program={[
    {type: 'step', code: <span>Eine zufällige ganze Zahl zwischen <u>0</u> und <u>100</u> in <span className="var">zahl</span> speichern.</span>},
    {
        type: 'repeat',
        code: <span><u>10</u> mal wiederholen:</span>,
        block: [
            {type: 'input', code: <span><span className="var">geraten</span> = Zahl zwischen <u>0</u> und <u>100</u></span>},
            {
                type: 'if',
                code: <span>Ist die <span className="var">geraten</span>e Zahl gleich wie die zufällig <span className="var">zahl</span>?</span>,
                block: [
                    {type: 'step', code: <span>Ausgabe: Yay, gewonnen!</span>},
                    {type: 'step', code: <span>Wiederholungen beenden</span>},
                    {type: 'elif', code: <span>Sonst, ist <span className="var">geraten</span>e Zahl grösser als die zufällige <span className="var">zahl</span>?</span> },
                    {type: 'step', code: <span>Ausgabe: Die eingegebene Zahl ist zu gross.</span>},
                    {type: 'else', code: <span>Ausgabe: Die eingegebene Zahl ist zu klein.</span>}
                ]
            }
        ]
    },
    { 
        type: 'if',
        code: <span>Ist die <span className="var">geraten</span>e Zahl ungleich der zufälligen <span className="var">zahl</span>?</span>,
        block: [{type: 'step', code: <span>Ausgabe: Du hast verloren.</span>}]
    }
]}
/>

#### Programm

```py live_py slim
from browser import alert
from random import randint 

zahl = randint(0, 100)

for i in range(10):
    geraten = input(f'{i + 1}/10 Versuchen: Gib eine ganze Zahl zwischen 0 und 100 ein.')
    geraten = int(geraten)
    
    if geraten == zahl:
        alert(f'Yay, du hast die Zahl {zahl} in {i + 1} Versuchen gefunden!')
        break
    elif geraten > zahl:
        alert(f'Die eingegebene Zahl {geraten} ist zu gross')
    else:
        alert(f'Die eingegebene Zahl {geraten} ist zu klein')

if zahl != geraten:
    alert(f':( du hast verloren, die gesuchte Zahl war {zahl}')
```

</Solution>
::::
