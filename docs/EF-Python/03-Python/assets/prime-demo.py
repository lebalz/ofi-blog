from time import time
primes = []
MAX_ZAHL = 100000

#    3
t0 = time()
for zahl in range(2, MAX_ZAHL + 1):
    is_prime = True
    for test_zahl in range(2, zahl):
        if zahl % test_zahl == 0:
            is_prime = False
            break
    if is_prime:
        primes.append(zahl)
t1 = time()
zeit = t1 - t0

print('Primzahlen', zeit, len(primes))



