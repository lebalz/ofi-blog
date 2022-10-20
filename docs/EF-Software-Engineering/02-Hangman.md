---
sidebar_custom_props:
  id: 55b1da57-268c-415b-abce-5203e155afac
---
# Hangman

```
     __________        __________        __________        __________        __________        __________     
     |                 |/                |/        |       |/        |       |/        |       |/        |    
     |                 |                 |         O       |         O       |         O       |         O    
     |                 |                 |                 |         |       |        -|-      |        -|-   
     |                 |                 |                 |                 |                 |        / \   
     |                 |                 |                 |                 |                 |  GAME OVER   
    _|_______         _|_______         _|_______         _|_______         _|_______         _|_______     
___/         \___ ___/         \___ ___/         \___ ___/         \___ ___/         \___ ___/         \___ 
```


## Zufällige Wörter generieren

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