from microbit import *

def set_ball(pos):
    display.clear()
    display.set_pixel(pos, 2, 9)

state = 'IDLE'

while True:
    btn_a = button_a.was_pressed()
    btn_b = button_b.was_pressed()
    pos = current_pos()
    
    if state == 'IDLE':
        display.show(Image.HAPPY)
        if btn_a:
            set_ball(2)
            state = 'MOVE_LEFT'
        elif btn_b:
            set_ball(2)
            state = 'MOVE_RIGHT'
    elif state == 'MOVE_LEFT':
        if pos == 0:
            if btn_a:
                state = 'MOVE_RIGHT'
            else:
                state = 'B_WINS'
        else:
            pos = pos - 1
            set_ball(pos)
    elif state == 'MOVE_RIGHT':
        pass
    elif state == 'A_WINS':
        pass
    elif state == 'B_WINS':
        pass
    sleep(500)
        
