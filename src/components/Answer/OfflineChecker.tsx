import clsx from "clsx";
import { observer } from "mobx-react-lite";
import * as React from "react";
import { useStore } from "../../stores/hooks";

interface Props {
  webKey: string;
}

const OfflineChecker = observer((props: Props) => {
  const store = useStore('documentStore');
  const doc = store.find(props.webKey);
  if (!doc.saveService.isOffline) {
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
