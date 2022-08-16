import * as React from 'react';
import styles from './state.module.scss';
import { observer } from 'mobx-react-lite';
import { StateProps } from '.';
import Option from './Option';
import { useStore } from '../../stores/hooks';
import { default as StateAnswerModel } from '../../models/Answer/State';
import Loader from '../shared/Loader';
import clsx from 'clsx';

const mdiIcon = {
    checked: 'mdi-checkbox-marked-outline',
    unset: 'mdi-checkbox-blank-outline',
    question: 'mdi-account-question-outline',
};

const StateAnswer = observer((props: StateProps) => {
    const store = useStore('documentStore');
    const doc = store.find<StateAnswerModel>(props.webKey);

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
        <div className={clsx(styles.state, 'state-component', (props.noHeader || props.children) && 'no-header')}>
            <div className={clsx('button', `button--${doc.viewClass}`, styles.checkbox)} onClick={onChange}>
                <i className={clsx('mdi', mdiIcon[doc.value])} />
            </div>
            <div>{props.children}</div>
        </div>
    );
});

export default StateAnswer;
