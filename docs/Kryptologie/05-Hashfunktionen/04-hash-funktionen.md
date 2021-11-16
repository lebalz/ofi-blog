---
title: Hash Funktionen
---

# Hashfunktionen [^1]

:::info
«Eine Hashfunktion ist eine Abbildung, die eine grosse Eingabemenge auf eine kleinere Zielmenge abbildet.»
:::

Da eine **Eingabe beliebiger Länge** auf eine **Ausgabe mit fester Länge** abgebildet, ist Injektivität unmöglich. Die Eingabemenge ist folglich unendlich gross (Texte, Videos und Tonaufnahmen beliebiger Länge, Bilder beliebiger Grösse, ...). Die Ausgabemenge ist allerdings endlich, da die Hashwerte (also die Prüfsummen) eine fixe Länge haben.

![Hashfunktion --width=600px](images/hash-function.png)

## Hashfunktion
In der Abbildung oben sieht man, dass die Menge der Passwörter nur eine Teilmenge aller theoretisch möglichen Eingaben darstellt. Es ist nicht zu verhindern, dass Kollisionen auftreten.

:::info Kollisionsresistenz
Um genügend Sicherheit zu bieten, soll eine gute kryptographische Hashfunktion folglich kollisionsresistent sein. Das heisst, es soll praktisch unmöglich sein, Kollisionen zu finden.
:::

## Hashwert

:::flex
Die Ausgabe der Hashfunktion – also die Prüfsumme – wird **Hashwert** genannt.

Man kann einen Hashwert mit einem Fingerabdruck vergleichen, weil er gewissermassen eindeutig zu einem Passwort passt wie ein Fingerabdruck zu einem Menschen.

***--align-self=end
![Ein Hashwert ist wie ein Fingerabdruck --width=100px](images/fingerprint.png)
:::
## Aktuelle Beispiele
Es gibt verschiedene aktuelle Hashfunktionen. Nachfolgend einige mit SHA-1 (Secure Hash Algorithm) berechnete Hashwerte:

<div className="slim-table">

| Passwort  | Hashwert                                   |
| :-------- | :----------------------------------------- |
| 1234567   | `20eabe5d64b0e216796e834f52d61fd0b70332fc` |
| qwerty    | `b1b3773a05c0ed0176787a4f1574ff0075f7521e` |
| abc123    | `6367c48dd193d56ea7b0baad25b19455e529f5ee` |
| 000000    | `c984aed014aec7623a54f0591da07a85fd4b762d` |
| iloveyou  | `ee8d8728f435fd550f83852aabab5234ce1da528` |
| password1 | `e38ad214943daad1d64c102faec29de4afe9da3d` |
| password2 | `2aa60a8ff7fcd473d321e0146afd9e26df395147` |

</div>

Die letzten beiden Beispiele zeigen, dass bereits kleinste Änderungen zu komplett anderen Hashwerten führen. Kryptographische Hashfunktion sind so konstruiert, dass bei einer Änderung an einem Bit ca. 50% der Hashwert-Bits ändern.

<Answer type="text" webKey="34f7ade1-bd99-46ef-a2f2-883c02573eb1" />

[^1]: Quelle: [rothe.io](https://rothe.io/?b=crypto&p=103784)