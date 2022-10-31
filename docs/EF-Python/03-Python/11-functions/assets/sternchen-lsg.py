'''
Teile und herrsche: Ein Problem wird in kleinere Teilprobleme zerlegt.

Problem: Ein Rechteck aus Sternen ausgeben

Analyse:   ****  <-- Zeile nur aus Sternen
           *  *  \
           *  *   | <-- "Höhe - 2" Zeilen mit Sternen am Rand
           *  *   |
           *  *  /
           ****  <-- Zeile nur aus Sternen
- Teilproblem: Zeile nur aus sternen ausgeben: print_line_of_stars
- Teilproblem: Mittlere Zeilen aus Sternen und Leerschlägen ausgeben: print_line_with_border_stars
'''

def print_line_of_stars(width):
    '''
    Gibt eine Zeile mit der angegebenen Anzahl Sternen aus 
    '''
    print('*' * width)

def print_line_walled_by_stars(width):
    '''
    Gibt eine mit Sternen umgebene leere Zeile mit der
    angegebenen Anzahl Zeichen aus.
    '''
    spaces = width - 2
    print('*' + ' ' * spaces + '*' )


def print_rectangle(width, height):
    '''
    Gibt ein Rechteck mit der angegebenen Breite (width) 
    und Höhe (height) aus
    '''

    if width < 2:
        print('Breite zu klein')
        return
    if height < 2:
        print('Höhe zu klein')
        return
    
    print_line_of_stars(width)
    for line in range(height - 2):
        print_line_walled_by_stars(width)
    print_line_of_stars(width)


# Hauptprogramm
print('---------- 3x3 -----------')
print_rectangle(3, 3)

print('----------12x3 -----------')
print_rectangle(12, 3)


print('----------12x12-----------')
print_rectangle(12, 12)

print('---------- 3x12-----------')
print_rectangle(3, 12)
