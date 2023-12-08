# ...

state = 'IDLE'

while True:
    # ...
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
        
