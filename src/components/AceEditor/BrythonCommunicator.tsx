import { runInAction } from "mobx";
import { observer } from "mobx-react-lite";
import * as React from "react";
import { ScriptContext } from ".";
import { LogMessage } from "../../models/Script";
import { useRefWithCallback } from "../../utils/use_ref_with_clbk";
import { BRYTHON_NOTIFICATION_EVENT, DOM_ELEMENT_IDS } from "./constants";

const BrythonCommunicator = observer(() => {
  const pyScript = React.useContext(ScriptContext);

  const onBryNotify = React.useCallback((event) => {
    if (event.detail) {
      console.log(event, event.detail);
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
