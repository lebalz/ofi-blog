import * as React from "react";
var AceEditor = undefined;
import clsx from "clsx";
import styles from "./styles.module.scss";
import { DOM_ELEMENT_IDS } from "./constants";
import PyScriptSrc from "./PyScriptSrc";
import { observer } from "mobx-react-lite";
import { useStore } from "../../stores/hooks";
import Script from "../../models/Script";

interface Props {
  webKey: string;
}

const PlaceholderEditor = observer((props: Props) => {
  const store = useStore('documentStore');
  const pyScript = store.find<Script>(props.webKey);
  return (
    <pre>
      <code>{pyScript.data.code}</code>
    </pre>
  );
});

const loadLibs = (callback) => {
  if (AceEditor) {
    return callback();
  }

  import("react-ace").then((aceModule) => {
    return Promise.all([
      import("ace-builds/src-noconflict/ext-searchbox"),
      import("ace-builds/src-noconflict/mode-python"),
      // import 'ace-builds/src-noconflict/theme-textmate';
      import("ace-builds/src-noconflict/theme-dracula"),

      // import('ace-builds/src-noconflict/snippets/python'),
      import("ace-builds/src-noconflict/ext-language_tools"),
    ]).then((obj) => {
      AceEditor = aceModule.default;
      callback();
    });
  });
};

const Editor = observer((props: Props) => {
  const store = useStore('documentStore');
  const pyScript = store.find<Script>(props.webKey);

  const [loaded, setLoaded] = React.useState(false);
  React.useEffect(() => {
    let isMounted = true;
    loadLibs(() => {
      if (isMounted) {
        setLoaded(true);
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

  const editorRef = React.useCallback(
    (node) => {
      if (node !== null) {
        if (node.editor) {
          node.editor.commands.addCommand({
            // commands is array of key bindings.
            name: "execute",
            bindKey: { win: "Ctrl-Enter", mac: "Command-Enter" },
            exec: () => pyScript.execScript(document),
          });
          node.editor.commands.addCommand({
            // commands is array of key bindings.
            name: "save",
            bindKey: { win: "Ctrl-s", mac: "Command-s" },
            exec: () => {
              pyScript.saveService.saveNow();
            }
          });
        }
      }
      return () => {
        if (node && node.editor) {
          const cmd = node.editor.commands.commands["execute"];
          if (cmd) {
            node.editor.commands.removeCommand(cmd, true);
          }
          const save = node.editor.commands.commands["save"];
          if (save) {
            node.editor.commands.removeCommand(save, true);
          }
        }
      };
    },
    [pyScript]
  );

  return (
    <div className={clsx(styles.brythonCodeBlock, styles.editor)}>
      {loaded ? (
        <AceEditor
          className={styles.brythonEditor}
          style={{
            width: "100%",
          }}
          onPaste={(e) => {
            if (pyScript.versioned) {
              /**
               * Save and mark pasted content immediately
               */
              pyScript.setPastedEdit(true);
              pyScript.saveService.saveNow();
            }
          }}
          maxLines={25}
          ref={editorRef}
          mode="python"
          theme="dracula"
          keyBindings="VSCode"
          onChange={(value: string) => {
            pyScript.setData({code: value})
          }}
          readOnly={pyScript.showRaw || !pyScript.loaded}
          value={pyScript.showRaw ? pyScript.rawScript : pyScript.data.code}
          defaultValue={pyScript.code}
          name={DOM_ELEMENT_IDS.aceEditor(pyScript.codeId)}
          editorProps={{ $blockScrolling: true }}
          setOptions={{
            displayIndentGuides: true,
            vScrollBarAlwaysVisible: false,
            highlightGutterLine: false,
          }}
          showPrintMargin={false}
          highlightActiveLine={false}
          enableBasicAutocompletion
          enableLiveAutocompletion={false}
          enableSnippets={false}
          showGutter
        />
      ) : (
        <PlaceholderEditor webKey={props.webKey} />
      )}
      <PyScriptSrc webKey={props.webKey}/>
    </div>
  );
});
export default Editor;
