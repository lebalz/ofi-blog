---
image: ./images/hangman.png
sidebar_custom_props:
  id: 55b1da57-268c-415b-abce-5203e155afac
---
# Hangman

![](images/hangman.png)


## Bottom-up Funktionen

### Funktionen

:::cards{basis=360px align-items=flex-end}
::br{code=true}
```py
def show():
    pass
```
::br{code=true}
```py
def is_valid(inp):
    return True
```
::br{code=true}
```py
def eingabe():
    pass
```
::br{code=true}
```py
def auswerten(valid_inp):
    pass
```
::br{code=true}
```py
def gewonnen():
    return False
```
::br{code=true}
```py
def game_over():
    pass
```
::br{code=true}
```py
def play():
    pass
```
::br
:::

### Funktionskörper
:::cards{basis=360px align-items=flex-end}
::br{code=true}
```py
for buchstabe in gesucht:
    if buchstabe not in gefunden:
        return False
return True
```
::br{code=true}
```py
if valid_inp in gesucht:
    gefunden.append(valid_inp)
else:
    falsch_geraten.append(valid_inp)
```
::br{code=true}
```py
buchstabe = input('Buchstabe? ')
while not is_valid(buchstabe):
    buchstabe = input('Buchstabe? ')
return buchstabe.lower()
```
::br{code=true}
```py
print('Falsche Buchstaben:', falsch_geraten)
for buchstabe in gesucht:
    if buchstabe in gefunden:
        print(buchstabe, end=' ')
    else:
        print('_', end=' ')
print('')
```
:::

### Variablen

```py
# Variablen
gesucht = 'test'

gefunden = []
falsch_geraten = []
```

:::aufgabe[Hangman]
<Answer type="state" webKey="d4a9b21d-e021-4b0c-8a49-29f4b0343037" />

Dateiname
: __EF-Informatik/exercises/hangman.py__

1. Ordnen Sie die vorhandenen Funktionskörper den richtigen Funktionsdefinitionen zu und fügen Sie die Variablen ganz oben im Skript ein.
2. Wo werden die verschiedenen Variablen verwendet? Was wird darin gespeichert?
3. Kommentieren Sie die Funktionen. Was machen Sie?
   1. Bei Eingaben: Was für Parameter werden erwartet?
   2. Bei Rückgabewerten: Was wird zurückgegeben
4. Machen Sie einen ersten Commit
5. Implementieren Sie die Funktion `play` gemäss dem Top-down Entwurf
6. Implementieren Sie die Funktion `game_over`. Die Funktion gibt `True` zurück, falls mehr als 10 mal falsch geraten wurde oder falls das Spiel gewonnen wurde.
7. Das Spiel funktioniert 🥳 Doch was soll passieren, wenn mehr als ein Buchstabe oder eine Zahl eingegeben wird? Setzen Sie diese Richtlinien in der Funktionen `is_valid` um. Folgender Link könnte hilfreich sein
   1. 👉 https://docs.python.org/3/library/stdtypes.html#str.isalpha
8. Commit & Push
9. ⭐ Generieren Sie zufällige Wörter: [👉 Zufällige Wörter](#-zufällige-wörter-generieren)
10. ⭐ Zeigen Sie ASCII-Bilder für den Spielstand an: [👉 ASCII-Bilder](#-hangman-ascii-bilder)
11. Markieren Sie die Aufgabe als erledigt.

<Solution webKey="1fbc3641-2ce5-44b0-965f-1ee88cb427cd" title="play()">

```py
def play():
    while not game_over():
        show()
        inp = eingabe()
        auswerten(inp)
    if gewonnen():
        print('Gewonnen :)')
    else:
        print('Verloren :(', gesucht)
```
</Solution>
<Solution webKey="749e7a03-c454-4b6e-9948-7f008d45b117" title="game_over()">

```py
def game_over():
    if len(falsch_geraten) > 10:
        return True
    return gewonnen()
```
</Solution>
<Solution webKey="8b29fa01-6dab-4d69-9195-322d4f922de5" title="is_valid()">

```py
def is_valid(inp):
    if len(inp) != 1:
        return False;
    return inp.isalpha()
```
</Solution>
:::

:::aufgabe[Erneut Spielen]
<Answer type="state" webKey="d30992cb-4781-4f87-ba31-4030b4293095" />

Sobald man verloren hat, soll man gefragt werden, ob man erneut spielen möchte.

Weiterspielen
: 1) Neues Wort setzen (siehe Kapitel Zufällige Wörter generieren)
: 2) Spielstände zurücksetzen
: 3) Wieder spielen

Programm beenden
: mit dem Befehl `exit()` das ganze Programm sofort beenden

:::

## ⭐ Zufällige Wörter generieren

Um zufällige, deutsche Wörter zu generieren, kann man die Bibliothek [zufallsworte](https://github.com/MaximilianFreitag/Zufallswort) installieren, indem im Python-Terminal von VS Code folgender Befehl eingegeben wird:

```bash
pip3 install zufallsworte
```

Anschliessend kann wie folgt ein zufälliges Wort abgefragt werden:

```py
import zufallsworte as zufall

wort = zufall.zufallswoerter(1)[0]  # gibt ein Zufallswort zurück
```


## ⭐ Hangman ASCII-Bilder

```py live_py slim

HANGMANS_RAW = ''' 18 Zeichen ergeben ein Bild...
                                         __________        __________        __________        __________        __________        __________        __________        __________        __________     
                       |                 |                 |/                |/        |       |/        |       |/        |       |/        |       |/        |       |/        |       |/        |    
                       |                 |                 |                 |                 |         O       |         O       |         O       |         O       |         O       |         O    
                       |                 |                 |                 |                 |                 |         |       |        -|       |        -|       |        -|-      |        -|-   
                       |                 |                 |                 |                 |                 |                 |                 |          \      |          \      |        / \   
                       |                 |                 |                 |                 |                 |                 |                 |                 |                 |  GAME OVER   
    _________         _|_______         _|_______         _|_______         _|_______         _|_______         _|_______         _|_______         _|_______         _|_______         _|_______     
___/         \___ ___/         \___ ___/         \___ ___/         \___ ___/         \___ ___/         \___ ___/         \___ ___/         \___ ___/         \___ ___/         \___ ___/         \___ 
'''.split('\n')[1:-1] # ohne erste und letzte Zeile

# enthält 11 ASCII-Bilder, für jeden Spiel-Zustand einen
HANGMANS = ['\n'.join([line[i : i + 18] for line in HANGMANS_RAW]) for i in range(0, 11 * 18, 18)]

def get_hangman(nr):
    '''
    nr: int values from 0 to 10
    '''
    return HANGMANS[nr]

print(get_hangman(6))
```