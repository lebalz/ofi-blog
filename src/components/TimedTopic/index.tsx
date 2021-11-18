import useIsBrowser from '@docusaurus/useIsBrowser';
import clsx from 'clsx';
import { reaction } from 'mobx';
import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { default as TimedExercisModel } from '../../models/TimedTopic';
import { useDocument, useStore, useTimedTopic } from '../../stores/hooks';
import LoginAlert from '../AceEditor/LoginAlert';
import Topic from './Topic';
import styles from './styles.module.scss';

interface Props {
    webKey: string;
    topic: string;
    children: React.ReactNode;
}

const TimedTopic = observer((props: Props) => {
    const store = useStore('timedTopicStore');
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
            <div className={clsx(styles.TimedExercisesContainer)}>
                <Topic webKey={props.webKey} />
            </div>
        </div>
    );
});

export default TimedTopic;
