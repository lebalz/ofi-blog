import clsx from 'clsx';
import { differenceWith, isEqual, shuffle, uniq } from 'lodash';
import * as React from 'react';
import styles from './styles.module.scss';
const ALPHABET = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
];

const sanitizer = (text: string) => {
    return text.toUpperCase().replace(/\s+/g, ' ');
};

const sanitizeKey = (key: string) => {
    return uniq(
        sanitizer(key)
            .replace(/[^A-Z]/g, '')
            .split('')
    ).join('');
};

const Substitution = () => {
    const [text, setText] = React.useState('');
    const [key, setKey] = React.useState('');
    const [missingChars, setMissingChars] = React.useState(ALPHABET);
    const [cipherText, setCipherText] = React.useState('');
    const [source, setSource] = React.useState<'text' | 'cipher'>('text');

    React.useEffect(() => {
        setMissingChars(differenceWith(ALPHABET, key.split(''), isEqual));
    }, [key]);

    React.useEffect(() => {
        if (source !== 'text' || text.length === 0) {
            return;
        }
        if (missingChars.length > 0) {
            return;
        }
        const cipher = text.split('').map((char) => {
            if (!ALPHABET.includes(char)) {
                return char;
            }
            return key[ALPHABET.indexOf(char)];
        });
        setCipherText(cipher.join(''));
    }, [text, key, missingChars]);

    React.useEffect(() => {
        if (source !== 'cipher' || cipherText.length === 0) {
            return;
        }
        if (missingChars.length > 0) {
            return;
        }
        const txt = cipherText.split('').map((char) => {
            if (!ALPHABET.includes(char)) {
                return char;
            }
            return ALPHABET[key.split('').indexOf(char)];
        });
        setText(txt.join(''));
    }, [cipherText, key, missingChars]);

    return (
        <div className={clsx('hero', 'shadow--lw', styles.container)}>
            <div className="container">
                <p className="hero__subtitle">Substitutions-Chiffre</p>
                <h4>Klartext</h4>
                <textarea
                    className={clsx(styles.input)}
                    value={text}
                    onChange={(e) => {
                        const pos = Math.max(e.target.selectionStart, e.target.selectionEnd);
                        setSource('text');
                        setText(sanitizer(e.target.value));
                        setTimeout(() => e.target.setSelectionRange(pos, pos), 0);
                    }}
                    rows={5}
                    placeholder="Klartext"
                ></textarea>
                <div className={styles.stringInputContainer}>
                    <h4>
                        <label htmlFor="subs-key">Schlüssel</label>
                    </h4>
                    <div className={clsx(styles.iv, 'button-group')}>
                        <input
                            id="subs-key"
                            type="text"
                            placeholder="Ein vollständiges Aplhabet"
                            value={key}
                            className={clsx(missingChars.length > 0 && styles.invalid)}
                            onChange={(e) => {
                                const pos = Math.max(e.target.selectionStart, e.target.selectionEnd);
                                setKey(sanitizeKey(e.target.value));
                                setTimeout(() => {
                                    e.target.setSelectionRange(pos, pos);
                                }, 0);
                            }}
                        />
                        <button
                            className={clsx('button', 'button--primary', 'button--sm')}
                            onClick={() => {
                                setKey(shuffle(ALPHABET).join(''));
                            }}
                        >
                            Zufällig Setzen
                        </button>
                    </div>
                    {missingChars.length > 0 && (
                        <div>
                            <span>Im Schlüssel fehlen die Buchstaben:</span>
                            {missingChars.map((char) => {
                                return (
                                    <span className={clsx('badge', 'badge--danger')} key={char}>
                                        {char}
                                    </span>
                                );
                            })}
                        </div>
                    )}
                </div>
                <h4>Geheimtext</h4>
                <textarea
                    className={clsx(styles.input)}
                    value={cipherText}
                    onChange={(e) => {
                        const pos = Math.max(e.target.selectionStart, e.target.selectionEnd);
                        setSource('cipher');
                        setCipherText(sanitizer(e.target.value));
                        setTimeout(() => e.target.setSelectionRange(pos, pos), 0);
                    }}
                    rows={5}
                    placeholder="Caesar Verschlüsselter Geheimtext"
                ></textarea>
            </div>
        </div>
    );
};

export default Substitution;
