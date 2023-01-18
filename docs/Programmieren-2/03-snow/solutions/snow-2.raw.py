import pgzrun
from random import randint

TITLE = 'Schneeflocken'
WIDTH = 1350
HEIGHT = 900

hintergrund = Actor('winter_1')

ANZAHL = 1000
schnee_x = []
schnee_y = []

for i in range(0, ANZAHL):
    schnee_x.append(randint(0, WIDTH))
    schnee_y.append(randint(0, HEIGHT))


def draw():
    hintergrund.draw()

    for i in range(0, ANZAHL):
        screen.draw.filled_circle([schnee_x[i], schnee_y[i]], 5, [255, 255, 255])


def update(dt):
    for i in range(0, ANZAHL):
        schnee_y[i] = schnee_y[i] + 1

pgzrun.go()