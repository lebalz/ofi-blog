import * as React from "react";
import clsx from "clsx";
import styles from "./styles.module.scss";
import Editor from "./Editor";
import {
  DOM_ELEMENT_IDS,
} from "./constants";
import TurtleResult from "./TurtleResult";
import Result from "./Result";
import Header from "./Header";
import { observer } from "mobx-react-lite";
import { useStore } from "../../stores/hooks";
import { ScriptContext } from ".";
import { reaction } from "mobx";

interface Props {
  slim: boolean;
  children: React.ReactNode;
  title: string;
  resettable: boolean;
}

const PyEditor = observer((props: Props) => {
  const pyScript = React.useContext(ScriptContext);
  const documentStore = useStore("documentStore");

  /**
   * this effect triggers the brython execution
   */
  React.useEffect(() => {
    const disposer = reaction(
      () => pyScript.execCounter,
      (counter) => {
        if (counter > 0) {
          pyScript.clearLogMessages();
          (window as any).brython(1, {
            ids: [DOM_ELEMENT_IDS.scriptSource(pyScript.codeId)],
          });
        }
      }
    )
    return () => {
      disposer();
    }
  }, [pyScript]);

  return (
    <React.Fragment>
      <Header
        slim={props.slim}
        title={props.title}
        resettable={props.resettable}
      />
      <Editor />
      <div className={clsx(styles.result)}>
        <Result />
        {documentStore.opendTurtleModalWebKey === pyScript.pyDoc.webKey && (
          <TurtleResult />
        )}
      </div>
    </React.Fragment>
  );
});

export default PyEditor;
