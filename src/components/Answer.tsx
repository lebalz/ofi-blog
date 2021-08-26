import * as React from "react";
import styles from "./Answer.module.scss";
import { getItem, setItem, _4_YEARS } from "../helpers/storage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTimesCircle,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";

type Types = "array" | "string" | "text";
const OPTIONS_REGEX = /--(?<klass>\w+)$/;

interface Base {
  type: Types;
  select?: string[];
  id: string;
  label?: string;
  hideDataAttr?: boolean;
  children?: React.ReactNode;
}

interface ArrayProps extends Base {
  type: "array";
  size: number;
  solution?: (string | number)[];
}

/**
 * Short Text or number
 */
interface StringProps extends Base {
  type: "string";
  solution?: string | number;
}

/**
 * Long Text
 */
interface TextProps extends Base {
  type: "text";
  placeholder?: string;
  minLength?: number;
}

type Props = ArrayProps | StringProps | TextProps;

const DefaultValues = (props: Props) => {
  if (props.type === "string" || props.type === "text") {
    return "";
  }
  return Array(props.size).fill("");
};

const getDataAttr = (value: string) => {
  if (OPTIONS_REGEX.test(value)) {
    return value.match(OPTIONS_REGEX).groups!.klass;
  }
  return undefined;
};

const getClassName = (value: string) => {
  return styles[getDataAttr(value)];
};

function sanitizeId(id: string) {
  if (!id) {
    return;
  }
  return id
    .replace(/[\/\.\-#]/g, "_")
    .replace(/%201/g, "_")
    .replace(/[\.:,"'\s]/g, "");
}

function pageId() {
  try {
    const pageId = sanitizeId(window.location.pathname.replace(/^\/|\/$/g, ""));
    return pageId.toLowerCase();
  } catch (e) {
    return `answer`;
  }
}

const CheckIcon = (state) => {
  if (state === "correct") {
    return faCheckCircle;
  }
  if (state === "wrong") {
    return faTimesCircle;
  }
  return faQuestionCircle;
};

const Option = ({ value, showDataAttr }) => {
  let val = value;
  let klass: string | undefined = undefined;
  if (OPTIONS_REGEX.test(value)) {
    const data = getDataAttr(value);
    klass = styles[data];
    val = `${value.replace(OPTIONS_REGEX, "")}${
      showDataAttr ? " " + data : ""
    }`;
  }
  return (
    <option value={value} className={klass}>
      {val}
    </option>
  );
};

const Answer = (props: Props) => {
  const [loaded, setLoaded] = React.useState(false);
  const [value, setValue] = React.useState(props.type === "array" ? [] : "");
  const [contextKey, setContextKey] = React.useState("");
  const [textAreaLines,setTextAreaLines] = React.useState(2);
  const [correctState, setCorrectState] = React.useState("unchecked");

  React.useEffect(() => {
    if (loaded) {
      setItem(
        props.id,
        { value: value, type: props.type },
        contextKey,
        _4_YEARS
      );
    }
  }, [value]);

  React.useEffect(() => {
    const id = pageId();
    setContextKey(pageId());
    let saved = getItem(props.id, id, {}).value;
    const hadValue = !!saved;
    if (saved === undefined) {
      saved = DefaultValues(props);
    }
    if (props.type === "array") {
      if (Array.isArray(saved)) {
        if (saved.length > props.size) {
          saved = saved.slice(0, props.size);
        } else if (saved.length < props.size) {
          saved = [
            ...saved,
            ...[...Array(props.size - saved.length).map(() => "")],
          ];
        }
      }
    }
    setValue(saved);
    checkNumberOfTextAreaLines(saved);
    setLoaded(true);
    if (props.type !== "text" && props.solution && hadValue) {
      checkAnswer(saved);
    }
  }, []);

  const checkNumberOfTextAreaLines = (text: string) => {
    if (props.type !== 'text') {
      return;
    }
    const lines = (text.match(/\r?\n/g) || []).length + 1;
    if (textAreaLines !== lines) {
      setTextAreaLines(lines);
    }
  }

  const onChange = (newVal: string, idx: number = 0) => {
    setCorrectState("unchecked");
    if (props.type === "string" || props.type === "text") {
      setValue(newVal);
      checkNumberOfTextAreaLines(newVal);
    } else {
      const newArr = [
        ...(value as string[]).slice(0, idx),
        newVal,
        ...(value as string[]).slice(idx + 1),
      ];
      setValue(newArr);
    }
  };

  const checkAnswer = (current) => {
    if (props.type === "text") {
      return;
    }
    setCorrectState(current === props.solution ? "correct" : "wrong");
  };

  switch (props.type) {
    case "array":
      return (
        <div className={styles.answer} data-loaded={loaded}>
          {props.label && <label>{props.label}</label>}
          {(value as string[]).map((c, i) => {
            if (props.select) {
              return (
                <select
                  key={i}
                  onChange={(e) => onChange(e.target.value, i)}
                  value={c}
                  className={getClassName(c)}
                  disabled={!loaded}
                >
                  {props.select.map((v, idx) => (
                    <Option
                      value={v}
                      key={idx}
                      showDataAttr={!props.hideDataAttr}
                    />
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
                disabled={!loaded}
              />
            );
          })}
        </div>
      );
    case "string":
      return (
        <div className={styles.answer}>
          {props.label && <label>{props.label}</label>}
          {props.children && <label>{props.children}</label>}
          {props.select ? (
            <select
              onChange={(e) => onChange(e.target.value)}
              value={value}
              className={getClassName(value as string)}
              disabled={!loaded}
            >
              {props.select.map((v, idx) => (
                <Option
                  value={v}
                  key={idx}
                  showDataAttr={!props.hideDataAttr}
                />
              ))}
            </select>
          ) : (
            <input
              disabled={!loaded}
              type="text"
              onChange={(e) => onChange(e.target.value)}
              value={value}
            />
          )}
          {props.solution && (
            <button
              onClick={() => checkAnswer(value)}
              className={clsx(styles[correctState], styles.checkButton)}
            >
              <FontAwesomeIcon icon={CheckIcon(correctState)} />
            </button>
          )}
        </div>
      );
    case "text":
      return (
        <div className={styles.answer}>
          {props.label && <label>{props.label}</label>}
          {props.children && <label>{props.children}</label>}
          <textarea 
            style={{height: `${1.1*textAreaLines + 1.6}em`}} 
            value={value} 
            className={value.length > (props.minLength || 10) ? styles.edited : undefined}
            disabled={!loaded} 
            onChange={(e) => onChange(e.target.value)}
            placeholder={props.placeholder || "Antwort"}
            spellCheck
          />
        </div>
      );
  }
};

export default Answer;
