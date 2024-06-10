import React from "react";
import { observer } from "mobx-react-lite";
import { InitState } from "docusaurus-live-brython/theme/CodeEditor/WithScript/Types";
import Script from "@site/src/models/Script";
export const Context = React.createContext<Script | undefined>(undefined);
import { v4 as uuidv4 } from 'uuid';
import { useStore } from "@site/src/stores/hooks";
// @ts-ignore
import useFrontMatter from '@theme/useFrontMatter';

const ScriptContext = observer((props: InitState & { children: React.ReactNode; }) => {
    const [id, setId] = React.useState<string>(props.id || uuidv4());
    const documentStore = useStore('documentStore');
    const { sidebar_custom_props } = useFrontMatter();
    const pageKey = sidebar_custom_props?.id;
    React.useEffect(() => {
        const doc = documentStore.find(id);
        console.log('pageKey', pageKey, id, doc)
        if (doc) {
            return;
        }
        documentStore.provideDocument(
            { code: props.raw || '' },
            'code',
            pageKey,
            id,
            !!props.id,
            props.readonly,
            false,
            props.versioned
        );
    }, [props.id, documentStore, pageKey]);

    if (!documentStore.find(id)) {
        return <div>Load</div>;
    }
    return (
        <Context.Provider value={documentStore.find(id)}>
            {props.children}
        </Context.Provider>
    );
});

export default ScriptContext;