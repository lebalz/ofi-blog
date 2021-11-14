import { observer } from 'mobx-react-lite';
import * as React from 'react';
import Script from '../../models/Script';
import { useStore } from '../../stores/hooks';
import styles from './styles.module.scss';

interface Props {
    webKey: string;
}

const Result = observer((props: Props) => {
    const store = useStore('documentStore');
    const pyScript = store.find<Script>(props.webKey);
    return (
        <div className={styles.brythonOut}>
            {pyScript.logMessages.length > 0 && (
                <pre style={{ overflowX: 'auto' }}>
                    {pyScript.logMessages.map((msg, idx) => {
                        return (
                            <code
                                key={idx}
                                style={{
                                    color:
                                        msg.type === 'stderr' ? 'var(--ifm-color-danger-darker)' : undefined,
                                }}
                            >
                                {msg.output}
                            </code>
                        );
                    })}
                </pre>
            )}
        </div>
    );
});

export default Result;
