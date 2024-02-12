def factorial(n):
    if n == 0:
        return 1
    fac = n
    for i in range(1, n):
        fac = fac * i
    return fac

print(factorial(0))  # 1

