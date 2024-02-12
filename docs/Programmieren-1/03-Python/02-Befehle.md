---
sidebar_custom_props:
  id: d3d72343-f2c0-4e16-ac95-598f3647e926
---

# Python Befehle

:::def[`alert`]
Mit dem Befehl `alert` aus der Bibliothek `browser` können **Ausgabeboxen** erzeugt werden.

```py live_py slim
from browser import alert
alert('Hello!')
```
:::

:::def[formatierter Text `f''`]
Variablenwerte lassen sich mit geschweiften Klammern `{}` in einen Text einfügen. Dazu muss zu Beginn des Textes ein kleines `f` (für "fromatierten Text") hinzugefügt werden.

```py live_py slim
name = 'Alfred'
print(f'Hallo {name}')
```
:::

:::def[`break`]
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


