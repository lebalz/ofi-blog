import useIsBrowser from "@docusaurus/useIsBrowser";
import { observer } from "mobx-react-lite";
import * as React from "react";
import Document from "../../models/Document";
import { DocumentStore } from "../../stores/DocumentStore";
import { useStore } from "../../stores/hooks";
import { Props, Types } from ".";
import { getItem, removeItem } from "../../utils/storage";
import { sanitizeId } from "../../utils/sanitizers";
import ReactDOMServer from 'react-dom/server'

export interface AnswerTextDoc {
  value: React.ReactNode;
  type: "text";
  default?: string | React.ReactNode;
}
export interface AnswerStringDoc {
  value: string;
  type: "string";
  default?: string;
}
export interface AnswerArrayDoc {
  type: "array";
  value: string[];
  size: number;
  default?: string[];
}

type AnswerDoc = AnswerStringDoc | AnswerTextDoc | AnswerArrayDoc;

export const DocumentContext =
  React.createContext<Document<AnswerDoc>>(undefined);

const DefaultValue = (props: {childNodes?: React.ReactNode } & Props) => {
  switch (props.type) {
    case "string":
      return props.default || "";
    case "text":
      return props.default || props.childNodes ? ReactDOMServer.renderToString(props.childNodes) : "";
    case "array":
      return Array(props.size).fill("");
  }
};

const pageId = () => {
  try {
    const pageId = sanitizeId(window.location.pathname.replace(/^\/|\/$/g, ""));
    return pageId.toLowerCase();
  } catch (e) {
    return `answer`;
  }
};

const getDocument = (store: DocumentStore, props: Props) => {
  if (!store.isLoggedIn) {
    return store.getOrCreateDummyDoc<AnswerDoc>(
      props.webKey,
      props.type,
      {
        value: DefaultValue(props) as any,
        type: props.type,
        size: props.type === 'array' ? props.size : undefined
      }
    )
  }
  const legacyHandler = () => {
    if (!props.id) {
      return undefined;
    }
    const pid = pageId();
    const old = getItem<{ value: string | string[]; expiry: number }>(
      props.id,
      pid
    );
    if (!old || !old.value) {
      return undefined;
    }
    return {
      data: { value: old.value as string, type: props.type, size: props.type === 'array' ? props.size : undefined } as AnswerDoc,
      cleanup: () => removeItem(props.id, pid),
    };
  };
  if (props.type === "array") {
    return store.getOrCreateDocument<AnswerDoc>(
      props.webKey,
      'array',
      {
        value: DefaultValue(props) as any,
        type: props.type,
        size: props.size,
      },
      legacyHandler
    );
  }
  return store.getOrCreateDocument<AnswerDoc>(
    props.webKey,
    props.type,
    {
      value: DefaultValue(props) as any,
      type: props.type,
    },
    legacyHandler
  );
};

const AnswerWrapper = observer((props: {childNodes?: React.ReactNode } & Props) => {
  const documentStore = useStore("documentStore");
  const [document] = React.useState(getDocument(documentStore, props));
  if (!useIsBrowser()) {
    return <div>Loading</div>
  }
  return (
    <DocumentContext.Provider value={document}>
      {props.children}
    </DocumentContext.Provider>
  );
});

export default AnswerWrapper;
