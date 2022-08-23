import * as React from 'react';
import styles from './state.module.scss';
import { observer } from 'mobx-react-lite';
import { StateProps } from '.';
import Option from './Option';
import { useStore } from '../../stores/hooks';
import { Document } from './../../api/document';
import { default as StateAnswerModel, StateDoc } from '../../models/Answer/State';
import Loader from '../shared/Loader';
import clsx from 'clsx';
import useFrontMatter from '@theme/useFrontMatter';
import { StateModel } from '@site/src/models/iModel';

const mdiIcon = {
    checked: 'mdi-checkbox-marked-outline',
    unset: 'mdi-checkbox-blank-outline',
    question: 'mdi-account-question-outline',
};
const baseUrl = '/';


const mdiBgColor = {
    checked: '--ifm-color-success',
    unset: '--ifm-color-secondary',
    question: '--ifm-color-warning',
};
const mdiColor = {
    checked: 'white',
    unset: 'black',
    question: 'white',
};
const StateAnswer = observer((props: StateProps) => {
    const { sidebar_custom_props } = useFrontMatter();
    const adminStore = useStore('adminStore');
    const [klasse] = React.useState(window.location.pathname.replace(baseUrl, '').split('/')[0]);
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
        <>
            <div
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
            {adminStore.isAdmin && adminStore.showAdminElements && (
                <div className={clsx(styles.admin)}>
                    {adminStore
                        .findByWebKey<StateDoc>(klasse, sidebar_custom_props.id, props.webKey)
                        .map((doc, idx) => (
                            <div className={clsx(styles.box)} key={idx}>
                                <div className={clsx(styles.state)} style={{backgroundColor: `var(${mdiBgColor[doc.data.value]})`}}>
                                    <i className={clsx('mdi', mdiIcon[doc.data.value])} style={{color: `${mdiColor[doc.data.value]}`}} />
                                </div>

                                <div className={clsx(styles.nameWrapper)}>
                                    <div className={clsx(styles.name)}>
                                        {adminStore.getUser(doc.user_id)?.name || 'Name'}
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            )}
        </>
    );
});

export default StateAnswer;
