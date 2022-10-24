import * as React from "react";
import clsx from "clsx";
import styles from "./styles.module.scss";
import Editor from "./EditorAce";
import {
  DOM_ELEMENT_IDS,
} from "./constants";
import TurtleResult from "./TurtleResult";
import Result from "./Result";
import Header from "./Header";
import { observer } from "mobx-react-lite";
import { useStore } from "../../stores/hooks";
import { reaction } from "mobx";
import Script from "../../models/Script";
import { umamiReport } from "@site/src/helpers/umami";

interface Props {
  slim: boolean;
  children: React.ReactNode;
  title: string;
  resettable: boolean;
  showLineNumbers: boolean;
  download: boolean;
  webKey: string;
  lang: string;
  noCompare: boolean;
  precode: string;
  maxLines?: number;
}

const PyEditor = observer((props: Props) => {
  const store = useStore('documentStore');
  const pyScript = store.find<Script>(props.webKey);

  /**
   * this effect triggers the brython execution
   */
  React.useEffect(() => {
    return reaction(
      () => pyScript.execCounter,
      (counter) => {
        if (props.lang === 'python' && counter > 0) {
          pyScript.clearLogMessages();
          umamiReport('script-exec', { type: pyScript.isDummy ? 'read-only' : 'editable', webKey: pyScript.webKey  });
          (window as any).brython(1, {
            ids: [DOM_ELEMENT_IDS.scriptSource(pyScript.codeId)],
          });
        }
      }
    )
  }, [pyScript]);

  return (
    <React.Fragment>
      <Header
        slim={props.slim}
        title={props.title}
        resettable={props.resettable}
        download={props.download}
        noCompare={props.noCompare}
        webKey={props.webKey}
        lang={props.lang}
      />
      <Editor webKey={props.webKey} lang={props.lang} showLineNumbers={props.showLineNumbers} maxLines={props.maxLines} />
      {props.lang === 'python' &&
        <div className={clsx(styles.result)}>
          <Result webKey={props.webKey}/>
          {store.opendTurtleModalWebKey === pyScript.webKey && (
            <TurtleResult webKey={props.webKey}/>
          )}
          <div id={DOM_ELEMENT_IDS.outputDiv(pyScript.codeId)}></div>
        </div>
      }
    </React.Fragment>
  );
});

export default PyEditor;
