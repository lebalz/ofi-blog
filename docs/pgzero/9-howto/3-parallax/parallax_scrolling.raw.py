import pgzrun

WIDTH = 800
HEIGHT = 450

ebenen = []

for i in range(7):
    name = "hintergrund" + str(i)
    ebene = Actor(name)
    ebene.geschwindigkeit = 0.2 * i
    ebenen.append(ebene)

def update():
    for ebene in ebenen:
        ebene.x = ebene.x - ebene.geschwindigkeit
        if ebene.right < 0:
            ebene.x = ebene.x + ebene.width

def draw():
    screen.clear()
    for ebene in ebenen:
        ebene.draw()
        ebene.x = ebene.x + ebene.width
        ebene.draw()
        ebene.x = ebene.x - ebene.width

pgzrun.go()