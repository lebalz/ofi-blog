import * as React from 'react';
import styles from './QuillEditor.module.scss';
import clsx from 'clsx';
import { observer } from 'mobx-react-lite';
import Loader from './Loader';

import 'quill/dist/quill.snow.css'; // Add css for snow theme
import { useQuill } from 'react-quilljs';
import type { default as HeicType } from 'heic2any';
import { resolve } from 'node:path/win32';
import { downscaleImage } from './quill-img-compress/downscaleImage';

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
    code?: boolean;
    image?: boolean;
}

const TOOLBAR_BASE = [['bold', 'italic', 'underline']];

const TOOLBAR = [
    ...TOOLBAR_BASE,
    [{ header: [1, 2, 3, false] }],
    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ list: 'ordered' }, { list: 'bullet' }],
    ['image'],
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
            visuals.push('formula');
        }
        if (options.image) {
            visuals.push('image');
        }
        toolbar.push(visuals);
    }
    if (options.code) {
        toolbar.push(['code-block']);
    }
    return toolbar;
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
    toolbarAdd?: ToolbarOptions;
    placeholder?: string;
}

const QuillEditor = observer((props: Props) => {
    const mounted = React.useRef(false);
    const { model } = props;
    const theme = 'snow';
    // const theme = 'bubble';

    const modules = {
        toolbar: props.toolbar
            ? getToolbar(props.toolbar)
            : [...TOOLBAR, ...getToolbar(props.toolbarAdd || {})],
        // imageDrop: true
    };

    const onQuillToolbarMouseDown = (e: any) => {
        e.preventDefault();
    };
    const placeholder = props.placeholder || '✍️ Antwort...';

    const formats = [
        'bold',
        'italic',
        'underline',
        'strike',
        'align',
        'list',
        'indent',
        'size',
        'header',
        'link',
        'image',
        'video',
        'color',
        'background',
        'clean',
    ];

    const [showQuillToolbar, setShowQuillToolbar] = React.useState(false);
    const [heic2any, setHeic2Any] = React.useState<{ default: typeof HeicType }>(undefined);

    const counterRef = React.useRef();
    const { quill, quillRef, Quill } = useQuill({ theme, modules, formats, placeholder });

    React.useEffect(() => {
        if (quill) {
            quill.on('text-change', (delta, oldDelta, source) => {
                model.setText(quill.root.innerHTML);
            });
        }
    }, [quill]);

    React.useEffect(() => {
        mounted.current = true;

        const prom = import('heic2any')
            .then((module) => {
                if (module && mounted.current) {
                    setHeic2Any(module);
                }
            })
            .catch((err) => {
                console.log('Could not load heic2any', err);
            });

        return () => {
            mounted.current = false;
        };
    }, []);

    React.useEffect(() => {
        if (quill) {
            quill.clipboard.dangerouslyPasteHTML((model.text as string) || '');
            quill.blur();
            if (props.readonly) {
                quill.disable();
            }
            quill.getModule('toolbar').addHandler('image', selectLocalImage);
            quill.getModule('toolbar').container.addEventListener('mousedown', onQuillToolbarMouseDown);
        }
        return () => {
            if (quill) {
                quill
                    .getModule('toolbar')
                    .container.removeEventListener('mousedown', onQuillToolbarMouseDown);
            }
        };
    }, [quill, heic2any]);

    // Insert Image(selected by user) to quill
    const insertToEditor = (url) => {
        const range = quill.getSelection();
        quill.insertEmbed(range.index, 'image', url);
        range.index++;
        quill.setSelection(range, 'api');
        // add new line
        quill.insertText(range.index, "\n")
        range.index++;
        quill.setSelection(range, 'api');
    };

    // Open Dialog to select Image File
    const selectLocalImage = () => {
        const input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*,image/heic,image/heif');
        input.click();

        input.onchange = () => {
            let promise: Promise<Blob>;
            const file = input.files[0];
            if (file.type.toLowerCase() === 'image/heic' || file.type.toLowerCase() === 'image/heif') {
                if (heic2any) {
                    promise = heic2any.default({
                        blob: file,
                        toType: 'image/jpeg',
                        quality: 0.9,
                    }) as Promise<Blob>;
                }
            } else {
                promise = Promise.resolve(file);
            }
            if (promise) {
                promise.then((img) => {
                    const prom = new Promise(resolve => {
                        const reader = new FileReader();
                        reader.onload = e => {
                            resolve(e.target.result as string);
                        };
                        reader.readAsDataURL(img)
                    });
                    prom.then((img: string) => {
                        return downscaleImage(img, 1024, 1024, 'image/jpeg', undefined,undefined,0.5)
                    }).then(img => {
                        insertToEditor(img)
                    })
                })
            }

        };
    };

    if (Quill && !quill) {
        // Quill.register('modules/imageDrop', ImageDrop);
        // For execute this line only once.
        // Quill.register('modules/counter', function(quill, options) {
        // quill.on('text-change', function() {
        //     const text = quill.getText();
        //     // There are a couple issues with counting words
        //     // this way but we'll fix these later
        //     // counterRef.current.innerText = text.split(/\s+/).length;
        // });
        // });
    }

    return (
        <div
            className={clsx(styles.quillEditor)}
            onFocus={() => !showQuillToolbar && setShowQuillToolbar(true)}
        >
            <div
                className={clsx(
                    styles.quillAnswer,
                    props.monospace && styles.monospace,
                    showQuillToolbar ? undefined : styles.disableToolbar
                )}
            >
                <div ref={quillRef} />
                <div ref={counterRef} />
            </div>
        </div>
    );
});

export default QuillEditor;
