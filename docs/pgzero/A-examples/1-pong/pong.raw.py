import pgzrun

TITLE = "Pong"
WIDTH = 1200
HEIGHT = 800

PLAYER_SPEED = 5

spieler_links = Actor("schlaeger_blau")
spieler_links.score = 0
spieler_links.y = HEIGHT / 2
spieler_links.left = 5

spieler_rechts = Actor("schlaeger_rot")
spieler_rechts.score = 0
spieler_rechts.y = HEIGHT / 2
spieler_rechts.right = WIDTH - 6

ball = Actor("ball_blau_klein")
ball.x = WIDTH / 2
ball.y = HEIGHT / 2
ball.vx = 5
ball.vy = 3


def bewege_spieler(spieler, up_key, down_key):
    if up_key:
        spieler.y = spieler.y - PLAYER_SPEED
    if down_key:
        spieler.y = spieler.y + PLAYER_SPEED
    if spieler.bottom >= HEIGHT:
        spieler.bottom = HEIGHT - 1
    if spieler.top < 0:
        spieler.top = 0


def bewege_ball():
    # Ball bewegen
    ball.x = ball.x + ball.vx
    ball.y = ball.y + ball.vy
    if ball.top < 0:
        ball.top = 0
        ball.vy = -ball.vy
    if ball.bottom >= HEIGHT - 1:
        ball.bottom = HEIGHT - 1
        ball.vy = -ball.vy

    # Abprallen am rechten Schläger
    if ball.right > spieler_rechts.left and ball.bottom > spieler_rechts.top and ball.top < spieler_rechts.bottom:
        ball.right = spieler_rechts.left
        ball.vx = -ball.vx

    # Abprallen am linken Schläger
    if ball.left < spieler_links.right and ball.bottom > spieler_links.top and ball.top < spieler_links.bottom:
        ball.left = spieler_links.right
        ball.vx = -ball.vx

    # Punkt für linken Spieler
    if ball.right >= WIDTH:
        spieler_links.score = spieler_links.score + 1
        ball.x = WIDTH / 2
        ball.y = HEIGHT / 2

    # Punkt für rechten Spieler
    if ball.left < 0:
        spieler_rechts.score = spieler_rechts.score + 1
        ball.x = WIDTH / 2
        ball.y = HEIGHT / 2


def update():
    # linken Schläger bewegen
    bewege_spieler(spieler_links, keyboard.q, keyboard.a)
    # rechten Schläger bewegen
    bewege_spieler(spieler_rechts, keyboard.o, keyboard.l)
    bewege_ball()


def zeichne_punktestand():
    screen.draw.text(str(spieler_links.score), centerx=WIDTH / 2 - 80, top=20, fontsize=100)
    screen.draw.text(str(spieler_rechts.score), centerx=WIDTH / 2 + 80, top=20, fontsize=100)


def draw():
    screen.clear()
    spieler_links.draw()
    spieler_rechts.draw()
    ball.draw()
    zeichne_punktestand()

pgzrun.go()
