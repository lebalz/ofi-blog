import pgzrun
import random

WIDTH = 800
HEIGHT = 800

green = 60, 180, 60
ball = Actor("ball_blau")
ball.radius = ball.width / 2
ball.score = 0

loch = Actor("hole")


def kollision_rand(objekt):
    if objekt.left < 0:
        objekt.left = 0
    if objekt.right >= WIDTH:
        objekt.right = WIDTH - 1
    if objekt.top < 0:
        objekt.top = 0
    if objekt.bottom >= HEIGHT:
        objekt.bottom = HEIGHT - 1


def setze_ball():
    ball.x = WIDTH / 2
    ball.y = HEIGHT / 2


def setze_loch():
    loch.x = random.randint(0, WIDTH)
    loch.y = random.randint(0, HEIGHT)
    dauer = random.randint(3, 7)
    kollision_rand(loch)
    clock.schedule_unique(setze_loch, dauer)


def on_mouse_move(pos):
    d = ball.distance_to(pos)
    if d < ball.radius:
        stoss_laenge = ball.radius - d
        ball.x = ball.x + (ball.x - pos[0]) * stoss_laenge
        ball.y = ball.y + (ball.y - pos[1]) * stoss_laenge
    kollision_rand(ball)


def update():
    if ball.distance_to(loch) < 10:
        ball.score = ball.score + 1
        setze_ball()
        setze_loch()


def draw():
    screen.fill(green)
    loch.draw()
    ball.draw()
    screen.draw.text("Score: " + str(ball.score), (10, 10), fontsize=60)


setze_ball()
setze_loch()
pgzrun.go()