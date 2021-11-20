import * as React from 'react';
import { observer } from 'mobx-react-lite';
import { TextProps } from '.';
import { useStore } from '../../stores/hooks';
import Text from '../../models/Answer/Text';
import QuillEditor from '../shared/QuillEditor';

const TextAnswer = observer((props: TextProps) => {
    const store = useStore('documentStore');
    const doc = store.find<Text>(props.webKey);

    if (!doc.loaded) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            {props.label && <h6>{props.label}</h6>}
            <QuillEditor model={doc} {...props} />
        </div>
    );
});

export default TextAnswer;
