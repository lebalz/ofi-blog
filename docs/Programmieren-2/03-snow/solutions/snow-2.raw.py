import pgzrun
from random import randrange

TITLE = 'Schneeflocken'
WIDTH = 1350
HEIGHT = 900

hintergrund = Actor('winter_1')

ANZAHL = 1000
schnee_x = []
schnee_y = []
schnee_r = []

for i in range(0, ANZAHL):
    schnee_x.append(randrange(0, WIDTH))
    schnee_y.append(randrange(0, HEIGHT))
    schnee_r.append(randrange(0, 6))


def draw():
    hintergrund.draw()

    for i in range(0, ANZAHL):
        screen.draw.filled_circle([schnee_x[i], schnee_y[i]], schnee_r[i], [255, 255, 255])


def update(dt):
    for i in range(0, ANZAHL):
        schnee_y[i] += schnee_r[i]

        if schnee_y[i] > HEIGHT:
            schnee_y[i] = 0

pgzrun.go()