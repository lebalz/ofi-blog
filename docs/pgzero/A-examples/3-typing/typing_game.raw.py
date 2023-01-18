import pgzrun
import random


TITLE = "Typing Game"
WIDTH = 640
HEIGHT = 360
BG_COLOUR = (255, 255, 255)
BLACK = (0, 0, 0)

KEYMAP = {
    keys.A: "a",
    keys.B: "b",
    keys.C: "c",
    keys.D: "d",
    keys.E: "e",
    keys.F: "f",
    keys.G: "g",
    keys.H: "h",
    keys.I: "i",
    keys.J: "j",
    keys.K: "k",
    keys.L: "l",
    keys.M: "m",
    keys.N: "n",
    keys.O: "o",
    keys.P: "p",
    keys.Q: "q",
    keys.R: "r",
    keys.S: "s",
    keys.T: "t",
    keys.U: "u",
    keys.V: "v",
    keys.W: "w",
    keys.X: "x",
    keys.Y: "y",
    keys.Z: "z",
    keys.QUOTE: "ä",
    keys.SEMICOLON: "ö",
    keys.LEFTBRACKET: "ü",
    keys.SPACE: " "
}

words = []
file = open("wordlist.txt", "r", -1, "utf-8")
for line in file:
    # Newline am Zeilenende abschneiden
    line = line.rstrip("\n")
    # Wort zur Liste hinzufügen
    words.append(line)
file.close()

game = Actor("alien")
game.level = 0
game.text = ""
game.time = 5
MAX_TIME = 10


def update(dt):
    game.time = game.time - dt


def draw():
    screen.fill(BG_COLOUR)
    if game.time < 0:
        screen.draw.text(
            "GAME OVER", centerx=WIDTH / 2, centery=HEIGHT / 2, fontsize=60, color=BLACK
        )
        return
    screen.draw.text(words[game.level], left=20, top=80, fontsize=60, color=BLACK)
    screen.draw.text(game.text, left=20, top=160, fontsize=60, color=(255, 0, 0))
    width = WIDTH * game.time / MAX_TIME
    screen.draw.filled_rect(Rect((0, 10), (width, 50)), BLACK)


def on_key_down(key):
    print(key)
    if game.time < 0:
        return
    if key in KEYMAP:
        char = KEYMAP[key]
        if keyboard.lshift or keyboard.rshift:
            char = char.upper()
        game.text = game.text + char
    if key == keys.BACKSPACE:
        game.text = game.text[:-1]
    if game.text == words[game.level]:
        game.level = game.level + 1
        game.time = game.time + 0.3 * len(game.text)
        game.text = ""

pgzrun.go()
