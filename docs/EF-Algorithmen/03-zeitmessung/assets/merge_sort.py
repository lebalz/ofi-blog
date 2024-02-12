from timeit import timeit
from copy import deepcopy


def merge(a, p, q, r):
    n1 = q - p + 1
    n2 = r - q
    left = [0] * (n1 + 1)
    right = [0] * (n2 + 1)
    for i in range(n1):
        left[i] = a[p + i]
    for j in range(n2):
        right[j] = a[q + j + 1]
    left[n1] = float('inf')
    right[n2] = float('inf')
    i = 0
    j = 0
    for k in range(p, r + 1):
        if left[i] <= right[j]:
            a[k] = left[i]
            i = i + 1
        else:
            a[k] = right[j]
            j = j + 1

def merge_sort(a, p, r):
    if p < r:
        q = (p + r) // 2
        merge_sort(a, p, q)
        merge_sort(a, q + 1, r)
        merge(a, p, q, r)

N = 1000
to_sort = [N - i for i in range(N)]
execution_time = timeit(lambda: merge_sort(deepcopy(to_sort), 0, N - 1), number=100)

print(f'n={N}: {execution_time / 100} s')