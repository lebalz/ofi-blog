---
sidebar_custom_props:
  id: fe993860-603b-4f54-9c92-758dec79a18d
---

# Labyrinth

## Ausgangslage für die Programmierung eines prefekten Labyrinths

```py live_py id=6d768094-8526-4e7d-831b-3ae04f73e017
from random import choice

DIM_X = 31
DIM_Y = 21

field = []

# prepare list
for y in range(0, DIM_Y):
    row = []
    for x in range(0, DIM_X):
        row.append(1)
    field.append(row)

pos = [1, 1]

positions = [pos]
pos_pointer = 0
finished = False

# set field at current position to zero
field[pos[0]][pos[1]] = 0

# repeat 5 times
# TODO: repeat until finished
for i in range(5):
    # all directions for the next step
    options = ['UP', 'RIGHT', 'DOWN', 'LEFT']
    success = False
    
    # find the next field - iterate until a new direction is found, or all
    # options are checked
    while len(options) > 0 and not success:

        # pick a random direction from the list
        direction = choice(options)
        if direction == 'UP':
            if False: # TODO (a) check if new cell is on field and (b) if new cell is not already taken
                # TODO: mark cells as taken
                # update position
                 success = True
            else:
                # remove option
                options.remove('UP')
        elif direction == 'RIGHT':
            # ...
            options.remove('RIGHT')
        elif direction == 'DOWN':
            # ...
            options.remove('DOWN')
        elif direction == 'LEFT':
            # ...
            options.remove('LEFT')
    if success:
        # add current position to the position tracker
        positions.append(pos)
        # update position pointer (where can the current location be looked up?)
        pos_pointer = len(positions) - 1
    elif pos_pointer > 0: # is there is a location, where we can look around?
        pos_pointer = pos_pointer - 1
        pos = positions[pos_pointer]
    else:
        finished = True

# print the maze
# TODO: draw it with turtles
for rows in field:
    for cell in rows:
        if cell == 1:
            print(' x ', end='')
        else:
            print(' . ', end='')
    print('')
```
