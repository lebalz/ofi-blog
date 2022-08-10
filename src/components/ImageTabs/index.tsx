import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';
// @ts-ignore
import Tabs from '@theme/Tabs';
// @ts-ignore
import TabItem from '@theme/TabItem';

interface Props {
    children: JSX.Element[];
    getLabel: (idx: number) => string;
    highlighted?: number[];
    hilightIcon?: string;
}

const getValue = (idx: number) => {
    return `s-${idx}`;
};

const ImageCarousel = (props: Props) => {
    return (
        <Tabs
            defaultValue={getValue(0)}
            values={props.children.map((_, idx) => {
                const isHighlight = (props.highlighted || []).includes(idx);
                const label = (
                    <span className={clsx(styles.label)}>
                        {isHighlight && <span className={clsx(styles.icon)}>{props.hilightIcon || '⚠️'}</span>}
                        {props.getLabel(idx)}
                    </span>
                );
                return { value: getValue(idx), label };
            })}
        >
            {props.children.map((item, idx) => (
                <TabItem value={getValue(idx)} key={idx}>
                    {item}
                </TabItem>
            ))}
        </Tabs>
    );
};

export default ImageCarousel;
