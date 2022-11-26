import clsx from 'clsx';
import { shuffle } from 'lodash';
import * as React from 'react';
import { pentaChunks, PENTA_TABLE, sanitizePentaString } from './../Pentacode';
import styles from './styles.module.scss';

const noWhite = (inp: string) => {
    return inp.replace(/\s+/g, '');
}

const toPentaInt = (text: string): number[] => {
    text = noWhite(text);
    text = text.length % 5 === 0 ? text : text.padEnd(text.length + (5 - text.length % 5), '0');
    const chunks = pentaChunks(text);
    return chunks.map((chunk) => Number.parseInt(chunk, 2));
};

const fromPentaInt = (nums: number[]): string => {
    return nums.map((num) => num.toString(2).padStart(5, '0')).join(' ');
};


const BinXORBlockCipher = () => {
    const [pentaIn, setPentaIn] = React.useState('');
    const [pentaCipher, setPentaCipher] = React.useState('');
    const [key, setKey] = React.useState('');
    const [mode, setMode] = React.useState<'CBC' | 'ECB'>('ECB');
    const [iv, setIv] = React.useState('');
    const [source, setSource] = React.useState<'text' | 'cipher'>('text');

    React.useEffect(() => {
        const keyLength = noWhite(key).length;
        if (keyLength < 0 || (mode === 'CBC' && noWhite(iv).length !== noWhite(key).length)) {
            return;
        }
        const k = toPentaInt(key);
        // ECB
        if (mode === 'ECB') {
            switch (source) {
                case 'cipher':
                    const cc = toPentaInt(pentaCipher);
                    let p = fromPentaInt(cc.map((charCode, idx) => charCode ^ k[idx % keyLength]));
                    return setPentaIn(p);
                case 'text':
                    const t = toPentaInt(pentaIn);
                    const c = fromPentaInt(t.map((charCode, idx) => charCode ^ k[idx % keyLength]));
                    return setPentaCipher(c);
            }
        }
        // CBC
        const blockCipher = toPentaInt(iv);
        switch (source) {
            case 'cipher':
                const cc = toPentaInt(pentaCipher);
                const p = fromPentaInt(
                    cc.map((charCode, idx) => {
                        const ind = idx % keyLength;
                        const res = charCode ^ k[ind] ^ blockCipher[ind];
                        blockCipher[ind] = charCode;
                        return res;
                    })
                );
                return setPentaIn(p);
            case 'text':
                const t = toPentaInt(pentaIn);
                const c = fromPentaInt(
                    t.map((charCode, idx) => {
                        const ind = idx % keyLength;
                        const res = charCode ^ blockCipher[ind] ^ k[ind];
                        blockCipher[ind] = res;
                        return res;
                    })
                );
                return setPentaCipher(c);
        }
    }, [pentaIn, pentaCipher, key, mode, iv]);

    return (
        <div className={clsx('hero', 'shadow--lw', styles.container)}>
            <div className="container">
                <p className="hero__subtitle">XOR Blockchiffre</p>
                <h4>Modus</h4>
                <div className={clsx('buttongroup', styles.modes)}>
                    <button
                        className={clsx(
                            'button',
                            'button--sm',
                            'button--primary',
                            'button--outline',
                            mode === 'ECB' && 'button--active'
                        )}
                        onClick={() => setMode('ECB')}
                    >
                        ECB
                    </button>
                    <button
                        className={clsx(
                            'button',
                            'button--sm',
                            'button--primary',
                            'button--outline',
                            mode === 'CBC' && 'button--active'
                        )}
                        onClick={() => setMode('CBC')}
                    >
                        CBC
                    </button>
                </div>
                <h4>Klartext (Pentacode)</h4>
                <div className={styles.inputContainer}>
                    <textarea
                        className={clsx(styles.input)}
                        value={pentaIn}
                        onFocus={() => setSource('text')}
                        onChange={(e) => {
                            setSource('text');
                            const pos = Math.max(e.target.selectionStart, e.target.selectionEnd);
                            setPentaIn(e.target.value.replace(/[^01\s]/g, ''));
                            setTimeout(() => e.target.setSelectionRange(pos, pos), 0);
                        }}
                        rows={5}
                        placeholder="Klartext (Pentacode)"
                    ></textarea>
                    {source === 'text' && <div className={styles.active}></div>}
                </div>
                <div className={styles.stringInputContainer}>
                    <h4>
                        <label htmlFor="block-chain-key">Schlüssel (Pentacode)</label>
                    </h4>
                    <input
                        id="block-chain-key"
                        type="text"
                        placeholder="Schlüssel"
                        value={key}
                        onChange={(e) => {
                            const pos = Math.max(e.target.selectionStart, e.target.selectionEnd);
                            setKey(e.target.value.replace(/[^01\s]/g, ''));
                            setTimeout(() => e.target.setSelectionRange(pos, pos), 0);
                        }}
                    />
                </div>
                {mode === 'CBC' && (
                    <div className={styles.stringInputContainer}>
                        <h4>
                            <label htmlFor="cbc-iv">Initialisierungs Vektor (IV)</label>
                        </h4>
                        <div className={clsx(styles.iv, 'button-group')}>
                            <input
                                id="cbc-iv"
                                type="text"
                                placeholder="Der IV muss die gleiche Länge haben wie der Schlüssel"
                                value={iv}
                                className={clsx(iv.length !== key.length && styles.invalid)}
                                onChange={(e) => {
                                    const pos = Math.max(e.target.selectionStart, e.target.selectionEnd);
                                    setIv(e.target.value.replace(/[^01\s]/g, ''));
                                    setTimeout(() => {
                                        e.target.setSelectionRange(pos, pos);
                                    }, 0);
                                }}
                            />
                            {iv.length !== key.length && (
                                <span
                                    className={clsx('badge', 'badge--danger', styles.errorBadge)}
                                    title="Der IV muss die gleiche Länge haben wie der Schlüssel"
                                >
                                    Länge
                                </span>
                            )}
                            <button
                                className={clsx('button', 'button--primary', 'button--sm')}
                                onClick={() => {
                                    const len = noWhite(key).length;
                                    if (len < 5) {
                                        return setIv('');
                                    }
                                    const alphabet = Object.keys(PENTA_TABLE).filter(
                                        (char) => char.length === 5
                                    );
                                    const rand = shuffle(
                                        Array(Math.floor((len / 5) / alphabet.length) + 2)
                                            .fill('')
                                            .reduce((prev, curr) => [...prev, ...alphabet], [])
                                    );
                                    setIv(rand.slice(0, Math.floor(len / 5)).join(' '));
                                }}
                            >
                                Zufällig Setzen
                            </button>
                        </div>
                    </div>
                )}
                <h4>Geheimtext (Pentacode)</h4>
                <div className={styles.inputContainer}>
                    <textarea
                        className={clsx(styles.input)}
                        value={pentaCipher}
                        onFocus={() => setSource('cipher')}
                        onChange={(e) => {
                            setSource('cipher');
                            const pos = Math.max(e.target.selectionStart, e.target.selectionEnd);
                            setPentaCipher(e.target.value.replace(/[^01\s]/g, ''));
                            setTimeout(() => e.target.setSelectionRange(pos, pos), 0);
                        }}
                        rows={5}
                        placeholder="XOR Verschlüsselter Geheimtext"
                    ></textarea>
                    {source === 'cipher' && <span className={styles.active}></span>}
                </div>
            </div>
        </div>
    );
};

export default BinXORBlockCipher;
