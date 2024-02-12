from timeit import timeit
from copy import deepcopy
from random import shuffle

def selection_sort(a):
    for j in range(len(a) - 1):
        key = a[j]
        idx = j
        i = j + 1
        while i < len(a):
            if a[i] < a[idx]:
                idx = i
            i = i + 1
        a[j] = a[idx]
        a[idx] = key

N = 1000
to_sort = [i for i in range(N)]

execution_time = timeit(lambda: selection_sort(deepcopy(to_sort)), number=100)

print(f'n={N}: {execution_time / 100} s')