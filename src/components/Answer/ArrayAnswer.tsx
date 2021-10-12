import * as React from "react";
import styles from "./Answer.module.scss";
import { observer } from "mobx-react-lite";
import { AnswerArrayDoc, DocumentContext } from "./AnswerWrapper";
import { ArrayProps, Types } from ".";
import Document from "../../models/Document";
import Option from "./Option";

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

const ArrayAnswer = observer((props: ArrayProps) => {
  const doc = React.useContext(DocumentContext) as Document<AnswerArrayDoc>;

  const onChange = (newVal: string, idx: number = 0) => {
    const newArr = [
      ...doc.data.value.slice(0, idx),
      newVal,
      ...doc.data.value.slice(idx + 1),
    ];
    doc.setData({...doc.data, value: newArr});
  };
  return (
    <div className={styles.answer}>
      {props.label && <label>{props.label}</label>}
      {doc.data.value.map((c, i) => {
        if (props.select) {
          return (
            <select
              key={i}
              onChange={(e) => onChange(e.target.value, i)}
              value={c}
              className={getClassName(c)}
              disabled={!doc.loaded}
            >
              {props.select.map((v, idx) => (
                <Option value={v} key={idx} />
              ))}
            </select>
          );
        }
        return (
          <input
            key={i}
            type="text"
            onChange={(e) => onChange(e.target.value, i)}
            value={c}
            disabled={!doc.loaded}
          />
        );
      })}
    </div>
  );
});

export default ArrayAnswer;
