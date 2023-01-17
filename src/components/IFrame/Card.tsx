import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';

interface Props {
    url: string
}
const Card = (props: Props) => {
    return (
        <div className={clsx(styles.card, 'card')}>
            <iframe src={props.url} className={clsx('card__image')} />
            <div className="card__footer">
                <a target="_blank" href={props.url} className={clsx('button', 'button--primary', 'button--block')}>👉 {props.url}</a>
            </div>
        </div>
    )
}

export default Card;
