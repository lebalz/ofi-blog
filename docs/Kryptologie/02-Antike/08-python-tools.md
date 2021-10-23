---
title: ⭐️ Antike Verschlüsselung mit Python
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

:::aufgabe
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
:::
