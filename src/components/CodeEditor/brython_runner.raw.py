from browser import document, window # type: ignore
import re
import sys
import time
from config import Config # type: ignore

has_turtle_import = False
log_line_number_shift = 0

def notify(node_id, data):
    event = window.CustomEvent.new('bry_notify', {'detail': data})
    document[f'py_{node_id}'].dispatchEvent(event)

class EventOutput:
    encoding = 'utf-8'

    def __init__(self, node_id, out_type):
        self.node_id = node_id
        self.out_type = out_type
        self.buf = ''

    def write(self, data):
        self.buf += str(data)
        self.flush()

    def flush(self):
        if len(self.buf) > 0:
            notify(self.node_id, {'type': self.out_type, 'output': self.buf})
        self.buf = ''

    def __len__(self):
        return len(self.buf)

class Trace:
    def __init__(self):
        self.buf = ""

    def write(self, *data):
        self.buf += " ".join([str(x) for x in data])

    def format(self):
        """Remove calls to function in this script from the traceback."""
        return self.buf

def syntax_error(args):
    trace = Trace()
    info, [filename, lineno, offset, line, *extra] = args
    line_nr = lineno - log_line_number_shift if lineno > 0 else 0

    trace.write(f"  File {filename}, line {line_nr}\n")
    indent = len(line) - len(line.lstrip())
    trace.write("    " + line.strip() + "\n")
    nb_marks = 1
    if extra:
        end_lineno, end_offset = extra
        if end_lineno > lineno:
            nb_marks = len(line) - offset
        else:
            nb_marks = end_offset - offset
    nb_marks = max(nb_marks, 1)
    trace.write("    " + (offset - 1) * " " + "^" * nb_marks + "\n")
    trace.write("SyntaxError:", info, "\n")
    return trace.buf

def format_exc():
    trace = Trace()
    exc_info = sys.exc_info()
    exc_class = exc_info[0].__name__  # type: ignore
    exc_msg = str(exc_info[1])
    tb = exc_info[2]
    if exc_info[0] is SyntaxError:
        return syntax_error(exc_info[1].args)  # type: ignore
    trace.write("Traceback (most recent call last):\n")
    while tb is not None:
        frame = tb.tb_frame
        code = frame.f_code
        name = code.co_name
        filename = code.co_filename
        line_nr = tb.tb_lineno - log_line_number_shift if tb.tb_lineno > 0 else 0
        trace.write(f"  File {filename}, line {line_nr}, in {name}\n")
        if not filename.startswith("<"):
            src = open(filename, encoding='utf-8').read()
            lines = src.split('\n')
            line = lines[tb.tb_lineno - 1]
            trace.write(f"    {line.strip()}\n")
        tb = tb.tb_next
    trace.write(f"{exc_class}: {exc_msg}\n")
    return trace.format()

def print_exc(file=None):
    if file is None:
        file = sys.stderr
    trace = format_exc()
    file.write(trace)
    return trace

TURTLE_IMPORTS = re.compile(r'(^from turtle import)|(^import turtle)', re.M)
GRID_IMPORTS = re.compile(r'(^from grid import)|(^import grid)', re.M)
GRAPHICS_OUTPUT = re.compile(r'^(SETUP_)?GRAPHICS_OUTPUT\s*=\s*(True|1)', re.M)
CANVAS_OUTPUT = re.compile(r'^(SETUP_)?CANVAS_OUTPUT\s*=\s*(True|1)', re.M)
TURTLE_TEMPLATE = '''from browser import document
import turtle
turtle.restart()
turtle.set_defaults(
  turtle_canvas_wrapper = document['{node_id}_graphics'],
  turtle_canvas_id = '{node_id}_svg'
)
{py_script}
turtle.done()
'''


def run(code, node_id, line_shift):
    global has_turtle_import, log_line_number_shift
    has_turtle_import = not not TURTLE_IMPORTS.search(code)
    log_line_number_shift = (7 if has_turtle_import else 0) + line_shift
    Config.PYTHON_SOURCE = f'{node_id}_src'
    if CANVAS_OUTPUT.search(code) or GRID_IMPORTS.search(code):
        Config.CANVAS_ID = f'{node_id}_canvas'
    if GRAPHICS_OUTPUT.search(code):
        Config.GRAPHICS_ID = f'{node_id}_graphics'
    py_script = TURTLE_TEMPLATE.format(node_id=node_id, py_script=code) if has_turtle_import else code

    sys.stdout = EventOutput(node_id, 'stdout')
    sys.stderr = EventOutput(node_id, 'stderr')
    notify(node_id, {'type': 'start', 'time': time.time()})
    try:
        res_div = f'{node_id}_brython_result'
        document[res_div].clear()
        ns = {'__name__': node_id, 'RESULT_DIV': document[res_div]}
        loc = {}
        exec(py_script, ns)
        # if len(code.splitlines()) < 10:
        #    print('  --', '\n'.join([f'{x}: {loc[x]}' for x in loc.keys() if not x.startswith('__')]))
    except Exception as exc:
        print_exc(file=sys.stderr)
    finally:
        notify(node_id, {'type': 'done', 'time': time.time()})
    
    sys.stdout.flush()
    sys.stderr.flush()
