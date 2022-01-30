import clsx from 'clsx';
import * as React from 'react';
import styles from './styles.module.scss';
const ALPHABET_FREQUENT = /[ENIR]/gi;
const ALPHABET_RARE = /[BCDFGHJKLMOPQUVWXYZ]/gi;
const SANITIZE = [
    { find: /ä/g, replace: 'ae' },
    { find: /ö/g, replace: 'oe' },
    { find: /ü/g, replace: 'ue' },
    { find: /Ä/g, replace: 'Ae' },
    { find: /Ö/g, replace: 'Oe' },
    { find: /Ü/g, replace: 'Ue' },
    { find: /\s+/g, replace: ' ' },
    { find: /^\s/g, replace: '' },
    { find: /\s$/g, replace: '' },
];

const sanitizer = (text: string) => {
    return SANITIZE.reduce((txt, rule) => txt.replace(rule.find, rule.replace), text);
};

const Redundancy = () => {
    const [text, setText] = React.useState('');
    const [mode, setMode] = React.useState<'frequent' | 'rare'>('frequent');
    const [output, setOutput] = React.useState('');

    React.useEffect(() => {
        if (text.length === 0) {
            return;
        }
        const sanitized = sanitizer(text);
        console.log(sanitized, sanitized.replace(ALPHABET_FREQUENT, ''), sanitized.replace(ALPHABET_RARE, ''))
        switch (mode) {
            case 'frequent':
                setOutput(sanitized.replace(ALPHABET_FREQUENT, ''));
                break;
            case 'rare':
                setOutput(sanitized.replace(ALPHABET_RARE, ''));
                break;
        }
    }, [text, mode]);

    return (
        <div className={clsx('hero', 'shadow--lw', styles.container)}>
            <div className="container">
                <p className="hero__subtitle">Buchstaben Redundanz</p>
                <h4>Originaltext</h4>
                <textarea
                    className={clsx(styles.input)}
                    value={text}
                    onChange={(e) => {
                        setText(e.target.value);
                    }}
                    rows={5}
                    placeholder="Originaltext"
                ></textarea>

<div className={clsx('buttongroup', styles.modes)}>
                    <button
                        className={clsx(
                            'button',
                            'button--sm',
                            'button--primary',
                            'button--outline',
                            mode === 'frequent' && 'button--active'
                        )}
                        title={`Häufige: ${ALPHABET_FREQUENT.source.slice(1, -1).split('').join(', ')}`}
                        onClick={() => setMode('frequent')}
                    >
                        Häufige Entfernen
                    </button>
                    <button
                        className={clsx(
                            'button',
                            'button--sm',
                            'button--primary',
                            'button--outline',
                            mode === 'rare' && 'button--active'
                        )}
                        onClick={() => setMode('rare')}
                        title={`Seltene: ${ALPHABET_RARE.source.slice(1, -1).split('').join(', ')}`}
                    >
                        Seltene entfernen
                    </button>
                </div>
                <h4>Geheimtext</h4>
                <textarea
                    className={clsx(styles.input)}
                    value={output}
                    onChange={() => undefined}
                    rows={5}
                    placeholder="Ausgabe"
                ></textarea>
            </div>
        </div>
    );
};

export default Redundancy;
