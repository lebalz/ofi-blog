from microbit import *
import sys
import log
log.set_mirroring(True)

DX = 500
def show_block(x, y):
    display.clear()
    for i in range(y, 5 - y):
        display.set_pixel(x, i, 9)
state = 'IDLE'

while True:
    acc_x = accelerometer.get_x()
    if 'IDLE' == state:
        display.show('A')
        if button_a.was_pressed():
            show_block(2, 2)
            state = 'CENTER'
    elif 'CENTER' == state:
        if acc_x < -DX:
            state = 'TRANSITION_L1'
        elif acc_x > DX:
            state = 'TRANSITION_R1'
    elif 'L1' == state:
        if acc_x < -DX:
            state = 'TRANSITION_L2'
        elif acc_x > DX:
            state = 'TRANSITION_CENTER'
    elif 'L2' == state:        
        if acc_x > DX:
            state = 'TRANSITION_L1'
    elif 'R1' == state:
        if acc_x < -DX:
            state = 'TRANSITION_CENTER'
        elif acc_x > 2*DX:
            state = 'TRANSITION_R2'
    elif 'R2' == state:        
        if acc_x < -DX:
            state = 'TRANSITION_R1'
    elif 'TRANSITION_L1' == state:
        show_block(1, 1)
        if acc_x > -DX and acc_x < DX:
            state = 'L1'
    elif 'TRANSITION_L2' == state:
        show_block(0, 0)
        if acc_x > -DX and acc_x < DX:
            state = 'L2'
    elif 'TRANSITION_R1' == state:
        show_block(3, 1)
        if acc_x > -DX and acc_x < DX:
            state = 'R1'
    elif 'TRANSITION_R2' == state:
        show_block(4, 0)
        if acc_x > -DX and acc_x < DX:
            state = 'R2'
    elif 'TRANSITION_CENTER' == state:
        show_block(2, 2)
        if acc_x > -DX and acc_x < DX:
            state = 'CENTER'