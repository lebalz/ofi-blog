import * as React from "react";
import styles from "./Answer.module.scss";
import clsx from "clsx";
import { observer } from "mobx-react-lite";
import { StringProps } from ".";
import Option from "./Option";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTimesCircle,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
import { reaction } from "mobx";
import useIsBrowser from "@docusaurus/useIsBrowser";
import { useStore } from "../../stores/hooks";
import {default as StringModel} from "../../models/Answer/String";
import Loader from "../shared/Loader";

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
  return (
    <div className={styles.answer}>
      {props.label && <label style={{width: props.labelWidth}}>{props.label}</label>}
      {props.children && <label>{props.children}</label>}
      {props.select ? (
        <select
          onChange={(e) => onChange(e.target.value)}
          style={{width: props.width}}
          value={doc.value}
          className={getClassName(doc.value)}
          disabled={!doc.loaded}
        >
          {props.select.map((v, idx) => (
            <Option value={v} key={idx} />
          ))}
        </select>
      ) : (
        <input
          type="text"
          style={{width: props.width}}
          onChange={(e) => onChange(e.target.value)}
          value={doc.value}
          disabled={!doc.loaded || doc.readonly || props.disabled}
        />
      )}
      {(props.solution || props.checker) && (
        <button
          onClick={() => checkAnswer(doc.value)}
          className={clsx(styles[correctState], styles.checkButton)}
        >
          <FontAwesomeIcon icon={CheckIcon(correctState)} />
        </button>
      )}
    </div>
  );
});

export default StringAnswer;
