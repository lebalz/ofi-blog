import pgzrun
import math

WIDTH = 1600
HEIGHT = 1200

hintergrund = Actor("weltraum")
raumschiff = Actor("raumschiff")
raumschiff.x = WIDTH / 2
raumschiff.y = HEIGHT / 2

geschoss = Actor("laser")
geschoss.vx = 0
geschoss.vy = 0
geschoss.aktiv = False

def draw():
    hintergrund.draw()
    raumschiff.draw()
    if geschoss.aktiv:
        geschoss.draw()

def schiesse():
    geschoss.aktiv = True
    geschoss.x = raumschiff.x
    geschoss.y = raumschiff.y
    geschoss.angle = raumschiff.angle
    a = math.radians(raumschiff.angle)
    v = 3
    geschoss.vx = v * math.cos(a)
    geschoss.vy = -v * math.sin(a)


def on_key_down(key):
    if key == keys.SPACE:
        schiesse()

def update():
    geschoss.x = geschoss.x + geschoss.vx
    geschoss.y = geschoss.y + geschoss.vy
    if keyboard.a:
        raumschiff.angle = raumschiff.angle + 2
    if keyboard.d:
        raumschiff.angle = raumschiff.angle - 2

pgzrun.go()