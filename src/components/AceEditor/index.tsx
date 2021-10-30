import * as React from "react";
import styles from "./styles.module.scss";
import PyEditor from "./PyEditor";
import { observer } from "mobx-react-lite";
import { useStore } from "../../stores/hooks";
import { DocumentStore } from "../../stores/DocumentStore";
import Script, { PyDoc } from "../../models/Script";
import BrythonCommunicator from "./BrythonCommunicator";
import clsx from "clsx";
import LoginAlert from "./LoginAlert";
import { getItem, removeItem, _1_YEAR } from "../../utils/storage";
import LegacyResolver from "./LegacyResolver";
import useIsBrowser from "@docusaurus/useIsBrowser";

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
    let code = (props.code || '').trim();
    if (code.length > 0) {
      code = `${code} `;
    }
    return new Script(
      store.getOrCreateDummyDoc<PyDoc>(props.webKey, 'code', {
        code: code,
      }),
      code
    );
  }
  return new Script(
    store.getOrCreateDocument<PyDoc>(
      props.webKey,
      'code',
      {
        code: props.code || "",
      },
      () => {
        const old = getItem<{ edited: string; expiry: number }>(
          props.codeId,
          props.contextId
        );
        if (!old || !old.edited) {
          return undefined;
        }
        return {
          data: { code: old.edited },
          cleanup: () => removeItem(props.codeId, props.contextId),
        };
      }
    ),
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
  const msalStore = useStore("msalStore");
  React.useEffect(() => {
    const webKey = props.webKey;
    return () => {
      documentStore.removeDummy(webKey);
    };
  }, [props.webKey]);

  if (!useIsBrowser()) {
    return <div>Loading</div>;
  }
  return (
    <ScriptWrapper {...props}>
      {!props.slim && <LoginAlert />}
      {msalStore.loggedIn && !props.slim && <LegacyResolver />}
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
