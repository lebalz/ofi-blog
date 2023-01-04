'''
pip install pypdf
'''
from pypdf import PdfReader, PdfWriter

config = [
    ['Max', 1, 6], # pages 1 to 6, save as max.pdf
    ['Maria', 7, 12]
]


reader = PdfReader('path/to/pdf-in')
out_path = '/path/to/pdf/out/folder'

for conf in config:
    [name, start, end] = conf
    out = PdfWriter()
    out.append(reader, list(range(start - 1, end)))
    out.write(f'{out_path}{name}.pdf')
    out.close()
