import pgzrun

WIDTH = 1600
HEIGHT = 1200

hintergrund = Actor("weltraum")
raumschiff = Actor("raumschiff")
raumschiff.x = WIDTH / 2
raumschiff.y = HEIGHT / 2

def draw():
    hintergrund.draw()
    raumschiff.draw()

def update():
    if keyboard.a:
        raumschiff.angle = raumschiff.angle + 2
    if keyboard.d:
        raumschiff.angle = raumschiff.angle - 2

pgzrun.go()
