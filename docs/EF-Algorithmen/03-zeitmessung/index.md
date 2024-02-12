---
sidebar_custom_props:
  id: de19a145-7682-4850-bd3b-76e1e9bfc371
---
# Zeitmessung

## Zeitmessung in Python

```py
from timeit import timeit
from random import shuffle
from copy import deepcopy

def bogo_sort(a):
    while True:
        shuffle(a)
        is_sorted = True
        for i in range(len(a)-1):
            if a[i] > a[i+1]:
                is_sorted = False
                break
        if is_sorted:
            return a

to_sort = list(range(6))
shuffle(to_sort)

execution_time = timeit(lambda: bogo_sort(deepcopy(to_sort)), number=100)
print('Zeit für 100x Sortieren:', execution_time)
```


::::aufgabe
<Answer type="state" webKey="2d7b9a0d-172d-4d30-b1ba-d14c59708239" />

Dateinamen
: __EF-Informatik/docs/Algorithmen/selection_sort.py__
: __EF-Informatik/docs/Algorithmen/insertion_sort.py__
: __EF-Informatik/docs/Algorithmen/merge_sort.py__
: __EF-Informatik/docs/Algorithmen/zeitmessung.md__

Führen Sie Zeitmessungen für die drei Algorithmen durch, indem Sie die Funktion `timeit` verwenden.

Verwenden Sie für `n` die Werte `100`, `1000`, `10000`, `15000`, `20000`. (Ab `10000` müssen Sie die Anzahl der Wiederholungen auf `5` oder tiefer reduzieren.)

Stellen Sie die Messergebnisse tabellarisch und graphisch dar, so dass ein Trend sichtbar wird.

:::danger
Damit bei der Mehrfachwiederholung stets dieselbe Eingabe verwendet wird, muss die übergebene  Liste mit `deepcopy` aus dem Modul `copy` kopiert werden. Wenn Sie die Liste nicht kopieren, dann wird die Liste beim Sortieren verändert und die Zeitmessung ist nicht mehr aussagekräftig. 
:::

Halten Sie Ihre Messergebnisse im EF Repository unter __docs/Algorithmen/zeitmessung.md__ fest.

<Tabs>
<TabItem value="Selection Sort">

```py live_py slim
def selection_sort(a):
    for j in range(len(a) - 1):
        key = a[j]
        index = j
        for i in range(j + 1, len(a)):
            if a[i] < a[index]:
                index = i
        a[j] = a[index]
        a[index] = key
    return a

to_sort = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
print('Unsortiert:', to_sort)
print('Sortiert:  ', selection_sort(to_sort))
```

</TabItem>
<TabItem value="Insertion Sort">

```py live_py slim
def insertion_sort(a):
    for j in range(1, len(a)):
        key = a[j]
        i = j - 1
        while i >= 0 and a[i] > key:
            a[i + 1] = a[i]
            i = i - 1
        a[i + 1] = key
    return a

to_sort = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
print('Unsortiert:', to_sort)
print('Sortiert:  ', insertion_sort(to_sort))
```


</TabItem>
<TabItem value="Merge Sort">

```py live_py slim
def merge(lower, upper):
    sorted = []
    while len(lower) > 0 and len(upper) > 0:
        if lower[0] < upper[0]:
            sorted.append(lower.pop(0))
        else:
            sorted.append(upper.pop(0))
    if len(lower) > 0:
        sorted.extend(lower) # liste lower an sorted anhängen 
    elif len(upper) > 0:
        sorted.extend(upper) # liste upper an sorted anhängen

    return sorted


def merge_sort(data):
    if len(data) <= 1:
        return data
    else:
        middle = len(data) // 2
        left = data[0 : middle]
        right = data[middle : len(data)]
        left = merge_sort(left)
        right = merge_sort(right)
        return merge(left, right)

to_sort = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
print('Unsortiert:', to_sort)
print('Sortiert:  ', merge_sort(to_sort))
```


</TabItem>
</Tabs>

::::