import * as React from "react";
import AnswerWrapper from "./AnswerWrapper";
import StringAnswer from "./StringAnswer";
import ArrayAnswer from "./ArrayAnswer";
import TextAnswer from "./TextAnswer";

export type Types = 'array'| 'string'| 'text';

export interface Base {
  webKey: string;
  label?: string;
  children?: React.ReactNode;
}

export interface TextProps extends Base {
    type: 'text';
    placeholder?: string;
    default?: string | React.ReactNode;
}

export interface ArrayProps extends Base {
    type: 'array';
    size: number;
    default?: string[];
    select?: string[];
}

export interface StringProps extends Base {
    type: 'string';
    placeholder?: string;
    default?: string;
    select?: string[];
    solution?: string;
    sanitizer?: (val: string) => string;
  }

export type Props = StringProps | ArrayProps | TextProps;

const Answer = (props: Props) => {
  return (
    <AnswerWrapper {...props}>
      {props.type === 'text' && <TextAnswer {...props} />}
      {props.type === 'string' && <StringAnswer {...props} />}
      {props.type === 'array' && <ArrayAnswer {...props} />}
    </AnswerWrapper>
  );
};

export default Answer;
