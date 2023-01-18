import pgzrun

TITLE = "Paint"
WIDTH = 800
HEIGHT = 800

farbwahl = Actor("button_red")
farbwahl.farbe = 255, 0, 0
farbwahl.top = 10
farbwahl.left = 10

loeschen = Actor("button_grey")
loeschen.top = 70
loeschen.left = 10


def on_mouse_down(pos):
    if farbwahl.collidepoint(pos):
        if farbwahl.image == "button_red":
            farbwahl.image = "button_blue"
            farbwahl.farbe = 0, 0, 255
        elif farbwahl.image == "button_blue":
            farbwahl.image = "button_green"
            farbwahl.farbe = 0, 255, 0
        elif farbwahl.image == "button_green":
            farbwahl.image = "button_yellow"
            farbwahl.farbe = 255, 255, 0
        elif farbwahl.image == "button_yellow":
            farbwahl.image = "button_red"
            farbwahl.farbe = 255, 0, 0
    if loeschen.collidepoint(pos):
        screen.clear()


def on_mouse_move(pos, buttons):
    if buttons:
        screen.draw.filled_circle(pos, 2, farbwahl.farbe)


def draw():
    farbwahl.draw()
    loeschen.draw()

pgzrun.go()
