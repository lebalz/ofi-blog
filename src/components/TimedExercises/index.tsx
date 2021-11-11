import clsx from 'clsx';
import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { default as TimedExercisesModel, TimedDoc } from '../../models/TimedExercises';
import { DocumentStore } from '../../stores/DocumentStore';
import { useStore } from '../../stores/hooks';
import LoginAlert from '../AceEditor/LoginAlert';
import Chapter from './chapter';
import styles from './styles.module.scss';

interface Props {
    webKey: string;
    chapter: string;
    children: React.ReactNode;
}
export const TimedExercisesContext = React.createContext<TimedExercisesModel>(undefined);

const getDocument = (store: DocumentStore, props: Props) => {
    return new TimedExercisesModel(
        store.getOrCreateDocument<TimedDoc>(
            props.webKey,
            'tdoc',
            {
                chapter: props.chapter,
                exercises: [],
            },
            () => undefined
        )
    );
};
const ExercisesWrapper = observer((props: Props) => {
    const documentStore = useStore('documentStore');
    const [tExercises] = React.useState(getDocument(documentStore, props));
    return (
        <TimedExercisesContext.Provider value={tExercises}>{props.children}</TimedExercisesContext.Provider>
    );
});

const TimedExercises = observer((props: Props) => {
    return (
        <ExercisesWrapper {...props}>
            <LoginAlert />
            <div className={clsx(styles.TimedExercisesContainer)}>
                <Chapter />
            </div>
        </ExercisesWrapper>
    );
});

export default TimedExercises;
