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

const getClassName = (value: string) => {
  if (OPTIONS_REGEX.test(value)) {
    return styles[value.match(OPTIONS_REGEX).groups!.klass];
  }
  return undefined;
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
    return pageId;
  } catch (e) {
    return `answer`;
  }
}

const Option = ({ value }) => {
  let val = value;
  let klass: string | undefined = undefined;
  if (OPTIONS_REGEX.test(value)) {
    klass = getClassName(value);
    val = value.replace(OPTIONS_REGEX, "");
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
  const [myId, setMyId] = React.useState("");

  React.useEffect(() => {
    if (loaded) {
      setItem(myId, { value: value, type: props.type }, _1_YEAR);
    }
  }, [value]);

  React.useEffect(() => {
    const id = `${pageId()}_${props.id}`;
    setMyId(id);
    let saved = getItem(id, {}).value;
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
              <Option value={v} key={idx} />
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
            disabled={!loaded}
          />
        );
      })}
    </div>
  );
};

export default Answer;
