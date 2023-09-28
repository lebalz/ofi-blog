import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

interface Props {
    children: JSX.Element[];
    getLabel: (idx: number) => string;
    highlighted?: number[];
    hilightIcon?: string;
    groupId?: string;
}

const getValue = (idx: number) => {
    return `s-${idx}`;
};

// Generated Tabs
const GTabs = (props: Props) => {
    return (
        <Tabs
            defaultValue={getValue(0)}
            className={clsx(styles.tabs)}
            groupId={props.groupId}
            values={props.children.map((_, idx) => {
                const isHighlight = (props.highlighted || []).includes(idx);
                const label = (
                    <span className={clsx(styles.label)}>
                        {isHighlight && <span className={clsx(styles.icon)}>{props.hilightIcon || '⚠️'}</span>}
                        {props.getLabel(idx)}
                    </span>
                );
                return { value: getValue(idx), label: label as any as string };
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

export default GTabs;
