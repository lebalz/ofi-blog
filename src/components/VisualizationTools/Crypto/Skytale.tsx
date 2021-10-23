import clsx from 'clsx';
import * as React from 'react';
import styles from './styles.module.scss';

const Skytale = () => {
    const [text, setText] = React.useState('');
    const [cipherText, setCipherText] = React.useState('');
    const [key, setKey] = React.useState(2);
    const [source, setSource] = React.useState<'text' | 'cipher'>('text');

    React.useEffect(() => {
        switch (source) {
            case 'text':
                if (text.length === 0) {
                    return;
                }
                const lines = [...Array(key)].map(() => '');
                text.split('').forEach((char, idx) => {
                    lines[idx % key] += char;
                })
                return setCipherText(lines.join('\n'));
            case 'cipher':
                if (cipherText.length === 0) {
                    return;
                }
                const cLines = cipherText.split('\n');
                let decrypt = '';
                for (let i = 0; i < cLines[0].length; i++) {
                    cLines.forEach((line) => {
                        if (line.length > i) {
                            decrypt += line.charAt(i);
                        }
                    })
                }
                return setText(decrypt);
        }
    }, [text, cipherText, key]);

    return (
        <div className={clsx('hero', 'shadow--lw', styles.container)}>
            <div className="container">
                <p className="hero__subtitle">Skytale</p>
                <h4>Klartext</h4>
                <textarea
                    className={clsx(styles.input)}
                    value={text}
                    onChange={(e) => {
                        setSource('text');
                        setText(e.target.value);
                    }}
                    rows={5}
                    placeholder="Klartext"
                ></textarea>
                <div className={styles.stringInputContainer}>
                    <h4>
                        <label htmlFor="skytale-key">Schlüssel</label>
                    </h4>
                    <input
                        id="skytale-key"
                        type="number"
                        min={1}
                        max={26}
                        placeholder="Schlüssel"
                        value={key}
                        onChange={(e) => {
                            if (source !== 'text') {
                                setSource('text');
                            }
                            setKey(Number.parseInt(e.target.value, 10));
                        }}
                    />
                </div>
                <h4>Geheimtext</h4>
                <textarea
                    className={clsx(styles.input)}
                    value={cipherText}
                    onChange={(e) => {
                        setSource('cipher');
                        setCipherText(e.target.value);
                    }}
                    rows={5}
                    placeholder="Skytale Verschlüsselter Geheimtext"
                ></textarea>
            </div>
        </div>
    );
};

export default Skytale;
