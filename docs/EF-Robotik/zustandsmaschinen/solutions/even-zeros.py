from microbit import *
import music

FULL_SCREEN = Image('99999:99999:99999:99999:99999')

state = 'EVEN'
music.set_tempo(bpm=420)

while True:
    current = state
    if button_a.was_pressed():
        if state == 'EVEN':
            music.play(['f', 'c'])
            state = 'ODD'
        elif state == 'ODD':
            music.play(['c', 'a'])
            state = 'EVEN'
    elif button_b.was_pressed():
        display.show(FULL_SCREEN)
        music.play(['c', 'd', 'c'])
    elif state == 'EVEN':
        display.show(Image.HAPPY)
    elif state == 'ODD':
        display.show(Image.ANGRY)
