import * as React from 'react';
import clsx from 'clsx';
import { observer } from 'mobx-react-lite';
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
import { formatDate, formatTime } from '../../helpers/time';
import { ExerciseLabel } from '../../api/timed_exercise';
import TimedExercise from '../../models/TimedTopic/TimedExercise';
import TimeSpan from './TimeSpan';
import QuillEditor from '../shared/QuillEditor';
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
    exercise: TimedExercise;
}

const Exercise = observer((props: Props) => {
    const [showDetails, setShowDetails] = React.useState(false);
    const ex = props.exercise;
    const onDelete = () => {
        if (confirm('Wirklich Löschen?')) {
            ex.delete();
        }
    };
    return (
        <div className={clsx(styles.exercise)}>
            <div className={clsx(styles.base)}>
                <input
                    type="text"
                    value={ex.name}
                    onChange={action((e) => (ex.name = e.target.value))}
                    placeholder="Aufgabe"
                />
                <span
                    className={clsx('badge', 'badge--secondary', styles.time)}
                    onClick={() => setShowDetails(!showDetails)}
                >
                    {formatDate(ex.lastEdited)}
                </span>
                <div style={{ flexGrow: 1 }} />
                <div className={clsx(styles.controls)}>
                    {ex.isRunning ? (
                        <FontAwesomeIcon
                            className={clsx(styles.faButton)}
                            color="var(--ifm-color-primary)"
                            icon={faStop}
                            onClick={() => ex.stop()}
                        />
                    ) : (
                        <FontAwesomeIcon
                            className={clsx(styles.faButton)}
                            color="var(--ifm-color-success)"
                            icon={faPlay}
                            onClick={() => ex.start()}
                        />
                    )}
                    <span
                        className={clsx('badge', 'badge--secondary', styles.time)}
                        onClick={() => setShowDetails(!showDetails)}
                    >
                        {formatTime(ex.duration || 0)}
                    </span>
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
            {showDetails && (
                <div className={clsx(styles.details)}>
                    <div className={clsx(styles.timeSpans)}>
                        {ex.timeSpans.map((ts, idx) => (
                            <TimeSpan timeSpan={ts} key={idx} />
                        ))}
                    </div>
                    <QuillEditor
                        model={ex}
                        placeholder="✍️ Notizen"
                        toolbar={{
                            bold: true,
                            italic: true,
                            underline: true,
                            background: true,
                            formula: true,
                            ol: true,
                        }}
                    />
                </div>
            )}
        </div>
    );
});

export default Exercise;
