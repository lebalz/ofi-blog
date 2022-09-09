from time import time
from math import sqrt
MAX_ZAHL = 10000

def prime_default():
    primes = []
    t0 = time()
    for zahl in range(2, MAX_ZAHL + 1):
        is_prime = True
        for to_test in range(2, zahl):
            if zahl % to_test == 0:
                is_prime = False
        if is_prime:
            primes.append(zahl)
    print('Default: ', time() - t0, 'Sekunden')
    print(f'{len(primes)} Primzahlen von 1 bis {MAX_ZAHL}', primes[:30])


def prime_optimization_1():
    primes = []
    t0 = time()
    for zahl in range(2, MAX_ZAHL + 1):
        is_prime = True
        for to_test in range(2, zahl):
            if zahl % to_test == 0:
                is_prime = False
                break
        if is_prime:
            primes.append(zahl)
    print('Stoppen wenn keine Primzahl', time() - t0, 'Sekunden')
    print(f'{len(primes)} Primzahlen von 1 bis {MAX_ZAHL}', primes[:30])


def prime_optimization_2():
    primes = []
    t0 = time()
    for zahl in range(2, MAX_ZAHL + 1):
        is_prime = True
        for to_test in range(2, int(sqrt(zahl) + 1)):
            if zahl % to_test == 0:
                is_prime = False
                break
        if is_prime:
            primes.append(zahl)
    print('Nur bis zur Wurzel testen', time() - t0, 'Sekunden')
    print(f'{len(primes)} Primzahlen von 1 bis {MAX_ZAHL}', primes[:30])

def prime_optimization_3():
    'Sieb des Eratosthenes'
    primes = [2]
    t0 = time()
    for zahl in range(2, MAX_ZAHL + 1):
        is_prime = True
        tmax = int(sqrt(zahl) + 1);
        for to_test in primes:
            if to_test > tmax:
                break
            if zahl % to_test == 0:
                is_prime = False
                break
        if is_prime:
            primes.append(zahl)
    print('Nur Primzahlen testen', time() - t0, 'Sekunden')
    print(f'{len(primes)} Primzahlen von 1 bis {MAX_ZAHL}', primes[:30])


prime_default()
prime_optimization_1()
prime_optimization_2()
prime_optimization_3()