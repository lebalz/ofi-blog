import React from "react";
import styles from "./styles.module.scss";
import clsx from "clsx";
import JassCard, { Card, SpecialCard } from "./index";


interface Props {
    cards: Card[];
    width?: number;
    shift?: number;
}


const Stack = (props: Props) => {
    const shift = props.shift || 15;
    const len = props.cards.length;
    return (
        <div className={clsx(styles.stack)}>
            <SpecialCard type="background" width={props.width} />
            {props.cards.map((card, idx) => (
                <div 
                    key={idx}
                    className={clsx(styles.cardContainer)}
                    style={{
                        top: 1.45*(len - idx - 1) * shift, 
                        left: (len - idx - 1) * shift,
                        width: (props.width || 100) - (len * shift),
                        zIndex: len + 1 - idx
                    }}
                >
                    <JassCard 
                        value={card.value}
                        suit={card.suit}
                    />
                </div>
            ))}
        </div>
    );
};

export default Stack;
