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
import useIsBrowser from '@docusaurus/useIsBrowser';
import { FORMATS, getToolbar, TOOLBAR, ToolbarOptions } from './config';

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

    const [showQuillToolbar, setShowQuillToolbar] = React.useState(false);
    const [processingImage, setProcessingImage] = React.useState(false);

    const resizeModules: any[] = [Toolbar]
    // if it has a fine cursor
    if (useIsBrowser() && matchMedia('(pointer:fine)').matches) {
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
    };
    const theme = 'snow';
    const placeholder = props.placeholder || '✍️ Antwort...';
    const { quill, quillRef, Quill } = useQuill({ theme, modules, formats: FORMATS, placeholder });

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

    const onQuillToolbarMouseDown = (e: any) => {
        e.preventDefault();
    };
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

    // return early server side
    if (!useIsBrowser()) {
        return (
            <div
                className={clsx(styles.quillEditor)}
            >
                <Loader caption='Editor laden...' overlay />
            </div>

        )
    }
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
                {processingImage && <Loader caption='Bild Einfügen...' overlay />}
            </div>
        </div>
    );
});

export default QuillEditor;
