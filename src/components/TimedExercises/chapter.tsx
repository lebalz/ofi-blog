import clsx from "clsx";
import * as React from "react";
import { action } from "mobx";
import { observer } from "mobx-react-lite";
import { TimedExercisesContext } from ".";
import { Exercise as ExerciseModel } from "../../models/TimedExercises";
import styles from "./styles.module.scss";
import Exercise from "./exercise";


const Chapter = observer(() => {
    const tDoc = React.useContext(TimedExercisesContext);
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