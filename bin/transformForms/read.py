import pandas as pd
import re
import numpy as np

FOLDER = '/Users/balz/Library/CloudStorage/OneDrive-ErziehungsdirektiondesKantonsBern/Dokumente/Informatik/80-Computer/Forms-Rueckmeldungen/'

F24 = [
    '[24f]_ Videoprojekt - Gruppe Tutsch(1-19)',
    '[24f]_ Videoprojekt - Gruppe Stämpfli(1-20)',
    '[24f]_ Videoprojekt - Gruppe Schwarz(1-19)',
    '[24f]_ Videoprojekt - Gruppe Scholtes(1-20)',
    '[24f]_ Videoprojekt - Gruppe Rambaldi(1-20)',
    '[24f]_ Videoprojekt - Gruppe Poltera(1-19)',
    '[24f]_ Videoprojekt - Gruppe Oehler(1-18)'
]

L24 = [
    '[24L]_ Videoprojekt - Gruppe Anaïs(1-19)',
    '[24L]_ Videoprojekt - Gruppe Egide(1-21)',
    '[24L]_ Videoprojekt - Gruppe Helena(1-20)',
    '[24L]_ Videoprojekt - Gruppe Ida(1-20)',
    '[24L]_ Videoprojekt - Gruppe Maya(1-18)'
]


I24 = [
    '[24i]_ Videoprojekt - Gruppe Lea(1-19)',
    '[24i]_ Videoprojekt - Gruppe Mia(1-17)',
    '[24i]_ Videoprojekt - Gruppe Noor(1-20)',
    '[24i]_ Videoprojekt - Gruppe Sarah(1-18)',
    '[24i]_ Videoprojekt - Gruppe Sujina(1-18)',
    '[24i]_ Videoprojekt - Gruppe Timon(1-21)'
]
O24 = [
    '[24o]_ Videoprojekt - Gruppe Felix, Brian, Gian, Igor(1-19)',
    '[24o]_ Videoprojekt - Gruppe Finn, Tessa, Mohammad, Lucas(1-18)',
    '[24o]_ Videoprojekt - Gruppe Hannah, Elina, Anna-Lisa, Kaya(1-17)',
    '[24o]_ Videoprojekt - Gruppe Katinka, Julienne, Sophie(1-16)',
    '[24o]_ Videoprojekt - Gruppe Sina, Seraina, Jara, Linda(1-17)'
]
K24 = [
    '[24K]_ Videoprojekt - Gruppe Alex(1-19)',
    '[24K]_ Videoprojekt - Gruppe Alexander(1-17)',
    '[24K]_ Videoprojekt - Gruppe Benjamin(1-18)',
    '[24K]_ Videoprojekt - Gruppe Fabrice(1-19)',
    '[24K]_ Videoprojekt - Gruppe Mathieu(1-18)',
    '[24K]_ Videoprojekt - Gruppe Ylli(1-19)'
]

GROUPS = K24
KLASS = '24K'

def sanitize(row: str) -> float:
    row = f'{row}'.replace(',', '.')
    val = re.findall(r"\d*\.?\d+|\d+", row)
    if len(val) > 1:
        # print(row, val)
        ...
    if len(val) == 0:
        # print('no value: ', row, val)
        return
    return float(val[0])

def prepare_md(text: str) -> str:
    NL = '\n'
    return f'''- {'<br />'.join(text.split(NL))}'''

for group in GROUPS:
    name = re.findall(r'- Gruppe (.+)\(', group)
    FILE = f'{FOLDER}{group}.xlsx'
    df = pd.read_excel(FILE)

    feedbacks = []

    # print(df.columns.values.tolist())
    for idx, row in df.iterrows():
        feedbacks.append({
            'email': row['Email'],
            'simplicity': row['Verständlichkeit \n- Konzept binäre Addition/binäre Zahlendarstellung\n- Gatter\n- Halbaddierer\n- Volladdierer\n-\xa04bit-Addition'],
            'simplicity_pts': sanitize(row['Verständlichkeit (0-3 Punkte)']),
            'creativity': row['Kreativität und Machart des Videos'],
            'creativity_pts': sanitize(row['Kreativität und Machart des Videos (0-3 Punkte)']),
            'overall': row['Allgemeines']
        })

    simplicity_pts = []
    creativity_pts = []

    feedback_simplicity = []
    feedback_creativity = []
    feedback_overall = []

    for feedback in feedbacks:
        if feedback['simplicity_pts']:
            simplicity_pts.append(feedback['simplicity_pts'])
        if feedback['creativity_pts']:
            creativity_pts.append(feedback['creativity_pts'])
        if len(feedback['simplicity']) > 5:
            feedback_simplicity.append(prepare_md(feedback['simplicity']))
        if len(feedback['creativity']) > 5:
            feedback_creativity.append(prepare_md(feedback['creativity']))
        if type(feedback['overall']) == str and len(feedback['overall']) > 5:
            feedback_overall.append(prepare_md(feedback['overall']))
    
    with open(f'bin/transformForms/feedbacks/{KLASS}_gruppe-{name[0]}.md', 'w') as f:
        f.write('\n'.join([
            '# Rückmeldung Video-Projekt',
            f'Gruppe: {name[0]}',
            '---',
            '## Einfachheit und Verständlichkeit',
            '\n'.join(feedback_simplicity),
            '---',
            '## Kreativität und Machart',
            '\n'.join(feedback_creativity),
            '## Allgemeines',
            '\n'.join(feedback_overall)
        ]))

    print(f'''
    {name[0]}
        simplicity_pts: {np.median(simplicity_pts)} | {np.mean(simplicity_pts)}
        creativity_pts: {np.median(creativity_pts)} | {np.mean(creativity_pts)}
    ''')