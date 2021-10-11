import * as React from "react";
import styles from "./Answer.module.scss";
import { getItem, setItem, _4_YEARS } from "../helpers/storage";
import clsx from "clsx";
import { useStore } from "../stores/hooks";
import { observer } from "mobx-react-lite";

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

const OPTIONS_REGEX = /--(?<klass>\w+)$/;

interface Base {
  select?: string[];
  id: string;
  label?: string;
  hideDataAttr?: boolean;
  children?: React.ReactNode;
  default?: React.ReactNode;
  sanitizer?: (val) => any;
  placeholder?: string;
  minLength?: number;
  quillTheme?: 'snow' | 'bubble'
}

var ReactQuill: any | undefined = undefined;

interface TextDoc {
  text: string;
}

const loadQuill = (callback) => {
  if (ReactQuill) {
    return callback();
  }

  import("react-quill").then((reactQuill) => {
    return Promise.all([
      import("react-quill/dist/quill.snow.css"),
      import("react-quill/dist/quill.bubble.css"),
    ]).then((obj) => {
      ReactQuill = reactQuill.default;
      callback();
    });
  });
};

const AnswerV2 = observer((props: Base) => {
  const [loaded, setLoaded] = React.useState(false);
  const [contextKey, setContextKey] = React.useState("");
  const [showQuillToolbar, setShowQuillToolbar] = React.useState(false);
  const [hasTextEdits, setHasTextEdits] = React.useState(false);

  const [quillLoaded, setQuillLoaded] = React.useState(false);

  const quillRef = React.useRef(null);

  const documentStore = useStore('documentStore');
  const doc = documentStore.getOrCreateDocument<TextDoc>(`${pageId()}_${props.id}`, {text: props.default as string})

  const onQuillToolbarMouseDown = (e: any) => {
    e.preventDefault();
  };

  React.useEffect(() => {
    let isMounted = true;
    loadQuill(() => {
      if (isMounted) {
        setQuillLoaded(true);
        if (quillRef && quillRef.current) {
          quillRef.current.editor
            .getModule("toolbar")
            .container.addEventListener("mousedown", onQuillToolbarMouseDown);
        }
      }
    });
    return () => {
      isMounted = false;
      if (quillRef && quillRef.current) {
        quillRef.current.editor
          .getModule("toolbar")
          .container.removeEventListener("mousedown", onQuillToolbarMouseDown);
      }
    };
  }, []);

  React.useEffect(() => {
    setContextKey(pageId());
  }, []);

  const onChange = (newVal: string, idx: number = 0) => {
    if (!quillLoaded) {
      return;
    }
    doc.setData({text: newVal});
  };

  if (!ReactQuill || !quillLoaded) {
    return <div>Loading...</div>;
  }
  return (
    <div
      onFocus={() => !showQuillToolbar && setShowQuillToolbar(true)}
    >
      {props.label && <h6>{props.label}</h6>}
      <ReactQuill
        ref={quillRef}
        theme={props.quillTheme || "snow"}
        className={clsx(
          styles.quillAnswer,
          showQuillToolbar ? undefined : "disable-toolbar",
          hasTextEdits ? styles.edited : undefined
        )}
        value={doc.data.text || ''}
        onChange={(content, _delta, _source, editor) => {
          onChange(content);
        }}
        modules={{
          toolbar: [
            [{ header: [1, 2, 3, false] }],
            ["bold", "italic", "underline"], // toggled buttons
            [{ color: [] }, { background: [] }], // dropdown with defaults from theme
            [{ list: "ordered" }, { list: "bullet" }],
          ],
        }}
        placeholder={props.placeholder || "✍️ Antwort..."}
      />
    </div>
  );
});

export default AnswerV2;
