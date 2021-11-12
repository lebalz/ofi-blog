import * as React from 'react';
import clsx from 'clsx';
import { observer } from 'mobx-react-lite';
import {
    Exercise as ExerciseModel,
    ExerciseLabel as ExerciseLabel,
    formatTime,
} from '../../models/TimedExercises';
import styles from './styles.module.scss';
import { action } from 'mobx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTrash,
    faPlay,
    faStop,
    IconDefinition,
    faQuestionCircle,
    faCheckCircle,
    faTimesCircle,
    faExclamationTriangle,
} from '@fortawesome/free-solid-svg-icons';
const LabelIcon: { [k in ExerciseLabel]: IconDefinition } = {
    solved: faCheckCircle,
    fail: faTimesCircle,
    important: faExclamationTriangle,
    question: faQuestionCircle,
};
const LabelColor: { [k in ExerciseLabel]: string } = {
    solved: 'var(--ifm-color-success)',
    fail: 'var(--ifm-color-danger)',
    important: 'var(--ifm-color-warning)',
    question: 'var(--ifm-color-info)',
};

interface Props {
    exercise: ExerciseModel;
}

const Exercise = observer((props: Props) => {
    const ex = props.exercise;
    const onDelete = () => {
        if (confirm('Wirklich Löschen?')) {
            ex.delete();
        }
    };
    return (
        <div className={clsx(styles.exercise)}>
            <input
                type="text"
                value={ex.name}
                onChange={action((e) => (ex.name = e.target.value))}
                placeholder="Aufgabe"
            />
            <div style={{ flexGrow: 1 }} />
            <div className={clsx(styles.controls)}>
                {!ex.isRunning && !ex.endTime && (
                    <FontAwesomeIcon
                        className={clsx(styles.faButton)}
                        color="var(--ifm-color-success)"
                        icon={faPlay}
                        onClick={() => ex.start()}
                    />
                )}
                {ex.isRunning && (
                    <FontAwesomeIcon
                        className={clsx(styles.faButton)}
                        color="var(--ifm-color-primary)"
                        icon={faStop}
                        onClick={() => ex.stop()}
                    />
                )}
                {ex.isRunning && (
                    <span className={clsx('badge', 'badge--secondary', styles.time)}>
                        {formatTime(ex.duration)}
                    </span>
                )}
                {!ex.isRunning && (
                    <span className={clsx('badge', 'badge--secondary', styles.time)}>
                        {formatTime(ex.duration || 0)}
                    </span>
                )}
            </div>
            <div style={{ flexGrow: 1 }} />
            <div className={clsx(styles.labels)}>
                {(['solved', 'fail', 'important', 'question'] as ExerciseLabel[]).map((label, idx) => {
                    const active = ex.labels.includes(label);
                    return (
                        <FontAwesomeIcon
                            key={idx}
                            className={clsx(styles.icon)}
                            color={active ? LabelColor[label] : 'gray'}
                            icon={LabelIcon[label]}
                            onClick={() => ex.toggleLabel(label)}
                        />
                    );
                })}
            </div>
            <div style={{ flexGrow: 1 }} />
            <FontAwesomeIcon
                className={clsx(styles.faButton)}
                color="red"
                icon={faTrash}
                onClick={onDelete}
            />
        </div>
    );
});

export default Exercise;
