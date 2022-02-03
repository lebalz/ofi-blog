import clsx from 'clsx';
import * as React from 'react';
import CopyBadge from './CopyBadge';
import styles from './styles.module.scss';

interface Props {
    value: string;
    hex?: number[];
}

const toHex = (num: number) => {
    return num.toString(16).padStart(2, '0');
};

const Css = (props: Props) => {
    const [hex, setHex] = React.useState<string>();

    React.useEffect(() => {
        if (props.hex) {
            const h = props.hex.reduce((prev, val) => `${prev}${toHex(val)}`, '#');
            setHex(h);
        }
    }, [props.hex]);
    return (
        <div className={clsx(styles.color, styles.blue, styles.property)}>
            <span className={clsx(styles.label)}>CSS-Farbe</span>
            <span style={{ flexGrow: 1 }}></span>
            {props.hex && (
                <React.Fragment>
                    <CopyBadge value={hex} />
                    <span style={{width: '8px'}} />
                </React.Fragment>
            )}
            <CopyBadge value={props.value} />
        </div>
    );
};

export default Css;
