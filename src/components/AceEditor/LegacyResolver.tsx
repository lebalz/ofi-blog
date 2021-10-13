import { observer } from "mobx-react-lite";
import * as React from "react";
import { ScriptContext } from ".";
const LegacyResolver = observer(() => {
  const pyScript = React.useContext(ScriptContext);
  if (!pyScript.pyDoc.legacyData) {
    return null;
  }
  return (
    <div className="alert alert--primary" role="alert">
      Es wurde eine lokal gespeicherte Datei gefunden. Wollen Sie diese Version verwenden?
      <br/>
      (⚠️ Die andere Version wird verworfen!)
      <pre>
        <code>{pyScript.pyDoc.legacyData.code}</code>
      </pre>
      <div>
        <button
          className="button button--primary"
          onClick={() => pyScript.pyDoc.resolveLegacyDoc("use_legacy")}
        >
          Ja
        </button>
        <button
          className="button button--info"
          onClick={() => pyScript.pyDoc.resolveLegacyDoc("use_current")}
        >
          Nein (verwerfen)
        </button>
      </div>
    </div>
  );
});

export default LegacyResolver;
