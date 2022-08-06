import * as React from 'react';
import styles from './QuillEditor.module.scss';
import clsx from 'clsx';
import { observer } from 'mobx-react-lite';
import Loader from './Loader';
import 'quill/dist/quill.snow.css'; // Add css for snow theme
import 'quill/dist/quill.bubble.css'; // Add css for snow theme
import { useQuill } from 'react-quilljs';
import { downscaleImage } from './quill-img-compress/downscaleImage';
import { file2b64 } from './quill-img-compress/file2b64';
import dropImage from './quill-img-compress/dropImage';
import config from './quill-img-compress/config';
import pasteImage from './quill-img-compress/pasteImage';

import ImageResize from './quill-img-resize';
import { FORMATS, getToolbar, TOOLBAR, ToolbarOptions } from './quillConfig';
import SaveService from '@site/src/models/SaveService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faSync } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { reaction } from 'mobx';

export interface iTextData {
    text: string;
    setText: (text: string) => void;
    canUpdate: boolean;
    loaded: boolean;
    readonly?: boolean;
    saveService: SaveService;
}

interface Props {
    model: iTextData;
    readonly?: boolean;
    monospace?: boolean;
    default?: string;
    toolbar?: ToolbarOptions;
    toolbarAdd?: ToolbarOptions;
    placeholder?: string;
    theme?: 'snow' | 'bubble';
}

const QuillEditor = observer((props: Props) => {
    const mounted = React.useRef(false);
    const { model } = props;

    const [initialLoad, setInitialLoad] = React.useState(false);
    const [showQuillToolbar, setShowQuillToolbar] = React.useState(false);
    const [processingImage, setProcessingImage] = React.useState(false);
    const [showSavedNotification, setShowSavedNotification] = React.useState(false);


    const modules = {
        toolbar: props.toolbar
            ? getToolbar(props.toolbar)
            : [...TOOLBAR, ...getToolbar(props.toolbarAdd || {})],
        imageResize: {
            handleStyles: {
                borderRadius: '50%',
            },
        },
    };
    const theme = props.theme || 'snow';
    const placeholder = props.placeholder || '✍️ Antwort...';
    const { quill, quillRef, Quill } = useQuill({ theme, modules, formats: FORMATS, placeholder });

    React.useEffect(() => {
        mounted.current = true;
        return () => {
            mounted.current = false;
        };
    }, []);

    React.useEffect(() => {
        let timeoutId: NodeJS.Timeout;
        const disposer = reaction(
            () => model.saveService.state,
            (current, last) => {
                if (last === 'save' && current === 'done') {
                    setShowSavedNotification(true);
                    timeoutId = setTimeout(() => {
                        setShowSavedNotification(false);
                        timeoutId = undefined;
                    }, 1500);
                }
            }
        );
        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
            disposer();
        };
    }, [model]);

    React.useEffect(() => {
        if (quill) {
            quill.on('text-change', (delta, oldDelta, source) => {
                model.setText(quill.root.innerHTML);
            });
        }
    }, [quill]);

    React.useEffect(() => {
        const onQuillToolbarMouseDown = (e: any) => {
            e.preventDefault();
        };
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
            const isMac = navigator.userAgent.includes('Mac');
            quill.keyboard.addBinding({
                key: 's',
                metaKey: isMac,
                ctrlKey: !isMac
            }, () => model.saveService.saveNow());
            setInitialLoad(true);
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
        if (!mounted.current || !quill) {
            return;
        }
        const range = quill.getSelection(true);
        quill.insertEmbed(range.index, 'image', url);
        range.index++;
        quill.setSelection(range, 'api');
        // add new line
        quill.insertText(range.index, '\n');
        range.index++;
        quill.setSelection(range, 'api');
    };

    const insertImage = async (img?: string) => {
        if (!img) {
            return setProcessingImage(false);
        }
        downscaleImage(img)
            .then((img) => {
                insertToEditor(img);
            })
            .catch(() => {
                console.log('Could not insert image');
            })
            .finally(() => {
                if (mounted.current) {
                    setProcessingImage(false);
                }
            });
    };

    // Open Dialog to select Image File
    const selectLocalImage = () => {
        const input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.setAttribute('accept', config.fileTypes.accept);
        input.click();

        input.onchange = () => {
            if (!input.files || input.files.length < 1) {
                return;
            }
            const file = input.files[0];
            setProcessingImage(true);
            file2b64(file).then(insertImage);
        };
    };

    const dropHandler = (event: DragEvent) => {
        dropImage(event).then(insertImage);
    };

    const pasteHandler = (event: ClipboardEvent) => {
        pasteImage(event).then(insertImage);
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
        /* Quill register method signature is => static register(path, target, overwrite = false)
        Set overwrite to true to avoid warning
        https://github.com/quilljs/quill/issues/2559#issuecomment-945605414 */
        Quill.register('modules/imageResize', ImageResize, true);
    }

    return (
        <div
            className={clsx(styles.quillEditor)}
            onFocus={() => !showQuillToolbar && setShowQuillToolbar(true)}
        >
            <div
                className={clsx(
                    'quill-editor-container',
                    styles.quillAnswer,
                    props.monospace && styles.monospace,
                    showQuillToolbar ? undefined : styles.disableToolbar
                )}
                style={{display: initialLoad ? undefined : 'none'}}
            >
                <div ref={quillRef} />
                {processingImage && <Loader caption="Bild Einfügen..." overlay />}
                <span style={{ minWidth: '1em' }} className={styles.saveIndicator}>
                    {model.saveService.state === 'save' && (
                        <FontAwesomeIcon icon={faSync as IconProp} style={{ color: '#3578e5' }} spin />
                    )}
                    {showSavedNotification && (
                        <FontAwesomeIcon icon={faCheckCircle as IconProp} style={{ color: 'var(--ifm-color-success)' }} />
                    )}
                </span>
            </div>
        </div>
    );
});

export default QuillEditor;
