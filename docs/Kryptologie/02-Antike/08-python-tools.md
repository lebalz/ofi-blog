---
sidebar_custom_props:
  id: 0acd82f5-e6b6-44b1-b146-3fbbc3e1b88d
---

# ⭐️ Antike Verschlüsselung mit Python

## Skytale


```py live_py title=to__skytale.py id=401ae4f3-626c-4f6f-95a0-bf366b9ae1c3
klartext = 'Skytale'
schlüssel = 3

zeilen = []

# füge für jede Zeile einen leeren Text ein
for i in range(schlüssel):
    zeilen.append('')

# verteile die Buchstaben auf die Zeilen
nr = 0
for buchstabe in klartext:
    zeilen[nr] = zeilen[nr] + buchstabe
    nr = nr + 1
    if nr == schlüssel:
        nr = 0
# alle Zeilen mit einer neuen Zeile verknüpfen
verschlüsselt = '\n'.join(zeilen)

print(verschlüsselt)
```

```py live_py title=from__skytale.py id=b53eb042-3589-4bab-b504-36243f65af67
verschlüsselt = '''\
Ste
ka
yl'''

zeilen = verschlüsselt.splitlines()
# die erste Zeile gibt vor, wie viele Spalten es gibt
spalten = len(zeilen[0])

klartext = ''

# für jede Spalte...
for spalte in range(spalten):
    # wird in jeder Zeile...
    for zeile in zeilen:
        if len(zeile) > spalte:
            # der Buchstabe in dieser Spalte dem Text hinzugefügt
            klartext = klartext + zeile[spalte]

print(klartext)
```
## Polybios

```py live_py title=to__polybios.py id=7de16f01-3830-43dc-9ce6-6cf0b0161e9a
QUADRAT = [
    'A', 'B', 'C', 'D', 'E',
    'F', 'G', 'H', 'I', 'K',
    'L', 'M', 'N', 'O', 'P',
    'Q', 'R', 'S', 'T', 'U',
    'E', 'X', 'Y', 'Z', ' '
]
klartext = 'Hallo'

klartext = klartext.upper().replace('J', 'I').replace('V', 'U')
verschlüsselt = ''
for buchstabe in klartext:
    index = QUADRAT.index(buchstabe)
    spalte = index % 5 # berechnet den ganzzahligen Rest bei einer Division durch 5
    zeile = index // 5 # berechnet die ganzzahlige Division durch 5
    verschlüsselt = verschlüsselt + f'{zeile + 1}{spalte + 1} '

print(verschlüsselt.strip()) # strip entfernt Leerzeichen an den Rändern
```

::::aufgabe
<Answer type="state" webKey="574b699f-8924-4874-9569-1c8a073b3b7b" />

Lesen Sie das Programm durch und versuchen Sie, jede Zeile zu verstehen.

Flicken Sie den Code, so dass der verschlüsselte Text lesbar wird.


```py live_py title=from__polybios.py id=2a72f129-612f-45f5-9972-ac82561bc97e
QUADRAT = [
    'A', 'B', 'C', 'D', 'E',
    'F', 'G', 'H', 'I', 'K',
    'L', 'M', 'N', 'O', 'P',
    'Q', 'R', 'S', 'T', 'U',
    'E', 'X', 'Y', 'Z', ' '
]

verschlüsselt = '35 34 31 53 12 24 34 43'
klartext = ''
zahlen = verschlüsselt.split(' ')
for zahl in zahlen:
    zeile = int(zahl[0])
    spalte = int(zahl[1])
    index = 0
    klartext = klartext + QUADRAT[index]

print(klartext)
```

:::danger Zugriff auf eine Liste
Wie Sie bemerkt haben, werden in Python Listen mit eckigen Klammern erzeugt - und der Zugriff erfolgt unter Angabe der Position in der Liste, auch wieder mit eckigen Klammern:

Die Positionen in der Liste beginnen bei 0. Das heisst, das erste Element hat die Position 0, das zweite die Position 1, usw.

```py live_py slim
liste = ['A', 'B', 'C', 'D', 'E']
print(liste[0]) # gibt 'A' aus
print(liste[4]) # gibt 'E' aus
```
:::
::::

## Caesar-Chiffre


```py live_py title=to__caesar.py id=4f0f7d8d-a2d3-4c2f-b05f-ed9bd6b52b33
ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
SCHLÜSSEL = 'D'
ROT = ALPHABET.index(SCHLÜSSEL) # gibt die Position des Schlüsselbuchstabens im Alphabet zurück
                                # A -> 0, B -> 1, C -> 2, D -> 3, ...
klartext = 'CAESAR'

klartext = klartext.upper() # sicherstellen, dass nur Grossbuchstaben verwendet werden
verschlüsselt = ''
for buchstabe in klartext:
    index = ALPHABET.index(buchstabe) + ROT
    index = index % 26 # ganzzahliger Rest bei Division durch 26
    verschlüsselt = verschlüsselt + ALPHABET[index]

print(verschlüsselt)
```

:::aufgabe
<Answer type="state" webKey="735176ce-b1c6-46c2-864a-151c63610dd7" />

Ändern Sie den Code so ab, dass der verschlüsselte Text wieder entschlüsselt werden kann.

```py live_py title=from__caesar.py id=ebc928b8-7ff6-4566-9438-475718cedc03
ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
SCHLÜSSEL = 'D'
ROT = ALPHABET.index(SCHLÜSSEL)

verschlüsselt = 'JDLXV'

klartext = ''
verschlüsselt = verschlüsselt.upper()
for buchstabe in verschlüsselt:
    index = 0
    klartext = klartext + ALPHABET[index]

print(klartext)
```

<details>
<summary>⭐️ Zusatz</summary>

Sie haben eine geheime Nachricht abgefangen, kennen aber den Schlüssel nicht. Sie wissen aber, dass `ALCZLJ` ein sinnvolles Wort ergeben muss. Schreiben Sie ein Programm, das alle möglichen Schlüssel durchprobiert und jeweils den entschlüsselten Text ausdruckt.

Verwenden Sie die Ausgangslage aus dem obigen Programm.

```py live_py title=hack__caesar.py id=a99f0b6f-07cd-4498-b0d7-69af7aed70dd
verschlüsselt = 'ALCZLJ'
```

</details>
:::


## Substitutions-Chiffre

```py live_py title=to__substitution.py id=db63b078-a82a-4f00-90df-729ed1901f07
ALPHABET = 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z'.split(' ')
SCHLÜSSEL = 'I S X D L Y A V E B F G C W M Z N K O R H Q J P U T'.split(' ')

klartext = 'HEUTE GEHE ICH IM WALD JOGGEN'
klartext = klartext.upper()
verschlüsselt = ''

for buchstabe in klartext:
    if buchstabe in ALPHABET:
        index = ALPHABET.index(buchstabe)
        verschlüsselt = verschlüsselt + SCHLÜSSEL[index]
    else:
        verschlüsselt = verschlüsselt + buchstabe

print(verschlüsselt)
```


```py live_py title=from__substitution.py id=25d474c6-eef5-485f-b721-b6338cfc8889
ALPHABET = 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z'.split(' ')
SCHLÜSSEL = 'I S X D L Y A V E B F G C W M Z N K O R H Q J P U T'.split(' ')

verschlüsselt = 'EXV SEFL QMW CIAAGEWALW WIXV SELG'
verschlüsselt = verschlüsselt.upper()
klartext = ''

for buchstabe in verschlüsselt:
    if buchstabe in SCHLÜSSEL:
        index = SCHLÜSSEL.index(buchstabe)
        klartext = klartext + ALPHABET[index]
    else:
        klartext = klartext + buchstabe

print(klartext)
```


```py live_py title=schlüssel.py id=94fcf1be-7efe-4ebd-98a6-1c2a4fa43957
from random import shuffle
schlüssel='A B C D E F G H I J K L M N O P Q R S T U V W X Y Z'.split(' ')
shuffle(schlüssel)
print(' '.join(schlüssel))
```
