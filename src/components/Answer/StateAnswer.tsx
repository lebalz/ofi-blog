import * as React from 'react';
import styles from './state.module.scss';
import { observer } from 'mobx-react-lite';
import { StateProps } from '.';
import { useStore } from '../../stores/hooks';
import { default as StateAnswerModel, StateDoc } from '../../models/Answer/State';
import Loader from '../shared/Loader';
import clsx from 'clsx';
// @ts-ignore
import useFrontMatter from '@theme/useFrontMatter';
import { PageStateSummary, StateSummary } from './StateSummary';

export const mdiIcon = {
    checked: 'mdi-checkbox-marked-outline',
    unset: 'mdi-checkbox-blank-outline',
    question: 'mdi-account-question-outline',
};


export const mdiBgColor = {
    checked: '--ifm-color-success',
    unset: '--ifm-color-secondary',
    question: '--ifm-color-warning',
};
export const mdiColor = {
    checked: 'white',
    unset: 'black',
    question: 'white',
};
const StateAnswer = observer((props: StateProps) => {
    const store = useStore('documentStore');
    const doc = store.find<StateAnswerModel>(props.webKey);
    const ref = React.useRef<HTMLDivElement>(null);
    React.useEffect(() => {
        if (ref.current && doc) {
            doc.setWindowPositionY(ref.current.getBoundingClientRect().top);
        }
    }, [doc, ref])

    const onChange = () => {
        switch (doc.value) {
            case 'checked':
                if (props.noQuestion) {
                    return doc.setValue('unset');
                }
                return doc.setValue('question');
            case 'question':
                return doc.setValue('unset');
            case 'unset':
                return doc.setValue('checked');
        }
    };

    if (!doc.loaded) {
        return <Loader />;
    }
    return (
        <>
            <div
                ref={ref}
                className={clsx(
                    styles.state,
                    'state-component',
                    (props.noHeader || props.children) && 'no-header'
                )}
            >
                <div
                    className={clsx('button', `button--${doc.viewClass}`, styles.checkbox)}
                    onClick={onChange}
                >
                    <i className={clsx('mdi', mdiIcon[doc.value])} />
                </div>
                <div>{props.children}</div>
            </div>
            <StateSummary webKey={props.webKey} />
        </>
    );
});

export default StateAnswer;
