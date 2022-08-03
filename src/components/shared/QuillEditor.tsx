import useIsBrowser from '@docusaurus/useIsBrowser';
import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { ToolbarOptions } from './quillConfig';
import type {default as QuillType, iTextData} from './QuillEditor_';
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
    const [quill, setQuill] = React.useState<{default: typeof QuillType}>();
    React.useEffect(() => {
        import('./QuillEditor_').then((quill) => {
            setQuill(quill)
        })
    }, []);
    if (!useIsBrowser()) {
        return <div>{props.model.text}</div>
    }
    if (quill) {
        return <quill.default {...props} />
    }
    return <div>Lade Editor</div>

});

export default QuillEditor;
