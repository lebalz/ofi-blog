import * as React from 'react';
import styles from './styles.module.scss';
import PyEditor from './PyEditor';
import { observer } from 'mobx-react-lite';
import { useDocument, useStore } from '../../stores/hooks';
import Script, { PyDoc } from '../../models/Script';
import BrythonCommunicator from './BrythonCommunicator';
import clsx from 'clsx';
import LoginAlert from './LoginAlert';
import { getItem, removeItem, _1_YEAR } from '../../utils/storage';
import LegacyResolver from './LegacyResolver';
import useIsBrowser from '@docusaurus/useIsBrowser';
import { reaction } from 'mobx';
import Loader from '../shared/Loader';

interface Props {
    webKey: string;
    codeId: string;
    code: string;
    slim: boolean;
    children: React.ReactNode;
    contextId: string;
    title: string;
    versioned: boolean;
    resettable: boolean;
}

// export const ScriptContext = React.createContext<Script>(undefined);

const getDefault = (props: Props): PyDoc => {
    let code = (props.code || '').trim();
    if (code.length > 0) {
        code = `${code} `;
    }
    return {
        code: code,
    };
};

const getLegacyResolver = (props: Props) => {
    if (props.slim) {
        return () => undefined;
    }

    const old = getItem<{ edited: string; expiry: number }>(props.codeId, props.contextId);
    if (!old || !old.edited) {
        return () => undefined;
    }
    return () => {
        return {
            data: { code: old.edited },
            cleanup: () => removeItem(props.codeId, props.contextId),
        };
    };
};

const PyAceEditor = observer((props: Props) => {
    const store = useStore('documentStore');
    const msalStore = useStore('msalStore');
    useDocument(() => getDefault(props), 'code', props.webKey, !props.slim, getLegacyResolver(props), undefined, props.versioned);
    const model = store.find<Script>(props.webKey);
    const inBrowser = useIsBrowser();
    if (!inBrowser) {
        return <div>SSR</div>;
    }
    if (!model) {
        return <Loader />;
    }
    return (
        <div className={clsx(styles.wrapper)}>
            {!props.slim && <LoginAlert />}
            {msalStore.loggedIn && !props.slim && <LegacyResolver webKey={props.webKey} />}
            <div
                className={clsx(
                    styles.playgroundContainer,
                    props.slim ? styles.containerSlim : styles.containerBig,
                    'live_py'
                )}
            >
                <BrythonCommunicator webKey={props.webKey} />
                <PyEditor {...props} />
            </div>
        </div>
    );
});

export default PyAceEditor;
