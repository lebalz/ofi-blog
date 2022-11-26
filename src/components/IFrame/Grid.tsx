import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';
import Card from './Card';

interface Props {
    urls: string[];
    full?: boolean;
    shuffle?: boolean;
}
const Grid = (props: Props) => {
    const pages = props.shuffle ? props.urls.slice().sort(() => Math.random() - 0.5) : props.urls;
    return (
        <div className={clsx(styles.container, props.full && styles.fullscreen)}>
            {
                pages.map((url, idx) => {
                    return (
                        <Card url={url} key={idx} />
                    )
                })
            }
        </div>
    )
}

export default Grid;