import * as React from 'react';
import styles from './state.module.scss';
import { observer } from 'mobx-react-lite';
import { StateProps } from '.';
import { useStore } from '../../stores/hooks';
import { default as StateAnswerModel, StateType } from '../../models/Answer/State';
import Loader from '../shared/Loader';
import clsx from 'clsx';
import { StateSummary } from './StateSummary';

export const mdiIcon: { [key in StateType]: string } = {
    checked: 'mdi-checkbox-marked-outline',
    unset: 'mdi-checkbox-blank-outline',
    question: 'mdi-account-question-outline',
    star: 'mdi-star',
    ['star-half']: 'mdi-star-half-full',
    ['star-empty']: 'mdi-star-outline',
};

export const mdiBgColor: { [key in StateType]: string } = {
    checked: '--ifm-color-success',
    unset: '--ifm-color-secondary',
    question: '--ifm-color-warning',
    star: '--ifm-color-primary',
    ['star-empty']: '--ifm-color-primary',
    ['star-half']: '--ifm-color-primary',
};
export const mdiColor: { [key in StateType]: string } = {
    checked: 'white',
    unset: 'black',
    question: 'white',
    star: 'gold',
    'star-empty': 'gold',
    'star-half': 'gold',
};
const StateAnswer = observer((props: StateProps) => {
    const store = useStore('documentStore');
    const doc = store.find<StateAnswerModel>(props.webKey);
    const ref = React.useRef<HTMLDivElement>(null);
    React.useEffect(() => {
        if (ref.current && doc) {
            doc.setWindowPositionY(ref.current.getBoundingClientRect().top);
        }
    }, [doc, ref]);

    const onChange = () => {
        const idx = props.states.indexOf(doc.value);
        doc.setValue(props.states[(idx + 1) % props.states.length]);
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
                    (props.noHeader || props.children) && 'no-header',
                    'no-comments'
                )}
                id={`state-${doc.webKey}`}
            >
                <div
                    className={clsx(styles.state, styles.checkbox)}
                    style={{ backgroundColor: `var(${mdiBgColor[doc.data.value]})` }}
                    onClick={onChange}
                >
                    <i
                        className={clsx('mdi', mdiIcon[doc.value])}
                        style={{ color: `${mdiColor[doc.data.value]}` }}
                    />
                </div>
                <div>{props.children}</div>
            </div>
            <StateSummary webKey={props.webKey} />
        </>
    );
});

export default StateAnswer;
