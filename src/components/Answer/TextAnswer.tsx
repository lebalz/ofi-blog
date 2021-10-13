import * as React from "react";
import styles from "./Answer.module.scss";
import clsx from "clsx";
import { observer } from "mobx-react-lite";
import { DocumentContext } from "./AnswerWrapper";
import {TextProps, Types} from '.';

var ReactQuill: any | undefined = undefined;

const loadQuill = (callback) => {
  if (ReactQuill) {
    return callback();
  }
  Promise.all([
    import("react-quill"),
    import("quill"),
    import("quill-image-compress"),
    import("react-quill/dist/quill.snow.css"),
    import("react-quill/dist/quill.bubble.css"),
  ]).then((packages) => {
    ReactQuill = packages[0].default;
    const Quill = packages[1].default;
    const ImageCompress = packages[2].default;
    Quill.register("modules/imageCompress", ImageCompress);
    callback();
  });
};

const TextAnswer = observer((props: TextProps) => {
  const [showQuillToolbar, setShowQuillToolbar] = React.useState(false);
  const [quillLoaded, setQuillLoaded] = React.useState(false);
  const quillRef = React.useRef(null);
  const doc = React.useContext(DocumentContext);

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

  const onChange = (newVal: string, idx: number = 0) => {
    if (!quillLoaded) {
      return;
    }
    doc.setData({ value: newVal, type: 'text' });
  };

  if (!ReactQuill || !quillLoaded) {
    return <div>Loading...</div>;
  }
  return (
    <div onFocus={() => !showQuillToolbar && setShowQuillToolbar(true)}>
      {props.label && <h6>{props.label}</h6>}
      <ReactQuill
        ref={quillRef}
        theme="snow"
        readOnly={!doc.loaded || doc.isReadonly}
        className={clsx(
          styles.quillAnswer,
          showQuillToolbar ? undefined : "disable-toolbar"
        )}
        value={doc.loaded ? doc.data.value || "" : 'Laden...'}
        onChange={(content, _delta, _source, _editor) => {
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
            imageType: "image/jpeg", // default
            debug: true, // default
            suppressErrorLogging: false, // default
          },
        }}
        placeholder={(props.placeholder || "✍️ Antwort...")}
      />
    </div>
  );
});

export default TextAnswer;
