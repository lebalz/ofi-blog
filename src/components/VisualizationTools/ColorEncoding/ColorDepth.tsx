import clsx from 'clsx';
import { Handle, SliderTooltip } from 'rc-slider';
import Slider from 'rc-slider/lib/Slider';
import * as React from 'react';
import containerStyles from '../../styles/container.module.scss';
import styles from './styles.module.scss';

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

interface TileProps {
    r: number;
    g: number;
    b: number;
}

const Tile = (props: TileProps) => {
    return (
        <div
            className={styles.colorTile} 
            style={{background: `rgb(${props.r},${props.g},${props.b})`}}
        >
            <div className={styles.tooltip}>{`Rot: ${props.r}, Grün: ${props.g}, Blau: ${props.b})`}</div>
        </div>
    )
}

const ColorDepth = () => {
    const [depth, setDepth] = React.useState(2);
    const [bits, setBits] = React.useState(1);
    const [tiles, setTiles] = React.useState([])

    React.useEffect(() => {
        setBits(Math.ceil(Math.log2(depth)));
        const delta = depth === 1 ? 255 : 255 / (depth - 1);
        const tils = [];
        for (var r = 0; r < depth; r = r + 1) {
            const rVal = Math.round(r * delta);
            for (var g = 0; g < depth; g = g + 1) {
                const til = [];
                const gVal = Math.round(g * delta);
                for (var b = 0; b < depth; b = b + 1) {
                    til.push({r: rVal, g: gVal, b: Math.round(b * delta)});
                }
                tils.push(til);
            }   
        }
        setTiles(tils);
    }, [depth])

    return (
        <div
            className={clsx('hero', 'shadow--lw', containerStyles.container, styles.cmyk)}
        >
            <div className="container">
                <p className="hero__subtitle">Farbtiefen</p>
                <div className={clsx(styles.color)}>
                    <span className={clsx(styles.label)}>Farbabstufungen</span>
                    <Slider
                        value={depth}
                        handle={handle}
                        onChange={(c) => {
                            setDepth(c);
                        }}
                        min={1}
                        max={10}
                        dots={true}
                    />
                    <span className={clsx(styles.value)}>{`${depth}`}</span>
                </div>
                <div className={clsx(styles.color, styles.blue, styles.property)}>
                    <span className={clsx(styles.label)}>
                        Mögliche Farben
                    </span>
                    <span style={{flexGrow: 1}}></span>
                    <span className={clsx(styles.value)}>{`${depth * depth * depth}`}</span>
                </div>
                <div className={clsx(styles.color, styles.blue, styles.property)}>
                    <span className={clsx(styles.label)}>
                        Benötigte Bits pro Farbkanal
                    </span>
                    <span style={{flexGrow: 1}}></span>
                    <span className={clsx(styles.value)}>{`${bits}`}</span>
                </div>
                <div className={clsx(styles.color, styles.blue, styles.property)}>
                    <span className={clsx(styles.label)}>
                        Farbtiefe pro Farbkanal
                    </span>
                    <span style={{flexGrow: 1}}></span>
                    <span className={clsx(styles.value)}>{bits < 2 ? `${bits} bit` : `${bits} bits`}</span>
                </div>
                <div className={clsx(styles.color, styles.blue, styles.property)}>
                    <span className={clsx(styles.label)}>
                        Farbtiefe
                    </span>
                    <span style={{flexGrow: 1}}></span>
                    <span className={clsx(styles.value)}>{bits < 1 ? '1 bit' : `${3 * bits} bits`}</span>
                </div>
                <div className={clsx(styles.tileContainer)}>
                    {
                        tiles.map((colrs) => {
                            return (
                                <div className={clsx(styles.tileRow)}>
                                    {colrs.map((colr, idx) => {
                                        return (
                                            <Tile
                                                key={idx}
                                                r={colr.r}
                                                g={colr.g}
                                                b={colr.b}
                                            />
                                        );
                                    })}
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
        );
}

export default ColorDepth;