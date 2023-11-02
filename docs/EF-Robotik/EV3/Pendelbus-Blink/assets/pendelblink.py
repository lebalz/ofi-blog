#!/usr/bin/env pybricks-micropython
'''
Author: sgd
Date: 2022-10-15
Edits:
    - 2023-11-01 hfr
'''
from pybricks.hubs import EV3Brick
from pybricks.ev3devices import (Motor, TouchSensor, ColorSensor,
                                 InfraredSensor, UltrasonicSensor, GyroSensor)
from pybricks.parameters import Port, Stop, Direction, Button, Color
from pybricks.tools import wait, StopWatch, DataLog
from pybricks.robotics import DriveBase
from pybricks.media.ev3dev import SoundFile, ImageFile

import uasyncio as asyncio

# This program requires LEGO EV3 MicroPython v2.0 or higher.
# Click 'Open user guide' on the EV3 extension tab for more information.


# Create your objects here.
ev3 = EV3Brick()
door_button = TouchSensor(Port.S2)
drive_button = TouchSensor(Port.S3)
color_sensor = ColorSensor(Port.S1)
door_motor = Motor(Port.C)
left_motor = Motor(Port.A)
right_motor = Motor(Port.D)
drive_base = DriveBase(left_motor, right_motor, 55.5, 104)

# States: green_closed, green_open, going_red, going_green, red_open, red_closed
state = 'green_closed'

# Stores old_state, is used by print_state()
old_state = ''
# Prints state on screen
def print_state():
    global old_state
    if old_state != state:
        ev3.screen.clear()
        ev3.screen.print(state)
        old_state = state

# loop for blinking led
async def start_blink_loop():
    while True:
        ev3.light.on(Color.RED)
        await asyncio.sleep(1)
        ev3.light.off()
        await asyncio.sleep(1)


# state machine loop
async def start_state_machine_loop():
    global state
    while True:
        await asyncio.sleep(0)
        if state == 'green_closed':
            print_state()
            if door_button.pressed():
                ev3.speaker.say('opening door')
                door_motor.run_angle(60, -60)
                state ='green_open'
            elif drive_button.pressed():
                ev3.speaker.say('going red')
                drive_base.drive(100, 0)
                state = 'going_red'

        elif state == 'green_open':
            print_state()
            if door_button.pressed():
                ev3.speaker.say('closing door')
                door_motor.run_angle(60, 60)
                state = 'green_closed'

        elif state == 'going_red':
            print_state()
            if color_sensor.color() == Color.RED:
                drive_base.stop()
                ev3.speaker.say('stopped at red')
                state = 'red_closed'

        if state == 'red_closed':
            print_state()
            if door_button.pressed():
                ev3.speaker.say('opening door')
                door_motor.run_angle(60, -60)
                state ='red_open'
            elif drive_button.pressed():
                ev3.speaker.say('going green')
                drive_base.drive(-100, 0)
                state = 'going_green'

        elif state == 'red_open':
            print_state()
            if door_button.pressed():
                ev3.speaker.say('closing door')
                door_motor.run_angle(60, 60)
                state = 'red_closed'

        elif state == 'going_green':
            print_state()
            if color_sensor.color() == Color.GREEN:
                drive_base.stop()
                ev3.speaker.say('stopped at green')
                state = 'green_closed'
            
# let's go
ev3.speaker.beep()
# get the schedulers event loop
loop = asyncio.get_event_loop()
# create two new tasks and place them on the event loop
loop.create_task(start_blink_loop())
loop.create_task(start_state_machine_loop())
# start the scheduler
loop.run_forever()