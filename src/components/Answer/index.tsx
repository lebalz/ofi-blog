import * as React from 'react';
import StringAnswer from './StringAnswer';
import ArrayAnswer from './ArrayAnswer';
import TextAnswer from './TextAnswer';
import { useDocument, useStore } from '../../stores/hooks';
import LoginAlert from '../CodeEditor/LoginAlert';
import { observer } from 'mobx-react-lite';
import OfflineChecker from './OfflineChecker';
import useIsBrowser from '@docusaurus/useIsBrowser';
import { sanitizeId } from '../../utils/sanitizers';
import { ModelTypes } from '../../models/iModel';
import ReactDomServer from 'react-dom/server';
import { ToolbarOptions } from '../shared/QuillEditor';
import Loader from '../shared/Loader';

export const UPPER_NOSPACE = (val: string | undefined) => val.replace(/\s+/g, '').toUpperCase();

export type Types = 'array' | 'string' | 'text';

export interface Base {
    webKey: string;
    id?: string;
    label?: string;
    children?: React.ReactNode;
}

export interface TextProps extends Base {
    type: 'text';
    placeholder?: string;
    default?: string | React.ReactNode;
    monospace?: boolean;
    toolbar?: ToolbarOptions;
}

export interface ArrayProps extends Base {
    type: 'array';
    size: number;
    default?: string[];
    select?: string[];
}

export interface StringProps extends Base {
    type: 'string';
    placeholder?: string;
    default?: string;
    select?: string[];
    solution?: string;
    labelWidth?: string;
    width?: string /* input width */;
    sanitizer?: (val: string) => string;
    checker?: (val: string | undefined) => boolean;
    disabled?: boolean;
}

export type Props = StringProps | ArrayProps | TextProps;

const getDefault = (props: Props): ModelTypes => {
    switch (props.type) {
        case 'string':
            return {
                value: props.default || '',
                type: 'string',
            };
        case 'text':
            return {
                value: props.default || ReactDomServer.renderToString(props.children),
                type: 'text',
            };
        case 'array':
            return {
                value: Array(props.size).fill(''),
                type: 'array',
                size: props.size,
            };
    }
};

const Answer = observer((props: Props) => {
    const store = useStore('documentStore');
    const msalStore = useStore('msalStore');
    const model = store.find(props.webKey);
    const inBrowser = useIsBrowser();
    useDocument(() => getDefault(props), props.type, props.webKey, true);
    
    if (!inBrowser) {
        return <div>SSR</div>;
    }
    if (!model) {
        return <Loader />;
    }
    return (
        <div data--web-key={props.webKey}>
            <LoginAlert />
            {msalStore.loggedIn && <OfflineChecker webKey={props.webKey} />}
            {props.type === 'text' && <TextAnswer {...props} />}
            {props.type === 'string' && <StringAnswer {...props} />}
            {props.type === 'array' && <ArrayAnswer {...props} />}
        </div>
    );
});

export default Answer;
