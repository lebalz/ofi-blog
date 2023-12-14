from microbit import *
import sys

state = 'START'

def show_progress(num):
    for i in range(5):
        display.set_pixel(num - 1, i, 9)
display.clear()
while True:
    btn_a = button_a.was_pressed()
    btn_b = button_b.was_pressed()
    is_shake = accelerometer.was_gesture('shake')
    has_input = btn_a or btn_b or is_shake
    
    if state == 'START':
        display.clear()
        state = 'SEEK_A#1'
    elif state == 'SEEK_A#1':
        if btn_a:
            display.show(1)
            state = 'SEEK_A#2'
        elif has_input:
            state = 'LOST'
    elif state == 'SEEK_A#2':
        if btn_a:
            display.show(2)
            state = 'SEEK_SHAKE#3'
        elif has_input:
            state = 'LOST'
    elif state == 'SEEK_SHAKE#3':
        if is_shake:
            display.show(3)
            state = 'SEEK_B#4'
        elif has_input:
            state = 'LOST'
    elif state == 'SEEK_B#4':
        if btn_b:
            display.show(4)
            state = 'SEEK_A#5'
        elif has_input:
            state = 'LOST'
    elif state == 'SEEK_A#5':
        if btn_a:
            state = 'WIN'
        elif has_input:
            state = 'LOST'
    elif state == 'WIN':
        display.show(Image.HAPPY)
        audio.play(Sound.HAPPY)
        audio.play(Sound.HAPPY)
        sleep(3000)
        state = 'END'
    elif state == 'LOST':
        display.show(Image.SAD)
        audio.play(Sound.SAD)
        sleep(3000)
        state = 'END'
    elif state == 'END':
        sys.exit(0)
