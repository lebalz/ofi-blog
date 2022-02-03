import clsx from 'clsx';
import * as React from 'react';
import CopyBadge from './CopyBadge';
import styles from './styles.module.scss';

interface Props {
    values: number[];
}

const toBin = (num: number) => {
    return (num >>> 0).toString(2).padStart(8, '0');
}

const Bin = (props: Props) => {
    const [bin, setBin] = React.useState('00000000');

    React.useEffect(() => {
        const b = props.values.reduce((prev, val) => `${prev} ${toBin(val)}`, '');
        setBin(b);
    }, [props.values])
    return (
        <div className={clsx(styles.color, styles.blue, styles.property)}>
            <span className={clsx(styles.label)}>
                Binär
            </span>
            <span style={{flexGrow: 1}}></span>
            <CopyBadge value={bin} />
        </div>
        );
}

export default Bin;