import pgzrun

nemo = Actor("fisch_rot_rechts")

def update():
    nemo.x = nemo.x + 1


def draw():
    screen.clear()
    nemo.draw()

pgzrun.go()
