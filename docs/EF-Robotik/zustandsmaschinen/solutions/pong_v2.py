from microbit import *

state = 'IDLE'

while True:
    btn_a = button_a.was_pressed()
    btn_b = button_b.was_pressed()

    if state == 'IDLE':
        display.show(Image.HAPPY)
        if btn_a:
            set_ball(2)
            state = 'MOVE_LEFT'
        elif btn_b:
            set_ball(2)
            state = 'MOVE_RIGHT'
    elif state == 'MOVE_LEFT':
        pass
    elif state == 'MOVE_RIGHT':
        pass
    elif state == 'A_WINS':
        pass
    elif state == 'B_WINS':
        pass
    sleep(500)
        
