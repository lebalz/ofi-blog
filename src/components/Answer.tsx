import * as React from "react";
import styles from "./Answer.module.scss";
import { getItem, setItem, _1_YEAR } from "../helpers/storage";

type Types = "array" | "string";
const OPTIONS_REGEX = /--(?<klass>\w+)$/;

interface Base {
  type: Types;
  select?: string[];
  id: string;
  label?: string;
  hideDataAttr?: boolean;
}

interface ArrayProps extends Base {
  type: "array";
  size: number;
  solution?: (string | number)[];
}

interface StringProps extends Base {
  type: "string";
  solution: string | number;
}

type Props = ArrayProps | StringProps;

const DefaultValues = (props: Props) => {
  if (props.type === "string") {
    return "";
  }
  return Array(props.size).fill("");
};

const getDataAttr = (value: string) => {
  if (OPTIONS_REGEX.test(value)) {
    return value.match(OPTIONS_REGEX).groups!.klass;
  }
  return undefined;

}

const getClassName = (value: string) => {
  return styles[getDataAttr(value)]
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

const Option = ({ value, showDataAttr }) => {
  let val = value;
  let klass: string | undefined = undefined;
  if (OPTIONS_REGEX.test(value)) {
    const data = getDataAttr(value);
    klass = styles[data];
    val = `${value.replace(OPTIONS_REGEX, "")}${showDataAttr ? ' ' + data : ''}`;
  }
  return (
    <option value={value} className={klass}>
      {val}
    </option>
  );
};

const Answer = (props: Props) => {
  const [loaded, setLoaded] = React.useState(false);
  const [value, setValue] = React.useState(props.type === 'array' ? [] : '');
  const [contextKey, setContextKey] = React.useState("");

  React.useEffect(() => {
    if (loaded) {
      setItem(props.id, { value: value, type: props.type }, contextKey, _1_YEAR);
    }
  }, [value]);

  React.useEffect(() => {
    const id = pageId();
    setContextKey(pageId());
    let saved = getItem(props.id, id, {}).value;
    if (saved === undefined) {
      saved = DefaultValues(props)
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
    setLoaded(true);
  }, []);

  const onChange = (newVal: string, idx: number = 0) => {
    if (props.type === "string") {
      setValue(newVal);
    } else {
      const newArr = [
        ...(value as string[]).slice(0, idx),
        newVal,
        ...(value as string[]).slice(idx + 1),
      ];
      setValue(newArr);
    }
  };

  if (props.type === "string") {
    return (
      <div className={styles.answer}>
        {props.label && <label>{props.label}</label>}
        {props.select ? (
          <select
            onChange={(e) => onChange(e.target.value)}
            value={value}
            className={getClassName(value as string)}
            disabled={!loaded}
          >
            {props.select.map((v, idx) => (
              <Option value={v} key={idx} showDataAttr={!props.hideDataAttr} />
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
      </div>
    );
  }
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
                <Option value={v} key={idx} showDataAttr={!props.hideDataAttr} />
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
};

export default Answer;
