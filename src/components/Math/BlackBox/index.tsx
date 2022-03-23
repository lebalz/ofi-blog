import React from "react";
import styles from "./styles.module.scss";
import clsx from "clsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from "@fortawesome/free-solid-svg-icons"

interface Props {
  func: (zahl: number) => number;
}

const BlackBox = (props: Props) => {
    const [processing, setProcessing] = React.useState(false);
    const [timer, setTimer] = React.useState<NodeJS.Timeout>();
    const [result, setResult] = React.useState(0);
    const [input, setInput] = React.useState(0);


    React.useEffect(() => {
        setProcessing(true);
        setResult(Number.NaN);
        clearTimeout(timer);
        const timeoutId = setTimeout(() => {
            setResult(props.func(input));
            setProcessing(false);
        }, 1000);
        setTimer(timeoutId);
        return () => clearTimeout(timeoutId);
    }, [input]);



    return (
        <div className={clsx(styles.blackBox)}>
            <input type="number" value={input} onChange={(e) => {
                let inp = input;
                try {
                    inp = Number.parseFloat(e.target.value)
                } catch {
                    console.log('not valid number', e.target.value);
                }
                setInput(inp)
            }}></input>
            <div className={styles.box}><FontAwesomeIcon icon={faCog} spin={processing}/></div>
            <div className={styles.out}><span>{(Number.isNaN(result) || !Number.isFinite(result)) ? '-' : result}</span></div>
        </div>
    )
};

export default BlackBox;
