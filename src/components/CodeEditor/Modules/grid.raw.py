from browser import document, html # type: ignore
from browser import timer, window # type: ignore
from config import Config # type: ignore

class Rectangle():
    col: int
    row: int
    ctx = None
    grid = None
    scale: int = 10
    def __init__(self, grid, col: int, row: int, scale: int = 10, color: str = 'black'):
        self.col = col
        self.row = row
        self.scale = scale
        self.grid = grid
        canvas = document[Config.CANVAS_ID]
        self.ctx = canvas.getContext('2d')
        self._color = color
        
    def get(self, offset_x: int, offset_y: int):
        y = (self.row + offset_y) % len(self.grid) # type: ignore
        x = (self.col + offset_x) % len(self.grid[y]) # type: ignore
        return self.grid[y][x] # type: ignore

    @property
    def color(self):
        return self._color

    @color.setter
    def color(self, color: str):
        self._color = color
        self.draw()

    def draw(self):
        self.ctx.lineWidth = 0 # type: ignore
        self.ctx.fillStyle = self.color # type: ignore
        self.ctx.fillRect(self.col * self.scale, self.row * self.scale, self.scale, self.scale) # type: ignore

    def copy(self, grid):
        return Rectangle(grid, self.col, self.row, self.scale, self.color)

    def __repr__(self):
        return f'{self.color[:5].ljust(5, " ")}'

class RectLine():
    line = []
    scale: int = 10
    n = 0
    max = 0
    def __init__(self, grid, row, cols, scale: int = 10, line = []):
        self.scale = scale
        self.max = cols
        self.grid = grid
        if len(line) > 0:
            self.line = line
        else:
            self.line = [Rectangle(grid, col, row, scale) for col in range(cols)]
    
    def __getitem__(self, key):
        return self.line[key]

    def __setitem__(self, key, value):
        self.line[key].color = value

    def __repr__(self):
        return ', '.join([f'{r}' for r in self.line])

    def __iter__(self):
        self.n = 0
        return self

    def __next__(self):
        if self.n < self.max:
            result = self[self.n]
            self.n += 1
            return result
        else:
            raise StopIteration
    
    def __len__(self):
        return self.max

    def draw(self):
        for rect in self.line:
            rect.draw()
    
    def copy(self, grid):
        return RectLine(grid, self.line[0].row, len(self.line), self.scale, [l.copy() for l in self.line]) # type: ignore

class Grid():
    lines = []
    n = 0
    max = 0
    CANVAS_ID = ''

    def __init__(self, rows, cols, scale: int = 10):
        self.lines = [RectLine(self, row, cols, scale) for row in range(rows)]
        self.max = rows
    
    @staticmethod
    def setup(width: int, height: int):
        canvas = document[Config.CANVAS_ID]
        parent = canvas.parent
        parent.replaceChildren()
    
        canv = document.createElement('canvas')
        canv.style.display = 'block'
        canv.id = Config.CANVAS_ID;
        canv.attrs['height'] = height
        canv.attrs['width'] = width
        canv.style.width = f'{width}px'
        canv.style.height = f'{height}px'
        parent.appendChild(canv)

    def set_lines(self, lines):
        self.lines = lines
        self.max = len(lines)

    @property
    def grid(self):
        return [l.line for l in self.lines]

    def draw(self):
        for line in self.lines:
            line.draw()

    def copy(self):
        cp = Grid(0, 0)
        lines = [l.copy(cp) for l in self.lines]
        cp.set_lines(lines)
        return cp

    def __getitem__(self, key):
        return self.lines[key]

    def __setitem__(self, key, value):
        self.lines[key] = value
        
    def __repr__(self):
        rep = ''
        for line in self.lines:
            rep += f'{line}'
            rep += '\n'
        return rep
    
    def __iter__(self):
        self.n = 0
        return self

    def __next__(self):
        if self.n < self.max:
            result = self[self.n]
            self.n += 1
            return result
        else:
            raise StopIteration

    def __len__(self):
        return self.max