import pgzrun

WIDTH = 800
HEIGHT = 200

archer = Actor("archer_idle_1")
archer.x = WIDTH / 2
archer.y = HEIGHT / 2
archer.ani = "idle"
archer.next_ani = None
archer.step = 1

MAX_STEP = {"idle": 1, "attack": 5, "walk": 4}


def update_animation():
    archer.step = archer.step + 0.2
    if archer.step >= MAX_STEP[archer.ani] + 1:
        archer.step = 1
        if archer.next_ani:
            archer.ani = archer.next_ani
            archer.next_ani = None
    archer.image = "archer_" + archer.ani + "_" + str(int(archer.step))


def set_animation(ani):
    if archer.ani == "attack":
        archer.next_ani = ani
    else:
        archer.next_ani = None
        archer.ani = ani


def draw():
    screen.fill((255, 255, 255))
    archer.draw()


def update():
    if keyboard.left:
        archer.x = archer.x - 5
        set_animation("walk")
    elif keyboard.right:
        archer.x = archer.x + 5
        set_animation("walk")
    elif keyboard.space:
        set_animation("attack")
    else:
        set_animation("idle")
    update_animation()

pgzrun.go()
