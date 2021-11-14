import { runInAction } from "mobx";
import { observer } from "mobx-react-lite";
import * as React from "react";
import Script, { LogMessage } from "../../models/Script";
import { useStore } from "../../stores/hooks";
import { useRefWithCallback } from "../../utils/use_ref_with_clbk";
import { BRYTHON_NOTIFICATION_EVENT, DOM_ELEMENT_IDS } from "./constants";
interface Props {
  webKey: string;
}

const BrythonCommunicator = observer((props: Props) => {
  const store = useStore('documentStore');
  const pyScript = store.find<Script>(props.webKey);

  const onBryNotify = React.useCallback((event) => {
    if (event.detail) {
      const data = event.detail as LogMessage;
      if (data.type === "done") {
        return runInAction(() => (pyScript.executing = false));
      }
      pyScript.addLogMessage(data);
    }
  }, [pyScript]);

  const setupEventListeners = useRefWithCallback(
    (node) => {
      // mount
      node.addEventListener(BRYTHON_NOTIFICATION_EVENT, onBryNotify);
    },
    (node) => {
      // unmount
      node.removeEventListener(BRYTHON_NOTIFICATION_EVENT, onBryNotify);
    }
  );
  return (
    <div
      id={DOM_ELEMENT_IDS.component(pyScript.codeId)}
      ref={setupEventListeners}
    ></div>
  );
});

export default BrythonCommunicator;
