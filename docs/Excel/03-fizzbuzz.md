---
sidebar_custom_props:
  id: 2ae2a203-44ea-481b-87d1-9bf5576c857d
---
# Fizz Buzz

> Das Fizz-Buzz Spiel: In einem Kreis wird der Reihe nach gezählt:
>
> **1, 2, __Fizz__, 4, __Buzz__, __Fizz__, 7, 8, __Fizz__, __Buzz__, 11, __Fizz__, 13, 14, __FizzBuzz__, 16, ...**
> 
> ![](images/fizz-buzz.png)

:mdi[arrow-right] Erkennen Sie das Schema dahinter?

<Solution webKey="b65ca220-bd14-4c60-a20f-c61ae9a7b42f" show>

Ist die Zahl durch $3$ teilbar, wird "Fizz" ausgegeben, ist sie durch $5$ teilbar, wird "Buzz" ausgegeben; oder eben FizzBuzz wenn die Zahl sowohl durch $3$ wie auch durch $5$ teilbar ist...
</Solution>
<br />

:::info[Lernziele]
Sie lernen die Excel-Funktionen
- `REST`
- `WENN`
- `TEXTKETTE`

kennen.
:::

::video[./images/03-fizzbuzz.mp4]

:::aufgabe

Dateiname
: __Informatik/Excel/03-fizzbuzz.xlsx__ 
Vorlage
: 👉 [03-fizzbuzz.xlsx](assets/03-fizzbuzz.xlsx)

<Answer type="state" webKey="2ebb004d-fc00-4e7c-bdd4-7849da01c496" />

Erstellen Sie Ihr Fizz-Buzz Programm
Halten Sie in Stichworten fest, was diese Funktionen machen und wie Sie angewandt werden.

<Answer type="text" webKey="6e7e98f1-24c0-4e0b-8869-7b5ed61490c7" />
:::

:::aufgabe[Fortsetzung]
<Answer type="state" webKey="a1464d03-afca-4c32-82d6-d1c3071b3840" />

Das Programm braucht die "Hilfsspalten" B, C, D & E. Können Sie das Programm durch verschachteln von Funktionen so umschreiben, dass **nur drei Spalten** nötig sind?

Bspw. in Spalte B berechnen Sie "Rest 3" und verwenden es in Spalte D :mdi[arrow-right] die Berechnung von Spalte B kann aber auch direkt in Spalte D vorgenommen werden, so dass die Spalte B überflüssig ist.

Welche Variante ist übersichtlicher, wieso?

<Answer type="text" webKey="74e5c8a6-734d-4f98-b651-e02c11de9165" />
:::

:::aufgabe[⭐ Zusatz 1]
<Answer type="state" webKey="b689ed32-642f-4af6-a6e6-d3c1f6730a68" />

Zusätzlich soll in der letzten Spalte __Bazz__ angezeigt werden, wenn die Zahl durch $7$ teilbar ist:

**1, 2, __Fizz__, 4, __Buzz__, __Fizz__, __Bazz__, 8, __Fizz__, __Buzz__, 11, __Fizz__, 13, __Bazz__, __FizzBuzz__, 16, ...**


Wann tritt zum ersten mal "FizzBuzzBazz" auf?
<Answer type="string" webKey="8f99ae83-6541-4fb0-8544-7ddc45ac8a75" solution="105"/>
:::

:::aufgabe[⭐ Zusatz 2]
<Answer type="state" webKey="b7197f58-35aa-4435-b326-374fae3eb6fa"  />

Definieren Sie 2 (bzw. 3) Zellen, in welchen Sie die Zahlen für die Teilbarkeits-Überprüfung (3, 5, 7) frei festlegen können.

:::