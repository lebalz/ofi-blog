import clsx from 'clsx';
import * as React from 'react';
import styles from './styles.module.scss';
import containerStyles from '../../styles/container.module.scss';

const toBin = (num: number) => {
    return (num >>> 0).toString(2).padStart(8, '0');
}

const toHex = (num: number) => {
    return num.toString(16).padStart(2, '0');
};

const DecBinHexTransformer = () => {
    const [source, setSource] = React.useState<'dec' | 'bin' | 'hex'>('dec');
    const [dec, setDec] = React.useState(8);
    const [bin, setBin] = React.useState('00001000');
    const [hex, setHex] = React.useState('08');

    React.useEffect(() => {
        if (!dec || source !== 'dec') {
            return;
        }
        const _bin = toBin(dec);
        setBin(_bin.padStart(Math.ceil(_bin.length / 8) * 8, '0'));
        const _hex = toHex(dec);
        setHex(_hex.padStart(Math.ceil(_hex.length / 2) * 2, '0'));
    }, [dec]);

    React.useEffect(() => {
        if (!bin || source !== 'bin') {
            return;
        }
        const dec_ = parseInt(bin.replace(/\s+/g, ''), 2);
        setDec(dec_);
        const _hex = toHex(dec);
        setHex(_hex.padStart(Math.ceil(_hex.length / 2) * 2, '0'));
    }, [bin]);

    React.useEffect(() => {
        if (!hex || source !== 'hex') {
            return;
        }
        const dec_ = parseInt(hex.replace(/\s+/g, ''), 16);
        setDec(dec_);
        const _bin = toBin(dec);
        setBin(_bin.padStart(Math.ceil(_bin.length / 8) * 8, '0'));
    }, [hex]);
    return (
        <div className={clsx('hero', 'shadow--lw', containerStyles.container)}>
            <div className="container">
                <p className="hero__subtitle">Dec - Bin - Hex</p>
                <div className={clsx(containerStyles.stringInputContainer)}>
                    <h4>
                        <label htmlFor="dec">Dezimal</label>
                    </h4>
                    <input
                        id="dec"
                        type="number"
                        placeholder="Dezimal"
                        value={dec}
                        onChange={(e) => {
                            setSource('dec');
                            const txt = e.target.value.replace(/\D/g, '');
                            if (txt.length > 0) {
                                setDec(Number.parseInt(txt));
                            } else {
                                setDec(undefined);
                            }
                        }}
                    />
                </div>
                <div className={clsx(containerStyles.stringInputContainer)}>
                    <h4>
                        <label htmlFor="dec">Binär</label>
                    </h4>
                    <input
                        id="bin"
                        type="text"
                        placeholder="Binär"
                        value={bin}
                        onChange={(e) => {
                            setSource('bin');
                            const pos = Math.max(e.target.selectionStart, e.target.selectionEnd);
                            const txt = e.target.value.replace(/[^01\s]/g, '');
                            if (txt.length > 0) {
                                setBin(txt);
                            } else {
                                setBin(undefined);
                            }
                            setTimeout(() => e.target.setSelectionRange(pos, pos), 0);
                        }}
                    />
                </div>
                <div className={clsx(containerStyles.stringInputContainer)}>
                    <h4>
                        <label htmlFor="hex">Hexadezimal</label>
                    </h4>
                    <input
                        id="hex"
                        type="text"
                        placeholder="Dezimal"
                        value={hex?.toUpperCase()}
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
                    />
                </div>
            </div>
        </div>
    );
};

export default DecBinHexTransformer;
