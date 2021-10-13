import { observer } from "mobx-react-lite";
import * as React from "react";
import Document from "../../models/Document";
import { DocumentStore } from "../../stores/DocumentStore";
import { DocumentContext } from "./AnswerWrapper";
import ArrayAnswer from "./ArrayAnswer";
import StringAnswer from "./StringAnswer";
import TextAnswer from "./TextAnswer";
const LegacyResolver = observer(() => {
  const doc = React.useContext(DocumentContext);
  const legacyData = doc.legacyData;
  if (!legacyData) {
    return null;
  }
  return (
    <div className="alert alert--primary" role="alert">
      Es wurde eine lokal gespeicherte Datei gefunden. Wollen Sie diese Version
      verwenden?
      <br />
      (⚠️ Die andere Version wird verworfen!)
      <DocumentContext.Provider
        value={
          new Document(
            undefined as DocumentStore,
            doc.webKey,
            () => undefined,
            legacyData,
            true,
            true
          )
        }
      >
        {doc.data.type === "text" && (
          <TextAnswer type="text" webKey={doc.webKey} />
        )}
        {doc.data.type === "string" && (
          <StringAnswer type="string" webKey={doc.webKey} />
        )}
        {doc.data.type === "array" && (
          <ArrayAnswer type="array" webKey={doc.webKey} size={doc.data.size} />
        )}
      </DocumentContext.Provider>
      <div>
        <button
          className="button button--primary"
          onClick={() => doc.resolveLegacyDoc("use_legacy")}
        >
          Ja
        </button>
        <button
          className="button button--info"
          onClick={() => doc.resolveLegacyDoc("use_current")}
        >
          Nein (verwerfen)
        </button>
      </div>
    </div>
  );
});

export default LegacyResolver;
