from microbit import *

state = 'IDLE'

while True:
    btn_a = button_a.was_pressed()
    btn_b = button_b.was_pressed()

    if state == 'IDLE':
        pass
    elif state == 'MOVE_LEFT':
        pass
    elif state == 'MOVE_RIGHT':
        pass
    elif state == 'A_WINS':
        pass
    elif state == 'B_WINS':
        pass
    sleep(500)
        
