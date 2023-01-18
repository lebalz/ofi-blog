import pgzrun

WIDTH = 800
HEIGHT = 600

alien = Actor("alien")
alien.x = WIDTH / 2
alien.vy = 0
schwerkraft = 0.1
boden = 550
sprung = -5

hintergrundfarbe = 0, 0, 0

def update():
    alien.vy = alien.vy + schwerkraft
    alien.y = alien.y + alien.vy
    if alien.bottom > boden:
        alien.vy = 0
        alien.bottom = boden
    if keyboard.space and alien.vy == 0:
        alien.vy = sprung


def draw():
    screen.fill(hintergrundfarbe)
    alien.draw()

pgzrun.go()
