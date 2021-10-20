import clsx from 'clsx';
import * as React from 'react';
import { PENTA_TABLE, sanitizePentaString } from './Pentacode';
import styles from './XORBlockCipher.module.scss';

const toPentaInt = (text: string): number[] => {
    const t = sanitizePentaString(text);
    return t.split('').map((char) => Number.parseInt(PENTA_TABLE[char], 2));
};

const fromPentaInt = (nums: number[]): string => {
    return nums.map((num) => PENTA_TABLE[num.toString(2).padStart(5, '0')]).join('');
};

const XORBlockCipher = () => {
    const [text, setText] = React.useState('');
    const [cipherText, setCipherText] = React.useState('');
    const [key, setKey] = React.useState('');
    const [mode, setMode] = React.useState<'CBC' | 'ECB'>('ECB');
    const [iv, setIv] = React.useState('');
    const [source, setSource] = React.useState<'text' | 'cipher'>('text');

    React.useEffect(() => {
        const keyLength = key.length;
        if (keyLength === 0) {
            return;
        }
        console.log(source);
        const k = toPentaInt(key);
        switch (source) {
            case 'cipher':
                const cc = toPentaInt(cipherText);
                const p = fromPentaInt(cc.map((charCode, idx) => charCode ^ k[idx % keyLength]));
                setText(p);
                break;
            case 'text':
                const t = toPentaInt(text);
                const c = fromPentaInt(t.map((charCode, idx) => charCode ^ k[idx % keyLength]));
                setCipherText(c);
                break;
        }
    }, [text, cipherText, key]);

    return (
        <div className={clsx('hero', 'shadow--lw', styles.container)}>
            <div className="container">
                <p className="hero__subtitle">Häufigkeitsanalyse</p>
                <h4>Klartext</h4>
                <textarea
                    className={clsx(styles.input)}
                    value={text}
                    onChange={(e) => {
                        setSource('text');
                        const pos = Math.max(e.target.selectionStart, e.target.selectionEnd);
                        setText(sanitizePentaString(e.target.value));
                        setTimeout(() => e.target.setSelectionRange(pos, pos), 0);
                    }}
                    rows={5}
                ></textarea>
                <input
                    type="text"
                    placeholder="Schlüssel"
                    value={key}
                    onChange={(e) => {
                        const pos = Math.max(e.target.selectionStart, e.target.selectionEnd);
                        setKey(sanitizePentaString(e.target.value));
                        setTimeout(() => e.target.setSelectionRange(pos, pos), 0);
                    }}
                />
                <div>{mode}</div>
                <h4>Geheimtext</h4>
                <textarea
                    className={clsx(styles.input)}
                    value={cipherText}
                    onChange={(e) => {
                        setSource('cipher');
                        const pos = Math.max(e.target.selectionStart, e.target.selectionEnd);
                        setCipherText(sanitizePentaString(e.target.value));
                        setTimeout(() => e.target.setSelectionRange(pos, pos), 0);
                    }}
                    rows={5}
                ></textarea>
            </div>
        </div>
    );
};

export default XORBlockCipher;
