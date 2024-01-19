from timeit import timeit
from copy import deepcopy

def insertion_sort(a):
    for j in range(1, len(a)):
        key = a[j]
        i = j - 1
        while i >= 0 and a[i] > key:
            a[i + 1] = a[i]
            i = i - 1
        a[i + 1] = key
    return a

N = 10000
to_sort = [N - i for i in range(N)]
execution_time = timeit(lambda: insertion_sort(deepcopy(to_sort)), number=5)

print(f'n={N}: {execution_time / 5} s')