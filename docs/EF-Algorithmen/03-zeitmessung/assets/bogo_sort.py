
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

N = 6
to_sort = list(range(N))

execution_time = timeit(lambda: bogo_sort(deepcopy(to_sort)), number=100)
print(f'n={N}: {execution_time / 100} s')