from browser import document, window # type: ignore
import re
import sys
import time
from config import Config # type: ignore
from py_back_trace import notify, EventOutput, print_exc # type: ignore

has_turtle_import = False
log_line_number_shift = 0

TURTLE_IMPORTS = re.compile(r'(^from turtle import)|(^import turtle)|(^from turtle3d import)|(^import turtle3d)', re.M)
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
        ns = {'__name__': node_id, 'RESULT_DIV': document[res_div]}
        loc = {}
        exec(py_script, ns)
    except Exception as exc:
        print_exc(file=sys.stderr, line_shift=log_line_number_shift)
    finally:
        notify(node_id, {'type': 'done', 'time': time.time()})
    
    sys.stdout.flush()
    sys.stderr.flush()
