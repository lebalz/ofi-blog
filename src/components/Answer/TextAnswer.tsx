import * as React from 'react';
import styles from './Answer.module.scss';
import clsx from 'clsx';
import { observer } from 'mobx-react-lite';
import { TextProps, ToolbarOptions } from '.';
import { useStore } from '../../stores/hooks';
import Text from '../../models/Answer/Text';
import { runInAction } from 'mobx';

var ReactQuill: any | undefined = undefined;

const TOOLBAR_BASE = [['bold', 'italic', 'underline']];

const TOOLBAR = [
    ...TOOLBAR_BASE,
    [{ header: [1, 2, 3, false] }],
    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ list: 'ordered' }, { list: 'bullet' }],
];

const getToolbar = (options: ToolbarOptions) => {
    const toolbar = [];
    if (options.bold || options.italic || options.underline) {
        const marker = [];
        if (options.bold) {
            marker.push('bold');
        }
        if (options.italic) {
            marker.push('italic');
        }
        if (options.underline) {
            marker.push('underline');
        }
        toolbar.push(marker);
    }
    if (options.h1 || options.h2 || options.h3) {
        const h = [];
        if (options.h1) {
            h.push(1);
        }
        if (options.h2) {
            h.push(2);
        }
        if (options.h3) {
            h.push(3);
        }
        h.push(false);
        toolbar.push(h);
    }
    if (options.color || options.background) {
        const c = [];
        if (options.color) {
            c.push({ color: [] });
        }
        if (options.background) {
            c.push({ background: [] });
        }
        toolbar.push(c);
    }
    if (options.ul || options.ol) {
        const l = [];
        if (options.ol) {
            l.push({ list: 'ordered' });
        }
        if (options.ul) {
            l.push({ list: 'bullet' });
        }
        toolbar.push(l);
    }
    return toolbar;
};

const loadQuill = (callback) => {
    if (ReactQuill) {
        return callback();
    }
    Promise.all([
        import('react-quill'),
        import('quill'),
        import('quill-image-compress'),
        import('react-quill/dist/quill.snow.css'),
        import('react-quill/dist/quill.bubble.css'),
    ]).then((packages) => {
        ReactQuill = packages[0].default;
        const Quill = packages[1].default;
        const ImageCompress = packages[2].default;
        Quill.register('modules/imageCompress', ImageCompress);
        callback();
    });
};

const TextAnswer = observer((props: TextProps) => {
    const [showQuillToolbar, setShowQuillToolbar] = React.useState(false);
    const [quillLoaded, setQuillLoaded] = React.useState(false);
    const quillRef = React.useRef(null);
    const store = useStore('documentStore');
    const doc = store.find<Text>(props.webKey);

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
                        .getModule('toolbar')
                        .container.addEventListener('mousedown', onQuillToolbarMouseDown);
                }
            }
        });
        return () => {
            isMounted = false;
            if (quillRef && quillRef.current) {
                quillRef.current.editor
                    .getModule('toolbar')
                    .container.removeEventListener('mousedown', onQuillToolbarMouseDown);
            }
        };
    }, []);

    const onChange = (newVal: string, idx: number = 0) => {
        if (props.isLegacy || !doc.loaded) {
            return;
        }
        if (!quillLoaded) {
            return;
        }
        runInAction(() => {
            doc.value = newVal;
        });
    };

    if (!ReactQuill || !quillLoaded || !doc.loaded) {
        return <div>Loading...</div>;
    }
    return (
        <div onFocus={() => !showQuillToolbar && setShowQuillToolbar(true)}>
            {props.label && <h6>{props.label}</h6>}
            <ReactQuill
                ref={quillRef}
                theme="snow"
                readOnly={props.isLegacy || doc.readonly}
                className={clsx(
                    styles.quillAnswer,
                    props.monospace && styles.monospace,
                    showQuillToolbar ? undefined : 'disable-toolbar'
                )}
                value={props.isLegacy ? doc.legacyData.value : doc.value || ''}
                onChange={(content, _delta, _source, _editor) => {
                    onChange(content);
                }}
                modules={{
                    toolbar: props.toolbar ? getToolbar(props.toolbar) : TOOLBAR,
                    imageCompress: {
                        quality: 0.5, // default
                        maxWidth: 1024, // default
                        maxHeight: 1024, // default
                        imageType: 'image/jpeg', // default
                        debug: false, // default
                        suppressErrorLogging: false, // default
                    },
                }}
                placeholder={props.placeholder || '✍️ Antwort...'}
            />
        </div>
    );
});

export default TextAnswer;
