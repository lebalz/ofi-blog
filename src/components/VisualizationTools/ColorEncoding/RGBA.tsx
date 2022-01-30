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

const RGBA = () => {
    const [r, setR] = React.useState(255);
    const [g, setG] = React.useState(217);
    const [b, setB] = React.useState(0);
    const [a, setA] = React.useState(0.86);

    return (
        <div
            className={clsx('hero', 'shadow--lw', containerStyles.container, styles.image)}
        >
            <div 
                className="container" 
                style={{ 
                    background: `rgba(${r}, ${g}, ${b}, ${a})`, 
                    padding: '1rem calc(var(--ifm-spacing-horizontal) + 0.5rem)', 
                    borderRadius: 'var(--ifm-global-radius)' 
            }}>
                <p className="hero__subtitle">RGBA</p>
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
                <div className={clsx(styles.color, styles.alpha)}>
                    <span className={clsx(styles.label)}>
                        Alpha
                    </span>
                    <Slider
                        value={a}
                        handle={handle}
                        onChange={(c) => {
                            setA(c);
                        }}
                        step={0.01}
                        min={0}
                        max={1}
                        dots={false}

                    />
                    <span className={clsx(styles.value)}>
                        {a}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default RGBA;
