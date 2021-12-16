---
title: Textverarbeitung
---

import Hint from '@site/src/components/Solution/Hint'
import Solution from '@site/src/components/Solution'

# Textverarbeitung

In Python lassen sich Texte verändern.

## Gross- und Kleinschreibung

:::def `upper()`

```py live_py slim
text = "Hallo ich bin Alfred. Ich schreibe an einem wichtigen Buch."
gross = text.upper()

print(gross)
```
:::


:::def `lower()`

```py live_py slim
text = "Hallo ich bin Alfred. Ich schreibe an einem wichtigen Buch."
klein = text.lower()

print(klein)
```
:::

## Text ersetzen

:::def `replace()`
Mit replace(alt, neu) können Text-Teile in einem Text ersetzt werden.

```py live_py slim
text = "Hallo ich bin Alfred. Ich schreibe an einem wichtigen Buch."

# Alle . durch !!! ersetzen
text = text.replace(".", "!!!")

print(text)
```

:::

:::warning Gross- & Kleinschreibung
Python nimmts genau beim ersetzen - die Gross- & Kleinschreibung spielt eine Rolle!

Im folgenden Beispiel wird etwa nur das kleingeschriebene `ich` ersetzt, jedoch auch wenn es inmitten eines Textes auftritt.

```py live_py slim
text = "Hallo ich bin Alfred. Ich schreibe an einem wichtigen Buch."
text = text.replace("ich", "ICH")

print(text)
```
:::

## Grüfnisch

> Grüfnisch ist in der Schweiz unter Jugendlichen und Kindern eine verbreitete Spielsprache. Diese Sprache wird von vielen Kindern und Jugendlichen auch als Geheimsprache benutzt. Bei „Grüfnisch“ werden die Vokale **a**, **e**, **i**, **o**, **u**, **ä**, **ö** und **ü** durch **anafa**, **enefe**, **inifi**, **onofo**, **unufu**, **änäfä**, **önöfö** und **ünüfü** ersetzt (z. B.: „Hanafallonofo“ = „Hallo“). Ausnahme: Bei Diphthongen/Zwielauten wird nur der erste verlängert (z. B. „au“ ⇒ „anafau“). [^1]


## Beispiel

`Gymnasium Biel Seeland` heisst auf Grüfnisch `Gymnanafasinifiunufum Binifienefel-Senefeenefelanafand`

:::aufgabe Deutsch → Grüfnisch
Erstellen Sie ein Programm, welches
- die Benutzer:in nach einem deutschen Satz fragt
- diesen Satz zu Grüfnisch umwandelt
- den grüfnischen Satz ausgibt

Zeichnen Sie in einem ersten Schritt zusammen mit ihrer Pultnachbar:in ein Struktogramm für das Programm.

```py live_py title=zu__grüfnisch.py id=3b676c25-0261-4b06-9a4c-93c6acf7fe97
from cowsay import cow

```

Zusatz ⭐️: Verwenden Sie anstelle von `print()` den Befehl `cow()` - was passiert? 

<Hint>

Ersetzen Sie jeden Vokal nacheinander, wobei Sie das Resultat immer wieder in derselben Variable speichern:
1. `'a'` → `'anafa'`
2. `'e'` → `'enefe'`
3. `'i'` → `'inifi'`
4. `'o'` → `'onofo'`
5. `'u'` → `'unufu'`
6. `'ä'` → `'änäfä'`
7. `'ö'` → `'önöfö'`
8. `'ü'` → `'ünüfü'`

</Hint>

<Hint title="Weitere Figuren">

Anstelle von `cow()` können auch andere Figuren verwendet werden. Diese muss dann aber auch aus der Bibliothek `cowsay` importiert werden.

- `beavis`
- `cheese`
- `daemon`
- `cow`
- `dragon`
- `ghostbusters`
- `kitty`
- `meow`
- `milk`
- `stegosaurus`
- `stimpy`
- `turkey`
- `turtle`
- `tux`

</Hint>
<Solution webKey="e2368d96-664c-4c52-86aa-496a5e936cdd">

```py live_py slim
from cowsay import cow
text = input('Berndeutschen Satz?')

grüfnisch = text.lower()
grüfnisch = grüfnisch.replace('a', 'anafa')
grüfnisch = grüfnisch.replace('e', 'enefe')
grüfnisch = grüfnisch.replace('i', 'inifi')
grüfnisch = grüfnisch.replace('o', 'onofo')
grüfnisch = grüfnisch.replace('u', 'unufu')
grüfnisch = grüfnisch.replace('ä', 'änäfä')
grüfnisch = grüfnisch.replace('ö', 'önöfö')
grüfnisch = grüfnisch.replace('ü', 'ünüfü')

cow(grüfnisch)
```
</Solution>

<Solution title="⭐️ Kurzschreibweise" webKey="e2368d96-664c-4c52-86aa-496a5e936cdd">

```py live_py slim
from cowsay import beavis
text = input('Berndeutschen Satz?')

grüfnisch = text.lower()
for vokal in 'aeiouäöü':
    neu = f'{vokal}n{vokal}f{vokal}'
    grüfnisch = grüfnisch.replace(vokal, neu)
beavis(grüfnisch)
```
</Solution>

<Solution title="⭐️ Zusatz: Diphthonge" webKey="e2368d96-664c-4c52-86aa-496a5e936cdd">

```py live_py slim
from cowsay import beavis
import itertools
text = input('Berndeutschen Satz?')

grüfnisch = text.lower()
# alle Diphdonge durch Grossbuchstaben ersetzen
for diphdong in ['aa', 'ae', 'ai', 'ao', 'au', 'aä', 'aö', 'aü', 'ee', 'ea', 'ei', 'eo', 'eu', 'eä', 'eö', 'eü', 'ii', 'ia', 'ie', 'io', 'iu', 'iä', 'iö', 'iü', 'oo', 'oa', 'oe', 'oi', 'ou', 'oä', 'oö', 'oü', 'uu', 'ua', 'ue', 'ui', 'uo', 'uä', 'uö', 'uü', 'ää', 'äa', 'äe', 'äi', 'äo', 'äu', 'äö', 'äü', 'öö', 'öa', 'öe', 'öi', 'öo', 'öu', 'öä', 'öü', 'üü', 'üa', 'üe', 'üi', 'üo', 'üu', 'üä', 'üö']:
    grüfnisch.replace(diphdong, diphdong.upper())

for vokal in 'aeiouäöü':
    neu = f'{vokal}n{vokal}f{vokal}'
    grüfnisch = grüfnisch.replace(vokal, neu)

# alle grossen Diphonge auf Grüfnisch übersetzen
for diphdong in ['AA', 'AE', 'AI', 'AO', 'AU', 'AÄ', 'AÖ', 'AÜ', 'EE', 'EA', 'EI', 'EO', 'EU', 'EÄ', 'EÖ', 'EÜ', 'II', 'IA', 'IE', 'IO', 'IU', 'IÄ', 'IÖ', 'IÜ', 'OO', 'OA', 'OE', 'OI', 'OU', 'OÄ', 'OÖ', 'OÜ', 'UU', 'UA', 'UE', 'UI', 'UO', 'UÄ', 'UÖ', 'UÜ', 'ÄÄ', 'ÄA', 'ÄE', 'ÄI', 'ÄO', 'ÄU', 'ÄÖ', 'ÄÜ', 'ÖÖ', 'ÖA', 'ÖE', 'ÖI', 'ÖO', 'ÖU', 'ÖÄ', 'ÖÜ', 'ÜÜ', 'ÜA', 'ÜE', 'ÜI', 'ÜO', 'ÜU', 'ÜÄ', 'ÜÖ']:
    vokal1 = diphdong[0].lower() # erster Buchstabe
    vokal2 = diphdong[1].lower() # zweiter Buchstabe
    neu = f'{vokal1}n{vokal1}f{vokal1}'
    grüfnisch.replace(diphdong, f'{neu}{vokal2}')
    
beavis(grüfnisch)
```
</Solution>
:::


:::aufgabe Grüfnisch → Deutsch

Können Sie auch ein Programm schreiben, welches vom Grüfnisch ins Berndeutsch übersetzt?

```py live_py title=von_grüfnisch.py id=c3fd9f11-7cae-40b7-8c5a-78568036676e

```

<Solution webKey="e2368d96-664c-4c52-86aa-496a5e936cdd">

```py live_py slim 
from cowsay import beavis
text = input('Berndeutschen Satz?')

berndeutsch = text.lower()
berndeutsch = berndeutsch.replace('anafa', 'a')
berndeutsch = berndeutsch.replace('enefe', 'e')
berndeutsch = berndeutsch.replace('inifi', 'i')
berndeutsch = berndeutsch.replace('onofo', 'o')
berndeutsch = berndeutsch.replace('unufu', 'u')
berndeutsch = berndeutsch.replace('änäfä', 'ä')
berndeutsch = berndeutsch.replace('önöfö', 'ö')
berndeutsch = berndeutsch.replace('ünüfü', 'ü')

beavis(berndeutsch)
```
</Solution>

:::

[^1]: Quelle: [Wikipedia](https://de.wikipedia.org/wiki/Spielsprache#Gr%C3%BCfnisch)
