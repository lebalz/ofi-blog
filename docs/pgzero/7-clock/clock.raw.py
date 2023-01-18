import pgzrun

nemo = Actor("fisch_rot_rechts")

def aendere_nemo():
    nemo.image = "fisch_rot_links"

def update():
    if keyboard.space:
        clock.schedule(aendere_nemo, 1.5)

def draw():
    screen.clear()
    nemo.draw()

pgzrun.go()
 