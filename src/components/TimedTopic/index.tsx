import useIsBrowser from '@docusaurus/useIsBrowser';
import clsx from 'clsx';
import styles from './styles.module.scss';
import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { useDocument, useStore, useTimedTopic } from '../../stores/hooks';
import LoginAlert from '../AceEditor/LoginAlert';
import Topic from './Topic';
import TopicStats from './TopicStats';
import { formatTime } from '../../helpers/time';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInfoCircle} from '@fortawesome/free-solid-svg-icons';
interface Props {
    webKey: string;
    topic: string;
    children: React.ReactNode;
}

const TimedTopic = observer((props: Props) => {
    const store = useStore('timedTopicStore');
    const [showStats, setShowStats] = React.useState(true);
    useTimedTopic(props.webKey);
    if (!useIsBrowser()) {
        return <div>SSR</div>;
    }
    const model = store.find(props.webKey);
    if (!model) {
        return <div>Loading</div>;
    }
    return (
        <div>
            <LoginAlert />
            <FontAwesomeIcon
                className={clsx(styles.faButton)}
                color={showStats ? "var(--ifm-color-primary)" : 'gray'}
                icon={faInfoCircle}
                onClick={() => setShowStats(!showStats)}
            />
            {showStats && (
                <div className={clsx('card')}>
                    <div className={clsx('card__header')}>
                        <h3>Zusammenfassung</h3>
                    </div>
                    <div className={clsx('card__body')} style={{display: 'flex', alignItems: 'start', justifyContent: 'space-between'}}>
                        <div>
                            Zeit Total: <span className={clsx('badge', 'badge--success')}>{formatTime(model.totalTime)}</span>
                            </div>
                            <TopicStats topic={model} />
                    </div>
                </div>
            )}
            <div className={clsx(styles.TimedExercisesContainer)}>
                <Topic webKey={props.webKey} />
            </div>
        </div>
    );
});

export default TimedTopic;
