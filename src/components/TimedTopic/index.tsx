import useIsBrowser from '@docusaurus/useIsBrowser';
import clsx from 'clsx';
import styles from './styles.module.scss';
import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { useStore, useTimedTopic } from '../../stores/hooks';
import LoginAlert from '../CodeEditor/LoginAlert';
import Topic from './Topic';
import TimeStats from './TimeStats';
import Loader from '../shared/Loader';
import { WeekDay } from '../../helpers/time';
interface Props {
    webKey: string;
    topic: string;
    children: React.ReactNode;
    firstDayOfWeek?: WeekDay;
}

const TimedTopic = observer((props: Props) => {
    const store = useStore('timedTopicStore');
    useTimedTopic(props.webKey);
    if (!useIsBrowser()) {
        return <div>SSR</div>;
    }
    const model = store.find(props.webKey);
    if (!model) {
        return <Loader />;
    }
    return (
        <div>
            <LoginAlert />
            <TimeStats 
            totalTime={model.totalTime} 
            totalTimeGroupedByDate={model.totalTimeGroupedByDate}
            firstDayOfWeek={props.firstDayOfWeek} 
            />
            <div className={clsx(styles.TimedExercisesContainer)}>
                <Topic webKey={props.webKey} />
            </div>
        </div>
    );
});

export default TimedTopic;
