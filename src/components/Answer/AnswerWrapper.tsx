import useIsBrowser from "@docusaurus/useIsBrowser";
import { observer } from "mobx-react-lite";
import * as React from "react";
import { _4_YEARS } from "../../helpers/storage";
import Document from "../../models/Document";
import { DocumentStore } from "../../stores/DocumentStore";
import { useStore } from "../../stores/hooks";
import { Props, Types } from ".";

const OPTIONS_REGEX = /--(?<klass>\w+)$/;

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

const DUMMY_DOC = (type: Types) => {
  switch (type) {
    case "string":
    case "text":
      return new Document<AnswerDoc>(
        undefined as DocumentStore,
        "",
        { value: "", type: type },
        false,
        true
      );
    case "array":
      return new Document<AnswerDoc>(
        undefined as DocumentStore,
        "",
        { value: [""], type: "array", size: 1 },
        false,
        true
      );
  }
};

export const DocumentContext =
  React.createContext<Document<AnswerDoc>>(undefined);

const DefaultValue = (props: Props) => {
  switch (props.type) {
    case "string":
      return props.default || "";
    case "text":
      return props.default || "";
    case "array":
      return Array(props.size).fill("");
  }
};

const getDocument = (
  store: DocumentStore,
  isBrowser: boolean,
  props: Props
) => {
  if (!isBrowser) {
    return DUMMY_DOC(props.type);
  }
  if (props.type === "array") {
    return store.getOrCreateDocument<AnswerDoc>(props.webKey, {
      value: DefaultValue(props) as any,
      type: props.type,
      size: props.size,
    });
  }
  return store.getOrCreateDocument<AnswerDoc>(props.webKey, {
    value: DefaultValue(props) as any,
    type: props.type,
  });
};

const AnswerWrapper = observer((props: Props) => {
  const documentStore = useStore("documentStore");
  const isBrowser = useIsBrowser();
  const [document] = React.useState(
    getDocument(documentStore, isBrowser, props)
  );
  return (
    <DocumentContext.Provider value={document}>
      {props.children}
    </DocumentContext.Provider>
  );
});

export default AnswerWrapper;
