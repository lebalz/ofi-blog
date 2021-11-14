import * as React from "react";
import styles from "./Answer.module.scss";
import { observer } from "mobx-react-lite";
import { ArrayProps, Types } from ".";
import Option from "./Option";
import { useStore } from "../../stores/hooks";
import {default as ArrayAnswerModel} from "../../models/Answer/Array";
import { ArrayModel } from "../../models/iModel";

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
  const store = useStore('documentStore');
  const doc = store.find<ArrayAnswerModel>(props.webKey);

  const onChange = (newVal: string, idx: number = 0) => {
    if (props.isLegacy) {
      return;
    }
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
      {(props.isLegacy ? doc.legacyData?.value || [] : doc.data.value).map((c, i) => {
        if (props.select) {
          return (
            <select
              key={i}
              onChange={(e) => onChange(e.target.value, i)}
              value={c}
              className={getClassName(c)}
              disabled={!doc.loaded || props.isLegacy}
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
            disabled={!doc.loaded || doc.readonly}
          />
        );
      })}
    </div>
  );
});

export default ArrayAnswer;
