import * as React from 'react';
import styles from './QuillEditor.module.scss';
import clsx from 'clsx';
import { observer } from 'mobx-react-lite';
import Loader from './Loader';

import 'quill/dist/quill.snow.css'; // Add css for snow theme
import { useQuill } from 'react-quilljs';
// import type { default as HeicType } from 'heic2any';
// import { resolve } from 'node:path/win32';
import { downscaleImage } from './quill-img-compress/downscaleImage';
import { file2b64 } from './quill-img-compress/file2b64';
import dropImage from './quill-img-compress/dropImage';
import config from './quill-img-compress/config';
import pasteImage from './quill-img-compress/pasteImage';

import ImageResize from 'quill-image-resize-module-react';
import Resize from './quill-img-resize/Resize';
import Size from './quill-img-resize/Size';
import Toolbar from './quill-img-resize/Toolbar';

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
    [{ align: [] }],
    ['image'],
];

const isTouchDevice = ('ontouchstart' in window || navigator.maxTouchPoints > 0);

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
        'width',
        'header',
        'link',
        'image',
        'video',
        'color',
        'background',
        'clean',
        'style',
        'code-block',
        'indent',
        'blockquote',
        'script',
        'code',
    ];

    const [showQuillToolbar, setShowQuillToolbar] = React.useState(false);
    const hasCursor = matchMedia('(pointer:fine)').matches;
    const resizeModules: any[] = [Toolbar]
    if (hasCursor) {
        resizeModules.push(Resize);
        resizeModules.push(Size);
    }
    const modules = {
        toolbar: props.toolbar
            ? getToolbar(props.toolbar)
            : [...TOOLBAR, ...getToolbar(props.toolbarAdd || {})],
        imageResize: {
            modules: resizeModules,
            handleStyles: {
                borderRadius: '50%'
            },
        },
        // imageDrop: true
    };
    const { quill, quillRef, Quill } = useQuill({ theme, modules, formats, placeholder });

    React.useEffect(() => {
        mounted.current = true;
        return () => {
            mounted.current = false;
        };
    }, []);

    React.useEffect(() => {
        if (quill) {
            quill.on('text-change', (delta, oldDelta, source) => {
                // console.log(quill.getText()); // Get text only
                // console.log(quill.getContents()); // Get delta contents
                // console.log(quill.root.innerHTML); // Get innerHTML using quill
                // console.log(quillRef.current.firstChild.innerHTML); // Get innerHTML using quillRef
                model.setText(quill.root.innerHTML);
            });
        }
    }, [quill]);

    React.useEffect(() => {
        if (quill) {
            quill.clipboard.dangerouslyPasteHTML((model.text as string) || '');
            quill.blur();
            if (props.readonly) {
                quill.disable();
            }
            quill.getModule('toolbar').addHandler('image', selectLocalImage);
            quill.root.addEventListener('drop', dropHandler);
            quill.root.addEventListener('paste', pasteHandler);
            quill.getModule('toolbar').container.addEventListener('mousedown', onQuillToolbarMouseDown);
        }
        return () => {
            if (quill) {
                quill
                    .getModule('toolbar')
                    .container.removeEventListener('mousedown', onQuillToolbarMouseDown);
            }
        };
    }, [quill]);

    // Insert Image(selected by user) to quill
    const insertToEditor = (url) => {
        if (!mounted.current) {
            return;
        }
        const range = quill.getSelection();
        quill.insertEmbed(range.index, 'image', url);
        range.index++;
        quill.setSelection(range, 'api');
        // add new line
        quill.insertText(range.index, '\n');
        range.index++;
        quill.setSelection(range, 'api');
    };

    // Open Dialog to select Image File
    const selectLocalImage = () => {
        const input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.setAttribute('accept', config.fileTypes.accept);
        input.click();

        input.onchange = () => {
            const file = input.files[0];
            file2b64(file)
                .then((img: string) => {
                    return downscaleImage(img);
                })
                .then((img) => {
                    insertToEditor(img);
                });
        };
    };

    const dropHandler = (event: DragEvent) => {
        dropImage(event)
            .then((img: string) => {
                return downscaleImage(img);
            })
            .then((img) => {
                insertToEditor(img);
            });
    };

    const pasteHandler = (event: ClipboardEvent) => {
        pasteImage(event)
            .then((img: string) => {
                return downscaleImage(img);
            })
            .then((img) => {
                insertToEditor(img);
            });
    };

    if (Quill && !quill) {
        var BaseImageFormat = Quill.import('formats/image');
        const ImageFormatAttributesList = ['alt', 'height', 'width', 'style'];

        class ImageFormat extends BaseImageFormat {
            static formats(domNode) {
                return ImageFormatAttributesList.reduce(function (formats, attribute) {
                    if (domNode.hasAttribute(attribute)) {
                        formats[attribute] = domNode.getAttribute(attribute);
                    }
                    return formats;
                }, {});
            }
            format(name, value) {
                if (ImageFormatAttributesList.indexOf(name) > -1) {
                    if (value) {
                        this.domNode.setAttribute(name, value);
                    } else {
                        this.domNode.removeAttribute(name);
                    }
                } else {
                    super.format(name, value);
                }
            }
        }

        Quill.register(ImageFormat, true);
        (window as any).Quill = Quill;
        // For execute this line only once.
        Quill.register('modules/imageResize', ImageResize);
        // Quill.register('modules/imageDrop', ImageDrop);
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
            </div>
        </div>
    );
});

export default QuillEditor;
