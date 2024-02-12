from timeit import timeit
from copy import deepcopy


def split(data):
    middle = len(data) // 2
    lower_half = data[0 : middle]
    upper_half = data[middle : len(data)]
    return lower_half, upper_half


def merge(lower, upper):
    lower_index = 0
    upper_index = 0
    sorted = []
    while lower_index < len(lower) or upper_index < len(upper):
        if lower_index == len(lower):
            sorted.append(upper[upper_index])
            upper_index += 1
        elif upper_index == len(upper):
            sorted.append(lower[lower_index])
            lower_index += 1  
        elif lower[lower_index] < upper[upper_index]:
            sorted.append(lower[lower_index])
            lower_index += 1
        else:
            sorted.append(upper[upper_index])
            upper_index += 1
    return sorted


def merge_sort(data):
    if len(data) > 1:
        lower_half, upper_half = split(data)
        lower_half = merge_sort(lower_half)
        upper_half = merge_sort(upper_half)
        return merge(lower_half, upper_half)
    else:
        return data

N = 1000
to_sort = [i for i in range(N)]

execution_time = timeit(lambda: merge_sort(deepcopy(to_sort)), number=100)

print(f'n={N}: {execution_time / 100} s')