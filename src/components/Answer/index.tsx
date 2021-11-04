import * as React from "react";
import AnswerWrapper from "./AnswerWrapper";
import StringAnswer from "./StringAnswer";
import ArrayAnswer from "./ArrayAnswer";
import TextAnswer from "./TextAnswer";
import { useStore } from "../../stores/hooks";
import LoginAlert from "../AceEditor/LoginAlert";
import { observer } from "mobx-react-lite";
import LegacyResolver from "./LegacyResolver";
import OfflineChecker from "./OfflineChecker";

export type Types = "array" | "string" | "text";

export interface Base {
  webKey: string;
  id?: string;
  label?: string;
  children?: React.ReactNode;
}

export interface TextProps extends Base {
  type: "text";
  placeholder?: string;
  default?: string | React.ReactNode;
}

export interface ArrayProps extends Base {
  type: "array";
  size: number;
  default?: string[];
  select?: string[];
}

export interface StringProps extends Base {
  type: "string";
  placeholder?: string;
  default?: string;
  select?: string[];
  solution?: string;
  sanitizer?: (val: string) => string;
}

export type Props = StringProps | ArrayProps | TextProps;

const Answer = observer((props: Props) => {
  const msalStore = useStore("msalStore");
  return (
    <AnswerWrapper {...props} childNodes={props.children}>
      <div data--web-key={props.webKey}>
        <LoginAlert />
        {msalStore.loggedIn && <LegacyResolver />}
        {msalStore.loggedIn && <OfflineChecker />}
        {props.type === "text" && <TextAnswer {...props} />}
        {props.type === "string" && <StringAnswer {...props} />}
        {props.type === "array" && <ArrayAnswer {...props} />}
      </div>
    </AnswerWrapper>
  );
});

export default Answer;
