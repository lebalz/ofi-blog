# Planeten mit Monden

![](images/turtle-planets.svg)

```py live_py title=planeten.py
import turtle as t
from math import sin, cos, pi

# parameter
RADIUS_earth_pos = [120, 100]
RADIUS_MOON = [20, 25]
RADIUS_MOON2 = [34, 28]

# speed factor relative to the earth...
MOON_SPEED = 14.3871
MOON_SPEED2 = 18.913
STEPS = 400
ROUNDS = 2
TURTLE_SPEED = 10

# create turtles
sun = t.Turtle('turtle')
earth = t.Turtle('circle')
moon = t.Turtle()
moon2 = t.Turtle()

# setup turtles
sun.speed(-1) # max speed
earth.speed(TURTLE_SPEED)
moon.speed(TURTLE_SPEED)
moon2.speed(TURTLE_SPEED)

# set initial position, without drawing
earth.penup()
moon.penup()
moon2.penup()
earth.goto(RADIUS_earth_pos[0], 0)
moon.goto(RADIUS_earth_pos[0] + RADIUS_MOON[0], 0)
moon2.goto(RADIUS_earth_pos[0], -RADIUS_MOON2[1])
moon2.pendown()
moon.pendown()

def to_degree(rad):
  return 360 * rad / 2.0 / pi

for step in range(STEPS * ROUNDS):
  angle = 2 * pi * step / STEPS
  sun.setheading(to_degree(angle) * 3)
  earth_pos = [cos(angle) * RADIUS_earth_pos[0], sin(angle) * RADIUS_earth_pos[1]]
  earth.goto(earth_pos[0], earth_pos[1])
  earth.setheading(to_degree(angle) + 90)

  angle_moon = angle * MOON_SPEED
  rel_moon = [cos(angle_moon) * RADIUS_MOON[0], sin(angle_moon) * RADIUS_MOON[1]]
  moon.goto(earth_pos[0] + rel_moon[0], earth_pos[1]  + rel_moon[1])
  moon.setheading(to_degree(angle_moon) + 90)

  angle_moon2 = angle * MOON_SPEED2
  rel_moon2 = [sin(angle_moon2) * RADIUS_MOON2[0], cos(angle_moon2) * RADIUS_MOON2[1]]
  moon2.goto(earth_pos[0] - rel_moon2[0], earth_pos[1]  - rel_moon2[1])
  moon2.setheading(180 - to_degree(angle_moon2))

# hide turtles
sun.hideturtle()
earth.hideturtle()
moon.hideturtle()
moon2.hideturtle()
```
