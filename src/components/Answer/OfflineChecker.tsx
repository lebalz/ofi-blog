import clsx from "clsx";
import { observer } from "mobx-react-lite";
import * as React from "react";
import { DocumentContext } from "./AnswerWrapper";
const OfflineChecker = observer(() => {
  const doc = React.useContext(DocumentContext);
  if (!doc.isOffline) {
    return null;
  }
  return (
    <div>
      <span
          className={clsx("badge", "badge--danger")}
          title="Netzwerkverbindung überprüfen!"
        >
          ⚠️ Offline
        </span>
    </div>
  );
});

export default OfflineChecker;
