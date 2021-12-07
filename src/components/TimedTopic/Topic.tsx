import clsx from 'clsx';
import * as React from 'react';
import { action } from 'mobx';
import { observer } from 'mobx-react-lite';
import styles from './styles.module.scss';
import Exercise from './Exercise';
import { useStore } from '../../stores/hooks';
import OrderControl from './OrderControl';

interface Props {
    webKey: string;
}

const Topic = observer((props: Props) => {
    const store = useStore('timedTopicStore');
    const tDoc = store.find(props.webKey);
    return (
        <div className={styles.topic}>
            <div className={clsx(styles.controls)}>
                <OrderControl />
                <button
                    className={clsx('button', 'button--sm', 'button--primary')}
                    onClick={action(() => {
                        tDoc.addExercise();
                        store.setSortOrder('desc');
                        store.setOrderColumn('createdAt');
                    })}
                >
                    +
                </button>
            </div>
            <div className={clsx(styles.exercises)}>
                {tDoc.orderedExercises.map((ex, idx) => (
                    <Exercise exercise={ex} key={idx} />
                ))}
            </div>
        </div>
    );
});

export default Topic;
