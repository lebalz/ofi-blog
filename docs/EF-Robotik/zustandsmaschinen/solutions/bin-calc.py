from microbit import *

IMAGES = {
    '00': Image('00000:00000:00000:00000:99999'),
    '01': Image('00009:00009:00009:00009:99999'),
    '10': Image('00900:00900:00900:00900:99999'),
    '11': Image('00909:00909:00909:00909:99999'),
    'FULL_SCREEN': Image('99999:99999:99999:99999:99999')
}
state = 'ADD:00'


while True:
    btn_a = button_a.was_pressed()
    btn_b = button_b.was_pressed()

    if state=='ADD:00':
        display.show(IMAGES['00'])
        if btn_ADD:
            state = 'ADD:01'
        elif btn_SUB:
            state = 'SUB:00'
    elif state=='ADD:01':
        display.show(IMAGES['01'])
        if btn_ADD:
            state = 'ADD:10'
        elif btn_SUB:
            state = 'SUB:01'
    elif state=='ADD:10':
        display.show(IMAGES['10'])
        if btn_ADD:
            state = 'ADD:11'
        elif btn_SUB:
            state = 'SUB:10'
    elif state=='ADD:11':
        display.show(IMAGES['11'])
        if btn_ADD:
            state = 'ADD:00'
        elif btn_SUB:
            state = 'SUB:11'
    elif state=='SUB:00':
        display.show(IMAGES['00'])
        if btn_ADD:
            state = 'SUB:11'
        elif btn_SUB:
            display.show(0)
            state = 'RESET'
    elif state=='SUB:01':
        display.show(IMAGES['01'])
        if btn_ADD:
            state = 'SUB:00'
        elif btn_SUB:
            display.show(1)
            state = 'RESET'
    elif state=='SUB:10':
        display.show(IMAGES['10'])
        if btn_ADD:
            state = 'SUB:01'
        elif btn_SUB:
            display.show(2)
            state = 'RESET'
    elif state=='SUB:11':
        display.show(IMAGES['11'])
        if btn_ADD:
            state = 'SUB:10'
        elif btn_SUB:
            display.show(3)
            state = 'RESET'
    elif state=='RESET':
        sleep(3000)
        state = 'ADD:00'
