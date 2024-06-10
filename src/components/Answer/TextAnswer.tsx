import * as React from 'react';
import { observer } from 'mobx-react-lite';
import { TextProps } from '.';
import { useStore } from '../../stores/hooks';
import Text from '../../models/Answer/Text';
import QuillEditor from '../shared/QuillEditor';
import Loader from '../shared/Loader';

const TextAnswer = observer((props: TextProps) => {
    const store = useStore('documentStore');
    const doc = store.find<Text>(props.webKey);

    if (!doc.isLoaded) {    
        return <Loader />;
    }
    return (
        <div className='notranslate'>
            {props.label && <h6>{props.label}</h6>}
            <QuillEditor model={doc} {...props} readonly={doc.readonly} />
        </div>
    );
});

export default TextAnswer;
