---
sidebar_custom_props:
  id: c9c12658-1a76-41cf-ae90-4aa87ae4dad8
---
# Rekursion

Einige der kennengelernten Sortier-Algorithmen sind rekursiv. Wir wollen uns die Rekursion am Beispiel der Fakultät nochmals anschauen und eine weitere ganz spezielle rekursive Funktion kennenlernen.

## Fakultät

[@youtube](https://www.youtube-nocookie.com/embed/Mv9NEXX1VHc?si=_ca-r47UQ_zAXdmi)

:::aufgabe
<Answer type="state" webKey="81546ad2-fed7-4e58-8d09-7047466ddb71" />


Dateinamen
: __EF-Informatik/docs/Algorithmen/faculty.py__

Programmieren Sie selbst die Fakultätsfunktion und führen Sie diese in VS Code im Debug-Modus aus. Sehen Sie sich insbesondere den Stack an und versuchen Sie zu verstehen, wie die Rekursion funktioniert.

Halten Sie Ihre Erkenntnisse fest!

<Answer type="text" webKey="fbd9a76e-5027-4547-8e31-c4cd1f6ad92a" />
:::

## Ackermann-Funktion

[@youtube](https://www.youtube-nocookie.com/embed/i7sm9dzFtEI?si=0vpwNNutzy5Bmyhm)

:::aufgabe
<Answer type="state" webKey="1439a69e-d803-4028-a5a5-ec8896a88dfc" />

Schauen Sie sich das obige Video an und programmieren Sie die Ackermann-Funktion in Python. Versuchen Sie diese für die im Video vorkommenden Werte zu berechnen.

Dateinamen
: __EF-Informatik/docs/Algorithmen/ackermann.py__

<Answer type="text" webKey="55b86292-0986-484c-b34c-0fd42410fefe" />

:::


## ⭐ Schizophrene Zahlen

[@pdf --no-download](./assets/sdw23-schizophrene-zahlen.pdf)

::::aufgabe
<Answer type="state" webKey="30c9e11d-b88f-49a0-808b-7e12e04b7774" />

Dateinamen
: __EF-Informatik/docs/Algorithmen/schizo.py__

Schreiben Sie eine Funktion `schizo(n)`, die für eine gegebene Zahl `n` die schizophrene Zahl `s(n)` berechnet.

:::danger Grosse Zahlen...
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