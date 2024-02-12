import React from "react";
import styles from "./styles.module.scss";
import clsx from "clsx";

export interface Card {
  value: 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 'J' | 'Q' | 'K' | 'A';
  suit: 'SPADES' | 'CLUBS' | 'HEARTS' | 'DIAMONDS';
}

interface Props extends Card {
    width?: number;
}


const JassCard = (props: Props) => {
  return (
    <div className={clsx(styles.card)}>
        <img 
            src={require(`./cards/${props.value}${props.suit.charAt(0)}.svg`).default}
            style={{width: props.width || 100}}
        />
    </div>
  );
};

export const SpecialCard = (props: {type: 'back' | 'background', width?: number, height?: number}) => {
    return (
        <div className={clsx(styles.card)}>
            <img 
                src={require(`./cards/${props.type}.svg`).default}
                style={{width: props.width || 100}}
            />
        </div>
    );
}

export const SplitLine = (props: {width?: number, cardWidth?: number, height?: number}) => {
    const height = 1.2 * (props.cardWidth || 100);
    return (
        <div className={clsx(styles.splitLine)} style={{width: (props.width | 20), height: `${height}px`}}>
        </div>
    );
}

export default JassCard;
