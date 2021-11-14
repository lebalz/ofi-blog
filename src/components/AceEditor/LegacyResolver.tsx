import { runInAction } from "mobx";
import { observer } from "mobx-react-lite";
import * as React from "react";
import Script from "../../models/Script";
import { useStore } from "../../stores/hooks";

/**
 * --> /playground
 * localStorage.setItem('playground', '{"expiry":1760275631656,"python__playground_py":{"edited":"print(\'whatever\')","type":"code"}}')
 */

const resolveLegacyDoc = (action: 'use_legacy' | 'use_current', model: Script) => {
  if (model.type !== 'code') {
      return;
  }
  if (action === 'use_legacy') {
      model.setData(model.legacyData);
      model.saveService.saveNow()
          .then((res) => {
              if (res.data && res.data.state === 'ok') {
              runInAction(() => {
                  model.legacyData = undefined;
                  if (model.legacyCleanup) {
                      model.legacyCleanup();
                  }
              });
          }
      });
  } else {
      runInAction(() => {
          model.legacyData = undefined;
          if (model.legacyCleanup) {
              model.legacyCleanup();
          }
      });
  }
}

interface Props {
  webKey: string;
}
const LegacyResolver = observer((props: Props) => {
  const store = useStore('documentStore');
  const pyScript = store.find<Script>(props.webKey);
  if (!pyScript.legacyData) {
    return null;
  }
  return (
    <div className="alert alert--primary" role="alert">
      Es wurde eine lokal gespeicherte Datei gefunden. Wollen Sie diese Version verwenden?
      <br/>
      (⚠️ Die andere Version wird verworfen!)
      <pre>
        <code>{pyScript.legacyData.code}</code>
      </pre>
      <div>
        <button
          className="button button--primary"
          onClick={() => resolveLegacyDoc("use_legacy", pyScript)}
        >
          Ja
        </button>
        <button
          className="button button--info"
          onClick={() => resolveLegacyDoc("use_current", pyScript)}
        >
          Nein (verwerfen)
        </button>
      </div>
    </div>
  );
});

export default LegacyResolver;
