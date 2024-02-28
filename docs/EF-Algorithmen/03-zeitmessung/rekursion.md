---
sidebar_custom_props:
  id: c9c12658-1a76-41cf-ae90-4aa87ae4dad8
---
# Rekursion

Einige der kennengelernten Sortier-Algorithmen sind rekursiv. Wir wollen uns die Rekursion am Beispiel der Fakultät nochmals anschauen und eine weitere ganz spezielle rekursive Funktion kennenlernen.

## Fakultät

::youtube[https://www.youtube-nocookie.com/embed/Mv9NEXX1VHc?si=_ca-r47UQ_zAXdmi]

:::aufgabe
<Answer type="state" webKey="81546ad2-fed7-4e58-8d09-7047466ddb71" />


Dateinamen
: __EF-Informatik/docs/Algorithmen/faculty.py__

Programmieren Sie selbst die Fakultätsfunktion und führen Sie diese in VS Code im Debug-Modus aus. Sehen Sie sich insbesondere den Stack an und versuchen Sie zu verstehen, wie die Rekursion funktioniert.

Halten Sie Ihre Erkenntnisse fest!

<Answer type="text" webKey="fbd9a76e-5027-4547-8e31-c4cd1f6ad92a" />
:::

:::aufgabe
<Answer type="state" webKey="c869adfe-6b8f-402e-bf35-9a701302f752" />

Betrachten Sie nochmals die Sortieralgorithmen, die Sie bei der Zeitmessung verwendet haben. Welche davon sind rekursiv?

<Answer type="state" webKey="23547052-e9b1-4ef3-bb4f-aa8b612db201" />
:::

## Ackermann-Funktion

::youtube[https://www.youtube-nocookie.com/embed/i7sm9dzFtEI?si=0vpwNNutzy5Bmyhm]

:::aufgabe
<Answer type="state" webKey="1439a69e-d803-4028-a5a5-ec8896a88dfc" />

Schauen Sie sich das obige Video an und programmieren Sie die Ackermann-Funktion in Python. Versuchen Sie diese für die im Video vorkommenden Werte zu berechnen.

Dateinamen
: __EF-Informatik/docs/Algorithmen/ackermann.py__

<Answer type="text" webKey="55b86292-0986-484c-b34c-0fd42410fefe" />

:::


:::aufgabe[Prüfsummenerzeugung]
<Answer type="state" webKey="bde05e79-056f-4264-a2ab-5ffa8972f8f2" />

```py
def check_sum(ord_list):
    if len(ord_list) <= 0:
        return 0
    elif len(ord_list) < 2:
        return ord_list[0]
    return (ord_list[0] + ord_list[1]) * len(ord_list) + check_sum(ord_list[2:])

print(check_sum([4, 2, 3, 3, 12]))
```

Was macht der obige Code? Führen Sie den Code für die gegebene Liste **von Hand** aus - welches Ergebnis kommt raus?

<Answer type="text" webKey="ce188e5c-3757-4849-bb4d-8db4dda0116e" />


Analysieren Sie das Laufzeitverhalten des Codes. Wie viele Rekursionsaufrufe braucht es bei einer Liste mit `n` Elementen?

<Answer type="text" webKey="4f2f30fb-45f8-43f7-9381-fba24bc99869" />

In welcher Komplexitätsklasse liegt der Code?

<Answer type="text" webKey="b1af631f-8fdf-4e89-af91-1a97b1b8703a" />

<Solution webKey="b1af631f-8fdf-4e89-af91-1a97b1b8703a">

a. 60

```py live_py slim
def check_sum(ord_list):
    if len(ord_list) == 0:
        return 0
    elif len(ord_list) < 2:
        return ord_list[0]
    return (ord_list[0] + ord_list[1]) * len(ord_list) + check_sum(ord_list[2:])

print(check_sum([4, 2, 3, 3, 12]))
```

b. Bei einer Liste mit $n$ Elementen braucht es maximal $\frac{n}{2} + 1$ Rekursionsaufrufe.

c. Der Code liegt in $\mathcal{O}(n)$.

</Solution>
:::

:::aufgabe[Prüfsummenerzeugung 2]
<Answer type="state" webKey="94f25dc6-7dec-472f-8d52-f48a835e238d" />

```py
def check_sum2(liste):
    cnt[0] += 1
    if len(liste) == 0:
        return 0
    elif len(liste) == 1:
        return liste[0] * liste[0]
    idx = len(liste) // 2   # durch 2 teilen und das Ergebnis abrunden
    if liste[0] < liste[idx]:
        return check_sum2(liste[:idx]) * liste[idx]
    else:
        return check_sum2(liste[idx:]) * liste[0]

print(check_sum2([1,4,3,6,2]))
print(check_sum2([1,2,3,4,5,6,7,8,9]))
print(check_sum2([9,8,7,6,5,4,3,2,1]))
```

Was macht der obige Code? Führen Sie den Code für die gegebenen Listen **von Hand** aus - welches Ergebnis kommt raus?

<Answer type="text" webKey="f17c60a8-b3ce-4495-8dff-fa0c70f46a86" />

Analysieren Sie das Laufzeitverhalten des Codes. Wie viele Rekursionsaufrufe braucht es bei einer Liste mit `n` Elementen? **Tipp**: Wie verändert sich die Listengrösse bei jedem Rekursionsaufruf?

<Answer type="text" webKey="994d8fad-8db0-49e5-a0e8-7cc42bff760e" />

In welcher Komplexitätsklasse liegt der Code?

<Answer type="text" webKey="f3049075-23a5-4b5d-a774-bfaf0b4712ff" />

<Solution webKey="b1af631f-8fdf-4e89-af91-1a97b1b8703a">

a. 12, 30, 270

```py live_py slim
def check_sum2(liste):
    if len(liste) == 0:
        return 0
    elif len(liste) == 1:
        return liste[0] * liste[0]
    idx = len(liste) // 2
    if liste[0] < liste[idx]:
        return check_sum2(liste[:idx]) * liste[idx]
    else:
        return check_sum2(liste[idx:]) * liste[0]

print(check_sum2([1,4,3,6,2]))
print(check_sum2([1,2,3,4,5,6,7,8,9]))
print(check_sum2([9,8,7,6,5,4,3,2,1]))
```

b. Bei einer Liste mit $n$ Elementen braucht es maximal $\lceil log_{2}(n) \rceil + 1$ Rekursionsaufrufe ($\lceil ... \rceil$ ist mathematisch für "Aufrunden").

c. Der Code liegt in $\mathcal{O}(log(n))$.
</Solution>
:::

## ⭐ Schizophrene Zahlen


::pdf[./assets/sdw23-schizophrene-zahlen.pdf]{noDownload}

::::aufgabe
<Answer type="state" webKey="30c9e11d-b88f-49a0-808b-7e12e04b7774" />

Dateinamen
: __EF-Informatik/docs/Algorithmen/schizo.py__

Schreiben Sie eine Funktion `schizo(n)`, die für eine gegebene Zahl `n` die schizophrene Zahl so wie im Artikel beschrieben berechnet.

:::danger[Grosse Zahlen...]
Beachten Sie: Python rundet standardmässig die 16. Nachkommastelle. Sollen mehr Nachkommastellen dargestellt werden, können die Anzahl Nachkommastellen erhöht werden. 

Dies geht mit dem Modul `decimal`:
```py live_py slim
from decimal import Context, Decimal
from math import sqrt
wurzel2_normal = sqrt(2)
wurzel2_decimal = Decimal(2).sqrt(Context(prec=1000))
print(f'Auf   15 Stellen: {wurzel2_normal}')
print(f'Auf 1000 Stellen: {wurzel2_decimal}')
```
:::

```py live_py id=66161c27-ffb6-4dc6-8d72-61c997b99f2b title=schizo.py
def schizo(n):
    pass
```

<Answer type="text" webKey="913fe87b-f8cf-45ab-a71e-eba4ea8338ea" />

::::