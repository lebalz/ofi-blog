import pgzrun
import random

TITLE = "Snake"
WIDTH = 800
HEIGHT = 600

SPEED = 3

head = Actor("snake_head")
head.x = WIDTH / 2
head.y = HEIGHT / 2
head.vx = SPEED
head.vy = 0

tail = []

food = Actor("rabbit")


def place_food():
    food.x = random.randint(0, WIDTH)
    food.y = random.randint(0, HEIGHT)


def grow():
    piece = Actor("snake_body")
    piece.x = head.x - head.vx * 5
    piece.y = head.y - head.vy * 5
    tail.append(piece)


def update():
    if keyboard.left:
        head.vx = -SPEED
        head.vy = 0
    if keyboard.right:
        head.vx = SPEED
        head.vy = 0
    if keyboard.up:
        head.vx = 0
        head.vy = -SPEED
    if keyboard.down:
        head.vx = 0
        head.vy = SPEED

    head.x = head.x + head.vx
    head.y = head.y + head.vy
    if head.x > WIDTH:
        head.x = 0
    if head.x < 0:
        head.x = WIDTH
    if head.y > HEIGHT:
        head.y = 0
    if head.y < 0:
        head.y = HEIGHT
    if head.colliderect(food):
        grow()
        place_food()


def draw():
    screen.clear()
    head.draw()
    for piece in tail:
        piece.draw()
    food.draw()


place_food()
pgzrun.go()