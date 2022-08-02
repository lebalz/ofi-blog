---
title: Passwörter Speichern
---


# Passwörter speichern [^1]
Passwörter sind wichtig, wir sollten sie beschützen. Doch dies gilt nicht nur für unsere eigenen Passwörter, auch Firmen sollten die Passwörter ihrer Kunden schützen.

## Passwörter speichern
Wie würden Sie die Passwörter Ihrer Kunden speichern, falls Sie einen Webshop erstellen würden? Natürlich nicht im Klartext, oder?

Dass die Passwörter «verschlüsselt» werden müssen, scheint logisch. Also sollten die Passwörter wohl auf dem Firmenserver verschlüsselt werden, damit sie nicht ausgelesen werden können – weder von Hackern noch von neugierigen Mitarbeitenden.

Doch gerade dies ist ein grosses Problem: Der Firmenserver soll die Kunden anhand ihres Passwortes authentifizieren können, die Mitarbeitenden dürfen allerdings keinen Zugriff auf die Kundenpasswörter haben. Alle bisherigen Verschlüsselungsverfahren arbeiten mit einem Schlüssel (oder mit mehreren). Wer den richtigen Schlüssel kennt, kann die Passwörter entschlüsseln. Wird der Schlüssel auf den Firmenservern gespeichert, so haben zumindest gewisse Mitarbeitende Zugriff.

Hier kommen wir momentan nicht weiter. Wir tasten uns von einer anderen Seite an die Lösung heran.

## Prüfsumme
Wir können jedoch – anstelle eines Passwortes – eine Prüfsumme speichern:

<div className="slim-table">

| Benutzername | Passwort   | Iterierte Quersumme                                                                 | Alternierende Quersumme                                                              |
| :----------- | :--------- | :---------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------- |
| alice        | 12345      | 6                                                                                   | 3                                                                                    |
| bob          | 123456     | <Answer type="string" webKey="e4c0e4ee-b780-4b66-b3eb-fee7643ef81c" solution="3" /> | <Answer type="string" webKey="51536ba1-e597-4ad6-889e-da2f6b30e2bd" solution="-3" /> |
| charlie      | 12345678   | <Answer type="string" webKey="4f07fa06-d3ff-49db-82ce-cd8632c67d84" solution="9" /> | <Answer type="string" webKey="d2ebd64c-8b98-4663-9eae-3fcd0f8552e6" solution="-4" /> |
| donald       | 123456789  | <Answer type="string" webKey="f0c5928e-9a39-48c8-bcb7-1b2880ba175e" solution="9" /> | <Answer type="string" webKey="ab408c87-9091-48f6-9e62-d401dd528399" solution="5" />  |
| eve          | 1234567890 | <Answer type="string" webKey="521b7f5f-407b-4014-ada2-55d6376de9e1" solution="9" /> | <Answer type="string" webKey="0c9e1541-20ec-4ac0-b525-e5c1197c6700" solution="5" />  |
| frederick    | 11111111   | <Answer type="string" webKey="20936c4d-0147-4755-992a-6f6a217d7044" solution="8" /> | <Answer type="string" webKey="f62d0c99-c687-4122-a26e-4962c3ff70b3" solution="0" />  |
| grace        | 123123     | <Answer type="string" webKey="e662e73f-3299-474a-86ca-3dc3a415549d" solution="3" /> | <Answer type="string" webKey="ba26c8da-572c-4736-996c-597bd13e44c7" solution="0" />  |
| hanna        | password   | <Answer type="string" webKey="af45e7bc-1898-4790-a2e6-71bf311c2b95" solution="7" /> | <Answer type="string" webKey="6f718695-6297-49a6-9b38-f8bd5faae01c" solution="37" /> |
| ian          | picture1   | <Answer type="string" webKey="a61c5db0-31e2-4c16-86d7-b8b518497ac8" solution="3" /> | <Answer type="string" webKey="3d1d3b0b-e008-403a-b2b3-b344a1b6582f" solution="-3" /> |

</div>

Die **Iterierte Quersumme** ist die Quersumme, die entsteht, wenn man solange immer wieder die Quersumme ausrechnet, bis nur noch eine einzige Ziffer übrig bleibt. Für die Zahl 97 lautet die normale Quersumme 16, berechnet man davon wiederum die Quersumme, so entsteht die iterierte Quersumme: `7`.

Die **Alternierende Quersumme** entsteht durch abwechslungweises Addieren und Subtrahieren der einzelnen Ziffern (für 1234 lautet diese 1 - 2 + 3 - 4 = -2).

:::aufgabe Tabelle vervollständigen
Vervollständigen Sie die oben stehende Tabelle. Anstelle der in den Passwörtern enthaltenen Buchstaben können Sie die unten stehenden Zahlen einsetzen.

<div className="slim-table no-table-header">

|            |                                                                        |
| :--------- | :--------------------------------------------------------------------- |
| Buchstaben | `A B C D E F G H I _J _K _L _M _N _O _P _Q _R _S _T _U _V _W _X _Y _Z` |
| Zahlen     | `1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26` |

</div>

1. Welche der beiden Funktionen würden Sie wählen, um die Passwörter zu speichern?

<Answer type="text" webKey="7eb652cd-88a4-41d8-a426-4bd2d7dbcec4" />

2. Welche Probleme sehen Sie bei beiden Funktionen?

<Answer type="text" webKey="e1cecdb8-b606-409e-ae94-64827efe06cf" />
:::

:::finding Wunsch: **Injektiviät**
Zu jeder Prüfsumme gehört höchstens ein Passwort. Oder anders formuliert: Kollisionen sollen vermieden werden. Das bedeutet, dass jedes Passwort eine andere Prüfsumme erhalten soll.
:::

![Injektivität --width=500px](images/injective.png)

## Bessere Prüfsummen?!
Nachfolgend eine weitere Liste mit Vorschlägen für Prüfsummen.

<div className="slim-table">

| Benutzername | Passwort  | ???       | ???       | ???        |
| :----------- | :-------- | :-------- | :-------- | :--------- |
| alice        | 1234567   | 7654321   | 3456789   | 5040       |
| bob          | qwerty    | ytrewq    | sygtva    | 17595000   |
| charlie      | abc123    | 321cba    | cde345    | 36         |
| donald       | million2  | 2noillim  | oknnkqp4  | 63685440   |
| eve          | 000000    | 000000    | 222222    | 0          |
| frederick    | 1234      | 4321      | 3456      | 24         |
| grace        | iloveyou  | uoyevoli  | knqygaqw  | 1403325000 |
| hanna        | password1 | 1drowssap | rcuuyqtf3 | 143475840  |
| ian          | qqww1122  | 2211wwqq  | ssyy3344  | 611524     |

</div>

:::aufgabe Aufgabe Funktionen erkennen
Erkennen Sie, wie die Prüfsummen in den hintersten drei Spalten berechnet werden?

<Answer type="text" webKey="ead7f2f2-e792-48c8-a6cc-994757348e75" />
:::

:::finding Wunsch: **Unumkehrbarkeit**
Aus der Prüfsumme soll nicht auf das Passwort geschlossen werden können.
:::

:::aufgabe ⭐️ Zusatzaufgabe Sicheres Einloggen
Wie funktioniert der Anmeldevorgang an den Computern der Schule, wenn Benutzername und Passwort von einem Server überprüft werden muss? Was wird in welcher Form übertragen?

<Answer type="text" webKey="d2dcaf7f-9480-495f-9142-1f606e424069" />

:::

<Answer type="text" webKey="b146e1f3-ef8c-4ed7-ade2-428829f619fa" placeholder="Notizen..."/>

[^1]: Quelle: [rothe](https://rothe.io/?b=crypto&p=994723)
