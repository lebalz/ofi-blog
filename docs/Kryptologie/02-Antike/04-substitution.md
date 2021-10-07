---
title: Substitution
---

# Monoalphabetische Substitution [^1]

Allgemein wird ein Verschlüsselungsverfahren, bei welchem jedes Zeichen durch ein festgelegtes anderes Zeichen ersetzt wird, eine **monoalphabetische Substitution** genannt.

Das Verfahren wird «monoalphabetisch» genannt, weil zum Verschlüsseln eines Textes nur **ein Alphabet** zum Einsatz kommt. Im Gegensatz dazu werden bei «polyalphabetischen» Verfahren für die Verschlüsselung eines einzigen Textes mehrere verschiedene Alphabete verwendet (siehe z.B. Vigenère).

| Monoalphabetische Substitution |                                                                                                         |
| :----------------------------- | :------------------------------------------------------------------------------------------------------ |
| Klartextalphabet               | `A` `B` `C` `D` `E` `F` `G` `H` `I` `J` `K` `L` `M` `N` `O` `P` `Q` `R` `S` `T` `U` `V` `W` `X` `Y` `Z` |
| Geheimtextalphabet             | `M` `B` `T` `C` `H` `J` `F` `S` `A` `E` `Y` `O` `R` `D` `N` `Z` `W` `I` `U` `P` `G` `X` `Q` `K` `L` `V` |

Es ist ersichtlich, dass eine Entschlüsselung nun viel aufwändiger ist, da keine Alphabet-Verschiebung mehr stattfindet, sondern eine wilde Vertauschung (= Substitution) der Buchstaben.

Die Nachricht `EIN KLEINER RABE FLIEGT AM TAGE` wird verschlüsselt zu `HAD YOHADHI IMBH JOAHFP MR PMFH`.

:::info
Die Tatsache, dass der Buchstabe `B` im obigen Beispiel «nicht» verschlüsselt wird (also auch im Geheimtext ein `B` ist), stellt überhaupt kein Problem dar – im Gegenteil, es würde die Anzahl Möglichkeiten einschränken, wenn es verboten wäre, dass einzelne Buchstaben auch unverändert bleiben dürfen.
:::

Bei dieser Substitution hängt die Anzahl möglicher Verschlüsselungen von der Grösse des zugrundeliegenden Zeichensatzes ab. Wenn $n$ Zeichen verwendet werden, gibt es $n!$ unterschiedliche Verschlüsselungen. *($n!$ bedeutet "n Fakultät" und ist das Produkt aller natürlicher Zahlen bis zur angegebenen Zahl, Beispiel: $4! = 4 \cdot 3 \cdot 2 \cdot 1 = 24$)*.

## Substitutionschiffre ausprobieren


```py live_py title=to__substitution.py
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


```py live_py title=from__substitution.py
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


```py live_py title=schlüssel.py
from random import shuffle
schlüssel='A B C D E F G H I J K L M N O P Q R S T U V W X Y Z'.split(' ')
shuffle(schlüssel)
print(' '.join(schlüssel))
```

---

[^1]: Quelle: [rothe.io](https://rothe.io/?b=crypto&p=481987)