# Imports go at the top
from microbit import *

NUMBERS = {
    '00': Image('00000:00000:00000:00000:99999'),
    '01': Image('00009:00009:00009:00009:99999'),
    '10': Image('00900:00900:00900:00900:99999'),
    '11': Image('00909:00909:00909:00909:99999')
}
state = 'A:00'


while True:
    btn_a = button_a.was_pressed()
    btn_b = button_b.was_pressed()
    #shaked = accelerometer.was_gesture('shake')
    shaked = False
    if state=='A:00':
        display.show(NUMBERS['00'])
        if btn_a:
            state = 'A:01'
    elif state=='A:01':
        display.show(NUMBERS['01'])
        if btn_a:
            state = 'A:10'
    elif state=='A:10':
        display.show(NUMBERS['10'])
        if btn_a:
            state = 'A:11'
    elif state=='A:11':
        display.show(NUMBERS['11'])
        if btn_a:
            state = 'A:00'
    elif state=='B:00':
        display.show(NUMBERS['00'])
        if btn_b:
            state = 'B:11'
    elif state=='B:01':
        display.show(NUMBERS['01'])
        if btn_b:
            state = 'B:00'
    elif state=='B:10':
        display.show(NUMBERS['10'])
        if btn_b:
            state = 'B:01'
    elif state=='B:11':
        display.show(NUMBERS['11'])
        if btn_b:
            state = 'B:10'
    elif state.startswith('A') and shaked:
        state = state.replace('A', 'B')
    elif state.startswith('B') and shaked:
        if state == 'B:00':
            display.show(0)
        elif state == 'B:01':
            display.show(1)
        elif state == 'B:10':
            display.show(2)
        elif state == 'B:11':
            display.show(3)
        state = 'RESTART'
    elif state=='RESTART':
        sleep(1000)
        state = 'A:00'
