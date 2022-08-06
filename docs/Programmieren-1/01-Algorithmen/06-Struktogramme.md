---
sidebar_custom_props:
  id: 5604d4bd-d35b-4b52-8df9-1b3f9cc054b8
---

# Struktogramme

import Strukto from '@site/src/components/struktogramm/Strukto';

# Struktogramme

Struktogramme sind eine Möglichkeit, Programme und Algorithmen grafisch darzustellen. Diese Dartstellungsform wurde 1973 von Isaac Nassi und Ben Shneiderman vorgeschlagen und heisst deshalb auch Nassi-Shneiderman-Diagramm.[^1]

## Sequenz 👣
In einem Struktogramm wird jeder Befehl in einen rechteckigen Kasten geschrieben. Befehle müssen nicht in einer Programmiersprache geschrieben werden, *Parameter* werden <u>unterstrichen</u>.

:::flex --min=250px --gap=50px
```py live_py slim
from turtle import *

forward(100)
left(90)
forward(50) 
```
***
<Strukto program={[
    {type: 'step', code: <span><u>100</u> Schritte vorwärts</span>},
    {type: 'step', code: <span><u>90</u>° nach links</span>},
    {type: 'step', code: <span><u>50</u> Schritte vorwärts</span>}
]} />
:::


## Wiederholung 🔁

Eine Wiederholung wird wie folgt dargestellt.

:::flex --min=250px --gap=50px
```py live_py slim
from turtle import *

for i in range(4):
    forward(100)
    left(90)
```
***
<Strukto program={[
    {
        type: 'repeat', 
        code: <span><u>4</u> mal wiederholen:</span>,
        block: [
            {type: 'step', code: <span><u>100</u> Schritte vorwärts</span>},
            {type: 'step', code: <span><u>90</u>° nach links</span>}
        ]
    }
]} />
:::

:::tip Bemerke
- Beim Struktogramm wird der wiederholte Teil durch die **Einrückung** ersichtlich. Auch in Python werden wiederholte Sequenzen (Zeilen 4-5) visuell mit einem Tabulator eingerückt.
- Der Doppelpunkt am Zeilenende zeigt an, dass eine eingerückte Sequenz (beim Programmieren spricht man von einem *Codeblock*) folgt.
:::

## Unterprogramm 🏷
Eine Sequenz kann mit einem Namen versehen werden. Anstatt immer die ganze Sequenz aufzuschreiben, genügt es den Namen aufzuschreiben.

:::flex --min=250px --gap=50px
```py live_py slim
from turtle import *

def zick_zack():
    left(60)
    forward(30)
    right(120)
    forward(30)
    left(60)



forward(100)
zick_zack()
zick_zack()
```
***
<Strukto program={[
    {
        type: 'def', 
        code: 'zick_zack:',
        block: [
            {type: 'step', code: <span><u>60</u>° nach links</span>},
            {type: 'step', code: <span><u>30</u> Schritte vorwärts</span>},
            {type: 'step', code: <span><u>120</u>° nach rechts</span>},
            {type: 'step', code: <span><u>30</u> Schritte vorwärts</span>},
            {type: 'step', code: <span><u>60</u>° nach links</span>}
        ]
    },
    {type: 'step', code: <span><u>100</u> Schritte vorwärts</span>},
    {type: 'call', code: <span>zick_zack</span>},
    {type: 'call', code: <span>zick_zack</span>}
]} />
:::

:::tip Bemerke
- Um ein Unterprogramm aufzurufen, wird beim Struktogramm der Kasten mit doppelten Seitenstrichen markiert, bei Python werden runde Klammern am Ende des Namens angegeben.
- Den Namen für Unterprogramm kann beliebig gewählt werden, sofern er nicht mit einer Zahl beginnt und keine Sonderzeichen enthält. **Leerschläge** und **Bindestriche** sind nicht erlaubt - stattdessen werden Unterstriche `_` verwendet: Statt `zick zack` wird der Name `zick_zack` verwendet. 
:::

## Parameter ⊕ ⊖

Ein Unterprogramm kann mit **Parametern** aufgerufen werden.

Parameter werden jeweils <u>unterstrichen</u>, so dass klar ist, welche Werte sich ändern können.

### Variablen
Bei Programmen wird zwischen Parametern und Variablen unterschieden. Genau wie Paramter können diese das Ergebnis eines Algorithmus ändern. Sie werden in einem Struktogramm speziell als markiert, damit klar ist, dass eigentlich der in der Variable gespeicherte Wert gemeint ist.

:::flex --width=250px
```py live_py slim
grösse = input('Wie gross bist du [cm]?')
print(f'Ich bin {grösse} cm gross')
```
***
<Strukto program={[
    {type: 'input', code: <span><span className="var">grösse</span> = Wie gross bist du [cm]?</span>},
    {type: 'step', code: <span>Ausgabe: Ich bin <span className="var">grösse</span> cm gross.</span>}
]} />
:::

[^1]: Quelle: [rothe.io](https://rothe.io/?b=prog1&p=905106)
