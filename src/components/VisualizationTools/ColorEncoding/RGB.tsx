import clsx from 'clsx';
import * as React from 'react';
import containerStyles from '../../styles/container.module.scss';
import styles from './styles.module.scss';
import Slider from 'rc-slider/lib/Slider';
import 'rc-slider/assets/index.css';
import { Handle, SliderTooltip } from 'rc-slider';

const handle = (props) => {
    const { value, dragging, index, ...restProps } = props;
    return (
        <SliderTooltip
            prefixCls="rc-slider-tooltip"
            overlay={`${value}`}
            visible={dragging}
            placement="top"
            key={index}
        >
            <Handle value={value} {...restProps} />
        </SliderTooltip>
    );
};

const toBin = (num: number) => {
    return (num >>> 0).toString(2).padStart(8, '0');
}

const toHex = (num: number) => {
    return num.toString(16).padStart(2, '0');
}

const RGB = () => {
    const [r, setR] = React.useState(255);
    const [g, setG] = React.useState(217);
    const [b, setB] = React.useState(0);
    const [bin, setBin] = React.useState('');
    const [hex, setHex] = React.useState('');

    React.useEffect(() => {
        setBin(`${toBin(r)} ${toBin(g)} ${toBin(b)}`)
        setHex(`#${toHex(r)}${toHex(g)}${toHex(b)}`)
    }, [r, g, b]);

    return (
        <div
            className={clsx('hero', 'shadow--lw', containerStyles.container)}
            style={{ background: `rgb(${r}, ${g}, ${b})` }}
        >
            <div className="container">
                <p className="hero__subtitle">RGB</p>
                <div className={clsx(styles.color, styles.red)}>
                    <span className={clsx(styles.label)}>
                        Rot
                    </span>
                    <Slider
                        value={r}
                        handle={handle}
                        onChange={(c) => {
                            setR(c);
                        }}
                        min={0}
                        max={255}
                        dots={false}
                    />
                    <span className={clsx(styles.value)}>
                        {r}
                    </span>
                </div>
                <div className={clsx(styles.color, styles.green)}>
                    <span className={clsx(styles.label)}>
                        Grün
                    </span>
                    <Slider
                        value={g}
                        handle={handle}
                        onChange={(c) => {
                            setG(c);
                        }}
                        min={0}
                        max={255}
                        dots={false}
                    />
                    <span className={clsx(styles.value)}>
                        {g}
                    </span>
                </div>
                <div className={clsx(styles.color, styles.blue)}>
                    <span className={clsx(styles.label)}>
                        Blau
                    </span>
                    <Slider
                        value={b}
                        handle={handle}
                        onChange={(c) => {
                            setB(c);
                        }}
                        min={0}
                        max={255}
                        dots={false}
                    />
                    <span className={clsx(styles.value)}>
                        {b}
                    </span>
                </div>
                <div className={clsx(styles.color, styles.blue)}>
                    <span className={clsx(styles.label)}>
                        Binär
                    </span>
                    <span style={{flexGrow: 1}}></span>
                    <div className={clsx(styles.transformed)}>
                        {bin}
                    </div>
                </div>
                <div className={clsx(styles.color, styles.blue)}>
                    <span className={clsx(styles.label)}>
                        Hexadezimal
                    </span>
                    <span style={{flexGrow: 1}}></span>
                    <div className={clsx(styles.transformed)}>
                        {hex}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RGB;
