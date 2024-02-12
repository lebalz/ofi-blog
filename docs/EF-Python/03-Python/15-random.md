---
sidebar_custom_props:
  id: 169e7b36-5012-4542-a5aa-afa0707cfede
---
# Zufällige Zahlen
Mit dem Python Package `random` können pseudo-zufällige Zufallszahlen erzeugt werden.

Viele Computer Programme basieren auf zufälligen Zahlen. Programmiersprachen können allerdings keine wirklichen Zufallszahlen erzeugen, sondern lediglich pseudo-zufällige Zahlen durch einen Algorithmus berechnen. (Der in Python verwendete Algorithmus für Zufallszahlen basiert auf dem [Mersenne-Twister](https://en.wikipedia.org/wiki/Mersenne_Twister)[^1]). 

Die Python Standard-Bibliothek beinhaltet das `random` Modul mit vielen nützlichen Funktionen.

:::def[ `random.random()`]
Gibt eine zufällige Zahl `n` zwischen `0.0` und `1.0`, ohne die `1.0` zurück ($0 <= n <1$).

```py slim live_py
import random
print(random.random())
```
:::

:::def[ `random.seed()`]
Diese Funktion initialisiert den Zufallszahlengenerator. Damit kann die "Zufälligkeit" kontrolliert werden - wird immer derselbe Initialisierungswert verwendet, so entsteht immer dieselbe "zufällige Sequenz". ENtsprechend wichtig ist es, dass jedesmal ein anderer Initialer Startwert gesetzt. Python verwendet automatisch die aktuelle Systemzeit. Mit `random.seed()` kann der Generator mit einem beliebigen `int`,  `str`, `byte` oder `bytearray` neu initialisiert werden.

```py slim live_py
import random
random.seed(1)
print(random.random())
```
:::

:::def[ `random.randint(a, b)`]
Gibt eine zufällige **ganze** Zahl `n` zwischen `a` und `b` ($a <= n <= b$) zurück.

```py slim live_py
import random
print(random.random())
```
:::


:::def[ `random.choice(seq)`]
Gibt ein zufälliges Element der Sequenz `seq` (bspw. eine Liste) zurück.

```py slim live_py
import random
destinations = ['Rom', 'Florenz', 'Paris', 'München']
print('Als nächstes gehe ich nach:', random.choice(destinations))
```
:::

:::def[ `random.shuffle(seq)`]
Mischt alle Elemente der eingefügten Sequenz (bspw. eine Liste) - die eingegebene Sequenz wird also verändert!

```py slim live_py
import random
numbers = [1, 2, 3, 4, 5, 6]
random.shuffle(numbers)
print(numbers)
```
:::

:::def[`random.sample(seq, n)`]

Gibt `n` zufällige Elemente der Sequenz `seq` (bspw. eine Liste) zurück. Die eingegebene Sequenz bleibt unverändert!


```py slim live_py
import random
numbers = [1, 2, 3, 4, 5, 6]
print('3 zufällige Zahlen', random.sample(numbers, 3))
print('Zufällig gemischte Zahlen', random.sample(numbers, len(numbers)))
print('Original', numbers)
```
:::

[^1]: Quelle: Wikipedia https://en.wikipedia.org/wiki/Mersenne_Twister