---
sidebar_custom_props:
  id: 0eca41a3-4791-46d2-9778-3cc771f7bc32
---
# Conways Game of Life

```py live_py slim
from grid import Grid
from game import gameloop, sleep

Grid.setup(500, 500)
SIZE = (20, 20)
grid = Grid(SIZE[0], SIZE[1])

# blinker
grid[1][2] = 'black'
grid[2][2] = 'black'
grid[3][2] = 'black'


# glider
grid[4][14] = 'black'
grid[5][14] = 'black'
grid[6][14] = 'black'
grid[6][13] = 'black'
grid[5][12] = 'black'

def neighbours(grid, x, y):
    nb = []
    dim_x = len(grid[0])
    dim_y = len(grid)
    for i in range(-1, 2):
        for j in range(-1, 2):
            if not (i == 0 and j == 0):
                ny = (y + i) % dim_y
                nx = (x + j) % dim_x
                nb.append(grid[ny][nx])
    return nb

def live_neighbours(grid, x, y):
    s = 0
    for cell in neighbours(grid, x, y):
        if cell == 'black':
            s += 1
    return s

@gameloop
def evolution(dt):
    current = grid.color_grid
    for x in range(grid.size[1]):
        for y in range(grid.size[0]):
            alive = live_neighbours(current, x, y)
            if current[y][x] == 'black' and 2 <= alive <= 3:
                grid[y][x].color = 'black'
            elif current[y][x] != 'black' and alive == 3:
                grid[y][x].color = 'black'
            else:
                grid[y][x].color = ''
    sleep(50)

evolution()
```

## Einige Figuren

```py live_py slim
from grid import Grid
from game import gameloop, sleep

grid = Grid.from_bin_text('''
  
   
  xx      x              xx
  xx      x     xxx      xx
          x    xxx         xx
                           xx           xx
                                       x  x  
                                        xx
                          
                          
       xxx   xxx                      xx
                                     x  x
     x    x x    x                    x x
     x    x x    x                     x
     x    x x    x
       xxx   xxx
                                   xx
       xxx   xxx                   x x
     x    x x    x                  x
     x    x x    x
     x    x x    x
                                    x
       xxx   xxx                   x x
                                    x
       
      
      
      
      
      
      
       xxx
       x x
       xxx
       xxx              xxxxxxxx
       xxx              x xxxx x
       xxx              xxxxxxxx
       x x
       xxx
    
    
    
    
    
    
       
''')

def neighbours(grid, x, y):
    nb = []
    dim_x = len(grid[0])
    dim_y = len(grid)
    for i in range(-1, 2):
        for j in range(-1, 2):
            if not (i == 0 and j == 0):
                ny = (y + i) % dim_y
                nx = (x + j) % dim_x
                nb.append(grid[ny][nx])
    return nb

def live_neighbours(grid, x, y):
    s = 0
    for cell in neighbours(grid, x, y):
        if cell == 'black':
            s += 1
    return s

@gameloop
def evolution(dt):
    current = grid.color_grid
    for x in range(grid.size[1]):
        for y in range(grid.size[0]):
            alive = live_neighbours(current, x, y)
            if current[y][x] == 'black' and 2 <= alive <= 3:
                grid[y][x].color = 'black'
            elif current[y][x] != 'black' and alive == 3:
                grid[y][x].color = 'black'
            else:
                grid[y][x].color = ''
    sleep(50)

evolution()
```

### Spaceships

```py live_py slim
from grid import Grid
from game import gameloop, sleep

grid = Grid.from_bin_text('''
       x
        x
      xxx 
              x
               x
             xxx 
                     x
                      x
                    xxx 
                              x
                               x
                             xxx       
''')


def neighbours(grid, x, y):
    nb = []
    dim_x = len(grid[0])
    dim_y = len(grid)
    for i in range(-1, 2):
        for j in range(-1, 2):
            if not (i == 0 and j == 0):
                ny = (y + i) % dim_y
                nx = (x + j) % dim_x
                nb.append(grid[ny][nx])
    return nb

def live_neighbours(grid, x, y):
    s = 0
    for cell in neighbours(grid, x, y):
        if cell == 'black':
            s += 1
    return s

@gameloop
def evolution(dt):
    current = grid.color_grid
    for x in range(grid.size[1]):
        for y in range(grid.size[0]):
            alive = live_neighbours(current, x, y)
            if current[y][x] == 'black' and 2 <= alive <= 3:
                grid[y][x].color = 'black'
            elif current[y][x] != 'black' and alive == 3:
                grid[y][x].color = 'black'
            else:
                grid[y][x].color = ''
    sleep(50)

evolution()
```

#### Horizintale Bewegungen

```py live_py slim
from grid import Grid
from game import gameloop, sleep

grid = Grid.from_bin_text('''
  

        xxxx
       x   x
           x
       x  x
   
   
   
 xxx   
xxxxx  
xxx xx               
   xx 
       
       
       
       
           xxxx
          xxxxxx
          xxxx xx
              xx
       
       
''')


def neighbours(grid, x, y):
    nb = []
    dim_x = len(grid[0])
    dim_y = len(grid)
    for i in range(-1, 2):
        for j in range(-1, 2):
            if not (i == 0 and j == 0):
                ny = (y + i) % dim_y
                nx = (x + j) % dim_x
                nb.append(grid[ny][nx])
    return nb

def live_neighbours(grid, x, y):
    s = 0
    for cell in neighbours(grid, x, y):
        if cell == 'black':
            s += 1
    return s

@gameloop
def evolution(dt):
    current = grid.color_grid
    for x in range(grid.size[1]):
        for y in range(grid.size[0]):
            alive = live_neighbours(current, x, y)
            if current[y][x] == 'black' and 2 <= alive <= 3:
                grid[y][x].color = 'black'
            elif current[y][x] != 'black' and alive == 3:
                grid[y][x].color = 'black'
            else:
                grid[y][x].color = ''
    sleep(50)

evolution()
```