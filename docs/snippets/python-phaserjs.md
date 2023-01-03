---
sidebar_custom_props:
  id: eb0ef584-948f-4087-be07-08305c23f5e5
---
# Phaser

## 3d-Animation

Inspired by [@dwitter](https://phaser.io/examples/v3/view/dwitter/5479)

```py live_py title=phaser-demo.py id=1efa38ff-1c08-4422-86b2-2d35fc986105

from browser import window, document, html
import javascript
from math import sin, cos, tan

Phaser = window.Phaser

class Game(object):
    def __init__(self):
        self.c = None
        self.x = None
        self.texture = None
        self.time = 0
        self.frame = 0
        self.game = window.Phaser.Game.new({
            'type': Phaser.CANVAS,
            'parent': RESULT_DIV,
            'width': 510,
            'height': 540,
            'backgroundColor': '#ffffff',
            'scene': {
                'create': self.create,
                'update': self.update
            }
        })
    
    def destroy(self, *args):
        self.game.destroy(True)

    def create(self, *args):
        this = javascript.this()
        self.texture = this.textures.createCanvas('dwitter', 1920, 1080)
        self.c = self.texture.getCanvas()
        self.x = self.c.getContext('2d')
        this.add.image(0, 0, 'dwitter').setOrigin(0).setScale(0.4)
        this.input.on('pointerdown', self.destroy, this)

    def update(self, *args):
        self.time = self.frame / 60
        self.frame = self.frame + 1
        if self.frame % 30 ==0:
            self.frame += 0.001
        self.c['width'] = 1020

        for i in range(0, 31, 1):
            for j in range(20, -21, -4):
                self.x.fillRect(
                    510+j*i*0.5*cos(i*0.2)+cos(2*self.time+i*0.2)*300,
                    540+j*i*0.5*sin(i*0.2)+sin(2.2*self.time+i*0.2)*200,
                    9,
                    9
                )


game = Game()

```

## Starter Game: WIP

will not work at the moment, since phser is not shipped:

'https://cdn.jsdelivr.net/npm/phaser@3.55.2/dist/phaser.min.js'

```py live_py id=79a92e22-6e57-434b-afcb-69f68818a073
from browser import window, document, html
import javascript
from math import sin, cos, tan

Phaser = window.Phaser
def set_bounce(child):
    print('hi',child)
    child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8))

class Game(object):
    def __init__(self):
        self.player = None
        self.stars = None
        self.platforms = None
        self.cursors = None
        self.score = 0
        self.scoreText = None
        self.game = Phaser.Game.new({
            'type': Phaser.AUTO,
            'parent': RESULT_DIV,
            'width': 800,
            'height': 600,
            'physics': {
                'default': 'arcade',
                'arcade': {
                    'gravity': { 'y': 300 },
                    'debug': False
                }
            },
            'scene': {
                'preload': self.preload,
                'create': self.create,
                'update': self.update
            }
        })
    

    def preload(self, *args):
        this = javascript.this()
        this.load.setBaseURL('http://labs.phaser.io')
        this.load.image('sky', 'assets/skies/sky1.png')
        this.load.image('ground', 'assets/rope/pipe1.png')
        this.load.image('star', 'assets/particles/gold.png')
        this.load.image('bomb', 'assets/particles/flame2.png')
        this.load.spritesheet('dude', 'assets/rope/pikachu.png', { 'frameWidth': 32, 'frameHeight': 48 })

    def create(self, *args):
        this = javascript.this()
        this.add.image(400, 300, 'sky')
        platforms = this.physics.add.staticGroup()

        platforms.create(400, 568, 'ground').setScale(2).refreshBody()

        platforms.create(600, 400, 'ground')
        platforms.create(50, 250, 'ground')
        platforms.create(750, 220, 'ground')

        self.player = this.physics.add.sprite(100, 450, 'dude')

        self.player.setBounce(0.2)
        self.player.setCollideWorldBounds(True)

        this.anims.create({
            'key': 'left',
            'frames': this.anims.generateFrameNumbers('dude', { 'start': 0, 'end': 3 }),
            'frameRate': 10,
            'repeat': -1
        })

        this.anims.create({
            'key': 'turn',
            'frames': [ { 'key': 'dude', 'frame': 4 } ],
            'frameRate': 20
        })

        this.anims.create({
            'key': 'right',
            'frames': this.anims.generateFrameNumbers('dude', { 'start': 5, 'end': 8 }),
            'frameRate': 10,
            'repeat': -1
        })

        self.cursors = this.input.keyboard.createCursorKeys()

        self.stars = this.physics.add.group({
            'key': 'star',
            'repeat': 11,
            'setXY': { 'x': 12, 'y': 0, 'stepX': 70 }
        })

        for i in self.stars['children']:
            print(i,type(i))

        self.scoreText = this.add.text(16, 16, 'score: 0', { 'fontSize': '32px', 'fill': '#000' })

        this.physics.add.collider(self.player, self.platforms)
        this.physics.add.collider(self.stars, self.platforms)

        this.physics.add.overlap(self.player, self.stars, self.collectStar, None, this)

    def update(self, *args):
        if self.cursors.left.isDown:
            self.player.setVelocityX(-160)
            self.player.anims.play('left', True)
        elif self.cursors.right.isDown:
            self.player.setVelocityX(160)
            self.player.anims.play('right', True)
        else:
            self.player.setVelocityX(0)
            self.player.anims.play('turn')

        if self.cursors.up.isDown and self.player.body.touching.down:
            self.player.setVelocityY(-330)

    def collectStar (self, player, star):
        star.disableBody(True, True)
        self.score += 10
        self.scoreText.setText('Score: ' + self.score)
    
    def destroy(self, *args):
        self.game.destroy(True)

game = Game() 
```
