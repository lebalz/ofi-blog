---
sidebar_custom_props:
  id: bd437e66-5090-4f2f-97ca-866d8184d359
---

# Algorithmen

Ziel
: Die Zahlen sollen von links nach rechts sortiert werden.
Material
: 1 Grundplatte, 1 Schiebevorrichtung, 7 Zahlenchips [^1]

<Tabs>
<TabItem value="Selection Sort">

## Selection Sort

Startaufstellung:

![--width=400px](images/selection-s00.png)

### 1. Schritt: Markiere das Feld ganz links

Das Feld ganz links wird markiert und nach oben in den temporären Speicher gelegt: 

![--width=400px](images/selection-s01.png)

### 2. Schritt: Selection

Jede Zahl überprüfen: falls die Zahl kleiner ist als die Zahl im Zwischenspeicher, wird die aktuelle Zahl im Zwischenspeicher nach unten auf ihren Platz und die kleinere Zahl nach oben in den Zwischenspeicher gelegt:

![](images/selection-s02-full.png)


### 2. Schritt: Tauschen

Die erste Zahl wird (sofern vorhanden) in die leere Position verschoben:

![--width=400px](images/selection-s02b.png)

und die markierte Zahl wird ins leere Feld verschoben:

![--width=400px](images/selection-s02c.png)

### 3. Schritt: Schieben

Die Schieblehre wird um eine Position nach rechts geschoben:

![--width=400px](images/selection-s03.png)

### ... weiter mit Schritt 1 bis keine Zahl mehr übrig ist

:::details[Nächste Runde]

![](images/selection-s04.png)
:::

<Answer type="text" webKey="b1709e13-1f26-47d2-978e-18a96b7211ab" />

</TabItem>
<TabItem value="Insertion Sort">

## Insertion Sort

Startaufstellung:

![--width=700px](images/insertion-s00.png)


### 1. Schritt: Feld markieren

Die Zahl ganz rechts wird markiert, indem sie nach oben in den temporären Speicher gelegt wird:

![--width=400px](images/insertion-s01.png)

### 2. Schritt: Tauschen

Solange die Zahl links neben dem leeren Feld grösser ist als die markierte Zahl, wird sie ins leere Feld verschoben:

![--width=400px](images/insertion-s02.png)

### 3. Schritt: Insertion

Die markierte Zahl wird ins leere Feld verschoben:

![--width=400px](images/insertion-s03.png)


### 4. Schritt: Schieben

Die Schieblehre wird um eine Position nach rechts geschoben:

![--width=400px](images/insertion-s04.png)

### ... weiter mit Schritt 1 bis keine Zahl mehr übrig ist

:::details[Nächste Runde]

![](images/insertion-s05-full.png)

:::

<Answer type="text" webKey="13a1e010-9fc8-4639-9e6b-cccea8b8b1dc" />

</TabItem>
</Tabs>

## Pseudocode

Listen (Felder) werden in eckigen Klammern geschrieben, im Unterschied zu Python beginnen die Indizes bei 1.

```
A = [1, 2, 3]
// A[1] => 1
```

### Selection Sort

```py
Selection-Sort(A)
    for j = 1 to A.länge - 1
        schlüssel = A[j]
        index = j
        // tausche A[j] mit dem tiefsten Wert der
        // unsortierten Sequenz A[j..A.länge]
        i = j + 1
        while i <= A.länge
            if A[i] < A[index]
                index = i
            i = i + 1
        A[j] = A[index]
        A[index] = schlüssel 
```

### Insertion Sort

```py
Insertion-Sort(A)
    for j = 2 to A.länge
        schlüssel = A[j]
        // füge A[j] in die sortierte Sequenz A[1..j-1] ein
        i = j - 1
        while i > 0 and A[i] > schlüssel
            A[i+1] = A[i]
            i = i - 1
        A[i+1] = schlüssel
```

[^1]: Druckvorlage: [apaik5](https://www.printables.com/@apaik5_264920)@[printables.com](https://www.printables.com/model/340344-computer-science-sorting-algorithms-learning-tool)