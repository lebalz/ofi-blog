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
  default?: React.ReactNode;
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
    if (props.default) {
      return props.default;
    }
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
    val = `${value.replace(OPTIONS_REGEX, "")}${showDataAttr ? " " + data : ""
      }`;
  }
  return (
    <option value={value} className={klass}>
      {val}
    </option>
  );
};

var ReactQuill: any | undefined = undefined;

const loadQuill = (callback) => {
  if (ReactQuill) {
    return callback();
  }

  import('react-quill').then((reactQuill) => {
    return Promise.all([
      import('react-quill/dist/quill.snow.css')
    ]).then(obj => {
      ReactQuill = reactQuill.default;
      callback();
    });
  })
};

const Answer = (props: Props) => {
  const [loaded, setLoaded] = React.useState(false);
  const [value, setValue] = React.useState(props.type === "array" ? [] : "");
  const [contextKey, setContextKey] = React.useState("");
  const [showQuillToolbar, setShowQuillToolbar] = React.useState(false);
  const [hasTextEdits, setHasTextEdits] = React.useState(false);
  const [correctState, setCorrectState] = React.useState("unchecked");

  const [quillLoaded, setQuillLoaded] = React.useState(false);

  const quillRef = React.useRef(null);

  const onQuillToolbarMouseDown = (e: any) => {
    e.preventDefault();
  }


  React.useEffect(() => {
    if (props.type !== 'text') {
      return;
    }
    let isMounted = true;
    loadQuill(() => {
      if (isMounted) {
        setQuillLoaded(true);
        if (quillRef && quillRef.current) {
          quillRef.current.editor.getModule("toolbar").container.addEventListener("mousedown", onQuillToolbarMouseDown);
          checkWorkingState(quillRef.current.editor);
        }
      }
    });
    return () => {
      isMounted = false
      if (quillRef && quillRef.current) {
        quillRef.current.editor.getModule("toolbar").container.removeEventListener("mousedown", onQuillToolbarMouseDown);
      }
    };
  }, []);

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
    setLoaded(true);
    if (props.type !== "text" && props.solution && hadValue) {
      checkAnswer(saved);
    }
  }, []);

  const checkWorkingState = (editor: any) => {
    if (props.type !== 'text') {
      return;
    }
    const hasEdits = editor.getText().length > (props.minLength || 10)
    if (hasEdits !== hasTextEdits) {
      setHasTextEdits(hasEdits);
    }
  }


  const onChange = (newVal: string, idx: number = 0) => {
    setCorrectState("unchecked");
    if (props.type === "string" || props.type === "text") {
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
      if (!ReactQuill || !quillLoaded) {
        return (
          <div>
            Loading...
          </div>
        )
      }
      return (
        <div
          onFocus={() => !showQuillToolbar && setShowQuillToolbar(true)}
          onBlur={() => showQuillToolbar && setShowQuillToolbar(false)}
        >
          {props.label && (
            <h6>{props.label}</h6>
          )}
          <ReactQuill
            ref={quillRef}

            className={clsx(
              styles.quillAnswer,
              showQuillToolbar ? undefined : 'disable-toolbar',
              hasTextEdits ? styles.edited : undefined
            )}
            value={value as string}
            onChange={(content, _delta, _source, editor) => {
              onChange(content);
              checkWorkingState(editor)
            }}
            modules={{
              toolbar: true
            }}
            placeholder={props.placeholder || "✍️ Antwort..."}
          />
        </div>
      )
  }
};

export default Answer;
