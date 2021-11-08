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

export const UPPER_NOSPACE = (val: string | undefined) => val.replace(/\s+/g, '').toUpperCase();

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
  monospace?: boolean;
  reduced?: boolean;
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
  labelWidth?: string;
  width?: string; /* input width */
  sanitizer?: (val: string) => string;
  checker?: (val: string | undefined) => boolean;
  disabled?: boolean;
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
