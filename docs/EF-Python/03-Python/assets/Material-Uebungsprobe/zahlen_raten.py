from random import randint


gesucht = randint(0, 100)
runde = 1
geraten = ''

def to_int():
    global geraten
    try:
        geraten = int(geraten)
    except:
        geraten = -1


def is_valid():
    global geraten
    if geraten < 0 or geraten > 100:
        geraten = -1
    

def abfrage():
    global geraten
    geraten = -1
    while geraten < 0:
        geraten = input(f'{runde}. Versuch: Gib eine ganze Zahl zwischen 0 und 100 ein: ')
        to_int()
        is_valid()

def play():
    global runde
    while geraten != gesucht:
        abfrage()
        runde = runde + 1
        if geraten > gesucht:
            print('Die eingegebene Zahl ist zu gross')
        elif geraten < gesucht:
            print('Die eingegebene Zahl ist zu klein')
    print(f'Bravo, du hast in {runde} Runden die gesuchte Zahl {gesucht} gefunden.')

play()