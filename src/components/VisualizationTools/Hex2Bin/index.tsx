import clsx from 'clsx';
import * as React from 'react';
import styles from './styles.module.scss';
import containerStyles from '../../styles/container.module.scss';
import { chunk, textChunks } from '../../helpers/binary';

const toBin = (num: number) => {
    return (num >>> 0).toString(2).padStart(8, '0');
}

const toHex = (num: number) => {
    return num.toString(16).padStart(2, '0');
};

const DecBinHexTransformer = () => {
    const [source, setSource] = React.useState<'dec' | 'bin' | 'hex'>('dec');
    const [bin, setBin] = React.useState('00001000');
    const [hex, setHex] = React.useState('08');

    React.useEffect(() => {
        if (!bin || source !== 'bin') {
            return;
        }
        const decs = textChunks(bin, 8).map((val) => parseInt(val, 2));
        const _hex = decs.map(toHex).join(' ').toUpperCase();
        setHex(_hex);
    }, [bin]);

    React.useEffect(() => {
        if (!hex || source !== 'hex') {
            return;
        }
        const decs = textChunks(hex, 2).map((val) => parseInt(val, 16));
        const _bin = decs.map((val) => toBin(val)).join(' ');
        setBin(_bin);
    }, [hex]);
    return (
        <div className={clsx('hero', 'shadow--lw', containerStyles.container)}>
            <div className="container">
                <p className="hero__subtitle">Text: Hex - Bin</p>
                <h4>Hexadezimal</h4>
                <div className={clsx(containerStyles.inputContainer)}>
                    <textarea
                        placeholder="Hex"
                        className={clsx(containerStyles.input)}
                        rows={(hex?.split('\n').length || 1) + 2}
                        value={hex?.toUpperCase()}
                        onClick={() => setSource('hex')}
                        onChange={(e) => {
                            setSource('hex');
                            const pos = Math.max(e.target.selectionStart, e.target.selectionEnd);
                            const txt = e.target.value.replace(/[^0123456789ABCDEF\s]/gi, '');
                            if (txt.length > 0) {
                                setHex(txt);
                            } else {
                                setHex(undefined);
                            }
                            setTimeout(() => e.target.setSelectionRange(pos, pos), 0);
                        }}
                    ></textarea>
                    {source === 'hex' && <div className={containerStyles.active}></div>}
                </div>
                <h4>Binär</h4>
                <div className={clsx(containerStyles.inputContainer)}>
                    <textarea
                        placeholder="Bin"
                        className={clsx(containerStyles.input)}
                        rows={(bin?.split('\n').length || 1) + 2}
                        value={bin?.toUpperCase()}
                        onClick={() => setSource('bin')}
                        onChange={(e) => {
                            setSource('bin');
                            const pos = Math.max(e.target.selectionStart, e.target.selectionEnd);
                            const txt = e.target.value.replace(/[^01\s]/gi, '');
                            if (txt.length > 0) {
                                setBin(txt);
                            } else {
                                setBin(undefined);
                            }
                            setTimeout(() => e.target.setSelectionRange(pos, pos), 0);
                        }}
                    ></textarea>
                    {source === 'bin' && <div className={containerStyles.active}></div>}
                </div>
            </div>
        </div>
    );
};

export default DecBinHexTransformer;
