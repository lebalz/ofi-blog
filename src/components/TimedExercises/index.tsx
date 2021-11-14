import useIsBrowser from '@docusaurus/useIsBrowser';
import clsx from 'clsx';
import { reaction } from 'mobx';
import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { default as TimedExercisModel } from '../../models/TimedExercises';
import { useDocument, useStore } from '../../stores/hooks';
import LoginAlert from '../AceEditor/LoginAlert';
import Chapter from './chapter';
import styles from './styles.module.scss';

interface Props {
    webKey: string;
    chapter: string;
    children: React.ReactNode;
}

const TimedExercises = observer((props: Props) => {
    const store = useStore('documentStore');
    useDocument(
        () => ({
            chapter: props.chapter,
            exercises: [],
        }),
        'tdoc',
        props.webKey,
        true,
        () => undefined
    );
    const model = store.find(props.webKey);
    if (!useIsBrowser() || !model) {
        return <div>Loading</div>;
    }
    return (
        <div>
            <LoginAlert />
            <div className={clsx(styles.TimedExercisesContainer)}>
                <Chapter webKey={props.webKey} />
            </div>
        </div>
    );
});

export default TimedExercises;
