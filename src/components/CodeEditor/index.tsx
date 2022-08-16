import * as React from 'react';
import styles from './styles.module.scss';
import PyEditor from './PyEditor';
import { observer } from 'mobx-react-lite';
import { useDocument, useStore } from '../../stores/hooks';
import Script, { PyDoc } from '../../models/Script';
import BrythonCommunicator from './BrythonCommunicator';
import clsx from 'clsx';
import LoginAlert from './LoginAlert';
import useIsBrowser from '@docusaurus/useIsBrowser';
import Loader from '../shared/Loader';
import CodeHistory from './CodeHistory';

interface Props {
    webKey: string;
    codeId: string;
    code: string;
    slim: boolean;
    readonly: boolean;
    children: React.ReactNode;
    noCompare: boolean;
    title: string;
    versioned: boolean;
    resettable: boolean;
    download: boolean;
    lang: string;
}

// export const ScriptContext = React.createContext<Script>(undefined);

const getDefault = (props: Props): PyDoc => {
    return {
        code: (props.code || '').trim(),
    };
};

const PyAceEditor = observer((props: Props) => {
    const store = useStore('documentStore');
    useDocument(
        () => getDefault(props), 
        'code', 
        props.webKey, 
        !props.slim,
        props.readonly,
        props.versioned
    );
    const model = store.find<Script>(props.webKey);
    const inBrowser = useIsBrowser();
    if (!inBrowser) {
        return <div>SSR</div>;
    }
    if (!model) {
        return <Loader />;
    }
    return (
        <div className={clsx(styles.wrapper, 'notranslate')}>
            {!props.slim && <LoginAlert />}
            <div
                className={clsx(
                    styles.playgroundContainer,
                    props.slim ? styles.containerSlim : styles.containerBig,
                    'live_py'
                )}
            >
                {props.lang === 'python' && <BrythonCommunicator webKey={props.webKey} />}
                <PyEditor {...props} />
                <CodeHistory webKey={props.webKey} />
            </div>
        </div>
    );
});

export default PyAceEditor;
