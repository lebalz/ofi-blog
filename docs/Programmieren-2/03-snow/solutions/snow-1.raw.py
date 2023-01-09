import pgzrun
from random import randrange

TITLE = 'Schneeflocken'
WIDTH = 1350
HEIGHT = 900

hintergrund = Actor('winter_1')

ANZAHL = 1000
schnee_x = []
schnee_y = []

for i in range(0, ANZAHL):
    schnee_x.append(randrange(0, WIDTH))
    schnee_y.append(randrange(0, HEIGHT))


def draw():
    hintergrund.draw()

    for i in range(0, ANZAHL):
        screen.draw.filled_circle([schnee_x[i], schnee_y[i]], 2, [255, 255, 255])


def update(dt):
    for i in range(0, ANZAHL):
        schnee_y[i] += 1

        if schnee_y[i] > HEIGHT:
            schnee_y[i] = 0


pgzrun.go()