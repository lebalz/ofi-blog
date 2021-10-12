import * as React from "react";
import styles from "./styles.module.scss";
import PyEditor from "./PyEditor";
import { observer } from "mobx-react-lite";
import { useStore } from "../../stores/hooks";
import { DocumentStore } from "../../stores/DocumentStore";
import Script, { PyDoc } from "../../models/Script";
import BrythonCommunicator from "./BrythonCommunicator";
import clsx from "clsx";

interface Props {
  webKey: string;
  codeId: string;
  code: string;
  slim: boolean;
  children: React.ReactNode;
  contextId: string;
  title: string;
  resettable: boolean;
}

export const ScriptContext = React.createContext<Script>(undefined);

const getDocument = (store: DocumentStore, props: Props) => {
  if (props.slim) {
    return new Script(
      store.getOrCreateDummyDoc<PyDoc>(props.webKey, {
        code: props.code,
      }),
      props.code
    );
  }
  return new Script(
    store.getOrCreateDocument<PyDoc>(props.webKey, {
      code: props.code,
    }),
    props.code
  );
};

const ScriptWrapper = observer((props: Props) => {
  // code: getItem<LocalStorageCode>(codeId, contextId, {}).edited || `${children}`.replace(/\n$/, '')

  const documentStore = useStore("documentStore");
  const [script] = React.useState(getDocument(documentStore, props));
  return (
    <ScriptContext.Provider value={script}>
      {props.children}
    </ScriptContext.Provider>
  );
});

const PyAceEditor = observer((props: Props) => {
  const documentStore = useStore("documentStore");
  React.useEffect(() => {
    const webKey = props.webKey;
    return () => {
      documentStore.removeDummy(webKey);
    };
  }, [props.webKey]);
  return (
    <ScriptWrapper {...props}>
      <div
        className={clsx(
          styles.playgroundContainer,
          props.slim ? styles.containerSlim : styles.containerBig,
          "live_py"
        )}
      >
        <BrythonCommunicator />

        <PyEditor {...props} />
      </div>
    </ScriptWrapper>
  );
});

export default PyAceEditor;
