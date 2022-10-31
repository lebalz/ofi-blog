print('Hi Fred!')

name = 'Fred'

def say_hi(name):
    print(f'Hi {name}!')

say_hi('Melanie')


name = 'Fred'

def say_hi():
    print(f'Hi {name}!')

say_hi()

name = 'Fred'

def say_hi():
    name = 'Melanie'
    print(f'Hi {name}!')

say_hi()
print(name)


name = 'Fred'

def say_hi():
    name = 'Melanie'
    print(f'Hi {name}!')

say_hi()
print(name)



name = 'Fred'

def say_hi():
    print(f'Hi {name}')
    name = 'Melanie'
    print(f'Hi {name}!')

say_hi()
print(name)


name = 'Fred'

def say_hi():
    global name
    name = 'Melanie'
    print(f'Hi {name}!')

say_hi()
print(name)

_print = print

def print(n):
    _print('$$', n)

print('Hello')



def beep():
    print('beep')

def bang():
    beep()
    print('bang')

def big_bang():
    def beep():
        print('BEEEP!!')
    bang()