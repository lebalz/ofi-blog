from microbit import *

state = 'IDLE'

def current_pos():
    for i in range(5):
        if display.get_pixel(i, 2) == 9:
            return i
    return 2

def set_ball(pos):
    display.clear()
    display.set_pixel(pos, 2, 9)

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
        if pos == 4:
            if btn_b:
                state = 'MOVE_LEFT'
            else:
                state = 'A_WINS'
        else:
            pos = pos + 1
            set_ball(pos)
    elif state == 'A_WINS':
        display.show('A')
        sleep(1500)
        state = 'IDLE'
    elif state == 'B_WINS':
        display.show('B')
        sleep(1500)
        state = 'IDLE'
    sleep(500)
