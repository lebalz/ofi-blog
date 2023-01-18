import pgzrun

WIDTH = 800
HEIGHT = 600
hintergrund = 0, 150, 220

nemo = Actor("fisch_rot_rechts")
nemo.x = WIDTH / 2
nemo.y = HEIGHT / 2


def kollision_rand(objekt):
    if objekt.left < 0:
        objekt.left = 0
    if objekt.right >= WIDTH:
        objekt.right = WIDTH - 1
    if objekt.top < 0:
        objekt.top = 0
    if objekt.bottom >= HEIGHT:
        objekt.bottom = HEIGHT - 1


def update():
    if keyboard.left:
        nemo.x = nemo.x - 3
        nemo.image = "fisch_rot_links"
    if keyboard.right:
        nemo.x = nemo.x + 3
        nemo.image = "fisch_rot_rechts"
    if keyboard.up:
        nemo.y = nemo.y - 3
    if keyboard.down:
        nemo.y = nemo.y + 3
    kollision_rand(nemo)


def draw():
    screen.fill(hintergrund)
    nemo.draw()


pgzrun.go()
