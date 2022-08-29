import useIsBrowser from '@docusaurus/useIsBrowser';
import { observer } from 'mobx-react-lite';
import * as React from 'react';
import type {default as QuillType, Props} from './QuillEditor_';

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
    return <div></div>

});

export default QuillEditor;
