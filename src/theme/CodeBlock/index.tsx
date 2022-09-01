import React from 'react';
import CodeBlock from '@theme-original/CodeBlock';
import CodeBlockType from '@theme/CodeBlock';
import type { WrapperProps } from '@docusaurus/types';
import ReferenceCodeBlock from '@saucelabs/theme-github-codeblock/build/theme/ReferenceCodeBlock';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import { sanitizedTitle, sanitizeId } from '../../utils/sanitizers';
import hashCode from '../../utils/hash_code';
import PyAceEditor from '@site/src/components/CodeEditor';
import { v4 as uuidv4 } from 'uuid';

// @ts-ignore
import Playground from '@theme/Playground';
// @ts-ignore
import ReactLiveScope from '@theme/ReactLiveScope';

// type Props = WrapperProps<typeof CodeBlockType>;
interface Props extends WrapperProps<typeof CodeBlockType> {
    reference?: boolean;
    live_jsx?: boolean;
    live_py?: boolean;
    id?: string;
    slim?: boolean;
    readonly?: boolean;
    persist?: boolean;
    noDownload?: boolean;
    versioned?: boolean;
    noCompare?: boolean;
}

function pageId() {
    try {
        const pageId = sanitizeId(window.location.pathname.replace(/^\/|\/$/g, ''));
        return pageId;
    } catch (e) {
        return `py`;
    }
}

const CONSOLE_ENUMERATION_MAPPING = {};

const getCodeId = (title, children) => {
    const page = pageId();
    if (!CONSOLE_ENUMERATION_MAPPING[page]) {
        CONSOLE_ENUMERATION_MAPPING[page] = {};
    }

    const codeHash = hashCode(children);
    if (!CONSOLE_ENUMERATION_MAPPING[page][codeHash]) {
        CONSOLE_ENUMERATION_MAPPING[page][codeHash] =
            Object.keys(CONSOLE_ENUMERATION_MAPPING[page]).length + 1;
    }
    const codeId = title ? sanitizeId(title) : `${CONSOLE_ENUMERATION_MAPPING[page][codeHash]}`;
    return codeId;
};

export default function CodeBlockWrapper(props: Props): JSX.Element {
    if (props.reference) {
        return <ReferenceCodeBlock {...(props as any)} />;
    }
    const langMatch = ((props.className || '') as string).match(/language-(?<lang>\w*)/);
    let lang = langMatch?.groups?.lang?.toLocaleLowerCase() ?? '';
    if (lang === 'py') {
        lang = 'python';
    }
    if (props.live_jsx) {
        return <Playground scope={ReactLiveScope} {...props} />;
    }
    if (props.live_py && ExecutionEnvironment.canUseDOM) {
        if (!props.id && !props.slim) {
            return <CodeBlock {...props} />;
        }

        const code: string = (props.children as string).replace(/\s*\n$/, '');
        const codeId = getCodeId(props.title, code);
        const [webKey] = React.useState(props.id || uuidv4());
        return (
            <PyAceEditor
                {...props}
                webKey={webKey}
                code={code}
                codeId={codeId}
                readonly={!!props.readonly}
                lang={lang}
                resettable={!props.persist}
                download={!props.versioned && !props.noDownload}
                slim={!!props.slim}
                showLineNumbers={!(!!props.slim && !/\n/.test(code))}
                versioned={!!props.versioned}
                noCompare={!!props.noCompare}
                title={sanitizedTitle(props.title) || lang}
            />
        );
    }
    return (
        <>
            <CodeBlock {...props} />
        </>
    );
}
