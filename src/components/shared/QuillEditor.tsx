import * as React from 'react';
import styles from './QuillEditor.module.scss';
import clsx from 'clsx';
import { observer } from 'mobx-react-lite';
import Loader from './Loader';

var ReactQuill: any | undefined = undefined;

export interface ToolbarOptions {
    bold?: boolean;
    italic?: boolean;
    underline?: boolean;
    h1?: boolean;
    h2?: boolean;
    h3?: boolean;
    color?: boolean;
    background?: boolean;
    ul?: boolean;
    ol?: boolean;
    formula?: boolean;
    image?: boolean;
}

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
    if (options.formula || options.image) {
        const visuals = [];
        if (options.formula) {
            visuals.push('formula')
        }
        if (options.image) {
            visuals.push('image')
        }
        toolbar.push(visuals);
    }
    return toolbar;
};

const loadQuill = (callback, options: ToolbarOptions = {}) => {
    if (ReactQuill) {
        return callback();
    }
    const loadLibs = [
        import('react-quill'),
        import('quill'),
        import('quill-image-compress'),
        import('react-quill/dist/quill.snow.css'),
    ];
    const importPosition: {[key: string]: number} = {
        'react-quill': 0,
        'quill': 1,
        'react-image-compress': 2
    }
    if (options.formula && !(window as any).katex) {
        importPosition['katex'] = loadLibs.length;
        loadLibs.push(
            import('katex'),
            import('katex/dist/katex.min.css')
        )
    }
    Promise.all(loadLibs).then((packages) => {
        ReactQuill = packages[importPosition['react-quill']].default;
        const Quill = packages[importPosition['quill']].default;
        const ImageCompress = packages[importPosition['react-image-compress']].default;
        if ('katex' in importPosition) {
            const katex = packages[importPosition['katex']].default;
            (window as any).katex = katex;
        }
        Quill.register('modules/imageCompress', ImageCompress);
        callback();
    });
};

export interface iTextData {
    text: React.ReactNode;
    setText: (text: React.ReactNode) => void;
    canUpdate: boolean;
    loaded: boolean;
    readonly?: boolean;
}

interface Props {
    model: iTextData;
    readonly?: boolean;
    monospace?: boolean;
    default?: string | React.ReactNode;
    toolbar?: ToolbarOptions;
    placeholder?: string;
}

const QuillEditor = observer((props: Props) => {
    const [showQuillToolbar, setShowQuillToolbar] = React.useState(false);
    const [quillLoaded, setQuillLoaded] = React.useState(false);
    const quillRef = React.useRef(null);
    const { model } = props;

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
        }, props.toolbar);
        return () => {
            isMounted = false;
            if (quillRef && quillRef.current) {
                quillRef.current.editor
                    .getModule('toolbar')
                    .container.removeEventListener('mousedown', onQuillToolbarMouseDown);
            }
        };
    }, [props]);

    const onChange = (newVal: string, idx: number = 0) => {
        if (props.readonly || !model.canUpdate) {
            return;
        }
        if (!quillLoaded) {
            return;
        }
        model.setText(newVal);
    };

    if (!ReactQuill || !quillLoaded || !model.loaded) {
        return <Loader />;
    }
    return (
        <div onFocus={() => !showQuillToolbar && setShowQuillToolbar(true)}>
            <ReactQuill
                ref={quillRef}
                theme="snow"
                readOnly={props.readonly || model.readonly}
                className={clsx(
                    styles.quillAnswer,
                    props.monospace && styles.monospace,
                    showQuillToolbar ? undefined : 'disable-toolbar'
                )}
                value={model.text || ''}
                onChange={(content, _delta, _source, _editor) => {
                    onChange(content);
                }}
                modules={{
                    toolbar: props.toolbar ? getToolbar(props.toolbar) : TOOLBAR,
                    imageCompress: {
                        quality: 0.5, // default
                        maxWidth: 1024, // default
                        maxHeight: 1024, // default
                        imageType: 'image/png', // default
                        debug: false, // default
                        suppressErrorLogging: false, // default
                    },
                }}
                placeholder={props.placeholder || '✍️ Antwort...'}
            />
        </div>
    );
});

export default QuillEditor;
