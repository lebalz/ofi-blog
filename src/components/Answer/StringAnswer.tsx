import * as React from "react";
import styles from "./Answer.module.scss";
import clsx from "clsx";
import { observer } from "mobx-react-lite";
import { StringProps } from ".";
import { reaction } from "mobx";
import useIsBrowser from "@docusaurus/useIsBrowser";
import { useStore } from "../../stores/hooks";
import { default as StringModel } from "../../models/Answer/String";
import Loader from "../shared/Loader";
import DropdownSelect from "./DropdownSelect";

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
    return 'mdi-check-circle';
  }
  if (state === "wrong") {
    return 'mdi-close-circle';
  }
  return 'mdi-help-circle-outline';
};

const StringAnswer = observer((props: StringProps) => {
  const inBrowser = useIsBrowser();
  const [correctState, setCorrectState] = React.useState("unchecked");
  const store = useStore('documentStore');
  const doc = store.find<StringModel>(props.webKey);

  const onChange = (newVal: string) => {
    if (!doc.loaded) {
      return;
    }
    setCorrectState("unchecked");
    doc.setData({ value: newVal, type: 'string' });
  };

  const checkAnswer = (current) => {
    if (props.checker) {
      return setCorrectState(props.checker(current) ? 'correct' : 'wrong');
    }
    const sanitizer = props.sanitizer ? props.sanitizer : (val) => val;
    setCorrectState(sanitizer(current) === sanitizer(props.solution) ? "correct" : "wrong");
  };

  /** check the answer */
  React.useEffect(() => {
    return reaction(
      () => doc.loaded,
      (loaded) => {
        if (loaded) {
          checkAnswer(doc.value)
        }
      }
    )
  }, [doc])

  React.useEffect(() => {
    if (doc.loaded) {
      checkAnswer(doc.value);
    }
  }, [doc, inBrowser])

  if (!inBrowser) {
    return <div>SSR</div>;
  }

  if (!doc.loaded) {
    return <Loader />;
  }
  const hasSolution = props.solution || props.checker;
  return (
    <div className={clsx(styles.answer, styles.string)}>
      {props.label && <label style={{ width: props.labelWidth }}>{props.label}</label>}
      {props.children && <label>{props.children}</label>}
      {props.select ? (
        <DropdownSelect
          onChange={onChange}
          items={props.select.map((v, idx) => ({
            value: v,
            label: getDataAttr(v),
            className: getClassName(v)
          }))}
          value={doc.value}
          className={clsx(getClassName(doc.value), hasSolution && styles.solution)}
          disabled={!doc.loaded}
        />
      ) : (
        <input
          type="text"
          style={{ width: props.width }}
          onChange={(e) => onChange(e.target.value)}
          value={doc.value}
          disabled={!doc.loaded || doc.readonly || props.disabled}
        />
      )}
      {(hasSolution) && (
        <button
          onClick={() => checkAnswer(doc.value)}
          className={clsx(styles[correctState], styles.checkButton)}
        >
          <i className={clsx('mdi', CheckIcon(correctState))} />
        </button>
      )}
    </div>
  );
});

export default StringAnswer;
