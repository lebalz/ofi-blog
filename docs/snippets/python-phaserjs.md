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
        self.game.destroy(True);

    def create(self, *args):
        this = javascript.this()
        self.texture = this.textures.createCanvas('dwitter', 1920, 1080)
        self.c = self.texture.getCanvas()
        self.x = self.c.getContext('2d')
        this.add.image(0, 0, 'dwitter').setOrigin(0).setScale(0.4)
        this.input.on('pointerdown', self.destroy, this);

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