import clsx from "clsx";
import * as React from "react";
import { action } from "mobx";
import { observer } from "mobx-react-lite";
import TimedExercises from "../../models/TimedExercises";
import styles from "./styles.module.scss";
import Exercise from "./exercise";
import { useStore } from "../../stores/hooks";

interface Props {
    webKey: string;
}

const Chapter = observer((props: Props) => {
    const store = useStore('documentStore');
    const tDoc = store.find<TimedExercises>(props.webKey);
    return (
        <div>
            <div className={clsx(styles.exercises)}>
                {tDoc.chapter.exercises.map((ex, idx) => (
                    <Exercise exercise={ex} key={idx}/>
                ))}
                <button
                    className={clsx('button', 'button--sm', 'button--primary')}
                    onClick={action(() => {
                        tDoc.chapter.addExercise();
                    })} 
                >
                    +
                </button>
            </div>
            {/* <pre>
                <code>
                    {JSON.stringify(tDoc.chapter.props, undefined, 2)}
                </code>
            </pre> */}
        </div>
    )
});

export default Chapter;