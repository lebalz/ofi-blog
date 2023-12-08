# Imports go at the top
from microbit import *
state = 'START'

def show_progress(num):
    for i in range(5):
        display.set_pixel(num - 1, i, 9)
    
# Code in a 'while True:' loop repeats forever
while True:
    in_a = button_a.was_pressed()
    in_b = button_b.was_pressed()
    in_shake = accelerometer.was_gesture('shake')
    has_input = in_a or in_b or in_shake
    
    if state == 'START':
        display.clear()
        for i in range(5):
            display.set_pixel(i, 0, 9)
        state = 'SEEK_A#1'
    elif state == 'SEEK_A#1':
        if in_a:
            show_progress(1)
            state = 'SEEK_A#2'
        elif has_input:
            state = 'LOST'
    elif state == 'SEEK_A#2':
        if in_a:
            show_progress(2)
            state = 'SEEK_SHAKE#3'
        elif has_input:
            state = 'LOST'
    elif state == 'SEEK_SHAKE#3':
        if in_shake:
            show_progress(3)
            state = 'SEEK_B#4'
        elif has_input:
            state = 'LOST'
    elif state == 'SEEK_B#4':
        if in_b:
            show_progress(4)
            state = 'SEEK_A#5'
        elif has_input:
            state = 'LOST'
    elif state == 'SEEK_A#5':
        if in_a:
            show_progress(5)
            sleep(300)
            state = 'WIN'
        elif has_input:
            state = 'LOST'
    elif state == 'WIN':
        display.show(Image.HAPPY)
        audio.play(Sound.HAPPY)
        audio.play(Sound.HAPPY)
        state = 'START'
    elif state == 'LOST':
        display.show(Image.SAD)
        audio.play(Sound.SAD)
        state = 'START'
