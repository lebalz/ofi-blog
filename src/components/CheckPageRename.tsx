import * as React from "react";
import { getItem, setItem, _4_YEARS } from "../helpers/storage";


interface Props {
  oldName: string;
  newName: string;
};

function sanitizeId(id: string) {
  if (!id) {
    return;
  }
  return id
    .replace(/[\/\.\-#]/g, "_")
    .replace(/%201/g, "_")
    .replace(/[\.:,"'\s]/g, "");
}

function pageId() {
  try {
    const pageId = sanitizeId(window.location.pathname.replace(/^\/|\/$/g, ""));
    return pageId.toLowerCase();
  } catch (e) {
    return `answer`;
  }
}


const CheckPageRename = (props: Props) => {
  React.useEffect(() => {
    const pId = pageId();
    const oldId = pId.replace(sanitizeId(props.newName), sanitizeId(props.oldName));
    const oldItem = getItem(oldId);
    const newItem = getItem(pId, undefined, {});
    if (oldItem) {
      Object.keys(oldItem).forEach((k) => {
        if (newItem[k] && newItem[k].value) {
          newItem[k].value = `${newItem[k].value}<br>${oldItem[k].value}`
        } else {
          newItem[k] = oldItem[k]
        }
      });
      setItem(pId, newItem);
      localStorage.removeItem(oldId);
    }
  }, []);
  return <div className="rename-local-storage" data-old={props.oldName} data-new={props.newName}></div>
};

export default CheckPageRename;
