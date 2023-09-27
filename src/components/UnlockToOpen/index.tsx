import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Details from '@theme/Details';
import { useStore } from '@site/src/stores/hooks';
import {default as StringAnswerModel} from '@site/src/models/Answer/String';
import Answer from '../Answer';
import { observer } from 'mobx-react-lite';

interface Props {
    children: JSX.Element[];
    checker?: (val: string | undefined) => boolean;
    sanitizer?: (val: string) => string;
    solution: string;
    webKey: string;
}

// Generated Tabs
const UnlockToOpen = observer((props: Props) => {
    const store = useStore('documentStore');
    const doc = store.find<StringAnswerModel>(props.webKey);

    return (
        <Details
            summary={
                <summary onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                }}>
                    <Answer
                        type='string'
                        webKey={props.webKey}
                        solution={props.solution}
                        checker={props.checker}
                        sanitizer={props.sanitizer}
                    />
                </summary>
            }
            open={true}
        >
            {doc?.loaded && doc?.state === 'correct' && props.children}
        </Details>
    );
});

export default UnlockToOpen;
