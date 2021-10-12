import * as React from "react";
import styles from "./Answer.module.scss";
import clsx from "clsx";
import { observer } from "mobx-react-lite";
import { AnswerStringDoc, DocumentContext } from "./AnswerWrapper";
import { StringProps, Types } from ".";
import Document from "../../models/Document";
import Option from "./Option";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTimesCircle,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";

const OPTIONS_REGEX = /--(?<klass>\w+)$/;

const getDataAttr = (value: string) => {
  if (OPTIONS_REGEX.test(value)) {
    return value.match(OPTIONS_REGEX).groups!.klass;
  }
  return undefined;
};

const getClassName = (value: string) => {
  return styles[getDataAttr(value)];
};

const CheckIcon = (state) => {
  if (state === "correct") {
    return faCheckCircle;
  }
  if (state === "wrong") {
    return faTimesCircle;
  }
  return faQuestionCircle;
};

const StringAnswer = observer((props: StringProps) => {
  const [correctState, setCorrectState] = React.useState("unchecked");
  const doc = React.useContext(DocumentContext) as Document<AnswerStringDoc>;

  const onChange = (newVal: string) => {
    setCorrectState("unchecked");
    doc.setData({ value: newVal, type: 'string' });
  };

  const checkAnswer = (current) => {
    const sanitizer = props.sanitizer ? props.sanitizer : (val) => val;
    setCorrectState(sanitizer(current) === sanitizer(props.solution) ? "correct" : "wrong");
  };

  return (
    <div className={styles.answer}>
      {props.label && <label>{props.label}</label>}
      {props.children && <label>{props.children}</label>}
      {props.select ? (
        <select
          onChange={(e) => onChange(e.target.value)}
          value={doc.data.value}
          className={getClassName(doc.data.value)}
          disabled={!doc.loaded}
        >
          {props.select.map((v, idx) => (
            <Option value={v} key={idx} />
          ))}
        </select>
      ) : (
        <input
          type="text"
          onChange={(e) => onChange(e.target.value)}
          value={doc.data.value}
          disabled={!doc.loaded}
        />
      )}
      {props.solution && (
        <button
          onClick={() => checkAnswer(doc.data.value)}
          className={clsx(styles[correctState], styles.checkButton)}
        >
          <FontAwesomeIcon icon={CheckIcon(correctState)} />
        </button>
      )}
    </div>
  );
});

export default StringAnswer;
