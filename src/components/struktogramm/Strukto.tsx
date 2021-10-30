import * as React from "react";
import styles from "./Strukto.module.scss";
import clsx from "clsx";

interface Base {
    code: string;
    block?: CodeLine[]
}

interface CodeLine extends Base {
    type: 'step' | 'repeat' | 'def' | 'call' | 'statement';
}

interface Props {
    program: CodeLine[];
}

const Step = (props: Base) => {
    return (
        <div className={styles.step}>
            {props.code}
        </div>
    )
}
const Call = (props: Base) => {
    return (
        <div className={clsx(styles.call, styles.step, styles.bordered)}>
            {props.code}
        </div>
    )
}
const Statement = (props: Base) => {
    return (
        <div className={clsx(styles.step, styles.statement)}>
            {props.code}
        </div>
    )
}
const Repeat = (props: Base) => {
    return (
        <div className={clsx(styles.repeat, styles.step, styles.indent)}>
            <div className={styles.header}>
                {props.code}
            </div>
            <div className={styles.body}>
                {props.block && (
                    <Strukto program={props.block} />
                )}
            </div>
        </div>
    )
}
const Def = (props: Base) => {
    return (
        <div className={clsx(styles.def, styles.step, styles.indent)}>
            <div className={styles.header}>
                {props.code}
            </div>
            <div className={styles.body}>
                {props.block && (
                    <Strukto program={props.block} />
                )}
            </div>
        </div>
    )
}

const Strukto = (props: Props) => {
    return (
        <div className={styles.strukto}>
            {props.program.map((codeLine, idx) => {
                switch (codeLine.type) {
                    case 'call':
                        return <Call key={idx} code={codeLine.code} />
                    case 'def':
                        return <Def key={idx} code={codeLine.code} block={codeLine.block} />
                    case 'repeat':
                        return <Repeat key={idx} code={codeLine.code} block={codeLine.block} />
                    case 'step':
                        return <Step key={idx} code={codeLine.code} />
                    case 'statement':
                        return <Statement key={idx} code={codeLine.code} />
                }
            })}
        </div>
    )
};

export default Strukto;
