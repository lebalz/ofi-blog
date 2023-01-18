import math
import pgzrun
import random

TITLE = "Asteroids"
WIDTH = 1600
HEIGHT = 1200

ACCELERATION = 0.2
ROTATION = 3
SHOT_SPEED = 5
SHOT_COOLDOWN = 0.2
SHOT_DAMAGE = 10
SHOT_MAX_AGE = 3


background = Actor("weltraum")
ship = Actor("raumschiff")
thrust = Actor("raumschiff2")
thrust.on = False
asteroids = []
shots = []


def add_asteroid(parent=None):
    if parent:
        category = parent.category - 1
    else:
        category = 3
    asteroid = Actor("asteroid-" + str(category))
    if parent:
        asteroid.x = parent.x
        asteroid.y = parent.y
    else:
        asteroid.x = random.randint(0, WIDTH)
        asteroid.y = random.randint(0, HEIGHT)
    asteroid.vx = 0
    asteroid.vy = 0
    asteroid.category = category
    asteroid.stability = 30 * category
    acc = random.randint(1, 2)
    dir = random.randint(0, 360)
    accelerate(asteroid, acc, dir)
    asteroids.append(asteroid)


def enable_shooting():
    ship.can_shoot = True


def add_shot():
    shot = Actor("laser")
    shot.x = ship.x
    shot.y = ship.y
    shot.vx = 0
    shot.vy = 0
    shot.age = 0
    shot.angle = ship.angle
    accelerate(shot, SHOT_SPEED, shot.angle)
    ship.can_shoot = False
    clock.schedule_unique(enable_shooting, SHOT_COOLDOWN)
    shots.append(shot)


def accelerate(actor, acc, dir):
    a = math.radians(dir)
    actor.vx = actor.vx + math.cos(a) * acc
    actor.vy = actor.vy - math.sin(a) * acc


def move(actor):
    actor.x = actor.x + actor.vx
    actor.y = actor.y + actor.vy
    if actor.x > WIDTH:
        actor.x = 0
    if actor.x < 0:
        actor.x = WIDTH
    if actor.y > HEIGHT:
        actor.y = 0
    if actor.y < 0:
        actor.y = HEIGHT


def reset_game():
    ship.x = WIDTH / 2
    ship.y = HEIGHT / 2
    ship.vx = 0
    ship.vy = 0
    ship.angle = 0
    ship.speed = 0
    ship.alive = True
    ship.can_shoot = True
    asteroids.clear()
    for i in range(1, 3):
        add_asteroid()


def update_asteroid(asteroid):
    move(asteroid)
    i = asteroid.collidelist(shots)
    if i != -1:
        del shots[i]
        asteroid.stability = asteroid.stability - SHOT_DAMAGE
    if asteroid.stability <= 0:
        asteroids.remove(asteroid)
        if asteroid.category > 1:
            add_asteroid(asteroid)
            add_asteroid(asteroid)


def update_shot(shot, dt):
    move(shot)
    shot.age = shot.age + dt
    if shot.age > SHOT_MAX_AGE:
        shots.remove(shot)


def update(dt):
    thrust.on = keyboard.up
    if keyboard.up:
        accelerate(ship, ACCELERATION, ship.angle)
    if keyboard.left:
        ship.angle = ship.angle + ROTATION
    if keyboard.right:
        ship.angle = ship.angle - ROTATION
    if keyboard.space and ship.can_shoot:
        add_shot()
    if keyboard.space and not ship.alive:
        reset_game()
    move(ship)
    if ship.collidelist(asteroids) != -1:
        ship.alive = False
        ship.can_shoot = False
    for asteroid in asteroids:
        update_asteroid(asteroid)
    for shot in shots:
        update_shot(shot, dt)


def draw():
    background.draw()
    for asteroid in asteroids:
        asteroid.draw()
    for shot in shots:
        shot.draw()
    if ship.alive:
        if thrust.on:
            thrust.x = ship.x
            thrust.y = ship.y
            thrust.angle = ship.angle
            thrust.draw()
        ship.draw()
    else:
        screen.draw.text("GAME OVER", center=(WIDTH / 2, HEIGHT / 2), fontsize=100)
        screen.draw.text(
            "Press SPACE to start", center=(WIDTH / 2, HEIGHT / 2 + 60), fontsize=30
        )


reset_game()
pgzrun.go()
