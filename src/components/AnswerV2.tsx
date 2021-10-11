import * as React from "react";
import styles from "./Answer.module.scss";
import { getItem, setItem, _4_YEARS } from "../helpers/storage";
import clsx from "clsx";
import { useStore } from "../stores/hooks";
import { observer } from "mobx-react-lite";
import useIsBrowser from "@docusaurus/useIsBrowser";

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
  Promise.all([
    import("react-quill"),
    import("quill"),
    import('quill-image-compress'),
    import("react-quill/dist/quill.snow.css"),
    import("react-quill/dist/quill.bubble.css")
  ]).then((packages) => {
    ReactQuill = packages[0].default;
    const Quill = packages[1].default;
    const ImageCompress = packages[2].default;
    Quill.register('modules/imageCompress', ImageCompress)
    callback();
  })
};

const AnswerV2 = observer((props: Base) => {
  const [showQuillToolbar, setShowQuillToolbar] = React.useState(false);
  const [hasTextEdits, setHasTextEdits] = React.useState(false);

  const [quillLoaded, setQuillLoaded] = React.useState(false);

  const quillRef = React.useRef(null);


  const documentStore = useStore('documentStore');
  const inBrowser = useIsBrowser();
  const doc = inBrowser ? documentStore.getOrCreateDocument<TextDoc>(`${pageId()}_${props.id}`, {text: props.default as string}) : {setData: (v) => undefined, data: {text: ''}}

  const onQuillToolbarMouseDown = (e: any) => {
    e.preventDefault();
  };

  React.useEffect(() => {
    let isMounted = true;
    loadQuill(() => {
      if (isMounted) {
        setQuillLoaded(true);
        if (quillRef && quillRef.current) {
          (quillRef.current.editor as Quill)
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
          imageCompress: {
            quality: 0.5, // default
            maxWidth: 1024, // default
            maxHeight: 1024, // default
            imageType: 'image/jpeg', // default
            debug: true, // default
            suppressErrorLogging: false, // default
          }
        }}
        placeholder={props.placeholder || "✍️ Antwort..."}
      />
    </div>
  );
});

export default AnswerV2;
