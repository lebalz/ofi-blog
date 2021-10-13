import * as React from "react";
import clsx from "clsx";
// import {default as editorStyles} from "./styles.module.scss";
import styles from "./styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPython } from "@fortawesome/free-brands-svg-icons";
import {
  faPlay,
  faUndo,
  faFileSignature,
  faFileCode,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import { observer } from "mobx-react-lite";
import { ScriptContext } from ".";
import { action } from "mobx";
import { useStore } from "../../stores/hooks";

const PlayButton = observer(() => {
  const pyScript = React.useContext(ScriptContext);
  const documentStore = useStore("documentStore");
  return (
    <button
      onClick={() => pyScript.execScript(document, documentStore)}
      className={clsx(styles.playButton, styles.headerButton)}
      title="Code Ausführen"
    >
      <FontAwesomeIcon
        icon={pyScript.executing ? faPython : faPlay}
        spin={pyScript.executing}
      />
    </button>
  );
});

interface Props {
  slim: boolean;
  title: string;
  resettable: boolean;
}

const Header = observer(({ slim, title, resettable }: Props) => {
  const pyScript = React.useContext(ScriptContext);

  const onReset = () => {
    if (!resettable) {
      return;
    }
    const shouldReset = window.confirm(
      "Änderungen verwerfen? (Ihre Version geht verloren!)"
    );
    if (shouldReset) {
      pyScript.pyDoc.setData({ code: pyScript.rawScript });
    }
  };

  return (
    <div className={clsx(styles.brythonCodeBlockHeader, styles.brythonCodeBlockHeader, styles.controls)}>
      {!slim && <div className={styles.title}>{title}</div>}
      {!slim && !pyScript.pyDoc.loaded && (
        <span
          className="badge badge--warning"
          title="Warte auf die Antwort des Servers. Seite neu laden."
        >
          Laden
        </span>
      )}
      {!slim && pyScript.pyDoc.isOffline && (
        <span
          className={clsx("badge", "badge--danger", styles.badge)}
          title="Netzwerkverbindung überprüfen!"
        >
          ⚠️ Offline
        </span>
      )}
      {!slim && <div className={styles.spacer}></div>}
      {!slim && pyScript.showSavedNotification && (
        <FontAwesomeIcon
          icon={faCheckCircle}
          style={{ color: "var(--ifm-color-success)" }}
        />
      )}
      {!slim && pyScript.hasEdits && !pyScript.showRaw && resettable && (
        <button
          onClick={onReset}
          className={styles.headerButton}
          title="Änderungen Verwerfen"
        >
          <FontAwesomeIcon icon={faUndo} />
        </button>
      )}
      {!slim && pyScript.hasEdits && (
        <button
          className={clsx(
            styles.showRawButton,
            styles.headerButton,
            pyScript.showRaw ? styles.showRawButtonDisabled : undefined
          )}
          onClick={action(() => (pyScript.showRaw = !pyScript.showRaw))}
          title={pyScript.showRaw ? "Mein Code Anzeigen" : "Original Anzeigen"}
        >
          {pyScript.showRaw ? (
            <FontAwesomeIcon icon={faFileCode} />
          ) : (
            <FontAwesomeIcon icon={faFileSignature} />
          )}
        </button>
      )}
      <PlayButton />
    </div>
  );
});

export default Header;
export { PlayButton };
